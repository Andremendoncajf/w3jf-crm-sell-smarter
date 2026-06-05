import { motion } from "framer-motion";
import { ArrowRight, Bot, CheckCircle2, Database, GitBranch, Trophy, UserPlus } from "lucide-react";

const steps = [
  { icon: UserPlus, label: "Lead entra" },
  { icon: Bot, label: "IA responde" },
  { icon: CheckCircle2, label: "Lead qualificado" },
  { icon: Database, label: "CRM registra" },
  { icon: GitBranch, label: "Funil atualiza" },
  { icon: Trophy, label: "Equipe fecha venda" },
];

export function FlowSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="text-brand text-sm font-medium mb-3">Automação</div>
          <h2 className="text-3xl md:text-5xl font-bold">
            Automação que <span className="text-gradient-brand">vende enquanto você trabalha</span>
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {steps.map((s, i) => (
            <div key={s.label} className="flex items-center gap-3">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.4 }}
                className="glass-card rounded-xl px-5 py-4 flex items-center gap-3 min-w-[180px]"
              >
                <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-brand-deep to-brand flex items-center justify-center shrink-0">
                  <s.icon className="h-4.5 w-4.5 text-primary-foreground" />
                </div>
                <span className="text-sm font-medium">{s.label}</span>
              </motion.div>
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 + 0.1 }}
                  className="hidden md:block"
                >
                  <ArrowRight className="h-4 w-4 text-brand" />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
