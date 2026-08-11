import Image from "next/image";

export default function Problem() {
  return (
    <section className="max-w-content mx-auto px-8 py-24">
      <div className="font-mono text-xs uppercase tracking-wide text-accent-strong text-center">
        O problema
      </div>
      <h2 className="font-display font-bold text-[34px] text-text-primary text-center mt-2 mb-8">
        Às 22h, sua clínica já perdeu esse paciente.
      </h2>
      <div className="grid md:grid-cols-2 rounded-2xl overflow-hidden shadow-md">
        <div className="bg-surface p-10 flex flex-col justify-center gap-6">
          <p className="text-base text-text-secondary leading-relaxed">
            A confiança de quem manda mensagem cai a cada minuto sem resposta. Não é
            falta de vontade da equipe — é falta de tempo, gente e estrutura para
            atender fora do horário, no pico ou nos fins de semana.
          </p>
          <div className="flex gap-8">
            <div>
              <div className="font-mono text-3xl text-accent-strong">32%</div>
              <div className="text-[13px] text-text-tertiary max-w-[150px]">dos leads sem resposta na 1ª hora</div>
            </div>
            <div>
              <div className="font-mono text-3xl text-accent-strong">41%</div>
              <div className="text-[13px] text-text-tertiary max-w-[150px]">das mensagens fora do horário comercial</div>
            </div>
          </div>
        </div>
        <div className="relative min-h-[320px]">
          <Image src="/clinica-fechada.png" alt="Clínica fechada à noite, celular com mensagens não respondidas" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}
