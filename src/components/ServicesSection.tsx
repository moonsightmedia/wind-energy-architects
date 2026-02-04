import { 
  ClipboardList, 
  Users, 
  Shield, 
  Calculator, 
  FileText, 
  RefreshCw 
} from "lucide-react";

const services = [
  {
    icon: ClipboardList,
    title: "Projekt- & Baustellenmanagement",
    description: "Vollständige Koordination und Steuerung aller Bauphasen von der Planung bis zur Inbetriebnahme."
  },
  {
    icon: Users,
    title: "Koordination aller Gewerke",
    description: "Zentrale Abstimmung zwischen Herstellern, Zulieferern und ausführenden Unternehmen."
  },
  {
    icon: Shield,
    title: "HSE & Qualitätssicherung",
    description: "Sicherstellung von Arbeitsschutz, Gesundheit und Umweltstandards auf der Baustelle."
  },
  {
    icon: Calculator,
    title: "Kosten- & Termincontrolling",
    description: "Transparente Überwachung von Budget und Zeitplan mit regelmäßigem Reporting."
  },
  {
    icon: FileText,
    title: "Dokumentation & Reporting",
    description: "Lückenlose Projektdokumentation und regelmäßige Statusberichte für alle Stakeholder."
  },
  {
    icon: RefreshCw,
    title: "Repowering & Sonderprojekte",
    description: "Begleitung von Anlagen-Erneuerungen und komplexen Sonderstandorten."
  }
];

const ServicesSection = () => {
  return (
    <section id="leistungen" className="section-padding bg-muted">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="text-foreground mb-6">Unser Leistungsangebot</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Wir übernehmen das vollständige Projekt- und Baustellenmanagement rund um den Bau von Windenergieanlagen und koordinieren alle Beteiligten bis zur Inbetriebnahme.
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
