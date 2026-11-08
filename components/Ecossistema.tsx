const degraus = [
  { n: "1", p: "Evah Grupo", dor: "Grupo parado, venda só por promoção.", porque: "Entrada leve, resultado visível e o perfil de cada cliente montado." },
  { n: "2", p: "Evah Atendimento", dor: "Lead e privado sem resposta rápida, equipe sobrecarregada.", porque: "A IA responde na hora e passa para a consultora quem está pronta para fechar." },
  { n: "3", p: "Recuperação e Revenda", dor: "Ex-clientes sumidas, renovação esquecida.", porque: "Trilhas de mensagens para trazer de volta quem já gosta da clínica." },
  { n: "4", p: "Consultoria Kotobuki", dor: "Dono sem visão do todo, meta sem plano.", porque: "Com dados de grupo, atendimento e base, a estratégia fica concreta." },
];

export default function Ecossistema() {
  return (
    <section id="ecossistema" className="bg-surface border-y border-border-subtle">
      <div className="max-w-content mx-auto px-4 md:px-8 py-20 md:py-24">
        <div className="font-mono text-xs uppercase tracking-wide text-accent-strong text-center">O ecossistema Evah</div>
        <h2 className="font-display font-bold text-[30px] md:text-[34px] text-text-primary text-center mt-2 mb-3">
          Cada passo resolve uma dor e prepara o próximo
        </h2>
        <p className="text-center text-text-secondary max-w-[600px] mx-auto mb-12 leading-relaxed">
          Você sobe quando o passo anterior já mostrou resultado. Tudo conversa entre si: o que acontece
          no grupo aparece no atendimento, e os números chegam juntos para a gestão.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          {degraus.map((d, i) => (
            <div
              key={d.n}
              className="rounded-2xl border border-border-subtle bg-canvas p-6 flex flex-col gap-3"
              style={{ minHeight: `${240 + i * 36}px` }}
            >
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-accent-strong text-white font-bold text-sm flex items-center justify-center">{d.n}</span>
                <span className="font-display font-bold text-lg text-text-primary">{d.p}</span>
              </div>
              <p className="text-sm text-text-primary leading-relaxed"><b>Dor:</b> {d.dor}</p>
              <p className="text-sm text-text-secondary leading-relaxed mt-auto">{d.porque}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
