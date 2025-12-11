import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import ValueProp from "@/components/ValueProp";
import ContactForm from "@/components/ContactForm";
import { COMPANY } from "@/app/constants";

export default function Home() {
  return (
    <main className="bg-nautilus-cream min-h-screen">
      <HeroSection />
      <ServicesGrid />
      <ValueProp />
      <ContactForm />

      <footer className="py-8 text-center text-nautilus-slate/40 text-sm font-sans border-t border-nautilus-slate/10 mx-6 mt-12">
        &copy; {new Date().getFullYear()} {COMPANY.name}. {COMPANY.location}.
      </footer>
    </main>
  );
}
