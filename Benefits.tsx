const benefits = [
  { pill: "18s", n: "01", title: "Resposta imediata", lead: "Nenhum lead espera.", rest: " A Evah responde em segundos, ", strong: "a qualquer hora", end: "." },
  { pill: "+35%", n: "02", title: "Mais agendamentos", lead: "Agenda sozinha.", rest: " Qualifica e conduz, ", strong: "sem depender de plantão", end: "." },
  { pill: "Dashboard", n: "03", title: "Decisões com dados", lead: "Tudo no Dashboard.", rest: " Tempo de resposta, conversão e ", strong: "faturamento recuperado", end: "." },
  { pill: "24h/7d", n: "04", title: "Nunca fecha", lead: "Madrugada e fim de semana.", rest: " Sua equipe descansa. ", strong: "Sua agenda, não", end: "." },
  { pill: "4 canais", n: "05", title: "Tudo em um só lugar", lead: "Uma caixa de entrada só.", rest: " WhatsApp Business, API, Instagram Direct e ", strong: "Messenger no mesmo lugar", end: "." },
  { pill: "Ranking", n: "06", title: "Indicadores que viram decisão", lead: "Não é só um painel.", rest: " Origem do lead, conversão por canal e alertas: ", strong: "o que fazer a seguir", end: "." },
];

export default function Benefits() {
  return (
    <section id="diferenciais" className="max-w-content mx-auto px-8 py-16">
      <div className="font-mono text-xs uppercase tracking-wide text-accent-strong text-center">
        Não é CRM. Não é chatbot. Não é automação.
      </div>
      <h2 className="font-display font-bold text-[34px] text-text-primary text-center mt-2 mb-10">
        A Evah é a operação comercial da sua clínica
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {benefits.map((b) => (
          <div key={b.n} className="bg-surface border border-border-subtle rounded-2xl shadow-sm p-7 flex flex-col gap-3.5">
            <span className="self-start bg-accent-soft text-accent-strong font-mono text-[13px] px-3.5 py-1.5 rounded-full">{b.pill}</span>
            <div className="font-mono text-[15px] text-accent-strong font-bold">{b.n}</div>
            <div className="font-display font-bold text-lg text-text-primary">{b.title}</div>
            <p className="text-sm text-text-secondary leading-relaxed">
              <b>{b.lead}</b>{b.rest}<b>{b.strong}</b>{b.end}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
