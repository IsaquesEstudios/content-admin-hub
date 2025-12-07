import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Fuel, ShoppingBag, Calendar, Sun, Moon, Layers, Eye, Smartphone, Ruler } from "lucide-react";
import { FAQ } from "@/components/sections/FAQ";
import { AboutCompany } from "@/components/sections/AboutCompany";
import ledTotemImage from "@/assets/led-totem.jpg";

const useCases = [
  { icon: Fuel, title: "Postos de Combustível", description: "Altere preços instantaneamente via sistema com brilho intenso visível à distância." },
  { icon: ShoppingBag, title: "Varejo e Shopping", description: "Exiba a coleção nova, promoção do dia ou vídeos dos produtos na vitrine digital." },
  { icon: Calendar, title: "Eventos Corporativos", description: "Sinalize salas, exiba agenda do evento ou dê boas-vindas aos visitantes." },
];

const types = [
  { icon: Sun, title: "Totem Outdoor (Externo)", description: "Estrutura robusta, fixada ao solo, blindada contra chuva e sol (IP65). Ideal para calçadas e postos." },
  { icon: Moon, title: "Totem Indoor (Interno)", description: "Design 'Slim' (fino) e elegante. Pode contar com base móvel para facilitar deslocamento." },
  { icon: Layers, title: "Totem Dupla Face", description: "Comunicação em dobro. Exiba mensagens para quem entra e para quem sai." },
];

const advantages = [
  {
    icon: Eye,
    title: "Altura dos olhos",
    description: "Totens posicionam sua mensagem na altura ideal de visualização, garantindo máximo impacto.",
  },
  {
    icon: Smartphone,
    title: "Fácil atualização",
    description: "Altere o conteúdo via computador, pendrive ou até mesmo pelo celular em modelos com WiFi.",
  },
  {
    icon: Ruler,
    title: "Sob medida",
    description: "Fabricamos totens em qualquer tamanho, com acabamento em ACM, aço inox ou pintura personalizada.",
  },
];

const faqItems = [
  {
    question: "O totem pode ficar exposto ao sol e chuva?",
    answer: "Sim! Nossos totens outdoor possuem proteção IP65, sendo totalmente resistentes à água, poeira e raios UV. São projetados para funcionar 24 horas em qualquer condição climática de Santa Catarina.",
  },
  {
    question: "Qual a resolução ideal para um totem de LED?",
    answer: "Para totens indoor onde a visualização é próxima (1-3 metros), recomendamos resoluções P2.5 ou P3. Para totens outdoor vistos de longe, P4 ou P5 oferecem excelente custo-benefício.",
  },
  {
    question: "O totem precisa de fundação no solo?",
    answer: "Totens outdoor fixos precisam de fundação em concreto para garantir estabilidade e segurança. Já totens indoor podem ter base móvel com rodízios para fácil deslocamento.",
  },
];

export default function Totens() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={ledTotemImage} alt="Totem de LED" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-32 pb-16">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Totens de LED
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Criação de totem de LED em{" "}
              <span className="text-gradient">Santa Catarina</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Coloque a publicidade digital certa na altura dos olhos do seu cliente. 
              Potencialize suas mensagens com elegância, mobilidade e alto impacto visual.
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

      {/* What is */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              O que é um <span className="text-gradient">Totem de LED?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              O Totem de LED é a solução perfeita para comunicação visual dinâmica sem grandes obras. 
              Com design vertical e moderno, ele aproxima a sua marca do consumidor, sendo ideal para 
              transmitir informações rápidas, promoções e vídeos em locais de alto tráfego.
            </p>
            <p className="text-muted-foreground text-lg">
              Diferente de painéis de parede que exigem estruturas fixas, totens podem ser instalados 
              em calçadas, recepções, vitrines e áreas de circulação, maximizando o alcance da sua comunicação.
            </p>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Vantagens do <span className="text-gradient">Totem de LED</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage) => (
              <div key={advantage.title} className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all text-center">
                <advantage.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-heading font-bold mb-3">{advantage.title}</h3>
                <p className="text-muted-foreground text-sm">{advantage.description}</p>
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
              Onde utilizar <span className="text-gradient">nossos Totens?</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all text-center">
                <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Tipos de <span className="text-gradient">Totem</span>
            </h2>
            <p className="text-muted-foreground">Escolha o modelo ideal para sua aplicação</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {types.map((type) => (
              <div key={type.title} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all">
                <type.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-heading font-bold mb-2">{type.title}</h3>
                <p className="text-muted-foreground text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqItems} subtitle="Tire suas dúvidas sobre totens de LED" />

      {/* About Company */}
      <AboutCompany />

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Faça seu totem de LED <span className="text-gradient">conosco</span>
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
