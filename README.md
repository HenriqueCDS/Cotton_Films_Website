# Cotton Films Website

Site institucional (landing page) da produtora **Cotton Films**, desenvolvido em React + Vite,
com animações de scroll, carrossel de galeria e layout totalmente responsivo.

🔗 Repositório: https://github.com/HenriqueCDS/Cotton_Films_Website

## Tecnologias

- **React 18** + **Vite 5** — build e dev server
- **GSAP** / **@gsap/react** — animações
- **Framer Motion** — transições e menu
- **Lenis** — smooth scroll
- **AOS** — animações on scroll
- **Swiper** / **split-type** — carrossel e efeitos de texto
- **ESLint** — padronização de código

## Estrutura

```
Cotton_Films_Website/
├── app/                      # Aplicação React (Vite)
│   ├── src/
│   │   ├── App.jsx           # Composição das seções da página
│   │   ├── main.jsx          # Entry point
│   │   ├── assets/           # Imagens, vídeos e ícones
│   │   └── components/
│   │       ├── Banner/       # Topo com vídeo e menu (Menu/MenuToggle)
│   │       ├── AboutText/    # Texto de apresentação
│   │       ├── Galery/       # Galeria com carrossel (ButtonsCarrousel)
│   │       ├── ImageBanner/  # Banner de imagem
│   │       ├── Services/     # Seção de serviços
│   │       ├── About/        # Seção "sobre"
│   │       ├── TeamOur/      # Seção da equipe
│   │       └── Footer/       # Rodapé
│   ├── Fonts/                # Fonte Satoshi (OTF / Variable / WEB)
│   ├── public/
│   └── vite.config.js
└── README.md
```

## Como rodar

Pré-requisitos: Node.js 18+ e npm.

```bash
cd app
npm install
npm run dev      # ambiente de desenvolvimento (http://localhost:5173)
```

## Scripts (dentro de `app/`)

| Comando           | Descrição                                  |
| ----------------- | ------------------------------------------ |
| `npm run dev`     | Sobe o servidor de desenvolvimento (HMR)   |
| `npm run build`   | Gera a build de produção em `app/dist/`    |
| `npm run preview` | Serve localmente a build de produção       |
| `npm run lint`    | Roda o ESLint no projeto                   |
