const ajustes = [
  {
    pedido: "“Não quero tarefa de reativação caindo sozinha.”",
    feito: "Agora a consultora pede uma lista de ex-clientes quando tem tempo para ligar.",
  },
  {
    pedido: "“Tem tarefa demais, não acho as minhas.”",
    feito: "Filtro de tarefas por tipo, para cada uma enxergar o que importa.",
  },
  {
    pedido: "“Quero ver o que já foi oferecido para essa cliente.”",
    feito: "Ofertas feitas no grupo aparecem na ficha do atendimento, e vice-versa.",
  },
  {
    pedido: "“O que está esperando por mim hoje?”",
    feito: "Uma tela única com tudo que depende da dona, por prioridade, que abre direto na conversa.",
  },
];

export default function SobMedida() {
  return (
    <section id="sob-medida" className="bg-[var(--green-50,oklch(97%_0.02_158))] py-20 md:py-24 px-4 md:px-8">
      <div className="max-w-content mx-auto">
        <div className="grid md:grid-cols-[1fr_1.3fr] gap-10 md:gap-14 items-start">
          <div className="flex flex-col gap-4 md:sticky md:top-28">
            <div className="font-mono text-xs uppercase tracking-wide text-accent-strong">Construção sob medida</div>
            <h2 className="font-display font-bold text-[30px] md:text-[34px] text-text-primary leading-tight">
              Não é sistema engessado: construímos no jeito da sua clínica
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Sistema pronto obriga a equipe a se adaptar. Aqui é o contrário: além da consultoria, a Kotobuki desenvolve. Telas, indicadores, rotinas e integrações são construídos e ajustados ao jeito que a sua clínica vende. Pediu, ajustamos em dias.
            </p>
            <p className="text-sm text-text-tertiary">Exemplos reais de ajustes feitos a pedido de uma dona de clínica:</p>
          </div>
          <div className="flex flex-col gap-4">
            {ajustes.map((a) => (
              <div key={a.pedido} className="bg-surface rounded-2xl border border-border-subtle shadow-sm p-6 flex flex-col gap-2">
                <div className="font-display font-bold text-[17px] text-text-primary">{a.pedido}</div>
                <div className="flex gap-2 items-start text-sm text-text-secondary leading-relaxed">
                  <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-accent-soft text-accent-strong text-xs font-bold flex items-center justify-center">✓</span>
                  {a.feito}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
