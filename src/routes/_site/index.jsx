import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/home/Hero";
import ProblemSection from "@/components/home/ProblemSection";
import SolutionSection from "@/components/home/SolutionSection";
import StepsSection from "@/components/home/StepsSection";
import ProductShowcase from "@/components/home/ProductShowcase";
import BenefitsSection from "@/components/home/BenefitsSection";
import WhySection from "@/components/home/WhySection";
import CtaSection from "@/components/home/CtaSection";

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ALLEVANDO Smart Breeding",
  slogan: "Il futuro dell'allevamento, a portata di smartphone.",
  description:
    "Schede di cova intelligenti con tecnologia NFC e gestione digitale delle covate per allevatori ornitologici.",
  knowsAbout: ["Allevamento ornitologico", "Schema di cova NFC", "Smart Breeding"],
};

export const Route = createFileRoute("/_site/")({
  head: () => ({
    meta: [
      { title: "ALLEVANDO Smart Breeding™ | Schede di cova intelligenti NFC" },
      {
        name: "description",
        content:
          "ALLEVANDO Smart Breeding™: schede di cova intelligenti con NFC per la gestione digitale delle covate. Il metodo per allevatori ornitologici che unisce carta e dati.",
      },
      { property: "og:title", content: "ALLEVANDO Smart Breeding™ — L'allevamento evolve" },
      {
        property: "og:description",
        content:
          "La tecnologia incontra la passione per l'ornitologia: schede NFC e gestione digitale delle covate.",
      },
      { property: "og:type", content: "website" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(SCHEMA) }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <StepsSection />
      <ProductShowcase />
      <BenefitsSection />
      <WhySection />
      <CtaSection />
    </>
  );
}