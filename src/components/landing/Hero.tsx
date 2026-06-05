import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site-config";

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

      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand/30 bg-brand/10 text-brand text-xs font-medium mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            CRM + IA + WhatsApp em uma única plataforma
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
            Transforme seus canais de comunicação em uma{" "}
            <span className="text-gradient-brand">Máquina de Vendas com IA</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Centralize atendimento, CRM, automação, funis de vendas e campanhas em uma única
            plataforma integrada. Clínicas, imobiliárias, escolas, academias, escritórios e muito mais.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold bg-brand text-primary-foreground hover:bg-brand-glow transition btn-glow"
            >
              Solicitar Demonstração
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold border border-border bg-card/60 hover:bg-card hover:border-brand/40 transition"
            >
              <MessageCircle className="h-4 w-4 text-brand" />
              Falar no WhatsApp
            </a>
          </div>
          <div className="mt-10 flex gap-8 text-sm text-muted-foreground">
            <div><span className="text-foreground font-semibold text-xl">+5x</span><br/>Velocidade</div>
            <div><span className="text-foreground font-semibold text-xl">24/7</span><br/>Atendimento IA</div>
            <div><span className="text-foreground font-semibold text-xl">100%</span><br/>Integrado</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <HeroMockup />
        </motion.div>
      </div>
    </section>
  );
}

function HeroMockup() {
  return (
    <div className="relative">
      <div className="absolute -inset-8 bg-gradient-to-tr from-brand-deep/30 to-brand/30 blur-3xl rounded-full" />
      <div className="relative glass-card rounded-2xl p-5 shadow-2xl">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-3 w-3 rounded-full bg-red-400/70" />
          <div className="h-3 w-3 rounded-full bg-yellow-400/70" />
          <div className="h-3 w-3 rounded-full bg-green-400/70" />
          <div className="ml-3 text-xs text-muted-foreground">app.w3jf.com / dashboard</div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-1 space-y-3">
            {["Leads novos", "Em atendimento", "Convertidos"].map((t, i) => (
              <div key={t} className="rounded-lg bg-background/60 p-3 border border-border/60">
                <div className="text-[10px] text-muted-foreground">{t}</div>
                <div className="text-lg font-semibold mt-1">{[128, 47, 312][i]}</div>
                <div className="h-1.5 mt-2 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: ["35%", "70%", "85%"][i] }}
                    transition={{ duration: 1.2, delay: 0.4 + i * 0.15 }}
                    className="h-full bg-gradient-to-r from-brand-deep to-brand"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="col-span-2 rounded-lg bg-background/60 p-4 border border-border/60">
            <div className="flex items-center justify-between mb-3">
              <div className="text-xs font-medium">Conversas WhatsApp</div>
              <div className="text-[10px] text-brand">● ao vivo</div>
            </div>
            <div className="space-y-2.5">
              {[
                { who: "Maria S.", msg: "Olá, gostaria de agendar uma consulta", mine: false },
                { who: "IA W3JF", msg: "Claro! Qual a melhor data para você?", mine: true },
                { who: "Maria S.", msg: "Quarta às 14h", mine: false },
                { who: "IA W3JF", msg: "Agendado ✅ — confirmação enviada", mine: true },
              ].map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: m.mine ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.2 }}
                  className={`flex ${m.mine ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-3 py-2 text-xs ${
                      m.mine
                        ? "bg-brand text-primary-foreground"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    <div className="text-[9px] opacity-70 mb-0.5">{m.who}</div>
                    {m.msg}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
