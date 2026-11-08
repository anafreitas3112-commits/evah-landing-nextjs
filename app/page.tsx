import Link from "next/link";
import Header from "@/components/Header";
import SobMedida from "@/components/SobMedida";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import FormContato from "@/components/FormContato";
import { TelaEsperando, TelaIndicadores, TelaPrevia } from "@/components/Telas";
import { BotaoWhats, Titulo, produtos } from "@/components/ui";

const passos = [
  { n: "1", t: "Diagnóstico gratuito", d: "40 minutos sobre o seu grupo: quem participa, quando, o que vende e como. Você sai com 3 ações." },
  { n: "2", t: "Plano do mês com você", d: "Conteúdo, campanhas e meta combinados com a dona. Nada de pacote pronto." },
  { n: "3", t: "A Evah executa", d: "Posta, conversa, dá boas-vindas e separa quem chamar no privado, sempre com a sua aprovação." },
  { n: "4", t: "Você vê o resultado", d: "Vendas do grupo, ofertas em negociação e o que está esperando você, num app só." },
];

const faq = [
  { q: "Quanto custa?", a: "Depende do tamanho da clínica e das soluções. Depois do diagnóstico gratuito você recebe uma proposta de uma página em até 24 horas, com o que a Evah vai fazer e o investimento." },
  { q: "Preciso trocar meu sistema ou criar um grupo novo?", a: "Não. O Evah Grupo entra no grupo que você já tem e não muda a rotina da equipe." },
  { q: "A IA vai falar com minhas clientes sem eu ver?", a: "Só se você quiser. Posts e mensagens no privado chegam antes no seu WhatsApp para aprovação. Saúde, contraindicação e reclamação vão direto para a equipe." },
  { q: "Usa a API oficial do WhatsApp?", a: "O Evah Grupo usa um número de WhatsApp dedicado, conectado por uma integração não oficial, porque a API oficial não permite participar de grupos. Por isso trabalhamos com ritmo de envio controlado e mensagens aprovadas, para reduzir o risco de bloqueio. O Evah Atendimento pode usar a API oficial para os leads de anúncio." },
  { q: "E a LGPD? Meus dados ficam seguros?", a: "Os dados de cada clínica ficam separados, o acesso é por login da equipe e nada é compartilhado com outras clínicas. A IA não responde sobre saúde: esses casos vão para a equipe." },
  { q: "A IA substitui minha equipe?", a: "Não. Ela aumenta a produtividade da equipe: cuida do repetitivo, separa quem está pronta para comprar e mostra o que fazer a seguir." },
];

