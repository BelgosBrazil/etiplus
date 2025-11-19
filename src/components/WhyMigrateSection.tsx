import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Preços até 40% menores que a concorrência, sem comprometer a qualidade",
  "Pulseiras resistentes e duráveis que não soltam, desbotam ou quebram",
  "Impressão sob demanda para personalização completa dos dados do paciente",
  "Ampla variedade: térmicas, coloridas e impressoras para todas as necessidades",
  "Entrega rápida para todo o Brasil com segurança e rastreamento",
  "Suporte especializado e consultoria para ajudar na escolha da melhor solução",
];

const WhyMigrateSection = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 opacity-25 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: 'url(https://etiplus.com.br/wp-content/uploads/2025/10/BG-home-new4.png)'
        }}
      ></div>
      <div className="absolute inset-0 bg-white/85 z-0"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
          Por que hospitais e clínicas escolhem a Etiplus
        </h2>
        
        <div className="space-y-6 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4 bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="bg-primary/10 rounded-full p-1 mt-1">
                <CheckCircle2 className="h-5 w-5 text-primary" />
              </div>
              <p className="text-foreground text-lg flex-1">{benefit}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" className="rounded-full px-8" asChild>
            <a href="https://wa.me/551123918669?text=Olá! Gostaria de conhecer os preços das pulseiras hospitalares da Etiplus e ver como posso economizar." target="_blank" rel="noopener noreferrer">
              Quero conhecer os preços e economizar
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyMigrateSection;
