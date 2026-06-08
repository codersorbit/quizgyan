# Quiz Gyan — CBSE Learning Platform

A Next.js 16 educational platform for CBSE Classes 6–10: chapter notes, MCQ quizzes
with instant feedback, and practice questions. Built to rank in Google as a topical-authority
study resource, not just a quiz site.

Built by Aftabuddin, a student at Umeed Global School.

## Tech

- **Next.js 16** (App Router) + **React 19.2** + **TypeScript**
- **Tailwind CSS v4**
- Fully **static generation** (every page is pre-rendered HTML) — fast Core Web Vitals
- **No database, no paid API** — all content lives in typed files in this repo
- Engagement (quiz scores, streak, recently completed) saved in the browser via localStorage

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

Requires Node.js 20.9+.

## Deploy (free, on Vercel)

1. Push this folder to a GitHub repository.
2. Go to vercel.com → New Project → import the repo.
3. Vercel auto-detects Next.js. Click **Deploy**. Done.

(You can point your existing `quizgyan.vercel.app` project at this repo, or create a new one.)

## Add a new chapter (the main job)

This is a 2-step process:

**1. Create the content file** under `content/chapters/`, e.g.
`content/chapters/class-10-maths-polynomials.ts`:

```ts
import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "10",
  subject: "maths",
  slug: "polynomials",        // must match the roadmap slug in content/classes.ts
  title: "Polynomials",
  order: 2,
  seoTitle: "Polynomials Class 10 CBSE Notes, MCQs & Quiz",
  metaDescription: "…",
  overview: "…",
  objectives: ["…"],
  concepts: [{ heading: "…", body: "…" }],
  formulas: [{ name: "…", formula: "…" }],
  definitions: [{ term: "…", meaning: "…" }],
  examples: [{ problem: "…", solution: "…" }],
  commonMistakes: ["…"],
  mcqs: [{ id: "p1", difficulty: "easy", q: "…", options: ["a","b","c","d"], answer: 0, explanation: "…" }],
  shortQuestions: [{ q: "…", a: "…" }],
  longQuestions: [{ q: "…", a: "…" }],
  hots: [{ q: "…", a: "…" }],
  revisionNotes: ["…"],
  keyTakeaways: ["…"],
  faq: [{ q: "…", a: "…" }],
  related: [{ classId: "10", subject: "maths", slug: "real-numbers" }],
};

export default chapter;
```

**2. Register it** in `content/chapters/index.ts`:

```ts
import polynomials from "./class-10-maths-polynomials";
export const CHAPTERS = [ …, polynomials ];
```

That's it — the page, quiz, sitemap entry, breadcrumbs and schema are all generated automatically.
A chapter only gets a live page (and a sitemap entry) once it's authored; un-authored chapters
in the roadmap show as "Coming soon" with no thin page generated.

## Edit the class/subject/chapter roadmap

`content/classes.ts` holds the list of classes, their subjects, and each subject's chapter
list (just titles + order). Slugs are generated from titles automatically. Adjust the chapter
titles here to match the latest NCERT syllabus.

## File map

```
app/                       routes (App Router)
  cbse/[classId]/[subject]/[chapter]/   the chapter page
  notes/, mcqs/            resource hub pages
  sitemap.ts, robots.ts    SEO files (auto-generated)
components/                UI (Quiz is the interactive client component)
content/classes.ts         class → subject → chapter roadmap
content/chapters/          one file per authored chapter
lib/types.ts               the Chapter content model
lib/content.ts             lookups, URLs, static params
lib/seo.ts                 metadata + JSON-LD builders
```

## SEO notes

- Each chapter page has a unique title, meta description, canonical URL, Open Graph tags,
  and JSON-LD (BreadcrumbList, WebPage, FAQPage, LearningResource).
- Google Search Console verification is wired in `lib/site.ts` (`gscVerification`).
- **Quality over quantity:** a smaller number of genuinely complete chapter pages ranks far
  better than thousands of thin templated pages. Add chapters one at a time and make each one
  the best page on the web for that topic.
