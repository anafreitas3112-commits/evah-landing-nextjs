export default function Header() {
  return (
    <header className="sticky top-0 z-10 flex items-center gap-9 h-[76px] px-14 border-b border-border-subtle bg-canvas">
      <div className="font-display font-bold text-xl text-accent-strong">Evah</div>
      <nav className="flex gap-7 flex-1">
        <a href="#como-funciona" className="text-sm text-text-secondary">Como funciona</a>
        <a href="#diferenciais" className="text-sm text-text-secondary">Diferenciais</a>
        <a href="#cases" className="text-sm text-text-secondary">Cases</a>
        <a href="#faq" className="text-sm text-text-secondary">Perguntas frequentes</a>
      </nav>
      <a
        href="#cta"
        className="rounded-lg bg-accent-strong text-white text-sm font-semibold px-4 py-2 hover:bg-green-800"
      >
        Agendar demonstração
      </a>
    </header>
  );
}
