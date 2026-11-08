import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Evah — Uma IA como consultora da sua clínica",
  description:
    "A Evah analisa seus números, compara com as melhores práticas do mercado, monta o plano de ação com você e executa. Comece pelo diagnóstico gratuito do seu grupo VIP.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@600;700&family=Instrument+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
