# PRD — solangegf.dev v2
**Status:** DRAFT · **Author:** PM Agent · **Date:** 2026-05-31
**Audience:** Solo developer (Solange Gonzalez)

---

## 1. Product Vision

### Positioning Statement
> Solange Gonzalez — senior full-stack + AI engineer who builds production-grade cannabis-industry platforms in LATAM, and takes any web product from zero to live: e-commerce, SaaS, headless CMS, ops.

### One-line version (hero subhead candidate)
> "Builder. 20+ years. AI-native. Cannabis-ready."

### What this site must do
It is the single authoritative professional surface for three distinct audiences: hiring teams evaluating a senior full-stack + AI candidate, cannabis-sector clients in LATAM looking for a builder who deeply understands their world, and general freelance clients who need dev + hosting services. All three must find proof within one scroll that she is exactly who they need — and be able to act immediately.

---

## 2. Personas

### Persona A — Hiring Team / Recruiter
**Name:** Valentina, Technical Recruiter at a mid-size product company (AR or EU-based)
**Job to be done:** Assess a senior full-stack candidate for a permanent role, full-time or remote.
**What she scans for:**
- Seniority signal: 20+ years, real production work, big-brand logos (Globant, NTT DATA, Disney, Sony).
- AI fluency: not "I use ChatGPT" — actual agentic workflows, MCP servers, Anthropic SDK in production.
- Bilingual: she may be sending a profile to an EU team.
- CV download without friction.

**What makes her act (contact/apply):** She sees a live product (GreenkedIn, Mercado de Semillas), reads the AI paragraph, downloads the PDF CV, and finds the LinkedIn profile polished. She does NOT need a blog or a pricing page.

**Risk:** If the cannabis angle is front-and-center she may mentally bucket Solange as "niche." Mitigation: cannabis projects are framed as technical depth, not the whole story. The headline reads "Full-Stack + AI Engineer" first; cannabis appears as evidence of deep domain expertise, not as identity.

---

### Persona B — Cannabis Industry Client (LATAM)
**Name:** Rodrigo, founder of a growing AR/MX dispensary brand, or the ops director of a growshop chain.
**Job to be done:** Find a developer who already understands the regulatory, community, and e-commerce landscape of cannabis in LATAM — so he doesn't have to explain everything from scratch.
**What he scans for:**
- Does she know the industry? (INASE license, ARICCAME, "de germinar a consumir" language, GreenkedIn.)
- Has she shipped actual cannabis e-commerce? (Mercado de Semillas — live, operational.)
- Can she build what he needs? (E-commerce, brand site, community, headless CMS.)
- How do I hire her? (Services section, clear contact path.)

**What makes him act:** He sees GreenkedIn + Mercado de Semillas presented as detailed case studies with real outcomes. He reads a services section that lists "cannabis e-commerce" explicitly. He contacts her.

**Risk:** No content today proves she understands the regulatory context. Mitigation: the INASE license mention + "en trámite licencia de cáñamo en ARICCAME" is the proof point — surface it in the case study, not buried.

---

### Persona C — General Freelance Client
**Name:** Martina, small-business owner or startup founder who needs a website, e-commerce, or AI integration built fast by someone who won't disappear after launch.
**Job to be done:** Find a freelance developer she can trust with the full cycle — design, code, deploy, SEO, hosting.
**What she scans for:**
- Can she do everything? (Yes: full-stack, hosting, SEO, CMS, performance.)
- Is she available? (Services + contact.)
- What does it cost? (She wants a number or at least a starting point.)
- Proof: does she have live work I can check?

**What makes her act:** She sees a clear Services section with recognizable offerings (Web development, E-commerce, Hosting + ops, AI integration) and a "request a quote" CTA. She sees Cadiz Energías Renovables and Mama Se Planta as examples of fast turnarounds.

---

## 3. Information Architecture

