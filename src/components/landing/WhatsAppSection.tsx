import { motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";

const benefits = [
  "Histórico completo do cliente",
  "Distribuição automática de atendimentos",
  "Múltiplos atendentes",
  "Etiquetas e segmentações",
  "Mensagens automáticas",
  "Recuperação de leads",
];

export function WhatsAppSection() {
  return (
    <section id="whatsapp" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 text-brand text-sm font-medium mb-3">
            <MessageCircle className="h-4 w-4" /> WhatsApp Integrado
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            Seu WhatsApp <span className="text-gradient-brand">conectado ao CRM</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Todas as conversas são registradas automaticamente no CRM, permitindo acompanhar
            histórico, oportunidades e vendas em um único lugar.
          </p>
          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-2.5">
                <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-brand/15 flex items-center justify-center">
                  <Check className="h-3 w-3 text-brand" />
                </span>
                <span className="text-sm">{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -inset-8 bg-brand/20 blur-3xl rounded-full" />
          <div className="relative glass-card rounded-2xl p-6">
            <div className="flex items-center gap-3 pb-4 border-b border-border/60">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand to-brand-deep flex items-center justify-center font-bold">JS</div>
              <div>
                <div className="font-medium text-sm">João Silva</div>
                <div className="text-[10px] text-brand">● online · Lead quente</div>
              </div>
              <div className="ml-auto text-[10px] px-2 py-1 rounded-md bg-brand/15 text-brand">CRM #4821</div>
            </div>
            <div className="space-y-3 py-5">
              {[
                { mine: false, t: "Quero saber mais sobre o plano premium" },
                { mine: true, t: "Olá João! Posso te enviar uma demonstração agora?" },
                { mine: false, t: "Pode sim, tenho 10 minutos" },
                { mine: true, t: "Perfeito, enviando link da reunião 📅" },
              ].map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className={`flex ${m.mine ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[75%] rounded-2xl px-4 py-2 text-sm ${
                    m.mine ? "bg-brand text-primary-foreground rounded-br-sm" : "bg-muted rounded-bl-sm"
                  }`}>{m.t}</div>
                </motion.div>
              ))}
            </div>
            <div className="pt-3 border-t border-border/60 flex items-center gap-2 text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              Conversa registrada automaticamente no funil de vendas
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
