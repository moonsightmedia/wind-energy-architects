import { useState } from "react";
import type { CSSProperties } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import { Badge } from "@/components/ui/badge";

import hohenlimburg from "@/assets/projects/hohenlimburg.jpg";
import neuenrade from "@/assets/Windpark Neuenrade 1.jpg";
import schalksmuehleRoeolvede from "@/assets/IMG_1543.jpeg";

interface Project {
  image: string;
  title: string;
  client: string;
  turbines: string;
  year: string;
  isRepowering?: boolean;
  demontage?: string;
  imageRotationDeg?: number;
  besonderheiten?: string;
}

const projects: Project[] = [
  {
    image: hohenlimburg,
    title: "Windpark Hohenlimburg",
    client: "SL Windenergie GmbH",
    turbines: "4x ENERCON E-138 EP3 E2",
    year: "2024",
    isRepowering: true,
    demontage: "1x ENERCON E-66 / 18.70",
    besonderheiten: "Effiziente Flächennutzung zur Erhöhung der Lagerkapazitäten an der Logistikfläche, Einsatz spezieller Transporttechnik für die Umsetzung der Rotorblätter und Stahlsektionen (Blade-Lifter und SPMT), Montage des Kranauslegers teilweise mit über 12 % Steigung zur Errichtung der Windenergieanlage",
  },
  {
    image: schalksmuehleRoeolvede,
    title: "Windpark Schalksmühle Rölvede",
    client: "Ruhrwind GmbH & Co. KG",
    turbines: "1x ENERCON E-138 EP3 E3",
    year: "2025",
    isRepowering: true,
    demontage: "1x Repower MD77",
    besonderheiten: "Transport der Rotorblätter mit einem Blade-Lifter vom Umladeplatz in Hagen zum Windpark in Rölvede, logistische Herausforderungen aufgrund der lastbeschränkten Brückenbauwerke entlang der A45, Anpassung der Arbeits- und Montagezeiten zur Beschleunigung der Anlagenerrichtung",
  },
  {
    image: neuenrade,
    title: "Windpark Neuenrade",
    client: "SL Windenergie GmbH",
    turbines: "6x ENERCON E-115 E1",
    year: "2021",
    besonderheiten: "Waldstandort mit anspruchsvoller windparkinterner Zuwegung, Einsatz von Zughilfen für Großraum- und Schwertransporte, Umsetzung der zweigeteilten Rotorblätter mittels SPMT, Anlieferung vormontierter Anlagenkomponenten „Just-in-Time“ innerhalb des Windparks",
  },
];

const ProjectsSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="projekte" className="section-padding bg-card scroll-mt-24">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-wide text-primary mb-2">Einblick in unsere Arbeit</p>
          <h2 className="text-foreground mb-4">Projekte und Referenzen</h2>
          <p className="text-muted-foreground text-lg">
            Ausgewählte Projekte aus unserem Portfolio im Bereich Windenergie
          </p>
        </div>

        {/* Projects Grid – items-start damit nur die geöffnete Card wächst */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {projects.map((project, index) => (
            <div key={index} className="card-project flex flex-col">
              {/* Image with badges */}
              <div className="relative aspect-[4/3] overflow-hidden group" style={{ borderRadius: 0 }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-none"
                  style={
                    project.imageRotationDeg != null
                      ? ({
                          left: "50%",
                          top: "50%",
                          width: "auto",
                          height: "140%",
                          transform: `translate(-50%, -50%) rotate(${project.imageRotationDeg}deg) scale(1.34)`,
                          transformOrigin: "center center",
                          borderRadius: 0,
                        } as CSSProperties)
                      : { borderRadius: 0 }
                  }
                />
                {/* Year Badge */}
                <Badge
                  variant="secondary"
                  className="absolute top-3 right-3 bg-background/90 text-foreground"
                >
                  {project.year}
                </Badge>
                {/* Repowering Badge */}
                {project.isRepowering && (
                  <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                    Repowering
                  </Badge>
                )}
              </div>

              {/* Content – min-height damit alle Cards im geschlossenen Zustand gleich hoch sind */}
              <div className="p-5 flex flex-col flex-grow min-h-[175px]">
                <h3 className="text-base font-semibold text-foreground mb-2 leading-snug">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-1">
                  Bauherr: {project.client}
                </p>
                <p className="text-muted-foreground text-sm mb-1">
                  Anlagen: {project.turbines}
                </p>
                {project.demontage && (
                  <p className="text-muted-foreground text-sm mb-3">
                    Demontage: {project.demontage}
                  </p>
                )}
                {project.besonderheiten && (
                  <div className="mt-auto pt-3 -mx-5 -mb-5">
                    <button
                      type="button"
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                      className="w-full flex items-center justify-center gap-2 py-3 px-5 text-primary text-sm font-medium bg-muted/50 hover:bg-muted transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                      aria-expanded={expandedIndex === index}
                    >
                      {expandedIndex === index ? (
                        <>
                          <ChevronUp className="w-4 h-4 shrink-0" />
                          Besonderheiten ausblenden
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4 shrink-0" />
                          Besonderheiten anzeigen
                        </>
                      )}
                    </button>
                    <div
                      className="overflow-hidden transition-[max-height] duration-300 ease-out"
                      style={{ maxHeight: expandedIndex === index ? 400 : 0 }}
                    >
                      {expandedIndex === index && (
                        <div className="px-5 pb-5 pt-3 bg-muted/30 border-t border-border">
                          <ul className="space-y-2 text-muted-foreground text-sm leading-relaxed list-[square] pl-4 [&::marker]:text-primary">
                            {project.besonderheiten.split(/,\s+/).map((point, i) => (
                              <li key={i}>{point.trim()}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
