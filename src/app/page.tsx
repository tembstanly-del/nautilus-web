import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import ValueProp from "@/components/ValueProp";
import ContactForm from "@/components/ContactForm";
import { COMPANY } from "@/app/constants";

export default function Home() {
  return (
    <main className="bg-nautilus-sand min-h-screen">
      <HeroSection />
      <ServicesGrid />
      <ValueProp />
      <ContactForm />

      <footer className="py-8 text-center text-nautilus-deep/40 text-sm font-sans border-t border-nautilus-deep/5 mx-6 mt-12">
        &copy; {new Date().getFullYear()} {COMPANY.name}. {COMPANY.location}.
      </footer>
    </main>
  );
}
