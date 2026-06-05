import { ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site-config";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function FinalCTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl p-10 md:p-16 text-center">
          <div className="absolute inset-0 -z-10" style={{
            background: "linear-gradient(135deg, oklch(0.55 0.18 250 / 0.35), oklch(0.82 0.14 215 / 0.25))",
          }} />
          <div className="absolute inset-0 -z-10 glass-card rounded-3xl" />
          <h2 className="text-3xl md:text-5xl font-bold max-w-3xl mx-auto">
            Pronto para vender mais com WhatsApp e <span className="text-gradient-brand">Inteligência Artificial?</span>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">
            Solicite uma demonstração e descubra como o W3JF CRM pode automatizar seu atendimento
            e aumentar suas vendas.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-brand text-primary-foreground hover:bg-brand-glow transition btn-glow"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Falar com um Especialista
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md rotate-45 bg-gradient-to-br from-brand to-brand-deep" />
          <span className="font-display font-semibold text-foreground">W3JF CRM</span>
        </div>
        <div>© {new Date().getFullYear()} W3JF — Todos os direitos reservados.</div>
      </div>
    </footer>
  );
}
