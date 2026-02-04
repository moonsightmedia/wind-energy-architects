import type { CSSProperties } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

import hohenlimburg from "@/assets/projects/hohenlimburg.jpg";
import neuenrade from "@/assets/projects/neuenrade.jpg";
import haldeMottbruch from "@/assets/projects/halde-mottbruch.jpg";
import bottrop from "@/assets/projects/bottrop.jpg";

interface Project {
  image: string;
  title: string;
  client: string;
  turbines: string;
  year: string;
  isRepowering?: boolean;
  details?: string;
  imageRotationDeg?: number;
}

const projects: Project[] = [
  {
    image: hohenlimburg,
    title: "Windpark Hohenlimburg",
    client: "SL NaturEnergie GmbH",
    turbines: "4x E-138 EP3 E2 auf 160m/149m Hybridturm",
    year: "2024",
    isRepowering: true,
    details:
      "Optimierung der Logistikfläche hinsichtlich der Möglichkeiten, die Zwischenlagerung von Anlagenkomponenten zu erhöhen. Ursprünglich 2 Blattsätze (6 Rotorblätter) hin zu 5 Blattsätzen (15 bzw. 16 Rotorblätter) und weiterer Komponenten.",
  },
  {
    image: neuenrade,
    title: "Windpark Neuenrade",
    client: "SL NaturEnergie GmbH",
    turbines: "6x E-115 E1 auf 149m Hybridturm",
    year: "2021",
    details:
      "Bedingt durch den Standort war kein Ausbau der Stellflächen nach Spezifikation möglich. Anlagen mit ca. 55m Rotorblattlänge wurden auf Stellflächen von teilweise nur 40x35m errichtet. Anlagenkomponenten wurden an separater Stelle vormontiert und 'just-in-time' zur Kranstellfläche transportiert - deutschlandweit einzigartig.",
  },
  {
    image: haldeMottbruch,
    title: "Windpark Halde Mottbruch",
    client: "Steag GmbH / RWE",
    turbines: "1x E-138 EP3 auf 131m Hybridturm",
    year: "2021",
    details:
      "Anlieferung der Rotorblätter mit einem Selbstfahrer (SPMT). In enger Absprache mit der Gemeinde und der Stadt konnte die Verladung auf einer Straße in einem Industriegebiet durchgeführt werden, sodass keine Logistikfläche (Umladeplatz) benötigt wurde. Die Zufahrt zur Halde war besonders hinsichtlich der Freigabe des Bodengutachters inkl. Böschungsbruchberechnung.",
  },
  {
    image: bottrop,
    title: "Windpark Bottrop Kirchhellen",
    client: "SL Windenergie GmbH",
    turbines: "2x E-103 EP2 auf 108m Hybridturm",
    year: "2023",
    isRepowering: true,
    imageRotationDeg: 90,
    details:
      "Standort der Bestandsanlage (E-66) befand sich ca. 50m von einer neu geplanten WEA. In Absprache mit allen Beteiligten konnte die neue WEA noch während des Turmbaus drehen, um die Stromerträge für den Betreiber zu maximieren.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projekte" className="section-padding bg-card">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Referenzen</p>
          <h2 className="text-foreground mb-4">Projekte & Referenzen</h2>
          <p className="text-muted-foreground text-lg">
            Ausgewählte Projekte aus unserem Portfolio im Bereich Windenergie.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="card-project flex flex-col">
              {/* Image with badges */}
              <div className="relative aspect-[4/3] overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  style={
                    project.imageRotationDeg != null
                      ? ({
                          left: "50%",
                          top: "50%",
                          width: "auto",
                          height: "140%",
                          transform: `translate(-50%, -50%) rotate(${project.imageRotationDeg}deg) scale(1.34)`,
                          transformOrigin: "center center",
                        } as CSSProperties)
                      : undefined
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

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-base font-semibold text-foreground mb-2 leading-snug">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-1">
                  {project.client}
                </p>
                <p className="text-muted-foreground text-xs mb-3">
                  {project.turbines}
                </p>

                {/* Accordion for Details */}
                {project.details && (
                  <Accordion type="single" collapsible className="mt-auto">
                    <AccordionItem value="details" className="border-b-0">
                      <AccordionTrigger className="py-2 text-sm text-primary hover:no-underline">
                        Besonderheiten
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-xs leading-relaxed">
                        {project.details}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
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
