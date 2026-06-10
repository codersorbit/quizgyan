import type { Metadata } from "next";
import { site, absoluteUrl } from "@/lib/site";
import { buildMetadata, breadcrumbLd } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { TOOLS, toolUrl } from "@/lib/tools/registry";
import ToolsHubClient from "@/components/tools/ToolsHubClient";

const PATH = "/tools";
const TITLE = "Free Tools for Students & Teachers — Calculators | StudyMatic";
const DESC =
  "Free, no-login calculators for CBSE & WB Board students and teachers: CGPA to percentage, marks percentage, attendance, admission age and exam countdown — bilingual and mobile-friendly.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

function collectionLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: TITLE,
    description: DESC,
    url: absoluteUrl(PATH),
    isPartOf: { "@type": "WebSite", name: site.name, url: site.url },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: TOOLS.map((t, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: t.name.en,
        url: absoluteUrl(toolUrl(t.slug)),
      })),
    },
  };
}

export default function ToolsHubPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: PATH },
  ];
  return (
    <>
      <JsonLd data={[breadcrumbLd(crumbs), collectionLd()]} />
      <Breadcrumbs crumbs={crumbs} />

      <section className="relative overflow-hidden rounded-[2rem] glass border p-8 text-center shadow-xl sm:p-12">
        <span aria-hidden className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cobalt/20 blur-3xl" />
        <span aria-hidden className="pointer-events-none absolute -bottom-16 right-[-2rem] h-56 w-56 rounded-full bg-green/20 blur-3xl" />
        <div className="relative">
          <span className="chip glass text-cobalt">🧮 Free tools</span>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Free Tools for <span className="brand-gradient">Students &amp; Teachers</span>
          </h1>
          <p lang="bn" className="mx-auto mt-2 max-w-2xl font-display text-lg text-muted">
            শিক্ষার্থী, অভিভাবক ও শিক্ষকদের জন্য বিনামূল্যের ক্যালকুলেটর
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-muted">
            Quick, accurate calculators for everyday school maths — marks, grades, attendance and more.
            Every tool works offline once loaded, in English and বাংলা, with no login and no ads.
          </p>
        </div>
      </section>

      <div className="mt-8">
        <ToolsHubClient />
      </div>
    </>
  );
}
