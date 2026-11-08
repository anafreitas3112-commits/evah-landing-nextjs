import type { Metadata } from "next";
import Header from "@/components/Header";
import EvahGrupo from "@/components/EvahGrupo";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import { CartaoLista, FaixaCta, GradeRecursos, HeroProduto, OutrasSolucoes, Titulo } from "@/components/ui";

export const metadata: Metadata = {
  title: "Evah Grupo — o grupo VIP da sua clínica volta a vender",
  description: "IA para grupos de WhatsApp de clínicas: planeja, posta com sua aprovação, conversa com as clientes e mostra quem chamar no privado.",
};

const como = [
  { t: "Planeja com você", d: "No chat do app você conta a campanha e a Evah pergunta o que falta: pacotes, valores, artes, prazo." },
  { t: "Prévia no seu WhatsApp", d: "Cada post e cada mensagem no privado chegam antes para você aprovar." },
  { t: "Conversa no grupo", d: "Boas-vindas, dinâmica de pontos e respostas chamando cada cliente pelo nome, no tom da clínica." },
  { t: "Separa quem quer comprar", d: "Quem diz “quero” vai para a equipe com o contexto da conversa." },
  { t: "Esperando você", d: "Uma tela com tudo que depende da dona, por prioridade, que abre direto na conversa." },
  { t: "Indicadores do grupo", d: "Vendas, ofertas em negociação e ranking de quem mais participa." },
];

const faq = [
  { q: "Preciso criar um grupo novo?", a: "Não. A Evah entra no grupo que a clínica já tem." },
  { q: "Meu grupo é pequeno. Vale a pena?", a: "O diagnóstico mostra quanto ele pode render, e a dinâmica de pontos e indicação ajuda a trazer gente." },
  { q: "Minha equipe já posta no grupo.", a: "A equipe posta; a Evah planeja, conversa, conhece cada cliente e mostra o que vendeu." },
  { q: "E dúvidas de saúde?", a: "Saúde, contraindicação e reclamação vão direto para a equipe. A Evah não responde sobre isso." },
];

export default function Page() {
  return (
    <main>
      <Header />
      <HeroProduto
        nome="Evah Grupo"
        titulo={<>O grupo VIP da sua clínica volta a <span className="text-accent-strong">conversar e vender</span></>}
        sub="A porta de entrada do ecossistema Evah. Entra no grupo de WhatsApp que você já tem, sem trocar sistema e sem mudar a rotina da equipe."
        cta="Quero o diagnóstico gratuito do grupo"
        lateral={<CartaoLista titulo="Semana do grupo" rotulo="exemplo" itens={["Segunda: dica de cuidado, sem oferta.", "Quarta: antes e depois com a história da cliente.", "Quinta: oferta com prazo curto, prévia aprovada no seu WhatsApp.", "Sexta: lista de quem reagiu para chamar no privado."]} />}
      />
      <EvahGrupo />
      <section className="max-w-content mx-auto px-4 md:px-8 pb-20">
        <Titulo eyebrow="No dia a dia" titulo="Você no controle, a Evah fazendo" />
        <GradeRecursos itens={como} />
      </section>
      <Faq itens={faq} />
      <OutrasSolucoes atual="/evah-grupo" />
      <FaixaCta titulo="Seu grupo está parado?" texto="Em 40 minutos, sem custo, você sai com um retrato do grupo e 3 ações para vender mais por ele ainda este mês." botao="Agendar meu diagnóstico" />
      <Footer />
    </main>
  );
}
