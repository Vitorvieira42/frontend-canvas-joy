import { Zap, Shield, TrendingUp, Users, Clock, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Velocidade Extrema",
    description: "Desempenho otimizado que acelera seus processos em até 10x."
  },
  {
    icon: Shield,
    title: "Segurança Total",
    description: "Proteção de nível empresarial com criptografia de ponta a ponta."
  },
  {
    icon: TrendingUp,
    title: "Crescimento Garantido",
    description: "Aumente sua produtividade e receita com insights em tempo real."
  },
  {
    icon: Users,
    title: "Colaboração Fluida",
    description: "Trabalhe em equipe com ferramentas de colaboração intuitivas."
  },
  {
    icon: Clock,
    title: "Economia de Tempo",
    description: "Automatize tarefas repetitivas e foque no que realmente importa."
  },
  {
    icon: Target,
    title: "Resultados Precisos",
    description: "Analytics avançado para decisões baseadas em dados concretos."
  }
];

const Features = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tudo que Você Precisa,
            <span className="text-gradient"> em Um Só Lugar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recursos poderosos projetados para maximizar seu sucesso
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
