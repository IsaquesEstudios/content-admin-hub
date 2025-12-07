import { Link } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin,
  MessageCircle
} from "lucide-react";

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
  { name: "Blog", href: "/blog" },
  { name: "Contato", href: "/#contato" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-heading font-bold text-gradient">
                eclipse
              </span>
              <span className="text-xs font-medium text-muted-foreground block -mt-1">
                Soluções Visuais
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empresa especializada em comunicação visual de alto impacto. 
              Painéis de LED, estruturas personalizadas e manutenção em Santa Catarina.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
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
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">
              Contato
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/5548999999999"
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors text-sm group"
                >
                  <MessageCircle className="w-5 h-5 mt-0.5 text-primary" />
                  <span>(48) 9 9999-9999</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+5548999999999"
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-5 h-5 mt-0.5 text-primary" />
                  <span>(48) 9999-9999</span>
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
                <span>Florianópolis, Santa Catarina</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2024 Eclipse Soluções Visuais. Todos os direitos reservados.</p>
            <p>
              Desenvolvido por{" "}
              <a href="#" className="text-primary hover:underline">
                Eclipse LED
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
