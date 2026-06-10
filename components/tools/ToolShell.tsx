import Link from "next/link";
import type { ReactNode } from "react";
import { site, absoluteUrl } from "@/lib/site";
import { chapterUrl } from "@/lib/content";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd, faqLd } from "@/lib/seo";
import { relatedTools, toolUrl } from "@/lib/tools/registry";
import ToolLink from "@/components/tools/ToolLink";
import type { ToolConfig } from "@/lib/tools/types";

function webAppLd(tool: ToolConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: `${tool.name.en} — ${site.name}`,
    description: tool.short.en,
    url: absoluteUrl(toolUrl(tool.slug)),
    applicationCategory: "EducationalApplication",
    operatingSystem: "Any",
    inLanguage: ["en", "bn"],
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: 0, priceCurrency: "INR" },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
  };
}

export function ToolShell({ tool, children }: { tool: ToolConfig; children: ReactNode }) {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: tool.name.en, path: toolUrl(tool.slug) },
  ];
  const related = relatedTools(tool.slug);

  return (
    <>
      <JsonLd data={[breadcrumbLd(crumbs), webAppLd(tool), faqLd(tool.faq.map((f) => ({ q: f.q.en, a: f.a.en })))]} />
      <Breadcrumbs crumbs={crumbs} />

      {/* Header */}
      <header className="mb-6">
        <span className="chip glass text-cobalt">{tool.icon} {tool.name.bn}</span>
        <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
          {tool.name.en}
        </h1>
        <p className="mt-3 max-w-2xl text-muted">{tool.intro.en}</p>
        <p lang="hi" className="mt-2 max-w-2xl text-sm text-muted/90">{tool.intro.hi}</p>
        <p lang="bn" className="mt-2 max-w-2xl text-sm text-muted/90">{tool.intro.bn}</p>
      </header>

      {/* Interactive island */}
      {children}

      {/* How it works */}
      <section className="mt-8">
        <h2 className="font-display text-xl font-bold text-ink">How it works</h2>
        <p className="mt-2 max-w-2xl text-muted">{tool.how.en}</p>
        <p lang="hi" className="mt-2 max-w-2xl text-sm text-muted/90">{tool.how.hi}</p>
        <p lang="bn" className="mt-2 max-w-2xl text-sm text-muted/90">{tool.how.bn}</p>
      </section>

      {/* FAQ */}
      <section className="mt-8">
        <h2 className="font-display text-xl font-bold text-ink">Frequently asked questions</h2>
        <div className="mt-3 space-y-2">
          {tool.faq.map((f, i) => (
            <details key={i} className="rounded-2xl border border-line bg-card p-4">
              <summary className="cursor-pointer font-semibold text-ink">{f.q.en}</summary>
              <p className="mt-2 text-sm text-muted">{f.a.en}</p>
              <p lang="hi" className="mt-1 text-sm text-muted/90">
                <span className="font-medium text-ink/80">{f.q.hi}</span> — {f.a.hi}
              </p>
              <p lang="bn" className="mt-1 text-sm text-muted/90">
                <span className="font-medium text-ink/80">{f.q.bn}</span> — {f.a.bn}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Related tools */}
      {related.length > 0 && (
        <section className="no-print mt-8">
          <h2 className="font-display text-xl font-bold text-ink">Related tools</h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <ToolLink
                key={r.slug}
                href={toolUrl(r.slug)}
                className="card border p-4 transition hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-2">
                  <span aria-hidden className="text-xl">{r.icon}</span>
                  <span className="font-semibold text-ink">{r.name.en}</span>
                </div>
                <p className="mt-1 text-sm text-muted">{r.short.en}</p>
              </ToolLink>
            ))}
          </div>
        </section>
      )}

      {/* Continue studying */}
      <section className="no-print mt-8 rounded-2xl bg-cobalt-soft p-5">
        <h2 className="font-display text-lg font-bold text-ink">Continue studying</h2>
        {tool.chapterLinks.length > 0 ? (
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {tool.chapterLinks.map((c) => (
              <li key={`${c.classId}-${c.subject}-${c.slug}`}>
                <Link
                  href={chapterUrl(c.classId, c.subject, c.slug, c.board)}
                  className="flex items-center gap-2 rounded-xl bg-white/70 px-3 py-2 text-sm font-semibold text-cobalt transition hover:bg-white"
                >
                  📘 {c.label.en}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-3 flex flex-wrap gap-2">
            <Link href="/notes" className="rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-cobalt transition hover:bg-white">Revision notes</Link>
            <Link href="/mcqs" className="rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-cobalt transition hover:bg-white">Practice quizzes</Link>
            <Link href="/daily" className="rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-cobalt transition hover:bg-white">Daily challenge</Link>
          </div>
        )}
      </section>
    </>
  );
}
