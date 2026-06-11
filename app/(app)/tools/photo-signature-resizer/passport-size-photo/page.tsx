import type { Metadata } from "next";
import { buildMetadata, breadcrumbLd, faqLd } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { toolUrl } from "@/lib/tools/registry";
import ToolLink from "@/components/tools/ToolLink";
import PhotoSignatureResizerIsland from "@/components/tools/islands/PhotoSignatureResizerIsland";

const base = () => toolUrl("photo-signature-resizer");
const path = () => `${base()}/passport-size-photo`;

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Passport-Size Photo Maker (3.5 × 4.5 cm) — Free & Private",
    description: "Crop and resize a photo to a common passport size (3.5 × 4.5 cm at 300 DPI) in your browser. No upload. Always confirm the exact size your form or embassy asks for.",
    path: path(),
  });
}

export default function PassportPhotoPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "Photo & Signature Resizer", path: base() },
    { name: "Passport-size photo", path: path() },
  ];

  const faq = [
    {
      q: "What size is a passport photo?",
      a: "A very common passport-style size is 3.5 × 4.5 cm (about 413 × 531 pixels at 300 DPI). This page starts at that size, but you should always confirm the exact requirement for your specific form, country or embassy.",
    },
    {
      q: "Is my photo kept private?",
      a: "Yes. Cropping and resizing happen entirely in your browser, so your photo is never uploaded to any server.",
    },
    {
      q: "Can it remove the background?",
      a: "No. It can place the photo on a plain white background, but it cannot cut out an existing background. For a strict white-background requirement, take the photo against a white wall.",
    },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbLd(crumbs), faqLd(faq)]} />
      <Breadcrumbs crumbs={crumbs} />

      <header className="mb-6">
        <span className="chip glass text-cobalt">🖼️ Passport photo</span>
        <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
          Passport-Size Photo (3.5 × 4.5 cm)
        </h1>
        <p className="mt-3 text-lg text-ink">
          Crop and resize a photo to a common <strong>3.5 × 4.5 cm</strong> passport size — in your browser, never uploaded.
        </p>
        <p className="mt-2 text-sm text-coral">⚠️ Sizes vary by country and form. Always confirm the exact dimensions and file-size limit your application requires; use the Custom option if it differs.</p>
        <p lang="hi" className="mt-2 text-sm text-muted">सामान्य 3.5 × 4.5 cm पासपोर्ट आकार में फ़ोटो क्रॉप व रिसाइज़ करें — सटीक माप अपने फ़ॉर्म से अवश्य जाँचें।</p>
        <p lang="bn" className="mt-2 text-sm text-muted">সাধারণ 3.5 × 4.5 cm পাসপোর্ট আকারে ছবি ক্রপ ও রিসাইজ করো — সঠিক মাপ নিজের ফর্ম থেকে যাচাই করো।</p>
      </header>

      {/* Tool, pre-set to the passport preset */}
      <PhotoSignatureResizerIsland initialMode="preset" initialPreset="passport" />

      <nav className="no-print mt-8 text-sm" aria-label="Related">
        <div className="flex flex-wrap gap-2">
          <ToolLink href={`${base()}/resize-to-100kb`} className="rounded-full border border-line px-4 py-2 font-semibold text-cobalt transition hover:border-cobalt">Resize to 100 KB</ToolLink>
          <ToolLink href={base()} className="rounded-full border border-line px-4 py-2 font-semibold text-muted transition hover:border-cobalt hover:text-cobalt">Custom size &amp; KB</ToolLink>
        </div>
      </nav>
    </>
  );
}
