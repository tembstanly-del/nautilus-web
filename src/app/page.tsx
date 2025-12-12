import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesGrid from "@/components/ServicesGrid";
import ProcessSection from "@/components/ProcessSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import ValueProp from "@/components/ValueProp";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import StickyCTA from "@/components/StickyCTA";
import { COMPANY } from "@/app/constants";

export default function Home() {
  return (
    <main className="bg-nautilus-cream min-h-screen">
      <HeroSection />
      <StatsSection />
      <ServicesGrid />
      <ProcessSection />
      <BeforeAfterSection />
      <ValueProp />
      <TestimonialsSection />
      <FAQSection />
      <ContactForm />

      <footer className="py-8 text-center text-nautilus-slate/40 text-sm font-sans border-t border-nautilus-slate/10 mx-6">
        &copy; {new Date().getFullYear()} {COMPANY.name}. {COMPANY.location}.
      </footer>

      {/* Floating UI Elements */}
      <StickyCTA />
      <FloatingWhatsApp />
    </main>
  );
}