### Decision: Single-page scroll vs. multi-page
**Recommendation: hybrid.** The root `/` is a single-scroll professional front door with 6 sections (Hero, About, Work, Cannabis, Services, Contact). Deep-linked detail lives in sub-pages (`/work/[slug]` for case studies, `/services` for full services detail). This serves Persona A (fast scan, one page) and Persona B/C (can dig deeper).

`/playwithme` stays completely intact and is linked discreetly from the Hero and footer — it is a reward for curiosity, not a navigation destination.

### Page / Section Map

```
solangegf.dev/
├── / (root — single-scroll, 6 sections)
│   ├── [Hero]            — identity, tagline, cursor-lens, balloon color-reveal, CTAs
│   ├── [About / Stack]   — compressed bio, skills matrix, CV download, bilingual toggle
│   ├── [Work]            — selected projects (sticky-card scroll, already built — EXTEND)
│   ├── [Cannabis]        — dedicated vertical pitch: GreenkedIn + Mercado de Semillas
│   ├── [Services]        — 4 service tiles: Dev, E-commerce, AI, Hosting+Ops
│   └── [Contact/Footer]  — email, LinkedIn, GitHub, CV (already built — minor updates)
│
├── /work/[slug]          — case study pages (new, MVP)
│   ├── /work/greenkedin
│   ├── /work/mercado-de-semillas
│   ├── /work/cadiz-energias
│   └── /work/mama-se-planta
│
├── /services             — full services detail page (v2, not MVP)
│
└── /playwithme           — arcade (UNTOUCHED)
    ├── /playwithme/about
    ├── /playwithme/projects
    └── ... (all existing routes)
```

### What already exists on `/` (DO NOT re-build)
- Hero with cursor-lens + mix-blend morphing shapes — EXISTS
- SelectedWork with sticky-card scroll for 4 projects — EXISTS
- Trajectory section with stats + client marquee — EXISTS
- ContactFooter with email, LinkedIn, GitHub, Behance, CV — EXISTS

### What is MISSING from `/` (needs to be built)
1. A standalone **Cannabis** section — the current site has cannabis in the work cards but no dedicated positioning pitch.
2. A **Services** section on the scroll — currently zero service offering is visible on `/`.
3. A proper **About/Skills** section on `/` — the Trajectory section has a paragraph and stats but no compressed skills matrix, no language switcher for EN/ES, no "available for" signal.
4. The **balloon color-reveal** signature effect (see Section 5, Experience Requirements).
5. **i18n** — currently the root page is Spanish-first with no language switcher.
6. **Case study pages** `/work/[slug]` — currently there are no detail pages; projects are cards only.

---

## 4. Prioritized Scope

### MVP (launch, target: 1–2 focused dev sessions)

The MVP ships the 3 missing sections on `/` plus case study pages. Everything else defers.

| Area | What ships |
|---|---|
| Cannabis section on `/` | New `<Cannabis>` component — dedicated pitch for Persona B |
| Services section on `/` | New `<Services>` component — 4 tiles, CTA to contact |
| About/Skills on `/` | New `<AboutStrip>` component — compressed, above-the-fold-friendly |
| Balloon color-reveal effect | Implemented in Hero (or as a floating overlay layer on `/`) |
| i18n EN/ES | next-intl or a lightweight custom approach; EN default; ES toggle; only `/` translated |
| Case study pages | `/work/[slug]` — static MDX or hardcoded per project; 4 pages |
| CV link | Already exists in ContactFooter — confirm PDF is current |
| OG / social image | Static branded OG image (1200×630) for the root route |

### v2 (later — do not build now)

