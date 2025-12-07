import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Wrench, Grid3X3, Building, Church, Fuel, Ruler, PaintBucket, Settings } from "lucide-react";
import { FAQ } from "@/components/sections/FAQ";
import { AboutCompany } from "@/components/sections/AboutCompany";
import ledStructureImage from "@/assets/led-structure.jpg";

const structureTypes = [
  { icon: Building, title: "Estruturas de Solo (Totens)", description: "Fixação robusta com fundação em concreto. Revestimento em ACM ou chapa metálica para acabamento moderno e proteção." },
  { icon: Grid3X3, title: "Estruturas de Fachada", description: "Suportes discretos que deixam o painel alinhado à arquitetura existente. Ancoragem segura em paredes e muros." },
  { icon: Church, title: "Estruturas Suspensas", description: "Sistemas de treliça (Box Truss) ou vigas discretas para palcos de igrejas, eventos e ambientes internos." },
];

const differentials = [
  { icon: Wrench, title: "Portas de Visita", description: "Acessos traseiros ou laterais facilitados para manutenção rápida e barata. Troque módulos sem desmontar toda a estrutura." },
  { icon: Shield, title: "Pintura de Alta Resistência", description: "Pintura eletrostática ou automotiva para evitar ferrugem e desgaste. Cores personalizadas conforme sua identidade visual." },
  { icon: Ruler, title: "Projeto Sob Medida", description: "Cada estrutura é projetada especificamente para seu painel e local de instalação, garantindo perfeito encaixe e segurança." },
  { icon: PaintBucket, title: "Acabamento Premium", description: "Revestimento em ACM, aço inox ou galvanizado. Fechamento completo para proteção contra intempéries." },
];

const process = [
  {
    step: "01",
    title: "Visita Técnica",
    description: "Nossa equipe vai até o local para avaliar as condições de instalação e tirar medidas precisas.",
  },
  {
    step: "02",
    title: "Projeto",
    description: "Desenvolvemos o projeto da estrutura com desenhos técnicos e especificações de materiais.",
  },
  {
    step: "03",
    title: "Fabricação",
    description: "A estrutura é fabricada em nossa metalúrgica parceira com todos os acabamentos solicitados.",
  },
  {
    step: "04",
    title: "Instalação",
    description: "Realizamos a instalação completa, incluindo fundação (se necessário), fixação e acabamentos.",
  },
];

const faqItems = [
  {
    question: "A estrutura aguenta o peso do painel de LED?",
    answer: "Sim! Todas as nossas estruturas são calculadas por engenheiro civil, considerando o peso do painel, ação do vento e normas técnicas. Utilizamos aço de alta resistência e solda certificada.",
  },
  {
    question: "Vocês fazem apenas a estrutura ou o painel também?",
    answer: "Oferecemos o serviço completo: painel de LED, estrutura, instalação elétrica e configuração. Você também pode contratar apenas a estrutura se já tiver o painel.",
  },
  {
    question: "Quanto tempo leva para fabricar uma estrutura?",
    answer: "O prazo varia conforme o tamanho e complexidade do projeto. Estruturas simples ficam prontas em 7 a 10 dias úteis. Projetos maiores podem levar até 20 dias úteis.",
  },
];

export default function Estruturas() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={ledStructureImage} alt="Estrutura para painel de LED" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-32 pb-16">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Estruturas
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Estruturas para{" "}
              <span className="text-gradient">Painéis de LED</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Segurança e estabilidade para o seu investimento. Projetos e fabricação própria 
              de estruturas sob medida para fachadas, totens e grandes formatos.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="https://wa.me/5548999999999" target="_blank">
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              A estrutura do seu <span className="text-gradient">painel</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              Um painel de LED de alta qualidade precisa de uma sustentação à altura. 
              Possuímos expertise na fabricação e montagem de estruturas metálicas projetadas 
              especificamente para suportar o peso e as exigências técnicas dos painéis digitais.
            </p>
            <p className="text-muted-foreground text-lg">
              Cada projeto é único. Avaliamos o local de instalação, dimensões do painel, 
              incidência de vento e requisitos estéticos para entregar uma estrutura perfeita 
              em segurança e acabamento.
            </p>
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Tipos de <span className="text-gradient">Estruturas</span>
            </h2>
            <p className="text-muted-foreground">Soluções para diferentes aplicações e ambientes</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {structureTypes.map((type) => (
              <div key={type.title} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all">
                <type.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-heading font-bold mb-2">{type.title}</h3>
                <p className="text-muted-foreground text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Nosso <span className="text-gradient">Processo</span>
            </h2>
            <p className="text-muted-foreground">Do projeto à instalação, cuidamos de tudo</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item) => (
              <div key={item.step} className="relative">
                <div className="text-6xl font-heading font-bold text-primary/20 mb-2">{item.step}</div>
                <h3 className="font-heading font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Diferenciais da <span className="text-gradient">Fabricação Eclipse</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {differentials.map((diff) => (
              <div key={diff.title} className="p-6 rounded-2xl bg-card border border-border">
                <diff.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-heading font-bold mb-2">{diff.title}</h3>
                <p className="text-muted-foreground text-sm">{diff.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqItems} subtitle="Tire suas dúvidas sobre estruturas para painéis" />

      {/* About Company */}
      <AboutCompany />

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Instalação de estrutura com a <span className="text-gradient">Eclipse</span>
          </h2>
          <Button variant="hero" size="xl" asChild>
            <a href="https://wa.me/5548999999999" target="_blank">
              Falar com Especialista
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
