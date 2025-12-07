import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  Send,
  Clock
} from "lucide-react";

const contactInfo = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "(48) 9 9999-9999",
    href: "https://wa.me/5548999999999",
    description: "Resposta rápida",
  },
  {
    icon: Phone,
    title: "Telefone",
    value: "(48) 9999-9999",
    href: "tel:+5548999999999",
    description: "Seg a Sex, 8h às 18h",
  },
  {
    icon: Mail,
    title: "E-mail",
    value: "contato@eclipseled.com.br",
    href: "mailto:contato@eclipseled.com.br",
    description: "Respondemos em até 24h",
  },
  {
    icon: Clock,
    title: "Horário",
    value: "Seg a Sex",
    href: null,
    description: "8h às 18h",
  },
];

export default function Contato() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Create WhatsApp message
    const whatsappMessage = `*Contato via Site*%0A%0A*Nome:* ${formData.name}%0A*E-mail:* ${formData.email}%0A*Assunto:* ${formData.subject}%0A%0A*Mensagem:*%0A${formData.message}`;
    
    window.open(`https://wa.me/5548999999999?text=${whatsappMessage}`, "_blank");

    toast({
      title: "Redirecionando para o WhatsApp",
      description: "Complete o envio da sua mensagem pelo WhatsApp.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Contato
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Fale{" "}
              <span className="text-gradient">Conosco</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Tem um projeto em mente? Precisa de um orçamento detalhado ou gostaria de tirar 
              dúvidas sobre nossos serviços? Entre em contato conosco. Nossa equipe está pronta 
              para transformar sua ideia em uma solução visual de alto impacto.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {contactInfo.map((info) => (
              <div key={info.title} className="text-center">
                {info.href ? (
                  <a 
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group block"
                  >
                    <info.icon className="w-8 h-8 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <h3 className="font-heading font-semibold text-sm mb-1">{info.title}</h3>
                    <p className="text-primary font-medium text-sm group-hover:underline">{info.value}</p>
                    <p className="text-xs text-muted-foreground">{info.description}</p>
                  </a>
                ) : (
                  <div>
                    <info.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h3 className="font-heading font-semibold text-sm mb-1">{info.title}</h3>
                    <p className="text-foreground font-medium text-sm">{info.value}</p>
                    <p className="text-xs text-muted-foreground">{info.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form and Map */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">
                Envie-nos uma <span className="text-gradient">Mensagem</span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Seu Nome</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Digite seu nome"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Seu E-mail</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Digite seu e-mail"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Assunto</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Qual o assunto?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem / Detalhes do Projeto</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Descreva seu projeto ou dúvida..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full md:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  <Send className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">
                Nossa <span className="text-gradient">Localização</span>
              </h2>
              <div className="rounded-2xl overflow-hidden border border-border shadow-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.0!2d-43.39!3d-22.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDU3JzAwLjAiUyA0M8KwMjMnMjQuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Eclipse Soluções Visuais"
                />
              </div>
              <div className="mt-6 p-6 rounded-xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-semibold mb-1">Endereço</h3>
                    <p className="text-muted-foreground">
                      Rua Creso, 350<br />
                      Jacarepaguá - RJ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Prefere uma conversa <span className="text-gradient">rápida?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Chame no WhatsApp para uma resposta imediata. Nossa equipe está pronta para atendê-lo.
          </p>
          <Button variant="whatsapp" size="xl" asChild>
            <a href="https://wa.me/5548999999999" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              Chamar no WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
