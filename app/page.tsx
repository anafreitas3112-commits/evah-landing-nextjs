import Link from "next/link";
import Header from "@/components/Header";
import SobMedida from "@/components/SobMedida";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import FormContato from "@/components/FormContato";
import IasConectadas from "@/components/IasConectadas";
import VideoEvah from "@/components/VideoEvah";
import { TelaAchados, TelaAtendimento, TelaEquipe, TelaPrevia, TelaRede, TelaRevenda } from "@/components/Telas";
import { BotaoWhats, Titulo } from "@/components/ui";

const pilares = [
  { n: "1", t: "Sua própria IA construtora", d: "Seu CRM, suas telas, indicadores e rotinas, personalizados pela própria IA no jeito da sua clínica. Pediu, a IA constrói para você." },
  { n: "2", t: "Inteligência conectada", d: "Base de clientes, leads, conversas, agenda, vendas e contas de anúncio (Meta e Google) ligadas. As IAs conversam entre si e encontram onde vender mais." },
  { n: "3", t: "Estratégia e execução", d: "A consultora monta o plano com você, as IAs agilizam os processos e a equipe de vendas e atendimento recebe tudo pronto para fechar." },
];

const solucoes = [
  { slug: "/evah-grupo", nome: "Evah Grupo", tag: "Grupo VIP", t: "O grupo volta a conversar e a vender.", d: "Planeja o mês com você, posta com a sua aprovação, conversa com as clientes e mostra quem chamar no privado.", tela: <TelaPrevia /> },
  { slug: "/evah-atendimento", nome: "Evah Atendimento", tag: "Leads", t: "Nenhum lead esperando resposta.", d: "Atende na hora, acolhe, qualifica e agenda. A equipe trabalha num app com chat, funil, agenda e indicadores.", tela: <TelaAtendimento /> },
  { slug: "/evah-revenda", nome: "Evah Revenda", tag: "Base de clientes", t: "Quem já gosta da clínica volta a comprar.", d: "Ex-clientes, renovações e ofertas para quem está em tratamento, organizadas na lista de cada consultora.", tela: <TelaRevenda /> },
];

const rede = [
  "Atendimento padronizado em todas as unidades, com o jeito de vender da marca.",
  "Indicadores comparados entre unidades: leads, agendamentos, vendas por origem.",
  "Cada unidade com os seus dados separados e o seu login.",
  "Migração do sistema atual unidade por unidade, com checklist.",
  "Controle de números de WhatsApp e de custos por unidade.",
];

const faq = [
  { q: "Quanto custa?", a: "É implantação mais uma mensalidade por unidade, de acordo com as soluções. Depois do diagnóstico gratuito você recebe uma proposta de uma página em até 24 horas." },
  { q: "Preciso contratar tudo de uma vez?", a: "Não. Você pode começar por uma solução, por exemplo o Evah Grupo, e crescer quando os números mostrarem o próximo passo." },
  { q: "Funciona para redes e franquias?", a: "Sim, e foi pensada para isso: cada unidade com seus dados, atendimento padronizado e a gestão da rede comparando as unidades." },
  { q: "A IA vai falar com minhas clientes sem eu ver?", a: "Só se você quiser. Posts e mensagens no privado podem passar antes pelo seu WhatsApp. Saúde, contraindicação e reclamação vão direto para a equipe." },
  { q: "Usa a API oficial do WhatsApp?", a: "O Evah Atendimento pode usar a API oficial. O Evah Grupo usa um número dedicado com integração não oficial, porque a API oficial não participa de grupos; por isso os envios são controlados e aprovados, para reduzir o risco de bloqueio." },
  { q: "De quem são os dados?", a: "Seus. A base de dados é da clínica: clientes, leads, conversas e vendas pertencem a você. Os dados de cada clínica e de cada unidade ficam separados, o acesso é por login da equipe e nada é compartilhado com outras clínicas." },
  { q: "A IA substitui minha equipe?", a: "Não. Ela aumenta a produtividade da equipe: cuida do repetitivo, separa quem está pronta para comprar e mostra o que fazer a seguir." },
];

