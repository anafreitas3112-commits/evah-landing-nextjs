import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Channels from "@/components/Channels";
import Benefits from "@/components/Benefits";
import Comparison from "@/components/Comparison";
import Testimonial from "@/components/Testimonial";
import Roi from "@/components/Roi";
import Faq from "@/components/Faq";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Stats />
      <Problem />
      <HowItWorks />
      <Channels />
      <Benefits />
      <Comparison />
      <Testimonial />
      <Roi />
      <Faq />
      <CtaFinal />
      <Footer />
    </main>
  );
}
