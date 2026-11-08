import type { Metadata } from "next";
import Header from "@/components/Header";
import Testimonial from "@/components/Testimonial";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import { CartaoLista, FaixaCta, GradeRecursos, HeroProduto, OutrasSolucoes, Titulo } from "@/components/ui";

export const metadata: Metadata = {
  title: "Evah Atendimento — nenhum lead esperando resposta",
  description: "IA que atende os leads da clínica no WhatsApp na hora, qualifica e agenda, com um app para a equipe: chat, funil, agenda e indicadores.",
};

const recursos = [
  { t: "Resposta na hora", d: "De anúncio, Instagram ou indicação: o lead é atendido em segundos, inclusive à noite e no fim de semana." },
  { t: "Conversa que acolhe", d: "Ouve a queixa, entende o momento e conduz até o agendamento, sem soar como robô." },
  { t: "Você escolhe o modo", d: "Manual, pré-qualificação ou completo, por número ou por conversa." },
  { t: "Passa para a consultora", d: "Quem está pronta, quem é cliente da casa e os casos de saúde vão para a pessoa certa." },
  { t: "App da equipe", d: "Chat de todos os números, funil, agenda, tarefas e ficha de cada cliente num só lugar." },
  { t: "Indicadores que abrem a lista", d: "Leads, agendamentos, comparecimento e vendas por origem e por anúncio. Cada número mostra quem é." },
];

const faq = [
  { q: "Preciso trocar meu WhatsApp?", a: "Não. A Evah conecta aos números que a clínica já usa." },
  { q: "A equipe perde o controle das conversas?", a: "Não. Qualquer pessoa pode assumir a conversa a qualquer momento, e a Evah pausa." },
  { q: "Substitui meu CRM?", a: "Pode substituir. O app tem chat, funil, agenda, tarefas e indicadores, e é ajustado ao jeito da sua clínica." },
];

export default function Page() {
  return (
    <main>
      <Header />
      <HeroProduto
        nome="Evah Atendimento"
        titulo={<>Nenhum lead <span className="text-accent-strong">esperando resposta</span></>}
        sub="A IA atende os leads no WhatsApp na hora, qualifica e agenda. A equipe recebe quem está pronta e trabalha num app feito para a clínica."
        lateral={<CartaoLista titulo="Do primeiro oi à agenda" rotulo="exemplo" itens={["Lead chega pelo anúncio às 22h.", "A Evah responde, escuta a queixa e explica como funciona.", "Avaliação marcada com dia e hora.", "A consultora recebe a ficha com o resumo da conversa."]} />}
      />
      <section className="max-w-content mx-auto px-4 md:px-8 pb-20">
        <Titulo eyebrow="O que faz" titulo="Atendimento rápido e equipe organizada" />
        <GradeRecursos itens={recursos} />
      </section>
      <Testimonial />
      <Faq itens={faq} />
      <OutrasSolucoes atual="/evah-atendimento" />
      <FaixaCta titulo="Quantos leads ficam sem resposta na sua clínica?" texto="Vamos olhar juntas o seu atendimento e onde estão as oportunidades perdidas." />
      <Footer />
    </main>
  );
}
