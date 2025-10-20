import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
      
      <footer className="border-t border-border py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 Modern Solutions. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
