"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import type { Lang } from "@/lib/tools/types";

export { pick } from "@/lib/tools/types";
export type { Lang };

/* --------------------------- URL state sync ----------------------------- */
/**
 * Keeps a tool's inputs in the URL query string (shareable, indexable) without
 * pulling in next/navigation (which would force a client bailout on these
 * statically-rendered pages). Hydrates once from window.location on mount,
 * then mirrors `params` into the URL with history.replaceState.
 */
export function useUrlSync(
  params: Record<string, string>,
  onHydrate: (q: URLSearchParams) => void,
) {
  const hydrated = useRef(false);
  const onHydrateRef = useRef(onHydrate);
  onHydrateRef.current = onHydrate;

  useEffect(() => {
    if (hydrated.current) return;
    onHydrateRef.current(new URLSearchParams(window.location.search));
    hydrated.current = true;
  }, []);

  const serialized = JSON.stringify(params);
  useEffect(() => {
    if (!hydrated.current) return;
    const sp = new URLSearchParams(window.location.search);
    for (const [k, v] of Object.entries(params)) {
      if (v === "" || v == null) sp.delete(k);
      else sp.set(k, v);
    }
    const qs = sp.toString();
    const url = qs ? `${window.location.pathname}?${qs}` : window.location.pathname;
    window.history.replaceState(null, "", url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serialized]);
}

/** Read the initial language from ?lang=bn (defaults to English). */
export function useLang(): [Lang, (l: Lang) => void] {
  const [lang, setLang] = useState<Lang>("en");
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("lang");
    if (q === "bn") setLang("bn");
  }, []);
  const set = useCallback((l: Lang) => {
    setLang(l);
    const sp = new URLSearchParams(window.location.search);
    if (l === "bn") sp.set("lang", "bn");
    else sp.delete("lang");
    const qs = sp.toString();
    window.history.replaceState(null, "", qs ? `${window.location.pathname}?${qs}` : window.location.pathname);
  }, []);
  return [lang, set];
}

/* ------------------------------ UI atoms -------------------------------- */

export function LangToggle({ lang, onChange }: { lang: Lang; onChange: (l: Lang) => void }) {
  return (
    <div className="no-print inline-flex rounded-full border border-line bg-cream p-0.5 text-sm font-semibold">
      {(["en", "bn"] as const).map((l) => (
        <button
          key={l}
          type="button"
          aria-pressed={lang === l}
          onClick={() => onChange(l)}
          className={`rounded-full px-3 py-1 transition ${
            lang === l ? "bg-cobalt text-white shadow-sm" : "text-muted hover:text-ink"
          }`}
        >
          {l === "en" ? "EN" : "বাংলা"}
        </button>
      ))}
    </div>
  );
}

export function ErrorText({ children }: { children: React.ReactNode }) {
  if (!children) return null;
  return (
    <p role="alert" className="mt-2 text-sm font-medium text-coral">
      {children}
    </p>
  );
}

/** Labelled numeric input with consistent styling and a11y wiring. */
export function NumberField(props: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
  inputMode?: "numeric" | "decimal";
  suffix?: string;
}) {
  const { id, label, value, onChange, placeholder, min, max, step, inputMode = "decimal", suffix } = props;
  return (
    <label htmlFor={id} className="block">
      <span className="mb-1 block text-sm font-semibold text-ink">{label}</span>
      <span className="flex items-center gap-2 rounded-2xl border border-line bg-cream px-3 py-2 focus-within:ring-2 focus-within:ring-cobalt">
        <input
          id={id}
          type="number"
          inputMode={inputMode}
          value={value}
          min={min}
          max={max}
          step={step}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent text-lg font-semibold text-ink outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none"
        />
        {suffix && <span className="shrink-0 text-sm font-medium text-muted">{suffix}</span>}
      </span>
    </label>
  );
}

/* --------------------------- Result actions ----------------------------- */

export function ResultActions({
  lang,
  shareTitle,
  getShareText,
  disabled,
}: {
  lang: Lang;
  shareTitle: string;
  getShareText: () => string;
  disabled?: boolean;
}) {
  const [copied, setCopied] = useState(false);
  const t = (en: string, bn: string) => (lang === "bn" ? bn : en);

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(getShareText());
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard blocked — ignore */
    }
  }, [getShareText]);

  const share = useCallback(async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const text = getShareText();
    if (navigator.share) {
      try {
        await navigator.share({ title: shareTitle, text, url });
        return;
      } catch {
        /* user cancelled — fall through to copy */
      }
    }
    try {
      await navigator.clipboard.writeText(`${text}\n${url}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* ignore */
    }
  }, [getShareText, shareTitle]);

  return (
    <div className="no-print mt-4 flex flex-wrap gap-2">
      <button
        type="button"
        onClick={copy}
        disabled={disabled}
        className="rounded-full bg-cobalt px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-105 disabled:opacity-40"
      >
        {copied ? t("Copied ✓", "কপি হয়েছে ✓") : t("Copy result", "ফল কপি")}
      </button>
      <button
        type="button"
        onClick={share}
        disabled={disabled}
        className="rounded-full border border-line bg-card px-4 py-2 text-sm font-semibold text-ink transition hover:border-cobalt disabled:opacity-40"
      >
        {t("Share", "শেয়ার")}
      </button>
      <button
        type="button"
        onClick={() => window.print()}
        disabled={disabled}
        className="rounded-full border border-line bg-card px-4 py-2 text-sm font-semibold text-ink transition hover:border-cobalt disabled:opacity-40"
      >
        {t("Print", "প্রিন্ট")}
      </button>
    </div>
  );
}
