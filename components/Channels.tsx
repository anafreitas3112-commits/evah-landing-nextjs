const channels = ["WhatsApp Business", "API WhatsApp", "Instagram Direct", "Messenger"];

export default function Channels() {
  return (
    <section className="max-w-content mx-auto px-8 py-24">
      <div className="font-mono text-xs uppercase tracking-wide text-accent-strong text-center">
        Um só lugar
      </div>
      <h2 className="font-display font-bold text-[34px] text-text-primary text-center mt-2 mb-10">
        Todos os canais, uma única operação
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-7">
        {channels.map((c) => (
          <div
            key={c}
            className="bg-surface border border-border-subtle rounded-2xl shadow-sm p-6 text-center"
          >
            <div className="font-display font-bold text-base text-text-primary">
              {c}
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-base text-text-secondary max-w-xl mx-auto leading-relaxed">
        Cada paciente, em qualquer canal, cai na mesma conversa e no mesmo
        histórico. Sem planilha, sem ferramenta separada, sem contexto perdido
        entre atendimentos.
      </p>
    </section>
  );
}
