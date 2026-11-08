import Link from "next/link";
import { whatsappDiagnostico, whatsappExibicao } from "./contato";

export const produtos = [
  {
    slug: "/evah-grupo",
    nome: "Evah Grupo",
    tag: "Porta de entrada",
    frase: "O grupo VIP volta a conversar e a vender.",
    desc: "Planeja o mês, posta com sua aprovação, conversa com as clientes e mostra quem chamar no privado.",
  },
  {
    slug: "/evah-atendimento",
    nome: "Evah Atendimento",
    tag: "Leads no WhatsApp",
    frase: "Nenhum lead esperando resposta.",
    desc: "Atende na hora, qualifica e agenda. A equipe trabalha num app com chat, funil, agenda e indicadores.",
  },
  {
    slug: "/evah-revenda",
    nome: "Evah Revenda",
    tag: "Base de clientes",
    frase: "Quem já gosta da clínica volta a comprar.",
    desc: "Recupera ex-clientes, lembra renovações e organiza a venda para quem está em tratamento.",
  },
  {
    slug: "/evah-consultora",
    nome: "Evah Consultora",
    tag: "IA na gestão",
    frase: "Uma IA como consultora da sua clínica.",
    desc: "Analisa os números, compara com o mercado, monta o plano com você e acompanha a execução.",
  },
];

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className={`font-mono text-xs uppercase tracking-wide ${light ? "text-[var(--green-300)]" : "text-accent-strong"}`}>{children}</div>
  );
}

export function Titulo({ eyebrow, titulo, sub, light = false }: { eyebrow?: string; titulo: React.ReactNode; sub?: React.ReactNode; light?: boolean }) {
  return (
    <div className="text-center mb-12">
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2 className={`font-display font-bold text-[30px] md:text-[36px] mt-2 leading-tight max-w-[780px] mx-auto ${light ? "text-white" : "text-text-primary"}`}>{titulo}</h2>
      {sub && <p className={`max-w-[640px] mx-auto mt-4 leading-relaxed ${light ? "text-[var(--ink-300)]" : "text-text-secondary"}`}>{sub}</p>}
    </div>
  );
}

export function BotaoWhats({ children, claro = false }: { children: React.ReactNode; claro?: boolean }) {
  return (
    <a
      href={whatsappDiagnostico}
      target="_blank"
      rel="noopener"
      className={`inline-block rounded-lg font-semibold px-6 py-3.5 text-center ${claro ? "bg-white hover:opacity-90" : "bg-accent-strong text-white hover:bg-green-800"}`}
      style={claro ? { color: "var(--green-800)" } : undefined}
    >
      {children}
    </a>
  );
}

export function HeroProduto({ nome, titulo, sub, cta = "Quero conversar sobre isso", lateral }: { nome: string; titulo: React.ReactNode; sub: React.ReactNode; cta?: string; lateral: React.ReactNode }) {
  return (
    <section className="max-w-[1200px] mx-auto px-4 md:px-8 pt-10 md:pt-16 pb-16">
      <Link href="/#solucoes" className="text-sm text-text-tertiary">← Todas as soluções</Link>
      <div className="grid md:grid-cols-[1.1fr_1fr] gap-10 md:gap-14 items-center mt-6">
        <div className="flex flex-col gap-5">
          <span className="inline-flex self-start items-center rounded-full bg-accent-soft text-accent-strong text-xs font-semibold px-4 py-1.5">{nome}</span>
          <h1 className="font-display font-bold text-[36px] md:text-[48px] leading-[1.08] text-text-primary">{titulo}</h1>
          <p className="text-[17px] text-text-secondary max-w-[520px] leading-relaxed">{sub}</p>
          <div><BotaoWhats>{cta}</BotaoWhats></div>
        </div>
        <div>{lateral}</div>
      </div>
    </section>
  );
}

export function CartaoLista({ titulo, itens, rotulo }: { titulo: string; itens: string[]; rotulo?: string }) {
  return (
    <div className="bg-surface rounded-3xl shadow-lg border border-border-subtle p-6 md:p-7 flex flex-col gap-3">
      <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
        <span className="font-semibold text-text-primary">{titulo}</span>
        {rotulo && <span className="font-mono text-[11px] text-text-tertiary">{rotulo}</span>}
      </div>
      {itens.map((i, k) => (
        <div key={i} className="flex gap-3 items-start rounded-xl bg-surface-sunken p-3 text-sm text-text-secondary leading-snug">
          <span className="shrink-0 w-6 h-6 rounded-full bg-accent-strong text-white text-xs font-bold flex items-center justify-center">{k + 1}</span>
          <span>{i}</span>
        </div>
      ))}
    </div>
  );
}

export function GradeRecursos({ itens }: { itens: { t: string; d: string }[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {itens.map((x) => (
        <div key={x.t} className="bg-surface border border-border-subtle rounded-2xl shadow-sm p-7 flex flex-col gap-2">
          <div className="font-display font-bold text-lg text-text-primary">{x.t}</div>
          <p className="text-sm text-text-secondary leading-relaxed">{x.d}</p>
        </div>
      ))}
    </div>
  );
}

export function OutrasSolucoes({ atual }: { atual: string }) {
  return (
    <section className="bg-surface border-t border-border-subtle">
      <div className="max-w-content mx-auto px-4 md:px-8 py-16">
        <Titulo eyebrow="Ecossistema Evah" titulo="As soluções conversam entre si" sub="O que acontece no grupo aparece no atendimento, a revenda usa o perfil de cada cliente e a consultora enxerga tudo junto." />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {produtos.filter((p) => p.slug !== atual).map((p) => (
            <Link key={p.slug} href={p.slug} className="rounded-2xl border border-border-subtle bg-canvas p-6 flex flex-col gap-2 hover:border-[var(--green-300)]">
              <span className="font-display font-bold text-lg text-text-primary">{p.nome}</span>
              <span className="text-sm text-text-secondary">{p.frase}</span>
              <span className="text-sm font-semibold mt-1">Conhecer →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaixaCta({ titulo, texto, botao = "Falar com a Ana no WhatsApp" }: { titulo: string; texto: string; botao?: string }) {
  return (
    <section className="py-20 px-4 md:px-8 flex justify-center" style={{ background: "var(--green-700)" }}>
      <div className="max-w-[720px] w-full flex flex-col items-center text-center gap-4">
        <h2 className="font-display font-bold text-[28px] md:text-[34px] text-white leading-tight">{titulo}</h2>
        <p className="text-[var(--green-100)] max-w-[540px] leading-relaxed">{texto}</p>
        <div className="mt-2"><BotaoWhats claro>{botao}</BotaoWhats></div>
        <span className="text-sm text-[var(--green-200)]">{whatsappExibicao}</span>
      </div>
    </section>
  );
}
