import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-api-key',
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    // Validar API Key
    const apiKey = req.headers.get('x-api-key')
    const expectedKey = Deno.env.get('UPLOAD_API_KEY')
    
    if (!apiKey || apiKey !== expectedKey) {
      console.error('Unauthorized: Invalid or missing API key')
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    // Parse body
    const body = await req.json()
    console.log('Received post data:', JSON.stringify(body))

    const { title, slug, content, excerpt, featured_image, published } = body

    // Validar campos obrigatórios
    if (!title || !slug) {
      return new Response(JSON.stringify({ error: 'Title and slug are required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    // Criar cliente Supabase com service role
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    )

    // Verificar se slug já existe
    const { data: existingPost } = await supabase
      .from('blog_posts')
      .select('id')
      .eq('slug', slug)
      .single()

    if (existingPost) {
      console.log('Slug already exists, updating post:', existingPost.id)
      
      // Atualizar post existente
      const { data, error } = await supabase
        .from('blog_posts')
        .update({
          title,
          content: content || null,
          excerpt: excerpt || null,
          featured_image: featured_image || null,
          is_published: published === true || published === 'true',
          updated_at: new Date().toISOString()
        })
        .eq('id', existingPost.id)
        .select()
        .single()

      if (error) {
        console.error('Error updating post:', error)
        throw error
      }

      console.log('Post updated successfully:', data.id)

      return new Response(JSON.stringify({ 
        success: true,
        action: 'updated',
        post: data
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    // Criar novo post
    const { data, error } = await supabase
      .from('blog_posts')
      .insert({
        title,
        slug,
        content: content || null,
        excerpt: excerpt || null,
        featured_image: featured_image || null,
        is_published: published === true || published === 'true'
      })
      .select()
      .single()

    if (error) {
      console.error('Error creating post:', error)
      throw error
    }

    console.log('Post created successfully:', data.id)

    return new Response(JSON.stringify({ 
      success: true,
      action: 'created',
      post: data
    }), {
      status: 201,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    console.error('Create post error:', errorMessage)
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })
  }
})