export default function Home() {
  return (
    <main>
      <Header />

      {/* Abertura */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-8 pt-10 md:pt-16 pb-16">
        <div className="grid md:grid-cols-[1.15fr_1fr] gap-10 md:gap-14 items-center">
          <div className="flex flex-col gap-5">
            <span className="inline-flex self-start items-center rounded-full bg-accent-soft text-accent-strong text-xs font-semibold px-4 py-1.5">
              Evah · operação comercial com IA para clínicas e redes
            </span>
            <h1 className="font-display font-bold text-[36px] md:text-[50px] leading-[1.06] text-text-primary">
              Seus dados, sua equipe, seus processos e as IAs <span className="text-accent-strong">trabalhando juntos para vender mais</span>.
            </h1>
            <p className="text-[17px] text-text-secondary max-w-[530px] leading-relaxed">
              Uma consultora de IA ao seu lado. Conectada à sua base de dados, aos processos da clínica e às
              mídias digitais (Meta e Google), ela analisa os números, mostra onde vender mais e coloca o plano em
              prática com a sua equipe. E o seu CRM é personalizado pela própria IA, no seu jeito.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a href="#diagnostico" className="rounded-lg bg-accent-strong text-white font-semibold px-6 py-3.5 hover:bg-green-800">Agendar diagnóstico gratuito</a>
              <a href="/sob-medida" className="rounded-lg border border-border-default text-text-primary font-semibold px-6 py-3.5 hover:bg-surface-sunken">Sua IA construtora</a>
            </div>
            <p className="text-[13px] text-text-tertiary">Mais de 200 melhorias entregues em 3 semanas, a pedido de quem usa. Em uso em unidades de uma rede de franquias de estética.</p>
          </div>
          <TelaAchados />
        </div>
      </section>

      <VideoEvah />

      {/* Pilares */}
      <section className="bg-surface border-y border-border-subtle">
        <div className="max-w-content mx-auto px-4 md:px-8 py-20">
          <Titulo eyebrow="Não é CRM. Não é chatbot." titulo="Construção, inteligência e estratégia, juntas" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pilares.map((p) => (
              <div key={p.n} className="rounded-2xl bg-canvas border border-border-subtle p-7 flex flex-col gap-2">
                <span className="w-9 h-9 rounded-full bg-accent-strong text-white font-bold flex items-center justify-center">{p.n}</span>
                <div className="font-display font-bold text-xl text-text-primary mt-1">{p.t}</div>
                <p className="text-sm text-text-secondary leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <IasConectadas />

      {/* Equipe apoiada */}
      <section className="max-w-content mx-auto px-4 md:px-8 py-20 md:py-24 grid md:grid-cols-[1fr_1.1fr] gap-12 items-center">
        <TelaEquipe />
        <div className="flex flex-col gap-4">
          <div className="font-mono text-xs uppercase tracking-wide text-accent-strong">Equipe de vendas e atendimento apoiada</div>
          <h2 className="font-display font-bold text-[30px] md:text-[38px] text-text-primary leading-tight">A IA prepara. A equipe fecha.</h2>
          <p className="text-text-secondary leading-relaxed">
            Usando as informações do banco de dados, a IA entrega para cada consultora a lista do dia já
            priorizada, o contexto de cada cliente (o que falou no grupo, o que já foi oferecido, de qual anúncio
            veio) e a mensagem sugerida. O repetitivo é automatizado; a conversa que vende continua com a equipe.
          </p>
          <ul className="flex flex-col gap-2 text-text-secondary">
            <li>✓ Menos tempo procurando, mais tempo vendendo</li>
            <li>✓ Ninguém esquecido: retornos, renovações e faltas viram tarefa</li>
            <li>✓ A dona vê o que cada pessoa fez e o que deu resultado</li>
          </ul>
        </div>
      </section>

      {/* Soluções com telas */}
      <section id="solucoes" className="max-w-content mx-auto px-4 md:px-8 py-20 md:py-24 scroll-mt-24">
        <Titulo eyebrow="As IAs que executam" titulo="Três frentes de venda que a clínica já tem" sub="Telas do app com dados fictícios." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
          {solucoes.map((s) => (
            <div key={s.slug} className="flex flex-col gap-4">
              {s.tela}
              <span className="self-start bg-accent-soft text-accent-strong font-mono text-[12px] px-3 py-1 rounded-full">{s.tag}</span>
              <div className="font-display font-bold text-xl text-text-primary">{s.nome}</div>
              <div className="font-semibold text-text-primary -mt-2">{s.t}</div>
              <p className="text-sm text-text-secondary leading-relaxed">{s.d}</p>
              <Link href={s.slug} className="text-sm font-semibold">Conhecer {s.nome} →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Redes e franquias */}
      <section id="redes" className="bg-[var(--ink-950)] text-[var(--ink-25)] scroll-mt-24">
        <div className="max-w-content mx-auto px-4 md:px-8 py-20 md:py-24 grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div className="flex flex-col gap-5">
            <div className="font-mono text-xs uppercase tracking-wide text-[var(--green-300)]">Para redes e franquias</div>
            <h2 className="font-display font-bold text-[30px] md:text-[38px] leading-tight">
              Todas as unidades vendendo do jeito da marca, e você vendo os números de cada uma
            </h2>
            <ul className="flex flex-col gap-3">
              {rede.map((r) => (
                <li key={r} className="flex gap-3 items-start text-[var(--ink-300)] leading-relaxed">
                  <span className="text-[var(--green-300)]">✓</span>{r}
                </li>
              ))}
            </ul>
            <div><BotaoWhats claro>Falar sobre a minha rede</BotaoWhats></div>
          </div>
          <TelaRede />
        </div>
      </section>

      {/* Consultoria */}
      <section id="consultoria" className="max-w-content mx-auto px-4 md:px-8 py-20 md:py-24 scroll-mt-24 grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-14 items-center">
        <div className="flex flex-col gap-4">
          <div className="font-mono text-xs uppercase tracking-wide text-accent-strong">A consultoria</div>
          <h2 className="font-display font-bold text-[30px] md:text-[36px] text-text-primary leading-tight">
            Já pensou ter uma IA como consultora da sua clínica?
          </h2>
          <p className="text-text-secondary leading-relaxed">
            Por trás da Evah tem a consultoria da Ana: diagnóstico do momento da clínica, estratégia, meta
            e plano de ação. A IA analisa os números, compara com as melhores práticas do mercado e
            acompanha a execução todos os dias.
          </p>
          <Link href="/consultoria" className="text-sm font-semibold">Conhecer a consultoria →</Link>
        </div>
        <div className="rounded-2xl bg-surface border border-border-subtle shadow-sm p-7 flex flex-col gap-3">
          <div className="font-display font-bold text-xl text-text-primary">Ana Lucia de Freitas</div>
          <p className="text-sm text-text-secondary leading-relaxed">
            30 anos entre tecnologia e gestão de projetos (TI, PMO corporativo e portfólios de grande porte)
            e 10 anos como dona de clínicas de estética e emagrecimento, com responsabilidade total pelos
            resultados.
          </p>
          <p className="text-sm text-text-secondary leading-relaxed">Ela entende a meta da semana e sabe transformar isso em solução.</p>
          <Link href="/ana" className="text-sm font-semibold">Cartão da Ana →</Link>
        </div>
      </section>

      <SobMedida />

      {/* Por onde começar */}
      <section className="max-w-content mx-auto px-4 md:px-8 py-20 md:py-24">
        <Titulo eyebrow="Por onde começar" titulo="Dois caminhos, o mesmo primeiro passo: um diagnóstico gratuito" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-surface border border-border-subtle rounded-2xl shadow-sm p-7 flex flex-col gap-3">
            <div className="font-display font-bold text-xl text-text-primary">Clínica independente</div>
            <p className="text-sm text-text-secondary leading-relaxed">
              Começamos pelo seu grupo VIP: em 40 minutos você sai com um retrato do grupo e 3 ações para os
              próximos 30 dias. A primeira campanha sai em até 7 dias.
            </p>
            <Link href="/evah-grupo" className="text-sm font-semibold mt-auto">Ver o Evah Grupo →</Link>
          </div>
          <div className="bg-surface border border-border-subtle rounded-2xl shadow-sm p-7 flex flex-col gap-3">
            <div className="font-display font-bold text-xl text-text-primary">Rede ou franquia</div>
            <p className="text-sm text-text-secondary leading-relaxed">
              Olhamos a operação comercial da rede, escolhemos as primeiras unidades e implantamos com
              checklist. As próximas entram no mesmo padrão.
            </p>
            <a href="#redes" className="text-sm font-semibold mt-auto">Ver como funciona em rede →</a>
          </div>
        </div>
      </section>

      <Faq itens={faq} />

      <section id="diagnostico" className="py-20 px-4 md:px-8 flex justify-center scroll-mt-20" style={{ background: "var(--green-700)" }}>
        <div className="max-w-[720px] w-full flex flex-col items-center text-center gap-4">
          <div className="font-mono text-xs uppercase tracking-wide text-[var(--green-200)]">Diagnóstico gratuito</div>
          <h2 className="font-display font-bold text-[28px] md:text-[34px] text-white leading-tight">Vamos olhar a sua operação juntas?</h2>
          <p className="text-[var(--green-100)] max-w-[540px] leading-relaxed mb-2">
            Conte um pouco sobre a sua clínica ou rede. A Ana responde pelo WhatsApp para marcar a conversa.
          </p>
          <FormContato />
          <div className="mt-2"><BotaoWhats claro>Prefiro chamar direto no WhatsApp</BotaoWhats></div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
