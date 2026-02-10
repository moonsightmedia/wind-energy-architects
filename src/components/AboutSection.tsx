import { MapPin, Wind, FolderKanban, Globe } from "lucide-react";
import type { LucideProps } from "lucide-react";

// Custom Windrad Icon Component - Outline style to match other lucide icons
const WindradIcon = ({ className, strokeWidth = 1.5, ...props }: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth * 0.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    {/* Three rotor blades - Y shape, one up, two diagonal down - thinner */}
    <line x1="12" y1="8" x2="12" y2="2.5" />
    <line x1="12" y1="8" x2="6" y2="11.5" />
    <line x1="12" y1="8" x2="18" y2="11.5" />
    {/* Central hub - smaller circle */}
    <circle cx="12" cy="8" r="1" />
    {/* Conical tower - narrower, more elegant */}
    <line x1="11" y1="8" x2="9" y2="22" />
    <line x1="13" y1="8" x2="15" y2="22" />
    {/* Base bottom line */}
    <line x1="9" y1="22" x2="15" y2="22" />
  </svg>
);

const facts = [
  { icon: MapPin, label: "Sitz", value: "Iserlohn (NRW)" },
  { icon: FolderKanban, label: "Windparkprojekte", value: "80+" },
  { icon: WindradIcon, label: "Betreute Anlagen", value: "150+" },
  { icon: Globe, label: "Aktiv in", value: "DE, NL und AUT" },
];

const AboutSection = () => {
  return (
    <section id="ueber-uns" className="section-padding bg-card border-t border-border scroll-mt-24">
      <div className="container-narrow mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Text Content with left accent */}
          <div className="border-l-4 border-primary pl-6">
            <p className="text-xs uppercase tracking-wide text-primary mb-2">Über uns</p>
            <h2 className="text-foreground mb-6">
              GRAU Engineering GmbH
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Wir sind ein familiengeführtes Ingenieurbüro mit Sitz in Iserlohn im Sauerland. Seit 2020 beraten wir WEA-Hersteller, Betreiberfirmen und Projektentwickler bei der Umsetzung und Optimierung von Windenergieprojekten.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Als unabhängiger Partner stehen wir für neutrale Beratung und professionelles Projektmanagement. Unser Fokus liegt auf der erfolgreichen Realisierung Ihrer Windenergieprojekte – termingerecht und kosteneffizient. Profitieren Sie von unserer langjährigen Expertise und unserem weitreichendem Netzwerk.
            </p>
          </div>

          {/* Facts Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4">
            {facts.map((fact, index) => (
              <div
                key={index}
                className="bg-muted p-5 rounded-md border border-border"
              >
                <fact.icon className="w-6 h-6 text-primary mb-3" strokeWidth={1.5} />
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                  {fact.label}
                </p>
                <p className="text-foreground font-semibold text-sm whitespace-pre-line">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
