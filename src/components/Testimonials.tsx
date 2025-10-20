import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Ana Silva",
    role: "CTO • Quantum Labs",
    content: "Implementação em 48h. Performance 10x superior. ROI absurdo.",
    metric: "+300% ROI"
  },
  {
    name: "Marcus Chen",
    role: "CEO • Neural Systems",
    content: "A IA mais avançada que já utilizamos. Transformou nossa operação.",
    metric: "99.9% Uptime"
  },
  {
    name: "Sofia Kovač",
    role: "Lead Dev • CyberCore",
    content: "Integração perfeita. Documentação impecável. Suporte instantâneo.",
    metric: "< 10ms latency"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-1 border border-accent/50 rounded mb-4 font-mono text-sm text-accent uppercase tracking-wider">
            [ Testimonials ]
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Confiado por
            <span className="text-gradient"> Tech Leaders</span>
          </h2>
          <p className="text-xl text-foreground/60 font-light">
            Empresas que constroem o futuro
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-xl border-primary/30 hover:border-accent transition-all duration-300 animate-scale-in group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors" />
              <CardContent className="p-6 relative z-10">
                <Quote className="w-10 h-10 text-primary/30 mb-4" />
                <p className="text-lg mb-6 leading-relaxed font-light">"{testimonial.content}"</p>
                <div className="border-t border-primary/20 pt-4 flex items-center justify-between">
                  <div>
                    <p className="font-bold tracking-tight">{testimonial.name}</p>
                    <p className="text-sm text-foreground/50 font-mono">{testimonial.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-primary font-bold font-mono text-sm">{testimonial.metric}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 px-10 py-5 border border-primary/30 bg-card/30 backdrop-blur-xl">
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient font-mono">10K+</div>
              <div className="text-xs text-foreground/50 font-mono uppercase tracking-wider mt-1">Active Users</div>
            </div>
            <div className="w-px h-14 bg-primary/30" />
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient font-mono">4.9</div>
              <div className="text-xs text-foreground/50 font-mono uppercase tracking-wider mt-1">Rating</div>
            </div>
            <div className="w-px h-14 bg-primary/30" />
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient font-mono">99.9%</div>
              <div className="text-xs text-foreground/50 font-mono uppercase tracking-wider mt-1">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
