import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProblemSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-icon-bg-red rounded-full p-3">
            <AlertTriangle className="h-6 w-6 text-destructive" />
          </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Você não precisa gastar mais com identificação hospitalar. Precisa de qualidade que cabe no seu orçamento.
        </h2>
        
        <div className="space-y-6 max-w-4xl mx-auto mb-12">
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="bg-icon-bg-red rounded-full p-2 mt-1">
                <AlertTriangle className="h-5 w-5 text-destructive" />
              </div>
              <div>
                <p className="text-foreground text-lg">
                  <strong>Muitos hospitais pagam caro demais</strong> por pulseiras hospitalares sem a garantia de qualidade ou resistência necessária para o dia a dia.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="bg-icon-bg-red rounded-full p-2 mt-1">
                <AlertTriangle className="h-5 w-5 text-destructive" />
              </div>
              <div>
                <p className="text-foreground text-lg">
                  <strong>Problemas de identificação colocam pacientes em risco.</strong> Pulseiras que soltam, desbotam ou quebram podem comprometer a segurança e o atendimento adequado.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-accent border-l-4 border-primary rounded-2xl p-6">
            <p className="text-foreground text-lg">
              A Etiplus oferece pulseiras hospitalares de alta qualidade, resistentes e duráveis,{" "}
              <strong className="text-accent-foreground">com preços até 40% menores que a concorrência, sem abrir mão da segurança e qualidade.</strong>
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <Button size="lg" className="rounded-full px-8" asChild>
            <a href="https://wa.me/551123918669?text=Olá! Gostaria de conhecer as pulseiras hospitalares da Etiplus e economizar sem perder qualidade." target="_blank" rel="noopener noreferrer">
              Quero economizar sem perder qualidade
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
