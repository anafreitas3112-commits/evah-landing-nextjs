export default function Testimonial() {
  return (
    <section id="cases" className="py-20 px-4 md:px-8">
      <div className="max-w-[860px] mx-auto">
        <div className="bg-surface rounded-3xl shadow-sm border border-border-subtle p-8 md:p-12 flex flex-col gap-6">
          <div className="font-display text-5xl text-[var(--green-300)] leading-none">&ldquo;</div>
          <div className="font-display font-bold text-[19px] md:text-[22px] text-text-primary leading-snug">
            Aprendi na prática que muitos pacientes escolhem a clínica que responde primeiro, não porque
            seja a melhor, mas porque estava presente no momento da decisão. Com a Evah, nossos pacientes
            são atendidos imediatamente, independentemente do horário: <span className="text-[var(--green-700)]">menos oportunidades perdidas</span> e
            uma experiência muito melhor para quem procura a clínica.
          </div>
          <div className="border-t border-border-subtle pt-4 text-sm">
            <b className="text-[var(--green-700)]">Roberta Miller</b> <span className="text-text-tertiary">· Emagrecentro</span>
          </div>
        </div>
      </div>
    </section>
  );
}
