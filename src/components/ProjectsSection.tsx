import projectOnshore from "@/assets/project-onshore.jpg";
import projectRepowering from "@/assets/project-repowering.jpg";
import projectSpecial from "@/assets/project-special.jpg";
import { Button } from "@/components/ui/button";

const projects = [
  {
    image: projectOnshore,
    title: "Onshore-Windparkprojekte",
    description: "Baubegleitung und Projektsteuerung für Windparks mit mehreren Anlagen in Deutschland und den Niederlanden."
  },
  {
    image: projectRepowering,
    title: "Repowering",
    description: "Koordination von Rückbau und Neubau bei der Erneuerung bestehender Windenergieanlagen."
  },
  {
    image: projectSpecial,
    title: "Einzelanlagen & Sonderstandorte",
    description: "Spezialisierte Projektbetreuung für komplexe Standorte mit besonderen Anforderungen."
  }
];

const ProjectsSection = () => {
  return (
    <section id="projekte" className="section-padding bg-muted">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-foreground mb-4">Projekte & Referenzen</h2>
          <p className="text-muted-foreground text-lg">
            Ein Auszug unserer Projektschwerpunkte im Bereich Windenergie.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {projects.map((project, index) => (
            <div key={index} className="card-project">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="outline" size="lg" disabled>
            Weitere Referenzen folgen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
