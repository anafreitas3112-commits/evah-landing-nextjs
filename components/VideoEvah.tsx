export default function VideoEvah() {
  return (
    <section id="video" className="bg-surface border-y border-border-subtle scroll-mt-24">
      <div className="max-w-content mx-auto px-4 md:px-8 py-16 md:py-20 grid md:grid-cols-[1fr_1.1fr] gap-10 md:gap-14 items-center">
        <video
          className="mx-auto w-full max-w-[340px] rounded-3xl shadow-xl bg-black"
          controls
          playsInline
          preload="none"
          poster="/video/evah-consultora-ia-capa.jpg"
        >
          <source src="/video/evah-consultora-ia.mp4" type="video/mp4" />
        </video>
        <div className="flex flex-col gap-4">
          <div className="font-mono text-xs uppercase tracking-wide text-accent-strong">Veja em pouco mais de 1 minuto</div>
          <h2 className="font-display font-bold text-[30px] md:text-[36px] text-text-primary leading-tight">
            Uma consultora de IA ao seu lado, e IAs que trabalham junto com a sua equipe
          </h2>
          <p className="text-text-secondary leading-relaxed">
            Como a Evah conecta os seus dados, as mídias digitais e os processos da clínica, encontra onde vender
            mais, monta a estratégia com você e coloca o plano em prática com a sua equipe.
          </p>
          <p className="text-xs text-text-tertiary">Telas ilustrativas com dados fictícios.</p>
        </div>
      </div>
    </section>
  );
}
