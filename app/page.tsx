import Link from "next/link";
import { site } from "@/lib/site";
import {
  CLASSES,
  allAuthoredChapters,
  totalMcqCount,
  chapterUrl,
} from "@/lib/content";
import { ClassCard } from "@/components/cards";
import { StreakCalendar } from "@/components/StreakCalendar";
import { ChapterSearch } from "@/components/ChapterSearch";
import { DailyHomeCard } from "@/components/DailyHomeCard";

export default function HomePage() {
  const chapters = allAuthoredChapters();
  const mcqs = totalMcqCount();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <span className="chip bg-cobalt-soft text-cobalt">CBSE · Classes 6 to 10</span>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.08] text-ink sm:text-5xl">
          Learn every CBSE chapter with{" "}
          <span className="text-cobalt">notes, quizzes</span> and{" "}
          <span className="text-coral">practice</span> — free.
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
          {site.name} turns each chapter into clear notes, a quiz with instant feedback,
          and exam-style questions. Built for CBSE students who want to actually understand,
          not just memorise.
        </p>
        <div className="mt-6">
          <ChapterSearch />
          <p className="mt-2 text-sm text-muted">
            Search by topic or chapter across all{" "}
            <strong className="font-semibold text-ink">{chapters.length}</strong> chapters —
            even concepts like Pythagoras or osmosis.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/cbse"
            className="rounded-full bg-cobalt px-6 py-3 font-semibold text-white shadow-sm transition hover:brightness-110"
          >
            Browse classes
          </Link>
          {chapters[0] && (
            <Link
              href={chapterUrl(chapters[0].classId, chapters[0].subject, chapters[0].slug)}
              className="rounded-full border border-line bg-white px-6 py-3 font-semibold text-ink transition hover:border-cobalt hover:text-cobalt"
            >
              Try a sample chapter
            </Link>
          )}
        </div>

        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted">
          <span><strong className="font-display text-ink">{chapters.length}</strong> chapters ready</span>
          <span><strong className="font-display text-ink">{mcqs}+</strong> quiz questions</span>
          <span><strong className="font-display text-ink">5</strong> classes</span>
        </div>
      </section>

      <StreakCalendar />

      {/* Daily challenge: shows today's result once played, else a CTA */}
      <section className="mt-8">
        <DailyHomeCard />
      </section>

      {/* Class grid */}
      <section className="mt-14">
        <h2 className="font-display text-2xl font-bold text-ink">Pick your class</h2>
        <p className="mt-1 text-muted">Chapter-wise notes and quizzes for Classes 6–10.</p>
        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {CLASSES.map((cls, i) => (
            <ClassCard key={cls.id} cls={cls} index={i} />
          ))}
        </div>
      </section>

      {/* Popular / available chapters */}
      {chapters.length > 0 && (
        <section className="mt-14">
          <h2 className="font-display text-2xl font-bold text-ink">Popular chapters</h2>
          <p className="mt-1 text-muted">Fully-prepared chapters to start with right now.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {chapters.map((c) => (
              <Link
                key={`${c.classId}-${c.subject}-${c.slug}`}
                href={chapterUrl(c.classId, c.subject, c.slug)}
                className="card group p-5 transition hover:-translate-y-0.5"
              >
                <span className="chip bg-cobalt-soft text-cobalt">
                  Class {c.classId} · {c.subject === "maths" ? "Maths" : "Science"}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-ink group-hover:text-cobalt">
                  {c.title}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {c.mcqs.length} MCQs · notes · practice
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Resources */}
      <section className="mt-14 grid gap-4 sm:grid-cols-2">
        <Link href="/notes" className="card flex items-center gap-4 p-5 transition hover:-translate-y-0.5">
          <span aria-hidden className="grid h-12 w-12 place-items-center rounded-2xl bg-green/15 text-2xl">📚</span>
          <span>
            <span className="block font-display text-lg font-bold text-ink">Revision notes</span>
            <span className="text-sm text-muted">Concise chapter notes & formula sheets</span>
          </span>
        </Link>
        <Link href="/mcqs" className="card flex items-center gap-4 p-5 transition hover:-translate-y-0.5">
          <span aria-hidden className="grid h-12 w-12 place-items-center rounded-2xl bg-amber/20 text-2xl">🧠</span>
          <span>
            <span className="block font-display text-lg font-bold text-ink">MCQ quizzes</span>
            <span className="text-sm text-muted">Practice with instant feedback & scoring</span>
          </span>
        </Link>
      </section>

      {/* Why */}
      <section className="mt-14 card p-6 sm:p-8">
        <h2 className="font-display text-2xl font-bold text-ink">Why {site.name}?</h2>
        <div className="mt-5 grid gap-6 sm:grid-cols-3">
          {[
            ["Built around the syllabus", "Chapters follow the CBSE/NCERT order so you can study alongside your textbook."],
            ["Understand, then test", "Read the notes and worked examples first, then check yourself with the quiz."],
            ["No login, no cost", "Everything is free and works on your phone. Your streak saves automatically in your browser."],
          ].map(([title, body]) => (
            <div key={title}>
              <h3 className="font-display font-bold text-ink">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
