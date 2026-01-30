

## Plano: Sistema Automático de 410 para URLs Inválidas

### Problema
Com mais de 2 milhões de URLs maliciosas, é impossível listar cada uma no `.htaccess`. Precisamos de uma solução que automaticamente:
1. Identifique se uma URL é válida (rota do app ou post real do blog)
2. Retorne **410 Gone** para todas as URLs inválidas

---

### Estratégia: Edge Function "URL Validator"

Criar uma Edge Function que recebe qualquer URL e decide se deve retornar a página ou **410 Gone**.

```text
+------------------+      +-----------------------+      +----------------+
|   .htaccess      | ---> |  Edge Function        | ---> |  410 Gone      |
|   (catch-all)    |      |  validate-url         |      |  ou Redirect   |
+------------------+      +-----------------------+      +----------------+
                                    |
                                    v
                          +-------------------+
                          | Lista de rotas    |
                          | válidas + consulta|
                          | ao banco (blog)   |
                          +-------------------+
```

---

### Implementação

#### 1. Criar Edge Function `validate-url`

**Arquivo:** `supabase/functions/validate-url/index.ts`

**Lógica:**
```typescript
// Lista de rotas estáticas válidas
const validStaticRoutes = [
  '/', '/servicos', '/paineis-de-led', '/campanha',
  '/letreiros', '/totens', '/estruturas', '/manutencao',
  '/pecas', '/sobre', '/contato', '/blog', '/auth',
  '/politica-de-privacidade', '/termos-de-uso',
  '/user', '/user/blog', '/user/seo'
]

// Verificar se é rota válida
function isValidRoute(path) {
  // 1. Rota estática exata
  if (validStaticRoutes.includes(path)) return true
  
  // 2. Post do blog: /blog/{slug}
  if (path.startsWith('/blog/')) {
    const slug = path.replace('/blog/', '')
    // Consultar banco para verificar se post existe
    return await checkBlogPostExists(slug)
  }
  
  // 3. Arquivos estáticos (assets, imagens)
  if (path.match(/\.(js|css|png|jpg|svg|ico|webp|woff2?)$/)) {
    return true
  }
  
  return false
}
```

**Resposta:**
- URL válida: Redirect 302 para a URL original (permite SPA carregar)
- URL inválida: Retorna HTML com status **410 Gone**

---

#### 2. Atualizar `.htaccess`

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Sitemap
  RewriteRule ^sitemap\.xml$ https://...sitemap [R=301,L]

  # Arquivos estáticos reais (assets)
  RewriteCond %{REQUEST_FILENAME} -f
  RewriteRule ^ - [L]

  # Rotas estáticas conhecidas - servir SPA diretamente
  RewriteRule ^(servicos|paineis-de-led|campanha|letreiros|totens|estruturas|manutencao|pecas|sobre|contato|blog|auth|politica-de-privacidade|termos-de-uso|user)/?$ index.html [L]
  RewriteRule ^(user/(blog|seo))/?$ index.html [L]

  # Blog posts - validar via Edge Function
  RewriteRule ^blog/(.+)$ https://...validate-url?path=/blog/$1 [L]

  # Qualquer outra rota - retorna 410
  RewriteRule ^(.+)$ https://...validate-url?path=/$1 [L]

  # Home
  RewriteRule ^$ index.html [L]
</IfModule>
```

---

#### 3. Cache para Performance

A Edge Function pode usar cache para evitar consultas repetidas:

```typescript
// Cabeçalhos de cache
headers: {
  'Cache-Control': 'public, max-age=3600' // 1 hora
}
```

Para URLs que retornam 410, o cache ajuda a reduzir chamadas repetidas do Google.

---

#### 4. Atualizar Página 410 (Visual)

**Arquivo:** `src/pages/NotFound.tsx` (renomear para `Gone.tsx`)

- Mudar "404" para "410"
- Texto: "Esta página foi permanentemente removida"
- Manter botões de navegação

---

### Fluxo Completo

| URL Acessada | Resultado |
|--------------|-----------|
| `/` | Serve `index.html` (rota estática) |
| `/servicos` | Serve `index.html` (rota estática) |
| `/blog/meu-post-real` | Edge Function valida, existe → serve SPA |
| `/blog/post-hackeado` | Edge Function valida, não existe → **410 Gone** |
| `/wp-admin/xyz` | Edge Function → **410 Gone** |
| `/random-spam-url` | Edge Function → **410 Gone** |

---

### Vantagens

1. **Automático**: Não precisa listar 2 milhões de URLs
2. **Inteligente**: Valida posts do blog em tempo real
3. **Performático**: Cache reduz consultas ao banco
4. **SEO Correto**: Google recebe status 410 real, acelera desindexação
5. **Manutenção Zero**: Novas rotas são adicionadas apenas no código

---

### Considerações de Custo

- Edge Functions têm limite gratuito de 500K invocações/mês
- Com 2M+ URLs, Google vai recrawlar gradualmente
- Cache de 1 hora reduz significativamente as chamadas
- Após desindexação inicial, volume cairá drasticamente

---

### Resumo de Arquivos

| Arquivo | Ação |
|---------|------|
| `supabase/functions/validate-url/index.ts` | Criar - validador de URLs |
| `supabase/config.toml` | Adicionar função sem JWT |
| `public/.htaccess` | Atualizar regras de rewrite |
| `src/pages/NotFound.tsx` | Atualizar visual para 410 |

