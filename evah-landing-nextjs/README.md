# Evah — Landing Page (Next.js)

Landing page comercial da Evah, pronta para deploy na Vercel.

## Rodar localmente
```
npm install
npm run dev
```

## Deploy na Vercel
1. Suba este projeto para um repositório Git (GitHub/GitLab/Bitbucket).
2. Em vercel.com → New Project → importe o repositório.
3. Framework Preset: Next.js (detectado automaticamente). Build command e output ficam no padrão.
4. Deploy.

## Estrutura
- `app/` — App Router (layout, page, estilos globais)
- `components/` — uma seção da landing por componente (Hero, Stats, Problem, HowItWorks, Benefits, Comparison, Testimonial, Roi, Faq, CtaFinal, Footer)
- Cores e tokens de marca em `app/globals.css` (variáveis CSS), consumidos via Tailwind (`tailwind.config.ts`)

## Placeholders pendentes
Busque `[placeholder]` no código — há números agregados, depoimento de cliente e dados de contato que precisam ser substituídos por informação real antes de publicar.
