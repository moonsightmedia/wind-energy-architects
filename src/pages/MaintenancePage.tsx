import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import heroImage from "@/assets/hero-windpark-main.jpg";
import { company, companyAddressLines } from "@/lib/company";

const MAINTENANCE_PASSWORD = "grau2026"; // Passwort für Wartungsmodus
const STORAGE_KEY = "maintenance_access";

const MaintenancePage = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === MAINTENANCE_PASSWORD) {
      localStorage.setItem(STORAGE_KEY, "true");
      window.location.reload();
    } else {
      setError("Falsches Passwort");
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-6 md:py-12 relative">
      {/* Hintergrundbild mit Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div 
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(20, 68, 55, 0.85)" }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-2xl w-full bg-card rounded-lg shadow-2xl overflow-hidden border border-primary/20 my-auto">
        {/* Header mit Logo */}
        <div className="bg-primary-dark/5 px-6 md:px-12 pt-8 md:pt-10 pb-6 md:pb-8 text-center border-b border-border">
          <div className="mb-4 md:mb-6 flex justify-center">
            <img
              src={logo}
              alt="GRAU Engineering GmbH"
              className="h-16 md:h-24 w-auto"
            />
          </div>
          <h1 className="text-2xl md:text-4xl font-semibold text-foreground mb-2 md:mb-3">
            Wartungsarbeiten
          </h1>
          <div className="w-12 md:w-16 h-0.5 bg-primary mx-auto mb-3 md:mb-4" />
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl mx-auto px-2">
            Unsere Homepage wird in der <strong className="text-foreground">KW06 und KW07/2026</strong> überarbeitet.
          </p>
        </div>

        {/* Content */}
        <div className="px-6 md:px-12 py-6 md:py-10">
          {/* Passwort-Bereich */}
          <div className="mb-8 md:mb-10">
            <h2 className="text-lg md:text-xl font-semibold text-foreground mb-3 md:mb-4 text-center">
              Zugang für autorisierte Personen
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mx-auto">
              <div>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  placeholder="Passwort eingeben"
                  className="text-center bg-background text-sm md:text-base"
                  autoFocus
                />
                {error && (
                  <p className="text-destructive text-xs md:text-sm mt-2 text-center">{error}</p>
                )}
              </div>
              <Button type="submit" size="lg" className="w-full text-sm md:text-base">
                Zugang gewähren
              </Button>
            </form>
          </div>

          {/* Kontaktdaten */}
          <div className="border-t border-border pt-6 md:pt-8">
            <h3 className="text-base md:text-lg font-semibold text-foreground mb-4 md:mb-6 text-center">
              Kontakt
            </h3>
            <div className="grid grid-cols-3 gap-1 md:gap-6 text-center">
              <div className="space-y-1 md:space-y-2">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary mx-auto" strokeWidth={1.5} />
                <p className="text-[10px] md:text-sm text-muted-foreground font-medium">Adresse</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${company.address.street}, ${company.address.zip} ${company.address.city}, ${company.address.country}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors text-[10px] md:text-sm block leading-tight"
                >
                  <address className="not-italic">
                    {company.name}
                    <br />
                    {companyAddressLines.map((line) => (
                      <span key={line}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </address>
                </a>
              </div>
              <div className="space-y-1 md:space-y-2">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary mx-auto" strokeWidth={1.5} />
                <p className="text-[10px] md:text-sm text-muted-foreground font-medium">Telefon</p>
                <a
                  href={`tel:${company.phoneHref}`}
                  className="text-foreground hover:text-primary transition-colors text-[10px] md:text-sm block leading-tight"
                >
                  {company.phone}
                </a>
              </div>
              <div className="space-y-1 md:space-y-2">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary mx-auto" strokeWidth={1.5} />
                <p className="text-[10px] md:text-sm text-muted-foreground font-medium">E-Mail</p>
                <a
                  href={`mailto:${company.email}`}
                  className="text-foreground hover:text-primary transition-colors text-[10px] md:text-sm block leading-tight whitespace-nowrap"
                >
                  {company.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;
