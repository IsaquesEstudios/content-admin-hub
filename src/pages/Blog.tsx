import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Head } from "vite-react-ssg";
import { useLoaderData } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import heroImage from "@/assets/hero-led-panel.jpg";

interface BlogPostItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  featured_image: string | null;
  created_at: string;
}

interface BlogLoaderData {
  posts: BlogPostItem[];
}

export default function Blog() {
  // SSG loader data (available at build time and from static manifest)
  let initialPosts: BlogPostItem[] = [];
  try {
    const loaderData = useLoaderData() as BlogLoaderData | undefined;
    initialPosts = loaderData?.posts || [];
  } catch {
    // Fallback: no loader data (pure SPA mode)
  }

  const [posts, setPosts] = useState<BlogPostItem[]>(initialPosts);
  const [loading, setLoading] = useState(initialPosts.length === 0);

  // Client-side fallback: fetch if no SSG data available
  useEffect(() => {
    if (initialPosts.length > 0) {
      setLoading(false);
      return;
    }

    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("id, title, slug, excerpt, featured_image, created_at")
        .eq("is_published", true)
        .order("created_at", { ascending: false });

      if (!error && data) {
        setPosts(data);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const estimateReadTime = (content: string | null) => {
    if (!content) return "2 min";
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min`;
  };

  return (
    <>
      <Head>
        <title>Blog | Eclipse LED - Conteúdos sobre LED e Comunicação Visual</title>
        <meta
          name="description"
          content="Dicas, tutoriais e novidades do mundo dos painéis de LED para você tomar as melhores decisões para o seu negócio."
        />
        <meta property="og:title" content="Blog | Eclipse LED" />
        <meta
          property="og:description"
          content="Dicas, tutoriais e novidades sobre painéis de LED e comunicação visual."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://eclipseled.com.br/blog" />
      </Head>
      <Layout>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Blog
              </span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Conteúdos sobre{" "}
                <span className="text-gradient">LED e Comunicação Visual</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Dicas, tutoriais e novidades do mundo dos painéis de LED para você
                tomar as melhores decisões para o seu negócio.
              </p>
            </div>
          </div>
        </section>

        {/* Posts */}
        <section className="section-padding">
          <div className="container mx-auto px-4 lg:px-8">
            {loading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="rounded-2xl bg-card border border-border animate-pulse"
                  >
                    <div className="aspect-video bg-muted" />
                    <div className="p-6 space-y-3">
                      <div className="h-4 bg-muted rounded w-20" />
                      <div className="h-6 bg-muted rounded" />
                      <div className="h-4 bg-muted rounded w-3/4" />
                    </div>
                  </div>
                ))}
              </div>
            ) : posts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  Nenhuma postagem publicada ainda. Volte em breve!
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <article
                    key={post.id}
                    className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all hover-glow"
                  >
                    <Link to={`/blog/${post.slug}`} className="block">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={post.featured_image || heroImage}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h2 className="text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h2>
                        {post.excerpt && (
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>
                        )}
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>
                              {new Date(post.created_at).toLocaleDateString(
                                "pt-BR"
                              )}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{estimateReadTime(post.excerpt)}</span>
                          </div>
                        </div>
                        <div className="mt-4 flex items-center text-primary text-sm font-medium">
                          Ler mais
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </Layout>
    </>
  );
}
