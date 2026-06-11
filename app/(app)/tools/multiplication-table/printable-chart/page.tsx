import type { Metadata } from "next";
import { buildMetadata, breadcrumbLd, faqLd } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { chartGrid } from "@/lib/tools/logic/multiplicationTable";
import { toolUrl } from "@/lib/tools/registry";
import ToolLink from "@/components/tools/ToolLink";
import MultiplicationTableIsland from "@/components/tools/islands/MultiplicationTableIsland";

const SIZE = 12;
const path = () => `${toolUrl("multiplication-table")}/printable-chart`;

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Printable Multiplication Chart (1–12) — Free to Print",
    description: "A free, ready-to-print 1–12 multiplication chart on clean A4. Print it as-is, or build a larger 15×15 or 20×20 chart — with বাংলা and हिन्दी support.",
    path: path(),
  });
}

export default function PrintableChartPage() {
  const grid = chartGrid(SIZE, SIZE);

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "Multiplication Table", path: toolUrl("multiplication-table") },
    { name: "Printable chart", path: path() },
  ];

  const faq = [
    {
      q: "How do I print this multiplication chart?",
      a: "Use your browser's print option (or the Print button in the chart tool). The chart is sized to fit cleanly on one A4 page.",
    },
    {
      q: "Can I get a bigger chart, like 15×15 or 20×20?",
      a: "Yes — the chart tool below lets you choose 10×10, 12×12, 15×15 or 20×20 and print any of them.",
    },
    {
      q: "Is the chart free?",
      a: "Yes, completely free, with no sign-up. It also supports বাংলা and हिन्दी labels.",
    },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbLd(crumbs), faqLd(faq)]} />
      <Breadcrumbs crumbs={crumbs} />

      <header className="mb-6">
        <span className="chip glass text-cobalt">✖️ Multiplication</span>
        <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
          Printable Multiplication Chart (1–{SIZE})
        </h1>
        <p className="mt-3 text-lg text-ink">A ready-to-print {SIZE} × {SIZE} times-table grid. Print it straight away, or build a bigger chart with the tool below.</p>
        <p lang="hi" className="mt-2 text-sm text-muted">प्रिंट करने योग्य {SIZE} × {SIZE} गुणन चार्ट — तुरंत प्रिंट करें या नीचे बड़ा चार्ट बनाएँ।</p>
        <p lang="bn" className="mt-2 text-sm text-muted">প্রিন্টযোগ্য {SIZE} × {SIZE} গুণন চার্ট — এখনই প্রিন্ট করো বা নিচে বড় চার্ট বানাও।</p>
      </header>

      {/* Server-rendered chart — ranks and works without JavaScript */}
      <section className="overflow-x-auto rounded-2xl border border-line bg-white p-3">
        <table className="w-full border-collapse text-center text-sm tabular-nums">
          <caption className="sr-only">Multiplication chart 1 to {SIZE}</caption>
          <thead>
            <tr>
              <th className="border border-line bg-cobalt/10 p-1.5">×</th>
              {Array.from({ length: SIZE }, (_, j) => (
                <th key={j} scope="col" className="border border-line bg-cobalt/10 p-1.5 font-bold text-ink">{j + 1}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {grid.map((row, i) => (
              <tr key={i}>
                <th scope="row" className="border border-line bg-cobalt/10 p-1.5 font-bold text-ink">{i + 1}</th>
                {row.map((p, j) => (
                  <td key={j} className="border border-line p-1.5 text-ink">{p}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <nav className="no-print mt-6 text-sm" aria-label="Back to tables">
        <ToolLink href={toolUrl("multiplication-table")} className="font-semibold text-cobalt hover:underline">← All tables &amp; the table generator</ToolLink>
      </nav>

      {/* Interactive chart, for larger sizes + colour + print */}
      <section className="mt-8">
        <h2 className="mb-3 font-display text-xl font-bold text-ink">Build a bigger or colourful chart</h2>
        <MultiplicationTableIsland initialMode="chart" />
      </section>
    </>
  );
}
