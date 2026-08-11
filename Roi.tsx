export default function Roi() {
  return (
    <section id="roi" className="max-w-[900px] mx-auto px-8 py-24 flex flex-col items-center text-center gap-5">
      <div className="font-mono text-xs uppercase tracking-wide text-accent-strong">
        Retorno sobre o investimento
      </div>
      <div className="font-mono text-7xl text-text-primary">6,4x</div>
      <p className="text-lg text-text-secondary max-w-lg">
        Um único paciente convertido fora do horário comercial já paga o
        investimento mensal na Evah.
      </p>
      <a
        href="#cta"
        className="rounded-lg border border-border-default text-text-primary font-semibold px-6 py-3 hover:bg-surface-sunken"
      >
        Falar com um especialista
      </a>
    </section>
  );
}