| Area | Why deferred |
|---|---|
| `/services` full detail page | The 4-tile strip on `/` is enough to convert; a full page needs service copy Solange hasn't written yet |
| Blog / MDX writing | High maintenance cost, zero revenue signal today |
| Testimonials section | No testimonials collected yet; building the plumbing without content is waste |
| Contact form | Current email/LinkedIn channels are sufficient; a form adds backend complexity (spam, email delivery) |
| Steam API / Now Playing | Fun, but zero signal for any of the 3 personas |
| German language | Dropped per brief |
| `/playwithme` stories migration | They already exist at `/playwithme/stories` — no reason to move them |
| Service pricing page | Needs a business decision first (see Open Questions) |
| Testimonials | Need to collect them first |
| Dark mode toggle on `/` | The pro site is B&W by design; dark/light toggle adds complexity without differentiating value |

---

## 5. User Stories + Acceptance Criteria (MVP)

### 5.1 Hero (existing — signature effect added)

**US-H1 — Balloon color-reveal effect**
As a visitor, I want to see floating balloon/blob shapes drifting slowly across the otherwise black-and-white page, and when I look at or move my cursor near them, the area revealed through them shows color — so the site feels alive and rewards attention.

Acceptance Criteria:
- At least 3 blob/balloon shapes float on the Hero section in CSS or canvas.
- The shapes use a clip-mask or compositing technique so the region underneath (or inside) them reveals color (suggested: a hidden color gradient layer) while the rest of the page remains B&W.
- The effect is CSS/canvas-based, not a third-party library that adds >50kB.
- The shapes animate continuously (slow drift) at ≥60fps on a modern laptop.
- The effect is disabled (`prefers-reduced-motion: reduce`) with a graceful fallback (static shapes or no shapes).
- On mobile, the effect is simplified or replaced with a static color accent — no performance regression.

**US-H2 — Hero CTAs**
As a hiring manager or potential client landing on `/`, I see clear next-step CTAs above the fold.

Acceptance Criteria:
- Primary CTA: "ver trabajo" anchors to `#trabajo` (already exists).
- Secondary CTA: "contacto" anchors to `#contacto` (already exists).
- Tertiary text link: "play with me ↗" links to `/playwithme` (already exists).
- A CV download link or a "servicios" anchor is accessible from the hero or the sticky header without scrolling — either via the header nav or a fourth CTA.

---

### 5.2 About / Skills Strip (new section)

**US-A1 — Compressed skills matrix visible on scroll**
As a recruiter, I want to see Solange's skill groups at a glance as I scroll past the hero, so I can confirm technical fit without reading a wall of text.

Acceptance Criteria:
- A section renders on `/` between Hero and Work (or as a minimal strip within the Trajectory section) showing at minimum: FRONTEND, BACKEND, E-COMMERCE & CMS, AI WORKFLOWS, OPS — each with 3–5 representative tags drawn from the `stack` array in `projects/page.tsx`.
- The section renders in both EN and ES based on the active locale.
- A "Download CV" button linking to `/solangegf-cv.pdf` (opens in new tab) is present in this section.
- An "Available for: full-time · freelance · AR + UE" badge is visible.

**US-A2 — Language switcher**
As an international user, I can switch between English and Spanish.

Acceptance Criteria:
- A language switcher (two-option toggle or a `<Select>` using shadcn/ui) appears in the site header.
- Default locale is EN.
- Switching to ES immediately re-renders all copy in the current viewport; no page reload required if using next-intl; a full navigation to the ES route is acceptable as a fallback.
- The switcher preserves the current scroll position (or reasonably close to it) after switching.
- The URL reflects locale: `/` for EN, `/es` for ES (or next-intl convention — either is acceptable).
- `/playwithme` is NOT translated; it stays in its original mixed-language form.

---

### 5.3 Work / Projects (extend existing)

**US-W1 — Mama Se Planta added to SelectedWork**
As a visitor scanning the work section, I see Mama Se Planta as a featured project card.

Acceptance Criteria:
- The `projects` array in `SelectedWork.tsx` includes Mama Se Planta with index `05`, status `ACTIVE`, years `2025`, tagline, short description (AI-assisted, one morning, design system + copy), and tags.
- The card renders consistently with the existing B&W card design.

