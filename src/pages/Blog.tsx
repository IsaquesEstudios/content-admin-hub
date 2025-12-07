import { Layout } from "@/components/layout/Layout";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-led-panel.jpg";

// Placeholder posts - these will come from the database once connected
const posts = [
  {
    id: 1,
    title: "Como escolher o painel de LED ideal para sua igreja",
    slug: "como-escolher-painel-led-igreja",
    excerpt: "Guia completo para escolher a resolução, tamanho e tipo de painel de LED perfeito para o seu templo.",
    date: "2024-12-01",
    readTime: "5 min",
    image: heroImage,
    category: "Dicas",
  },
  {
    id: 2,
    title: "Manutenção preventiva: quanto tempo dura um painel de LED?",
    slug: "manutencao-preventiva-painel-led",
    excerpt: "Descubra como prolongar a vida útil do seu equipamento com cuidados simples e regulares.",
    date: "2024-11-28",
    readTime: "4 min",
    image: heroImage,
    category: "Manutenção",
  },
  {
    id: 3,
    title: "Totem de LED vs Painel de Fachada: qual escolher?",
    slug: "totem-led-vs-painel-fachada",
    excerpt: "Entenda as diferenças e descubra qual solução é mais adequada para o seu negócio.",
    date: "2024-11-25",
    readTime: "6 min",
    image: heroImage,
    category: "Comparativos",
  },
];

export default function Blog() {
  return (
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all hover-glow"
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                      {post.category}
                    </span>
                    <h2 className="text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
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

          {/* Empty State for when connected to database */}
          {posts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                Nenhuma postagem publicada ainda.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
