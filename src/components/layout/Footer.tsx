import { Link } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram,
  MessageCircle
} from "lucide-react";
import logoEclipse from "@/assets/logo-eclipse.webp";

const services = [
  { name: "Painéis de LED", href: "/paineis-de-led" },
  { name: "Letreiros em LED", href: "/letreiros" },
  { name: "Totens de LED", href: "/totens" },
  { name: "Estruturas", href: "/estruturas" },
  { name: "Manutenção", href: "/manutencao" },
  { name: "Peças e Acessórios", href: "/pecas" },
];

const links = [
  { name: "Início", href: "/" },
  { name: "Serviços", href: "/servicos" },
  { name: "Sobre Nós", href: "/sobre" },
  { name: "Blog", href: "/blog" },
  { name: "Contato", href: "/contato" },
];

const legalLinks = [
  { name: "Política de Privacidade", href: "/politica-de-privacidade" },
  { name: "Termos de Uso", href: "/termos-de-uso" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img
                src={logoEclipse}
                alt="Eclipse Soluções Visuais"
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empresa especializada em comunicação visual de alto impacto. 
              Painéis de LED, estruturas personalizadas e manutenção em Santa Catarina.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/p/Eclipse-Solu%C3%A7%C3%B5es-Visuais-100064940701741/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/eclipsevisuais/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">
              Nossos Serviços
            </h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              {links.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-heading font-semibold text-foreground mt-6 mb-3 text-sm">
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">
              Contato
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/5548984180377"
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors text-sm group"
                >
                  <MessageCircle className="w-5 h-5 mt-0.5 text-primary" />
                  <span>(48) 98418-0377</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+5548984180377"
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-5 h-5 mt-0.5 text-primary" />
                  <span>(48) 98418-0377</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@eclipseled.com.br"
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-5 h-5 mt-0.5 text-primary" />
                  <span>contato@eclipseled.com.br</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                <span>R. Pedro Venâncio Martins, 168<br />Capivari de Baixo/SC, 88745-000</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-muted-foreground">
            <p>© 2024 Eclipse Soluções Visuais. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
