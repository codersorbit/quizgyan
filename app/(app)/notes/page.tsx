import type { Metadata } from "next";
import Link from "next/link";
import { allAuthoredChapters, chapterUrl, getSubject } from "@/lib/content";
import { buildMetadata, breadcrumbLd, webPageLd } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";

const PATH = "/notes";
const TITLE = "CBSE Notes — Class 1 & 6–10 Chapter Notes & Formula Sheets";
const DESC =
  "Free CBSE revision notes for Class 1 and Classes 6–10. Concise chapter notes, key concepts, formulas and definitions for Maths, Science, Social Science and English.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

export default function NotesHub() {
  const chapters = allAuthoredChapters();
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Notes", path: PATH },
  ];
  return (
    <>
      <JsonLd data={[breadcrumbLd(crumbs), webPageLd(TITLE, DESC, PATH)]} />
      <Breadcrumbs crumbs={crumbs} />
      <section className="relative overflow-hidden rounded-[2rem] glass border p-8 text-center shadow-xl sm:p-12">
        <span aria-hidden className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cobalt/20 blur-3xl" />
        <span aria-hidden className="pointer-events-none absolute -bottom-20 right-[-2rem] h-64 w-64 rounded-full bg-green/20 blur-3xl" />
        <span aria-hidden className="pointer-events-none absolute -bottom-16 left-[-2rem] h-56 w-56 rounded-full bg-amber/20 blur-3xl" />
        <div className="relative">
          <span className="chip glass text-cobalt">📖 Revision notes</span>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            CBSE Revision <span className="brand-gradient">Notes</span>
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-muted">
            Concise chapter notes with key concepts, formulas, definitions and worked examples —
            across {chapters.length} chapters and growing.
          </p>
        </div>
      </section>
      <div className="mt-8 grid gap-3">
        {chapters.map((c) => {
          const subj = getSubject(c.classId, c.subject);
          return (
            <Link
              key={`${c.classId}-${c.subject}-${c.slug}`}
              href={`${chapterUrl(c.classId, c.subject, c.slug)}#notes`}
              className="card flex items-center justify-between gap-4 p-4 transition hover:-translate-y-0.5 hover:border-cobalt"
            >
              <span>
                <span className="block font-display font-bold text-ink">{c.title}</span>
                <span className="text-sm text-muted">
                  Class {c.classId} · {subj?.name}
                </span>
              </span>
              <span className="chip bg-green/10 text-green">{c.formulas.length} formulas</span>
            </Link>
          );
        })}
      </div>
    </>
  );
}
