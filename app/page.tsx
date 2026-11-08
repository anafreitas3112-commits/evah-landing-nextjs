import Link from "next/link";
import Header from "@/components/Header";
import SobMedida from "@/components/SobMedida";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import { BotaoWhats, FaixaCta, Titulo, produtos } from "@/components/ui";

const camadas = [
  { t: "Consultoria", d: "Diagnóstico do momento da clínica, estratégia e meta possível, com a Ana." },
  { t: "Construção sob medida", d: "Apps, indicadores e rotinas desenvolvidos no jeito da sua clínica." },
  { t: "IAs que executam", d: "Grupo, atendimento, revenda e a consultora trabalhando todos os dias." },
  { t: "Indicadores", d: "Cada número abre a lista de quem agir. Você vê o que deu resultado." },
];

const consultoria = [
  { t: "Diagnóstico do momento", d: "Base de clientes, leads por mês, investimento em marketing e faturamento separado por origem: lead, grupo, maca, recuperação, renovação e indicação." },
  { t: "Estratégia e meta", d: "Comparamos os últimos meses com o histórico e com o mesmo período do ano anterior, e combinamos uma meta possível." },
  { t: "Plano de ação", d: "O que fazer, quem faz e quando. Com as melhores práticas do mercado, não com achismo." },
  { t: "Implantação e acompanhamento", d: "Construímos o que falta, colocamos as IAs para executar e acompanhamos os números com você." },
];

const comeco = [
  { n: "1", t: "Conversa de diagnóstico", d: "Sem custo. Entendemos o momento da clínica e onde está o dinheiro parado." },
  { n: "2", t: "Primeira solução em até 7 dias", d: "Normalmente o Evah Grupo, que mostra resultado rápido sem mudar a rotina da equipe." },
  { n: "3", t: "Crescer com os números", d: "Quando os indicadores mostram o próximo gargalo, entra a próxima solução." },
];

const faq = [
  { q: "A Kotobuki é uma empresa de software?", a: "Não só. É consultoria e desenvolvimento em IA. Primeiro entendemos a sua clínica e montamos a estratégia; depois construímos e colocamos as IAs para executar." },
  { q: "Preciso contratar tudo de uma vez?", a: "Não. A maioria começa pelo Evah Grupo e sobe um passo quando o anterior já mostrou resultado." },
  { q: "E se o jeito da minha clínica for diferente?", a: "É para isso que existe a construção sob medida: telas, indicadores e rotinas se ajustam à sua clínica, não o contrário." },
  { q: "A IA vai falar com minhas clientes sem eu ver?", a: "Só se você quiser. Posts e mensagens no privado podem passar antes pelo seu WhatsApp para aprovação. Saúde, contraindicação e reclamação vão direto para a equipe." },
  { q: "A IA substitui minha equipe?", a: "Não. Ela aumenta a produtividade da equipe: cuida do repetitivo, separa quem está pronta para comprar e mostra o que fazer a seguir." },
  { q: "Funciona para redes com mais de uma unidade?", a: "Sim. Cada unidade tem seus dados separados, e a gestão da rede compara indicadores entre elas." },
];

