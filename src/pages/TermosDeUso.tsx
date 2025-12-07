import { Layout } from "@/components/layout/Layout";
import { FileText } from "lucide-react";

export default function TermosDeUso() {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Termos de <span className="text-gradient">Uso</span>
              </h1>
              <p className="text-muted-foreground">
                Última atualização: Dezembro de 2024
              </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  1. Aceitação dos Termos
                </h2>
                <p className="text-muted-foreground">
                  Ao acessar e usar o site da Eclipse Soluções Visuais, você concorda em 
                  cumprir e estar vinculado a estes Termos de Uso. Se você não concordar 
                  com qualquer parte destes termos, não deverá usar nosso site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  2. Descrição dos Serviços
                </h2>
                <p className="text-muted-foreground">
                  A Eclipse Soluções Visuais é uma empresa especializada em comunicação 
                  visual, oferecendo serviços de:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                  <li>Painéis de LED para publicidade e comunicação</li>
                  <li>Letreiros luminosos e não-luminosos</li>
                  <li>Totens de LED para diversas aplicações</li>
                  <li>Estruturas metálicas e fachadas</li>
                  <li>Manutenção preventiva e corretiva</li>
                  <li>Comercialização de peças e acessórios</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  3. Uso do Site
                </h2>
                <p className="text-muted-foreground mb-4">
                  Você concorda em usar este site apenas para fins legais e de maneira 
                  que não infrinja os direitos de terceiros. É proibido:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Usar o site para qualquer atividade ilegal ou fraudulenta</li>
                  <li>Tentar obter acesso não autorizado a qualquer parte do site</li>
                  <li>Transmitir vírus ou código malicioso</li>
                  <li>Coletar informações de outros usuários sem consentimento</li>
                  <li>Interferir no funcionamento normal do site</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  4. Propriedade Intelectual
                </h2>
                <p className="text-muted-foreground">
                  Todo o conteúdo deste site, incluindo textos, imagens, logotipos, 
                  gráficos, vídeos e design, é propriedade da Eclipse Soluções Visuais 
                  ou de seus licenciadores e está protegido pelas leis de direitos 
                  autorais e propriedade intelectual. A reprodução, distribuição ou 
                  uso não autorizado é estritamente proibido.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  5. Informações e Orçamentos
                </h2>
                <p className="text-muted-foreground">
                  As informações apresentadas neste site, incluindo descrições de 
                  produtos e serviços, são fornecidas apenas para fins informativos. 
                  Orçamentos e propostas comerciais são elaborados de forma 
                  personalizada e os valores podem variar de acordo com as 
                  especificações de cada projeto.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  6. Limitação de Responsabilidade
                </h2>
                <p className="text-muted-foreground">
                  A Eclipse Soluções Visuais não se responsabiliza por:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                  <li>Interrupções temporárias no funcionamento do site</li>
                  <li>Erros ou imprecisões no conteúdo publicado</li>
                  <li>Danos decorrentes do uso ou impossibilidade de uso do site</li>
                  <li>Conteúdo de sites de terceiros acessados através de links</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  7. Links Externos
                </h2>
                <p className="text-muted-foreground">
                  Nosso site pode conter links para sites de terceiros. Não temos 
                  controle sobre o conteúdo desses sites e não nos responsabilizamos 
                  por suas práticas de privacidade ou conteúdo. A inclusão de links 
                  não implica endosso por parte da Eclipse Soluções Visuais.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  8. Modificações nos Termos
                </h2>
                <p className="text-muted-foreground">
                  Reservamos o direito de modificar estes Termos de Uso a qualquer 
                  momento, sem aviso prévio. As alterações entram em vigor 
                  imediatamente após sua publicação no site. O uso continuado do 
                  site após as alterações constitui aceitação dos novos termos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  9. Lei Aplicável
                </h2>
                <p className="text-muted-foreground">
                  Estes Termos de Uso são regidos pelas leis da República Federativa 
                  do Brasil. Qualquer disputa será submetida à jurisdição dos 
                  tribunais da comarca de Capivari de Baixo, Santa Catarina.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  10. Contato
                </h2>
                <p className="text-muted-foreground">
                  Em caso de dúvidas sobre estes Termos de Uso, entre em contato:
                </p>
                <div className="mt-4 p-4 bg-card rounded-lg border border-border">
                  <p className="text-foreground font-medium">Eclipse Soluções Visuais</p>
                  <p className="text-muted-foreground">E-mail: contato@eclipseled.com.br</p>
                  <p className="text-muted-foreground">Endereço: R. Pedro Venâncio Martins, 168 - Capivari de Baixo/SC, 88745-000</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
