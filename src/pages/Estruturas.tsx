import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Wrench, Grid3X3, Building, Church, Fuel } from "lucide-react";
import ledStructureImage from "@/assets/led-structure.jpg";

const structureTypes = [
  { icon: Building, title: "Estruturas de Solo (Totens)", description: "Fixação robusta com fundação. Revestimento em ACM ou chapa metálica para acabamento moderno." },
  { icon: Grid3X3, title: "Estruturas de Fachada", description: "Suportes discretos que deixam o painel alinhado à arquitetura existente." },
  { icon: Church, title: "Estruturas Suspensas", description: "Sistemas de treliça (Box Truss) ou vigas discretas para palcos de igrejas." },
];

const differentials = [
  { icon: Wrench, title: "Portas de Visita", description: "Acessos traseiros facilitados para manutenção rápida e barata." },
  { icon: Shield, title: "Pintura de Alta Resistência", description: "Pintura eletrostática ou automotiva para evitar ferrugem e desgaste." },
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
            <p className="text-muted-foreground text-lg">
              Um painel de LED de alta qualidade precisa de uma sustentação à altura. 
              Possuímos expertise na fabricação e montagem de estruturas metálicas projetadas 
              especificamente para suportar o peso e as exigências técnicas dos painéis digitais.
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

      {/* Differentials */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Diferenciais da <span className="text-gradient">Fabricação Eclipse</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {differentials.map((diff) => (
              <div key={diff.title} className="p-6 rounded-2xl bg-background border border-border">
                <diff.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-heading font-bold mb-2">{diff.title}</h3>
                <p className="text-muted-foreground text-sm">{diff.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
