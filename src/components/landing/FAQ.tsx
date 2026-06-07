import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "O W3JF CRM funciona com WhatsApp?",
    a: "Sim. Conectamos o WhatsApp oficial ao CRM, registrando todas as conversas e permitindo múltiplos atendentes, automações e campanhas.",
  },
  {
    q: "Posso usar um agente de IA?",
    a: "Sim. Nosso agente de IA atende 24/7, qualifica leads, agenda reuniões e transfere automaticamente os casos complexos para um humano.",
  },
  {
    q: "Preciso instalar algo?",
    a: "Não. O W3JF CRM é 100% em nuvem. Você acessa pelo navegador, em qualquer dispositivo.",
  },
  {
    q: "Posso acompanhar minha equipe?",
    a: "Sim. Você acompanha em tempo real conversas, performance, conversões e indicadores de cada atendente.",
  },
  {
    q: "O sistema possui automações?",
    a: "Sim. Crie fluxos personalizados para nutrição, vendas, atendimento, follow-up e recuperação de leads.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-12">
          <div className="text-accent text-sm font-medium mb-3">FAQ</div>
          <h2 className="text-3xl md:text-5xl font-bold">Perguntas frequentes</h2>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="glass-card rounded-xl px-5 border-0"
            >
              <AccordionTrigger className="text-left font-medium hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
