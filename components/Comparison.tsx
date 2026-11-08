const rows = [
  { label: "Analisa seus dados e aponta onde está o dinheiro parado", crm: "Não faz", crmTone: "bad", chatbot: "Não faz", chatbotTone: "bad" },
  { label: "Compara com as melhores práticas e monta o plano com você", crm: "Não faz", crmTone: "bad", chatbot: "Não faz", chatbotTone: "bad" },
  { label: "Executa: posta, conversa, cria tarefas para a equipe", crm: "Depende da equipe", crmTone: "warn", chatbot: "Parcial", chatbotTone: "warn" },
  { label: "Se ajusta ao jeito da sua clínica", crm: "Engessado", crmTone: "bad", chatbot: "Parcial", chatbotTone: "warn" },
  { label: "Indicadores que abrem a lista de quem agir", crm: "Parcial", crmTone: "warn", chatbot: "Não faz", chatbotTone: "bad" },
  { label: "Nada sai para a cliente sem sua aprovação, quando você quiser", crm: "Não se aplica", crmTone: "warn", chatbot: "Não faz", chatbotTone: "bad" },
];

const toneClass: Record<string, string> = {
  good: "bg-[var(--green-100)] text-[var(--green-700)]",
  bad: "bg-[oklch(95%_.04_25)] text-[oklch(45%_.18_25)]",
  warn: "bg-[oklch(96%_.05_80)] text-[oklch(45%_.12_80)]",
};

function Badge({ text, tone }: { text: string; tone: string }) {
  return <span className={`inline-block text-[12px] md:text-[13px] font-semibold px-2 md:px-2.5 py-1 rounded-full ${toneClass[tone]}`}>{text}</span>;
}

export default function Comparison() {
  return (
    <section className="max-w-[900px] mx-auto px-4 md:px-8 py-20 md:py-24">
      <h2 className="font-display font-bold text-[30px] md:text-[34px] text-text-primary text-center mb-3">
        Não é CRM. Não é chatbot.
      </h2>
      <p className="text-center text-text-secondary mb-8">É uma consultora com IA que também opera.</p>
      <div className="rounded-2xl overflow-hidden shadow-sm border border-border-subtle">
        <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr] md:grid-cols-[2fr_1fr_1fr_1fr] bg-[var(--ink-950)]">
          <div className="p-3 md:p-4 md:px-5 font-mono text-[11px] md:text-xs uppercase tracking-wide text-[var(--ink-300)]">O que faz</div>
          <div className="p-3 md:p-4 md:px-5 font-mono text-[11px] md:text-xs uppercase tracking-wide bg-accent-strong text-white text-center">Evah</div>
          <div className="p-3 md:p-4 md:px-5 font-mono text-[11px] md:text-xs uppercase tracking-wide text-[var(--ink-300)] text-center">CRM</div>
          <div className="p-3 md:p-4 md:px-5 font-mono text-[11px] md:text-xs uppercase tracking-wide text-[var(--ink-300)] text-center">Chatbot</div>
        </div>
        {rows.map((r) => (
          <div key={r.label} className="grid grid-cols-[1.6fr_1fr_1fr_1fr] md:grid-cols-[2fr_1fr_1fr_1fr] border-t border-border-subtle items-center bg-canvas">
            <div className="p-3 md:p-4 md:px-5 text-[13px] md:text-sm text-text-primary">{r.label}</div>
            <div className="p-3 md:p-4 md:px-5 bg-[oklch(97%_0.02_158)] text-center self-stretch flex items-center justify-center">
              <span className="text-[13px] font-semibold text-[var(--green-700)]">✓ Sim</span>
            </div>
            <div className="p-2 md:p-4 md:px-5 text-center"><Badge text={r.crm} tone={r.crmTone} /></div>
            <div className="p-2 md:p-4 md:px-5 text-center"><Badge text={r.chatbot} tone={r.chatbotTone} /></div>
          </div>
        ))}
      </div>
    </section>
  );
}
