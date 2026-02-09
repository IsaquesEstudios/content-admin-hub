

## Plano: Migrar de CSR para SSG com vite-react-ssg + Coolify/Nginx

### Visao Geral

Transformar a aplicacao de Client-Side Rendering (CSR) para Static Site Generation (SSG) usando `vite-react-ssg`. As paginas do blog serao pre-renderizadas no build com dados do banco, e toda a infraestrutura de deploy migrara de Apache/DirectAdmin para Coolify/VPS com Nginx.

---

### Desafios Identificados

1. O arquivo `src/integrations/supabase/client.ts` e auto-gerado e NAO pode ser editado -- ele usa `localStorage` diretamente, o que vai quebrar durante o build SSG (Node.js nao tem `localStorage`)
2. Varios componentes usam APIs do navegador (`window`, `localStorage`, `document`) que nao existem no Node.js
3. O `AuthContext` depende de `window.location.origin`
4. As rotas precisam migrar de JSX (`<Route>`) para o formato `RouteRecord[]`
5. O deploy precisa migrar de FTP/Apache para Coolify/Nginx
6. O `.htaccess` sera substituido por configuracao Nginx

---

### Etapa 1: Dependencias

**Instalar:**
- `vite-react-ssg` -- motor de SSG
- `isomorphic-dompurify` -- sanitizacao de HTML segura para SSR/SSG

**package.json -- alterar script de build:**
```json
"build": "vite-react-ssg build"
```

---

### Etapa 2: Cliente Supabase seguro para SSR

Como o arquivo `src/integrations/supabase/client.ts` NAO pode ser editado (auto-gerado), sera criado um **cliente separado** para uso exclusivo nos loaders de SSG (build-time):

**Novo arquivo:** `src/lib/supabase-ssr.ts`

```typescript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase env vars missing during build')
}

export const supabaseSSR = createClient(supabaseUrl, supabaseKey, {
  auth: {
    storage: {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
    },
    persistSession: false,
    autoRefreshToken: false,
  },
})
```

**Regra de uso:**
- Loaders (build-time) usam `supabaseSSR`
- Componentes no navegador continuam usando `supabase` do client.ts original

---

### Etapa 3: Guardas SSR nos Componentes

Componentes que usam APIs do navegador precisam de protecao `typeof window !== 'undefined'`:

| Componente | API usada | Correcao |
|------------|-----------|----------|
| `AuthContext.tsx` | `localStorage`, `window.location` | Envolver em `typeof window` check |
| `CookieConsent.tsx` | `localStorage` | Envolver em `typeof window` check |
| `ScrollToTop.tsx` | `window.scrollTo` | Envolver em `typeof window` check |
| `Header.tsx` | `window.addEventListener("scroll")` | Envolver em `typeof window` check |
| `NotFound.tsx` | `window.history.back()` | Envolver em `typeof window` check |

O `AuthContext` recebera tratamento especial: durante SSG, retornara valores default (sem usuario, sem admin) para nao quebrar o build.

---

### Etapa 4: Reestruturar Rotas (App.tsx + main.tsx)

**`src/App.tsx`** -- Exportar rotas como `RouteRecord[]`:

```typescript
import type { RouteRecord } from 'vite-react-ssg'
import { lazy } from 'react'

const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
// ... demais paginas

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout><Index /></Layout>,
  },
  {
    path: '/blog',
    element: <Layout><Blog /></Layout>,
    entry: 'src/pages/Blog.tsx',
    loader: blogListLoader,
  },
  {
    path: '/blog/:slug',
    element: <Layout><BlogPost /></Layout>,
    entry: 'src/pages/BlogPost.tsx',
    loader: blogPostLoader,
    getStaticPaths: async () => {
      // Busca todos os slugs publicados no build
      const { data } = await supabaseSSR
        .from('blog_posts')
        .select('slug')
        .eq('is_published', true)
      return data?.map(p => `/blog/${p.slug}`) || []
    },
  },
  // rotas admin (sem SSG, carregamento lazy)
  { path: '/auth', element: <Auth /> },
  { path: '/user', element: <AdminDashboard /> },
  // ... etc
  { path: '*', element: <NotFound /> },
]
```

**`src/main.tsx`** -- Usar ViteReactSSG:

```typescript
import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './App'
import './index.css'

export const createRoot = ViteReactSSG(
  { routes },
  ({ isClient }) => {
    // Setup que roda tanto no server quanto no client
    // QueryClient, AuthProvider, etc. serao configurados aqui
  }
)
```

---

### Etapa 5: Loaders para Blog (dados no build)

**`src/pages/Blog.tsx`** -- Adicionar loader:

```typescript
import { supabaseSSR } from '@/lib/supabase-ssr'
import { useLoaderData } from 'react-router-dom'

// Executa no BUILD, nao no navegador
export async function loader() {
  const { data } = await supabaseSSR
    .from('blog_posts')
    .select('id, title, slug, excerpt, featured_image, created_at')
    .eq('is_published', true)
    .order('created_at', { ascending: false })
  return { posts: data || [] }
}

export default function Blog() {
  const preloaded = useLoaderData() as { posts: BlogPost[] } | undefined
  const [posts, setPosts] = useState(preloaded?.posts || [])
  const [loading, setLoading] = useState(!preloaded?.posts)
  // Fallback SPA: se nao tiver dados pre-carregados, busca no cliente
  // ...
}
```

**`src/pages/BlogPost.tsx`** -- Adicionar loader + Head para SEO:

