-- Create app roles enum
CREATE TYPE public.app_role AS ENUM ('admin', 'editor', 'user');

-- Create user_roles table for role management
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles (prevents recursive RLS)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- RLS policy for user_roles - admins can manage roles, users can see their own
CREATE POLICY "Admins can view all roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin') OR user_id = auth.uid());

CREATE POLICY "Admins can manage roles"
ON public.user_roles
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Create SEO metadata table
CREATE TABLE public.seo_metadata (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    page_slug TEXT NOT NULL UNIQUE,
    meta_title TEXT NOT NULL,
    meta_description TEXT,
    og_image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on seo_metadata
ALTER TABLE public.seo_metadata ENABLE ROW LEVEL SECURITY;

-- SEO metadata policies - public read, admin write
CREATE POLICY "Anyone can view SEO metadata"
ON public.seo_metadata
FOR SELECT
USING (true);

CREATE POLICY "Admins can manage SEO metadata"
ON public.seo_metadata
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Create blog_posts table
CREATE TABLE public.blog_posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    content TEXT,
    excerpt TEXT,
    featured_image TEXT,
    is_published BOOLEAN NOT NULL DEFAULT false,
    author_id UUID REFERENCES auth.users(id),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on blog_posts
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Blog posts policies - public can read published, admin can manage all
CREATE POLICY "Anyone can view published posts"
ON public.blog_posts
FOR SELECT
USING (is_published = true OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage blog posts"
ON public.blog_posts
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_seo_metadata_updated_at
BEFORE UPDATE ON public.seo_metadata
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at
BEFORE UPDATE ON public.blog_posts
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default SEO metadata for existing pages
INSERT INTO public.seo_metadata (page_slug, meta_title, meta_description) VALUES
('/', 'Eclipse Soluções Visuais | Painéis de LED em Santa Catarina', 'Empresa especializada em painéis de LED, letreiros, totens e estruturas em Santa Catarina. Comunicação visual de alto impacto.'),
('/paineis-de-led', 'Painéis de LED em Santa Catarina | Eclipse LED', 'Painéis de LED indoor e outdoor de alta resolução para igrejas, postos, comércios e eventos.'),
('/letreiros', 'Letreiros em LED Santa Catarina | Eclipse LED', 'Letreiros digitais dinâmicos para fachadas, postos e comércios.'),
('/totens', 'Totens de LED em Santa Catarina | Eclipse LED', 'Totens de LED para postos de combustível, shopping centers e eventos.'),
('/estruturas', 'Estruturas para Painéis de LED | Eclipse LED', 'Fabricação de estruturas metálicas sob medida para painéis de LED.'),
('/manutencao', 'Manutenção de Painéis de LED | Eclipse LED', 'Serviços de manutenção corretiva e preventiva para painéis de LED.'),
('/pecas', 'Peças para Painéis de LED | Eclipse LED', 'Peças de reposição e acessórios para painéis de LED com entrega rápida.'),
('/blog', 'Blog | Eclipse LED - Dicas sobre LED e Comunicação Visual', 'Conteúdos, dicas e tutoriais sobre painéis de LED e comunicação visual.');