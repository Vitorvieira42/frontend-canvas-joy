import { Cpu, Shield, Sparkles, Network, Boxes, BrainCircuit } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Cpu,
    title: "IA Avançada",
    description: "Machine learning que evolui com seu negócio em tempo real.",
    color: "primary"
  },
  {
    icon: Shield,
    title: "Segurança Quântica",
    description: "Criptografia de nível militar protegendo seus dados 24/7.",
    color: "accent"
  },
  {
    icon: Sparkles,
    title: "Automação Total",
    description: "Workflows inteligentes que economizam 80% do seu tempo.",
    color: "primary"
  },
  {
    icon: Network,
    title: "Integração Zero-Friction",
    description: "Conecte-se a qualquer plataforma com nossa API universal.",
    color: "accent"
  },
  {
    icon: Boxes,
    title: "Escalabilidade Infinita",
    description: "Infraestrutura cloud que cresce automaticamente com você.",
    color: "primary"
  },
  {
    icon: BrainCircuit,
    title: "Analytics Preditiva",
    description: "Preveja o futuro com insights baseados em bilhões de dados.",
    color: "accent"
  }
];

const Features = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-1 border border-primary/50 rounded mb-4 font-mono text-sm text-primary uppercase tracking-wider">
            [ Core Features ]
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Tecnologia
            <span className="text-gradient"> de Outro Nível</span>
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto font-light">
            Potência computacional que redefine o possível
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-xl border-primary/30 hover:border-primary transition-all duration-300 hover:scale-105 group animate-scale-in relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="p-6 relative z-10">
                <div className={`w-14 h-14 border-2 ${feature.color === 'primary' ? 'border-primary' : 'border-accent'} flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_hsl(180_100%_50%/0.5)] transition-all`}>
                  <feature.icon className={`w-7 h-7 ${feature.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                </div>
                <h3 className="text-xl font-bold mb-2 tracking-tight">{feature.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
