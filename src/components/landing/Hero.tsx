import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site-config";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      {/* grid overlay */}
      <div className="absolute inset-0 -z-10 opacity-[0.06]" style={{
        backgroundImage:
          "linear-gradient(oklch(0.82 0.14 215) 1px, transparent 1px), linear-gradient(90deg, oklch(0.82 0.14 215) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }} />

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand/30 bg-brand/10 text-brand text-xs font-medium mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            CRM + IA + WhatsApp em uma única plataforma
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
            Transforme seus canais de comunicação em uma{" "}
            <span className="text-gradient-brand">Máquina de Vendas com IA</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Centralize atendimento, CRM, automação, funis de vendas e campanhas em uma única
            plataforma integrada. Clínicas, imobiliárias, escolas, academias, escritórios e muito mais.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold bg-brand text-primary-foreground hover:bg-brand-glow transition btn-glow"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Solicitar Demonstração
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold border border-border bg-card/60 hover:bg-card hover:border-brand/40 transition"
            >
              <WhatsAppIcon className="h-4 w-4 text-brand" />
              Falar no WhatsApp
            </a>
          </div>
          <div className="mt-10 flex justify-center gap-8 text-sm text-muted-foreground">
            <div><span className="text-foreground font-semibold text-xl">+5x</span><br/>Velocidade</div>
            <div><span className="text-foreground font-semibold text-xl">24/7</span><br/>Atendimento IA</div>
            <div><span className="text-foreground font-semibold text-xl">100%</span><br/>Integrado</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
