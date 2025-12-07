import logoEclipse from "@/assets/logo-eclipse.webp";

export function AboutCompany() {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-2xl" />
              <img
                src={logoEclipse}
                alt="Eclipse Soluções Visuais"
                className="relative z-10 w-48 md:w-64 h-auto"
              />
            </div>
          </div>
          <div>
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Sobre a Eclipse
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-6">
              Especialistas em <span className="text-gradient">Comunicação Visual</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A Eclipse Soluções Visuais é referência em painéis de LED, letreiros digitais, 
              totens e estruturas personalizadas em Santa Catarina. Com mais de 10 anos de 
              experiência, já realizamos mais de 500 projetos para igrejas, postos de combustível, 
              comércios e eventos.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nosso diferencial está no atendimento humanizado, qualidade dos materiais e 
              suporte técnico local. Trabalhamos do projeto à instalação, garantindo que sua 
              marca tenha visibilidade máxima 24 horas por dia.
            </p>
            <ul className="grid grid-cols-2 gap-3 mt-6">
              <li className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>+500 projetos realizados</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>+10 anos de experiência</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>Atendimento em toda SC</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>Suporte técnico local</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
