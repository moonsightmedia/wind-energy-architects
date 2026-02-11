import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AnimateInView from "@/components/AnimateInView";

const Index = () => {
  const { hash, pathname } = useLocation();
  const previousHashRef = useRef<string | null>(null);

  useEffect(() => {
    // Reset when pathname changes (e.g., coming back from another page)
    if (pathname === "/") {
      if (hash) {
        const targetId = hash.substring(1);
        
        // Scroll immediately
        const scrollToHash = () => {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            const headerHeight = 80;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
              top: Math.max(0, targetPosition),
              behavior: 'instant'
            });
          }
        };
        
        // Only scroll if hash changed or it's a new navigation
        if (previousHashRef.current !== hash) {
          previousHashRef.current = hash;
          // Try immediately
          scrollToHash();
          // Also try after DOM is ready
          setTimeout(scrollToHash, 0);
        }
      } else {
        // No hash - scroll to top and reset ref
        if (previousHashRef.current !== null) {
          previousHashRef.current = null;
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
      }
    }
  }, [hash, pathname]);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AnimateInView delay={0}>
          <ServicesSection />
        </AnimateInView>
        <AnimateInView delay={50}>
          <AboutSection />
        </AnimateInView>
        <AnimateInView delay={100}>
          <BenefitsSection />
        </AnimateInView>
        <AnimateInView delay={100}>
          <ProjectsSection />
        </AnimateInView>
        <AnimateInView delay={50}>
          <ContactSection />
        </AnimateInView>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
