"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const bioES = [
  "Desarrolladora full-stack con más de 20 años de experiencia en desarrollo web, diseño UI/UX y liderazgo de equipos. Carrera en empresas como NTT DATA y Globant, con proyectos para clientes como Disney, Sony, EA, Sabre y Deloitte.",
  "Sólida en JavaScript (ES6+), TypeScript, React, Next.js, Angular, HTML y CSS en frontend — y Supabase, REST APIs, Flask/Python y arquitectura serverless en backend. También con experiencia en frontend de Magento / Adobe Commerce y CMS como Typo3 y WordPress.",
  "Más allá del código, manejo el ciclo completo de producto: SEO, analytics, optimización de performance, hosting (Plesk) y Cloudflare — operando hoy un e-commerce activo en mercadodesemillas.com.",
  "Construyo con AI como herramienta central. Mi proyecto más reciente es GreenkedIn — una red profesional para la industria cannábica en Latinoamérica, construida end-to-end con Claude Code sobre Next.js 15 (App Router con React Server Components y Server Actions), TypeScript, Prisma + Supabase (Postgres, Auth, Storage), deployada en Vercel. Exploro y adopto activamente las herramientas de AI que van saliendo — workflows de coding agéntico con Claude Code (custom hooks, subagentes, MCP servers, skills), el SDK de Anthropic con prompt caching y tool use, agentes autónomos para tareas repetitivas de ingeniería, y asistentes de AI integrados en el IDE. Pruebo cada release en proyectos reales para ver qué realmente mejora el flow, e integro lo que sí. También automatizo workflows de GitHub usando Claude para generar backlogs y pushear issues programáticamente.",
  "Me entusiasma genuinamente la AI y lo que hace posible — no solo como herramienta, sino como una nueva forma de construir. Disfruto los desafíos y me copa trabajar en proyectos que empujan los límites. Hoy estoy buscando reunir todo lo que construí y aprendí para sumarme a un equipo donde pueda seguir creciendo, integrar AI con sentido y aportar valor real.",
  "Bilingüe español/inglés, habilitada para trabajar en Argentina y la UE.",
];

const bioEN = [
  "Full Stack Developer with over 20 years of experience in web development, UI/UX design, and team leadership. Career spanning companies like NTT DATA and Globant, with projects for clients including Disney, Sony, EA, Sabre, and Deloitte.",
  "Proficient in JavaScript (ES6+), TypeScript, React, Next.js, Angular, HTML, and CSS on the frontend — and Supabase, REST APIs, Flask/Python, and serverless architecture on the backend. Also experienced in Magento / Adobe Commerce frontend development and CMS platforms like Typo3 and WordPress.",
  "Beyond code, I own the full product lifecycle: SEO, analytics, performance optimization, hosting (Plesk), and Cloudflare — currently running a live eCommerce at mercadodesemillas.com.",
  "I build with AI as a core tool. My most recent project is GreenkedIn — a LinkedIn-inspired social platform for the cannabis industry in Latin America, built end-to-end with Claude Code on Next.js 15 (App Router with React Server Components and Server Actions), TypeScript, Prisma + Supabase (Postgres, Auth, Storage), deployed on Vercel. I actively explore and adopt emerging AI tooling as it ships — agentic coding workflows with Claude Code (custom hooks, subagents, MCP servers, skills), the Anthropic SDK with prompt caching and tool use, autonomous agents for repetitive engineering tasks, and IDE-native AI assistants. I try new releases on real projects to see what genuinely improves the workflow, and integrate the ones that do. I also automate GitHub workflows using Claude to generate backlogs and push issues programmatically.",
  "I'm genuinely excited about AI and what it makes possible — not just as a tool, but as a new way of building. I thrive on challenges and love working on projects that push boundaries. Right now I'm looking to bring together everything I've built and learned to join a team where I can keep growing, integrate AI meaningfully, and contribute real value.",
  "Bilingual in Spanish and English, eligible to work in Argentina and the EU.",
];

type Role = {
  years: string;
  role: string;
  company: string;
  location?: string;
  notes?: string;
};

