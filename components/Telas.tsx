// Telas ilustrativas dos apps da Evah, com dados fictícios.

function Celular({ titulo, cor = "#0f6b4f", children }: { titulo: string; cor?: string; children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[300px] rounded-[34px] bg-[var(--ink-950)] p-2.5 shadow-xl">
      <div className="rounded-[26px] overflow-hidden bg-[#f3f2ee] h-[540px] flex flex-col">
        <div className="h-12 shrink-0 flex items-center px-4 text-white text-sm font-semibold" style={{ background: cor }}>{titulo}</div>
        <div className="flex-1 overflow-hidden p-3 flex flex-col gap-2 text-[12.5px] leading-snug text-[var(--ink-950)]">{children}</div>
      </div>
    </div>
  );
}

function Balao({ de, children }: { de: "evah" | "dona"; children: React.ReactNode }) {
  return (
    <div className={`max-w-[88%] rounded-xl px-3 py-2 shadow-sm ${de === "dona" ? "self-end bg-[#d9fdd3]" : "self-start bg-white"}`}>{children}</div>
  );
}

export function TelaPrevia() {
  return (
    <Celular titulo="Evah · Prévias" cor="#075e54">
      <Balao de="evah">Prévia do post de <b>quinta, 18h</b>, no grupo VIP:</Balao>
      <Balao de="evah">
        <div className="rounded-lg bg-[var(--green-100)] h-20 mb-2 flex items-center justify-center text-[11px] text-[var(--green-700)]">[arte da campanha]</div>
        <b>✨ Semana do Contorno ✨</b><br />
        Quem aí quer chegar no fim de ano se sentindo linda? 💚<br />
        <b>Pacote Contorno: 3x de R$ 199</b><br />
        Só até sábado. Comenta <b>EU QUERO</b> que te chamo no privado 😉
      </Balao>
      <Balao de="evah">Responda <b>pode mandar</b> para publicar ou me diga o que mudar.</Balao>
      <Balao de="dona">Pode mandar ✅</Balao>
      <Balao de="evah">Agendado para quinta, 18h 💚</Balao>
    </Celular>
  );
}

const pend = [
  { tag: "Quer fechar", cor: "#0f6b4f", nome: "Carla M.", txt: "“Quero o pacote de 3 sessões, como pago?”" },
  { tag: "Dúvida de saúde", cor: "#c62828", nome: "Juliana R.", txt: "“Posso fazer estando amamentando?”" },
  { tag: "Aprovar", cor: "#b26a00", nome: "4 mensagens do privado", txt: "Para quem reagiu à campanha de ontem." },
  { tag: "Negociando", cor: "#2f6fd6", nome: "Patrícia S.", txt: "Recebeu oferta e disse que vai pensar." },
];

export function TelaEsperando() {
  return (
    <Celular titulo="Esperando você">
      <div className="text-[11px] text-[var(--ink-500)] px-1">Por prioridade</div>
      {pend.slice(0, 3).map((p) => (
        <div key={p.nome} className="bg-white rounded-xl p-3 border border-[var(--ink-100)] flex flex-col gap-1">
          <span className="self-start text-[10.5px] font-bold text-white rounded px-1.5 py-0.5" style={{ background: p.cor }}>{p.tag}</span>
          <b className="text-[13px]">{p.nome}</b>
          <span className="text-[var(--ink-600)]">{p.txt}</span>
          <span className="text-[11.5px] font-semibold text-[#0f6b4f]">Abrir conversa →</span>
        </div>
      ))}
    </Celular>
  );
}

const kpis = [
  { v: "214", l: "Membros" },
  { v: "38%", l: "Interagiram no mês" },
  { v: "18", l: "Pediram “quero”" },
  { v: "7", l: "Vendas do grupo" },
  { v: "5", l: "Em negociação" },
  { v: "12", l: "Entraram no mês" },
];

