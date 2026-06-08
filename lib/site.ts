export const site = {
  name: "StudyMatic",
  shortName: "StudyMatic",
  tagline: "Every Chapter. Notes, Quizzes & Practice.",
  url: "https://studymatic.in",
  description:
    "Clear notes, instant-feedback quizzes and exam-style questions for every CBSE chapter — Maths, Science, Social Science and English — all in one place, and completely free.",
  locale: "en_IN",
  author: {
    name: "Aftabuddin",
    role: "Student",
    school: "Umeed Global School",
    schoolUrl: "https://umeed.org.in/",
  },
  // Google Search Console verification.
  // NOTE: this token belongs to the OLD property. For studymatic.in, add a new
  // URL-prefix property in Search Console and paste its meta-tag token here.
  gscVerification: "RkY53r0sk-plqP-0NoFK607XbzM6tTmIWi2d6ilLa44",
} as const;

export function absoluteUrl(path = ""): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${site.url}${clean === "/" ? "" : clean}`;
}
