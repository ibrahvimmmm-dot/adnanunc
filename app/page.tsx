import { Navigation } from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import { ValueProposition } from "@/components/value-proposition";
import { ServicesSection } from "@/components/services-section";
import { WhyChooseUs } from "@/components/why-choose-us";
import { ExpertiseSections } from "@/components/expertise-sections";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import About from "@/components/about-us";

export default function Page() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <ValueProposition />
        <About />
        <ServicesSection /> {/* Shows three clickable service cards */}
        <WhyChooseUs />
        <ExpertiseSections />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
