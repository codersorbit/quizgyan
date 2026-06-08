import type { Metadata } from "next";
import { site, absoluteUrl } from "@/lib/site";
import type { Chapter } from "@/lib/types";

/* ------------------------------- Metadata ------------------------------- */
interface MetaInput {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}

export function buildMetadata({
  title,
  description,
  path,
  type = "website",
}: MetaInput): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: site.locale,
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

/* ------------------------------- JSON-LD -------------------------------- */
// Each builder returns a plain object rendered via the <JsonLd> component.

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: site.author.school,
    url: site.author.schoolUrl,
    sameAs: [site.url],
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
    inLanguage: "en-IN",
  };
}

export interface Crumb {
  name: string;
  path: string;
}

export function breadcrumbLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

export function webPageLd(title: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: absoluteUrl(path),
    isPartOf: { "@type": "WebSite", name: site.name, url: site.url },
    inLanguage: "en-IN",
  };
}

export function faqLd(faq: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Marks a chapter page as an educational learning resource. */
export function learningResourceLd(chapter: Chapter, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: chapter.seoTitle,
    description: chapter.metaDescription,
    url: absoluteUrl(path),
    educationalLevel: `CBSE Class ${chapter.classId}`,
    learningResourceType: ["Notes", "Quiz", "Practice questions"],
    inLanguage: "en-IN",
    isAccessibleForFree: true,
    publisher: {
      "@type": "EducationalOrganization",
      name: site.author.school,
      url: site.author.schoolUrl,
    },
  };
}
