import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { WhatsAppSection } from "@/components/landing/WhatsAppSection";
import { AISection } from "@/components/landing/AISection";
import { FlowSection } from "@/components/landing/FlowSection";
import { Results } from "@/components/landing/Results";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { IntegrationsSection } from "@/components/landing/IntegrationsSection";
import { FinalCTA, Footer } from "@/components/landing/FinalCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "W3JF CRM — Transforme conversas em vendas com IA" },
      { name: "description", content: "CRM, automação, WhatsApp e IA em uma única plataforma. Centralize atendimento, funis e campanhas. Solicite uma demonstração." },
      { property: "og:title", content: "W3JF CRM — CRM + WhatsApp + IA" },
      { property: "og:description", content: "Atendimento 24/7 com IA, WhatsApp integrado e funis automáticos para clínicas, imobiliárias, escolas e mais." },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <WhatsAppSection />
        <AISection />
        <FlowSection />
        <IntegrationsSection />
        <Results />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
