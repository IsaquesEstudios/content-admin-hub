import { Phone, MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import logoEclipse from "@/assets/logo-eclipse.webp";

// Imagens da campanha - usando caminhos absolutos da pasta public para garantir inclusão no build
const heroDesktop = "/images/campanha/comunicacao-visual.jpg";
const heroMobile = "/images/campanha/comunicacao-visual-celular.jpg";
const paineisLed = "/images/campanha/paineis-em-led.jpg";
const comunicacao = "/images/campanha/comunicacao.jpg";
const whatsappLink = "https://api.whatsapp.com/send?phone=554884180377&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20Pain%C3%A9is%20de%20LED.";
const processSteps = [{
  number: "1º",
  title: "Consulta Com Cliente",
  description: "Entendemos suas necessidades e objetivos"
}, {
  number: "2º",
  title: "Análise de Projeto",
  description: "Desenvolvemos a melhor solução"
}, {
  number: "3º",
  title: "Execução do Projeto",
  description: "Fabricação e instalação profissional"
}, {
  number: "4º",
  title: "Pós Venda",
  description: "Suporte contínuo e manutenção"
}];
const advantages = [{
  title: "Diversidade",
  description: "Escolha entre diferentes modelos de painel em led para seu projeto.",
  icon: "grid"
}, {
  title: "Fácil integração",
  description: "Adicione informações e novos projetos ao sistema de maneira mais rápida.",
  icon: "monitor"
}, {
  title: "Garantia e Suporte",
  description: "Suporte remoto para operação e reduzindo os custos para o cliente.",
  icon: "support"
}, {
  title: "Alta Iluminação",
  description: "Painéis de LED com intensidade luminosa elevada para melhor visibilidade.",
  icon: "brightness"
}, {
  title: "Projetos Regularizado",
  description: "Seu projeto dentro das normas de engenharia como exigidas.",
  icon: "document"
}, {
  title: "Painel de LED",
  description: "Painéis de LED internos de alta resolução para promover seu negócio.",
  icon: "led"
}, {
  title: "Monitores Comerciais",
  description: "Fachadas internas e externas. Perfeito para lojas, bares, outros.",
  icon: "commercial"
}, {
  title: "Desempenho",
  description: "Desempenho de projeção em alta definição com diferentes modelos de leds.",
  icon: "performance"
}];
const faqItems = [{
  question: "Qual é a vida útil de um painel de LED?",
  answer: "Os painéis de LED da Eclipse possuem vida útil média de 100.000 horas de uso, o que equivale a aproximadamente 11 anos de funcionamento contínuo. Com manutenção adequada, esse tempo pode ser ainda maior."
}, {
  question: "Qual a diferença entre painel indoor e outdoor?",
  answer: "Painéis outdoor são projetados para uso externo, com maior resistência a intempéries, brilho elevado para visibilidade sob luz solar direta e proteção IP65. Painéis indoor são otimizados para ambientes internos, com menor espaçamento entre pixels para visualização mais próxima."
}, {
  question: "Quanto custa um painel de LED?",
  answer: "O valor varia conforme o tamanho, tipo (indoor/outdoor), resolução e aplicação específica. Entre em contato conosco para um orçamento personalizado de acordo com suas necessidades."
}, {
  question: "Vocês fazem instalação em todo o Brasil?",
  answer: "Sim! A Eclipse atende todo o território nacional, com equipe técnica especializada para instalação, configuração e treinamento operacional."
}, {
  question: "Qual o prazo de entrega?",
  answer: "O prazo varia de acordo com o projeto e disponibilidade em estoque. Projetos padrão têm prazo médio de 15 a 30 dias úteis. Consulte-nos para prazos específicos."
}, {
  question: "Vocês oferecem manutenção?",
  answer: "Sim, oferecemos contratos de manutenção preventiva e corretiva, além de suporte técnico remoto e presencial para garantir o funcionamento ideal do seu painel."
}];
const products = [{
  title: "Painel de LED",
  description: "Soluções em painéis de LED para propaganda, fachadas e eventos. Indoor e outdoor com alta resolução.",
  features: ["Alta luminosidade", "Baixo consumo", "Fácil manutenção"]
}, {
  title: "Monitores Comerciais",
  description: "Monitores profissionais para uso comercial, vitrines e sinalização digital com qualidade superior.",
  features: ["24/7 operação", "Alta durabilidade", "Telas de grande formato"]
}];
export default function Campanha() {
  return <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Floating WhatsApp Button */}
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-lg transition-all hover:scale-110" aria-label="WhatsApp">
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Desktop Background */}
        <div className="absolute inset-0 hidden md:block bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url(${heroDesktop})`
      }}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>
        {/* Mobile Background */}
        <div className="absolute inset-0 md:hidden bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url(${heroMobile})`
      }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>

        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-20 p-4 md:p-6 flex justify-between items-center">
          <img src={logoEclipse} alt="Eclipse LED" className="h-10 md:h-14" />
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2 rounded-full text-sm font-semibold transition-all">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-8 pt-24 pb-12">
          <div className="max-w-2xl">
            <p className="text-xs md:text-sm tracking-[0.3em] text-gray-300 mb-4 uppercase">
              Comunicação que mudará seu negócio
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="text-[#ff0080]">Painel</span>
              <br />
              <span className="text-[#ff0080]">de Led</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6">
              Destaque seu negócio com os <strong className="text-white">Painéis de Led Eclipse</strong>
            </p>
            <ul className="space-y-2 mb-8">
              <li className="text-[#ffd700] font-semibold text-lg md:text-xl flex items-center gap-2">
                <span className="w-2 h-2 bg-[#ffd700] rounded-full" />
                PAINEL DE LED OUTDOOR
              </li>
              <li className="text-[#ffd700] font-semibold text-lg md:text-xl flex items-center gap-2">
                <span className="w-2 h-2 bg-[#ffd700] rounded-full" />
                PAINEL DE LED INDOOR
              </li>
              <li className="text-[#ffd700] font-semibold text-lg md:text-xl flex items-center gap-2">
                <span className="w-2 h-2 bg-[#ffd700] rounded-full" />
                PAINEL DE LED PARA PROPAGANDA
              </li>
            </ul>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-lg">
              <MessageCircle className="w-6 h-6" />
              Descobrir Valores
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/50" />
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-[#111]">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-[#ff0080]">Nosso Processo</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => <div key={index} className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-6 text-center hover:border-[#ff0080]/50 transition-all">
                <span className="text-4xl md:text-5xl font-bold text-[#ff0080] block mb-3">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 md:py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Paineis de Led Para Outdoor e Indoor
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                  {advantage.icon === "grid" && (
                    <svg className="w-10 h-10 text-[#ff0080]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="3" width="7" height="7" />
                      <rect x="14" y="3" width="7" height="7" />
                      <rect x="3" y="14" width="7" height="7" />
                      <rect x="14" y="14" width="7" height="7" />
                    </svg>
                  )}
                  {advantage.icon === "monitor" && (
                    <svg className="w-10 h-10 text-[#ff0080]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                      <rect x="5" y="6" width="4" height="3" />
                      <rect x="10" y="6" width="4" height="3" />
                      <rect x="15" y="6" width="4" height="3" />
                      <rect x="5" y="10" width="4" height="3" />
                      <rect x="10" y="10" width="4" height="3" />
                      <rect x="15" y="10" width="4" height="3" />
                    </svg>
                  )}
                  {advantage.icon === "support" && (
                    <svg className="w-10 h-10 text-[#ff0080]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
                      <path d="M12 14a2 2 0 100-4 2 2 0 000 4z" />
                      <line x1="12" y1="2" x2="12" y2="6" />
                      <line x1="12" y1="18" x2="12" y2="22" />
                      <line x1="2" y1="12" x2="6" y2="12" />
                      <line x1="18" y1="12" x2="22" y2="12" />
                    </svg>
                  )}
                  {advantage.icon === "brightness" && (
                    <svg className="w-10 h-10 text-[#ff0080]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="5" />
                      <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                    </svg>
                  )}
                  {advantage.icon === "document" && (
                    <svg className="w-10 h-10 text-[#ff0080]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                      <polyline points="14,2 14,8 20,8" />
                      <line x1="8" y1="13" x2="16" y2="13" />
                      <line x1="8" y1="17" x2="16" y2="17" />
                    </svg>
                  )}
                  {advantage.icon === "led" && (
                    <svg className="w-10 h-10 text-[#ff0080]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="2" width="20" height="20" rx="2" />
                      <rect x="5" y="5" width="3" height="3" />
                      <rect x="10.5" y="5" width="3" height="3" />
                      <rect x="16" y="5" width="3" height="3" />
                      <rect x="5" y="10.5" width="3" height="3" />
                      <rect x="10.5" y="10.5" width="3" height="3" />
                      <rect x="16" y="10.5" width="3" height="3" />
                      <rect x="5" y="16" width="3" height="3" />
                      <rect x="10.5" y="16" width="3" height="3" />
                      <rect x="16" y="16" width="3" height="3" />
                    </svg>
                  )}
                  {advantage.icon === "commercial" && (
                    <svg className="w-10 h-10 text-[#ff0080]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  )}
                  {advantage.icon === "performance" && (
                    <svg className="w-10 h-10 text-[#ff0080]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="3" width="7" height="7" rx="1" />
                      <rect x="14" y="3" width="7" height="7" rx="1" />
                      <rect x="3" y="14" width="7" height="7" rx="1" />
                      <rect x="14" y="14" width="7" height="7" rx="1" />
                      <circle cx="6.5" cy="6.5" r="1.5" fill="currentColor" />
                      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                      <circle cx="6.5" cy="17.5" r="1.5" fill="currentColor" />
                      <circle cx="17.5" cy="17.5" r="1.5" fill="currentColor" />
                    </svg>
                  )}
                </div>
                <div>
                  <h3 className="text-[#ffd700] font-bold text-lg mb-1">{advantage.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#ff0080]/20 to-[#0a0a0a]">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Não Espere Mais! <span className="text-[#ff0080]">Solicite Seu Painel de LED</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Transforme a comunicação do seu negócio com painéis de LED de alta qualidade. 
            Entre em contato agora e receba um orçamento personalizado.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-10 py-5 rounded-full text-xl font-bold transition-all hover:scale-105 shadow-lg">
            <MessageCircle className="w-7 h-7" />
            Solicitar Orçamento
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url(${comunicacao})`
      }}>
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-[#ff0080]">30 Anos</span> de Comunicação Visual
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              A Eclipse Comunicação Visual é referência no mercado de painéis de LED, 
              letreiros e comunicação visual em geral. Com três décadas de experiência, 
              atendemos clientes em todo o Brasil com soluções personalizadas e tecnologia de ponta.
            </p>
            <p className="text-gray-300 text-lg mb-8">
              Nossa equipe de especialistas está pronta para transformar a visibilidade 
              do seu negócio com produtos de alta qualidade e suporte técnico completo.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-[#ff0080] hover:bg-[#e0006f] text-white px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-lg">
              <MessageCircle className="w-6 h-6" />
              Fale Conosco
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-[#111]">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-[#ff0080]">Perguntas Frequentes</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => <AccordionItem key={index} value={`item-${index}`} className="rounded-xl border border-gray-800 bg-[#1a1a1a] px-6 data-[state=open]:border-[#ff0080]/50">
                  <AccordionTrigger className="text-left font-semibold hover:text-[#ff0080] hover:no-underline py-5">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Ainda possui dúvidas? <span className="text-[#ff0080]">Entre em contato</span>
          </h2>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-lg">
            <MessageCircle className="w-6 h-6" />
            WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-[#050505] border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          Todos os Direitos Reservados - Eclipse Comunicação Visual 2024
        </div>
      </footer>
    </div>;
}