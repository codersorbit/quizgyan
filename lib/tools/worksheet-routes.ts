// Pure URL builders for the Worksheet Generator's programmatic landing pages
// and the deep-link that opens the builder pre-scoped to a chapter. No imports,
// so both server pages and the sitemap can use them freely.

export const WORKSHEET_SLUG = "worksheet-generator";
const BASE = `/tools/${WORKSHEET_SLUG}`;

/** /tools/worksheet-generator/cbse/class-6/maths/fractions */
export const worksheetLandingUrl = (board: string, classId: string, subject: string, slug: string) =>
  `${BASE}/${board}/class-${classId}/${subject}/${slug}`;

/** /tools/worksheet-generator/cbse/class-6/maths (subject roll-up) */
export const worksheetSubjectUrl = (board: string, classId: string, subject: string) =>
  `${BASE}/${board}/class-${classId}/${subject}`;

/** Opens the builder with this chapter pre-selected (reads ?b/c/s/ch in the island). */
export const worksheetBuilderLink = (board: string, classId: string, subject: string, slug: string) =>
  `${BASE}?b=${encodeURIComponent(board)}&c=${encodeURIComponent(classId)}&s=${encodeURIComponent(subject)}&ch=${encodeURIComponent(slug)}`;

/** Opens the builder scoped to a whole subject (all chapters pre-selected). */
export const worksheetSubjectBuilderLink = (board: string, classId: string, subject: string, slugs: string[]) =>
  `${BASE}?b=${encodeURIComponent(board)}&c=${encodeURIComponent(classId)}&s=${encodeURIComponent(subject)}&ch=${encodeURIComponent(slugs.join(","))}`;
