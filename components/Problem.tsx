const dores = [
  { t: "O grupo VIP morreu", d: "Só recebe promoção, ninguém responde e as clientes vão saindo aos poucos." },
  { t: "Meta sem plano", d: "Todo mês tem meta, mas falta saber de onde vem a venda e o que fazer esta semana." },
  { t: "Dados que ninguém olha", d: "As informações estão no WhatsApp, na planilha e no sistema, e não viram decisão." },
];

export default function Problem() {
  return (
    <section className="bg-[var(--ink-950)] text-[var(--ink-25)]">
      <div className="max-w-content mx-auto px-4 md:px-8 py-20 md:py-24">
        <div className="font-mono text-xs uppercase tracking-wide text-[var(--green-300)] text-center">
          O que quase ninguém fala
        </div>
        <h2 className="font-display font-bold text-[30px] md:text-[38px] text-center mt-2 max-w-[760px] mx-auto leading-tight">
          IA que só responde lead resolve metade do problema.
        </h2>
        <p className="text-center text-[var(--ink-300)] max-w-[640px] mx-auto mt-4 leading-relaxed">
          Responder rápido ajuda. Mas o que trava o crescimento da clínica costuma estar na gestão:
          o que vender, para quem, quando, e se o que foi feito deu resultado.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
          {dores.map((x) => (
            <div key={x.t} className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <div className="font-display font-bold text-lg">{x.t}</div>
              <p className="text-sm text-[var(--ink-300)] mt-2 leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
