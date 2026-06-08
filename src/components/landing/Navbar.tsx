import { WHATSAPP_URL } from "@/lib/site-config";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-lg bg-background/60 border-b border-border/60">
      <div className="mx-auto max-w-7xl h-24 flex items-center justify-between px-[24px]">
        <a href="#top" className="flex items-center gap-3">
          <img src="/logo-w3jf.svg" alt="W3JF CRM" className="h-20 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-base font-medium text-muted-foreground">
          <a href="#beneficios" className="relative group hover:text-foreground transition-colors duration-300">
            Recursos
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand group-hover:w-full transition-all duration-300 rounded-full" />
          </a>
          <a href="#whatsapp" className="relative group hover:text-foreground transition-colors duration-300">
            WhatsApp
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand group-hover:w-full transition-all duration-300 rounded-full" />
          </a>
          <a href="#ia" className="relative group hover:text-foreground transition-colors duration-300">
            IA
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand group-hover:w-full transition-all duration-300 rounded-full" />
          </a>
          <a href="#faq" className="relative group hover:text-foreground transition-colors duration-300">
            FAQ
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand group-hover:w-full transition-all duration-300 rounded-full" />
          </a>
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
