import Link from "next/link";
import { whatsappDiagnostico } from "./contato";
import { produtos } from "./ui";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-border-subtle bg-canvas/95 backdrop-blur">
      <div className="flex items-center gap-6 md:gap-8 h-[64px] md:h-[72px] px-4 md:px-14">
        <Link href="/" className="font-display font-bold text-xl text-accent-strong">Evah</Link>
        <nav className="hidden lg:flex gap-6 flex-1">
          <Link href="/consultoria" className="text-sm text-text-secondary">Consultoria</Link>
          {produtos.map((p) => (
            <Link key={p.slug} href={p.slug} className="text-sm text-text-secondary">{p.nome}</Link>
          ))}
        </nav>
        <a href={whatsappDiagnostico} target="_blank" rel="noopener" className="ml-auto lg:ml-0 rounded-lg bg-accent-strong text-white text-sm font-semibold px-4 py-2 hover:bg-green-800 whitespace-nowrap">
          Falar com a Ana
        </a>
      </div>
      <nav className="lg:hidden flex gap-5 overflow-x-auto px-4 pb-3 text-sm whitespace-nowrap">
        <Link href="/consultoria" className="text-text-secondary">Consultoria</Link>
        {produtos.map((p) => (
          <Link key={p.slug} href={p.slug} className="text-text-secondary">{p.nome}</Link>
        ))}
      </nav>
    </header>
  );
}
