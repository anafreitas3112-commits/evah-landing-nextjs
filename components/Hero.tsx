import { whatsappDiagnostico } from "./contato";

const passos = [
  { n: "1", t: "Analisei", d: "Seu grupo VIP só recebe promoção e as respostas caíram nas últimas semanas." },
  { n: "2", t: "Comparei", d: "Grupos que vendem bem nutrem antes de ofertar e chamam no privado quem demonstrou interesse." },
  { n: "3", t: "Plano da semana", d: "2 posts de conteúdo, 1 oferta com prazo curto e lista de quem chamar no privado." },
  { n: "4", t: "Executando", d: "Posts prontos para sua aprovação no WhatsApp. Tarefas já criadas para a equipe." },
];

export default function Hero() {
  return (
    <section id="topo" className="max-w-[1200px] mx-auto px-4 md:px-8 pt-12 md:pt-20 pb-16">
      <div className="grid md:grid-cols-[1.1fr_1fr] gap-10 md:gap-14 items-center">
        <div className="flex flex-col gap-5">
          <span className="inline-flex self-start items-center rounded-full bg-accent-soft text-accent-strong text-xs font-semibold px-4 py-1.5">
            Consultoria com IA para clínicas
          </span>
          <h1 className="font-display font-bold text-[38px] md:text-[52px] leading-[1.08] text-text-primary">
            Já pensou ter uma <span className="text-accent-strong">IA como consultora</span> da sua clínica?
          </h1>
          <p className="text-[17px] text-text-secondary max-w-[520px] leading-relaxed">
            A Evah analisa seus números, compara com as melhores práticas do mercado, monta o
            plano de ação com você e executa. IA não só para captar lead: <b className="text-text-primary">IA na gestão</b>,
            com indicadores para acompanhar cada passo.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a href={whatsappDiagnostico} target="_blank" rel="noopener" className="rounded-lg bg-accent-strong text-white font-semibold px-6 py-3.5 hover:bg-green-800">
              Quero o diagnóstico gratuito
            </a>
            <a href="#metodo" className="rounded-lg border border-border-default text-text-primary font-semibold px-6 py-3.5 hover:bg-surface-sunken">
              Ver como funciona
            </a>
          </div>
          <p className="text-[13px] text-text-tertiary">Diagnóstico do grupo VIP da sua clínica em 40 minutos, sem custo.</p>
        </div>

        <div className="bg-surface rounded-3xl shadow-lg border border-border-subtle p-5 md:p-6 flex flex-col gap-3">
          <div className="flex items-center gap-3 pb-3 border-b border-border-subtle">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--green-600)] to-[var(--green-800)] text-white font-display font-bold flex items-center justify-center">E</div>
            <div className="flex-1">
              <div className="font-semibold text-sm text-text-primary">Evah · sua consultora</div>
              <div className="text-xs text-text-tertiary">Plano de ação da semana</div>
            </div>
            <span className="font-mono text-[11px] text-text-tertiary">exemplo</span>
          </div>
          {passos.map((p) => (
            <div key={p.n} className="flex gap-3 items-start rounded-xl bg-surface-sunken p-3">
              <span className="shrink-0 w-6 h-6 rounded-full bg-accent-strong text-white text-xs font-bold flex items-center justify-center">{p.n}</span>
              <div className="text-sm leading-snug">
                <b className="text-text-primary">{p.t}.</b> <span className="text-text-secondary">{p.d}</span>
              </div>
            </div>
          ))}
          <div className="flex gap-2 pt-1">
            <span className="flex-1 text-center rounded-lg bg-accent-strong text-white text-sm font-semibold py-2.5">Aprovar o plano</span>
            <span className="flex-1 text-center rounded-lg border border-border-default text-text-primary text-sm font-semibold py-2.5">Ajustar</span>
          </div>
        </div>
      </div>
    </section>
  );
}
