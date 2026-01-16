import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>

      <section id="features">
        <FeaturesSection />
      </section>

      <section id="services">
        <ServicesSection />
      </section>

      <section id="testimonials">
        <TestimonialsSection />
      </section>

      <section id="faq">
        <FAQSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}