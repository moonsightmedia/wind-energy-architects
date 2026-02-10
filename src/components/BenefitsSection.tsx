import { TrendingUp, ShieldCheck, Clock, UserCheck } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Mehr Projekte realisieren",
    description: "Steigerung Ihrer Projektabschlüsse durch externe Kapazitäten."
  },
  {
    icon: ShieldCheck,
    title: "Kosten- und Planungssicherheit",
    description: "Transparente Budgetkontrolle, verlässliche Terminplanung und Reduzierung interner Ressourcen."
  },
  {
    icon: Clock,
    title: "Optimierte Projektabwicklung",
    description: "Effiziente Projekt- und Bauabläufe durch langjährige Expertise und kostenoptimierte Prozesse."
  },
  {
    icon: UserCheck,
    title: "Flexibilität ohne Abhängigkeiten",
    description: "Reduzierung interner Personalkosten und ressourcenschonende Umsetzung von Projekten."
  }
];

const BenefitsSection = () => {
  return (
    <section id="mehrwert" className="section-padding bg-primary/5 scroll-mt-24">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="text-primary text-lg md:text-xl italic font-medium mb-6">
            „Bauen Sie noch, oder produzieren Sie schon?!"
          </p>
          <h2 className="text-foreground mb-2">Unser Mehrwert</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-4" aria-hidden />
          <p className="text-muted-foreground text-lg">
            Ihre Vorteile für eine gemeinsame Zusammenarbeit
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
