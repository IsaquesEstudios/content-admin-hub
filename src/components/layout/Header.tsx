import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoEclipse from "@/assets/logo-eclipse.webp";

const serviceLinks = [
  { name: "Painéis de LED", href: "/paineis-de-led" },
  { name: "Letreiros", href: "/letreiros" },
  { name: "Totens", href: "/totens" },
  { name: "Estruturas", href: "/estruturas" },
  { name: "Manutenção", href: "/manutencao" },
  { name: "Peças", href: "/pecas" },
];

const navigation = [
  { name: "Início", href: "/" },
  { name: "Serviços", href: "/servicos", hasDropdown: true },
  { name: "Sobre Nós", href: "/sobre" },
  { name: "Blog", href: "/blog" },
  { name: "Contato", href: "/contato" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isServicePage = serviceLinks.some(
    (link) => location.pathname === link.href
  ) || location.pathname === "/servicos";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src={logoEclipse}
              alt="Eclipse Soluções Visuais"
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) =>
              item.hasDropdown ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    to={item.href}
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1",
                      isServicePage
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )}
                  >
                    {item.name}
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        servicesOpen && "rotate-180"
                      )}
                    />
                  </Link>
                  {/* Dropdown */}
                  <div
                    className={cn(
                      "absolute top-full left-0 mt-1 w-56 rounded-xl bg-background border border-border shadow-xl overflow-hidden transition-all duration-200 z-50",
                      servicesOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    )}
                  >
                    <div className="py-2">
                      {serviceLinks.map((link) => (
                        <Link
                          key={link.name}
                          to={link.href}
                          className={cn(
                            "block px-4 py-2.5 text-sm transition-colors",
                            location.pathname === link.href
                              ? "text-primary bg-primary/10"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted"
                          )}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                    location.pathname === item.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <a href="tel:+5548999999999">
                <Phone className="w-4 h-4 mr-2" />
                (48) 9999-9999
              </a>
            </Button>
            <Button variant="whatsapp" size="sm" asChild>
              <a
                href="https://wa.me/5548999999999"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-[600px] pb-6" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-2 pt-4">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={cn(
                "px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200",
                location.pathname === "/"
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              Início
            </Link>
            
            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className={cn(
                  "w-full px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 flex items-center justify-between",
                  isServicePage
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                Serviços
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-200",
                    mobileServicesOpen && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-200",
                  mobileServicesOpen ? "max-h-96" : "max-h-0"
                )}
              >
                <div className="pl-4 py-2 space-y-1">
                  <Link
                    to="/servicos"
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block px-4 py-2 text-sm rounded-lg transition-colors",
                      location.pathname === "/servicos"
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )}
                  >
                    Todos os Serviços
                  </Link>
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block px-4 py-2 text-sm rounded-lg transition-colors",
                        location.pathname === link.href
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      )}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/blog"
              onClick={() => setIsOpen(false)}
              className={cn(
                "px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200",
                location.pathname === "/blog"
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              Blog
            </Link>

            <div className="flex flex-col gap-2 pt-4 border-t border-border mt-2">
              <Button variant="outline" size="default" asChild>
                <a href="tel:+5548999999999">
                  <Phone className="w-4 h-4 mr-2" />
                  (48) 9999-9999
                </a>
              </Button>
              <Button variant="whatsapp" size="default" asChild>
                <a
                  href="https://wa.me/5548999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
