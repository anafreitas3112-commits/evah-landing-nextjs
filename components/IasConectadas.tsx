const ias = [
  { n: "IA do Grupo", d: "Planeja, posta com a sua aprovação e conversa no grupo VIP." },
  { n: "IA de Atendimento", d: "Responde os leads na hora, qualifica e agenda." },
  { n: "IA de Anúncios", d: "Analisa as contas do Meta e do Google e mostra onde investir." },
  { n: "IA de Pós-venda", d: "Acompanha quem comprou, lembra os retornos e pede indicação." },
  { n: "IA de Revenda", d: "Traz de volta ex-clientes e cuida das renovações." },
  { n: "IA de Perfil", d: "Monta o perfil de cada cliente: dor, interesse e momento." },
];

const fluxos = [
  "Perfil: Renata quer flacidez → a Revenda faz a oferta",
  "Lead do anúncio agendou → a conversão volta para o Meta",
  "Comprou → o Pós-venda acompanha e pede indicação",
];

export default function IasConectadas() {
  return (
    <section id="ias" className="bg-[var(--ink-950)] text-[var(--ink-25)] scroll-mt-24">
      <div className="max-w-content mx-auto px-4 md:px-8 py-20 md:py-24 flex flex-col items-center">
        <div className="font-mono text-xs uppercase tracking-wide text-[var(--green-300)]">Inteligência conectada</div>
        <h2 className="font-display font-bold text-[30px] md:text-[38px] text-center mt-2 leading-tight">As IAs conversam entre si</h2>
        <p className="text-center text-[var(--ink-300)] max-w-[620px] mt-3 leading-relaxed">
          Em volta da consultora de IA, cada IA cuida de uma parte da venda e passa o que sabe para as outras.
          O que acontece num canal chega no outro, na hora.
        </p>
        <div className="mt-10 w-32 h-32 rounded-full flex flex-col items-center justify-center font-display font-bold text-xl text-white shadow-[0_0_60px_rgba(43,212,154,.45)]" style={{ background: "radial-gradient(circle,#2bd49a,#0f6b4f)" }}>
          <span className="text-[11px] tracking-wide font-semibold">CONSULTORA IA</span>Evah
        </div>
        <div className="w-px h-8 bg-[var(--green-300)] opacity-50" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {ias.map((x) => (
            <div key={x.n} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="font-display font-bold text-lg text-white">{x.n}</div>
              <p className="text-sm text-[var(--ink-300)] mt-1.5 leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 mt-10 w-full max-w-[560px]">
          {fluxos.map((f) => (
            <div key={f} className="rounded-xl bg-black/30 px-4 py-2.5 text-sm text-center text-[var(--ink-100,#e9eeec)]">{f}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
