import { Printer, Palette, Thermometer, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    icon: Thermometer,
    title: "Pulseiras térmicas",
    description: "Impressão sob demanda dos dados do paciente diretamente na pulseira no momento do check-in. Práticas e econômicas.",
  },
  {
    icon: Palette,
    title: "Pulseiras coloridas",
    description: "Classificação de risco (Protocolo de Manchester), risco de queda, alérgicos e personalizadas de fábrica. Segurança visual.",
  },
  {
    icon: Printer,
    title: "Impressoras de pulseiras",
    description: "Equipamentos de alta qualidade para imprimir pulseiras térmicas no balcão de atendimento. Durabilidade garantida.",
  },
  {
    icon: Package,
    title: "Soluções completas",
    description: "Kits personalizados com pulseiras e impressoras, sempre com o melhor custo-benefício do mercado.",
  },
];

const SolutionsSection = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: 'url(https://etiplus.com.br/wp-content/uploads/2025/10/BG-home-new4.png)'
        }}
      ></div>
      <div className="absolute inset-0 bg-white/90 z-0"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-foreground">
          Soluções completas de identificação hospitalar
        </h2>
        
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-3xl mx-auto">
          A Etiplus oferece pulseiras térmicas, coloridas e impressoras de alta qualidade, com preços até 40% menores que a concorrência, sem comprometer a segurança dos pacientes.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-icon-bg-purple rounded-xl p-3">
                  <solution.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{solution.title}</h3>
                  <p className="text-muted-foreground">{solution.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-section-light rounded-2xl p-8 text-center mb-8">
          <p className="text-foreground text-lg">
            Todos os nossos produtos são testados e aprovados para garantir resistência, durabilidade e segurança na identificação hospitalar.
          </p>
        </div>
        
        <div className="text-center">
          <Button size="lg" className="rounded-full px-8" asChild>
            <a href="https://wa.me/551123918669?text=Olá! Gostaria de solicitar uma cotação para pulseiras hospitalares da Etiplus." target="_blank" rel="noopener noreferrer">
              Solicite uma cotação gratuita
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
