import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "CEO, TechStart",
    content: "Transformou completamente nossa operação. ROI de 300% em 6 meses!",
    rating: 5
  },
  {
    name: "João Santos",
    role: "Diretor, Innovation Co",
    content: "A melhor decisão que tomamos este ano. Equipe e suporte excepcionais.",
    rating: 5
  },
  {
    name: "Ana Costa",
    role: "Founder, Digital Plus",
    content: "Resultados além das expectativas. Simplicidade e poder em perfeita harmonia.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Amado por
            <span className="text-gradient"> Milhares de Clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Veja o que nossos clientes têm a dizer
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-accent/50 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-lg mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 px-8 py-4 rounded-full bg-secondary/50 backdrop-blur-sm border border-border">
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">10k+</div>
              <div className="text-sm text-muted-foreground">Clientes Ativos</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">4.9/5</div>
              <div className="text-sm text-muted-foreground">Avaliação</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
