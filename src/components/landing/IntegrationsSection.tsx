import { motion } from "framer-motion";
import { Plug } from "lucide-react";
import {
  SiWhatsapp,
  SiInstagram,
  SiFacebook,
  SiTiktok,
  SiShopify,
  SiStripe,
} from "react-icons/si";

const integrations = [
  { name: "WhatsApp", icon: SiWhatsapp, color: "#25D366" },
  { name: "Instagram", icon: SiInstagram, color: "#E4405F" },
  { name: "Facebook", icon: SiFacebook, color: "#1877F2" },
  { name: "TikTok", icon: SiTiktok, color: "#000000" },
  { name: "Shopify", icon: SiShopify, color: "#7AB55C" },
  { name: "Stripe", icon: SiStripe, color: "#635BFF" },
];

export function IntegrationsSection() {
  return (
    <section id="integracoes" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-medium mb-4">
            <Plug className="h-3.5 w-3.5" />
            Integrações
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            Conectado com as <span className="text-gradient-brand">principais ferramentas</span> do mercado
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            O W3JF CRM integra-se nativamente com as plataformas que você já usa para centralizar seus dados e automatizar seus processos.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {integrations.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="glass-card rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-accent/40 transition group"
              >
                <Icon size={32} style={{ color: item.color }} />
                <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition text-center">
                  {item.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
