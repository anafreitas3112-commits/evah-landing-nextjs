const steps = [
  { title: "Lead chega", description: "WhatsApp, Instagram ou indicação" },
  {
    title: "Evah atende e qualifica",
    description: "Segue o Framework OPERA — ouve, pergunta, entende",
  },
  { title: "Agendamento confirmado", description: "Horário real, direto na conversa" },
  {
    title: "Indicador atualizado",
    description: "Resultado visível no Dashboard, em tempo real",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="max-w-content mx-auto px-8 py-24">
      <div className="font-mono text-xs uppercase tracking-wide text-accent-strong text-center">
        Como funciona
      </div>
      <h2 className="font-display font-bold text-[34px] text-text-primary text-center mt-2 mb-10">
        Do primeiro &ldquo;oi&rdquo; ao agendamento confirmado
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {steps.map((s, i) => (
          <div key={s.title}>
            <div className="font-mono text-xs text-text-tertiary">
              0{i + 1}
            </div>
            <div className="font-display font-bold text-lg text-text-primary mt-2">
              {s.title}
            </div>
            <div className="text-sm text-text-secondary mt-1">{s.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
