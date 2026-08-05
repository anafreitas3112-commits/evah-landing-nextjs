export default function Hero() {
  return (
    <section className="max-w-content mx-auto px-8 pt-24 pb-14 flex flex-col items-center text-center gap-6">
      <span className="inline-flex items-center rounded-full bg-accent-soft text-accent-strong text-xs font-semibold px-4 py-1.5">
        Para clínicas de estética, odontologia e saúde
      </span>
      <h1 className="font-display font-bold text-5xl leading-tight text-text-primary max-w-3xl">
        A primeira operação comercial inteligente para clínicas
      </h1>
      <p className="text-lg text-text-secondary max-w-xl leading-relaxed">
        Enquanto sua equipe cuida de quem já é paciente, a Evah atende, qualifica e
        agenda novos leads pelo WhatsApp — 24 horas por dia.
      </p>
      <div className="flex gap-3.5 flex-wrap justify-center">
        <a
          href="#cta"
          className="rounded-lg bg-accent-strong text-white font-semibold px-6 py-3.5 hover:bg-green-800"
        >
          Agendar demonstração gratuita
        </a>
        <a
          href="#cta"
          className="rounded-lg border border-border-default text-text-primary font-semibold px-6 py-3.5 hover:bg-surface-sunken"
        >
          Falar com um especialista
        </a>
      </div>
      <div className="font-mono text-xs text-text-tertiary">
        A primeira operação comercial inteligente feita para clínicas
      </div>
    </section>
  );
}
