const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
            Sobre Nós
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left" style={{ opacity: 0 }}>
              <img
                src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXc7IE2hgXDDHbORe9I2uKUcSmqZbO9KiHPwqFVXEjyl9tcxXDYA6R08qJ4YB_K_dhloQ6XG1d9_LSWWsC_65Kj505D0K5M8RmO0P8CTQU49SFxPFwSFPZA3soepy5bokkS3vDmXF_3pHDjamnXk7O_hd17m?key=oOyJ6f_oM9M8jb87ktq9qg"
                alt="Equipe da clínica Mente Sã"
                className="rounded-3xl shadow-medium w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-6 animate-slide-in-right" style={{ opacity: 0 }}>
              <p className="text-lg text-foreground/80 leading-relaxed">
                A <span className="font-semibold text-primary">Clínica Mente Sã</span> foi fundada com a missão de promover a saúde mental e o bem-estar em todas as fases da vida. Nossa equipe é formada por psicólogos dedicados e experientes, comprometidos em oferecer um atendimento ético, humano e personalizado.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Acreditamos que cada indivíduo é único e, por isso, nossos tratamentos são adaptados às necessidades específicas de cada cliente.
              </p>
              <div className="pt-4 flex gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Pacientes Atendidos</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfação</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
