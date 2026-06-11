import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata, breadcrumbLd, faqLd } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import {
  getChapter,
  getClass,
  getSubject,
  getAuthoredInSubject,
  parseClassId,
  chapterUrl,
} from "@/lib/content";
import { chapterToQuestions, type WorksheetQuestion } from "@/lib/tools/logic/worksheet";
import {
  worksheetLandingParams,
  MIN_LANDING_QUESTIONS,
} from "@/lib/tools/worksheet-bank";
import {
  worksheetLandingUrl,
  worksheetSubjectUrl,
  worksheetBuilderLink,
} from "@/lib/tools/worksheet-routes";

const OPT = ["(a)", "(b)", "(c)", "(d)"];
const boardLabel = (b: string) => (b === "wbbpe" ? "WBBPE" : "CBSE");

type Params = { board: string; classId: string; subject: string; chapter: string };

export function generateStaticParams() {
  return worksheetLandingParams().map((p) => ({
    board: p.board,
    classId: `class-${p.classId}`,
    subject: p.subject,
    chapter: p.chapter,
  }));
}

function resolve(params: Params) {
  const board = params.board === "wbbpe" ? "wbbpe" : "cbse";
  const classId = parseClassId(params.classId);
  const chapter = getChapter(classId, params.subject, params.chapter, board);
  if (!chapter) return null;
  const questions = chapterToQuestions(chapter);
  if (questions.length < MIN_LANDING_QUESTIONS) return null;
  const cls = getClass(classId, board);
  const subj = getSubject(classId, params.subject, board);
  return { board, classId, chapter, questions, classLabel: cls?.label ?? `Class ${classId}`, subjectName: subj?.name ?? params.subject };
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const p = await params;
  const r = resolve(p);
  if (!r) return {};
  const path = worksheetLandingUrl(r.board, r.classId, p.subject, p.chapter);
  return buildMetadata({
    title: `${r.classLabel} ${r.subjectName}: ${r.chapter.title} Worksheet (with Answers) — ${boardLabel(r.board)}`,
    description: `Free printable ${r.classLabel} ${r.subjectName} worksheet on ${r.chapter.title}, with a full answer key. ${r.questions.length} practice questions — MCQs, short and long answers. No login, no ads — generate your own in one click.`,
    path,
  });
}

/** A small, real sample drawn from the chapter (deterministic — first of each). */
function buildSample(qs: WorksheetQuestion[]): WorksheetQuestion[] {
  const take = (type: string, n: number) => qs.filter((q) => q.type === type).slice(0, n);
  return [...take("mcq", 4), ...take("short", 2), ...take("long", 1), ...take("hots", 1)].slice(0, 7);
}

