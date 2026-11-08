import type { Metadata } from "next";
import Header from "@/components/Header";
import Problem from "@/components/Problem";
import Metodo from "@/components/Metodo";
import Comparison from "@/components/Comparison";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import { CartaoLista, FaixaCta, GradeRecursos, HeroProduto, OutrasSolucoes, Titulo } from "@/components/ui";

export const metadata: Metadata = {
  title: "Consultoria com a Ana — IA na gestão da sua clínica | Evah",
  description: "Consultoria da Kotobuki com IA: diagnóstico do momento da clínica, estratégia, meta, plano de ação e acompanhamento com indicadores.",
};

const analisa = [
  { t: "Faturamento por origem", d: "Lead, grupo, maca, recuperação, renovação e indicação, separados." },
  { t: "Comparação no tempo", d: "Últimos 3 meses contra os anteriores e contra o mesmo período do ano passado." },
  { t: "Base de clientes", d: "Quem está ativa, quem sumiu, quem está para renovar." },
  { t: "Leads e marketing", d: "Quantos chegam, quanto custam e quantos viram venda." },
  { t: "Grupos de WhatsApp", d: "Quantos grupos, quem participa, quanto vendem e como." },
  { t: "Equipe", d: "Tarefas, retornos e o que está esperando cada pessoa." },
];

const consultoria = [
  { t: "Diagnóstico do momento", d: "Base de clientes, leads por mês, investimento em marketing e faturamento separado por origem." },
  { t: "Estratégia e meta", d: "Comparamos os últimos meses com o histórico e combinamos uma meta possível." },
  { t: "Plano de ação", d: "O que fazer, quem faz e quando, com as melhores práticas do mercado." },
  { t: "Construção sob medida", d: "O que faltar, a Kotobuki desenvolve: telas, indicadores, rotinas e integrações." },
  { t: "IAs que executam", d: "Evah Grupo, Atendimento e Revenda colocam o plano em prática." },
  { t: "Acompanhamento", d: "Indicadores e revisão do plano com você, até a meta virar rotina." },
];

const faq = [
  { q: "É um relatório ou ela faz alguma coisa?", a: "Faz. Depois do plano aprovado, as outras IAs da Evah executam (grupo, atendimento, revenda) e a consultora acompanha os resultados." },
  { q: "De onde vêm os dados?", a: "Dos sistemas que a clínica já usa: vendas, agendamentos e CRM. Ela pergunta o que você tem, não supõe." },
  { q: "É a IA ou é a Ana?", a: "As duas. A Ana conduz a consultoria e define a estratégia com você; a IA analisa os dados e acompanha a execução todos os dias." },
];

export default function Page() {
  return (
    <main>
      <Header />
      <HeroProduto
        nome="Consultoria com a Ana"
        titulo={<>Já pensou ter uma <span className="text-accent-strong">IA como consultora</span> da sua clínica?</>}
        sub="A consultoria da Ana com apoio de IA: analisa os números da clínica, compara com as melhores práticas do mercado, monta o plano de ação com você e acompanha a execução."
        lateral={<CartaoLista titulo="Plano de ação da semana" rotulo="exemplo" itens={["Analisei: o grupo só recebe promoção e as respostas caíram.", "Comparei: grupos que vendem bem nutrem antes de ofertar.", "Plano: 2 posts de conteúdo, 1 oferta com prazo e lista do privado.", "Executando: posts prontos para sua aprovação, tarefas criadas."]} />}
      />
      <section className="max-w-content mx-auto px-4 md:px-8 pb-20">
        <Titulo eyebrow="A consultoria" titulo="Estratégia com quem já esteve do seu lado do balcão" sub="Ana Lucia de Freitas: 30 anos entre tecnologia e gestão de projetos e 10 anos como dona de clínicas de estética e emagrecimento." />
        <GradeRecursos itens={consultoria} />
      </section>
      <Problem />
      <Metodo />
      <section className="max-w-content mx-auto px-4 md:px-8 pb-20">
        <Titulo eyebrow="O que ela olha" titulo="O retrato completo do momento da clínica" />
        <GradeRecursos itens={analisa} />
      </section>
      <Comparison />
      <Faq itens={faq} />
      <OutrasSolucoes atual="/consultoria" />
      <FaixaCta titulo="Quer ver a sua clínica pelos olhos da Evah?" texto="Agende uma conversa de diagnóstico e saia com um retrato do momento e as primeiras ações." />
      <Footer />
    </main>
  );
}
