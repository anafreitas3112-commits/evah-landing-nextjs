const benefits = [
  {
    title: "Resposta imediata",
    description: "Nenhum lead espera. A Evah responde em segundos, a qualquer hora.",
  },
  {
    title: "Mais agendamentos",
    description:
      "Qualifica, conduz e agenda automaticamente, sem depender de plantão.",
  },
  {
    title: "Decisões com dados",
    description:
      "O Dashboard mostra tempo de resposta, conversão e faturamento recuperado.",
  },
  {
    title: "Nunca fecha",
    description: "Fins de semana e madrugadas — a Evah continua atendendo.",
  },
  {
    title: "Tudo em um só lugar",
    description:
      "WhatsApp Business, API WhatsApp, Instagram Direct e Messenger numa única caixa de entrada.",
  },
  {
    title: "Indicadores que viram decisão",
    description:
      "Ranking de origem de lead, conversão por canal e alertas — não é só um painel, é o que fazer a seguir.",
  },
];

export default function Benefits() {
  return (
    <section id="diferenciais" className="max-w-[1000px] mx-auto px-8 py-16">
      <div className="font-mono text-xs uppercase tracking-wide text-accent-strong text-center">
        Não é CRM. Não é chatbot. Não é automação.
      </div>
      <h2 className="font-display font-bold text-[34px] text-text-primary text-center mt-2 mb-9">
        A Evah é a operação comercial da sua clínica
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="bg-surface border border-border-subtle rounded-2xl shadow-sm p-6"
          >
            <div className="font-display font-bold text-lg text-text-primary mb-1.5">
              {b.title}
            </div>
            <div className="text-sm text-text-secondary leading-relaxed">
              {b.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
