const columns = ["Evah", "CRM", "Chatbot", "Automação"];
const rows = [
  { label: "Atende 24/7 com critério", values: [true, false, false, false] },
  { label: "Qualifica e agenda sozinha", values: [true, false, false, false] },
  { label: "Gera indicador de negócio", values: [true, false, false, false] },
  {
    label: "Cobre as 4 camadas da operação comercial",
    values: [true, false, false, false],
  },
  {
    label: "Centraliza WhatsApp, Instagram e Messenger num só lugar",
    values: [true, false, false, false],
  },
  {
    label: "Um só histórico de conversa por paciente, em qualquer canal",
    values: [true, false, false, false],
  },
];

function Mark({ value }: { value: boolean }) {
  return (
    <span className={value ? "text-accent-strong font-bold" : "text-text-tertiary"}>
      {value ? "✓" : "—"}
    </span>
  );
}

export default function Comparison() {
  return (
    <section className="max-w-[820px] mx-auto px-8 py-24">
      <h2 className="font-display font-bold text-[34px] text-text-primary text-center mb-8">
        Evah vs. alternativas comuns
      </h2>
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr>
            <th className="text-left text-xs uppercase tracking-wide text-text-tertiary border-b border-border-default py-2 px-2.5"></th>
            {columns.map((c, i) => (
              <th
                key={c}
                className={`text-xs uppercase tracking-wide border-b border-border-default py-2 px-2.5 ${
                  i === 0
                    ? "text-accent-strong font-bold"
                    : "text-text-tertiary"
                }`}
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.label}>
              <td className="py-2.5 px-2.5 border-b border-border-subtle text-text-secondary">
                {r.label}
              </td>
              {r.values.map((v, i) => (
                <td
                  key={i}
                  className={`py-2.5 px-2.5 border-b border-border-subtle text-center ${
                    i === 0 ? "bg-accent-soft" : ""
                  }`}
                >
                  <Mark value={v} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
