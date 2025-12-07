import { Layout } from "@/components/layout/Layout";
import { Shield } from "lucide-react";

export default function PoliticaPrivacidade() {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Política de <span className="text-gradient">Privacidade</span>
              </h1>
              <p className="text-muted-foreground">
                Última atualização: Dezembro de 2024
              </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  1. Introdução
                </h2>
                <p className="text-muted-foreground">
                  A Eclipse Soluções Visuais está comprometida em proteger sua privacidade. 
                  Esta Política de Privacidade explica como coletamos, usamos, armazenamos 
                  e protegemos suas informações pessoais quando você visita nosso site ou 
                  utiliza nossos serviços.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  2. Dados que Coletamos
                </h2>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  2.1 Dados fornecidos por você
                </h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Nome completo</li>
                  <li>Endereço de e-mail</li>
                  <li>Número de telefone</li>
                  <li>Mensagens enviadas através do formulário de contato</li>
                  <li>Informações sobre projetos e solicitações de orçamento</li>
                </ul>
                
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  2.2 Dados coletados automaticamente
                </h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Endereço IP</li>
                  <li>Tipo de navegador e dispositivo</li>
                  <li>Páginas visitadas e tempo de permanência</li>
                  <li>Data e hora de acesso</li>
                  <li>Origem do tráfego (como você chegou ao nosso site)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  3. Como Usamos seus Dados
                </h2>
                <p className="text-muted-foreground mb-4">
                  Utilizamos suas informações para:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Responder às suas solicitações e mensagens</li>
                  <li>Enviar orçamentos e propostas comerciais</li>
                  <li>Melhorar nosso site e serviços</li>
                  <li>Analisar tendências de uso e desempenho</li>
                  <li>Cumprir obrigações legais</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  4. Cookies e Tecnologias Similares
                </h2>
                <p className="text-muted-foreground mb-4">
                  Nosso site utiliza cookies para:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong>Cookies Essenciais:</strong> Necessários para o funcionamento básico do site</li>
                  <li><strong>Cookies de Análise:</strong> Nos ajudam a entender como você usa o site</li>
                  <li><strong>Cookies de Preferências:</strong> Salvam suas configurações e escolhas</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Você pode gerenciar suas preferências de cookies através das configurações 
                  do seu navegador ou através do banner de consentimento em nosso site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  5. Compartilhamento de Dados
                </h2>
                <p className="text-muted-foreground">
                  Não vendemos, alugamos ou compartilhamos suas informações pessoais com 
                  terceiros, exceto quando necessário para:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                  <li>Prestação dos nossos serviços (ex: parceiros de logística)</li>
                  <li>Cumprimento de obrigações legais</li>
                  <li>Proteção dos nossos direitos e propriedade</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  6. Segurança dos Dados
                </h2>
                <p className="text-muted-foreground">
                  Implementamos medidas de segurança técnicas e organizacionais para 
                  proteger suas informações contra acesso não autorizado, alteração, 
                  divulgação ou destruição. Isso inclui criptografia de dados, firewalls 
                  e controles de acesso restritos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  7. Seus Direitos
                </h2>
                <p className="text-muted-foreground mb-4">
                  De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Acessar seus dados pessoais</li>
                  <li>Corrigir dados incompletos ou inexatos</li>
                  <li>Solicitar a exclusão dos seus dados</li>
                  <li>Revogar o consentimento a qualquer momento</li>
                  <li>Solicitar a portabilidade dos dados</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  8. Retenção de Dados
                </h2>
                <p className="text-muted-foreground">
                  Mantemos suas informações apenas pelo tempo necessário para cumprir 
                  as finalidades descritas nesta política ou conforme exigido por lei. 
                  Após esse período, os dados são excluídos de forma segura.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  9. Contato
                </h2>
                <p className="text-muted-foreground">
                  Para exercer seus direitos ou tirar dúvidas sobre esta política, 
                  entre em contato conosco:
                </p>
                <div className="mt-4 p-4 bg-card rounded-lg border border-border">
                  <p className="text-foreground font-medium">Eclipse Soluções Visuais</p>
                  <p className="text-muted-foreground">E-mail: contato@eclipseled.com.br</p>
                  <p className="text-muted-foreground">Endereço: R. Pedro Venâncio Martins, 168 - Capivari de Baixo/SC, 88745-000</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  10. Alterações nesta Política
                </h2>
                <p className="text-muted-foreground">
                  Podemos atualizar esta Política de Privacidade periodicamente. 
                  Recomendamos que você revise esta página regularmente para estar 
                  ciente de quaisquer alterações. A data da última atualização será 
                  sempre indicada no topo desta página.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
