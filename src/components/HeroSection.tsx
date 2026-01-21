import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/70 to-background/40" />
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="gradient-text">
              Strengthening & Accelerating Impactful Community Solutions
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We are an <span className="underline decoration-primary decoration-2 underline-offset-4">incubator-accelerator</span> that 
            brings people, ideas, and capital together to{" "}
            <span className="underline decoration-accent decoration-2 underline-offset-4">grow regenerative economies</span> powered 
            by impactful solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
                onClick={() =>
                  document
                    .getElementById("vibrant-solutions")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              className="bg-accent hover:bg-gold-dark text-accent-foreground font-semibold px-8 py-6 text-lg btn-sweep"
            >
              Learn More
            </Button>
            <Link to="/initiatives">
              <Button
                variant="outline"
                className="px-8 py-6 text-lg font-semibold"
              >
                Our Initiatives
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
