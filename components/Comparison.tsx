const rows = [
  { label: "Atende 24/7 com critério", crm: "Não faz", crmTone: "bad", chatbot: "Parcial", chatbotTone: "warn" },
  { label: "Qualifica e agenda sozinha", crm: "Depende da equipe", crmTone: "bad", chatbot: "Parcial", chatbotTone: "warn" },
  { label: "Centraliza WhatsApp, Instagram e Messenger num só lugar", crm: "Não faz", crmTone: "bad", chatbot: "Parcial", chatbotTone: "warn" },
  { label: "Um só histórico de conversa por paciente, em qualquer canal", crm: "Parcial", crmTone: "warn", chatbot: "Não faz", chatbotTone: "bad" },
  { label: "Gera indicadores de negócio", crm: "Completo", crmTone: "good", chatbot: "Parcial", chatbotTone: "warn" },
  { label: "Cobre as 4 camadas da operação comercial", crm: "Parcial", crmTone: "warn", chatbot: "Não faz", chatbotTone: "bad" },
];

const toneClass: Record<string, string> = {
  good: "bg-[var(--green-100)] text-[var(--green-700)]",
  bad: "bg-[oklch(95%_.04_25)] text-[oklch(45%_.18_25)]",
  warn: "bg-[oklch(96%_.05_80)] text-[oklch(45%_.12_80)]",
};

function Badge({ text, tone }: { text: string; tone: string }) {
  return <span className={`inline-block text-[13px] font-semibold px-2.5 py-1 rounded-full ${toneClass[tone]}`}>{text}</span>;
}

export default function Comparison() {
  return (
    <section className="max-w-[900px] mx-auto px-8 py-24">
      <h2 className="font-display font-bold text-[34px] text-text-primary text-center mb-8">
        Evah vs. alternativas comuns
      </h2>
      <div className="rounded-2xl overflow-hidden shadow-sm border border-border-subtle">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] bg-[var(--ink-950)]">
          <div className="p-4 px-5 font-mono text-xs uppercase tracking-wide text-[var(--ink-300)]">Recurso</div>
          <div className="p-4 px-5 font-mono text-xs uppercase tracking-wide bg-accent-strong text-white text-center">Evah</div>
          <div className="p-4 px-5 font-mono text-xs uppercase tracking-wide text-[var(--ink-300)] text-center">CRM</div>
          <div className="p-4 px-5 font-mono text-xs uppercase tracking-wide text-[var(--ink-300)] text-center">Chatbot</div>
        </div>
        {rows.map((r) => (
          <div key={r.label} className="grid grid-cols-[2fr_1fr_1fr_1fr] border-t border-border-subtle items-center bg-canvas">
            <div className="p-4.5 px-5 text-sm text-text-primary">{r.label}</div>
            <div className="p-4.5 px-5 bg-[var(--green-50)] text-center">
              <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--green-700)]">✓ Completo</span>
            </div>
            <div className="p-4.5 px-5 text-center"><Badge text={r.crm} tone={r.crmTone} /></div>
            <div className="p-4.5 px-5 text-center"><Badge text={r.chatbot} tone={r.chatbotTone} /></div>
          </div>
        ))}
      </div>
    </section>
  );
}
