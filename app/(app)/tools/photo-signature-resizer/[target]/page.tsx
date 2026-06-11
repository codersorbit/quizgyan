import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata, breadcrumbLd, faqLd } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { toolUrl } from "@/lib/tools/registry";
import ToolLink from "@/components/tools/ToolLink";
import PhotoSignatureResizerIsland from "@/components/tools/islands/PhotoSignatureResizerIsland";

const KB_TARGETS = [10, 20, 50, 100, 200, 500];

const base = () => toolUrl("photo-signature-resizer");
const kbUrl = (kb: number) => `${base()}/resize-to-${kb}kb`;

function parseTarget(slug: string): number | null {
  const m = /^resize-to-(\d+)kb$/.exec(slug);
  if (!m) return null;
  const kb = Number(m[1]);
  return KB_TARGETS.includes(kb) ? kb : null;
}

export function generateStaticParams() {
  return KB_TARGETS.map((kb) => ({ target: `resize-to-${kb}kb` }));
}

export async function generateMetadata({ params }: { params: Promise<{ target: string }> }): Promise<Metadata> {
  const { target } = await params;
  const kb = parseTarget(target);
  if (kb == null) return {};
  return buildMetadata({
    title: `Resize Image to ${kb} KB Online — Free & Private`,
    description: `Compress a photo or signature to under ${kb} KB while keeping its size, right in your browser. No upload, no sign-up — works for exam and form submissions. বাংলা ও हिन्दी supported.`,
    path: kbUrl(kb),
  });
}

export default async function ResizeToKbPage({ params }: { params: Promise<{ target: string }> }) {
  const { target } = await params;
  const kb = parseTarget(target);
  if (kb == null) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "Photo & Signature Resizer", path: base() },
    { name: `Resize to ${kb} KB`, path: kbUrl(kb) },
  ];

  const faq = [
    {
      q: `How do I resize an image to ${kb} KB?`,
      a: `Upload your image below. This page is already set to keep the original size and compress to under ${kb} KB, so just press “Resize & compress” and download.`,
    },
    {
      q: `Will my photo be uploaded to a server?`,
      a: `No. The compression happens entirely in your browser on your device, so your image stays private and nothing is sent anywhere.`,
    },
    {
      q: `What if it can't reach ${kb} KB?`,
      a: `Very large or detailed photos may not fit at full size; the tool then reduces the dimensions a little and tells you the closest size it reached. Choosing JPG (not PNG) usually helps a lot.`,
    },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbLd(crumbs), faqLd(faq)]} />
      <Breadcrumbs crumbs={crumbs} />

      <header className="mb-6">
        <span className="chip glass text-cobalt">🖼️ Resize</span>
        <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
          Resize an Image to {kb} KB
        </h1>
        <p className="mt-3 text-lg text-ink">
          Compress a photo or signature to <strong>under {kb} KB</strong> while keeping its original size — entirely in your browser, so your file is never uploaded.
        </p>
        <p lang="hi" className="mt-2 text-sm text-muted">किसी फ़ोटो या हस्ताक्षर को मूल आकार रखते हुए {kb} KB से कम में कंप्रेस करें — सब आपके ब्राउज़र में, कोई अपलोड नहीं।</p>
        <p lang="bn" className="mt-2 text-sm text-muted">ছবি বা স্বাক্ষরকে মূল আকার রেখে {kb} KB-র নিচে কম্প্রেস করো — সবই তোমার ব্রাউজারে, কোনো আপলোড নেই।</p>
      </header>

      {/* Tool, pre-set to compress to this KB at original size */}
      <PhotoSignatureResizerIsland initialMode="custom" initialKeepSize initialMinKB={0} initialMaxKB={kb} />

      <nav className="no-print mt-8" aria-label="Other KB targets">
        <h2 className="mb-2 font-display text-lg font-bold text-ink">Other sizes</h2>
        <div className="flex flex-wrap gap-2">
          {KB_TARGETS.filter((k) => k !== kb).map((k) => (
            <ToolLink key={k} href={kbUrl(k)} className="rounded-full border border-line px-4 py-2 text-sm font-semibold text-cobalt transition hover:border-cobalt">
              Resize to {k} KB
            </ToolLink>
          ))}
          <ToolLink href={base()} className="rounded-full border border-line px-4 py-2 text-sm font-semibold text-muted transition hover:border-cobalt hover:text-cobalt">
            Custom size &amp; KB
          </ToolLink>
        </div>
      </nav>
    </>
  );
}
