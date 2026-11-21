# Lumière Estética Avançada (Página Demonstrativa)

Landing page estática de alta conversão para clínicas de estética avançada, criada como portfólio demonstrativo e template reutilizável com arquitetura **zero manutenção** (sem backend, sem banco de dados e sem mensalidade de plataforma).

Inspirada na estética *Quiet Luxury (Organic Alabaster)* e na composição editorial do componente Minimalist Hero, a página combina identidade visual refinada com micro-interações fluidas em Framer Motion e agendamento contextualizado no WhatsApp.

## Destaques da Experiência

- **Hero Editorial Minimalista (`MinimalistHero`):** grid assimétrico em 3 colunas com halo champagne animado, retrato editorial em arco, tipografia display (`Cormorant Garamond` + `Plus Jakarta Sans`) e navegação responsiva.
- **Guia Interativo "Qual seu objetivo hoje?" (`GoalSelector`):** abas animadas com `layoutId` que recomendam os protocolos mais alinhados ao objetivo da paciente e montam automaticamente a mensagem de WhatsApp.
- **Protocolos Clínicos (`ProceduresSection` + `ProcedureDetailModal`):** 6 tratamentos principais com modal de detalhes clínicos, indicações, duração média e agendamento individual por procedimento.
- **Autoridade, Galeria e Prova Social:** apresentação da direção clínica, galeria do espaço com lightbox ampliável e avaliações ilustrativas.
- **FAQ Animado e Localização:** acordeão suave, horários de atendimento, mapa incorporado do Batel (Curitiba) e botão direto de rotas.
- **Modo Demonstração Inteligente (`demoMode`):** ao clicar em qualquer CTA de WhatsApp durante uma apresentação comercial, abre uma prévia mostrando a mensagem exata que a paciente enviaria. Em produção (`demoMode: false`), todos os botões redirecionam direto para `https://wa.me/...`.

## Stack Técnica

- **React 19 + TypeScript + Vite 6** (build 100% estático em `dist/`)
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **Framer Motion** (`MotionConfig reducedMotion="user"`)
- **Lucide React** (ícones minimalistas)
- **Assets editoriais locais:** 6 imagens padronizadas em `public/images/`

## Estrutura de Pastas

```text
lumiere-estetica-demo/
├── public/
│   └── images/                  # 6 assets editoriais da clínica
├── src/
│   ├── components/              # Componentes modulares (Hero, Guia, Protocolos, Modais, FAQ)
│   ├── data/
│   │   └── clinicConfig.ts      # Arquivo único de configuração para adaptar a clientes reais
│   ├── utils/
│   │   └── whatsapp.ts          # Geração de URLs wa.me e payloads contextuais
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── tests/
│   └── whatsapp.test.mjs        # Testes unitários nativos (node --test)
├── index.html
├── package.json
└── vite.config.ts
```

## Como Rodar Localmente

Pré-requisito: Node.js 20+ (testado em Node 24).

```bash
npm install
npm run dev
```

### Testes e Build Estático de Produção

```bash
node --test tests/whatsapp.test.mjs
npm run build
npm run preview
```

## Como Adaptar para um Cliente Real

Toda a personalização fica centralizada em `src/data/clinicConfig.ts`:

1. Altere `demoMode: true` para `demoMode: false`.
2. Atualize `brand`, `contact` (`whatsappDigits`, endereço, horários e mapa), `specialist` (nome e registro profissional real `CRO`/`CRM`/`CRBM`), `procedures`, `reviews` e `faq`.
3. Substitua as fotos em `public/images/` pelas fotos reais enviadas pela clínica.
4. Atualize as meta tags e o JSON-LD em `index.html`.
5. Rode `npm run build` e publique a pasta `dist/`.

## Deploy Gratuito (Zero Manutenção)

Este repositório pode ser conectado diretamente a qualquer hospedagem estática gratuita:

- **Cloudflare Pages:** Build command `npm run build` | Output directory `dist`
- **Vercel:** Framework Preset `Vite` | Output directory `dist`
- **Netlify:** Build command `npm run build` | Publish directory `dist`

## Subindo como Repositório no GitHub

Dentro desta pasta (`lumiere-estetica-demo/`):

```bash
git init
git add .
git commit -m "feat: initial Lumiere Estetica Avancada demo site"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/lumiere-estetica-demo.git
git push -u origin main
```

---

*Projeto demonstrativo com dados ilustrativos, seguindo linguagem ética para saúde e estética (sem promessas de resultado garantido).*
