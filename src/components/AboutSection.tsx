import { MapPin, Wind, Building2, Globe, CheckCircle } from "lucide-react";

const facts = [
  { icon: MapPin, label: "Sitz", value: "Iserlohn (NRW)" },
  { icon: Wind, label: "Windparkprojekte", value: "80+" },
  { icon: Building2, label: "Betreute Anlagen", value: "150+" },
  { icon: Globe, label: "Aktiv in", value: "DE, NL, AT" },
  { icon: CheckCircle, label: "Status", value: "Herstellerunabhängig" },
];

const AboutSection = () => {
  return (
    <section id="ueber-uns" className="section-padding bg-card">
      <div className="container-narrow mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Text Content */}
          <div>
            <h2 className="text-foreground mb-6">
              Über uns – GRAU Engineering GmbH
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Die GRAU Engineering GmbH ist ein unabhängiges Ingenieurbüro mit Sitz in Iserlohn im Sauerland. Seit 2020 begleiten wir Betreiberfirmen, Stadtwerke und Projektgesellschaften bei der Umsetzung von Windenergieprojekten in Deutschland und Europa.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Als herstellerunabhängiger Partner stehen wir für neutrale Beratung und professionelles Projektmanagement. Unser Fokus liegt auf der erfolgreichen Realisierung Ihrer Windenergieprojekte – termingerecht, kosteneffizient und qualitätsgesichert.
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
                <p className="text-foreground font-semibold">
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