export default function Home() {
  return (
    <main>
      <Header />

      {/* Abertura: uma oferta só */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-8 pt-10 md:pt-16 pb-16">
        <div className="grid md:grid-cols-[1.15fr_1fr] gap-10 md:gap-14 items-center">
          <div className="flex flex-col gap-5">
            <span className="inline-flex self-start items-center rounded-full bg-accent-soft text-accent-strong text-xs font-semibold px-4 py-1.5">
              Evah · IA para clínicas
            </span>
            <h1 className="font-display font-bold text-[38px] md:text-[52px] leading-[1.06] text-text-primary">
              O grupo VIP da sua clínica parou? A Evah faz ele <span className="text-accent-strong">voltar a vender</span>.
            </h1>
            <p className="text-[17px] text-text-secondary max-w-[520px] leading-relaxed">
              Uma IA que planeja o mês com você, posta com a sua aprovação, conversa com as clientes e
              mostra quem chamar no privado. E não para no grupo: a mesma IA ajuda na gestão da clínica.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a href="#diagnostico" className="rounded-lg bg-accent-strong text-white font-semibold px-6 py-3.5 hover:bg-green-800">Quero o diagnóstico gratuito</a>
              <a href="#produto" className="rounded-lg border border-border-default text-text-primary font-semibold px-6 py-3.5 hover:bg-surface-sunken">Ver o app por dentro</a>
            </div>
            <p className="text-[13px] text-text-tertiary">40 minutos, sem custo, contratando ou não.</p>
          </div>
          <TelaPrevia />
        </div>
      </section>

      {/* Produto por dentro */}
      <section id="produto" className="bg-surface border-y border-border-subtle scroll-mt-24">
        <div className="max-w-content mx-auto px-4 md:px-8 py-20">
          <Titulo eyebrow="Por dentro" titulo="Você no controle, a Evah fazendo" sub="Telas do app com dados fictícios." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
            <div className="flex flex-col gap-4 justify-center md:pr-4">
              <div className="font-display font-bold text-2xl text-text-primary leading-snug">Prévia no seu WhatsApp, antes de tudo sair.</div>
              <p className="text-text-secondary leading-relaxed">Posts e mensagens do privado chegam antes para você. Responde “pode mandar” ou diz o que mudar.</p>
              <p className="text-text-secondary leading-relaxed">No app você vê o que está esperando por você e os números do grupo. Cada número abre a lista de quem agir.</p>
              <a href="#diagnostico" className="self-start rounded-lg bg-accent-strong text-white font-semibold px-5 py-3 hover:bg-green-800">Quero ver na minha clínica</a>
            </div>
            <div className="flex flex-col gap-4">
              <TelaEsperando />
              <p className="text-center text-sm text-text-secondary"><b className="text-text-primary">Esperando você.</b> O que depende da dona, por prioridade.</p>
            </div>
            <div className="flex flex-col gap-4">
              <TelaIndicadores />
              <p className="text-center text-sm text-text-secondary"><b className="text-text-primary">Indicadores.</b> Cada número abre a lista de quem agir.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="max-w-content mx-auto px-4 md:px-8 py-20 md:py-24">
        <Titulo eyebrow="Como funciona" titulo="Do diagnóstico às vendas do grupo" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {passos.map((p, i) => (
            <div key={p.n} className={`rounded-2xl p-7 flex flex-col gap-2 ${i === 3 ? "bg-gradient-to-br from-[var(--green-600)] to-[var(--green-800)] text-white shadow-md" : "bg-surface border border-border-subtle shadow-sm"}`}>
              <span className={`w-8 h-8 rounded-full font-bold text-sm flex items-center justify-center ${i === 3 ? "bg-white/20 text-white" : "bg-accent-strong text-white"}`}>{p.n}</span>
              <div className={`font-display font-bold text-lg mt-1 ${i === 3 ? "text-white" : "text-text-primary"}`}>{p.t}</div>
              <p className={`text-sm leading-relaxed ${i === 3 ? "text-[var(--green-100)]" : "text-text-secondary"}`}>{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Consultoria com a Ana */}
      <section id="consultoria" className="bg-[var(--ink-950)] text-[var(--ink-25)] scroll-mt-24">
        <div className="max-w-content mx-auto px-4 md:px-8 py-20 md:py-24 grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-14 items-center">
          <div className="flex flex-col gap-4">
            <div className="font-mono text-xs uppercase tracking-wide text-[var(--green-300)]">Por trás da Evah</div>
            <h2 className="font-display font-bold text-[30px] md:text-[38px] leading-tight">
              Já pensou ter uma IA como consultora da sua clínica?
            </h2>
            <p className="text-[var(--ink-300)] leading-relaxed">
              A Evah não é só uma ferramenta. Por trás dela tem a consultoria da Ana: o diagnóstico do
              momento da clínica, a estratégia, a meta e o plano de ação. A IA analisa os números, compara
              com as melhores práticas do mercado e acompanha a execução todos os dias.
            </p>
            <Link href="/consultoria" className="text-sm font-semibold text-[var(--green-300)]">Conhecer a consultoria →</Link>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-7 flex flex-col gap-3">
            <div className="font-display font-bold text-xl text-white">Ana Lucia de Freitas</div>
            <p className="text-sm text-[var(--ink-300)] leading-relaxed">
              30 anos entre tecnologia e gestão de projetos (TI, PMO corporativo e portfólios de grande
              porte) e 10 anos como dona de clínicas de estética e emagrecimento, com responsabilidade total
              pelos resultados.
            </p>
            <p className="text-sm text-[var(--ink-300)] leading-relaxed">Ela entende a meta da semana e sabe construir a solução.</p>
            <Link href="/ana" className="text-sm font-semibold text-[var(--green-300)]">Cartão da Ana →</Link>
          </div>
        </div>
      </section>

      <SobMedida />

      {/* Soluções, versão curta */}
      <section id="solucoes" className="max-w-content mx-auto px-4 md:px-8 py-20 md:py-24 scroll-mt-24">
        <Titulo eyebrow="Ecossistema Evah" titulo="Comece pelo grupo. Cresça quando os números pedirem." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {produtos.map((p) => (
            <Link key={p.slug} href={p.slug} className="bg-surface border border-border-subtle rounded-2xl shadow-sm p-7 flex flex-col gap-2.5 hover:border-[var(--green-300)] hover:shadow-md transition">
              <span className="self-start bg-accent-soft text-accent-strong font-mono text-[12px] px-3 py-1 rounded-full">{p.tag}</span>
              <span className="font-display font-bold text-xl text-text-primary">{p.nome}</span>
              <span className="text-sm text-text-secondary leading-relaxed">{p.desc}</span>
              <span className="text-sm font-semibold mt-1">Conhecer →</span>
            </Link>
          ))}
        </div>
      </section>

      <Faq itens={faq} />

      {/* Diagnóstico */}
      <section id="diagnostico" className="py-20 px-4 md:px-8 flex justify-center scroll-mt-20" style={{ background: "var(--green-700)" }}>
        <div className="max-w-[720px] w-full flex flex-col items-center text-center gap-4">
          <div className="font-mono text-xs uppercase tracking-wide text-[var(--green-200)]">Diagnóstico do grupo · sem custo</div>
          <h2 className="font-display font-bold text-[28px] md:text-[34px] text-white leading-tight">Vamos olhar o seu grupo juntas?</h2>
          <p className="text-[var(--green-100)] max-w-[540px] leading-relaxed mb-2">
            Em 40 minutos você sai com um retrato do grupo e 3 ações para vender mais por ele ainda este mês.
          </p>
          <FormContato />
          <div className="mt-2"><BotaoWhats claro>Prefiro chamar direto no WhatsApp</BotaoWhats></div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
