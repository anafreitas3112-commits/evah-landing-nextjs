"use client";
import { useState } from "react";

const padrao = [
  {
    q: "O que é uma IA como consultora?",
    a: "É a Evah olhando os dados da sua clínica (grupo, conversas, base e vendas), comparando com as melhores práticas do mercado, montando o plano de ação com você e executando o que foi aprovado. Você acompanha tudo por indicadores.",
  },
  {
    q: "A IA vai falar com minhas clientes sem eu ver?",
    a: "Só se você quiser. Posts e mensagens no privado podem passar antes pelo seu WhatsApp para aprovação. Dúvidas de saúde, contraindicações e reclamações vão direto para a equipe.",
  },
  {
    q: "Preciso trocar meu sistema ou meu WhatsApp?",
    a: "Não. O Evah Grupo entra no grupo que você já tem e não muda a rotina da equipe. Os outros produtos são adotados aos poucos, quando fizer sentido.",
  },
  {
    q: "E se o jeito da minha clínica for diferente?",
    a: "Melhor ainda. A Evah não é engessada: telas, indicadores e rotinas são ajustados ao jeito que a sua clínica vende.",
  },
  {
    q: "A Evah substitui minha equipe?",
    a: "Não. Ela aumenta a produtividade da equipe: cuida do que é repetitivo, separa quem está pronta para comprar e mostra o que fazer a seguir.",
  },
  {
    q: "Como funciona o diagnóstico gratuito?",
    a: "Uma conversa de 40 minutos sobre o grupo VIP da sua clínica. Você sai com um retrato do grupo e 3 ações para os próximos 30 dias, contratando ou não.",
  },
  {
    q: "Funciona para redes com mais de uma unidade?",
    a: "Sim. Cada unidade tem seus dados separados, e a gestão da rede compara indicadores entre elas.",
  },
];

export default function Faq({ itens }: { itens?: { q: string; a: string }[] }) {
  const faqs = itens ?? padrao;
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="max-w-[720px] mx-auto px-4 md:px-8 py-20 md:py-24">
      <h2 className="font-display font-bold text-[30px] md:text-[34px] text-text-primary text-center mb-7">
        Perguntas frequentes
      </h2>
      <div>
        {faqs.map((f, i) => (
          <div key={f.q} className="border-b border-border-subtle py-4">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex justify-between items-center gap-4 text-left font-semibold text-text-primary"
              aria-expanded={open === i}
            >
              {f.q}
              <span className="text-text-tertiary text-xl leading-none">{open === i ? "−" : "+"}</span>
            </button>
            {open === i && <p className="text-sm text-text-secondary mt-2 leading-relaxed">{f.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
