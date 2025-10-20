import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 tech-grid scanline">
      {/* Tech glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[150px] animate-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/30 rounded-full blur-[150px] animate-glow" style={{ animationDelay: "1.5s" }} />
      
      {/* Floating tech elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-primary/30 rounded-lg animate-float" style={{ animationDelay: "0s" }} />
      <div className="absolute bottom-20 right-10 w-16 h-16 border border-accent/30 rounded-lg animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-20 w-12 h-12 border border-primary/20 rotate-45 animate-float" style={{ animationDelay: "3s" }} />
      
      <div className="relative z-10 max-w-6xl mx-auto text-center animate-fade-in">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded border border-primary/50 mb-8 animate-scale-in bg-card/50 backdrop-blur-xl glow-primary">
          <Cpu className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-sm font-mono font-semibold text-primary uppercase tracking-wider">Next-Gen Technology</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight">
          O Futuro é
          <span className="block text-gradient mt-2 animate-pulse-glow">Agora</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          Tecnologia de ponta que transforma impossível em realidade. 
          Potencialize seu negócio com IA e automação avançada.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/80 text-primary-foreground font-bold px-10 py-7 text-lg group border border-primary/50 glow-primary uppercase tracking-wide transition-all"
          >
            <Zap className="mr-2 w-5 h-5" />
            Iniciar Agora
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary/50 bg-transparent hover:bg-primary/10 font-bold px-10 py-7 text-lg backdrop-blur-sm uppercase tracking-wide transition-all"
          >
            Explorar Tech
          </Button>
        </div>
        
        <div className="mt-16 flex flex-col sm:flex-row gap-8 justify-center items-center text-sm font-mono">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_hsl(180_100%_50%)]" />
            <span className="text-primary/80">[ 99.9% Uptime ]</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_hsl(180_100%_50%)]" />
            <span className="text-primary/80">[ AI-Powered ]</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_hsl(180_100%_50%)]" />
            <span className="text-primary/80">[ Ultra Fast ]</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
