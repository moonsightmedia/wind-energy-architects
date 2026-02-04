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