export default function Home() {
  return (
    <main>
      <Header />

      {/* Abertura */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-8 pt-12 md:pt-20 pb-16">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-10 md:gap-14 items-center">
          <div className="flex flex-col gap-5">
            <span className="inline-flex self-start items-center rounded-full bg-accent-soft text-accent-strong text-xs font-semibold px-4 py-1.5">
              Kotobuki · consultoria e desenvolvimento em IA
            </span>
            <h1 className="font-display font-bold text-[38px] md:text-[50px] leading-[1.08] text-text-primary">
              IA na <span className="text-accent-strong">gestão</span> da sua clínica, não só no atendimento
            </h1>
            <p className="text-[17px] text-text-secondary max-w-[520px] leading-relaxed">
              Consultoria para montar a estratégia, construção sob medida para o seu jeito de trabalhar e
              as IAs da Evah para executar, com indicadores em cada passo.
            </p>
            <div className="flex gap-3 flex-wrap">
              <BotaoWhats>Agendar conversa de diagnóstico</BotaoWhats>
              <a href="#solucoes" className="rounded-lg border border-border-default text-text-primary font-semibold px-6 py-3.5 hover:bg-surface-sunken">Conhecer as soluções</a>
            </div>
            <p className="text-[13px] text-text-tertiary">IA não é só agente e automação. É estratégia.</p>
          </div>
          <div className="bg-surface rounded-3xl shadow-lg border border-border-subtle p-5 md:p-6 flex flex-col">
            {camadas.map((c, i) => (
              <div key={c.t} className="flex gap-4 items-stretch">
                <div className="flex flex-col items-center">
                  <span className={`w-9 h-9 rounded-full font-bold text-sm flex items-center justify-center ${i === 2 ? "bg-gradient-to-br from-[var(--green-600)] to-[var(--green-800)] text-white" : "bg-accent-soft text-accent-strong"}`}>{i + 1}</span>
                  {i < camadas.length - 1 && <span className="w-px flex-1 bg-border-default my-1" />}
                </div>
                <div className="pb-5">
                  <div className="font-display font-bold text-text-primary">{c.t}</div>
                  <div className="text-sm text-text-secondary leading-snug mt-0.5">{c.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultoria */}
      <section id="consultoria" className="bg-[var(--ink-950)] text-[var(--ink-25)] scroll-mt-24">
        <div className="max-w-content mx-auto px-4 md:px-8 py-20 md:py-24">
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-14">
            <div className="flex flex-col gap-4">
              <div className="font-mono text-xs uppercase tracking-wide text-[var(--green-300)]">A consultoria</div>
              <h2 className="font-display font-bold text-[30px] md:text-[36px] leading-tight">
                Estratégia com quem já esteve do seu lado do balcão
              </h2>
              <p className="text-[var(--ink-300)] leading-relaxed">
                <b className="text-white">Ana Lucia de Freitas</b> une 30 anos entre tecnologia e gestão
                de projetos (TI, PMO corporativo e portfólios de grande porte) com 10 anos como dona de
                clínicas de estética e emagrecimento, com responsabilidade total pelos resultados.
              </p>
              <p className="text-[var(--ink-300)] leading-relaxed">
                Ela entende a meta da semana, a equipe sobrecarregada e o grupo que esfriou. E sabe
                construir a solução.
              </p>
              <Link href="/ana" className="text-sm font-semibold text-[var(--green-300)]">Cartão da Ana →</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {consultoria.map((c) => (
                <div key={c.t} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="font-display font-bold text-lg text-white">{c.t}</div>
                  <p className="text-sm text-[var(--ink-300)] mt-2 leading-relaxed">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Construção sob medida */}
      <SobMedida />

      {/* Soluções */}
      <section id="solucoes" className="max-w-content mx-auto px-4 md:px-8 py-20 md:py-24 scroll-mt-24">
        <Titulo eyebrow="As soluções Evah" titulo="Quatro IAs, uma operação" sub="Cada uma resolve uma dor e conversa com as outras. Você começa por uma e cresce quando os números pedirem." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {produtos.map((p) => (
            <Link key={p.slug} href={p.slug} className="group bg-surface border border-border-subtle rounded-2xl shadow-sm p-7 flex flex-col gap-3 hover:border-[var(--green-300)] hover:shadow-md transition">
              <span className="self-start bg-accent-soft text-accent-strong font-mono text-[12px] px-3 py-1 rounded-full">{p.tag}</span>
              <span className="font-display font-bold text-2xl text-text-primary">{p.nome}</span>
              <span className="font-semibold text-text-primary">{p.frase}</span>
              <span className="text-sm text-text-secondary leading-relaxed">{p.desc}</span>
              <span className="text-sm font-semibold mt-1">Conhecer {p.nome} →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Como começamos */}
      <section className="bg-surface border-y border-border-subtle">
        <div className="max-w-content mx-auto px-4 md:px-8 py-20">
          <Titulo eyebrow="Como começamos" titulo="Do diagnóstico ao primeiro resultado" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {comeco.map((c) => (
              <div key={c.n} className="rounded-2xl bg-canvas border border-border-subtle p-7 flex flex-col gap-2">
                <span className="w-8 h-8 rounded-full bg-accent-strong text-white font-bold text-sm flex items-center justify-center">{c.n}</span>
                <div className="font-display font-bold text-lg text-text-primary mt-1">{c.t}</div>
                <p className="text-sm text-text-secondary leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq itens={faq} />
      <FaixaCta titulo="Vamos olhar a sua clínica juntas?" texto="Uma conversa de diagnóstico, sem custo, para entender o momento da clínica e por onde a IA traz resultado primeiro." botao="Agendar conversa com a Ana" />
      <Footer />
    </main>
  );
}
