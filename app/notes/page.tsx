import type { Metadata } from "next";
import Link from "next/link";
import { allAuthoredChapters, chapterUrl, getSubject } from "@/lib/content";
import { buildMetadata, breadcrumbLd, webPageLd } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";

const PATH = "/notes";
const TITLE = "CBSE Notes — Class 6 to 10 Chapter Notes & Formula Sheets";
const DESC =
  "Free CBSE revision notes for Classes 6–10. Concise chapter notes, key concepts, formulas and definitions for Maths, Science and more.";

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
      <h1 className="font-display text-3xl font-bold text-ink">CBSE Revision Notes</h1>
      <p className="mt-2 max-w-2xl text-muted">
        Chapter notes with key concepts, formulas, definitions and worked examples. More chapters
        are added regularly.
      </p>
      <div className="mt-6 grid gap-3">
        {chapters.map((c) => {
          const subj = getSubject(c.classId, c.subject);
          return (
            <Link
              key={`${c.classId}-${c.subject}-${c.slug}`}
              href={`${chapterUrl(c.classId, c.subject, c.slug)}#notes`}
              className="card flex items-center justify-between gap-4 p-4 transition hover:border-cobalt"
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
