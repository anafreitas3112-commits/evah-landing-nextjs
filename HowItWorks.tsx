const steps = [
  {
    n: "01",
    title: "Lead chega",
    desc: <>Alguém manda um &ldquo;oi&rdquo; no <b>WhatsApp</b> — de anúncio, Instagram ou indicação.</>,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        <line x1="8" y1="11.5" x2="8.01" y2="11.5" /><line x1="12" y1="11.5" x2="12.01" y2="11.5" /><line x1="16" y1="11.5" x2="16.01" y2="11.5" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Evah atende e qualifica",
    desc: <>Em segundos ela responde, <b>ouve, pergunta e entende</b> o que o paciente procura.</>,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><path d="m9 10 2 2 4-4" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Agendamento confirmado",
    desc: <>Sem &ldquo;vou verificar&rdquo;: o paciente sai com <b>dia e hora marcados</b>.</>,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /><path d="m9 16 2 2 4-4" />
      </svg>
    ),
  },
  {
    n: "04",
    title: "Indicador atualizado",
    desc: <>Você vê o agendamento virar <b>número no Dashboard</b>, na hora.</>,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" />
      </svg>
    ),
    active: true,
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="max-w-content mx-auto px-8 py-24">
      <div className="font-mono text-xs uppercase tracking-wide text-accent-strong text-center">
        Como funciona
      </div>
      <h2 className="font-display font-bold text-[34px] text-text-primary text-center mt-2 mb-12">
        Do primeiro &ldquo;oi&rdquo; ao agendamento confirmado
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative">
        <div className="hidden md:block absolute top-7 left-[14%] right-[14%] h-px bg-border-subtle" />
        {steps.map((s) => (
          <div key={s.n} className="flex flex-col items-center text-center gap-4 relative z-10 px-3">
            <div className="relative w-14 h-14">
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center ${
                  s.active
                    ? "bg-gradient-to-br from-[var(--green-600)] to-[var(--green-800)] text-white shadow-sm"
                    : "bg-surface border-[1.5px] border-border-default text-accent-strong"
                }`}
              >
                {s.icon}
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent-strong text-white text-[10px] font-bold flex items-center justify-center">
                {s.n}
              </div>
            </div>
            <div className="font-display font-bold text-base text-text-primary">{s.title}</div>
            <div className="text-sm text-text-secondary leading-relaxed">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
