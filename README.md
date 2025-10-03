# TDS Website

Een moderne **TypeScript** website voor TDS Webontwikkeling, geoptimaliseerd voor Netlify deployment.

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat&logo=netlify&logoColor=white)](https://www.netlify.com/)

## Project Structuur

```
├── src/                   # Source code
│   ├── pages/            # HTML pages
│   │   ├── index.html
│   │   ├── hoe-werken-wij.html
│   │   ├── realisaties.html
│   │   └── contact.html
│   ├── scripts/          # TypeScript source
│   │   └── script.ts
│   ├── styles/           # CSS styles
│   │   └── style.css
│   ├── components/       # Reusable components
│   └── assets/           # Static assets
│       ├── images/
│       └── icons/
├── config/               # Configuration files
│   ├── tsconfig.json
│   └── netlify.toml
├── docs/                 # Documentation
├── public/               # Public static files
├── dist/                 # Build output (generated)
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── netlify.toml          # Netlify deployment configuration
└── README.md             # This file
```

## Pagina's

- **Home** (`index.html`) - Welkomstpagina met features
- **Hoe werken wij** (`hoe-werken-wij.html`) - Werkwijze en waarden
- **Realisaties** (`realisaties.html`) - Portfolio met projecten
- **Contact** (`contact.html`) - Contactformulier en gegevens

## Development

### Vereisten
- Node.js 18+
- npm

### Installatie
```bash
npm install
```

### Development server
```bash
npm run dev
```

### Build voor productie
```bash
npm run build
```

### Lokale server
```bash
npm run serve
```

## Deployment naar Netlify

1. Push je code naar een Git repository
2. Verbind je repository met Netlify
3. Netlify detecteert automatisch de `netlify.toml` configuratie
4. De website wordt automatisch gebouwd en gedeployed

### Build instellingen voor Netlify
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: 18

## Features

- ✅ TypeScript voor type safety
- ✅ Responsive design
- ✅ Mobile-first approach
- ✅ Form validatie
- ✅ Smooth scrolling
- ✅ Active navigation highlighting
- ✅ Modern CSS Grid en Flexbox
- ✅ SEO-vriendelijke HTML structuur
- ✅ Netlify deployment ready

## Browser ondersteuning

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Licentie

MIT License
