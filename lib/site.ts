export const site = {
  name: "Quiz Gyan",
  shortName: "Quiz Gyan",
  tagline: "CBSE Notes, MCQs, Quizzes & Practice — Classes 6 to 10",
  url: "https://quizgyan.vercel.app",
  description:
    "Free CBSE learning platform for Classes 6–10. Chapter-wise notes, key formulas, solved examples, MCQ quizzes with instant feedback, and practice questions for Maths, Science and more.",
  locale: "en_IN",
  author: {
    name: "Aftabuddin",
    role: "Student",
    school: "Umeed Global School",
    schoolUrl: "https://umeed.org.in/",
  },
  // Google Search Console verification (kept from the original site).
  gscVerification: "RkY53r0sk-plqP-0NoFK607XbzM6tTmIWi2d6ilLa44",
} as const;

export function absoluteUrl(path = ""): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${site.url}${clean === "/" ? "" : clean}`;
}
