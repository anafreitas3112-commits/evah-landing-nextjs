import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Evah — A operação comercial inteligente para clínicas",
  description:
    "Enquanto sua equipe cuida de quem já é paciente, a Evah atende, qualifica e agenda novos leads pelo WhatsApp — 24 horas por dia.",
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
