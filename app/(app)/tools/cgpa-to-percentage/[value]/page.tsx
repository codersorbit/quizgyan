import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata, breadcrumbLd, faqLd } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { cgpaToPercentage } from "@/lib/tools/logic/cgpa";
import { toolUrl } from "@/lib/tools/registry";
import CgpaIsland from "@/components/tools/islands/CgpaIsland";

const MIN = 4.0;
const MAX = 10.0;

/** "9.2" — canonical one-decimal string for a CGPA value. */
const fmt = (n: number) => n.toFixed(1);

function isValid(value: string): number | null {
  if (!/^\d+(\.\d)?$/.test(value)) return null;
  const n = Number(value);
  if (Number.isNaN(n) || n < MIN || n > MAX) return null;
  // must be on the 0.1 grid
  if (Math.round(n * 10) !== n * 10) return null;
  return Math.round(n * 10) / 10;
}

export function generateStaticParams() {
  const out: { value: string }[] = [];
  for (let i = Math.round(MIN * 10); i <= Math.round(MAX * 10); i++) {
    out.push({ value: fmt(i / 10) });
  }
  return out;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ value: string }>;
}): Promise<Metadata> {
  const { value } = await params;
  const n = isValid(value);
  if (n == null) return {};
  const r = cgpaToPercentage(n);
  return buildMetadata({
    title: `${fmt(n)} CGPA in Percentage — CBSE (${r.percentage}%)`,
    description: `${fmt(n)} CGPA equals ${r.percentage}% under the CBSE formula (CGPA × 9.5). Grade band ${r.grade.code}. Convert any CGPA to percentage instantly.`,
    path: `${toolUrl("cgpa-to-percentage")}/${fmt(n)}`,
  });
}

export default async function CgpaValuePage({ params }: { params: Promise<{ value: string }> }) {
  const { value } = await params;
  const n = isValid(value);
  if (n == null) notFound();

  const r = cgpaToPercentage(n);
  const prev = n - 0.1 >= MIN ? fmt(Math.round((n - 0.1) * 10) / 10) : null;
  const next = n + 0.1 <= MAX ? fmt(Math.round((n + 0.1) * 10) / 10) : null;
  const path = `${toolUrl("cgpa-to-percentage")}/${fmt(n)}`;

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "CGPA to Percentage", path: toolUrl("cgpa-to-percentage") },
    { name: `${fmt(n)} CGPA`, path },
  ];

  const faq = [
    {
      q: `What is ${fmt(n)} CGPA in percentage?`,
      a: `${fmt(n)} CGPA equals ${r.percentage}% in CBSE, calculated as ${fmt(n)} × 9.5.`,
    },
    {
      q: `What grade is ${fmt(n)} CGPA?`,
      a: `A percentage of ${r.percentage}% falls in CBSE grade band ${r.grade.code} (marks range ${r.grade.range}).`,
    },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbLd(crumbs), faqLd(faq)]} />
      <Breadcrumbs crumbs={crumbs} />

      <header className="mb-6">
        <span className="chip glass text-cobalt">🎯 CBSE CGPA</span>
        <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
          {fmt(n)} CGPA in Percentage
        </h1>
        {/* Server-rendered answer — ranks without JS */}
        <p className="mt-3 text-lg text-ink">
          <strong>{fmt(n)} CGPA = {r.percentage}%</strong> in CBSE, calculated as {fmt(n)} × 9.5 = {r.percentage}.
          This percentage falls in grade band <strong>{r.grade.code}</strong>{" "}
          {r.grade.point != null && <>(grade point {r.grade.point})</>}.
        </p>
        <p lang="bn" className="mt-2 text-sm text-muted">
          সিবিএসই নিয়মে {fmt(n)} সিজিপিএ = {r.percentage}% ({fmt(n)} × ৯.৫), গ্রেড ব্যান্ড {r.grade.code}।
        </p>
      </header>

      {/* Live tool, pre-filled */}
      <CgpaIsland initialCgpa={fmt(n)} />

      {/* Neighbour links */}
      <nav className="no-print mt-6 flex items-center justify-between text-sm" aria-label="Nearby CGPA values">
        {prev ? (
          <Link href={`${toolUrl("cgpa-to-percentage")}/${prev}`} className="rounded-full border border-line px-4 py-2 font-semibold text-cobalt transition hover:border-cobalt">
            ← {prev} CGPA
          </Link>
        ) : (
          <span />
        )}
        <Link href={toolUrl("cgpa-to-percentage")} className="font-semibold text-muted hover:text-cobalt">
          All values
        </Link>
        {next ? (
          <Link href={`${toolUrl("cgpa-to-percentage")}/${next}`} className="rounded-full border border-line px-4 py-2 font-semibold text-cobalt transition hover:border-cobalt">
            {next} CGPA →
          </Link>
        ) : (
          <span />
        )}
      </nav>

      <section className="mt-8">
        <h2 className="font-display text-xl font-bold text-ink">How it works</h2>
        <p className="mt-2 max-w-2xl text-muted">
          CBSE converts CGPA to percentage by multiplying by 9.5. So {fmt(n)} × 9.5 = {r.percentage}%. To go the
          other way, divide a percentage by 9.5 to get the CGPA.
        </p>
      </section>
    </>
  );
}
