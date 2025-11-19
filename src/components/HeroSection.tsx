import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const HeroSection = () => {
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar uma reunião para conhecer as pulseiras hospitalares da Etiplus.");
  const whatsappLink = `https://wa.me/551123918669?text=${whatsappMessage}`;

  return (
    <section 
      className="relative py-20 px-6 overflow-hidden" 
      style={{ 
        background: 'linear-gradient(130deg, #262B97 0%, #001316 89%)'
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Pulseiras Hospitalares de Qualidade com o Melhor Preço do Mercado
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Identifique seus pacientes com segurança e economia. Pulseiras térmicas, coloridas e impressoras de alta qualidade, com preços que cabem no seu orçamento.
        </p>
        <Button size="lg" className="text-base px-8 py-6 h-auto rounded-full" asChild>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Calendar className="mr-2 h-5 w-5" />
            Agende uma reunião gratuita
          </a>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
