export type DetailSection = {
  heading: string;
  body: string[];
  bullets?: string[];
};

export type WorkDetail = {
  intro: string;
  sections: DetailSection[];
};

/** Deep-dive pages at /work/[slug]/details, only for the projects listed here. */
export const workDetails: Record<string, WorkDetail> = {
  "desde-eze": {
    intro:
      "Desde EZE is a content machine that happens to look like a flight-deals site. This is how a deal travels from a price search to a landing page, an Instagram story, a reel and a newsletter without me touching it.",
    sections: [
      {
        heading: "1. Finding the deal",
        body: [
          "My own search tools run every day before sunrise over 60+ destinations, from Buenos Aires and six other Argentine cities. Nothing is published just because it is cheap: every result goes through the filters I would apply myself — schedules, layovers, hours of travel and whether the price is really below the usual for that route. Prices include carry-on, and very long trips are rebuilt with two nights in an intermediate city.",
        ],
      },
      {
        heading: "2. Google Drive as the CMS",
        body: [
          "Saving a deal writes a Markdown file with front matter (route, dates, price per person, airline, categories) to a shared Drive folder. The Next.js 16 landing reads that folder through the Drive API with a read-only service account and revalidates with ISR every five minutes, or instantly through a secured revalidate endpoint.",
          "There is no database for content and no admin panel to maintain. Unpublishing a deal means moving a file. Deals are current for a few days after being found, then move to a greyed-out “Estas ya volaron” section for 45 days.",
        ],
        bullets: [
          "Sections and categories are Markdown files too, so the catalog can be reorganised from Drive.",
          "Automatic rows: top deals of the week, one row per region, and “more deals” for what is left over.",
          "Per-airport landing pages (/desde/COR) with a search box that understands aliases like “Ezeiza” or “Aeroparque”.",
        ],
      },
      {
        heading: "3. Instagram on autopilot",
        body: [
          "Scheduled GitHub Actions call protected endpoints on the site, which publish through the official Instagram API. The access token lasts 60 days, so the site renews it every week and stores the new one in a private sheet; it never expires.",
        ],
        bullets: [
          "Ten stories a day, one every ninety minutes from 08:00 to 21:30 Argentina time, plus three feed posts.",
          "A daily reel at 19:00 for the best deal of the day, but only when it beats the usual price by 30% or more. On days with nothing worth sharing, nothing is posted.",
          "Evergreen content (lists like “when is the best time to travel to Europe?”) on Mondays, Wednesdays and Fridays, written ahead into Drive.",
          "A test mode that emails the video instead of publishing, and a Sunday email with the week's content to review before it goes out.",
        ],
      },
      {
        heading: "4. Programmatic video with Remotion",
        body: [
          "Reels are React components. A GitHub Action fetches the deal data, renders an MP4 with Remotion, retries at lower quality until the file is under 4 MB, uploads it to Vercel Blob and publishes it. The same deal data that feeds the landing feeds the video, so design and copy stay consistent across channels.",
        ],
      },
      {
        heading: "5. Measurement and consent",
        body: [
          "GA4 receives custom events for each step of the funnel, and campaign links carry UTM parameters so I can tell a story from a post from the newsletter.",
        ],
        bullets: [
          "view_offer, click_flight, click_hotel, generate_lead, plus events for airport selection.",
          "Consent Mode: in Argentina GA4 starts active with an accept/reject notice; in the EU, UK and Switzerland nothing loads until the visitor accepts. The visitor's country comes from a Vercel header and the choice is stored for six months.",
          "A privacy page aligned with Argentina's data protection law 25.326, and a clear note wherever there are affiliate links.",
        ],
      },
      {
        heading: "6. Newsletter and revenue",
        body: [
          "Sign-ups use double opt-in through Brevo, with every consent logged in a Google Sheet (date, email, source, consent text and version). An admin screen builds a newsletter from the current deals and creates a draft in Brevo to review and send. Outbound flight and hotel links go through Travelpayouts, so affiliate commissions can keep the site free for readers.",
        ],
      },
      {
        heading: "Why it matters",
        body: [
          "This is the working proof of the Automatic Content service I sell through Skala Ecommerce: the same ideas — a catalog as the source of truth, triggers, scheduled publishing and measurable links — applied to online stores.",
        ],
      },
    ],
  },

  "mercado-de-semillas": {
    intro:
      "Mercado de Semillas is the store I have run since 2020, and lately my lab for data-driven ecommerce. These are the pieces I built after the storefront was already live.",
    sections: [
      {
        heading: "1. Measurement that can be trusted",
        body: [
          "The store sends ecommerce events through Google Tag Manager to GA4 using the standard event names, so GA4's monetization reports fill themselves in without custom configuration.",
        ],
        bullets: [
          "view_item, add_to_cart, begin_checkout and purchase, plus view_promotion and select_promotion for the home hero.",
          "Hero attribution: when someone taps a promotional slide, the site remembers it for seven days. If they buy, the order carries which slide it came from, and an admin report lists orders and revenue per slide independently of GA4 and ad blockers.",
          "A guard against double counting: the site loads GA4 either directly or through GTM, never both, because both would count every purchase twice.",
          "A lesson written down in the docs: a new event must also be added to the GTM trigger, or it silently never reaches GA4. I now grep the code for every tracked call before publishing a container.",
        ],
      },
      {
        heading: "2. A seed finder with its own analytics",
        body: [
          "The “find your seed” quiz guides visitors to varieties by the effects they want. Its funnel — start, each step, completion, results — goes to GA4 as events. Only finished quizzes become a row in a spreadsheet (answers, how many varieties matched, which ranked first), which is what I read when deciding what to stock. Nothing that identifies a person is stored, and purchases carry a flag that answers directly: does the finder sell?",
        ],
      },
      {
        heading: "3. Technical SEO from Search Console",
        body: [
          "Search Console showed roughly 118 URLs “indexed, though blocked by robots.txt”, thousands of URLs returning server errors, and invalid product snippets. I wrote the diagnosis and a prioritised plan with measurable targets for each problem.",
        ],
        bullets: [
          "The approach, a hybrid rule: combinations that explode into thousands of useless URLs return 410 Gone; legitimate filters stay crawlable with noindex,follow and a canonical to the clean category.",
          "robots.txt and the middleware aligned so no URL lives in limbo.",
          "Schema.org markup: Product with Offer, ItemList for categories and brands, BreadcrumbList, Organization and WebSite.",
          "Descriptive content and metadata for category and brand pages, plus a follow-up plan to monitor recovery in Search Console.",
        ],
      },
      {
        heading: "4. Speed and caching",
        body: [
          "The home page used to render on the server for every visit because it read query parameters. I moved that logic into middleware so the page is static, and invalidate content on demand: a WordPress webhook revalidates tags the moment a product, price or stock level changes, and time-based windows are only a safety net.",
          "One gotcha worth recording: Next's data cache only caches GET requests, and WPGraphQL is queried with POST, so fetch caching options were silently ignored. The fix was to wrap those calls in a function-level cache keyed by query and variables.",
        ],
      },
      {
        heading: "5. An admin built for one person",
        body: [
          "A private admin lets me run the store without a developer: orders, sales reports, product costs and profitability, the hero slide editor, promotional slides, theme and seasonal settings, and the blog.",
          "The Hot Sale engine is an example of how these pieces fit: I choose the brands and discount steps, publish the slide, and each product gets a stable discount from a deterministic hash so it never changes during the event. The discount appears on cards and in the cart, MercadoPago charges the reduced price, and everything switches itself off when the event window ends.",
        ],
      },
      {
        heading: "What this shows",
        body: [
          "Owning a real store means the analytics, SEO and performance work has consequences. It is the same method I now offer to other shops through Skala Ecommerce.",
        ],
      },
    ],
  },

  "skala-ecommerce": {
    intro:
      "Skala is the agency I started to take what I learned running my own store and building Desde EZE to other online shops, as a monthly service instead of a pile of recommendations.",
    sections: [
      {
        heading: "1. The offer",
        body: [
          "The pitch is deliberately simple: your store already sells; we handle the growth work so you can run your business. You approve, we execute, and every month you get a plain-language report.",
        ],
        bullets: [
          "Ecommerce: funnel audit from home to checkout, product page and checkout fixes, speed and mobile.",
          "SEO: technical audit, category architecture around search intent, monthly content and position tracking.",
          "Analytics: GA and Meta Pixel set up or reviewed, a dashboard with the numbers that matter, a monthly report.",
          "Content creation: a funnel-based strategy, an editorial calendar and publishing.",
          "Engagement: post-purchase email and WhatsApp automations, basic segmentation and loyalty, repurchase tracking.",
          "Promotions: a calendar of key dates, objectives per promotion, and results measured against what was expected.",
        ],
      },
      {
        heading: "2. Automatic Content",
        body: [
          "The flagship service connects a store's catalog — Tiendanube, WooCommerce, Shopify, Mercado Libre or even a spreadsheet — and publishes designed posts, stories and reels on its own, in the brand's colours, fonts and tone.",
        ],
        bullets: [
          "Triggers: new product, price drop shown with the old price struck through, low stock, and series for Hot Sale, Cyber Monday and Black Friday.",
          "Approval before publishing, or full autopilot.",
          "Tracked links on every piece, to measure what actually sells.",
          "Three plans: Basic (posts and stories), Pro (adds reels and triggers) and Full (adds newsletter, WhatsApp community messages and a monthly 1:1 review).",
        ],
      },
      {
        heading: "3. The proof",
        body: [
          "The site shows Desde EZE as a live example of the engine in production, publishing every day on Instagram from its own data. Prospective clients can see the result, not just a promise.",
        ],
      },
      {
        heading: "4. The site itself",
        body: [
          "Built with Next.js 15, React 19, TypeScript and Tailwind, with SEO set up from the start: generated sitemap, canonical URLs, Open Graph images and JSON-LD for the organisation. Preview deployments are kept out of the index.",
          "The main funnel is a diagnosis request form that posts to a webhook (Google Sheets, Zapier or Make), measured with a generate_lead event in GA4, along with clicks to WhatsApp, Instagram and email. The www domain is canonical and the Vercel domain redirects to it.",
        ],
      },
    ],
  },
};

export function getWorkDetail(slug: string): WorkDetail | undefined {
  return workDetails[slug];
}
