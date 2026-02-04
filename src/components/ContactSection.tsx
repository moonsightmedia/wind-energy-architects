import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    firma: "",
    email: "",
    nachricht: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Vielen Dank für Ihre Anfrage! Wir melden uns zeitnah bei Ihnen.");
    setFormData({ name: "", firma: "", email: "", nachricht: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="kontakt" className="section-padding bg-muted">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <h2 className="text-foreground mb-4">Kontakt</h2>
          <p className="text-muted-foreground text-lg">
            Sie planen ein Windenergieprojekt oder benötigen Unterstützung bei einem laufenden Bauvorhaben? Sprechen Sie uns gern an.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                GRAU Engineering GmbH
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-foreground">Musterstraße 123</p>
                    <p className="text-foreground">58636 Iserlohn</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={1.5} />
                  <a href="tel:+492371123456" className="text-foreground hover:text-primary transition-colors">
                    +49 (0) 2371 123456
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={1.5} />
                  <a href="mailto:info@grau-engineering.de" className="text-foreground hover:text-primary transition-colors">
                    info@grau-engineering.de
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-card"
                  placeholder="Ihr Name"
                />
              </div>
              <div>
                <label htmlFor="firma" className="block text-sm font-medium text-foreground mb-2">
                  Firma
                </label>
                <Input
                  id="firma"
                  name="firma"
                  type="text"
                  value={formData.firma}
                  onChange={handleChange}
                  className="bg-card"
                  placeholder="Ihre Firma"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                E-Mail *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-card"
                placeholder="ihre.email@beispiel.de"
              />
            </div>
            <div>
              <label htmlFor="nachricht" className="block text-sm font-medium text-foreground mb-2">
                Nachricht *
              </label>
              <Textarea
                id="nachricht"
                name="nachricht"
                required
                rows={5}
                value={formData.nachricht}
                onChange={handleChange}
                className="bg-card resize-none"
                placeholder="Wie können wir Ihnen helfen?"
              />
            </div>
            <Button type="submit" size="lg" disabled={isSubmitting}>
              {isSubmitting ? "Wird gesendet..." : "Anfrage senden"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
