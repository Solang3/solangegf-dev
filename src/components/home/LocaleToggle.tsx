"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { locales } from "@/i18n/dictionaries";

export default function LocaleToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <div
      className="flex items-center gap-1 text-[11px] text-ink-soft"
      style={{ fontFamily: "var(--font-mono)" }}
      role="group"
      aria-label="Language"
    >
      {locales.map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          {i > 0 && <span className="text-line-strong">/</span>}
          <button
            type="button"
            onClick={() => setLocale(l)}
            aria-pressed={locale === l}
            className={`uppercase transition-colors ${
              locale === l ? "text-ink" : "hover:text-ink"
            }`}
          >
            {l}
          </button>
        </span>
      ))}
    </div>
  );
}
