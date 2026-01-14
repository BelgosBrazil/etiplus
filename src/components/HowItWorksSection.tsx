import { Calendar, Package, Truck, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: 1,
    icon: Calendar,
    title: "Agende uma reunião",
    description: "Converse com nossos especialistas sobre suas necessidades de identificação hospitalar.",
  },
  {
    number: 2,
    icon: Package,
    title: "Receba uma proposta personalizada",
    description: "Apresentamos a melhor solução (térmicas, coloridas ou impressoras) com preço justo.",
  },
  {
    number: 3,
    icon: Truck,
    title: "Entrega rápida e segura",
    description: "Enviamos seus produtos com agilidade e total segurança para todo o Brasil.",
  },
  {
    number: 4,
    icon: CheckCircle2,
    title: "Suporte contínuo",
    description: "Oferecemos acompanhamento e suporte para garantir sua satisfação total.",
  },
];

const HowItWorksSection = () => {
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar uma reunião para conhecer as pulseiras hospitalares da Etiplus e solicitar uma cotação.");
  const whatsappLink = `https://wa.me/551123918669?text=${whatsappMessage}`;

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 opacity-30 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: 'url(https://etiplus.com.br/wp-content/uploads/2025/10/BG-home-new4.png)'
        }}
      ></div>
      <div className="absolute inset-0 bg-white/80 z-0"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
          Como funciona: Da consulta à entrega em 4 passos simples
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {steps.map((step) => (
            <div key={step.number} className="bg-card rounded-2xl p-8 border border-border">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {step.number}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <step.icon className="h-5 w-5 text-foreground" />
                    <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-accent rounded-2xl p-8 text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-primary/10 rounded-full p-3">
              <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <p className="text-xl font-semibold text-foreground">
            Resultado:
          </p>
          <p className="text-lg text-foreground mt-2">
            Identificação hospitalar segura, de qualidade e com preço acessível.
          </p>
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="rounded-full px-8" 
            asChild
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Phone className="mr-2 h-5 w-5" />
              Falar no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
