import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const SITE_URL = 'https://eclipseled.com.br'

const staticPages = [
  { path: '/', title: 'Home', type: 'page' },
  { path: '/servicos', title: 'Serviços', type: 'page' },
  { path: '/paineis-de-led', title: 'Painéis de LED', type: 'page' },
  { path: '/letreiros', title: 'Letreiros', type: 'page' },
  { path: '/totens', title: 'Totens', type: 'page' },
  { path: '/estruturas', title: 'Estruturas', type: 'page' },
  { path: '/manutencao', title: 'Manutenção', type: 'page' },
  { path: '/pecas', title: 'Peças', type: 'page' },
  { path: '/sobre', title: 'Sobre Nós', type: 'page' },
  { path: '/contato', title: 'Contato', type: 'page' },
  { path: '/blog', title: 'Blog', type: 'page' },
  { path: '/campanha', title: 'Campanha', type: 'landing' },
  { path: '/politica-de-privacidade', title: 'Política de Privacidade', type: 'legal' },
  { path: '/termos-de-uso', title: 'Termos de Uso', type: 'legal' },
]

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const supabase = createClient(supabaseUrl, supabaseKey)

    // Buscar posts publicados do blog
    const { data: posts, error } = await supabase
      .from('blog_posts')
      .select('title, slug, excerpt, created_at, updated_at')
      .eq('is_published', true)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching blog posts:', error)
    }

    // Montar resposta JSON
    const response = {
      generated_at: new Date().toISOString(),
      site_url: SITE_URL,
      total_pages: staticPages.length,
      total_posts: posts?.length || 0,
      pages: staticPages.map(page => ({
        ...page,
        url: `${SITE_URL}${page.path}`
      })),
      posts: (posts || []).map(post => ({
        title: post.title,
        path: `/blog/${post.slug}`,
        url: `${SITE_URL}/blog/${post.slug}`,
        excerpt: post.excerpt,
        type: 'blog_post',
        created_at: post.created_at,
        updated_at: post.updated_at
      }))
    }

    console.log(`Links generated: ${staticPages.length} pages, ${posts?.length || 0} posts`)

    return new Response(JSON.stringify(response, null, 2), {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600', // Cache por 1 hora
      },
    })
  } catch (error) {
    console.error('Error generating links:', error)
    return new Response(JSON.stringify({ error: 'Error generating links' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
