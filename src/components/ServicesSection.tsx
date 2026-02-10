import { 
  ClipboardList, 
  Users, 
  Shield, 
  Calculator, 
  Eye,
  RefreshCw 
} from "lucide-react";

const services = [
  {
    icon: ClipboardList,
    title: "Projekt- und Baustellenmanagement",
    description: "Termingerechte und kostenoptimierte Planung und Koordinierung von allen Bauphasen bis zur Inbetriebnahme."
  },
  {
    icon: Shield,
    title: "HSE und Qualitätssicherung",
    description: "Qualitätskontrollen und Sicherstellung eines rechtssicheren Baustellenbetriebes. -SiFa gemäß DGUV V2 -SiGeKo gemäß BaustellV"
  },
  {
    icon: Users,
    title: "Stakeholder-Management",
    description: "Interessensvertretung und Hauptansprechpartner für alle Zulieferer, ausführenden Unternehmen, Behörden und weitere Projektbeteiligten."
  },
  {
    icon: Eye,
    title: "Bauüberwachung",
    description: "Koordination und Abnahmen von Fundamenten, Kranstellflächen, Zuwegungen und der elektrischen Infrastruktur."
  },
  {
    icon: Calculator,
    title: "Kosten- und Termincontrolling",
    description: "Transparente Überwachung und Optimierung des Budgets und Bauablaufs sowie eine lückenlose Dokumentation inkl. Statusberichten."
  },
  {
    icon: RefreshCw,
    title: "Repowering und Sonderprojekte",
    description: "Errichtung von Windenergieanlagen und Demontage von Bestandsanlagen – auch an komplexen Standorten mit anspruchsvoller Infrastruktur."
  }
];

const ServicesSection = () => {
  return (
    <section id="leistungen" className="section-padding bg-muted scroll-mt-24">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-wide text-primary mb-2">Leistungen</p>
          <h2 className="text-foreground mb-2">Was wir Ihnen bieten</h2>
          <div className="w-16 h-0.5 bg-primary mb-6" aria-hidden />
          <p className="text-muted-foreground text-lg leading-relaxed">
            Wir übernehmen gerne die gesamte Planung und Umsetzung Ihres Bauvorhabens – von der Spätphase der Baugenehmigung bis zur Schlüsselfertigen Windenergieanlage. Alle Leistungen können auch einzeln in Anspruch genommen werden.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="card-service">
              <service.icon className="w-10 h-10 text-primary mb-4" strokeWidth={1.5} />
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
