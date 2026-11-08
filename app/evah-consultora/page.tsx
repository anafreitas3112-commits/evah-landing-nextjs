import type { Metadata } from "next";
import Header from "@/components/Header";
import Problem from "@/components/Problem";
import Metodo from "@/components/Metodo";
import Comparison from "@/components/Comparison";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import { CartaoLista, FaixaCta, GradeRecursos, HeroProduto, OutrasSolucoes, Titulo } from "@/components/ui";

export const metadata: Metadata = {
  title: "Evah Consultora — uma IA como consultora da sua clínica",
  description: "A IA que analisa os números da clínica, compara com as melhores práticas, monta o plano de ação com você e acompanha a execução.",
};

const analisa = [
  { t: "Faturamento por origem", d: "Lead, grupo, maca, recuperação, renovação e indicação, separados." },
  { t: "Comparação no tempo", d: "Últimos 3 meses contra os anteriores e contra o mesmo período do ano passado." },
  { t: "Base de clientes", d: "Quem está ativa, quem sumiu, quem está para renovar." },
  { t: "Leads e marketing", d: "Quantos chegam, quanto custam e quantos viram venda." },
  { t: "Grupos de WhatsApp", d: "Quantos grupos, quem participa, quanto vendem e como." },
  { t: "Equipe", d: "Tarefas, retornos e o que está esperando cada pessoa." },
];

const faq = [
  { q: "É um relatório ou ela faz alguma coisa?", a: "Faz. Depois do plano aprovado, as outras IAs da Evah executam (grupo, atendimento, revenda) e a consultora acompanha os resultados." },
  { q: "De onde vêm os dados?", a: "Dos sistemas que a clínica já usa: vendas, agendamentos e CRM. Ela pergunta o que você tem, não supõe." },
  { q: "Substitui a consultoria humana?", a: "Não. Ela trabalha junto com a consultoria da Kotobuki: a Ana define a estratégia com você e a IA acompanha todos os dias." },
];

export default function Page() {
  return (
    <main>
      <Header />
      <HeroProduto
        nome="Evah Consultora"
        titulo={<>Já pensou ter uma <span className="text-accent-strong">IA como consultora</span> da sua clínica?</>}
        sub="Ela analisa os números, compara com as melhores práticas do mercado, monta o plano de ação com você e acompanha a execução."
        lateral={<CartaoLista titulo="Plano de ação da semana" rotulo="exemplo" itens={["Analisei: o grupo só recebe promoção e as respostas caíram.", "Comparei: grupos que vendem bem nutrem antes de ofertar.", "Plano: 2 posts de conteúdo, 1 oferta com prazo e lista do privado.", "Executando: posts prontos para sua aprovação, tarefas criadas."]} />}
      />
      <Problem />
      <Metodo />
      <section className="max-w-content mx-auto px-4 md:px-8 pb-20">
        <Titulo eyebrow="O que ela olha" titulo="O retrato completo do momento da clínica" />
        <GradeRecursos itens={analisa} />
      </section>
      <Comparison />
      <Faq itens={faq} />
      <OutrasSolucoes atual="/evah-consultora" />
      <FaixaCta titulo="Quer ver a sua clínica pelos olhos da Evah?" texto="Agende uma conversa de diagnóstico e saia com um retrato do momento e as primeiras ações." />
      <Footer />
    </main>
  );
}