```typescript
import { Head } from 'vite-react-ssg'

export async function loader({ params }) {
  const { data } = await supabaseSSR
    .from('blog_posts')
    .select('*')
    .eq('slug', params.slug)
    .eq('is_published', true)
    .maybeSingle()
  return { post: data }
}

export default function BlogPost() {
  const preloaded = useLoaderData() as { post: BlogPost | null } | undefined
  // ... usar preloaded.post com fallback SPA

  return (
    <>
      <Head>
        <title>{post.title} | Eclipse LED</title>
        <meta name="description" content={post.excerpt || ''} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt || ''} />
        {post.featured_image && (
          <meta property="og:image" content={post.featured_image} />
        )}
      </Head>
      {/* conteudo da pagina */}
    </>
  )
}
```

---

### Etapa 6: Configuracao do Vite

**`vite.config.ts`** -- Adicionar opcoes SSG:

```typescript
export default defineConfig(({ mode }) => ({
  // ... configuracao existente
  ssgOptions: {
    script: 'defer',        // Evita race condition do manifest
    formatting: 'minify',
    dirStyle: 'directory',  // /blog/slug -> /blog/slug/index.html
  },
  ssr: {
    noExternal: ['@tanstack/react-query'],
  },
}))
```

---

### Etapa 7: Configuracao Nginx (Coolify)

**Novo arquivo:** `nginx.conf` (na raiz do projeto)

```nginx
server {
    listen 80;
    server_name eclipseled.com.br;
    root /app/dist;
    index index.html;

    # Manifest JSON do vite-react-ssg (evita 404)
    location ~* /static-loader-data-manifest.*\.json$ {
        default_type application/json;
        return 200 '{}';
    }

    # Sitemap dinamico via Edge Function
    location = /sitemap.xml {
        return 301 https://fuagnnrpnjpnrvudmtie.supabase.co/functions/v1/sitemap;
    }

    # Arquivos estaticos com cache longo
    location ~* \.(js|css|png|jpg|jpeg|gif|svg|ico|webp|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        try_files $uri =404;
    }

    # Rotas estaticas conhecidas (servir HTML pre-renderizado ou SPA)
    location / {
        try_files $uri $uri.html $uri/index.html /index.html;
    }
}
```

**Importante:** O sistema de 410 que temos via `validate-url` continuara funcionando, mas agora via Nginx ao inves de `.htaccess`. Adicionaremos uma regra no Nginx para capturar URLs desconhecidas e redirecionar para a Edge Function.

---

### Etapa 8: Atualizar Deploy (GitHub Actions)

Atualizar o workflow para build com SSG e deploy via Coolify (ou manter FTP se necessario durante a transicao):

```yaml
- name: Build do Projeto (SSG)
  run: npm run build  # agora executa vite-react-ssg build
  env:
    VITE_SUPABASE_URL: ${{ secrets.VITE_SUPABASE_URL }}
    VITE_SUPABASE_PUBLISHABLE_KEY: ${{ secrets.VITE_SUPABASE_PUBLISHABLE_KEY }}
```

Se o Coolify estiver conectado ao repositorio, o deploy sera automatico ao fazer push na branch main.

---

### Etapa 9: Manter .htaccess como Fallback

O `.htaccess` sera mantido no projeto para compatibilidade, mas nao sera mais a configuracao principal. O `nginx.conf` assume o controle.

---

### Resumo de Arquivos

| Arquivo | Acao |
|---------|------|
| `package.json` | Adicionar deps + alterar script build |
| `vite.config.ts` | Adicionar ssgOptions + ssr.noExternal |
| `src/main.tsx` | Substituir createRoot por ViteReactSSG |
| `src/App.tsx` | Exportar routes como RouteRecord[] |
| `src/lib/supabase-ssr.ts` | Criar -- cliente SSR-safe para loaders |
| `src/pages/Blog.tsx` | Adicionar loader + useLoaderData |
| `src/pages/BlogPost.tsx` | Adicionar loader + useLoaderData + Head SEO |
| `src/contexts/AuthContext.tsx` | Adicionar guardas SSR |
| `src/components/CookieConsent.tsx` | Adicionar guarda SSR |
| `src/components/ScrollToTop.tsx` | Adicionar guarda SSR |
| `src/components/layout/Header.tsx` | Adicionar guarda SSR |
| `src/pages/NotFound.tsx` | Adicionar guarda SSR |
| `nginx.conf` | Criar -- configuracao Nginx para Coolify |
| `.github/workflows/deploy.yml` | Atualizar para SSG build |

---

### Resultado Final

```text
Antes (CSR):
  Crawler acessa /blog/meu-post
    -> Recebe index.html vazio
    -> Precisa executar JavaScript
    -> Conteudo pode nao ser indexado

Depois (SSG):
  Crawler acessa /blog/meu-post
    -> Recebe HTML completo com titulo, conteudo, meta tags
    -> Indexacao imediata
    -> Melhor SEO, melhor performance (Core Web Vitals)
```

---

### Riscos e Mitigacoes

| Risco | Mitigacao |
|-------|----------|
| Build quebra por falta de env vars | Validacao explicita no supabase-ssr.ts |
| localStorage crash no SSG | Cliente SSR separado com storage mock |
| Posts novos nao aparecem no SSG | Fallback SPA com useQuery no cliente |
| Edge Functions de 410 param de funcionar | Regra Nginx redireciona para validate-url |
| Muitos blog posts = build lento | Apenas posts publicados sao pre-renderizados |

---

### Configuracao no Coolify

Na interface do Coolify, configurar:
- **Build Command:** `npm run build`
- **Publish Directory:** `dist`
- **Static Site:** SIM
- **Variaveis de Ambiente:** `VITE_SUPABASE_URL` e `VITE_SUPABASE_PUBLISHABLE_KEY`

