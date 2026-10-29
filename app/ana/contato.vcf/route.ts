import { cartao, urlCartao } from "@/app/ana/_config/cartao";

export const dynamic = "force-static";

function esc(v: string) {
  return v.replace(/\\/g, "\\\\").replace(/,/g, "\\,").replace(/;/g, "\\;");
}

export function GET() {
  const e = cartao.endereco;
  const linhas = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${esc(cartao.sobrenome)};${esc(cartao.primeiroNome)};;;`,
    `FN:${esc(cartao.nome)}`,
    `ORG:${esc(cartao.empresa)}`,
    `TITLE:${esc(cartao.atuacao)}`,
    `TEL;TYPE=CELL,VOICE:${cartao.whatsapp.e164}`,
    `ADR;TYPE=WORK:;;${esc(`${e.rua} - ${e.bairro}`)};${esc(e.cidade)};${esc(e.uf)};;${esc(e.pais)}`,
    `URL:${urlCartao()}`,
    `NOTE:${esc(cartao.frase)}`,
    "END:VCARD",
  ];
  return new Response(linhas.join("\r\n") + "\r\n", {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="Ana-Lucia-de-Freitas.vcf"',
    },
  });
}
