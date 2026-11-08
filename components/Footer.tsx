import Link from "next/link";
import { whatsappDiagnostico, whatsappExibicao } from "./contato";
import { produtos } from "./ui";

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle px-4 md:px-14 py-10 flex flex-wrap justify-between items-start gap-6">
      <div>
        <div className="font-display font-bold text-accent-strong">Evah</div>
        <div className="text-xs text-text-tertiary">Uma solução Kotobuki · consultoria e desenvolvimento em IA</div>
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
        <Link href="/#consultoria">Consultoria</Link>
        {produtos.map((p) => <Link key={p.slug} href={p.slug}>{p.nome}</Link>)}
        <a href={whatsappDiagnostico} target="_blank" rel="noopener">WhatsApp {whatsappExibicao}</a>
      </div>
      <div className="text-sm text-text-tertiary">© 2026 Kotobuki</div>
    </footer>
  );
}
