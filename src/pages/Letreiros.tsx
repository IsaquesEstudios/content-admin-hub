import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Store, Fuel, Church, Utensils, Building } from "lucide-react";
import ledSignImage from "@/assets/led-sign.jpg";

const useCases = [
  { icon: Store, title: "Fachadas de Lojas", description: "Promoções relâmpago, horário de funcionamento, mensagens de boas-vindas." },
  { icon: Fuel, title: "Postos de Combustível", description: "Atualização instantânea de preços, serviços e promoções da conveniência." },
  { icon: Church, title: "Igrejas e Templos", description: "Horários de cultos, versículos bíblicos, agenda de eventos." },
  { icon: Utensils, title: "Bares e Restaurantes", description: "Prato do dia, atrações musicais, Happy Hour e telefones." },
  { icon: Building, title: "Recepções Internas", description: "Guichês de atendimento, avisos de segurança, chamadas de senha." },
];

export default function Letreiros() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={ledSignImage} alt="Letreiro em LED" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-32 pb-16">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Letreiros em LED
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Letreiro em LED{" "}
              <span className="text-gradient">Santa Catarina</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Do letreiro digital que vende na fachada ao Neon que decora seu interior. 
              Soluções completas de sinalização luminosa para sua empresa.
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

      {/* Quality */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Letreiro de <span className="text-gradient">alta qualidade</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Sabemos que um painel de LED é um investimento importante para o seu negócio. 
              Por isso, fugimos de componentes genéricos de baixa qualidade. Nossos produtos são 
              projetados para suportar o uso contínuo e as variações climáticas, garantindo que 
              sua marca brilhe com a mesma intensidade no primeiro e no milésimo dia de uso.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Onde utilizar <span className="text-gradient">letreiros?</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all">
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-heading font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Letreiro em LED para <span className="text-gradient">sua região</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Atendemos toda Santa Catarina com os melhores letreiros de LED do mercado.
          </p>
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
