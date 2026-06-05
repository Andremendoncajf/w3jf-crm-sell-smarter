import { WHATSAPP_URL } from "@/lib/site-config";

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-lg bg-background/60 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg rotate-45 bg-gradient-to-br from-brand to-brand-deep" />
          <span className="font-display text-lg font-semibold tracking-tight">W3JF <span className="text-brand">CRM</span></span>
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
          Demonstração
        </a>
      </div>
    </header>
  );
}
