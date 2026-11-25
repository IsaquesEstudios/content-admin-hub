import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor, Type, Columns, Building, Wrench, Cpu } from "lucide-react";
import ledPanelImage from "@/assets/led-panel-indoor.jpg";
import ledSignImage from "@/assets/led-sign.jpg";
import ledTotemImage from "@/assets/led-totem.jpg";
import ledStructureImage from "@/assets/led-structure.jpg";
import ledMaintenanceImage from "@/assets/led-maintenance.jpg";
import ledPartsImage from "@/assets/led-parts.jpg";

const services = [
  {
    icon: Monitor,
    title: "Painéis de LED",
    description: "Painéis de alta resolução para indoor e outdoor. Ideal para igrejas, postos de combustível, vitrines e eventos. Visibilidade máxima 24 horas por dia.",
    image: ledPanelImage,
    href: "/paineis-de-led",
    features: ["Alta resolução", "Indoor e Outdoor", "Brilho ajustável"],
  },
  {
    icon: Type,
    title: "Letreiros em LED",
    description: "Letreiros digitais que permitem trocar mensagens instantaneamente. Perfeitos para fachadas, promoções e avisos dinâmicos.",
    image: ledSignImage,
    href: "/letreiros",
    features: ["Fácil atualização", "Alta durabilidade", "Resistente ao clima"],
  },
  {
    icon: Columns,
    title: "Totens de LED",
    description: "Estruturas verticais prontas para uso. Design moderno e elegante para vitrines, recepções e postos de combustível.",
    image: ledTotemImage,
    href: "/totens",
    features: ["Indoor e Outdoor", "Design slim", "Dupla face disponível"],
  },
  {
    icon: Building,
    title: "Estruturas para Painéis",
    description: "Projetos e fabricação própria de estruturas metálicas sob medida. Segurança e estabilidade para seu investimento.",
    image: ledStructureImage,
    href: "/estruturas",
    features: ["Projeto personalizado", "Fabricação própria", "Acabamento premium"],
  },
  {
    icon: Wrench,
    title: "Manutenção e Suporte",
    description: "Assistência técnica especializada para painéis de LED. Manutenção corretiva e preventiva com atendimento rápido.",
    image: ledMaintenanceImage,
    href: "/manutencao",
    features: ["Diagnóstico preciso", "Atendimento local", "Peças originais"],
  },
  {
    icon: Cpu,
    title: "Peças e Acessórios",
    description: "Estoque completo de peças de reposição. Módulos, fontes, cabos e placas controladoras para manter seu equipamento funcionando.",
    image: ledPartsImage,
    href: "/pecas",
    features: ["Estoque local", "Peças testadas", "Entrega rápida"],
  },
];

export default function Servicos() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Nossos Serviços
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Soluções completas em{" "}
              <span className="text-gradient">LED</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Da fabricação à manutenção, oferecemos tudo que você precisa para 
              uma comunicação visual de alto impacto em Santa Catarina.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.href}
                className="group overflow-hidden rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover-glow"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-bold group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-primary text-sm font-medium">
                    Ver detalhes
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Não sabe qual solução é ideal para você?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Entre em contato com nossos especialistas e receba uma consultoria 
            gratuita para encontrar a melhor solução para o seu negócio.
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
