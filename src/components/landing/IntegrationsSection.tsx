import { motion } from "framer-motion";
import { Plug } from "lucide-react";
import {
  ShopifyIcon,
  TikTokIcon,
  InstagramIcon,
  FacebookIcon,
  StripeIcon,
  ZapierIcon,
  GoogleIcon,
  HubSpotIcon,
  SlackIcon,
  SalesforceIcon,
  MercadoPagoIcon,
  PipedriveIcon,
} from "@/components/icons/BrandIcons";

const integrations = [
  { name: "WhatsApp", icon: () => null, custom: true },
  { name: "Instagram", icon: InstagramIcon },
  { name: "Facebook", icon: FacebookIcon },
  { name: "TikTok", icon: TikTokIcon },
  { name: "Shopify", icon: ShopifyIcon },
  { name: "Stripe", icon: StripeIcon },
  { name: "Google", icon: GoogleIcon },
  { name: "Zapier", icon: ZapierIcon },
  { name: "HubSpot", icon: HubSpotIcon },
  { name: "Slack", icon: SlackIcon },
  { name: "Salesforce", icon: SalesforceIcon },
  { name: "Mercado Pago", icon: MercadoPagoIcon },
  { name: "Pipedrive", icon: PipedriveIcon },
];

function WhatsAppBrandIcon({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12.472 2C7.014 2 2.5 6.29 2.5 11.57c0 1.83.52 3.6 1.51 5.14L2 22l5.56-1.86a9.56 9.56 0 0 0 4.916 1.43c5.458 0 9.974-4.29 9.974-9.57S18.93 2 12.472 2zm5.75 13.27c-.25.7-1.45 1.35-2.04 1.44-.53.08-1.05.17-3.18-.66-2.68-1.07-4.4-3.83-4.53-4-.14-.18-.34-.52-.34-1s.22-.7.3-.83c.08-.12.17-.15.23-.15.06 0 .12 0 .17.01.06.01.14.02.22.16.08.15.3.52.33.56.03.04.05.08.01.13-.04.05-.06.08-.12.14-.06.06-.12.12-.18.18-.06.07-.13.14-.06.27.07.13.3.5.64.8.44.4.82.52 1.05.58.15.04.26-.03.34-.1.08-.06.34-.4.43-.54.09-.14.18-.12.27-.07.09.04.57.27.67.32.1.05.17.07.2.11.02.04.02.23-.08.46z" fill="currentColor"/>
    </svg>
  );
}

export function IntegrationsSection() {
  return (
    <section id="integracoes" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand/30 bg-brand/10 text-brand text-xs font-medium mb-4">
            <Plug className="h-3.5 w-3.5" />
            Integrações
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            Conectado com as <span className="text-gradient-brand">principais ferramentas</span> do mercado
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            O W3JF CRM integra-se nativamente com dezenas de plataformas para centralizar seus dados e automatizar seus processos.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
          {integrations.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="glass-card rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-brand/40 transition group"
              >
                {item.custom ? (
                  <WhatsAppBrandIcon size={32} className="text-[#25D366]" />
                ) : (
                  <Icon size={28} className="text-foreground/70 group-hover:text-brand transition" />
                )}
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
