import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import SobMedida from "@/components/SobMedida";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import { TelaPedido } from "@/components/Telas";
import { FaixaCta, GradeRecursos, HeroProduto, OutrasSolucoes, Titulo } from "@/components/ui";

export const metadata: Metadata = {
  title: "Sua IA construtora — seu CRM personalizado pela IA | Evah",
  description: "Sua própria IA construtora: seu CRM, telas, indicadores, rotinas e integrações personalizados pela IA no jeito da sua clínica. Pediu, a IA constrói para você.",
};

const construimos = [
  { t: "Seu CRM personalizado", d: "Chat, funil, agenda, tarefas e ficha da cliente, do jeito que a sua equipe trabalha. Não é um CRM genérico: é o seu." },
  { t: "Indicadores que abrem a lista", d: "O número que importa para você, com a lista de quem agir por trás de cada um." },
  { t: "Rotinas automáticas", d: "Lembretes, tarefas, retornos, recuperação e pós-venda acontecendo sozinhos, na hora certa." },
  { t: "Integrações", d: "Sistema de vendas, agenda, anúncios da Meta e WhatsApp conversando com a Evah." },
  { t: "IAs com o jeito da clínica", d: "Tom de voz, ofertas, regras de venda e o que nunca falar, configurados com você." },
  { t: "Visão da dona e da rede", d: "O que está esperando você, metas, comparação entre unidades e relatórios." },
];

const etapas = [
  { n: "1", t: "Diagnóstico", d: "Entendemos como a clínica vende hoje e onde perde dinheiro." },
  { n: "2", t: "Desenho com você", d: "Decidimos juntas o que construir primeiro, pelo que traz resultado mais rápido." },
  { n: "3", t: "Construção em ciclos curtos", d: "Entregas pequenas e frequentes. Você usa, comenta e a gente ajusta." },
  { n: "4", t: "Ajuste contínuo", d: "A clínica muda, o sistema acompanha. Ajustes fazem parte da mensalidade." },
];

const faq = [
  { q: "Quanto tempo leva um ajuste?", a: "Ajustes pequenos ficam prontos em dias. Funcionalidades maiores entram com prazo combinado antes." },
  { q: "Ajuste tem custo extra?", a: "A mensalidade inclui ajustes todo mês. Projetos maiores, como uma integração nova, têm prazo e valor combinados antes de começar." },
  { q: "Preciso saber de tecnologia para pedir?", a: "Não. Você pede como pediria para alguém da equipe, até por WhatsApp. A gente traduz em tela, rotina ou indicador." },
  { q: "De quem são os dados?", a: "Seus. A base de dados é da clínica: clientes, leads, conversas e vendas pertencem a você, separados de qualquer outra clínica." },
  { q: "Funciona para outros negócios além de clínicas?", a: "Sim. A IA constrói para negócios que vendem pelo WhatsApp e têm base de clientes: odontologia, academias, escolas, imobiliárias e outros." },
];

export default function Page() {
  return (
    <main>
      <Header />
      <HeroProduto
        nome="Sua IA construtora"
        titulo={<>Pediu? <span className="text-accent-strong">A IA constrói para você.</span></>}
        sub="Você não compra um sistema pronto. Tem a sua própria IA construtora: seu CRM, telas, indicadores, rotinas e integrações personalizados pela IA no jeito que a sua clínica vende. E os dados são seus."
        cta="Quero contar o que preciso"
        lateral={<TelaPedido />}
      />
      <section className="bg-[var(--ink-950)] text-[var(--ink-25)]">
        <div className="max-w-content mx-auto px-4 md:px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div><div className="font-display font-bold text-[44px] text-[var(--green-300)]">200+</div><div className="text-sm text-[var(--ink-300)]">melhorias entregues em 3 semanas, a pedido de quem usa</div></div>
          <div><div className="font-display font-bold text-[44px] text-[var(--green-300)]">Dias</div><div className="text-sm text-[var(--ink-300)]">entre o pedido e o ajuste no ar, nos ajustes do dia a dia</div></div>
          <div><div className="font-display font-bold text-[44px] text-[var(--green-300)]">1 conversa</div><div className="text-sm text-[var(--ink-300)]">por WhatsApp para pedir. Sem chamado, sem formulário</div></div>
        </div>
      </section>
      <SobMedida />
      <section className="max-w-content mx-auto px-4 md:px-8 py-20 md:py-24">
        <Titulo eyebrow="O que a IA constrói" titulo="Seu CRM e tudo o que a sua operação comercial precisa" />
        <GradeRecursos itens={construimos} />
      </section>
      <section className="bg-surface border-y border-border-subtle">
        <div className="max-w-content mx-auto px-4 md:px-8 py-20">
          <Titulo eyebrow="Como funciona" titulo="Construção em ciclos curtos, com você" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {etapas.map((e) => (
              <div key={e.n} className="rounded-2xl bg-canvas border border-border-subtle p-7 flex flex-col gap-2">
                <span className="w-8 h-8 rounded-full bg-accent-strong text-white font-bold text-sm flex items-center justify-center">{e.n}</span>
                <div className="font-display font-bold text-lg text-text-primary mt-1">{e.t}</div>
                <p className="text-sm text-text-secondary leading-relaxed">{e.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="max-w-[860px] mx-auto px-4 md:px-8 py-20 text-center flex flex-col gap-4 items-center">
        <div className="font-mono text-xs uppercase tracking-wide text-accent-strong">Não é só para clínicas</div>
        <h2 className="font-display font-bold text-[28px] md:text-[34px] text-text-primary leading-tight">Seu negócio vende pelo WhatsApp e tem base de clientes?</h2>
        <p className="text-text-secondary leading-relaxed max-w-[620px]">
          A IA constrói a mesma inteligência para odontologia, academias, escolas, imobiliárias e outros
          negócios: base organizada, leads acompanhados, oportunidades encontradas e indicadores para decidir.
        </p>
        <Link href="/consultoria" className="text-sm font-semibold">Conhecer a consultoria →</Link>
      </section>
      <Faq itens={faq} />
      <OutrasSolucoes atual="/sob-medida" />
      <FaixaCta titulo="O que a sua clínica precisa que nenhum sistema faz?" texto="Conte para a Ana. Na conversa de diagnóstico, vocês desenham juntas o que a IA vai construir primeiro." />
      <Footer />
    </main>
  );
}