**US-W2 — Case study deep-links**
As a potential client, I can click into a project card and see a full case study page.

Acceptance Criteria:
- Each project card in `SelectedWork` has a "case study ↗" or "ver caso" link that navigates to `/work/[slug]`.
- Routes implemented: `/work/greenkedin`, `/work/mercado-de-semillas`, `/work/cadiz-energias`, `/work/mama-se-planta`.
- Each case study page contains: project title, tagline, status badge, year range, 2–4 paragraphs of description, tech stack tags, live URL link (if applicable), and a back link to `/#trabajo`.
- Content for each page is drawn verbatim from the existing `projects` data in `SelectedWork.tsx` and `playwithme/projects/page.tsx` — no invented content.
- Pages are statically generated (no fetch/API calls); content lives in a `src/content/work/` data file or directly in the component.
- Each page has a unique `<title>` and `<meta name="description">`.

---

### 5.4 Cannabis Section (new section)

**US-C1 — Dedicated cannabis vertical pitch**
As a cannabis-industry client in LATAM, I find a section on `/` that speaks directly to my world and proves Solange knows it from the inside.

Acceptance Criteria:
- A section identified as `<Cannabis>` (or equivalent) renders on `/` between the Work section and Services.
- Section headline is bilingual (EN default): e.g., "I build for the cannabis industry" / "Construyo para la industria cannábica."
- The section contains:
  - A 2–3 sentence positioning statement acknowledging the LATAM regulatory and cultural context of cannabis.
  - Two project callouts: GreenkedIn and Mercado de Semillas — each with name, tagline, one-line proof point, and live link.
  - The INASE license is mentioned as a proof of operator-level knowledge (not just dev knowledge).
  - A CTA: "Hablemos" or "Let's talk cannabis" linking to `#contacto`.
- The section uses the existing B&W architectural design language — no green color scheme (cannabis clichés are out of scope).
- The section is translated in both EN and ES locales.

---

### 5.5 Services Section (new section)

**US-S1 — Services strip visible on the front page**
As a potential client or hiring manager, I understand what Solange offers as a freelancer within one scroll of the page.

Acceptance Criteria:
- A `<Services>` section renders on `/` between the Cannabis section and the Contact footer.
- Four service tiles are displayed in a 2×2 or 4-column grid using a shadcn/ui `Card` component or equivalent:
  1. **Web Development** — Next.js, React, headless CMS, custom design systems.
  2. **E-commerce** — WooCommerce, Magento/Adobe Commerce, headless + MercadoPago integration.
  3. **AI Integration** — agentic workflows, Anthropic SDK, automated pipelines, AI-assisted product builds.
  4. **Hosting + Ops** — Vercel, Cloudflare, Plesk, SEO, performance, analytics.
- Each tile: icon or label, 1-line description, no pricing shown (see Open Questions).
- A single CTA below the grid: "Request a quote" or "Consulta sin cargo" linking to `#contacto` (email).
- The section is translated in both EN and ES locales.

**US-S2 — Services section does not contradict the hiring signal**
As a recruiter, I see services listed but they do not make me think Solange is unavailable for full-time.

Acceptance Criteria:
- The services section heading is framed as "also available for" or "I also take on" — it does not use language like "my studio" or "agency" that implies she is not seekable as an individual hire.
- The Contact section copy explicitly mentions both "looking for a team" and "available for projects" — so both signals coexist without contradiction.

---

### 5.6 Contact (extend existing)

**US-CT1 — Contact footer updated for dual intent**
The existing ContactFooter copy currently reads "Busco sumarme a un equipo..." (hiring-only). It must also address freelance clients.

