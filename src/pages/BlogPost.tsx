import { useState, useEffect } from "react";
import { useParams, useLoaderData, Link } from "react-router-dom";
import { Head } from "vite-react-ssg";
import DOMPurify from "isomorphic-dompurify";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { ArrowLeft, Calendar, Clock, Loader2 } from "lucide-react";
import heroImage from "@/assets/hero-led-panel.jpg";

interface BlogPostData {
  id: string;
  title: string;
  slug: string;
  content: string | null;
  excerpt: string | null;
  featured_image: string | null;
  created_at: string;
}

interface BlogPostLoaderData {
  post: BlogPostData | null;
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();

  // SSG loader data
  let initialPost: BlogPostData | null = null;
  try {
    const loaderData = useLoaderData() as BlogPostLoaderData | undefined;
    initialPost = loaderData?.post || null;
  } catch {
    // Fallback: no loader data (pure SPA mode)
  }

  const [post, setPost] = useState<BlogPostData | null>(initialPost);
  const [loading, setLoading] = useState(!initialPost);

  // Client-side fallback: fetch if no SSG data
  useEffect(() => {
    if (initialPost) {
      setLoading(false);
      return;
    }
    if (!slug) {
      setLoading(false);
      return;
    }

    const fetchPost = async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .eq("is_published", true)
        .maybeSingle();

      if (!error && data) {
        setPost(data);
      }
      setLoading(false);
    };

    fetchPost();
  }, [slug]);

  const estimateReadTime = (content: string | null) => {
    if (!content) return "2 min";
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min de leitura`;
  };

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-heading font-bold mb-4">
              Post não encontrado
            </h1>
            <p className="text-muted-foreground mb-8">
              O artigo que você está procurando não existe ou foi removido.
            </p>
            <Button asChild>
              <Link to="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao Blog
              </Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title} | Eclipse LED</title>
        <meta name="description" content={post.excerpt || ""} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt || ""} />
        <meta property="og:type" content="article" />
        {post.featured_image && (
          <meta property="og:image" content={post.featured_image} />
        )}
        <link
          rel="canonical"
          href={`https://eclipseled.com.br/blog/${post.slug}`}
        />
      </Head>
      <Layout>
        {/* Hero */}
        <section className="pt-32 pb-8">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Link
                to="/blog"
                className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao Blog
              </Link>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-muted-foreground text-sm mb-8">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {new Date(post.created_at).toLocaleDateString("pt-BR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{estimateReadTime(post.content)}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        {(post.featured_image || heroImage) && (
          <section className="pb-8">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="aspect-video rounded-2xl overflow-hidden">
                  <img
                    src={post.featured_image || heroImage}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Content */}
        <section className="pb-16">
          <div className="container mx-auto px-4 lg:px-8">
            <article className="max-w-4xl mx-auto">
              {post.content ? (
                <div
                  className="blog-content"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(post.content),
                  }}
                />
              ) : (
                <p className="text-muted-foreground">
                  Este artigo ainda não possui conteúdo.
                </p>
              )}
            </article>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-card">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Precisa de um painel de LED?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e receba um orçamento personalizado.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a
                href="https://wa.me/5548999680600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar com Especialista
              </a>
            </Button>
          </div>
        </section>
      </Layout>
    </>
  );
}
