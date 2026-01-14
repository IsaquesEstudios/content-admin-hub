import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { ArrowLeft, Calendar, Clock, Loader2 } from "lucide-react";
import heroImage from "@/assets/hero-led-panel.jpg";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string | null;
  excerpt: string | null;
  featured_image: string | null;
  created_at: string;
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;

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
                className="blog-content prose prose-lg prose-invert max-w-none 
                  prose-headings:font-heading prose-headings:text-foreground prose-headings:font-bold
                  prose-h1:text-3xl prose-h1:mt-8 prose-h1:mb-4
                  prose-h2:text-2xl prose-h2:mt-6 prose-h2:mb-3
                  prose-h3:text-xl prose-h3:mt-4 prose-h3:mb-2
                  prose-p:text-foreground prose-p:leading-relaxed prose-p:mb-4
                  prose-a:text-primary prose-a:underline hover:prose-a:text-primary/80
                  prose-strong:text-foreground prose-strong:font-semibold
                  prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-4
                  prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-4
                  prose-li:text-foreground prose-li:mb-2
                  prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic
                  prose-img:rounded-xl prose-img:w-full prose-img:my-6 prose-img:shadow-lg
                  prose-figure:my-6
                  prose-figcaption:text-muted-foreground prose-figcaption:text-center prose-figcaption:text-sm prose-figcaption:mt-2"
                dangerouslySetInnerHTML={{ __html: post.content }}
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
              href="https://wa.me/5548999999999"
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar com Especialista
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
