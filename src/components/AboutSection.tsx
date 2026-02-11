import * as React from "react";
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

// Wind Turbine Icon from SVG Element 2
const WindTurbineIcon = ({ className, style, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 134.96 170.56"
    fill="currentColor"
    className={className}
    style={style}
    {...props}
  >
    <path d="M130.85,2.34C127.74,0,122.74-1.22,118.94,1.77l-48.42,38.13-61.53,2.09c-4.94.17-8.25,4.48-8.85,8.36-.65,4.23.97,8.83,5.33,10.58l57.15,22.91,12.59,19.84-.05,56.86h-29.43c-3.11-.02-5.22,1.83-5.42,4.69-.16,2.25,1.28,5.35,5,5.35l71.38-.04c2.94,0,4.18-3.18,4.06-5.35-.1-1.82-1.34-4.45-3.95-4.48l-30.96-.27.08-38.9,8.86,13.99c2.86,4.55,8.1,5.83,12.56,4.03,4.85-1.96,7.1-6.35,6.26-11.91l-8.9-58.9,29.12-53.76c2.42-4.47.71-9.84-2.98-12.62ZM95.61,63.14c-.88,1.73-1.3,3.4-1.38,5.31l8.29,59.38-29.66-47.83c-1.55-3.15-3.6-5.03-6.41-6.08L13.22,52.68l61.19-2.57L122.15,13.14l-26.54,50Z"/>
    <circle cx="80.56" cy="65.57" r="5.22" transform="translate(-22.77 76.17) rotate(-45)"/>
  </svg>
);

const facts = [
  { icon: MapPin, label: "Sitz", value: "Iserlohn, Sauerland (NRW)" },
  { icon: FolderKanban, label: "Windparkprojekte", value: "80+" },
  { icon: WindTurbineIcon, label: "Betreute Anlagen", value: "150+" },
  { icon: Globe, label: "Aktiv in", value: "DE, NL und AT" },
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
                <fact.icon 
                  className="w-6 h-6 text-primary mb-3" 
                  strokeWidth={1.5} 
                />
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
