import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCaseStudy } from "@/content/work";
import { getWorkDetail, workDetails } from "@/content/work-details";

export function generateStaticParams() {
  return Object.keys(workDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  const detail = getWorkDetail(slug);
  if (!cs || !detail) return { title: "Work" };
  return {
    title: `${cs.title} — How it works`,
    description: detail.intro,
    openGraph: { title: `${cs.title} — How it works`, description: detail.intro },
  };
}

export default async function WorkDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  const detail = getWorkDetail(slug);
  if (!cs || !detail) notFound();

  return (
    <div className="relative min-h-screen">
      <div aria-hidden className="sheet-grid absolute inset-0 -z-30 opacity-50" />

      <header className="mx-auto flex max-w-4xl items-center justify-between px-6 py-6 md:px-8">
        <Link
          href={`/work/${cs.slug}`}
          className="text-sm font-semibold tracking-[-0.01em] text-ink"
          style={{ fontFamily: "var(--font-display)" }}
        >
          ← {cs.title}
        </Link>
        <a
          href="mailto:solangegf@gmail.com"
          className="text-[13px] text-ink-soft underline-offset-4 hover:text-ink hover:underline"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          let&apos;s talk
        </a>
      </header>

      <article className="mx-auto max-w-3xl px-6 pb-28 pt-10 md:px-8 md:pt-16">
        <p
          className="text-[11px] tracking-[0.3em] text-ink-soft"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {cs.index} · UNDER THE HOOD
        </p>
        <h1
          className="mt-5 font-semibold leading-[0.95] tracking-[-0.03em] text-[clamp(2.4rem,7vw,4.8rem)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {cs.title}
        </h1>
        <p className="mt-6 text-xl leading-8 text-ink md:text-2xl md:leading-9">{detail.intro}</p>

        <div className="mt-14 space-y-14">
          {detail.sections.map((sec) => (
            <section key={sec.heading} className="border-t border-line-strong pt-8">
              <h2
                className="text-2xl font-semibold tracking-[-0.01em] md:text-3xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {sec.heading}
              </h2>
              <div className="mt-5 space-y-5 text-lg leading-8 text-ink-soft">
                {sec.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              {sec.bullets && (
                <ul className="mt-6 space-y-3">
                  {sec.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-base leading-7 text-ink">
                      <span className="text-ink-soft">→</span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-between gap-6 border-t border-line pt-8">
          <Link
            href={`/work/${cs.slug}`}
            className="text-sm text-ink-soft underline-offset-4 hover:text-ink hover:underline"
          >
            ← back to the case study
          </Link>
          {cs.liveUrl && (
            <a
              href={cs.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
            >
              <span style={{ fontFamily: "var(--font-mono)" }}>{cs.liveLabel}</span>
              <span className="transition-transform group-hover:translate-x-0.5">↗</span>
            </a>
          )}
        </div>
      </article>
    </div>
  );
}
