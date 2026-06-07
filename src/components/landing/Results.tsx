import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toString() + suffix);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 1.8, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, to, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const metrics = [
  { value: 5, suffix: "x", label: "Mais velocidade no atendimento" },
  { value: 3, suffix: "x", label: "Mais conversões" },
  { value: 70, suffix: "%", label: "Menos tarefas manuais" },
  { value: 2, suffix: "x", label: "Mais produtividade da equipe" },
];

export function Results() {
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <div className="text-accent text-sm font-medium mb-3">Resultados</div>
          <h2 className="text-3xl md:text-5xl font-bold">
            Impacto real para o <span className="text-gradient-brand">seu negócio</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-8 text-center"
            >
              <div className="text-5xl md:text-6xl font-bold text-gradient-brand font-display">
                <Counter to={m.value} suffix={m.suffix} />
              </div>
              <div className="mt-3 text-sm text-muted-foreground">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
