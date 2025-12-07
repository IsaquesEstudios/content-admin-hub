import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Zap, Cable, Grid3X3, CheckCircle, Truck, ShieldCheck, Headphones } from "lucide-react";
import { FAQ } from "@/components/sections/FAQ";
import { AboutCompany } from "@/components/sections/AboutCompany";
import ledPartsImage from "@/assets/led-parts.jpg";

const categories = [
  {
    icon: Cpu,
    title: "Hardware e Componentes de Controle",
    description: "Trabalhamos com Novastar, Linsn, Huidu, Colorlight.",
    items: ["Sending Cards (Cartões de Envio)", "Receiving Cards (Cartões de Recepção)", "Processadoras de Vídeo", "Player Box"],
  },
  {
    icon: Zap,
    title: "Fontes e Energia",
    description: "A principal causa de falhas em painéis é a alimentação inadequada.",
    items: ["Fontes de Alimentação 5V (40A, 60A, 80A)", "Cabos Powercon", "Réguas e Box de energia"],
  },
  {
    icon: Cable,
    title: "Cabeamento e Conectividade",
    description: "A qualidade da imagem depende da qualidade do cabo.",
    items: ["Cabos de Rede CAT6 blindados", "Cabos Flat para conexão interna", "Cabos HDMI, DVI e SDI"],
  },
  {
    icon: Grid3X3,
    title: "Estruturas e Acabamento",
    description: "Peças mecânicas e módulos para manutenção.",
    items: ["Módulos de LED (P2, P3.9, P5, P10)", "Fechos e Travas (Fast Lock)", "Parafusos Magnéticos"],
  },
];

const benefits = [
  { icon: Headphones, title: "Consultoria de Compatibilidade", description: "Envie a foto do modelo antigo e indicamos a peça compatível. Evite comprar errado." },
  { icon: Truck, title: "Agilidade na Entrega", description: "Retirada rápida em Florianópolis ou envio expresso para toda Santa Catarina." },
  { icon: ShieldCheck, title: "Produtos Testados", description: "As mesmas peças que usamos em nossas manutenções. Qualidade garantida." },
];

const popularParts = [
  "Módulos P10 Outdoor",
  "Módulos P3.9 Indoor",
  "Receiving Card Nova A5s Plus",
  "Receiving Card Linsn RV908",
  "Fonte Meanwell 5V 40A",
  "Fonte Chuanglian 5V 60A",
  "Sending Card Nova MSD300",
  "Cabo Flat 16 vias",
];

const faqItems = [
  {
    question: "Como sei qual peça é compatível com meu painel?",
    answer: "Envie fotos da peça antiga pelo WhatsApp. Nossa equipe técnica identificará o modelo e indicará a peça correta. Também precisamos saber a marca e modelo do seu painel, se possível.",
  },
  {
    question: "Vocês entregam para fora de Santa Catarina?",
    answer: "Sim! Enviamos para todo o Brasil via Sedex ou transportadora. O prazo e custo de frete são calculados no momento do pedido. Para SC, oferecemos entrega expressa.",
  },
  {
    question: "As peças têm garantia?",
    answer: "Sim, todas as peças possuem garantia de 3 a 12 meses conforme o fabricante. Guardamos registro de todas as vendas para facilitar eventual troca ou suporte.",
  },
];

export default function Pecas() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={ledPartsImage} alt="Peças para painéis de LED" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-32 pb-16">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Peças e Acessórios
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Peças de Reposição para{" "}
              <span className="text-gradient">Painéis de LED</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Mantenha seu equipamento funcionando com peças originais e de alta performance. 
              Realizamos troca e manutenção de tudo que for necessário. Estoque local em Santa Catarina.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="https://wa.me/5548999999999" target="_blank">
                Solicitar Peças
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Parts */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Peças mais <span className="text-gradient">procuradas</span>
              </h2>
              <p className="text-muted-foreground">Mantemos em estoque os itens de maior demanda</p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {popularParts.map((part) => (
                <span
                  key={part}
                  className="px-4 py-2 rounded-full bg-background border border-border text-sm hover:border-primary/50 transition-colors"
                >
                  {part}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Categorias de <span className="text-gradient">Peças</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category) => (
              <div key={category.title} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all">
                <category.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-heading font-bold mb-2">{category.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Por que comprar com a <span className="text-gradient">Eclipse?</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="p-6 rounded-2xl bg-background border border-border text-center">
                <benefit.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqItems} subtitle="Tire suas dúvidas sobre peças para painéis" />

      {/* About Company */}
      <AboutCompany />

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Peças com entrega rápida em <span className="text-gradient">Santa Catarina</span>
          </h2>
          <Button variant="hero" size="xl" asChild>
            <a href="https://wa.me/5548999999999" target="_blank">
              Solicitar Orçamento
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
