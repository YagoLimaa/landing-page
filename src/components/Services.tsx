import ServiceCard from "./ServiceCard";
import { User, Heart, Compass } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Terapia Individual",
      description: "Um espaço seguro e confidencial para você explorar suas questões pessoais e encontrar novas perspectivas.",
      icon: User,
    },
    {
      title: "Terapia de Casal",
      description: "Auxiliamos casais a melhorar a comunicação, resolver conflitos e fortalecer o relacionamento.",
      icon: Heart,
    },
    {
      title: "Orientação Vocacional",
      description: "Apoio para jovens e adultos na escolha ou redefinição de sua carreira profissional com mais segurança.",
      icon: Compass,
    },
  ];

  return (
    <section id="services" className="py-24 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Oferecemos uma variedade de serviços personalizados para atender às suas necessidades
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="animate-fade-in-scale"
              style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
