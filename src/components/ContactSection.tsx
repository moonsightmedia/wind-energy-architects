import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import { company } from "@/lib/company";

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
    <section id="kontakt" className="section-padding bg-primary/5 scroll-mt-24">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 md:mb-16 border-l-4 border-primary pl-6">
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
                {company.name}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-foreground">{company.address.street}</p>
                    <p className="text-foreground">{company.address.zip} {company.address.city}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={1.5} />
                  <a href={`tel:${company.phoneHref}`} className="text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm">
                    {company.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={1.5} />
                  <a href={`mailto:${company.email}`} className="text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm">
                    {company.email}
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
                placeholder="name@beispiel.de"
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
