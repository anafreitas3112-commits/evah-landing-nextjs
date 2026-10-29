import { cartao, enderecoCompleto, mapsLink, urlCartao } from "@/app/ana/_config/cartao";
import { Monograma } from "@/app/ana/_components/Monograma";
import { IconeContato, IconePino, IconeWhats, Seta } from "@/app/ana/_components/Icones";
import { BlocoQr, BotaoCompartilhar } from "@/app/ana/_components/Acoes";

export default function Page() {
  const url = urlCartao();
  const e = cartao.endereco;

  return (
    <div className="ca">
    <main className="pagina">
      <div className="planeta" aria-hidden />
      <div className="brilho" aria-hidden />

      <div className="cartao">
        <section className="hero">
          <Monograma className="monograma" />
          <h1 className="nome">
            {cartao.primeiroNome}
            <br />
            {cartao.sobrenome}
          </h1>
          <div className="traco" />
          <p className="atuacao">
            Consultoria e Desenvolvimento
            <br />
            de Soluções de Inteligência Artificial
          </p>
          <p className="frase">{cartao.frase}</p>
          <p className="pilares">
            {cartao.pilares.map((p, i) => (
              <span key={p}>
                {i > 0 && <span className="sep" aria-hidden>|</span>}
                {p.toUpperCase()}
              </span>
            ))}
          </p>
        </section>

        <section className="botoes" aria-label="Ações">
          <a className="btn btn-principal" href={cartao.whatsapp.link} target="_blank" rel="noopener noreferrer">
            <span className="poco poco-escuro"><IconeWhats /></span>
            <span className="rotulo">Conversar pelo WhatsApp</span>
            <Seta />
          </a>

          <a className="btn" href="/ana/contato.vcf">
            <span className="poco"><IconeContato /></span>
            <span className="rotulo">Salvar meu contato</span>
            <Seta />
          </a>

          <a className="btn btn-evah" href={cartao.evah.link} target="_blank" rel="noopener noreferrer">
            <span className="evah-marca">
              Evah<span className="evah-star" aria-hidden>✦</span>
            </span>
            <span className="evah-div" aria-hidden />
            <span className="rotulo duplo">
              <span>Conhecer a Evah</span>
              <small>{cartao.evah.resumo}</small>
            </span>
            <Seta />
          </a>

          <a className="btn" href={mapsLink} target="_blank" rel="noopener noreferrer">
            <span className="poco"><IconePino /></span>
            <span className="rotulo duplo">
              <span>Ver localização</span>
              <small>{enderecoCompleto}</small>
            </span>
            <Seta />
          </a>

          <BotaoCompartilhar url={url} titulo={cartao.nome} texto={`${cartao.nome} — ${cartao.atuacao}`} />
        </section>

        <svg className="ondas ondas-meio" aria-hidden viewBox="0 0 430 150" preserveAspectRatio="none">
          <g fill="none" strokeWidth="0.8">
            <path d="M0 70 C 120 10, 230 140, 430 40" stroke="#2EC4B6" strokeOpacity="0.55" />
            <path d="M0 80 C 120 22, 230 146, 430 52" stroke="#2EC4B6" strokeOpacity="0.45" />
            <path d="M0 90 C 120 34, 230 150, 430 64" stroke="#2EC4B6" strokeOpacity="0.38" />
            <path d="M0 100 C 120 46, 230 152, 430 76" stroke="#2EC4B6" strokeOpacity="0.3" />
            <path d="M0 110 C 120 58, 230 154, 430 88" stroke="#2EC4B6" strokeOpacity="0.24" />
            <path d="M0 60 C 140 120, 260 0, 430 90" stroke="#7FE0D0" strokeOpacity="0.35" />
          </g>
        </svg>

        <section className="sobre">
          <h2 className="titulo-sec">SOBRE</h2>
          <div className="traco traco-sec" />
          <p>{cartao.sobre}</p>
        </section>

        <section className="contato">
          <h2 className="titulo-sec">CONTATO</h2>
          <div className="traco traco-sec" />
          <div className="linhas">
            <a className="linha" href={cartao.whatsapp.link} target="_blank" rel="noopener noreferrer">
              <span className="ic-tq"><IconeWhats /></span>
              <span className="rotulo">{cartao.whatsapp.exibicao}</span>
              <Seta />
            </a>
            <a className="linha" href={mapsLink} target="_blank" rel="noopener noreferrer">
              <span className="ic-cl"><IconePino /></span>
              <span className="rotulo">
                {e.rua}
                <br />
                {e.bairro}, {e.cidade}/{e.uf}
              </span>
              <Seta />
            </a>
          </div>
          <BlocoQr url={url} />
        </section>

        <footer className="rodape">
          <div className="linha-fina" />
          <p className="assinatura">{cartao.assinatura}</p>
          <p className="empresa">{cartao.empresa.toUpperCase()}</p>
        </footer>
      </div>

      <svg className="ondas ondas-fim" aria-hidden viewBox="0 0 470 220" preserveAspectRatio="none">
        <g fill="none" strokeWidth="0.8">
          <path d="M0 30 C 110 40, 180 210, 235 210 C 290 210, 360 40, 470 30" stroke="#2EC4B6" strokeOpacity="0.55" />
          <path d="M0 46 C 110 56, 180 214, 235 214 C 290 214, 360 56, 470 46" stroke="#2EC4B6" strokeOpacity="0.42" />
          <path d="M0 62 C 110 72, 180 218, 235 218 C 290 218, 360 72, 470 62" stroke="#2EC4B6" strokeOpacity="0.32" />
          <path d="M0 78 C 110 88, 180 222, 235 222 C 290 222, 360 88, 470 78" stroke="#2EC4B6" strokeOpacity="0.22" />
          <path d="M0 14 C 120 20, 190 206, 235 206 C 280 206, 350 20, 470 14" stroke="#7FE0D0" strokeOpacity="0.35" />
        </g>
      </svg>
    </main>
    </div>
  );
}
