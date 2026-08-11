export default function Testimonial() {
  return (
    <section id="cases" className="bg-[var(--green-50)] py-22 px-8">
      <div className="max-w-[1000px] mx-auto flex flex-col items-center gap-8">
        <span className="inline-flex items-center rounded-full bg-accent-soft text-accent-strong text-xs font-semibold px-4 py-1.5">
          Cases
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="bg-surface rounded-2xl shadow-sm p-8 flex flex-col gap-5">
            <div className="font-display text-3xl text-[var(--green-300)] leading-none">&ldquo;</div>
            <div className="font-display font-bold text-[19px] text-text-primary leading-snug">
              Antes eu passava o fim de semana <span className="line-through text-text-tertiary font-normal">grudada no celular</span>. Hoje desligo tranquila: os pacientes são atendidos enquanto a equipe descansa.
            </div>
            <div className="border-t border-border-subtle pt-3.5 text-[13px]">
              <b className="text-[var(--green-700)]">Proprietária</b> <span className="text-text-tertiary">· Clínica de estética</span>
            </div>
          </div>
          <div className="bg-surface rounded-2xl shadow-sm p-8 flex flex-col gap-5">
            <div className="font-display text-3xl text-[var(--green-300)] leading-none">&ldquo;</div>
            <div className="font-display font-bold text-[19px] text-text-primary leading-snug">
              O paciente fecha com quem responde primeiro. Agora, <span className="text-[var(--green-700)]">quem responde primeiro somos nós</span> — seja às 7h ou às 23h.
            </div>
            <div className="border-t border-border-subtle pt-3.5 text-[13px]">
              <b className="text-[var(--green-700)]">Gestora comercial</b> <span className="text-text-tertiary">· Clínica odontológica</span>
            </div>
          </div>
          <div className="md:col-span-2 bg-surface rounded-2xl shadow-sm p-8 flex flex-col gap-5">
            <div className="font-display text-3xl text-[var(--green-300)] leading-none">&ldquo;</div>
            <div className="font-display font-bold text-[19px] text-text-primary leading-snug max-w-[760px]">
              Aprendi na prática que muitos pacientes escolhem a clínica que responde primeiro — não porque seja a melhor, mas porque estava presente no momento da decisão. Com a Evah, nossos pacientes são atendidos imediatamente, independentemente do horário: <span className="text-[var(--green-700)]">menos oportunidades perdidas</span> e uma experiência muito melhor para quem procura a clínica.
            </div>
            <div className="border-t border-border-subtle pt-3.5 text-[13px]">
              <b className="text-[var(--green-700)]">Roberta Miller</b> <span className="text-text-tertiary">· Emagrecentro</span>
            </div>
          </div>
          <div className="bg-surface rounded-2xl shadow-sm p-8 flex flex-col gap-5">
            <div className="font-display text-3xl text-[var(--green-300)] leading-none">&ldquo;</div>
            <div className="font-display font-bold text-[19px] text-text-primary leading-snug">
              Meu receio era a IA soar fria com os pacientes. Aconteceu <span className="bg-[var(--ink-950)] text-white px-2 py-0.5 rounded">o oposto</span>: a conversa é natural do primeiro oi ao agendamento.
            </div>
            <div className="border-t border-border-subtle pt-3.5 text-[13px]">
              <b className="text-[var(--green-700)]">Proprietário</b> <span className="text-text-tertiary">· Clínica multidisciplinar</span>
            </div>
          </div>
          <div className="bg-surface rounded-2xl shadow-sm p-8 flex flex-col gap-5">
            <div className="font-display text-3xl text-[var(--green-300)] leading-none">&ldquo;</div>
            <div className="font-display font-bold text-[19px] text-text-primary leading-snug">
              A Evah não substitui a minha equipe. Ela cuida do primeiro contato e organiza tudo — o time fica livre para <span className="text-[var(--green-700)]">cuidar de pessoas</span>.
            </div>
            <div className="border-t border-border-subtle pt-3.5 text-[13px]">
              <b className="text-[var(--green-700)]">Proprietária</b> <span className="text-text-tertiary">· Clínica de estética</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
