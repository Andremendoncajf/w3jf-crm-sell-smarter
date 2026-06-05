import { motion } from "framer-motion";
import {
  Users, GitBranch, Zap, UserPlus, Calendar, Megaphone, MessagesSquare, BarChart3,
} from "lucide-react";

const features = [
  { icon: Users, title: "CRM completo", desc: "Gestão total de clientes, contatos e histórico em um só lugar." },
  { icon: GitBranch, title: "Funis personalizáveis", desc: "Crie funis sob medida para cada produto, serviço ou time." },
  { icon: Zap, title: "Automação de marketing", desc: "Fluxos inteligentes que nutrem e convertem automaticamente." },
  { icon: UserPlus, title: "Gestão de leads", desc: "Captura, distribuição e qualificação automática de oportunidades." },
  { icon: Calendar, title: "Agendamentos online", desc: "Sua agenda integrada, com confirmação e lembretes automáticos." },
  { icon: Megaphone, title: "Disparo de campanhas", desc: "Envie campanhas segmentadas por WhatsApp, e-mail e mais." },
  { icon: MessagesSquare, title: "Centralização de conversas", desc: "WhatsApp, Instagram e Facebook em uma única caixa de entrada." },
  { icon: BarChart3, title: "Relatórios em tempo real", desc: "Dashboards e métricas claras para decisões mais rápidas." },
];

export function Features() {
  return (
    <section id="beneficios" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-14">
          <div className="text-brand text-sm font-medium mb-3">Por que W3JF CRM</div>
          <h2 className="text-3xl md:text-5xl font-bold">
            Tudo que sua operação precisa, em <span className="text-gradient-brand">uma plataforma</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Substitua múltiplas ferramentas e centralize vendas, atendimento e marketing.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group glass-card rounded-xl p-5 hover:border-brand/50 transition"
            >
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-brand-deep to-brand flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <f.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-1.5">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
