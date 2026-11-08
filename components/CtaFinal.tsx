import { whatsappDiagnostico, whatsappExibicao } from "./contato";

export default function CtaFinal() {
  return (
    <section id="cta" className="py-20 px-4 md:px-8 flex justify-center" style={{ background: "var(--green-700)" }}>
      <div className="max-w-[720px] w-full flex flex-col items-center text-center gap-4">
        <div className="font-mono text-xs uppercase tracking-wide text-[var(--green-200)]">Comece pelo grupo</div>
        <h2 className="font-display font-bold text-[28px] md:text-[34px] text-white leading-tight">
          Já pensou ter uma IA como consultora da sua clínica?
        </h2>
        <p className="text-[var(--green-100)] max-w-[540px] leading-relaxed">
          Agende o diagnóstico gratuito do seu grupo VIP. Em 40 minutos você sai com 3 ações para vender
          mais por ele ainda este mês.
        </p>
        <a href={whatsappDiagnostico} target="_blank" rel="noopener" className="rounded-lg bg-white font-semibold px-6 py-3.5 hover:opacity-90 mt-2" style={{ color: "var(--green-800)" }}>
          Falar com a Ana no WhatsApp
        </a>
        <span className="text-sm text-[var(--green-200)]">{whatsappExibicao}</span>
      </div>
    </section>
  );
}
