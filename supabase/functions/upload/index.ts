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

    const contentType = req.headers.get('content-type') || ''
    let fileData: ArrayBuffer
    let fileName: string
    let mimeType: string

    // Detectar se é form-data ou binary direto
    if (contentType.includes('multipart/form-data')) {
      // Processar como form data
      console.log('Processing as multipart/form-data')
      const formData = await req.formData()
      const file = formData.get('data') as File
      
      if (!file) {
        return new Response(JSON.stringify({ error: 'No file provided' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        })
      }
      
      fileData = await file.arrayBuffer()
      fileName = file.name || 'upload'
      mimeType = file.type || 'image/jpeg'
    } else {
      // Processar como binary direto (n8n Binary File)
      console.log('Processing as raw binary data')
      fileData = await req.arrayBuffer()
      
      if (!fileData || fileData.byteLength === 0) {
        return new Response(JSON.stringify({ error: 'No file data provided' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        })
      }
      
      // Determinar extensão e mime type
      mimeType = contentType.split(';')[0] || 'image/jpeg'
      const extMap: Record<string, string> = {
        'image/jpeg': 'jpg',
        'image/png': 'png',
        'image/webp': 'webp',
        'image/gif': 'gif',
      }
      const ext = extMap[mimeType] || 'jpg'
      fileName = `upload.${ext}`
    }

    console.log(`File size: ${fileData.byteLength} bytes, type: ${mimeType}`)

    // Gerar nome único
    const ext = fileName.split('.').pop() || 'jpg'
    const uniqueFileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${ext}`

    // Upload para storage
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    )

    const { data, error } = await supabase.storage
      .from('blog-images')
      .upload(uniqueFileName, fileData, {
        contentType: mimeType,
        upsert: false
      })

    if (error) {
      console.error('Storage upload error:', error)
      throw error
    }

    console.log('Upload successful:', data)

    // Retornar URL pública
    const { data: { publicUrl } } = supabase.storage
      .from('blog-images')
      .getPublicUrl(uniqueFileName)

    console.log('Public URL:', publicUrl)

    return new Response(JSON.stringify({ 
      success: true,
      url: publicUrl,
      fileName: uniqueFileName
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    console.error('Upload error:', errorMessage)
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })
  }
})
