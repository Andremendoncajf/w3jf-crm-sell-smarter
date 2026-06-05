import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const items = [
  {
    name: "Carla Andrade",
    company: "Clínica Vitalis",
    initials: "CA",
    text: "Reduzimos pela metade o tempo de resposta no WhatsApp. Os agendamentos pela IA mudaram nossa operação.",
  },
  {
    name: "Rafael Monteiro",
    company: "Imobiliária Horizonte",
    initials: "RM",
    text: "Hoje cada lead cai automaticamente no funil certo. Nossa equipe foca em fechar, não em organizar planilhas.",
  },
  {
    name: "Patrícia Lemos",
    company: "Academia PowerFit",
    initials: "PL",
    text: "As campanhas e a recuperação de leads pelo W3JF triplicaram nossas matrículas em três meses.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <div className="text-brand text-sm font-medium mb-3">Depoimentos</div>
          <h2 className="text-3xl md:text-5xl font-bold">Quem usa, recomenda</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {items.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-7 relative"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-brand/20" />
              <p className="text-foreground/90 leading-relaxed">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-brand to-brand-deep flex items-center justify-center font-semibold">
                  {t.initials}
                </div>
                <div>
                  <div className="font-medium text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
