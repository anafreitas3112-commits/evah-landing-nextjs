import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Metodo from "@/components/Metodo";
import SobMedida from "@/components/SobMedida";
import EvahGrupo from "@/components/EvahGrupo";
import Ecossistema from "@/components/Ecossistema";
import Comparison from "@/components/Comparison";
import Testimonial from "@/components/Testimonial";
import Faq from "@/components/Faq";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Problem />
      <Metodo />
      <SobMedida />
      <EvahGrupo />
      <Ecossistema />
      <Comparison />
      <Testimonial />
      <Faq />
      <CtaFinal />
      <Footer />
    </main>
  );
}
