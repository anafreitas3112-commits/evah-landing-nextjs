const etapas = [
  {
    n: "01",
    t: "Analisa",
    d: "Lê o grupo, as conversas, a base de clientes e as vendas, e mostra onde está o dinheiro parado.",
  },
  {
    n: "02",
    t: "Compara com o mercado",
    d: "Verifica as melhores práticas (frequência de posts, nutrição antes da venda, recuperação de ex-clientes) e aponta o que falta.",
  },
  {
    n: "03",
    t: "Monta o plano com você",
    d: "Meta possível, campanhas, quem faz o quê e quando. Você aprova antes de qualquer coisa sair.",
  },
  {
    n: "04",
    t: "Executa e acompanha",
    d: "Posta, conversa, separa quem chamar, cria as tarefas da equipe e mede vendas, ofertas e retornos.",
    destaque: true,
  },
];

export default function Metodo() {
  return (
    <section id="metodo" className="max-w-content mx-auto px-4 md:px-8 py-20 md:py-24">
      <div className="font-mono text-xs uppercase tracking-wide text-accent-strong text-center">
        Como a IA trabalha na sua gestão
      </div>
      <h2 className="font-display font-bold text-[30px] md:text-[34px] text-text-primary text-center mt-2 mb-3">
        Do diagnóstico à execução, com números
      </h2>
      <p className="text-center text-text-secondary max-w-[600px] mx-auto mb-12 leading-relaxed">
        É o que uma boa consultora faz, só que todos os dias, olhando tudo ao mesmo tempo.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {etapas.map((e) => (
          <div
            key={e.n}
            className={`rounded-2xl p-7 flex flex-col gap-3 ${
              e.destaque
                ? "bg-gradient-to-br from-[var(--green-600)] to-[var(--green-800)] text-white shadow-md"
                : "bg-surface border border-border-subtle shadow-sm"
            }`}
          >
            <div className={`font-mono text-[15px] font-bold ${e.destaque ? "text-[var(--green-200)]" : "text-accent-strong"}`}>{e.n}</div>
            <div className={`font-display font-bold text-lg ${e.destaque ? "text-white" : "text-text-primary"}`}>{e.t}</div>
            <p className={`text-sm leading-relaxed ${e.destaque ? "text-[var(--green-100)]" : "text-text-secondary"}`}>{e.d}</p>
          </div>
        ))}
      </div>
      <p className="text-center font-display font-bold text-lg md:text-xl text-text-primary mt-12 max-w-[720px] mx-auto leading-snug">
        Você não compra um software. Contrata uma consultoria que usa IA para analisar, planejar,
        executar e medir.
      </p>
    </section>
  );
}
