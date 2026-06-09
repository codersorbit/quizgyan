import Link from "next/link";
import { site } from "@/lib/site";
import {
  CLASSES,
  allAuthoredChapters,
  totalMcqCount,
  chapterUrl,
} from "@/lib/content";
import { ClassImageCard } from "@/components/cards";
import { BoardChooser } from "@/components/BoardChooser";
import { StreakCalendar } from "@/components/StreakCalendar";
import { ChapterSearch } from "@/components/ChapterSearch";
import { DailyHomeCard } from "@/components/DailyHomeCard";

export default function HomePage() {
  const chapters = allAuthoredChapters();
  const mcqs = totalMcqCount();
  const step = Math.max(1, Math.ceil(chapters.length / 6));
  const featured = chapters.filter((_, i) => i % step === 0).slice(0, 6);

  return (
    <>
      {/* Hero — sunny band */}
      <section className="relative text-center">
        <div
          className="relative overflow-hidden rounded-[2.75rem] border-2 border-line px-6 py-14 shadow-[0_14px_0_-6px_rgba(26,26,26,0.06),0_44px_72px_-42px_rgba(255,179,0,0.55)]"
          style={{ background: "radial-gradient(125% 130% at 50% -12%, #ffe069 0%, #ffeda1 40%, #fff7df 100%)" }}
        >
          <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
            <div className="animate-float absolute left-[6%] top-6 grid h-14 w-14 place-items-center rounded-2xl bg-white text-2xl shadow-lg">📐</div>
            <div className="animate-float absolute right-[7%] top-10 grid h-14 w-14 place-items-center rounded-2xl bg-white text-2xl shadow-lg" style={{ animationDelay: "1.6s" }}>⚛️</div>
            <div className="animate-float absolute left-[10%] bottom-8 grid h-12 w-12 place-items-center rounded-2xl bg-white text-xl shadow-lg" style={{ animationDelay: "3s" }}>🌍</div>
            <div className="animate-float absolute right-[11%] bottom-10 grid h-12 w-12 place-items-center rounded-2xl bg-white text-xl shadow-lg" style={{ animationDelay: "2.3s" }}>✏️</div>
          </div>
          <span className="chip bg-white text-pink shadow-sm">✨ CBSE · WBBPE · Free · No login</span>
          <h1 className="mx-auto mt-4 max-w-3xl font-fun text-5xl leading-[1.05] text-ink sm:text-6xl">
            Welcome to <span className="brand-gradient">{site.name}</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-ink/75">
            {site.name} turns every chapter into clear notes, instant-feedback quizzes and
            exam-style questions across multiple boards — made for students who want to understand,
            not just memorise.
          </p>

          <div className="relative mx-auto mt-7 max-w-xl">
            <ChapterSearch />
            <p className="mt-2 text-sm text-ink/60">
              Search any topic across{" "}
              <strong className="font-semibold text-ink">{chapters.length}</strong> chapters — try
              “Pythagoras” or “osmosis”.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/cbse" className="btn-candy cobalt">Browse classes</Link>
            <Link href="/daily" className="btn-candy ghost">Today’s challenge</Link>
          </div>
        </div>

        {/* Stat strip — sits on the paper, just below the band */}
        <div className="mx-auto mt-6 grid max-w-xl grid-cols-3 gap-3">
          {([
            [String(chapters.length), "chapters"],
            [`${mcqs}+`, "questions"],
            [String(CLASSES.length), "classes"],
          ] as const).map(([n, label]) => (
            <div key={label} className="card px-4 py-3 text-center">
              <div className="font-fun text-2xl text-ink">{n}</div>
              <div className="text-xs text-muted">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Choose your board */}
      <section id="boards" className="mt-14 scroll-mt-24">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold text-ink">Choose your board</h2>
          <p className="mx-auto mt-1 max-w-xl text-muted">
            Pick your education board to get notes, quizzes and practice made for your syllabus.
          </p>
        </div>
        <div className="mx-auto mt-7 max-w-3xl">
          <BoardChooser />
        </div>
      </section>

      {/* Browse CBSE by class — image-topped cards */}
      <section className="mt-14">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold text-ink">Browse CBSE by class</h2>
          <p className="mx-auto mt-1 max-w-xl text-muted">
            Pick a class to open its subjects and chapters — Maths, Science, Social Science and English.
          </p>
        </div>
        <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CLASSES.map((cls, i) => (
            <ClassImageCard key={cls.id} cls={cls} index={i} />
          ))}
        </div>
      </section>

      <div className="mt-12">
        <StreakCalendar />
      </div>

      {/* Daily challenge */}
      <section className="mt-8">
        <DailyHomeCard />
      </section>

      {/* Featured ready chapters */}
      {featured.length > 0 && (
        <section className="mt-14">
          <div className="text-center">
            <h2 className="font-display text-2xl font-bold text-ink">Start with a ready chapter</h2>
            <p className="mx-auto mt-1 max-w-xl text-muted">
              Fully prepared — notes, worked examples and a quiz, right now.
            </p>
          </div>
          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((c) => (
              <Link
                key={`${c.classId}-${c.subject}-${c.slug}`}
                href={chapterUrl(c.classId, c.subject, c.slug)}
                className="card group p-5 transition hover:-translate-y-0.5"
              >
                <span className="chip bg-cobalt-soft text-cobalt">
                  Class {c.classId} ·{" "}
                  {c.subject === "maths"
                    ? "Maths"
                    : c.subject === "science"
                      ? "Science"
                      : c.subject === "social-science"
                        ? "Social Science"
                        : "English"}
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

      {/* Everything in one place */}
      <section className="mt-14">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold text-ink">Everything in one place</h2>
          <p className="mx-auto mt-1 max-w-xl text-muted">Three ways to learn each chapter — all free, no login.</p>
        </div>
        <div className="mt-7 grid gap-5 sm:grid-cols-3">
          <Link href="/notes" className="card group p-5 text-center transition hover:-translate-y-0.5">
            <span aria-hidden className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-green/15 text-2xl">📖</span>
            <h3 className="mt-3 font-display text-lg font-bold text-ink group-hover:text-cobalt">Notes</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted">Concise notes, formulas and worked examples for every chapter.</p>
          </Link>
          <Link href="/mcqs" className="card group p-5 text-center transition hover:-translate-y-0.5">
            <span aria-hidden className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-amber/20 text-2xl">🧠</span>
            <h3 className="mt-3 font-display text-lg font-bold text-ink group-hover:text-cobalt">Quizzes</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted">MCQs with instant feedback and scoring, so you can test yourself.</p>
          </Link>
          <Link href="/daily" className="card group p-5 text-center transition hover:-translate-y-0.5">
            <span aria-hidden className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-coral/15 text-2xl">🔥</span>
            <h3 className="mt-3 font-display text-lg font-bold text-ink group-hover:text-cobalt">Daily challenge</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted">A fresh mix of questions each day — build a streak as you revise.</p>
          </Link>
        </div>
      </section>

      {/* Why */}
      <section className="mt-14 card p-6 sm:p-8">
        <h2 className="text-center font-display text-2xl font-bold text-ink">Why {site.name}?</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {[
            ["Built around the syllabus", "Chapters follow the CBSE/NCERT order so you can study alongside your textbook."],
            ["Understand, then test", "Read the notes and worked examples first, then check yourself with the quiz."],
            ["No login, no cost", "Everything is free and works on your phone. Your streak saves automatically in your browser."],
          ].map(([title, body]) => (
            <div key={title} className="text-center sm:text-left">
              <h3 className="font-display font-bold text-ink">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mt-12 overflow-hidden rounded-[1.5rem] bg-linear-to-br from-cobalt to-[#5b7bff] p-8 text-center text-white shadow-lg sm:p-10">
        <h2 className="font-display text-2xl font-bold sm:text-3xl">Ready to start?</h2>
        <p className="mx-auto mt-2 max-w-lg text-white/90">
          Pick your class and open any chapter — notes first, then the quiz. No login, no cost.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
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