const trajectory: Role[] = [
  {
    years: "2025 — now",
    role: "Independent / Builder",
    company: "self-employed",
    location: "Buenos Aires, AR",
    notes:
      "GreenkedIn, Mercado de Semillas, BinaWave, Cadiz Energías Renovables.",
  },
  {
    years: "Apr 2021 — Feb 2025",
    role: "Frontend Lead Developer · Angular",
    company: "NTT DATA",
    location: "Buenos Aires, AR",
    notes:
      "Clients: Edesur (Oficina Virtual Angular · ofvedesur.com.ar), Movistar (Adobe Commerce theme · tiendamovistar.com.ar).",
  },
  {
    years: "Mar 2022 — Nov 2022",
    role: "Adobe Commerce Frontend Developer (freelance)",
    company: "Youwe",
    location: "Rotterdam, NL",
  },
  {
    years: "Jun 2019 — Apr 2021",
    role: "Frontend Developer · UI/UX",
    company: "PowerToFly",
    location: "Remote · USA",
    notes:
      "Plataforma para conectar mujeres con empresas inclusivas. HTML, CSS, JS, Flask/Python.",
  },
  {
    years: "Dec 2014 — Apr 2019",
    role: "Frontend Developer · UI/UX",
    company: "GirlsAskGuys.com",
    location: "Buenos Aires, AR",
    notes: "HTML, CSS (Sass), JavaScript, persona-driven UX research.",
  },
  {
    years: "Aug 2013 — Oct 2014",
    role: "Frontend Developer · UI/UX Mobile",
    company: "Emerios",
    location: "Buenos Aires, AR",
    notes: "AMC Theatres ticketing app — Android + iOS, wireframes y prototipos.",
  },
  {
    years: "Apr 2012 — May 2013",
    role: "Magento / Typo3 Frontend Developer",
    company: "Drecomm BV (now Youwe)",
    location: "Rotterdam, NL",
  },
  {
    years: "Jan 2010 — Apr 2012",
    role: "Frontend Developer",
    company: "Velocity Partners",
    location: "Buenos Aires, AR",
    notes: "Outsourcing para clientes USA. JS, CSS (Sass/Less), Node.js, React.",
  },
  {
    years: "Jan 2008 — Dec 2009",
    role: "Frontend Developer · UI/UX",
    company: "Globant",
    location: "Buenos Aires, AR",
    notes:
      "Clients: Sabre Holdings, Sony, Deloitte, Electronic Arts, Walt Disney Studios, Yahoo.",
  },
  {
    years: "May 2005 — Dec 2007",
    role: "User Interface Designer",
    company: "TeleTech",
    location: "Buenos Aires, AR",
    notes: "UI para apps Windows y web. .NET, ColdFusion.",
  },
  {
    years: "Feb 2000 — Aug 2001",
    role: "Web Designer & Developer",
    company: "Editorial Atlántida",
    location: "Buenos Aires, AR",
    notes: "Sitios para Para Ti, Billiken, Gente, Agritotal.",
  },
];

const education = [
  {
    years: "2006 — 2010",
    title: "Computer Systems · Information Technology",
    institution: "ORT Argentina",
  },
  {
    years: "1992 — 1998",
    title: "Grado en Arquitectura Técnica · Environmental Design",
    institution: "Universidad de Belgrano",
  },
];

const languages = [
  { lang: "Español", level: "Nativo" },
  { lang: "English", level: "Full Professional" },
];

const topSkills = ["Prompt Engineering", "Project Management", "AI Agents"];

