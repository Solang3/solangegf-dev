import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy, workSlugs } from "@/content/work";
import { getWorkDetail } from "@/content/work-details";

export function generateStaticParams() {
  return workSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return { title: "Work" };
  return {
    title: `${cs.title} — Case Study`,
    description: cs.tagline,
    openGraph: { title: `${cs.title} — Solange Gonzalez`, description: cs.tagline },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const idx = caseStudies.findIndex((c) => c.slug === cs.slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];
  const hasDetails = Boolean(getWorkDetail(cs.slug));

  return (
    <div className="relative min-h-screen">
      <div aria-hidden className="sheet-grid absolute inset-0 -z-30 opacity-50" />

      {/* top bar */}
      <header className="mx-auto flex max-w-4xl items-center justify-between px-6 py-6 md:px-8">
        <Link
          href="/"
          className="text-sm font-semibold tracking-[-0.01em] text-ink"
          style={{ fontFamily: "var(--font-display)" }}
        >
          ← Solange Gonzalez
        </Link>
        <a
          href="mailto:solangegf@gmail.com"
          className="text-[13px] text-ink-soft underline-offset-4 hover:text-ink hover:underline"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          let&apos;s talk
        </a>
      </header>

      <article className="mx-auto max-w-4xl px-6 pb-28 pt-10 md:px-8 md:pt-16">
        <div
          className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] tracking-[0.3em] text-ink-soft"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          <span className="text-2xl tracking-normal text-ink md:text-3xl">{cs.index}</span>
          <span>{cs.status}</span>
          <span>·</span>
          <span>{cs.years}</span>
          <span>·</span>
          <span>{cs.role}</span>
        </div>

        <h1
          className="mt-6 font-semibold leading-[0.92] tracking-[-0.03em] text-[clamp(2.8rem,9vw,6.5rem)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {cs.title}
        </h1>
        <p className="mt-5 max-w-2xl text-xl leading-8 text-ink md:text-2xl">{cs.tagline}</p>

        {cs.liveUrl && (
          <a
            href={cs.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
          >
            <span style={{ fontFamily: "var(--font-mono)" }}>{cs.liveLabel}</span>
            <span className="transition-transform group-hover:translate-x-0.5">↗</span>
          </a>
        )}

        {cs.image && (
          <figure className="mt-12 overflow-hidden rounded-2xl border border-line-strong shadow-[0_22px_55px_-26px_rgba(16,16,18,0.5)]">
            <Image
              src={cs.image.src}
              alt={cs.image.alt}
              width={cs.image.width}
              height={cs.image.height}
              priority
              sizes="(min-width: 896px) 832px, 100vw"
              className="h-auto w-full"
            />
          </figure>
        )}

        <div className="my-14 h-px w-full bg-line-strong" />

        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_220px]">
          <div className="space-y-6 text-lg leading-8 text-ink">
            {cs.overview.map((p, i) => (
              <p key={i} className={i > 0 ? "text-ink-soft" : undefined}>
                {p}
              </p>
            ))}

            {hasDetails && (
              <Link
                href={`/work/${cs.slug}/details`}
                className="group inline-flex items-center gap-2 rounded-full border border-ink px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                How it works, in detail
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            )}

            <div className="pt-4">
              <h2
                className="text-[11px] tracking-[0.4em] text-ink-soft"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                ◆ HIGHLIGHTS
              </h2>
              <ul className="mt-5 space-y-3">
                {cs.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-base leading-7 text-ink">
                    <span className="text-ink-soft">→</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="md:border-l md:border-line md:pl-8">
            <h2
              className="text-[11px] tracking-[0.4em] text-ink-soft"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              ◆ STACK
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {cs.stack.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-line-strong px-3 py-1 text-xs text-ink-soft"
                >
                  {s}
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-between gap-6 border-t border-line pt-8">
          <Link
            href="/#trabajo"
            className="text-sm text-ink-soft underline-offset-4 hover:text-ink hover:underline"
          >
            ← all work
          </Link>
          <Link
            href={`/work/${next.slug}`}
            className="group inline-flex items-center gap-3 text-right"
          >
            <span
              className="text-[11px] tracking-[0.3em] text-ink-soft"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              NEXT
            </span>
            <span
              className="text-lg font-semibold tracking-[-0.01em] text-ink"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {next.title}
            </span>
            <span className="text-ink-soft transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </article>
    </div>
  );
}
