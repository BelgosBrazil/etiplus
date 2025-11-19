import { Shield, DollarSign, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const AIConversationSection = () => {
  return (
    <section className="py-20 px-6 bg-section-accent">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-icon-bg-purple rounded-full p-3">
            <Award className="h-8 w-8 text-primary" />
          </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Por que escolher a Etiplus? Qualidade e preço que fazem diferença.
        </h2>
        
        <div className="bg-card rounded-3xl p-8 md:p-12 mb-8 border border-border">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="bg-icon-bg-purple rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">Qualidade garantida</h3>
              <p className="text-muted-foreground text-sm">Pulseiras resistentes, à prova d'água e que não soltam</p>
            </div>
            
            <div className="text-center">
              <div className="bg-icon-bg-blue rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">Preço acessível</h3>
              <p className="text-muted-foreground text-sm">Até 40% mais barato que a concorrência</p>
            </div>
            
            <div className="text-center">
              <div className="bg-icon-bg-purple rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">Atendimento especializado</h3>
              <p className="text-muted-foreground text-sm">Suporte técnico e consultoria para sua equipe</p>
            </div>
          </div>
          
          <div className="bg-muted rounded-xl p-6">
            <p className="text-foreground mb-4">
              A Etiplus combina qualidade superior com preços justos. Nossas pulseiras são testadas rigorosamente para garantir durabilidade e segurança.
            </p>
            <p className="text-foreground">
              Oferecemos consultoria especializada para ajudar você a escolher a melhor solução para seu hospital ou clínica, sempre com foco em economia sem abrir mão da qualidade.
            </p>
          </div>
          
          <p className="text-center text-primary font-semibold mt-6 text-lg">
            Qualidade que você confia. Preço que cabe no seu orçamento.
          </p>
        </div>
        
        <div className="text-center">
          <Button size="lg" className="rounded-full px-8" asChild>
            <a href="https://wa.me/551123918669?text=Olá! Gostaria de agendar uma reunião para conhecer os preços das pulseiras hospitalares da Etiplus." target="_blank" rel="noopener noreferrer">
              Agende uma reunião e conheça nossos preços
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AIConversationSection;
