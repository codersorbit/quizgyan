import type { Metadata } from "next";
import Link from "next/link";
import { boardClasses, getAuthoredInSubject } from "@/lib/content";
import { buildMetadata, breadcrumbLd, webPageLd } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";

const PATH = "/wbbpe";
const TITLE = "WBBPE Bengali Medium — Primary Classes 1 & 2 (আমার বই)";
const DESC =
  "West Bengal Board of Primary Education (WBBPE) Bengali-medium study material on StudyMatic — notes, quizzes and practice for Classes 1 and 2, with বাংলা, গণিত ও ইংরেজি from the integrated book আমার বই.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

export default function WbbpeHub() {
  const classes = boardClasses("wbbpe");
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "WBBPE", path: PATH },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbLd(crumbs), webPageLd(TITLE, DESC, PATH)]} />
      <Breadcrumbs crumbs={crumbs} />

      <section className="relative overflow-hidden rounded-[2rem] glass border p-8 text-center shadow-xl sm:p-12">
        <span aria-hidden className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-green/20 blur-3xl" />
        <span aria-hidden className="pointer-events-none absolute -bottom-20 right-[-2rem] h-64 w-64 rounded-full bg-cobalt/20 blur-3xl" />
        <span aria-hidden className="pointer-events-none absolute -bottom-16 left-[-2rem] h-56 w-56 rounded-full bg-amber/20 blur-3xl" />
        <div className="relative">
          <span className="chip glass text-green">📗 Bengali medium · বাংলা মাধ্যম</span>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            WBBPE <span className="brand-gradient">Primary</span>
          </h1>
          <p className="mx-auto mt-1 font-display text-lg text-muted">
            পশ্চিমবঙ্গ প্রাথমিক শিক্ষা পর্ষদ
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-muted">
            StudyMatic for the West Bengal Board of Primary Education, in Bengali medium — built
            from the integrated book ‘আমার বই’ (Amar Boi), which combines Bangla, English and
            Ganit. Pick a class to start.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/wbbpe/class-1"
              className="rounded-full bg-linear-to-r from-cobalt to-violet px-6 py-3 font-semibold text-white shadow-lg shadow-cobalt/25 transition hover:-translate-y-0.5 hover:brightness-110"
            >
              শুরু করো — Class 1
            </Link>
            <Link
              href="/cbse"
              className="rounded-full border border-white/60 bg-white/55 px-6 py-3 font-semibold text-ink backdrop-blur transition hover:text-cobalt"
            >
              Explore CBSE
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold text-ink">Classes (আমার বই)</h2>
          <p className="mx-auto mt-1 max-w-xl text-muted">
            শ্রেণি বেছে নাও — প্রতিটি বিষয়ে নোট ও কুইজ।
          </p>
        </div>
        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          {classes.map((cls) => (
            <Link
              key={cls.id}
              href={`/wbbpe/class-${cls.id}`}
              className="card group p-6 transition hover:-translate-y-1"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-xl font-bold text-ink group-hover:text-cobalt">
                  WBBPE {cls.label}
                </h3>
                <span aria-hidden className="text-muted transition group-hover:text-cobalt">→</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {cls.subjects.map((s) => {
                  const ready = getAuthoredInSubject(cls.id, s.key, "wbbpe").length;
                  return (
                    <span
                      key={s.key}
                      className={`chip ${ready > 0 ? "bg-green/15 text-green" : "bg-amber/20 text-ink"}`}
                    >
                      <span aria-hidden className="mr-1">{s.icon}</span>
                      {s.name}
                      {ready > 0 ? ` · ${ready}` : " · শীঘ্রই"}
                    </span>
                  );
                })}
              </div>
            </Link>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted">
          More primary classes and subjects are being added, all in the same notes-plus-quiz
          format — in Bengali.
        </p>
      </section>
    </>
  );
}
