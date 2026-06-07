import { WHATSAPP_URL } from "@/lib/site-config";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-lg bg-background/60 border-b border-border/60">
      <div className="mx-auto max-w-7xl h-24 flex items-center justify-between px-[24px]">
        <a href="#top" className="flex items-center gap-3">
          <img src="/logo-w3jf.svg" alt="W3JF CRM" className="h-20 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#beneficios" className="hover:text-foreground transition">Recursos</a>
          <a href="#whatsapp" className="hover:text-foreground transition">WhatsApp</a>
          <a href="#ia" className="hover:text-foreground transition">IA</a>
          <a href="#faq" className="hover:text-foreground transition">FAQ</a>
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-brand text-primary-foreground hover:bg-brand-glow transition btn-glow"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Demonstração
        </a>
      </div>
    </header>
  );
}
