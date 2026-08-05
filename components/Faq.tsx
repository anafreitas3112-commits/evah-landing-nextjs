"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Preciso trocar meu WhatsApp?",
    a: "Não. A Evah conecta ao número que sua clínica já usa, sem perder o histórico de conversas.",
  },
  {
    q: "A Evah funciona fora do horário comercial?",
    a: "Sim — 24 horas por dia, todos os dias, incluindo fins de semana.",
  },
  {
    q: "A Evah substitui minha equipe de recepção?",
    a: "Não. A Evah atende com o mesmo cuidado humano e escala para a equipe exatamente quando precisa de julgamento humano.",
  },
  {
    q: "Quanto tempo leva para implementar?",
    a: "Em geral, poucos dias — conectar WhatsApp, configurar a IA e importar o conhecimento da clínica.",
  },
  {
    q: "Como sei que está funcionando?",
    a: "O Dashboard mostra, em tempo real, tempo de resposta, taxa de conversão e faturamento recuperado.",
  },
  {
    q: "Funciona para redes com mais de uma unidade?",
    a: "Sim — a Evah padroniza o atendimento e consolida indicadores entre unidades.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="max-w-[720px] mx-auto px-8 py-24">
      <h2 className="font-display font-bold text-[34px] text-text-primary text-center mb-7">
        Perguntas frequentes
      </h2>
      <div>
        {faqs.map((f, i) => (
          <div key={f.q} className="border-b border-border-subtle py-3.5">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex justify-between items-center text-left font-semibold text-text-primary"
            >
              {f.q}
              <span className="text-text-tertiary">{open === i ? "−" : "+"}</span>
            </button>
            {open === i && (
              <p className="text-sm text-text-secondary mt-2 leading-relaxed">
                {f.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
