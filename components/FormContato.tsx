"use client";
import { useState } from "react";

// Não grava nada em servidor: monta a mensagem e abre o WhatsApp da Ana.
const numero = "5511963511704";

export default function FormContato() {
  const [f, setF] = useState({ nome: "", clinica: "", cidade: "", grupo: "", tipo: "" });
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setF({ ...f, [k]: e.target.value });
  const enviar = (e: React.FormEvent) => {
    e.preventDefault();
    const txt = `Oi, Ana! Quero o diagnóstico gratuito.\nNome: ${f.nome}\nClínica: ${f.clinica}\nCidade: ${f.cidade}\nPerfil: ${f.tipo || "não informado"}\nGrupo VIP: ${f.grupo || "não informado"}`;
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(txt)}`, "_blank", "noopener");
  };
  const campo = "w-full h-12 rounded-lg border border-white/25 bg-white/10 px-3.5 text-white placeholder:text-white/60 outline-none focus:border-white";
  return (
    <form onSubmit={enviar} className="w-full max-w-[520px] grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
      <input required className={campo} placeholder="Seu nome" value={f.nome} onChange={set("nome")} aria-label="Seu nome" />
      <input required className={campo} placeholder="Clínica ou rede" value={f.clinica} onChange={set("clinica")} aria-label="Clínica ou rede" />
      <input required className={campo} placeholder="Cidade" value={f.cidade} onChange={set("cidade")} aria-label="Cidade" />
      <select required className={campo} value={f.tipo} onChange={set("tipo")} aria-label="Clínica ou rede">
        <option value="" className="text-black">Clínica ou rede?</option>
        <option className="text-black">Clínica independente</option>
        <option className="text-black">Rede de 2 a 5 unidades</option>
        <option className="text-black">Rede de 6 a 20 unidades</option>
        <option className="text-black">Rede com mais de 20 unidades</option>
      </select>
      <select className={campo + " sm:col-span-2"} value={f.grupo} onChange={set("grupo")} aria-label="Tamanho do grupo VIP">
        <option value="" className="text-black">Tamanho do grupo VIP</option>
        <option className="text-black">Ainda não tenho grupo</option>
        <option className="text-black">Até 150 pessoas</option>
        <option className="text-black">150 a 500 pessoas</option>
        <option className="text-black">Mais de 500 pessoas</option>
      </select>
      <button type="submit" className="sm:col-span-2 h-12 rounded-lg bg-white font-semibold hover:opacity-90" style={{ color: "var(--green-800)" }}>
        Quero o diagnóstico gratuito
      </button>
      <p className="sm:col-span-2 text-xs text-[var(--green-200)] text-center">Ao enviar, abre o WhatsApp com seus dados para a Ana.</p>
    </form>
  );
}
