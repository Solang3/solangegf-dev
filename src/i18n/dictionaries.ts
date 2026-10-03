export type Locale = "en" | "es";
export const defaultLocale: Locale = "en";
export const locales: Locale[] = ["en", "es"];

export type Dict = (typeof dictionaries)["en"];

export const dictionaries = {
  en: {
    nav: { work: "work", services: "services", about: "about", contact: "contact", play: "play" },
    hero: {
      kicker: "INDEPENDENT FULL-STACK + AI ENGINEER",
      lead: "I take products from zero to live — web, e-commerce, AI, hosting.",
      sub: "20+ years building for the web. AI-native. Writing HTML since 1994, from Buenos Aires.",
      ctaServices: "what I do",
      ctaWork: "see work",
      ctaContact: "let's talk",
      play: "play with me",
      scroll: "SCROLL",
    },
    services: {
      label: "01 — SERVICES",
      labelAlt: "WHAT I BUILD",
      title: "Your product, built end-to-end.",
      intro:
        "Solo, senior, and AI-native — from the design system to the deploy. I take on projects when they're worth it.",
      cta: "Free consult →",
      items: [
        { title: "Web Development", desc: "Next.js, React, TypeScript, custom design systems — fast, accessible, built to last." },
        { title: "E-commerce", desc: "Headless WooCommerce / Magento, MercadoPago, catalogs and checkouts that convert." },
        { title: "AI Integration", desc: "Agentic workflows, the Anthropic SDK, MCP, automation — AI woven into real products." },
        { title: "Automation + Analytics", desc: "Content that publishes itself, GA4 / Tag Manager measurement and SEO that moves numbers — through my agency, Skala Ecommerce." },
        { title: "Hosting + Ops", desc: "Vercel, Cloudflare, Plesk, SEO and performance. I ship it and keep it running." },
      ],
    },
    work: {
      label: "02 — SELECTED WORK",
      labelAlt: "SELECTED WORK",
      caseStudy: "case study",
      viewLive: "live ↗",
      more: "And client work via Globant, NTT DATA and Youwe —",
      moreLink: "the full archive",
    },
    about: {
      label: "03 — ABOUT",
      labelAlt: "STACK & SKILLS",
      statement:
        "I started writing HTML while studying architecture. I swapped the Rotring for code and never stopped — from tables and frames to React, and today I build AI-native with agents.",
      available: "AVAILABLE FOR: FREELANCE · FULL-TIME · AR + EU · REMOTE",
      downloadCv: "Download CV",
      stats: [
        { n: "1994", l: "first line of HTML" },
        { n: "20+", l: "years shipping for the web" },
        { n: "10+", l: "global brands" },
      ],
      clientsLabel: "CLIENTS & TEAMS",
      stack: "STACK",
    },
    contact: {
      label: "04 — CONTACT / LET'S BUILD",
      headline: ["Let's build", "something."],
      body:
        "Have a product to build? Let's talk. I also consider full-time senior roles where AI is a first-class tool.",
      footerLeft: "SOLANGE GONZALEZ · BUENOS AIRES · AR + EU",
      footerRight: "© 2026 — HTML SINCE 1994",
      channels: { email: "EMAIL", cv: "CV", cvValue: "download PDF" },
    },
  },
  es: {
    nav: { work: "trabajo", services: "servicios", about: "sobre mí", contact: "contacto", play: "play" },
    hero: {
      kicker: "FULL-STACK + AI · INDEPENDIENTE",
      lead: "Llevo productos de cero a producción — web, e-commerce, AI, hosting.",
      sub: "20+ años construyendo para la web. AI-native. Escribo HTML desde 1994, desde Buenos Aires.",
      ctaServices: "qué hago",
      ctaWork: "ver trabajo",
      ctaContact: "hablemos",
      play: "play with me",
      scroll: "SCROLL",
    },
    services: {
      label: "01 — SERVICIOS",
      labelAlt: "LO QUE CONSTRUYO",
      title: "Tu producto, construido end-to-end.",
      intro:
        "Sola, senior y AI-native — del design system al deploy. Tomo proyectos cuando valen la pena.",
      cta: "Consulta sin cargo →",
      items: [
        { title: "Desarrollo Web", desc: "Next.js, React, TypeScript, design systems propios — rápido, accesible, hecho para durar." },
        { title: "E-commerce", desc: "WooCommerce / Magento headless, MercadoPago, catálogos y checkouts que convierten." },
        { title: "Integración AI", desc: "Workflows agénticos, el SDK de Anthropic, MCP, automatización — AI integrada en productos reales." },
        { title: "Automatización + Analytics", desc: "Contenido que se publica solo, medición con GA4 / Tag Manager y SEO que mueve números — desde mi agencia, Skala Ecommerce." },
        { title: "Hosting + Ops", desc: "Vercel, Cloudflare, Plesk, SEO y performance. Lo lanzo y lo mantengo andando." },
      ],
    },
    work: {
      label: "02 — TRABAJO SELECCIONADO",
      labelAlt: "SELECTED WORK",
      caseStudy: "ver caso",
      viewLive: "en vivo ↗",
      more: "Y trabajo para clientes vía Globant, NTT DATA y Youwe —",
      moreLink: "el archivo completo",
    },
    about: {
      label: "03 — SOBRE MÍ",
      labelAlt: "STACK & SKILLS",
      statement:
        "Empecé escribiendo HTML mientras cursaba arquitectura. Cambié el Rotring por el código y no paré — de tables y frames a React, y hoy construyo AI-native con agentes.",
      available: "DISPONIBLE PARA: FREELANCE · FULL-TIME · AR + UE · REMOTE",
      downloadCv: "Descargar CV",
      stats: [
        { n: "1994", l: "primera línea de HTML" },
        { n: "20+", l: "años construyendo para la web" },
        { n: "10+", l: "marcas globales" },
      ],
      clientsLabel: "CLIENTES & EQUIPOS",
      stack: "STACK",
    },
    contact: {
      label: "04 — CONTACTO / HABLEMOS",
      headline: ["Construyamos", "algo."],
      body:
        "¿Tenés un producto para construir? Hablemos. También considero roles full-time senior donde la AI sea parte del flujo.",
      footerLeft: "SOLANGE GONZALEZ · BUENOS AIRES · AR + UE",
      footerRight: "© 2026 — HTML DESDE 1994",
      channels: { email: "EMAIL", cv: "CV", cvValue: "descargar PDF" },
    },
  },
};
