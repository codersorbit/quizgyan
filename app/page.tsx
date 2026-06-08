import Link from "next/link";
import { site } from "@/lib/site";
import {
  CLASSES,
  allAuthoredChapters,
  totalMcqCount,
  chapterUrl,
} from "@/lib/content";
import { ClassBrowseCard } from "@/components/cards";
import { StreakCalendar } from "@/components/StreakCalendar";
import { ChapterSearch } from "@/components/ChapterSearch";
import { DailyHomeCard } from "@/components/DailyHomeCard";

const HERO_TILES = [
  ["📐", "Maths", "from-cobalt to-[#5b7bff]"],
  ["🔬", "Science", "from-green to-[#42c98a]"],
  ["💡", "Quizzes", "from-amber to-[#e0a64a]"],
  ["✍️", "Practice", "from-coral to-[#ff8aa0]"],
] as const;

export default function HomePage() {
  const chapters = allAuthoredChapters();
  const mcqs = totalMcqCount();
  const step = Math.max(1, Math.ceil(chapters.length / 6));
  const featured = chapters.filter((_, i) => i % step === 0).slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <span className="chip bg-cobalt-soft text-cobalt">CBSE · Classes 6–10 · Free</span>
            <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-[1.08] text-ink sm:text-5xl">
              Every CBSE chapter as{" "}
              <span className="text-cobalt">notes</span>,{" "}
              <span className="text-green">a quiz</span> and{" "}
              <span className="text-coral">practice</span>.
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
              {site.name} turns each chapter into clear notes, instant-feedback quizzes and
              exam-style questions — made for students who want to understand, not just memorise.
            </p>
            <div className="mt-6">
              <ChapterSearch />
              <p className="mt-2 text-sm text-muted">
                Search any topic across{" "}
                <strong className="font-semibold text-ink">{chapters.length}</strong> chapters — try “Pythagoras” or “osmosis”.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/cbse"
                className="rounded-full bg-cobalt px-6 py-3 font-semibold text-white shadow-sm transition hover:brightness-110"
              >
                Browse classes
              </Link>
              <Link
                href="/daily"
                className="rounded-full border border-line bg-white px-6 py-3 font-semibold text-ink transition hover:border-cobalt hover:text-cobalt"
              >
                Today’s challenge
              </Link>
            </div>
          </div>

          {/* Decorative subject tiles (large screens) */}
          <div className="relative hidden h-72 lg:block" aria-hidden>
            <div className="absolute inset-0 grid grid-cols-2 gap-4 [transform:rotate(-4deg)]">
              {HERO_TILES.map(([emoji, label, grad]) => (
                <div
                  key={label}
                  className={`flex flex-col justify-between rounded-3xl bg-linear-to-br ${grad} p-5 text-white shadow-lg`}
                >
                  <span className="text-3xl">{emoji}</span>
                  <span className="font-display text-lg font-bold">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stat strip */}
        <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
          {([
            [String(chapters.length), "chapters"],
            [`${mcqs}+`, "questions"],
            [String(CLASSES.length), "classes"],
          ] as const).map(([n, label]) => (
            <div key={label} className="card px-4 py-3 text-center">
              <div className="font-display text-2xl font-bold text-ink">{n}</div>
              <div className="text-xs text-muted">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-8">
        <StreakCalendar />
      </div>

      {/* Daily challenge */}
      <section className="mt-8">
        <DailyHomeCard />
      </section>

      {/* Browse by class — two-level: class + its subjects */}
      <section className="mt-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">Browse by class</h2>
            <p className="mt-1 text-muted">Pick a class, then jump straight into a subject.</p>
          </div>
          <Link href="/cbse" className="hidden shrink-0 text-sm font-semibold text-cobalt hover:underline sm:block">
            All classes →
          </Link>
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CLASSES.map((cls, i) => (
            <ClassBrowseCard key={cls.id} cls={cls} index={i} />
          ))}
        </div>
      </section>

      {/* Featured ready chapters */}
      {featured.length > 0 && (
        <section className="mt-14">
          <h2 className="font-display text-2xl font-bold text-ink">Start with a ready chapter</h2>
          <p className="mt-1 text-muted">Fully prepared — notes, worked examples and a quiz, right now.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((c) => (
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
                <p className="mt-1 text-sm text-muted">{c.mcqs.length} MCQs · notes · practice</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Everything in one place — value + navigation */}
      <section className="mt-14">
        <h2 className="font-display text-2xl font-bold text-ink">Everything in one place</h2>
        <p className="mt-1 text-muted">Three ways to learn each chapter — all free, no login.</p>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          <Link href="/notes" className="card group p-5 transition hover:-translate-y-0.5">
            <span aria-hidden className="grid h-12 w-12 place-items-center rounded-2xl bg-green/15 text-2xl">📖</span>
            <h3 className="mt-3 font-display text-lg font-bold text-ink group-hover:text-cobalt">Notes</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted">Concise notes, formulas and worked examples for every chapter.</p>
          </Link>
          <Link href="/mcqs" className="card group p-5 transition hover:-translate-y-0.5">
            <span aria-hidden className="grid h-12 w-12 place-items-center rounded-2xl bg-amber/20 text-2xl">🧠</span>
            <h3 className="mt-3 font-display text-lg font-bold text-ink group-hover:text-cobalt">Quizzes</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted">MCQs with instant feedback and scoring, so you can test yourself.</p>
          </Link>
          <Link href="/daily" className="card group p-5 transition hover:-translate-y-0.5">
            <span aria-hidden className="grid h-12 w-12 place-items-center rounded-2xl bg-coral/15 text-2xl">🔥</span>
            <h3 className="mt-3 font-display text-lg font-bold text-ink group-hover:text-cobalt">Daily challenge</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted">A fresh mix of questions each day — build a streak as you revise.</p>
          </Link>
        </div>
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

      {/* Closing CTA */}
      <section className="mt-12 overflow-hidden rounded-[1.5rem] bg-linear-to-br from-cobalt to-[#5b7bff] p-8 text-white shadow-lg sm:p-10">
        <h2 className="font-display text-2xl font-bold sm:text-3xl">Ready to start?</h2>
        <p className="mt-2 max-w-lg text-white/90">
          Pick your class and open any chapter — notes first, then the quiz. No login, no cost.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/cbse" className="rounded-full bg-white px-6 py-3 font-semibold text-cobalt transition hover:brightness-95">
            Browse classes
          </Link>
          <Link href="/daily" className="rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
            Try today’s challenge
          </Link>
        </div>
      </section>
    </>
  );
}
