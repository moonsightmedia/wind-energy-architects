import { Link, useLocation, useNavigate } from "react-router-dom";
import { company, companyAddressLines } from "@/lib/company";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isHomePage = pathname === "/";

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    if (!isHomePage) {
      navigate(`/${hash}`, { replace: false });
    } else {
      // Update URL hash and scroll to target on home page
      window.history.pushState(null, '', hash);
      const targetId = hash.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const headerHeight = 80;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className="bg-primary-dark text-white py-12 md:py-16">
      <div className="container-narrow mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {/* Company Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">{company.name}</h4>
            <address className="not-italic text-white/80 text-sm leading-relaxed">
              {companyAddressLines.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#leistungen" onClick={(e) => handleHashClick(e, "#leistungen")} className="text-white/80 hover:text-white text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark rounded-sm">
                  Leistungen
                </a>
              </li>
              <li>
                <a href="#ueber-uns" onClick={(e) => handleHashClick(e, "#ueber-uns")} className="text-white/80 hover:text-white text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark rounded-sm">
                  Über uns
                </a>
              </li>
              <li>
                <a href="#projekte" onClick={(e) => handleHashClick(e, "#projekte")} className="text-white/80 hover:text-white text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark rounded-sm">
                  Projekte
                </a>
              </li>
              <li>
                <a href="#kontakt" onClick={(e) => handleHashClick(e, "#kontakt")} className="text-white/80 hover:text-white text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark rounded-sm">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Rechtliches</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/impressum" className="text-white/80 hover:text-white text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark rounded-sm">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="text-white/80 hover:text-white text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark rounded-sm">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <p className="text-white/60 text-sm text-center">
            © {currentYear} {company.name}. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
