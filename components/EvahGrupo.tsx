import { whatsappDiagnostico } from "./contato";

const inclui = [
  "Estratégia do grupo montada com você: conteúdo do mês, campanhas e metas.",
  "Posts programados, sempre com prévia no seu WhatsApp antes de sair.",
  "Boas-vindas, dinâmica de pontos e conversa no grupo, chamando cada cliente pelo nome.",
  "Perfil de cada cliente (dor, interesse, momento) e lista de quem chamar no privado, com sua aprovação.",
  "Quem diz “quero” e dúvidas de saúde vão direto para a equipe.",
  "App com campanhas, vendas do grupo e “Esperando você”.",
];

const diagnostico = [
  "quantos membros, quantos interagem, entradas e saídas no mês;",
  "horários de pico e frequência dos posts;",
  "se o grupo só vende ou também nutre;",
  "quanto o grupo vende hoje e como a venda é feita;",
  "3 ações para os próximos 30 dias.",
];

export default function EvahGrupo() {
  return (
    <section id="evah-grupo" className="max-w-content mx-auto px-4 md:px-8 py-20 md:py-24">
      <div className="font-mono text-xs uppercase tracking-wide text-accent-strong text-center">Por onde começar</div>
      <h2 className="font-display font-bold text-[30px] md:text-[34px] text-text-primary text-center mt-2 mb-3">
        Evah Grupo: o grupo VIP volta a conversar e a vender
      </h2>
      <p className="text-center text-text-secondary max-w-[640px] mx-auto mb-12 leading-relaxed">
        Entra no grupo de WhatsApp que a clínica já tem. Não troca o atendimento, não exige CRM novo e
        não muda a rotina da equipe. O resultado aparece em semanas.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-6">
        <div className="bg-surface rounded-2xl border border-border-subtle shadow-sm p-7 md:p-8">
          <div className="font-display font-bold text-xl text-text-primary mb-5">O que a Evah faz no seu grupo</div>
          <ul className="flex flex-col gap-3.5">
            {inclui.map((i) => (
              <li key={i} className="flex gap-3 items-start text-[15px] text-text-secondary leading-relaxed">
                <span className="shrink-0 mt-1 w-2 h-2 rounded-full bg-accent" />
                {i}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl p-7 md:p-8 text-white flex flex-col gap-4" style={{ background: "var(--green-800)" }}>
          <span className="self-start rounded-full bg-white/15 text-xs font-semibold px-3 py-1">Sem custo · 40 minutos</span>
          <div className="font-display font-bold text-2xl leading-tight">Diagnóstico do Grupo</div>
          <p className="text-[var(--green-100)] text-[15px] leading-relaxed">A Evah analisa o grupo da sua clínica e você sai com um retrato claro:</p>
          <ul className="flex flex-col gap-2 text-[15px] text-[var(--green-100)]">
            {diagnostico.map((d) => (
              <li key={d} className="flex gap-2"><span className="text-[var(--green-300)]">✓</span>{d}</li>
            ))}
          </ul>
          <a href={whatsappDiagnostico} target="_blank" rel="noopener" className="mt-auto rounded-lg bg-white font-semibold px-6 py-3.5 text-center hover:opacity-90" style={{ color: "var(--green-800)" }}>
            Agendar meu diagnóstico
          </a>
        </div>
      </div>
    </section>
  );
}
