"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { IconeCompartilhar, IconeCopiar } from "./Icones";

function resolverUrl(urlConfig: string) {
  if (urlConfig && !urlConfig.includes("localhost")) return urlConfig;
  return typeof window !== "undefined" ? window.location.origin + window.location.pathname.replace(/\/$/, "") : urlConfig;
}

function useAviso() {
  const [aviso, setAviso] = useState("");
  useEffect(() => {
    if (!aviso) return;
    const t = setTimeout(() => setAviso(""), 2400);
    return () => clearTimeout(t);
  }, [aviso]);
  return [aviso, setAviso] as const;
}

async function copiar(texto: string) {
  try {
    await navigator.clipboard.writeText(texto);
    return true;
  } catch {
    const ta = document.createElement("textarea");
    ta.value = texto;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  }
}

export function BotaoCompartilhar({ url, titulo, texto }: { url: string; titulo: string; texto: string }) {
  const [aviso, setAviso] = useAviso();
  async function compartilhar() {
    const link = resolverUrl(url);
    if (navigator.share) {
      try {
        await navigator.share({ title: titulo, text: texto, url: link });
        return;
      } catch (e) {
        if ((e as DOMException)?.name === "AbortError") return;
      }
    }
    setAviso((await copiar(link)) ? "Link copiado!" : "Não foi possível copiar");
  }
  return (
    <>
      <button type="button" className="compartilhar" onClick={compartilhar}>
        <IconeCompartilhar />
        Compartilhar cartão
      </button>
      <Aviso texto={aviso} />
    </>
  );
}

export function BlocoQr({ url }: { url: string }) {
  const [svg, setSvg] = useState("");
  const [link, setLink] = useState(url);
  const [aviso, setAviso] = useAviso();

  useEffect(() => {
    const destino = resolverUrl(url);
    setLink(destino);
    QRCode.toString(destino, {
      type: "svg",
      margin: 1,
      errorCorrectionLevel: "M",
      color: { dark: "#06201F", light: "#F4F1EA" },
    }).then(setSvg);
  }, [url]);

  return (
    <div className="qr">
      <div
        className="qr-img"
        role="img"
        aria-label={`QR Code para abrir o cartão: ${link}`}
        dangerouslySetInnerHTML={{ __html: svg }}
      />
      <div className="qr-txt">
        <span>Aponte a câmera para abrir este cartão.</span>
        <button
          type="button"
          className="btn-sec"
          onClick={async () => setAviso((await copiar(link)) ? "Link copiado!" : "Não foi possível copiar")}
        >
          <IconeCopiar />
          Copiar link
        </button>
      </div>
      <Aviso texto={aviso} />
    </div>
  );
}

function Aviso({ texto }: { texto: string }) {
  return (
    <div className={`aviso${texto ? " on" : ""}`} role="status" aria-live="polite">
      {texto}
    </div>
  );
}
