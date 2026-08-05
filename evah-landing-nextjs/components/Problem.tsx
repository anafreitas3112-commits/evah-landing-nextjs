export default function Problem() {
  return (
    <section className="bg-inverse py-22 px-8">
      <div className="max-w-[900px] mx-auto flex flex-col items-center text-center gap-5">
        <div className="font-mono text-xs uppercase tracking-wide text-[var(--green-300)]">
          O problema
        </div>
        <h2 className="font-display font-bold text-4xl text-text-on-inverse max-w-2xl leading-snug">
          Às 22h, sua clínica já perdeu esse paciente.
        </h2>
        <p className="text-[17px] text-[var(--ink-300)] max-w-xl leading-relaxed">
          A confiança de quem manda mensagem cai a cada minuto sem resposta. Não é
          falta de vontade da equipe — é falta de tempo, gente e estrutura para
          atender fora do horário, no pico ou nos fins de semana.
        </p>
        <div className="flex gap-16 mt-2">
          <div>
            <div className="font-mono text-4xl text-[var(--green-300)]">32%</div>
            <div className="text-sm text-[var(--ink-400)] max-w-[180px]">
              dos leads sem resposta na 1ª hora
            </div>
          </div>
          <div>
            <div className="font-mono text-4xl text-[var(--green-300)]">41%</div>
            <div className="text-sm text-[var(--ink-400)] max-w-[180px]">
              das mensagens fora do horário comercial
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
