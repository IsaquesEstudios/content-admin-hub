import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench, Settings, Zap, Cable, Cpu, CheckCircle } from "lucide-react";
import ledMaintenanceImage from "@/assets/led-maintenance.jpg";

const services = [
  { icon: Cpu, title: "Troca de Módulos", description: "Substituição de placas com LEDs queimados ou falhas de cor." },
  { icon: Zap, title: "Fontes de Alimentação", description: "Diagnóstico e troca de fontes queimadas (110v/220v)." },
  { icon: Cable, title: "Cabeamento", description: "Substituição de cabos Flat e cabos de rede oxidados." },
  { icon: Settings, title: "Receiving Cards", description: "Substituição e atualização de placas receptoras." },
];

const preventive = [
  "Limpeza interna e externa dos gabinetes",
  "Reaperto de parafusos e verificação da estrutura",
  "Medição de tensão elétrica e verificação de aterramento",
];

const benefits = [
  { icon: CheckCircle, title: "Diagnóstico Preciso", description: "Identificamos a raiz do problema para gerar economia." },
  { icon: CheckCircle, title: "Atendimento Local", description: "Estamos em Santa Catarina (DDD 48). Nada de esperar dias." },
  { icon: CheckCircle, title: "Treinamento Operacional", description: "Ensinamos sua equipe a operar corretamente." },
];

export default function Manutencao() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={ledMaintenanceImage} alt="Manutenção de painel de LED" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-32 pb-16">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Manutenção
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Manutenção e Suporte para{" "}
              <span className="text-gradient">Painéis de LED</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Seu painel apagou, desconfigurou ou está com falhas? A Eclipse Soluções Visuais 
              tem as melhores peças e pronto atendimento técnico em Santa Catarina.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="https://wa.me/5548999999999" target="_blank">
                Solicitar Atendimento
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
              Não deixe seu painel <span className="text-gradient">no escuro</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Sabemos que um painel de LED desligado é prejuízo. Nossa equipe está pronta para 
              diagnosticar e resolver com agilidade. Atendemos Igrejas, Postos de Combustível, 
              Comércios e Eventos, mesmo que o equipamento não tenha sido comprado conosco.
            </p>
          </div>
        </div>
      </section>

      {/* Corrective Services */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Manutenção <span className="text-gradient">Corretiva</span>
            </h2>
            <p className="text-muted-foreground">Identificação e conserto de falhas visíveis</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.title} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all text-center">
                <service.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preventive Services */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Manutenção <span className="text-gradient">Preventiva</span>
              </h2>
              <p className="text-muted-foreground">Aumente a vida útil do seu equipamento</p>
            </div>
            <ul className="space-y-4">
              {preventive.map((item) => (
                <li key={item} className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Por que contratar a <span className="text-gradient">Eclipse?</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="p-6 rounded-2xl bg-card border border-border text-center">
                <benefit.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Manutenção de LEDs em <span className="text-gradient">Santa Catarina</span>
          </h2>
          <Button variant="hero" size="xl" asChild>
            <a href="https://wa.me/5548999999999" target="_blank">
              Falar com Técnico
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
