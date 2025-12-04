import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import CalendlyQuestionnaire from "@/components/CalendlyQuestionnaire";

const HeroSection = () => {
  const [isQuestionnaireOpen, setIsQuestionnaireOpen] = useState(false);

  return (
    <>
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
          <Button 
            size="lg" 
            className="text-base px-8 py-6 h-auto rounded-full" 
            onClick={() => setIsQuestionnaireOpen(true)}
          >
            <Calendar className="mr-2 h-5 w-5" />
            Agende uma reunião gratuita
          </Button>
        </div>
      </section>
      
      <CalendlyQuestionnaire 
        open={isQuestionnaireOpen} 
        onOpenChange={setIsQuestionnaireOpen} 
      />
    </>
  );
};

export default HeroSection;
