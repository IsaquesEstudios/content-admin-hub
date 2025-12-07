import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { X, Cookie, ChevronDown, ChevronUp } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Delay to show after page load
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-card border border-border rounded-2xl shadow-2xl p-6 animate-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
              <Cookie className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-heading font-semibold text-lg mb-2">
                Sua privacidade é importante para nós
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência 
                em nosso site, analisar o tráfego e personalizar conteúdo. Ao continuar 
                navegando, você concorda com nossa{" "}
                <Link to="/politica-de-privacidade" className="text-primary hover:underline">
                  Política de Privacidade
                </Link>
                .
              </p>

              {/* Details Toggle */}
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
              >
                {showDetails ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
                {showDetails ? "Ocultar detalhes" : "Ver detalhes dos dados coletados"}
              </button>

              {/* Detailed Information */}
              {showDetails && (
                <div className="bg-muted/50 rounded-lg p-4 mb-4 text-sm space-y-3">
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Cookies Essenciais</h4>
                    <p className="text-muted-foreground">
                      Necessários para o funcionamento do site. Incluem preferências de sessão 
                      e configurações básicas.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Cookies de Análise</h4>
                    <p className="text-muted-foreground">
                      Nos ajudam a entender como os visitantes interagem com o site, 
                      coletando informações anônimas como páginas visitadas e tempo de navegação.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Dados do Formulário</h4>
                    <p className="text-muted-foreground">
                      Quando você envia um formulário de contato, coletamos nome, e-mail e 
                      mensagem para responder à sua solicitação.
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Para mais informações, leia nossa{" "}
                    <Link to="/politica-de-privacidade" className="text-primary hover:underline">
                      Política de Privacidade
                    </Link>{" "}
                    e{" "}
                    <Link to="/termos-de-uso" className="text-primary hover:underline">
                      Termos de Uso
                    </Link>.
                  </p>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="hero" onClick={handleAccept}>
                  Aceitar Todos
                </Button>
                <Button variant="outline" onClick={handleReject}>
                  Recusar Não-Essenciais
                </Button>
              </div>
            </div>
            <button
              onClick={handleReject}
              className="p-1 rounded-lg hover:bg-muted transition-colors flex-shrink-0"
              aria-label="Fechar"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
