import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Lightbulb, 
  Target, 
  Users, 
  Building, 
  GraduationCap, 
  Palette,
  Shield,
  Mountain,
  CheckCircle,
  Type,
  Layers,
  Megaphone,
  Calendar
} from "lucide-react";
import logoEclipse from "@/assets/logo-eclipse.webp";

const expertise = [
  {
    icon: Type,
    title: "Letreiros Especiais",
    description: "Criação de Letreiros Block Letter (caixa alta) luminosos e não-luminosos, Letreiros em Acrílico com acabamento sofisticado e letras em Aço Inox.",
  },
  {
    icon: Layers,
    title: "Fachadas e Estruturas",
    description: "Desenvolvimento e instalação de Fachadas em ACM, Totens, Displays e grandes Painéis em Lona.",
  },
  {
    icon: Megaphone,
    title: "Sinalização Completa",
    description: "Produção de Sinalização Interna e soluções completas para Toldos e Coberturas, além de Impressão Digital de alta resolução.",
  },
  {
    icon: Calendar,
    title: "Montagem de Stands",
    description: "Soluções de comunicação e estruturas para feiras e eventos.",
  },
];

const differentials = [
  {
    icon: Shield,
    title: "Foco em Soluções Completas",
    description: "Nossos clientes não se preocupam com logística ou burocracia. Cuidamos do projeto do início ao fim, desde o design e produção até a instalação no local.",
  },
  {
    icon: Mountain,
    title: "Especialização em Altura",
    description: "Temos uma equipe especializada e certificada para instalações em altura e locais de difícil acesso, garantindo que a sua marca brilhe onde for necessário.",
  },
];

const clients = [
  { icon: Palette, name: "Agências de Propaganda" },
  { icon: Building, name: "Escritórios de Arquitetura" },
  { icon: Users, name: "Empresas de todos os portes" },
  { icon: GraduationCap, name: "Colégios e Instituições de Ensino" },
];

const stats = [
  { value: "500+", label: "Projetos Realizados" },
  { value: "10+", label: "Anos de Experiência" },
  { value: "100%", label: "Clientes Satisfeitos" },
  { value: "SC", label: "Atendimento em Santa Catarina" },
];

export default function SobreNos() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Sobre Nós
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Eclipse{" "}
                <span className="text-gradient">Soluções Visuais</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Da ideia ao alto impacto. Transformamos a identidade visual da sua marca 
                em realidade tangível e de alto impacto.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contato">
                  Fale Conosco
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent rounded-3xl blur-3xl" />
                <img
                  src={logoEclipse}
                  alt="Eclipse Soluções Visuais"
                  className="relative z-10 w-64 md:w-80 h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-xl bg-background/50 border border-border/50">
                <div className="text-3xl md:text-4xl font-heading font-bold text-eclipse-blue mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa Essência */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Lightbulb className="w-12 h-12 text-eclipse-blue mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Nossa <span className="text-gradient">Essência</span>
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-center">
              <p className="text-muted-foreground text-lg mb-6">
                A <strong className="text-foreground">Eclipse Soluções Visuais</strong> nasceu com a missão de 
                transformar a identidade visual da sua marca em realidade tangível e de alto impacto. 
                Somos especialistas em comunicação visual e sinalização, dedicados a garantir que a 
                sua presença no mercado seja notada, desde o nível da rua até grandes fachadas em altura.
              </p>
              <p className="text-muted-foreground text-lg">
                Nosso compromisso é ir além da produção: cuidamos de <strong className="text-foreground">todo o processo</strong>, 
                desde o conceito inicial até a instalação final, garantindo que a qualidade e a 
                segurança caminhem juntas em cada projeto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O Que Fazemos */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <Target className="w-12 h-12 text-eclipse-blue mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              O Que <span className="text-gradient">Fazemos</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Somos a ponte entre a sua visão e a execução. Utilizamos tecnologia de ponta 
              e materiais de primeira linha para entregar soluções duradouras e visualmente impressionantes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((item) => (
              <div 
                key={item.title} 
                className="p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all"
              >
                <item.icon className="w-10 h-10 text-eclipse-blue mb-4" />
                <h3 className="font-heading font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nosso Diferencial */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Nosso <span className="text-gradient">Diferencial</span>
            </h2>
            <p className="text-muted-foreground">
              No mercado de comunicação visual, a execução é tudo.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {differentials.map((item) => (
              <div 
                key={item.title} 
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover-glow"
              >
                <item.icon className="w-12 h-12 text-eclipse-blue mb-4" />
                <h3 className="font-heading font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quem Atendemos */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <Users className="w-12 h-12 text-eclipse-blue mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Quem <span className="text-gradient">Atendemos</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nossa excelência é direcionada a profissionais e empresas que valorizam 
              a qualidade e a credibilidade na sua imagem.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {clients.map((client) => (
              <div 
                key={client.name} 
                className="p-6 rounded-2xl bg-background border border-border text-center hover:border-primary/50 transition-all"
              >
                <client.icon className="w-10 h-10 text-eclipse-blue mx-auto mb-3" />
                <p className="text-sm font-medium">{client.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localização */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Onde <span className="text-gradient">Estamos</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              Com sede em <strong className="text-foreground">Capivari de Baixo, Santa Catarina</strong>, atendemos 
              clientes em toda a região e estamos prontos para levar a sua comunicação visual a um novo patamar.
            </p>
            <p className="text-muted-foreground mb-8">
              R. Pedro Venâncio Martins, 168 - Capivari de Baixo/SC, 88745-000
            </p>
            <p className="text-xl font-heading font-medium text-primary italic">
              Sua marca merece brilhar. Deixe a Eclipse Visual cuidar disso.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Pronto para transformar sua <span className="text-gradient">marca?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Entre em contato e descubra como podemos ajudar a destacar sua empresa 
            com soluções visuais de alto impacto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <a href="https://wa.me/5548999680600" target="_blank" rel="noopener noreferrer">
                Falar pelo WhatsApp
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/contato">
                Enviar Mensagem
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