export default async function WorksheetLandingPage({ params }: { params: Promise<Params> }) {
  const p = await params;
  const r = resolve(p);
  if (!r) notFound();

  const { board, classId, chapter, questions, classLabel, subjectName } = r;
  const path = worksheetLandingUrl(board, classId, p.subject, p.chapter);
  const builderHref = worksheetBuilderLink(board, classId, p.subject, p.chapter);
  const sample = buildSample(questions);

  // siblings in the same subject that also qualify
  const siblings = getAuthoredInSubject(classId, p.subject, board).filter(
    (c) => c.slug !== chapter.slug && chapterToQuestions(c).length >= MIN_LANDING_QUESTIONS,
  );

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "Worksheet Generator", path: "/tools/worksheet-generator" },
    { name: `${classLabel} ${subjectName}`, path: worksheetSubjectUrl(board, classId, p.subject) },
    { name: chapter.title, path },
  ];

  const faq = [
    {
      q: `Is this ${classLabel} ${subjectName} worksheet on ${chapter.title} free?`,
      a: `Yes — it is completely free, with no login and no ads. You can print it or save it as a PDF, and generate unlimited variations.`,
    },
    {
      q: `Does the ${chapter.title} worksheet come with answers?`,
      a: `Yes. Every worksheet has a separate answer key with the correct answers, short explanations and marks, so it is ready for marking.`,
    },
    {
      q: `Can I choose how many questions and which types?`,
      a: `Yes. Open the generator for this chapter and set how many MCQs, short, long and HOTS questions you want; totals and marks update live, and you can swap any single question.`,
    },
    {
      q: `Which board and class is this for?`,
      a: `This worksheet is aligned to ${boardLabel(board)} ${classLabel} ${subjectName}, chapter “${chapter.title}”.`,
    },
  ];

  const webAppLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: `${classLabel} ${subjectName} — ${chapter.title} Worksheet Generator`,
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    url: absoluteUrl(path),
    offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
    isAccessibleForFree: true,
  };

  let num = 0;

  return (
    <>
      <JsonLd data={[breadcrumbLd(crumbs), faqLd(faq), webAppLd]} />
      <Breadcrumbs crumbs={crumbs} />

      <header className="mt-2">
        <span className="chip glass text-cobalt">🧾 {boardLabel(board)} · {classLabel}</span>
        <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
          {classLabel} {subjectName}: {chapter.title} Worksheet <span className="text-muted">(with Answers)</span>
        </h1>
        <p className="mt-3 max-w-2xl text-muted">
          A free, print-ready worksheet on <strong>{chapter.title}</strong> for {boardLabel(board)} {classLabel} {subjectName},
          with a matching answer key. Use the sample below, or build your own with the exact mix of questions you need —
          no login, no ads.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href={builderHref} className="btn-candy cobalt">Generate your own worksheet for this chapter →</Link>
          <Link href={chapterUrl(classId, p.subject, chapter.slug, board)} className="rounded-full border border-line px-4 py-2 text-sm font-semibold text-cobalt transition hover:border-cobalt">
            Read the chapter notes
          </Link>
        </div>
      </header>

      {/* Sample worksheet — real questions, server-rendered */}
      <section className="mt-8 rounded-2xl border border-line bg-white p-5 sm:p-7">
        <h2 className="font-display text-xl font-bold text-ink">Sample worksheet</h2>
        <p className="mt-1 text-sm text-muted">{sample.length} of {questions.length} questions from this chapter. Generate your own for the full set, more variations, and a clean print layout.</p>
        <ol className="mt-4 space-y-3">
          {sample.map((q) => {
            num += 1;
            return (
              <li key={q.id} className="text-sm text-ink">
                <span className="font-semibold">{num}. </span>{q.prompt}
                {q.type === "mcq" && q.options && (
                  <ul className="mt-1 grid gap-1 sm:grid-cols-2">
                    {q.options.map((o, i) => (
                      <li key={i} className="text-muted">{OPT[i]} {o}</li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ol>

        {/* Answers — present in the DOM (indexable), revealed on demand */}
        <details className="mt-5 rounded-xl border border-line bg-cream p-4">
          <summary className="cursor-pointer text-sm font-semibold text-cobalt">View answers</summary>
          <ol className="mt-3 space-y-2 text-sm">
            {sample.map((q, i) => (
              <li key={q.id} className="text-ink">
                <span className="font-semibold">{i + 1}. </span>
                {q.type === "mcq" && q.answerIndex != null ? `${OPT[q.answerIndex]} ` : ""}{q.answer}
                {q.explanation && <span className="text-muted"> — {q.explanation}</span>}
              </li>
            ))}
          </ol>
        </details>

        <div className="mt-5">
          <Link href={builderHref} className="btn-candy cobalt">Build the full worksheet →</Link>
        </div>
      </section>

      {/* How it works */}
      <section className="mt-8">
        <h2 className="font-display text-xl font-bold text-ink">How it works</h2>
        <p className="mt-2 max-w-2xl text-muted">
          Every question is drawn from StudyMatic’s own {subjectName} bank for {chapter.title} — nothing is auto-generated or
          invented. Pick how many of each type you want, add your own questions if you like, choose 1–4 paper sets for
          anti-cheating, and print the worksheet and answer key separately or save them as PDF.
        </p>
      </section>

      {/* Cross-links */}
      {siblings.length > 0 && (
        <section className="mt-8">
          <h2 className="font-display text-xl font-bold text-ink">More {classLabel} {subjectName} worksheets</h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {siblings.map((c) => (
              <Link key={c.slug} href={worksheetLandingUrl(board, classId, p.subject, c.slug)} className="card border p-4 text-sm transition hover:-translate-y-0.5">
                <span className="font-semibold text-ink">{c.title}</span>
                <span className="ml-1 text-muted">worksheet</span>
              </Link>
            ))}
          </div>
          <p className="mt-3 text-sm">
            <Link href={worksheetSubjectUrl(board, classId, p.subject)} className="font-semibold text-cobalt hover:underline">
              All {classLabel} {subjectName} worksheets →
            </Link>
          </p>
        </section>
      )}

      <section className="mt-8">
        <h2 className="font-display text-xl font-bold text-ink">FAQ</h2>
        <dl className="mt-3 space-y-3">
          {faq.map((f) => (
            <div key={f.q} className="rounded-xl border border-line bg-white p-4">
              <dt className="font-semibold text-ink">{f.q}</dt>
              <dd className="mt-1 text-sm text-muted">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
