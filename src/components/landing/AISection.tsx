import { motion } from "framer-motion";
import { Bot, Check, Users } from "lucide-react";

const benefits = [
  "Atendimento imediato",
  "Qualificação automática de leads",
  "Respostas inteligentes",
  "Agendamento automatizado",
  "Redução do tempo de resposta",
  "Escalabilidade sem aumentar equipe",
];

export function AISection() {
  return (
    <section id="ia" className="py-24 relative">
      <div className="absolute inset-0 -z-10 opacity-40" style={{
        background: "radial-gradient(600px 300px at 50% 50%, oklch(0.51 0.24 297 / 0.25), transparent 70%)",
      }} />
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1 relative"
        >
          <div className="relative glass-card rounded-2xl p-8">
            <div className="flex items-center justify-around mb-6">
              <div className="text-center">
                <div className="h-16 w-16 rounded-2xl mx-auto bg-gradient-to-br from-accent to-brand-glow flex items-center justify-center">
                  <Bot className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="mt-2 text-xs font-medium">IA W3JF</div>
                <div className="text-[10px] text-muted-foreground">Atende 24/7</div>
              </div>
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex-1 h-px mx-4 bg-gradient-to-r from-accent to-brand-deep"
              />
              <div className="text-center">
                <div className="h-16 w-16 rounded-2xl mx-auto bg-gradient-to-br from-brand-deep to-accent flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="mt-2 text-xs font-medium">Equipe Humana</div>
                <div className="text-[10px] text-muted-foreground">Casos complexos</div>
              </div>
            </div>
            <div className="space-y-2 text-xs">
              {[
                { tag: "IA", t: "Olá! Como posso ajudar?", color: "brand" },
                { tag: "IA", t: "Identifiquei interesse em plano corporativo. Encaminhando…", color: "brand" },
                { tag: "Humano", t: "Oi! Sou o Carlos, vou te apresentar o melhor plano 🎯", color: "accent" },
              ].map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex items-start gap-2 bg-background/50 rounded-lg p-2.5 border border-border/40"
                >
                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${m.color === "brand" ? "bg-accent/20 text-accent" : "bg-accent/30 text-foreground"}`}>{m.tag}</span>
                  <span>{m.t}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:order-2"
        >
          <div className="inline-flex items-center gap-2 text-accent text-sm font-medium mb-3">
            <Bot className="h-4 w-4" /> Agente de IA
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            Atenda <span className="text-gradient-brand">24 horas por dia</span> com Inteligência Artificial
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            O agente de IA responde clientes instantaneamente, qualifica leads, agenda reuniões e
            encaminha casos complexos para atendentes humanos.
          </p>
          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-2.5">
                <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-accent/15 flex items-center justify-center">
                  <Check className="h-3 w-3 text-accent" />
                </span>
                <span className="text-sm">{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
