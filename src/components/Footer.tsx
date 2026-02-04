const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white py-12 md:py-16">
      <div className="container-narrow mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {/* Company Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">GRAU Engineering GmbH</h4>
            <address className="not-italic text-white/80 text-sm leading-relaxed">
              Musterstraße 123<br />
              58636 Iserlohn<br />
              Deutschland
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#leistungen" className="text-white/80 hover:text-white text-sm transition-colors">
                  Leistungen
                </a>
              </li>
              <li>
                <a href="#ueber-uns" className="text-white/80 hover:text-white text-sm transition-colors">
                  Über uns
                </a>
              </li>
              <li>
                <a href="#projekte" className="text-white/80 hover:text-white text-sm transition-colors">
                  Projekte
                </a>
              </li>
              <li>
                <a href="#kontakt" className="text-white/80 hover:text-white text-sm transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              <li>
                <a href="#impressum" className="text-white/80 hover:text-white text-sm transition-colors">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#datenschutz" className="text-white/80 hover:text-white text-sm transition-colors">
                  Datenschutz
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <p className="text-white/60 text-sm text-center">
            © {currentYear} GRAU Engineering GmbH. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
