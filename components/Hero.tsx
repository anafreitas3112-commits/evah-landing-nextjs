import Image from "next/image";

const stats = [
  { value: "24/7", label: "Atendimento contínuo" },
  { value: "18s", label: "Tempo médio de 1ª resposta" },
  { value: "35%", label: "Taxa média de conversão lead → agendamento" },
];

export default function Hero() {
  return (
    <>
      <section className="max-w-[1200px] mx-auto px-8 pt-24 pb-10 bg-surface rounded-3xl shadow-sm">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div className="flex flex-col gap-5">
            <span className="inline-flex self-start items-center rounded-full bg-accent-soft text-accent-strong text-xs font-semibold px-4 py-1.5">
              Para clínicas de estética, odontologia e saúde
            </span>
            <h1 className="font-display font-bold text-5xl leading-tight text-text-primary">
              A primeira operação comercial <span className="text-accent-strong">inteligente</span> para clínicas
            </h1>
            <p className="text-[17px] text-text-secondary max-w-[480px] leading-relaxed">
              Enquanto sua equipe cuida de quem já é paciente, a Evah atende, qualifica e
              agenda novos leads pelo WhatsApp — 24 horas por dia.
            </p>
            <div className="flex gap-3.5 flex-wrap">
              <a href="#cta" className="rounded-lg bg-accent-strong text-white font-semibold px-6 py-3.5 hover:bg-green-800">
                Agendar demonstração gratuita
              </a>
              <a href="#cta" className="rounded-lg border border-border-default text-text-primary font-semibold px-6 py-3.5 hover:bg-surface-sunken">
                Falar com um especialista
              </a>
            </div>
          </div>
          <div className="rounded-2xl shadow-lg overflow-hidden">
            <Image src="/whatsapp-mockup.png" alt="Atendimento Evah no WhatsApp" width={800} height={520} className="w-full h-auto block" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14 pt-10 border-t border-border-subtle">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-mono text-4xl text-text-primary">{s.value}</div>
              <div className="text-sm text-text-secondary mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
      <div className="text-center font-mono text-xs text-text-tertiary my-6">
        [placeholder: substituir por média real das clínicas ativas na Evah]
      </div>
    </>
  );
}
