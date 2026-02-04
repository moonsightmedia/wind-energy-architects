import { TrendingUp, ShieldCheck, Clock, UserCheck } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Mehr Projekte realisieren",
    description: "Mit professionellem Projektmanagement steigern Sie Ihre Umsetzungskapazität."
  },
  {
    icon: ShieldCheck,
    title: "Kosten- & Planungssicherheit",
    description: "Transparente Budgetkontrolle und verlässliche Terminplanung von Anfang an."
  },
  {
    icon: Clock,
    title: "Schnellere Projektabwicklung",
    description: "Effiziente Prozesse und erfahrene Koordination verkürzen Ihre Projektlaufzeiten."
  },
  {
    icon: UserCheck,
    title: "Ein zentraler Ansprechpartner",
    description: "Wir bündeln alle Fäden und halten Ihnen den Rücken frei für Ihr Kerngeschäft."
  }
];

const BenefitsSection = () => {
  return (
    <section id="mehrwert" className="section-padding bg-primary/5">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-foreground mb-2">Unser Mehrwert</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-4" aria-hidden />
          <p className="text-muted-foreground text-lg">
            Was Sie durch die Zusammenarbeit mit GRAU Engineering gewinnen.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex gap-5 p-6 bg-muted rounded-md border border-border"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
