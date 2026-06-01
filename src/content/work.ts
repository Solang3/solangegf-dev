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
    slug: "mercado-de-semillas",
    index: "02",
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
      "I'm a seller licensed by INASE (Argentina's national seed institute), with an industrial-hemp license in process at ARICCAME — operator-level knowledge of the regulatory landscape, not just the tech.",
    ],
    highlights: [
      "End-to-end ownership: brand, product, ops and code.",
      "Custom headless-WordPress plugin + MercadoPago checkout.",
      "INASE-licensed — real regulatory and logistics know-how.",
    ],
    stack: ["Next.js 15", "React 19", "headless WP", "wp-plugin", "MercadoPago", "Zustand"],
  },
  {
    slug: "cadiz-energias",
    index: "03",
    title: "Cadiz Energías Renovables",
    tagline: "A B2B wholesale platform for solar energy.",
    status: "IN PROGRESS",
    years: "2025 — now",
    role: "Frontend — architecture & build",
    liveUrl: "https://cadizsrl-web.vercel.app",
    liveLabel: "cadizsrl-web.vercel.app",
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
  {
    slug: "mama-se-planta",
    index: "04",
    title: "Mama Se Planta",
    tagline: "A cannabis brand site, built in one morning.",
    status: "ACTIVE",
    years: "2025",
    role: "Design + content + dev, with AI",
    liveUrl: "https://mama-se-planta.vercel.app",
    liveLabel: "mama-se-planta.vercel.app",
    overview: [
      "A complete brand site — design system, copy and development — produced end-to-end with Claude in a single morning.",
      "It's a clear, concrete example of how the production cycle changes when AI is a real part of the flow: what used to take a small team a week became one focused morning, without cutting quality.",
    ],
    highlights: [
      "Full design system + copy + build in one morning.",
      "A working demonstration of an AI-accelerated workflow.",
    ],
    stack: ["Claude", "design system", "AI-assisted", "Next.js", "Vercel"],
  },
  {
    slug: "binawave",
    index: "05",
    title: "BinaWave",
    tagline: "A binaural sound-therapy SaaS.",
    status: "SLEEPING",
    years: "2025",
    role: "Solo — full build",
    liveUrl: "https://github.com/Solang3/neurowave",
    liveLabel: "github.com/Solang3 (repo)",
    overview: [
      "A subscription SaaS for binaural-wave therapy: auth, audio streaming, subscriptions (MercadoPago + PayPal) and a community forum, on Vercel + Supabase.",
      "The binaural tracks were generated with Suno. I started it for my dad, who's interested in binaural-wave therapy. It's currently paused — and on my list to resume.",
    ],
    highlights: [
      "Full SaaS: auth, streaming, subscriptions, community.",
      "Dual payments — MercadoPago + PayPal.",
      "AI-generated audio content (Suno).",
    ],
    stack: ["SaaS", "Supabase", "Vercel", "MercadoPago", "PayPal", "Suno"],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export const workSlugs = caseStudies.map((c) => c.slug);
