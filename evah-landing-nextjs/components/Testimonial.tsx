const testimonials = [
  {
    quote:
      "Eu vivia em alerta nos finais de semana. Hoje a Evah atende nossos pacientes mesmo quando a equipe está descansando, e isso me trouxe uma tranquilidade que eu não tinha há anos.",
    name: "Proprietária",
    role: "Clínica de estética",
  },
  {
    quote:
      "Muitos pacientes escolhem a clínica que responde primeiro. Com a Evah, nossos pacientes são atendidos imediatamente, independentemente do horário.",
    name: "Gestora comercial",
    role: "Clínica odontológica",
  },
  {
    quote:
      "Eu tinha receio de que a inteligência artificial deixasse o atendimento frio. A realidade foi o contrário: os pacientes conversam naturalmente e muitos nem percebem que estão falando com a Evah.",
    name: "Proprietário",
    role: "Clínica multidisciplinar",
  },
  {
    quote:
      "A Evah não substituiu minha equipe. Hoje ela cuida do primeiro contato e organiza os atendimentos, e nossa equipe dedica mais tempo a cuidar das pessoas.",
    name: "Proprietária",
    role: "Clínica de estética",
  },
];

export default function Testimonial() {
  return (
    <section id="cases" className="bg-inverse py-22 px-8">
      <div className="max-w-[920px] mx-auto flex flex-col items-center gap-8">
        <div className="font-mono text-xs uppercase tracking-wide text-[var(--green-300)]">
          Quem já usa a Evah
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {testimonials.map((t) => (
            <div key={t.name + t.role} className="flex flex-col gap-4">
              <blockquote className="font-display text-lg text-text-on-inverse leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div>
                <div className="font-semibold text-text-on-inverse text-sm">
                  {t.name}
                </div>
                <div className="text-[var(--ink-400)] text-xs">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
