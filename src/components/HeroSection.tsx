import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-windpark-main.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Dark Green Overlay */}
      <div 
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(20, 68, 55, 0.7)" }}
      />

      {/* Content */}
      <div className="relative z-10 container-narrow mx-auto px-4 md:px-8 lg:px-16 pt-24 md:pt-32">
        <div className="max-w-3xl">
          {/* Headline */}
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
            Projekt- & Baustellenmanagement für Windenergieanlagen
          </h1>

          {/* Subheadline */}
          <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-6 max-w-2xl">
            GRAU Engineering GmbH unterstützt Betreiber, Projektgesellschaften und Investoren bei der Realisierung von Windenergieprojekten – von der Baugenehmigung bis zur schlüsselfertigen Anlage.
          </p>

          {/* Claim */}
          <p className="text-white/70 text-base md:text-lg italic mb-10">
            „Bauen Sie noch, oder produzieren Sie schon?!"
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="#leistungen">Leistungsangebot ansehen</a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#kontakt">Kontakt aufnehmen</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
