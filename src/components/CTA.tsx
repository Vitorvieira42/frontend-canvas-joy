import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Animated tech background */}
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[200px] animate-glow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[180px] animate-glow" style={{ animationDelay: "1s" }} />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-5 py-2 border border-accent/50 mb-8 animate-scale-in bg-card/30 backdrop-blur-xl">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_hsl(330_100%_60%)]" />
          <span className="text-sm font-mono font-bold text-accent uppercase tracking-wider">Limited Beta Access</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in tracking-tight">
          Entre no
          <span className="text-gradient block mt-2">Futuro Agora</span>
        </h2>
        
        <p className="text-xl text-foreground/60 mb-10 max-w-2xl mx-auto animate-fade-in font-light leading-relaxed">
          Acesso exclusivo à tecnologia que vai revolucionar sua indústria. 
          Vagas limitadas para early adopters.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/80 text-accent-foreground font-bold px-12 py-7 text-lg group border border-accent/50 glow-accent uppercase tracking-wide transition-all"
          >
            <Rocket className="mr-2 w-5 h-5" />
            Começar Beta
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Button>
        </div>
        
        <div className="mt-8 flex items-center justify-center gap-6 text-sm font-mono animate-fade-in">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_hsl(180_100%_50%)]" />
            <span className="text-primary/80">[ No Credit Card ]</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_hsl(180_100%_50%)]" />
            <span className="text-primary/80">[ 5min Setup ]</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
