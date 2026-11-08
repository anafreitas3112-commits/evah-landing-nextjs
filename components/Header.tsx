import { whatsappDiagnostico } from "./contato";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 flex items-center gap-6 md:gap-9 h-[68px] md:h-[76px] px-4 md:px-14 border-b border-border-subtle bg-canvas/95 backdrop-blur">
      <a href="#topo" className="font-display font-bold text-xl text-accent-strong">Evah</a>
      <nav className="hidden md:flex gap-7 flex-1">
        <a href="#metodo" className="text-sm text-text-secondary">Como a IA trabalha</a>
        <a href="#sob-medida" className="text-sm text-text-secondary">Sob medida</a>
        <a href="#evah-grupo" className="text-sm text-text-secondary">Evah Grupo</a>
        <a href="#ecossistema" className="text-sm text-text-secondary">Ecossistema</a>
        <a href="#faq" className="text-sm text-text-secondary">Perguntas</a>
      </nav>
      <a
        href={whatsappDiagnostico}
        target="_blank"
        rel="noopener"
        className="ml-auto md:ml-0 rounded-lg bg-accent-strong text-white text-sm font-semibold px-4 py-2 hover:bg-green-800 whitespace-nowrap"
      >
        Diagnóstico gratuito
      </a>
    </header>
  );
}
