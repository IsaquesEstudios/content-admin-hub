import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Sun, Moon, Building, Church, GalleryVertical, Presentation, Zap, Eye, RefreshCcw } from "lucide-react";
import { FAQ } from "@/components/sections/FAQ";
import { AboutCompany } from "@/components/sections/AboutCompany";
import heroImage from "@/assets/hero-led-panel.jpg";
import ledPanelImage from "@/assets/led-panel-indoor.jpg";

const useCases = [
  {
    icon: Church,
    title: "Igrejas e Templos",
    description: "Melhore a leitura dos cânticos e a qualidade da transmissão ao vivo, eliminando a necessidade de escurecer o ambiente.",
  },
  {
    icon: Building,
    title: "Postos de Combustível",
    description: "Destaque-se na rodovia dia e noite e atualize os preços instantaneamente via sistema.",
  },
  {
    icon: GalleryVertical,
    title: "Varejo e Vitrines",
    description: "Capture a atenção com vídeos dinâmicos. Uma vitrine digital atrai até 5x mais olhares.",
  },
  {
    icon: Presentation,
    title: "Shows e Eventos",
    description: "Crie cenários imersivos e backdrops de alto impacto visual que elevam a experiência.",
  },
];

const specifications = [
  {
    type: "Outdoor (Externo)",
    icon: Sun,
    description: "Proteção IP65/IP66, resistentes à chuva, poeira e ventos fortes. Alto brilho para sol direto.",
    resolutions: ["P3.9", "P4", "P5", "P6", "P8", "P10"],
    ideal: "Fachadas, Postos, Outdoors Digitais",
  },
  {
    type: "Indoor (Interno)",
    icon: Moon,
    description: "Pixels mais próximos para alta definição. Imagens nítidas mesmo de perto.",
    resolutions: ["P1.8", "P2", "P2.5", "P3", "P3.9"],
    ideal: "Igrejas, Vitrines, Salas de Reunião",
  },
];

const benefits = [
  "Visibilidade máxima dia e noite",
  "Conteúdo dinâmico instantâneo",
  "Sem custos de impressão",
  "Cores vivas e brilho ajustável",
  "Durabilidade e resistência",
  "Suporte técnico local",
];

const advantages = [
  {
    icon: Eye,
    title: "Visibilidade 24 horas",
    description: "Diferente de lonas e banners, painéis de LED são visíveis dia e noite, garantindo que sua mensagem alcance o público em qualquer horário.",
  },
  {
    icon: RefreshCcw,
    title: "Conteúdo dinâmico",
    description: "Atualize suas promoções, preços e mensagens instantaneamente, sem custos de impressão ou instalação.",
  },
  {
    icon: Zap,
    title: "Alto impacto visual",
    description: "Cores vibrantes e movimento capturam a atenção de forma muito mais efetiva que mídias estáticas.",
  },
];

const faqItems = [
  {
    question: "Qual a diferença entre painel indoor e outdoor?",
    answer: "Painéis outdoor possuem maior brilho (acima de 5.000 nits) e proteção IP65/IP66 contra água e poeira, sendo ideais para uso externo. Já os painéis indoor têm pixels menores (maior resolução) e são projetados para ambientes internos onde a distância de visualização é menor.",
  },
  {
    question: "Quanto tempo dura um painel de LED?",
    answer: "Um painel de LED de qualidade tem vida útil média de 100.000 horas de funcionamento, o que equivale a mais de 10 anos de uso contínuo. Com manutenção preventiva adequada, essa durabilidade pode ser ainda maior.",
  },
  {
    question: "Como é feita a instalação do painel?",
    answer: "Nossa equipe realiza todo o processo: visita técnica para avaliar o local, projeto da estrutura de suporte, instalação elétrica adequada, montagem do painel e configuração do sistema de controle. Também oferecemos treinamento para operação.",
  },
  {
    question: "Posso atualizar o conteúdo do painel remotamente?",
    answer: "Sim! Todos os nossos painéis podem ser configurados para atualização remota via internet. Você pode alterar vídeos, imagens e textos de qualquer lugar usando um computador ou smartphone.",
  },
];

export default function PaineisLed() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Painéis de LED" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-32 pb-16">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Painéis de LED
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Painéis de LED em{" "}
              <span className="text-gradient">Santa Catarina</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              A tecnologia de comunicação visual mais impactante do mercado. Alta resolução, 
              brilho intenso e gerenciamento dinâmico para destacar sua marca 24 horas por dia.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="https://wa.me/5548999680600?text=Olá! Gostaria de um orçamento para painel de LED." target="_blank" rel="noopener noreferrer">
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Invest */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Por que investir em um <span className="text-gradient">Painel de LED?</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                A comunicação estática ficou no passado. Em um mundo onde a atenção das pessoas 
                é disputada a cada segundo, sua empresa precisa de movimento e brilho.
              </p>
              <p className="text-muted-foreground mb-8">
                Painéis de LED são a evolução dos outdoors tradicionais. Enquanto uma lona 
                precisa ser reimpressa a cada campanha, um painel digital permite trocar o 
                conteúdo instantaneamente, exibir vídeos e até mesmo programar diferentes 
                mensagens ao longo do dia.
              </p>
              <ul className="grid grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-5 h-5 text-eclipse-blue flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-card">
              <img src={ledPanelImage} alt="Painel de LED indoor" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Vantagens do <span className="text-gradient">Painel de LED</span>
            </h2>
            <p className="text-muted-foreground">
              Descubra por que cada vez mais empresas estão migrando para a comunicação digital.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage) => (
              <div key={advantage.title} className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover-glow text-center">
                <advantage.icon className="w-12 h-12 text-eclipse-blue mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold mb-3">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Escolha o painel <span className="text-gradient">ideal</span>
            </h2>
            <p className="text-muted-foreground">
              Oferecemos painéis para ambientes internos e externos, com diferentes resoluções 
              para atender às necessidades do seu projeto.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {specifications.map((spec) => (
              <div key={spec.type} className="p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all hover-glow">
                <spec.icon className="w-12 h-12 text-eclipse-blue mb-4" />
                <h3 className="text-2xl font-heading font-bold mb-2">Painel de LED {spec.type}</h3>
                <p className="text-muted-foreground mb-4">{spec.description}</p>
                <div className="mb-4">
                  <span className="text-sm font-medium text-foreground">Resoluções: </span>
                  <span className="text-sm text-muted-foreground">{spec.resolutions.join(", ")}</span>
                </div>
                <div className="px-4 py-2 bg-primary/10 rounded-lg inline-block text-sm">
                  Ideal para: {spec.ideal}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Painéis de LED são <span className="text-gradient">excelentes</span> para
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="p-6 rounded-2xl bg-card border border-border text-center hover:border-primary/50 transition-all">
                <useCase.icon className="w-10 h-10 text-eclipse-blue mx-auto mb-4" />
                <h3 className="font-heading font-bold mb-2">{useCase.title}</h3>
                <p className="text-muted-foreground text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqItems} subtitle="Tire suas dúvidas sobre painéis de LED" />

      {/* About Company */}
      <AboutCompany />

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Faça seu painel de LED com a <span className="text-gradient">Eclipse</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Entre em contato e receba um orçamento personalizado para seu projeto.
          </p>
          <Button variant="hero" size="xl" asChild>
            <a href="https://wa.me/5548999680600" target="_blank" rel="noopener noreferrer">
              Falar com Especialista
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
