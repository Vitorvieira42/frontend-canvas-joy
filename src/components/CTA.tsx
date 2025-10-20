import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] animate-glow" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 backdrop-blur-sm border border-accent/20 mb-8 animate-scale-in">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium">Oferta por tempo limitado</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
          Pronto Para
          <span className="text-gradient"> Decolar?</span>
        </h2>
        
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in">
          Junte-se a milhares de empresas que já estão crescendo exponencialmente. 
          Comece gratuitamente hoje mesmo.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-10 py-7 text-lg group glow-accent"
          >
            Começar Gratuitamente
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
        <p className="mt-6 text-sm text-muted-foreground animate-fade-in">
          ✨ Não é necessário cartão de crédito • Cancele quando quiser
        </p>
      </div>
    </section>
  );
};

export default CTA;
