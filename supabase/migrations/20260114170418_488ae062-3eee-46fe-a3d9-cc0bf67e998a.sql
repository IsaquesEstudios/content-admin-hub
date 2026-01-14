-- Criar bucket público para imagens do blog
INSERT INTO storage.buckets (id, name, public)
VALUES ('blog-images', 'blog-images', true);

-- Política para permitir leitura pública
CREATE POLICY "Imagens públicas" ON storage.objects
FOR SELECT USING (bucket_id = 'blog-images');

-- Política para permitir upload via service role (edge function)
CREATE POLICY "Upload via service role" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'blog-images');