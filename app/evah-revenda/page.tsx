import type { Metadata } from "next";
import Header from "@/components/Header";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import { TelaRevenda } from "@/components/Telas";
import { FaixaCta, GradeRecursos, HeroProduto, OutrasSolucoes, Titulo } from "@/components/ui";

export const metadata: Metadata = {
  title: "Evah Revenda — quem já gosta da clínica volta a comprar",
  description: "IA para recuperar ex-clientes, lembrar renovações e organizar a venda para quem está em tratamento.",
};

const recursos = [
  { t: "Recupera ex-clientes", d: "Trilhas de mensagens para trazer de volta quem sumiu, com tipos de abordagem diferentes para comparar o retorno." },
  { t: "Lista na hora certa", d: "A consultora pede uma lista de ex-clientes quando tem tempo para ligar, em vez de tarefas acumulando." },
  { t: "Renovação no prazo", d: "Lembra quem está terminando o tratamento antes que esfrie." },
  { t: "Venda para quem está em tratamento", d: "Oferta registrada na ficha da cliente, com valor, status e retorno, vista por toda a equipe." },
  { t: "Perfil de cada cliente", d: "Dor, interesse e momento, vindos do grupo e das conversas, para oferecer a coisa certa." },
  { t: "Vendas separadas por origem", d: "Novo, recuperação, renovação e indicação em indicadores diferentes. Você sabe de onde vem cada real." },
];

const faq = [
  { q: "Vai mandar mensagem em massa para minha base?", a: "Não. Os envios são em ritmo controlado, com textos aprovados por você e cuidado com o número da clínica." },
  { q: "Funciona com o sistema de vendas que eu já tenho?", a: "Sim. Importamos as vendas e os agendamentos para saber quem está ativa, quem sumiu e quem renova." },
];

export default function Page() {
  return (
    <main>
      <Header />
      <HeroProduto
        nome="Evah Revenda"
        titulo={<>Quem já gosta da clínica <span className="text-accent-strong">volta a comprar</span></>}
        sub="Recuperação de ex-clientes, renovação e venda para quem está em tratamento, com a base organizada e cada oferta registrada."
        lateral={<TelaRevenda />}
      />
      <section className="max-w-content mx-auto px-4 md:px-8 pb-20">
        <Titulo eyebrow="O que faz" titulo="Sua base de clientes trabalhando por você" sub="Vender para quem já conhece a clínica custa menos do que conquistar alguém novo." />
        <GradeRecursos itens={recursos} />
      </section>
      <Faq itens={faq} />
      <OutrasSolucoes atual="/evah-revenda" />
      <FaixaCta titulo="Quantas ex-clientes estão paradas na sua base?" texto="Vamos olhar juntas a sua base e montar a primeira trilha de recuperação." />
      <Footer />
    </main>
  );
}