export function TelaIndicadores() {
  return (
    <Celular titulo="Indicadores do grupo">
      <div className="text-[11px] text-[var(--ink-500)] px-1">Campanha de novembro</div>
      <div className="grid grid-cols-2 gap-2">
        {kpis.map((k) => (
          <div key={k.l} className="bg-white rounded-xl p-3 border border-[var(--ink-100)]">
            <div className="font-mono text-xl font-bold text-[var(--ink-950)]">{k.v}</div>
            <div className="text-[11.5px] text-[var(--ink-600)]">{k.l}</div>
            <div className="text-[10.5px] text-[#0f6b4f] mt-1">ver lista →</div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl p-3 border border-[var(--ink-100)]">
        <b className="text-[12.5px]">Ranking de participação</b>
        <div className="mt-1.5 flex flex-col gap-1 text-[var(--ink-600)]">
          <span>1. Renata · 140 pontos</span><span>2. Sílvia · 115 pontos</span><span>3. Cláudia · 90 pontos</span>
        </div>
      </div>
    </Celular>
  );
}

export function TelaAtendimento() {
  return (
    <Celular titulo="Lead · anúncio Instagram">
      <div className="text-center text-[10.5px] text-[var(--ink-500)]">22:14</div>
      <Balao de="dona">Oi, vi o anúncio da criolipólise. Quanto custa?</Balao>
      <Balao de="evah">Oi, Mariana! Que bom que você chamou 💚 Antes do valor, me conta: qual região mais te incomoda hoje?</Balao>
      <Balao de="dona">Barriga, depois da segunda gestação</Balao>
      <Balao de="evah">Entendo, é uma das queixas que mais atendemos. Você tem algum evento em vista, ou é para você se sentir bem mesmo?</Balao>
      <Balao de="dona">Casamento da minha irmã em fevereiro!</Balao>
      <Balao de="evah">Dá tempo de ver resultado 😊 Consigo um horário amanhã às 10h ou às 15h. Qual fica melhor?</Balao>
      <div className="self-center mt-1 text-[10.5px] font-semibold text-white bg-[#0f6b4f] rounded px-2 py-0.5">Agendado · consultora avisada</div>
    </Celular>
  );
}

const revenda = [
  { nome: "Fernanda L.", info: "Ex-cliente · última sessão há 8 meses", acao: "Ligar" },
  { nome: "Beatriz A.", info: "Termina o pacote esta semana", acao: "Oferecer renovação" },
  { nome: "Luciana P.", info: "Interesse em flacidez (do grupo)", acao: "Mensagem" },
];

export function TelaRevenda() {
  return (
    <Celular titulo="Minha lista de hoje">
      <div className="bg-white rounded-xl p-3 border border-[var(--ink-100)] text-center">
        <b className="text-[13px]">Pedir mais 5 para reativar</b>
        <div className="text-[11px] text-[var(--ink-500)]">quando você tiver tempo</div>
      </div>
      {revenda.map((r) => (
        <div key={r.nome} className="bg-white rounded-xl p-3 border border-[var(--ink-100)] flex flex-col gap-1">
          <b className="text-[13px]">{r.nome}</b>
          <span className="text-[var(--ink-600)]">{r.info}</span>
          <span className="self-start text-[11px] font-semibold text-white bg-[#0f6b4f] rounded px-2 py-0.5">{r.acao}</span>
        </div>
      ))}
    </Celular>
  );
}

const unidades = [
  { u: "Unidade Centro", v: 92, c: "31%" },
  { u: "Unidade Norte", v: 78, c: "27%" },
  { u: "Unidade Sul", v: 61, c: "22%" },
  { u: "Unidade Leste", v: 44, c: "15%" },
];

export function TelaRede() {
  return (
    <Celular titulo="Evah Rede · unidades" cor="#1c2321">
      <div className="text-[11px] text-[var(--ink-500)] px-1">Lead → agendamento, últimos 30 dias</div>
      {unidades.map((x) => (
        <div key={x.u} className="bg-white rounded-xl p-3 border border-[var(--ink-100)]">
          <div className="flex justify-between"><b className="text-[13px]">{x.u}</b><span className="font-mono font-bold">{x.c}</span></div>
          <div className="h-1.5 rounded bg-[var(--ink-100)] mt-2"><div className="h-1.5 rounded bg-[#0f6b4f]" style={{ width: x.v + "%" }} /></div>
        </div>
      ))}
      <div className="bg-white rounded-xl p-3 border border-[var(--ink-100)]">
        <b className="text-[12.5px]">Migração da Unidade Leste</b>
        <div className="text-[var(--ink-600)] mt-1">6 de 8 passos concluídos</div>
      </div>
    </Celular>
  );
}

export function TelaPedido() {
  return (
    <Celular titulo="Ana · Evah" cor="#075e54">
      <div className="text-center text-[10.5px] text-[var(--ink-500)]">segunda, 9:12</div>
      <Balao de="dona">Ana, queria ver numa tela só as clientes que disseram que vão pensar, com o valor que ofereci.</Balao>
      <Balao de="evah">Faz sentido! Vou colocar no app, com a lista e o valor de cada oferta. Fica pronto até quarta 💚</Balao>
      <div className="text-center text-[10.5px] text-[var(--ink-500)] mt-1">quarta, 16:40</div>
      <Balao de="evah">Pronto! Já está no app, em “Negociando”.</Balao>
      <div className="bg-white rounded-xl p-3 border border-[var(--ink-100)] flex flex-col gap-1.5 mt-1">
        <div className="flex items-center justify-between"><b className="text-[13px]">Negociando</b><span className="text-[10.5px] font-bold text-white bg-[#0f6b4f] rounded px-1.5 py-0.5">Novo</span></div>
        <div className="flex justify-between"><span>Patrícia S.</span><b>3x R$ 199</b></div>
        <div className="flex justify-between"><span>Camila R.</span><b>R$ 890</b></div>
        <div className="flex justify-between"><span>Débora M.</span><b>2x R$ 349</b></div>
      </div>
      <div className="self-center text-[11px] font-semibold text-[#0f6b4f]">Pedido na segunda, no ar na quarta</div>
    </Celular>
  );
}
