import { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#mehrwert", label: "Mehrwert" },
  { href: "#projekte", label: "Projekte" },
  { href: "#kontakt", label: "Kontakt" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
    
    // Handle hash links with scroll offset
    if (href.startsWith('#')) {
      e.preventDefault();
      
      // Always navigate to home first if not on home page
      if (!isHomePage) {
        navigate(`/${href}`, { replace: false });
        return;
      }
      
      // Update URL hash and scroll to target on home page
      window.history.pushState(null, '', href);
      const targetId = href.substring(1);
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

  const showSolidNav = !isHomePage || scrolled;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        showSolidNav ? "bg-primary-dark shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container-narrow mx-auto px-4 md:px-8 lg:px-16">
        <nav className="flex items-center justify-between py-4 md:py-6">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={logo}
              alt="GRAU Engineering GmbH"
              className="h-12 md:h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={isHomePage ? link.href : `/${link.href}`}
                  onClick={(e) => {
                    if (link.href.startsWith('#')) {
                      e.preventDefault();
                      // Always navigate to home first if not on home page
                      if (!isHomePage) {
                        navigate(`/${link.href}`, { replace: false });
                        return;
                      }
                      
                      // Update URL hash and scroll to target on home page
                      window.history.pushState(null, '', link.href);
                      const targetId = link.href.substring(1);
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
                  }}
                  className="text-white/90 hover:text-white text-sm font-medium transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Menü öffnen"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-primary-dark/95 backdrop-blur-sm rounded-md mb-4">
            <ul className="flex flex-col py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={isHomePage ? link.href : `/${link.href}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block px-6 py-3 text-white/90 hover:text-white hover:bg-white/10 text-sm font-medium transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
