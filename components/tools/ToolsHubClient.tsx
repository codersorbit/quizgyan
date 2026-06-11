"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CATEGORIES, TOOLS, toolUrl } from "@/lib/tools/registry";
import { LangToggle, useLang, useT, pick, tri, withLang } from "@/components/tools/islands/_shared";

export default function ToolsHub() {
  const [lang, setLang] = useLang();
  const [q, setQ] = useState("");
  const t = useT(lang);

  const query = q.trim().toLowerCase();
  const matches = useMemo(() => {
    if (!query) return null;
    return TOOLS.filter((tool) => {
      const hay = [tool.name.en, tool.name.hi, tool.name.bn, tool.short.en, tool.short.hi, tool.short.bn, ...tool.keywords]
        .join(" ")
        .toLowerCase();
      return hay.includes(query);
    });
  }, [query]);

  return (
    <div>
      <div className="no-print mb-6 flex flex-wrap items-center gap-3">
        <label htmlFor="tool-search" className="relative flex-1 min-w-[12rem]">
          <span className="sr-only">{t("Search tools", "টুল খোঁজো")}</span>
          <input
            id="tool-search"
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t("Search tools…", "টুল খোঁজো…")}
            className="w-full rounded-full border border-line bg-card px-4 py-2.5 text-ink outline-none focus:ring-2 focus:ring-cobalt"
          />
        </label>
        <LangToggle lang={lang} onChange={setLang} />
      </div>

      {matches ? (
        <section>
          <h2 className="mb-3 font-display text-lg font-bold text-ink">
            {matches.length} {t("result(s)", "ফলাফল")}
          </h2>
          {matches.length === 0 ? (
            <p className="rounded-2xl border border-line bg-card p-6 text-muted">
              {t("No tools match that search yet. Try another word.", "এই খোঁজে কোনো টুল মেলেনি। অন্য শব্দ চেষ্টা করো।")}
            </p>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {matches.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} lang={lang} />
              ))}
            </div>
          )}
        </section>
      ) : (
        <div className="space-y-10">
          {CATEGORIES.map((cat) => {
            const tools = TOOLS.filter((x) => x.category === cat.key);
            if (tools.length === 0) return null;
            const isUtil = cat.key === "student-utilities";
            return (
              <section key={cat.key} className={isUtil ? "mt-2 border-t-2 border-dashed border-line pt-8" : ""}>
                {isUtil && (
                  <span className="chip bg-amber/20 text-ink">
                    🧰 {tri(lang, "For students & teachers", "छात्रों और शिक्षकों के लिए", "শিক্ষার্থী ও শিক্ষকদের জন্য")}
                  </span>
                )}
                <h2 className={`font-display text-xl font-bold text-ink ${isUtil ? "mt-3" : ""}`}>{pick(cat.name, lang)}</h2>
                <p className="mb-3 max-w-2xl text-sm text-muted">{pick(cat.blurb, lang)}</p>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {tools.map((tool) => (
                    <ToolCard key={tool.slug} tool={tool} lang={lang} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}

function ToolCard({
  tool,
  lang,
}: {
  tool: (typeof TOOLS)[number];
  lang: "en" | "hi" | "bn";
}) {
  return (
    <Link href={withLang(toolUrl(tool.slug), lang)} className="card relative border p-4 transition hover:-translate-y-0.5">
      {tool.popular && (
        <span className="absolute right-3 top-3 rounded-full bg-sun px-2 py-0.5 text-[11px] font-bold text-[#3a2a00]">
          {lang === "bn" ? "জনপ্রিয়" : lang === "hi" ? "लोकप्रिय" : "Popular"}
        </span>
      )}
      <div className="flex items-center gap-2">
        <span aria-hidden className="grid h-10 w-10 place-items-center rounded-2xl bg-cobalt-soft text-xl">
          {tool.icon}
        </span>
        <div>
          <p className="font-semibold leading-tight text-ink">{tool.name.en}</p>
          <p lang="bn" className="text-xs text-muted">{tool.name.bn}</p>
        </div>
      </div>
      <p className="mt-2 text-sm text-muted">{pick(tool.short, lang)}</p>
    </Link>
  );
}