Acceptance Criteria:
- The contact section body text acknowledges both: available for full-time senior roles AND open to freelance projects / hosting clients.
- Suggested copy (EN): "I'm looking for a senior role where AI is a first-class tool — and I take on freelance builds when the project is worth it. Either way, write to me."
- Suggested copy (ES): "Estoy buscando sumarme a un equipo donde la AI sea parte del flujo — y tomo proyectos freelance cuando valen la pena. En los dos casos, escribime."
- The email, LinkedIn, GitHub, Behance, and CV links remain.
- No contact form is added (v2).

---

### 5.7 i18n

**US-I1 — EN/ES translation for `/` sections**
As an international user (EN) or a Spanish-speaking visitor (ES), I read the site in my language.

Acceptance Criteria:
- Default locale: EN at `/`.
- ES locale at `/es` (or next-intl convention).
- All 6 sections of the root page are translated: Hero subhead, About/Skills labels, Work section heading + project descriptions, Cannabis section, Services section, Contact section.
- Project titles, client names, tech stack tags, and proper nouns (GreenkedIn, Mercado de Semillas, INASE) are NOT translated — they remain as-is in both locales.
- `/playwithme` and all its sub-routes are excluded from i18n.
- `/work/[slug]` case study pages: EN only in MVP. ES versions defer to v2.
- Language switcher placed in `SiteHeader` — two-option toggle (EN | ES).

**Implementation note (not a user story — guidance for solo dev):** Use `next-intl` with the App Router. Store translation strings in `src/messages/en.json` and `src/messages/es.json`. Scope to the `(pro)` route group so `/playwithme` is outside the i18n wrapper. This is the lowest-friction approach for a solo dev on Next.js App Router.

---

### 5.8 OG / SEO

**US-SEO1 — Root route has a branded OG image and meta**
Acceptance Criteria:
- `<title>` for `/`: "Solange Gonzalez — Full-Stack + AI Engineer"
- `<meta name="description">` (EN): "Senior full-stack and AI engineer based in Buenos Aires. 20+ years building web products. GreenkedIn, Mercado de Semillas, and more."
- An OG image (1200×630px) is present and served from `/public/og-home.png` or generated via `next/og`.
- The OG image uses the B&W design language with the name "Solange Gonzalez" in the display font and the tagline below it.
- `twitter:card` is set to `summary_large_image`.
- Each `/work/[slug]` page has its own `<title>` and `<meta name="description">`.

---

## 6. Content and Asset Requirements

### What EXISTS and is ready to use
| Asset | Location | Status |
|---|---|---|
| CV PDF | `/public/solangegf-cv.pdf` | Ready — confirm it is current |
| Full bio (EN + ES) | `playwithme/about/page.tsx` — `bioEN`, `bioES` arrays | Ready to pull |
| Full trajectory | Same file — `trajectory` array | Ready to pull |
| Projects data | `SelectedWork.tsx` + `playwithme/projects/page.tsx` | Ready to pull |
| Stack groups | `playwithme/projects/page.tsx` — `stack` array | Ready to pull |
| Notable clients list | Both files | Ready to pull |
| LinkedIn profile URL | `playwithme/about/page.tsx` | Ready |
| GitHub URL | `ContactFooter.tsx` | Ready |
| Behance URL | `playwithme/about/page.tsx` | Ready |

### What is MISSING and must be created before launch

| Asset | Who creates it | Notes |
|---|---|---|
| Services copy — 4 service descriptions (1–2 sentences each) | Solange | See US-S1. She needs to write these or approve PM-drafted copy. |
| Cannabis section positioning paragraph (2–3 sentences) | Solange review | PM can draft from existing data; Solange must approve voice. |
| Contact section dual-intent copy | Solange review | See US-CT1. Draft provided above. |
| OG image (1200×630) | Developer | Generate via `next/og` using display font + B&W design tokens. |
| Photo or no photo | Solange decides | See Open Questions. If yes, a professional-quality photo is needed. |
| Testimonials | Solange | Not MVP, but she should start collecting now. |
| Service pricing decision | Solange | See Open Questions. Blocks the services section tile design. |
| i18n string files (`en.json`, `es.json`) | Developer | Content sourced from existing bio/trajectory arrays + PM drafts above. |
| Mama Se Planta case study copy | Minimal — exists in `projects/page.tsx` | Just needs to be moved to a case study page format. |
| BinaWave case study copy | Minimal — exists in `projects/page.tsx` | Optional for MVP; consider including since it demonstrates SaaS skills. |

