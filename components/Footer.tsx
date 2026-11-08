import { whatsappDiagnostico, whatsappExibicao } from "./contato";

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle px-4 md:px-14 py-10 flex flex-wrap justify-between items-center gap-4">
      <div>
        <div className="font-display font-bold text-accent-strong">Evah</div>
        <div className="text-xs text-text-tertiary">Uma solução Kotobuki</div>
      </div>
      <div className="flex flex-wrap gap-6 text-sm text-text-tertiary">
        <a href="#metodo" className="text-sm">Como a IA trabalha</a>
        <a href="#evah-grupo" className="text-sm">Evah Grupo</a>
        <a href="#faq" className="text-sm">Perguntas</a>
        <a href={whatsappDiagnostico} target="_blank" rel="noopener" className="text-sm">WhatsApp {whatsappExibicao}</a>
      </div>
      <div className="text-sm text-text-tertiary">© 2026 Evah</div>
    </footer>
  );
}
