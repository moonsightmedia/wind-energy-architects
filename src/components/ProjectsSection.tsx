import type { CSSProperties } from "react";

import { Badge } from "@/components/ui/badge";

import hohenlimburg from "@/assets/projects/hohenlimburg.jpg";
import neuenrade from "@/assets/projects/neuenrade.jpg";
import haldeMottbruch from "@/assets/projects/halde-mottbruch.jpg";
import bottrop from "@/assets/projects/bottrop.jpg";
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
  },
  {
    image: schalksmuehleRoeolvede,
    title: "Windpark Schalksmühle Rölvede",
    client: "Ruhrwind GmbH & Co. KG",
    turbines: "1x ENERCON E-138 EP3 E3",
    year: "2025",
    isRepowering: true,
    demontage: "1x Repower MD77",
  },
  {
    image: neuenrade,
    title: "Windpark Neuenrade",
    client: "SL Windenergie GmbH",
    turbines: "6x ENERCON E-115 E1",
    year: "2021",
  },
  {
    image: haldeMottbruch,
    title: "Windpark Halde Mottbruch",
    client: "Steag GmbH / RWE",
    turbines: "1x E-138 EP3 auf 131m Hybridturm",
    year: "2021",
  },
  {
    image: bottrop,
    title: "Windpark Bottrop Kirchhellen",
    client: "SL Windenergie GmbH",
    turbines: "2x E-103 EP2 auf 108m Hybridturm",
    year: "2023",
    isRepowering: true,
    imageRotationDeg: 90,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projekte" className="section-padding bg-card scroll-mt-24">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  Bauherr: {project.client}
                </p>
                <p className="text-muted-foreground text-xs mb-1">
                  Anlagen: {project.turbines}
                </p>
                {project.demontage && (
                  <p className="text-muted-foreground text-xs">
                    Demontage: {project.demontage}
                  </p>
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
