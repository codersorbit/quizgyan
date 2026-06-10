// Shared types for the config-driven /tools engine.
// Single source of truth lives in registry.ts; pure logic in ./logic/*.

export type ToolCategory = "marks" | "school" | "maths" | "teacher";

/** A short string that exists in all three site languages. */
export interface Bilingual {
  en: string;
  hi: string;
  bn: string;
}

export interface ToolFaq {
  q: Bilingual;
  a: Bilingual;
}

/** A cross-link from a tool to a real StudyMatic chapter. */
export interface ChapterLink {
  classId: string;
  subject: string;
  slug: string;
  board: "cbse" | "wbbpe";
  label: Bilingual;
}

export interface ToolConfig {
  slug: string;
  name: Bilingual;
  category: ToolCategory;
  /** Single emoji used as the tool glyph (no icon dependency). */
  icon: string;
  popular?: boolean;
  /** One-line description for cards and meta. */
  short: Bilingual;
  /** One-paragraph plain-language intro shown under the H1. */
  intro: Bilingual;
  /** "How it works" — the formula in student-friendly language. */
  how: Bilingual;
  keywords: string[];
  faq: ToolFaq[];
  /** Slugs of other tools to surface in the related grid. */
  related: string[];
  /** Real chapter pages for the "Continue studying" block. */
  chapterLinks: ChapterLink[];
}

export interface CategoryMeta {
  key: ToolCategory;
  name: Bilingual;
  blurb: Bilingual;
}

export type Lang = "en" | "hi" | "bn";

/** Resolve a value for the active language. */
export function pick(b: Bilingual, lang: Lang): string {
  return lang === "bn" ? b.bn : lang === "hi" ? b.hi : b.en;
}
