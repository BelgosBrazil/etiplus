import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";
import CalendlyQuestionnaire from "@/components/CalendlyQuestionnaire";

const FinalCTASection = () => {
  const [isQuestionnaireOpen, setIsQuestionnaireOpen] = useState(false);
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar uma reunião para conhecer as pulseiras hospitalares da Etiplus e solicitar uma cotação.");
  const whatsappLink = `https://wa.me/551123918669?text=${whatsappMessage}`;

  return (
    <>
      <section className="py-20 px-6 bg-section-accent">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Calendar className="h-4 w-4" />
              <span className="text-sm font-semibold">Agende sua reunião gratuita</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Não perca mais tempo pagando caro por qualidade que você pode ter por menos.
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-3xl mx-auto">
              A Etiplus oferece pulseiras hospitalares de alta qualidade com preços até 40% menores que a concorrência. Sem abrir mão da segurança e durabilidade.
            </p>
            
            <p className="text-lg md:text-xl text-primary font-semibold mb-12">
              Agende uma reunião gratuita e descubra como você pode economizar sem comprometer a qualidade.
            </p>
          </div>
          
          <div className="bg-background rounded-3xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 text-foreground">
              Pronto para conhecer nossos produtos e preços?
            </h3>
            
            <p className="text-center text-muted-foreground text-lg mb-4">
              Fale com um especialista Etiplus. Vamos apresentar a melhor solução para sua instituição com o melhor custo-benefício do mercado.
            </p>
            
            <div className="text-center mb-6">
              <p className="text-lg text-foreground font-semibold mb-2">
                Ou entre em contato diretamente:
              </p>
              <p className="text-muted-foreground">
                📞 <a href="tel:+551123918669" className="text-primary hover:underline"><strong>(11) 2391-8669</strong></a> | 📧 <a href="mailto:contato@etiplus.com.br" className="text-primary hover:underline"><strong>contato@etiplus.com.br</strong></a>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="text-lg px-10 py-7 h-auto rounded-full w-full sm:w-auto" 
                onClick={() => setIsQuestionnaireOpen(true)}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Agendar via Calendly
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-10 py-7 h-auto rounded-full w-full sm:w-auto" 
                asChild
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 h-5 w-5" />
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <CalendlyQuestionnaire 
        open={isQuestionnaireOpen} 
        onOpenChange={setIsQuestionnaireOpen} 
      />
    </>
  );
};

export default FinalCTASection;
