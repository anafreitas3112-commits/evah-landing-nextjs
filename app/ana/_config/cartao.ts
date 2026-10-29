// =====================================================================
// Arquivo central do cartão — altere aqui textos, contatos, links e cores.
// =====================================================================

export const cartao = {
  // Domínio público do site (ex.: "https://www.evah.ia.br"), sem o caminho.
  // Pode ficar vazio: na Vercel o projeto usa o domínio de produção
  // automaticamente. Também pode ser definido pela variável NEXT_PUBLIC_SITE_URL.
  siteUrl: "",
  // Caminho do cartão dentro do site.
  caminho: "/ana",

  nome: "Ana Lucia de Freitas",
  primeiroNome: "Ana Lucia",
  sobrenome: "de Freitas",
  atuacao: "Consultoria e Desenvolvimento de Soluções de Inteligência Artificial",
  frase: "Transformando processos e negócios com Inteligência Artificial.",
  pilares: ["Estratégia", "Tecnologia", "Resultados"],
  sobre:
    "Ajudo empresas e profissionais da saúde a utilizarem a Inteligência Artificial de forma estratégica, criando soluções que otimizam processos, melhoram o relacionamento com clientes e geram resultados reais.",

  empresa: "Kotobuki",
  assinatura: "Uma solução",

  whatsapp: {
    exibicao: "(11) 96351-1704",
    e164: "+5511963511704",
    link: "https://wa.me/qr/CCTOCMB7CALIO1",
  },

  endereco: {
    rua: "Av. Fabio Ferraz Bicudo, 423",
    bairro: "Jardim Esplanada",
    cidade: "Indaiatuba",
    uf: "SP",
    pais: "Brasil",
  },

  evah: {
    nome: "Evah",
    link: "https://www.evah.ia.br",
    descricao: "Evah — Soluções de Inteligência Artificial para clínicas.",
    resumo: "IA para clínicas",
  },

  cores: {
    fundo: "#06201F",
    fundo2: "#072625",
    turquesa: "#2EC4B6",
    aqua: "#6FDCCB",
    aquaClaro: "#B8F0E6",
    offWhite: "#F4F1EA",
    textoSuave: "#C4D6D2",
  },
} as const;

export const enderecoCompleto = `${cartao.endereco.rua} — ${cartao.endereco.bairro}, ${cartao.endereco.cidade}/${cartao.endereco.uf}`;

export const mapsLink =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(
    `${cartao.endereco.rua} - ${cartao.endereco.bairro}, ${cartao.endereco.cidade} - ${cartao.endereco.uf}`
  );

/** Domínio público: config → variável de ambiente → domínio de produção da Vercel. */
export function urlPublica(): string {
  const bruta =
    cartao.siteUrl ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "") ||
    "http://localhost:3000";
  return bruta.replace(/\/$/, "");
}

/** Endereço completo do cartão (domínio + caminho). */
export function urlCartao(): string {
  return urlPublica() + cartao.caminho;
}