const certifications = ["Scrum Master"];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-grid) 1px, transparent 1px), linear-gradient(90deg, var(--color-grid) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at 50% 12%, black 10%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 12%, black 10%, transparent 75%)",
        }}
      />

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="relative z-10 mx-auto w-full max-w-3xl px-6 py-20 md:py-28"
      >
        <header>
          <p
            className="text-[10px] tracking-[0.35em] text-[var(--color-neon-yellow)]"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            ◆ SOBRE MÍ · ABOUT
          </p>
          <h1
            className="mt-6 text-5xl font-semibold leading-none md:text-7xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #FACC15 0%, #F472B6 100%)",
              }}
            >
              Solange
            </span>
          </h1>
          <p className="mt-4 text-sm tracking-[0.3em] text-[var(--color-text-muted)]" style={{ fontFamily: "var(--font-accent)" }}>
            FULL STACK · AI BUILDER · CABA · 20+ YRS
          </p>

          <div className="mt-8 flex flex-wrap gap-2 text-sm">
            <a
              href="#es"
              className="rounded-full border border-[var(--color-grid)] px-4 py-1.5 text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-neon-yellow)] hover:text-[var(--color-neon-yellow)]"
            >
              Español ↓
            </a>
            <a
              href="#en"
              className="rounded-full border border-[var(--color-grid)] px-4 py-1.5 text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-neon-cyan)] hover:text-[var(--color-neon-cyan)]"
            >
              English ↓
            </a>
            <Link
              href="/solangegf-cv.pdf"
              target="_blank"
              className="rounded-full border border-[var(--color-neon-magenta)] bg-[var(--color-neon-magenta)] px-4 py-1.5 text-[var(--color-crt)] transition-all hover:shadow-[0_0_30px_rgba(244,114,182,0.4)]"
            >
              Descargar CV
            </Link>
            <a
              href="https://www.linkedin.com/in/solangegonzalez"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[var(--color-grid)] px-4 py-1.5 text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-text)] hover:text-[var(--color-text)]"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://www.behance.net/solangegf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[var(--color-grid)] px-4 py-1.5 text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-text)] hover:text-[var(--color-text)]"
            >
              Behance ↗
            </a>
          </div>
        </header>

        <section className="mt-16">
          <p
            className="text-[10px] tracking-[0.35em] text-[var(--color-neon-magenta)]"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            ◆ TL;DR · PERSONAL
          </p>
          <p className="mt-4 text-base leading-8 text-[var(--color-text-muted)]">
            Tía de{" "}
            <span className="text-[var(--color-text)]">Killian</span> y{" "}
            <span className="text-[var(--color-text)]">Mora</span>, human de{" "}
            <span className="text-[var(--color-text)]">Rehia</span> la gata.
            Gamer de sangre, cannabis como terapia (de germinar a consumir),
            enamorada de las máquinas. Empecé a escribir HTML en 1994, cursé
            arquitectura hasta el último año, y desde entonces no paré de
            cranear proyectos hasta que salen.
          </p>
        </section>

        <section id="es" className="mt-16 scroll-mt-12">
          <p
            className="text-[10px] tracking-[0.35em] text-[var(--color-neon-yellow)]"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            ◆ BIO · ESPAÑOL
          </p>
          <div className="mt-6 space-y-5 text-base leading-8 text-[var(--color-text)]">
            {bioES.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        <div className="my-16 border-t border-[var(--color-grid)]" />

        <section id="en" className="scroll-mt-12">
          <p
            className="text-[10px] tracking-[0.35em] text-[var(--color-neon-cyan)]"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            ◆ BIO · ENGLISH
          </p>
          <div className="mt-6 space-y-5 text-base leading-8 text-[var(--color-text)]">
            {bioEN.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <p
            className="text-[10px] tracking-[0.35em] text-[var(--color-neon-magenta)]"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            ◆ TRAYECTORIA · TRAJECTORY
          </p>
          <ol className="mt-8 space-y-6">
            {trajectory.map((r, i) => (
              <li
                key={i}
                className="grid grid-cols-1 gap-2 md:grid-cols-[200px_1fr] md:gap-6"
              >
                <p
                  className="text-[10px] tracking-[0.25em] text-[var(--color-text-muted)]"
                  style={{ fontFamily: "var(--font-accent)" }}
                >
                  {r.years.toUpperCase()}
                </p>
                <div>
                  <p className="text-base text-[var(--color-text)]">
                    <span className="font-semibold">{r.role}</span>
                    <span className="text-[var(--color-text-muted)]">
                      {" · "}
                      {r.company}
                    </span>
                    {r.location && (
                      <span className="text-[var(--color-text-muted)]">
                        {" · "}
                        {r.location}
                      </span>
                    )}
                  </p>
                  {r.notes && (
                    <p className="mt-1.5 text-sm leading-7 text-[var(--color-text-muted)]">
                      {r.notes}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-20">
          <p
            className="text-[10px] tracking-[0.35em] text-[var(--color-neon-cyan)]"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            ◆ EDUCACIÓN · EDUCATION
          </p>
          <ol className="mt-8 space-y-4">
            {education.map((e, i) => (
              <li
                key={i}
                className="grid grid-cols-1 gap-2 md:grid-cols-[200px_1fr] md:gap-6"
              >
                <p
                  className="text-[10px] tracking-[0.25em] text-[var(--color-text-muted)]"
                  style={{ fontFamily: "var(--font-accent)" }}
                >
                  {e.years}
                </p>
                <div>
                  <p className="text-base text-[var(--color-text)]">
                    <span className="font-semibold">{e.title}</span>
                  </p>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    {e.institution}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <p
              className="text-[10px] tracking-[0.35em] text-[var(--color-neon-yellow)]"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              ◆ IDIOMAS · LANGUAGES
            </p>
            <ul className="mt-6 space-y-2 text-base">
              {languages.map((l) => (
                <li key={l.lang} className="flex items-baseline gap-3">
                  <span className="text-[var(--color-text)]">{l.lang}</span>
                  <span className="text-[var(--color-text-muted)]">
                    · {l.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p
              className="text-[10px] tracking-[0.35em] text-[var(--color-neon-magenta)]"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              ◆ UBICACIÓN · LOCATION
            </p>
            <p className="mt-6 text-base text-[var(--color-text)]">
              Buenos Aires, Argentina
            </p>
            <p className="mt-1 text-sm text-[var(--color-text-muted)]">
              Habilitada para trabajar en AR + UE · remote-friendly
            </p>
          </div>

          <div>
            <p
              className="text-[10px] tracking-[0.35em] text-[var(--color-neon-cyan)]"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              ◆ TOP SKILLS
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {topSkills.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-[var(--color-grid)] px-3 py-1 text-xs text-[var(--color-text)]"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p
              className="text-[10px] tracking-[0.35em] text-[var(--color-neon-yellow)]"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              ◆ CERTIFICACIONES
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {certifications.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-[var(--color-grid)] px-3 py-1 text-xs text-[var(--color-text)]"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <footer className="mt-20 border-t border-[var(--color-grid)] pt-10">
          <p className="text-base leading-8 text-[var(--color-text-muted)] italic">
            Si llegaste hasta acá: gracias. Si querés laburar conmigo o
            charlar, estoy en{" "}
            <Link
              href="/contact"
              className="text-[var(--color-neon-cyan)] hover:underline"
            >
              /contact
            </Link>
            .
          </p>

          <div className="mt-8">
            <Link
              href="/"
              className="text-xs text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
            >
              ← volver al hogar
            </Link>
          </div>
        </footer>
      </motion.article>
    </div>
  );
}
