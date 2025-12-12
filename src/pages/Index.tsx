import { Link } from "react-router-dom";
import { ArrowRight, Play, Star, Users, CheckCircle, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import heroImage from "@/assets/hero-led-panel.jpg";
import ledPanelImage from "@/assets/led-panel-indoor.jpg";
import ledTotemImage from "@/assets/led-totem.jpg";
import ledSignImage from "@/assets/led-sign.jpg";
import ledStructureImage from "@/assets/led-structure.jpg";
import ledMaintenanceImage from "@/assets/led-maintenance.jpg";
import ledPartsImage from "@/assets/led-parts.jpg";
const services = [
  {
    title: "Painéis de LED",
    description:
      "Painéis de alta resolução (indoor e outdoor) que garantem visibilidade total para propagandas e transmissões.",
    image: ledPanelImage,
    href: "/paineis-de-led",
    badge: "Mais vendido",
  },
  {
    title: "Letreiros em LED",
    description:
      "Substitua lonas estáticas por letreiros digitais dinâmicos, permitindo trocar ofertas e mensagens rapidamente.",
    image: ledSignImage,
    href: "/letreiros",
  },
  {
    title: "Totem de LED",
    description: "Estruturas verticais prontas para uso, perfeitas para vitrines de shopping, recepções e postos.",
    image: ledTotemImage,
    href: "/totens",
  },
  {
    title: "Estruturas para Painéis",
    description: "Projetamos e fabricamos o suporte metálico sob medida para o seu painel com acabamento profissional.",
    image: ledStructureImage,
    href: "/estruturas",
  },
  {
    title: "Manutenção e Suporte",
    description: "Configuração de processadores, manutenção e assistência técnica para você não ficar na mão.",
    image: ledMaintenanceImage,
    href: "/manutencao",
  },
  {
    title: "Peças e Acessórios",
    description: "Módulos de LED, cabos, fontes e sending cards para garantir a longevidade do seu equipamento.",
    image: ledPartsImage,
    href: "/pecas",
  },
];
const benefits = [
  {
    icon: Users,
    title: "Atendimento Humanizado",
    description: "Acesso direto a especialistas que entendem sua necessidade. Do primeiro contato ao pós-venda.",
  },
  {
    icon: Award,
    title: "Qualidade no Serviço",
    description: "Técnica apurada e instalação impecável. Da configuração à montagem, garantimos excelência.",
  },
  {
    icon: CheckCircle,
    title: "Melhores Prazos",
    description: "Processos otimizados para entrega e instalação dentro do cronograma combinado.",
  },
  {
    icon: Star,
    title: "Melhores Materiais",
    description: "Componentes de primeira linha e estruturas robustas para maior vida útil e cores vivas.",
  },
];
const stats = [
  {
    value: "500+",
    label: "Projetos Realizados",
  },
  {
    value: "10+",
    label: "Anos de Experiência",
  },
  {
    value: "100%",
    label: "Clientes Satisfeitos",
  },
  {
    value: "BR",
    label: "Todo o Brasil",
  },
];
const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Painel de LED iluminado em fachada moderna"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24 pb-16">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Empresa de Comunicação Visual
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
              Ilumine sua marca com <span className="text-gradient">alto impacto</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Painéis de LED, estruturas personalizadas e manutenção especializada com quem entende do assunto.
              Transforme sua comunicação visual em todo o Brasil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a
                  href="https://wa.me/5548999999999?text=Olá! Gostaria de um orçamento para painel de LED."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar Orçamento
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to="/paineis-de-led">
                  <Play className="w-5 h-5 mr-2" />
                  Ver Projetos
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto animate-fade-in-up delay-300">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-xl glass-card">
                <div className="text-3xl md:text-4xl font-heading font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Sobre a Eclipse</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
                O impacto do painel de led e midia exterior em <span className="text-gradient">negócios locais</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                A comunicação visual é o vendedor silencioso da sua empresa. Para supermercados, postos e comércios
                locais, investir em estratégia visual de alto impacto significa transformar o fluxo da rua em clientes
                dentro da loja.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Com a Eclipse, você moderniza sua fachada e garante visibilidade ao seu público. Somos especialistas em
                soluções de LED que funcionam 24 horas por dia, destacando sua marca em qualquer condição de
                luminosidade.
              </p>
              <Button variant="outline" size="lg" asChild>
                <Link to="/paineis-de-led">
                  Conheça nossos serviços
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-card">
                <img
                  src={ledPanelImage}
                  alt="Painel de LED indoor de alta resolução"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 p-6 rounded-xl glass-card shadow-glow">
                <div className="text-4xl font-heading font-bold text-gradient">
                  O impacto do painel de led e midia exterior{" "}
                </div>
                <div className="text-sm text-muted-foreground">Anos de experiência</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding" id="servicos">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">Nossos Serviços</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-4 mb-6">
              Soluções completas em <span className="text-gradient">LED</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Da fabricação à manutenção, oferecemos tudo que você precisa para uma comunicação visual de alto impacto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.title}
                to={service.href}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover-glow"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {service.badge && (
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                      {service.badge}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  <div className="mt-4 flex items-center text-primary text-sm font-medium">
                    Saiba mais
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">Diferenciais</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-4 mb-6">
              Por que escolher a <span className="text-gradient">Eclipse?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover-glow text-center"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden" id="contato">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Pronto para transformar sua <span className="text-gradient">comunicação visual?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Entre em contato conosco e receba um orçamento personalizado para o seu projeto. Atendemos toda Santa
            Catarina.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <a
                href="https://wa.me/5548999999999?text=Olá! Gostaria de um orçamento."
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar pelo WhatsApp
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="tel:+5548999999999">Ligar Agora</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Index;
