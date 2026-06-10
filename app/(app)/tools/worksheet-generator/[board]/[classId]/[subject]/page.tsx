import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata, breadcrumbLd } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { getClass, getSubject, getAuthoredInSubject, parseClassId, subjectUrl } from "@/lib/content";
import { chapterToQuestions } from "@/lib/tools/logic/worksheet";
import { worksheetSubjectParams, MIN_LANDING_QUESTIONS } from "@/lib/tools/worksheet-bank";
import {
  worksheetLandingUrl,
  worksheetSubjectUrl,
  worksheetSubjectBuilderLink,
} from "@/lib/tools/worksheet-routes";

const boardLabel = (b: string) => (b === "wbbpe" ? "WBBPE" : "CBSE");
type Params = { board: string; classId: string; subject: string };

export function generateStaticParams() {
  return worksheetSubjectParams().map((p) => ({
    board: p.board,
    classId: `class-${p.classId}`,
    subject: p.subject,
  }));
}

function resolve(params: Params) {
  const board = params.board === "wbbpe" ? "wbbpe" : "cbse";
  const classId = parseClassId(params.classId);
  const cls = getClass(classId, board);
  const subj = getSubject(classId, params.subject, board);
  if (!cls || !subj) return null;
  const chapters = getAuthoredInSubject(classId, params.subject, board).filter(
    (c) => chapterToQuestions(c).length >= MIN_LANDING_QUESTIONS,
  );
  if (chapters.length === 0) return null;
  return { board, classId, classLabel: cls.label, subjectName: subj.name, chapters };
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const p = await params;
  const r = resolve(p);
  if (!r) return {};
  return buildMetadata({
    title: `${r.classLabel} ${r.subjectName} Worksheets (with Answers) — ${boardLabel(r.board)}`,
    description: `Free printable ${r.classLabel} ${r.subjectName} worksheets with answer keys for ${boardLabel(r.board)} — ${r.chapters.length} chapters. Pick a chapter or build your own in one click. No login, no ads.`,
    path: worksheetSubjectUrl(r.board, r.classId, p.subject),
  });
}

export default async function WorksheetSubjectPage({ params }: { params: Promise<Params> }) {
  const p = await params;
  const r = resolve(p);
  if (!r) notFound();

  const { board, classId, classLabel, subjectName, chapters } = r;
  const path = worksheetSubjectUrl(board, classId, p.subject);
  const allHref = worksheetSubjectBuilderLink(board, classId, p.subject, chapters.map((c) => c.slug));

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "Worksheet Generator", path: "/tools/worksheet-generator" },
    { name: `${classLabel} ${subjectName}`, path },
  ];

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${classLabel} ${subjectName} Worksheets`,
    itemListElement: chapters.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${c.title} Worksheet`,
      url: absoluteUrl(worksheetLandingUrl(board, classId, p.subject, c.slug)),
    })),
  };

  return (
    <>
      <JsonLd data={[breadcrumbLd(crumbs), itemListLd]} />
      <Breadcrumbs crumbs={crumbs} />

      <header className="mt-2">
        <span className="chip glass text-cobalt">🧾 {boardLabel(board)} · {classLabel}</span>
        <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
          {classLabel} {subjectName} Worksheets <span className="text-muted">(with Answers)</span>
        </h1>
        <p className="mt-3 max-w-2xl text-muted">
          Free, print-ready {subjectName} worksheets for {boardLabel(board)} {classLabel}, each with a matching answer key.
          Choose a chapter below, or build a worksheet spanning the whole subject — no login, no ads.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href={allHref} className="btn-candy cobalt">Build a {subjectName} worksheet →</Link>
          <Link href={subjectUrl(classId, p.subject, board)} className="rounded-full border border-line px-4 py-2 text-sm font-semibold text-cobalt transition hover:border-cobalt">
            {subjectName} notes &amp; chapters
          </Link>
        </div>
      </header>

      <section className="mt-8">
        <h2 className="font-display text-xl font-bold text-ink">Worksheets by chapter</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {chapters.map((c) => (
            <Link key={c.slug} href={worksheetLandingUrl(board, classId, p.subject, c.slug)} className="card border p-4 transition hover:-translate-y-0.5">
              <span className="font-semibold text-ink">{c.title}</span>
              <span className="mt-0.5 block text-sm text-muted">Worksheet with answer key →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export const dynamicParams = false;
