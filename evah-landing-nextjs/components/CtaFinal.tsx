export default function CtaFinal() {
  return (
    <section
      id="cta"
      className="py-22 px-8 flex justify-center"
      style={{ background: "var(--green-700)" }}
    >
      <div className="max-w-[700px] w-full flex flex-col items-center text-center gap-4">
        <div className="font-mono text-xs uppercase tracking-wide text-[var(--green-200)]">
          Pronto para começar?
        </div>
        <h2 className="font-display font-bold text-3xl text-white">
          Agende uma demonstração gratuita para sua clínica
        </h2>
        <a
          href="mailto:contato@evah.com.br"
          className="rounded-lg bg-white font-semibold px-6 py-3.5 hover:opacity-90"
          style={{ color: "var(--green-800)" }}
        >
          Falar com um especialista
        </a>
      </div>
    </section>
  );
}
