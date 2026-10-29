import type { Metadata, Viewport } from "next";
import { cartao, urlCartao, urlPublica } from "./_config/cartao";
import "./cartao.css";

const titulo = `${cartao.nome} | Consultoria em Inteligência Artificial`;
const descricao = `${cartao.atuacao}. ${cartao.frase}`;

// A imagem de prévia (opengraph-image.jpg) e os ícones (icon.svg,
// apple-icon.png) desta pasta são aplicados automaticamente pelo Next.js.
export const metadata: Metadata = {
  metadataBase: new URL(urlPublica()),
  title: titulo,
  description: descricao,
  alternates: { canonical: urlCartao() },
  openGraph: {
    type: "profile",
    locale: "pt_BR",
    url: urlCartao(),
    siteName: cartao.nome,
    title: titulo,
    description: descricao,
  },
  twitter: { card: "summary_large_image", title: titulo, description: descricao },
};

export const viewport: Viewport = {
  themeColor: cartao.cores.fundo,
};

export default function CartaoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
      />
      <style>{`html,body{background:${cartao.cores.fundo}}`}</style>
      {children}
    </>
  );
}
