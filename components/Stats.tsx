const stats = [
  { value: "24/7", label: "Atendimento contínuo" },
  { value: "18s", label: "Tempo médio de 1ª resposta" },
  { value: "35%", label: "Taxa média de conversão lead → agendamento" },
];

export default function Stats() {
  return (
    <section className="max-w-[960px] mx-auto px-8 pb-6">
      <div className="flex gap-6 flex-col sm:flex-row">
        {stats.map((s) => (
          <div key={s.label} className="flex-1 text-center">
            <div className="font-mono text-4xl text-text-primary">{s.value}</div>
            <div className="text-sm text-text-secondary mt-1">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="text-center font-mono text-xs text-text-tertiary mt-4">
        [placeholder: substituir por média real das clínicas ativas na Evah]
      </div>
    </section>
  );
}
