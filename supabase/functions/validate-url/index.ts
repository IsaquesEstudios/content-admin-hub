import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const SITE_URL = 'https://eclipseled.com.br'

// Lista de rotas estáticas válidas do SPA
const validStaticRoutes = [
  '/',
  '/servicos',
  '/paineis-de-led',
  '/campanha',
  '/letreiros',
  '/totens',
  '/estruturas',
  '/manutencao',
  '/pecas',
  '/sobre',
  '/contato',
  '/blog',
  '/auth',
  '/politica-de-privacidade',
  '/termos-de-uso',
  '/user',
  '/user/blog',
  '/user/seo'
]

// HTML da página 410 Gone
const gone410Html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="noindex, nofollow">
  <title>410 - Página Removida | Eclipse LED</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
      color: #fff;
      padding: 20px;
    }
    .container {
      text-align: center;
      max-width: 500px;
    }
    .code {
      font-size: 8rem;
      font-weight: 700;
      background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      line-height: 1;
      margin-bottom: 1rem;
    }
    h1 {
      font-size: 1.75rem;
      margin-bottom: 1rem;
      color: #fff;
    }
    p {
      color: #a0a0a0;
      margin-bottom: 2rem;
      line-height: 1.6;
    }
    .buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }
    a {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 500;
      transition: all 0.2s;
    }
    .primary {
      background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
      color: #fff;
    }
    .primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(255, 107, 53, 0.3);
    }
    .secondary {
      background: rgba(255, 255, 255, 0.1);
      color: #fff;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    .secondary:hover {
      background: rgba(255, 255, 255, 0.15);
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="code">410</div>
    <h1>Página Removida</h1>
    <p>Esta página foi permanentemente removida e não está mais disponível.</p>
    <div class="buttons">
      <a href="${SITE_URL}" class="primary">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        Voltar ao Início
      </a>
      <a href="${SITE_URL}/contato" class="secondary">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        Contato
      </a>
    </div>
  </div>
</body>
</html>`

// Verifica se um post do blog existe
async function checkBlogPostExists(slug: string, supabaseUrl: string, supabaseKey: string): Promise<boolean> {
  const supabase = createClient(supabaseUrl, supabaseKey)
  const { data, error } = await supabase
    .from('blog_posts')
    .select('id')
    .eq('slug', slug)
    .eq('is_published', true)
    .maybeSingle()

  if (error) {
    console.error('Error checking blog post:', error)
    return false
  }

  return data !== null
}

// Verifica se a URL é válida
async function isValidUrl(path: string, supabaseUrl: string, supabaseKey: string): Promise<boolean> {
  // Normalizar path (remover trailing slash exceto para root)
  const normalizedPath = path === '/' ? '/' : path.replace(/\/$/, '')

  // 1. Rota estática exata
  if (validStaticRoutes.includes(normalizedPath)) {
    return true
  }

  // 2. Post do blog: /blog/{slug}
  if (normalizedPath.startsWith('/blog/')) {
    const slug = normalizedPath.replace('/blog/', '')
    // Ignorar se for apenas "/blog/" sem slug
    if (slug && slug.length > 0) {
      return await checkBlogPostExists(slug, supabaseUrl, supabaseKey)
    }
  }

  // 3. Arquivos estáticos (assets, imagens, etc.)
  if (/\.(js|css|png|jpg|jpeg|gif|svg|ico|webp|woff|woff2|ttf|eot|map|json|xml|txt)$/i.test(normalizedPath)) {
    return true
  }

  // 4. Paths de assets conhecidos
  if (normalizedPath.startsWith('/assets/') || normalizedPath.startsWith('/images/')) {
    return true
  }

  return false
}

Deno.serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const url = new URL(req.url)
    const path = url.searchParams.get('path') || '/'

    console.log(`Validating URL: ${path}`)

    // Obter credenciais Supabase
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!

    // Verificar se é URL válida
    const isValid = await isValidUrl(path, supabaseUrl, supabaseKey)

    if (isValid) {
      // URL válida - redireciona para o site (SPA vai carregar)
      console.log(`Valid URL: ${path} - Redirecting to SPA`)
      return new Response(null, {
        status: 302,
        headers: {
          ...corsHeaders,
          'Location': `${SITE_URL}${path}`,
          'Cache-Control': 'public, max-age=3600', // Cache 1 hora
        },
      })
    } else {
      // URL inválida - retorna 410 Gone
      console.log(`Invalid URL: ${path} - Returning 410 Gone`)
      return new Response(gone410Html, {
        status: 410,
        headers: {
          ...corsHeaders,
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'public, max-age=86400', // Cache 24 horas para 410
          'X-Robots-Tag': 'noindex, nofollow',
        },
      })
    }
  } catch (error) {
    console.error('Error in validate-url:', error)
    // Em caso de erro, retorna 410 para ser conservador
    return new Response(gone410Html, {
      status: 410,
      headers: {
        ...corsHeaders,
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    })
  }
})