### What is explicitly NOT needed for MVP
- A headshot photo (the B&W architectural design works well without one — see Open Questions).
- Blog posts.
- Testimonials markup.
- Pricing tables.
- A logo (the name in display font is the logo).

---

## 7. Open Questions — Only Solange Can Answer

These are ranked by how much they block the build.

### Q1 — How hard do you lead with cannabis? (BLOCKING for IA and copy)
**The tension:** Leading with cannabis maximizes relevance for Persona B but creates a categorization risk for Persona A (recruiters who don't know the industry may mentally file her as niche). Leading with "senior full-stack + AI" maximizes recruiter appeal but undersells the cannabis differentiator for Persona B.

**PM Recommendation:** Use a "T-shaped" structure on the page. The Hero and About sections are entirely industry-agnostic — "senior full-stack + AI engineer, 20+ years." The Work section prominently features cannabis projects (GreenkedIn as card 01, Mercado de Semillas as card 02) so they are unmissable. Then a dedicated Cannabis section makes the vertical pitch explicit. This way, a recruiter who scrolls fast sees "senior full-stack + AI" and big-brand logos. A cannabis client who reads carefully finds a section that speaks entirely to them.

**Answer needed:** Does this balance feel right, or does she want cannabis even higher — e.g., a cannabis-specific hero variant or a second hero?

---

### Q2 — Full-time job-seeking vs. freelance — which is primary? (BLOCKING for contact copy)
**The tension:** The current ContactFooter signals job-seeking. Adding services makes her look like she has a studio, which can make recruiters assume she is not actually looking. She needs to pick a primary signal.

**PM Recommendation:** Primary = full-time senior role (the more urgent financial signal, and the one with higher leverage). Secondary = freelance services "when the project is worth it." This is honest and does not sound desperate for either. The Contact section copy in US-CT1 above reflects this. But if she is actually more interested in going fully freelance, flip it.

**Answer needed:** Is she actively looking for a full-time role right now, or is freelance the primary income path?

---

### Q3 — Show service pricing or "request a quote"? (BLOCKING for Services section)
**Options:**
- **No pricing, "consulta sin cargo" CTA:** Maximizes inbound leads, keeps flexibility. Works if she is comfortable with a back-and-forth qualification step. Recommended for a solo dev who can price per project.
- **Starting at $X / "desde $X":** Filters out low-budget clients automatically. Requires her to have decided on rates.
- **Tiered packages (e.g., Landing, E-commerce, AI Integration):** High credibility signal but requires significant copy work and business decisions. Defer to v2.

**PM Recommendation:** Launch with no pricing + "Consulta sin cargo" CTA. Add a starting-from number in v2 once she has handled a few inbound leads and calibrated.

**Answer needed:** Is she comfortable with no pricing on launch?

---

### Q4 — Photo or no photo?
**The case for a photo:** Adds warmth and humanizes a B&W architectural site. Strong for Persona C (freelance clients hire people, not portfolios).
**The case for no photo:** The current design is deliberately impersonal-chic. A photo would need to match the aesthetic (B&W, high contrast, architectural framing) or it will clash. A bad or mismatched photo is worse than no photo.

**PM Recommendation:** Skip the photo for MVP. If she has a high-quality B&W photo (or commissions one), add it to the About strip in v2. Do not use a casual selfie — it will undercut the design.

**Answer needed:** Does she have a B&W professional-quality photo she is happy with, or is she comfortable launching without one?

---

### Q5 — Which projects get full case study pages? (BLOCKING for `/work/[slug]` build)
There are 6 projects in the data: GreenkedIn, Mercado de Semillas, Cadiz Energías Renovables, Mama Se Planta, BinaWave, and solangegf.dev itself.

**PM Recommendation:**
- **Full case study pages (MVP):** GreenkedIn, Mercado de Semillas, Cadiz Energías. These are the three with the strongest client and technical story.
- **Minimal/stub page (MVP):** Mama Se Planta (fast-build AI proof — short but strong story).
- **Skip for now:** BinaWave (sleeping project — soft signal), solangegf.dev (meta, amusing but not useful for any of the 3 personas).

**Answer needed:** Does she want BinaWave included? It demonstrates SaaS + MercadoPago + Supabase skills, which is relevant for Persona C.

---

## 8. Success Criteria

The site is "great" when:

1. **Persona A conversion:** A recruiter can find the CV PDF, confirm the tech stack, read one project description, and find the LinkedIn profile in under 90 seconds without leaving `/`.
2. **Persona B conversion:** A cannabis industry client lands on the page, reaches the Cannabis section, and finds GreenkedIn + Mercado de Semillas + INASE license — all before reaching the contact footer.
3. **Persona C conversion:** A general freelance client can identify at least 3 services offered and reach a contact path in under 2 scrolls.
4. **Design integrity:** The balloon color-reveal effect works at 60fps on a mid-range laptop, does not cause layout shift, and is the first thing a design-literate visitor mentions when they describe the site.
5. **i18n:** A monolingual English speaker lands on `/` and reads fluent, professional English throughout. A Spanish speaker can switch and read the same in Spanish with one click.
6. **Performance:** Lighthouse score on `/` is ≥90 performance, ≥90 accessibility, ≥90 SEO on a cold load on Vercel.
7. **Credibility check:** Sent cold to a technical recruiter at a mid-size EU tech company with no prior context, the site results in a reply — not a bounce.

---

## Appendix A — Scope Risk Log

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Services copy not written before build starts | High | Blocks Services section | PM drafts 4 tile descriptions; Solange approves in one pass |
| i18n adds 30–40% to build time | High | Delays launch | Scope ES to only the 6 root sections; do not translate case study pages for MVP |
| Balloon effect is visually broken on Safari / iOS | Medium | Undermines design | Implement with a CSS fallback; test on Safari before deploy |
| Cannabis section copy sounds like SEO spam | Medium | Alienates Persona A | Keep it 2–3 sentences, no keyword stuffing, genuine voice |
| Contact form scope creep ("let's add a form") | Medium | Adds backend complexity | Explicitly out of scope for v2; email link is sufficient |
| Case study pages require new photography/screenshots | Low | Delays pages | Use live URLs + a single viewport screenshot per project; no custom photography needed |

---

## Appendix B — Build Order (Recommended for Solo Dev)

This is the sequence that unblocks launch fastest:

1. **i18n scaffold** — set up next-intl, create `en.json` and `es.json`, wire `SiteHeader` language switcher. This touches every section so do it first.
2. **Cannabis section** — new component, content from existing data, no new assets needed.
3. **Services section** — new component, placeholder copy if Solange hasn't confirmed yet; finalize copy in a second pass.
4. **About/Skills strip** — pull from existing `stack` + `trajectory` arrays.
5. **Update ContactFooter copy** — 20-minute task, unblocks dual-intent signal.
6. **OG image** — generate via `next/og`, ship it.
7. **Case study pages** — `/work/[slug]`, 4 pages, static content.
8. **Balloon color-reveal effect** — last, because it is an enhancement not a blocker; if it takes longer than expected, ship without it and add in a hotfix.
9. **Mama Se Planta card** — add to `SelectedWork.tsx` array; trivial.

---

*File location: `/Users/solangegonzalez/Documents/Projects/solangegf.dev/specs/PRD.md`*
