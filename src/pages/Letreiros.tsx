import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Store, Fuel, Church, Utensils, Building, Palette, Zap, Clock } from "lucide-react";
import { FAQ } from "@/components/sections/FAQ";
import { AboutCompany } from "@/components/sections/AboutCompany";
import ledSignImage from "@/assets/led-sign.jpg";

const useCases = [
  { icon: Store, title: "Fachadas de Lojas", description: "Promoções relâmpago, horário de funcionamento, mensagens de boas-vindas." },
  { icon: Fuel, title: "Postos de Combustível", description: "Atualização instantânea de preços, serviços e promoções da conveniência." },
  { icon: Church, title: "Igrejas e Templos", description: "Horários de cultos, versículos bíblicos, agenda de eventos." },
  { icon: Utensils, title: "Bares e Restaurantes", description: "Prato do dia, atrações musicais, Happy Hour e telefones." },
  { icon: Building, title: "Recepções Internas", description: "Guichês de atendimento, avisos de segurança, chamadas de senha." },
];

const types = [
  {
    icon: Palette,
    title: "Letreiro Digital RGB",
    description: "Texto colorido com animações e efeitos. Ideal para mensagens dinâmicas e promoções.",
  },
  {
    icon: Zap,
    title: "Letreiro Monocromático",
    description: "Texto em cor única (vermelho, verde, âmbar). Econômico e de alta visibilidade.",
  },
  {
    icon: Clock,
    title: "Letreiro com Hora/Temperatura",
    description: "Exibe informações úteis além das suas mensagens. Muito usado em farmácias e postos.",
  },
];

const faqItems = [
  {
    question: "Como faço para trocar as mensagens do letreiro?",
    answer: "Nossos letreiros acompanham software de controle simples e intuitivo. Você pode programar as mensagens via computador (cabo USB ou rede) ou até mesmo pelo celular em modelos com WiFi. Oferecemos treinamento completo na instalação.",
  },
  {
    question: "O letreiro funciona em dias de chuva?",
    answer: "Sim! Nossos letreiros para uso externo possuem proteção IP65, sendo resistentes à água, poeira e variações de temperatura. São projetados para funcionar 24 horas por dia em qualquer condição climática.",
  },
  {
    question: "Qual o tamanho ideal do letreiro para minha fachada?",
    answer: "O tamanho depende da distância de leitura desejada. Para leitura a 20 metros, recomendamos caracteres de pelo menos 15cm. Fazemos uma visita técnica gratuita para indicar o tamanho ideal para sua aplicação.",
  },
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
              <a href="https://wa.me/5548984180377" target="_blank" rel="noopener noreferrer">
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
            <p className="text-muted-foreground text-lg mb-4">
              Sabemos que um painel de LED é um investimento importante para o seu negócio. 
              Por isso, fugimos de componentes genéricos de baixa qualidade. Nossos produtos são 
              projetados para suportar o uso contínuo e as variações climáticas.
            </p>
            <p className="text-muted-foreground text-lg">
              Garantimos que sua marca brilhe com a mesma intensidade no primeiro e no milésimo dia de uso. 
              Utilizamos LEDs de alta luminosidade, placas controladoras de qualidade e estruturas 
              em alumínio ou aço galvanizado para máxima durabilidade.
            </p>
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Tipos de <span className="text-gradient">Letreiros</span>
            </h2>
            <p className="text-muted-foreground">Escolha o modelo ideal para sua aplicação</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {types.map((type) => (
              <div key={type.title} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all text-center">
                <type.icon className="w-12 h-12 text-eclipse-blue mx-auto mb-4" />
                <h3 className="font-heading font-bold text-lg mb-2">{type.title}</h3>
                <p className="text-muted-foreground text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Onde utilizar <span className="text-gradient">letreiros?</span>
            </h2>
            <p className="text-muted-foreground">Letreiros digitais são versáteis e se adaptam a diversos segmentos</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all">
                <item.icon className="w-10 h-10 text-eclipse-blue mb-4" />
                <h3 className="font-heading font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqItems} subtitle="Tire suas dúvidas sobre letreiros em LED" />

      {/* About Company */}
      <AboutCompany />

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Letreiro em LED para <span className="text-gradient">sua região</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Atendemos toda Santa Catarina com os melhores letreiros de LED do mercado.
          </p>
          <Button variant="hero" size="xl" asChild>
            <a href="https://wa.me/5548984180377" target="_blank" rel="noopener noreferrer">
              Falar com Especialista
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
