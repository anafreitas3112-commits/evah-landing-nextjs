export default function Footer() {
  return (
    <footer className="border-t border-border-subtle px-14 py-10 flex flex-wrap justify-between items-center gap-4">
      <div className="font-display font-bold text-accent-strong">Evah</div>
      <div className="flex gap-6 text-sm text-text-tertiary">
        <a href="#como-funciona" className="text-sm">Como funciona</a>
        <a href="#faq" className="text-sm">FAQ</a>
        <span>contato@evah.com.br</span>
      </div>
      <div className="text-sm text-text-tertiary">© 2026 Evah</div>
    </footer>
  );
}
