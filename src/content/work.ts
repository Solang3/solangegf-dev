export type CaseStudy = {
  slug: string;
  index: string;
  title: string;
  tagline: string;
  status: string;
  years: string;
  role: string;
  liveUrl?: string;
  liveLabel?: string;
  image?: { src: string; alt: string; width: number; height: number };
  overview: string[];
  highlights: string[];
  stack: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "greenkedin",
    index: "01",
    title: "GreenkedIn",
    tagline: "A professional network for the cannabis industry in LATAM.",
    status: "IN PROGRESS",
    years: "2025 — now",
    role: "Solo — product, design & build",
    liveUrl: "https://greenkedin.lat",
    liveLabel: "greenkedin.lat",
    overview: [
      "The cannabis sector in Latin America — growers, dispensaries, growshops, professionals and brands — had no professional home of its own. GreenkedIn is that home: a network with a feed, profiles, connections, jobs and resources, built for the realities of the industry across the region.",
      "I built it end-to-end with Claude Code: Next.js (App Router with React Server Components and Server Actions), TypeScript, Prisma + Supabase (Postgres, Auth, Storage), Tailwind + shadcn/ui, Google OAuth, deployed on Vercel.",
      "Phase 2 is an ML layer (a FastAPI service) for matching and recommendations — connecting the right people, jobs and resources as the network grows.",
    ],
    highlights: [
      "Shipped solo, end-to-end, with agentic AI workflows.",
      "Server Components + Server Actions for a fast, mostly-server architecture.",
      "Auth, profiles, connections, a job board and a resources hub.",
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "Supabase", "shadcn/ui", "Vercel"],
  },
  {
    slug: "skala-ecommerce",
    index: "02",
    title: "Skala Ecommerce",
    tagline: "My ecommerce growth agency — SEO, analytics and automatic content.",
    status: "ACTIVE",
    years: "2026 — now",
    role: "Founder — strategy, product & build",
    liveUrl: "https://www.skalaecommerce.com",
    liveLabel: "skalaecommerce.com",
    image: { src: "/work/skala-ecommerce.png", alt: "Skala Ecommerce home page: “Tu ecommerce ya vende. Ahora hagámoslo escalar.”", width: 1440, height: 900 },
    overview: [
      "Skala is the agency I started for online stores that already sell and want to delegate growth: SEO, analytics, content creation, automatic content, engagement and promotion tracking — done by us, not just advised.",
      "It packages what I learned running my own store and building Desde EZE into services other shops can hire. The flagship is Automatic Content: connect a catalog (Tiendanube, WooCommerce, Shopify, Mercado Libre or a spreadsheet) and posts, stories and reels get designed and published on their own, triggered by new products, price drops, low stock and key dates like Hot Sale and Black Friday.",
      "The site itself is Next.js 15 + React 19 + TypeScript + Tailwind, with a diagnosis-request funnel, GA4 lead tracking, Search Console, a generated sitemap, Open Graph images and JSON-LD for SEO.",
    ],
    highlights: [
      "Seven services, from ecommerce audits to promotion tracking.",
      "Automatic Content with trigger-based publishing and Basic / Pro / Full plans.",
      "Measured funnel: generate_lead and click events in GA4, SEO set up from day one.",
    ],
    stack: ["Next.js 15", "React 19", "TypeScript", "Tailwind", "GA4", "Search Console"],
  },
  {
    slug: "desde-eze",
    index: "03",
    title: "Desde EZE",
    tagline: "Flight deals that find, write and publish themselves.",
    status: "ACTIVE",
    years: "2026 — now",
    role: "Solo — product, automation & build",
    liveUrl: "https://www.desdeeze.com",
    liveLabel: "desdeeze.com",
    image: { src: "/work/desde-eze.png", alt: "Desde EZE landing with a full-screen featured flight deal", width: 1440, height: 900 },
    overview: [
      "A flight-deals site for Argentina. Every day, before sunrise, my own tools scan 60+ destinations from Buenos Aires, Córdoba, Mendoza, Rosario, Salta, Tucumán and Neuquén, filter by schedules, layovers, travel time and real price, and flag the ones worth publishing.",
      "Publishing is automated end to end. Saving a deal writes a Markdown file to Google Drive, and the Netflix-style landing (Next.js 16 + React 19) picks it up through ISR with no CMS and no database for the content. From the same source, scheduled GitHub Actions publish posts, stories and reels to Instagram through the official API, with the reels rendered by Remotion and the access token renewing itself weekly.",
      "On top of that: a newsletter with double opt-in (Brevo + a consent log in Google Sheets), per-airport landing pages, an interactive world map, destination guides, eSIM and affiliate links through Travelpayouts.",
      "It is also the testing ground for analytics: GA4 custom events (view_offer, click_flight, click_hotel, generate_lead), UTM-tagged campaigns, Consent Mode that behaves differently in the EU and Argentina, and a privacy page aligned with Argentine law 25.326.",
    ],
    highlights: [
      "Content automation: Drive → landing → Instagram posts, stories and reels, with no manual steps.",
      "Programmatic video: reels rendered with Remotion from the same offer data.",
      "Analytics and consent: GA4 events, UTMs, Consent Mode, double opt-in newsletter.",
      "The engine behind Skala's Automatic Content service.",
    ],
    stack: ["Next.js 16", "React 19", "Remotion", "Instagram API", "GitHub Actions", "Google Drive API", "Brevo", "GA4"],
  },
  {
    slug: "mercado-de-semillas",
    index: "04",
    title: "Mercado de Semillas",
    tagline: "My own cannabis-seed e-commerce — germination to consumption.",
    status: "ACTIVE",
    years: "2020 — now",
    role: "Founder + builder",
    liveUrl: "https://mercadodesemillas.com",
    liveLabel: "mercadodesemillas.com",
    overview: [
      "A brand I built from scratch and still run: branding, UX, catalog, logistics and community. It's the living proof that I know what it takes to launch, grow and sustain a business — not just write code.",
      "The storefront is Next.js 15 + React 19 + Tailwind + Zustand over a headless WordPress backend with a custom plugin I wrote, with payments through MercadoPago.",
      "Lately it has become my lab for data-driven ecommerce: GTM and GA4 with standard ecommerce events (view_item, add_to_cart, begin_checkout, purchase, view_promotion), a seed-finder quiz with its own funnel analytics, a profitability report in the admin that crosses sales with product costs, a technical SEO overhaul against Search Console errors, and a Hot Sale engine that publishes and switches off discounts on a schedule.",
      "I'm a seller licensed by INASE (Argentina's national seed institute), with an industrial-hemp license in process at ARICCAME — operator-level knowledge of the regulatory landscape, not just the tech.",
    ],
    highlights: [
      "End-to-end ownership: brand, product, ops and code.",
      "Custom headless-WordPress plugin + MercadoPago checkout.",
      "INASE-licensed — real regulatory and logistics know-how.",
      "Analytics, SEO and promo automation running on a live store.",
    ],
    stack: ["Next.js 15", "React 19", "headless WP", "wp-plugin", "MercadoPago", "Zustand", "GTM · GA4", "Search Console"],
  },
  {
    slug: "cadiz-energias",
    index: "05",
    title: "Cadiz Energías Renovables",
    tagline: "A B2B wholesale platform for solar energy.",
    status: "IN PROGRESS",
    years: "2025 — now",
    role: "Frontend — architecture & build",
    liveUrl: "https://cadizsrl.com.ar",
    liveLabel: "cadizsrl.com.ar",
    overview: [
      "A wholesale storefront for a family-run solar-energy company. The catalog is shown without prices — every product routes to a “request a quote” CTA instead of a cart, matching how B2B solar actually sells.",
      "The frontend is Next.js 16 + React 19 + Tailwind 4, consuming a headless WordPress backend via WPGraphQL. TypeScript types are auto-generated from the GraphQL schema with graphql-codegen, so the data layer stays type-safe.",
      "The WordPress instance is shared with the same family's retail store — one backend, two tailored frontends.",
    ],
    highlights: [
      "Type-safe data layer via WPGraphQL + graphql-codegen.",
      "Quote-driven B2B flow instead of a cart.",
      "Shared headless backend across two storefronts.",
    ],
    stack: ["Next.js 16", "React 19", "Tailwind 4", "WPGraphQL", "graphql-codegen", "headless WP"],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export const workSlugs = caseStudies.map((c) => c.slug);
