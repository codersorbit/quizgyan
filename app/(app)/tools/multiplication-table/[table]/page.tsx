import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata, breadcrumbLd, faqLd } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { singleTable } from "@/lib/tools/logic/multiplicationTable";
import { toolUrl } from "@/lib/tools/registry";
import ToolLink from "@/components/tools/ToolLink";
import MultiplicationTableIsland from "@/components/tools/islands/MultiplicationTableIsland";

const MIN = 2;
const MAX = 30;
const UP_TO = 20; // server-rendered rows per table

const base = () => toolUrl("multiplication-table");
const tableUrl = (n: number) => `${base()}/table-of-${n}`;

/** Parse the "table-of-N" slug → N (or null if out of range / malformed). */
function parseTable(slug: string): number | null {
  const m = /^table-of-(\d+)$/.exec(slug);
  if (!m) return null;
  const n = Number(m[1]);
  if (!Number.isInteger(n) || n < MIN || n > MAX) return null;
  return n;
}

export function generateStaticParams() {
  const out: { table: string }[] = [];
  for (let n = MIN; n <= MAX; n += 1) out.push({ table: `table-of-${n}` });
  return out;
}

export async function generateMetadata({ params }: { params: Promise<{ table: string }> }): Promise<Metadata> {
  const { table } = await params;
  const n = parseTable(table);
  if (n == null) return {};
  return buildMetadata({
    title: `Table of ${n} — Multiplication Table of ${n} (${n} × 1 to ${n} × ${UP_TO})`,
    description: `The multiplication table of ${n}, from ${n} × 1 = ${n} up to ${n} × ${UP_TO} = ${n * UP_TO}. Read it, print it, or make a colourful chart — free, with বাংলা and हिन्दी support.`,
    path: tableUrl(n),
  });
}

export default async function TableOfNPage({ params }: { params: Promise<{ table: string }> }) {
  const { table } = await params;
  const n = parseTable(table);
  if (n == null) notFound();

  const rows = singleTable(n, UP_TO);
  const prev = n - 1 >= MIN ? n - 1 : null;
  const next = n + 1 <= MAX ? n + 1 : null;

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "Multiplication Table", path: base() },
    { name: `Table of ${n}`, path: tableUrl(n) },
  ];

  const faq = [
    {
      q: `What is the table of ${n}?`,
      a: `The table of ${n} is ${n} × 1 = ${n}, ${n} × 2 = ${n * 2}, ${n} × 3 = ${n * 3}, and so on up to ${n} × ${UP_TO} = ${n * UP_TO}.`,
    },
    {
      q: `What is ${n} times ${UP_TO}?`,
      a: `${n} × ${UP_TO} = ${n * UP_TO}.`,
    },
    {
      q: `How can I learn the table of ${n} quickly?`,
      a: `Notice that each step adds ${n}: start at ${n} and keep adding ${n} (${n}, ${n * 2}, ${n * 3}, …). Reading it aloud and writing it out a few times helps it stick.`,
    },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbLd(crumbs), faqLd(faq)]} />
      <Breadcrumbs crumbs={crumbs} />

      <header className="mb-6">
        <span className="chip glass text-cobalt">✖️ Multiplication</span>
        <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
          Multiplication Table of {n}
        </h1>
        <p className="mt-3 text-lg text-ink">
          The table of <strong>{n}</strong> runs from <strong>{n} × 1 = {n}</strong> up to{" "}
          <strong>{n} × {UP_TO} = {n * UP_TO}</strong>. Each step goes up by {n}.
        </p>
        <p lang="hi" className="mt-2 text-sm text-muted">{n} का पहाड़ा: {n} × 1 = {n} से {n} × {UP_TO} = {n * UP_TO} तक, हर बार {n} जुड़ता है।</p>
        <p lang="bn" className="mt-2 text-sm text-muted">{n}-এর নামতা: {n} × ১ = {n} থেকে {n} × {UP_TO} = {n * UP_TO} পর্যন্ত, প্রতিবার {n} যোগ হয়।</p>
      </header>

      {/* Server-rendered table — ranks and works without JavaScript */}
      <section aria-label={`Table of ${n}`} className="rounded-2xl border border-line bg-white p-5">
        <ol className="grid grid-cols-1 gap-1 sm:grid-cols-2">
          {rows.map((r) => (
            <li key={r.b} className="rounded-lg bg-cobalt-soft/60 px-3 py-1.5 text-lg tabular-nums">
              {r.a} × {r.b} = <strong className="text-ink">{r.product}</strong>
            </li>
          ))}
        </ol>
      </section>

      {/* Neighbour links */}
      <nav className="no-print mt-6 flex items-center justify-between text-sm" aria-label="Nearby tables">
        {prev ? (
          <ToolLink href={tableUrl(prev)} className="rounded-full border border-line px-4 py-2 font-semibold text-cobalt transition hover:border-cobalt">← Table of {prev}</ToolLink>
        ) : (
          <span />
        )}
        <ToolLink href={base()} className="font-semibold text-muted hover:text-cobalt">All tables &amp; charts</ToolLink>
        {next ? (
          <ToolLink href={tableUrl(next)} className="rounded-full border border-line px-4 py-2 font-semibold text-cobalt transition hover:border-cobalt">Table of {next} →</ToolLink>
        ) : (
          <span />
        )}
      </nav>

      {/* Interactive generator, pre-set to this table */}
      <section className="mt-8">
        <h2 className="mb-3 font-display text-xl font-bold text-ink">Make a printable or colourful version</h2>
        <MultiplicationTableIsland initialN={n} initialMode="single" />
      </section>
    </>
  );
}
