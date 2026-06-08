"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import Link from "next/link";
import type { ChallengeMcq } from "@/lib/content";
import { pickDaily, todayStr, prettyDate, localDayStr } from "@/lib/daily";
import { ResetHint } from "@/components/ResetHint";

/* ----------------------------- storage utils ---------------------------- */
function readJSON<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}
function writeJSON(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* ignore */
  }
}

type DailyRecord = { percent: number; score: number; total: number; at: number };

/* -------------------------------- component ------------------------------ */
export function DailyChallenge({
  pool,
  count = 10,
}: {
  pool: ChallengeMcq[];
  count?: number;
}) {
  const [today, setToday] = useState<string | null>(null);
  const [prior, setPrior] = useState<DailyRecord | null>(null);
  const [streak, setStreak] = useState<number>(0);
  const [best, setBest] = useState<number>(0);
  const [newBest, setNewBest] = useState(false);

  const [started, setStarted] = useState(false);
  const [practice, setPractice] = useState(false);
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [shareState, setShareState] = useState<"idle" | "shared" | "copied">("idle");

  // Resolve the date on the client to avoid SSR/hydration mismatch.
  useEffect(() => {
    const t = todayStr();
    setToday(t);
    setPrior(readJSON<DailyRecord | null>(`qg:daily:${t}`, null));
    setStreak(readJSON<{ count: number; last: string }>("qg:streak", { count: 0, last: "" }).count);
    setBest(readJSON<number>("qg:beststreak", 0) || 0);
  }, []);

  const questions = useMemo(
    () => (today ? pickDaily(pool, count, today) : []),
    [pool, count, today],
  );

  const q = questions[i];
  const answered = picked !== null;

  const choose = useCallback(
    (idx: number) => {
      if (picked !== null || !q) return;
      setPicked(idx);
      if (idx === q.answer) setScore((s) => s + 1);
    },
    [picked, q],
  );

  const finish = useCallback(() => {
    const total = questions.length || count;
    const percent = Math.round((score / total) * 100);
    if (!practice && today) {
      writeJSON(`qg:daily:${today}`, { percent, score, total, at: Date.now() } as DailyRecord);
      // recently completed
      const recent = readJSON<{ key: string; title: string; percent: number; at: number }[]>(
        "qg:recent",
        [],
      ).filter((r) => r.key !== `daily:${today}`);
      recent.unshift({ key: `daily:${today}`, title: "Daily challenge", percent, at: Date.now() });
      writeJSON("qg:recent", recent.slice(0, 8));
      // streak
      const s = readJSON<{ count: number; last: string }>("qg:streak", { count: 0, last: "" });
      if (s.last !== today) {
        const y = localDayStr(-1);
        s.count = s.last === y ? s.count + 1 : 1;
        s.last = today;
        writeJSON("qg:streak", s);
        setStreak(s.count);
      }
      const bestStreak = readJSON<number>("qg:beststreak", 0);
      if (s.count > bestStreak) writeJSON("qg:beststreak", s.count);
      setBest(Math.max(bestStreak, s.count));
      const isRecord = s.count >= 2 && s.count >= bestStreak;
      setNewBest(isRecord);
      if (isRecord) writeJSON("qg:newbest", today);
      setPrior({ percent, score, total, at: Date.now() });
    }
    setDone(true);
  }, [questions.length, count, score, practice, today]);

  function next() {
    if (i + 1 < questions.length) {
      setI(i + 1);
      setPicked(null);
    } else {
      finish();
    }
  }

  function begin(asPractice: boolean) {
    setPractice(asPractice);
    setStarted(true);
    setI(0);
    setPicked(null);
    setScore(0);
    setDone(false);
  }

  // Keyboard: 1–4 to pick, Enter/→ to advance
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!started || done || !q) return;
      if (["1", "2", "3", "4"].includes(e.key)) {
        const idx = Number(e.key) - 1;
        if (idx < q.options.length) choose(idx);
      } else if ((e.key === "Enter" || e.key === "ArrowRight") && answered) {
        next();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, answered, done, q, choose]);

  /* ------------------------------ loading ------------------------------ */
  if (!today) {
    return (
      <div className="card p-6">
        <div className="h-4 w-40 animate-pulse rounded bg-line" />
        <div className="mt-4 h-24 animate-pulse rounded-2xl bg-line/60" />
      </div>
    );
  }

  /* ---------------------------- result screen --------------------------- */
  if (done) {
    const total = questions.length;
    const percent = Math.round((score / total) * 100);
    const msg =
      percent >= 80 ? "Brilliant! 🎉" : percent >= 50 ? "Nice work 👍" : "Keep going 💪";

    async function shareResult() {
      const origin = typeof window !== "undefined" ? window.location.origin : "";
      const url = `${origin}/daily`;
      const text = `I scored ${score}/${total} (${percent}%) on today's Quiz Gyan daily challenge${
        streak > 0 ? ` — ${streak}-day streak` : ""
      }! Try it:`;
      const imgUrl = `${origin}/api/og?type=result&score=${score}&total=${total}&pct=${percent}&streak=${streak}&best=${best}`;
      try {
        // Best experience: share the generated result image as a file (mobile).
        if (typeof navigator !== "undefined" && navigator.canShare) {
          try {
            const res = await fetch(imgUrl);
            const blob = await res.blob();
            const file = new File([blob], "quizgyan-daily.png", { type: "image/png" });
            if (navigator.canShare({ files: [file] })) {
              await navigator.share({
                files: [file],
                title: "Quiz Gyan — Daily Challenge",
                text,
                url,
              });
              setShareState("shared");
              return;
            }
          } catch {
            /* fall through to text share */
          }
        }
        if (typeof navigator !== "undefined" && navigator.share) {
          await navigator.share({ title: "Quiz Gyan — Daily Challenge", text, url });
          setShareState("shared");
        } else if (typeof navigator !== "undefined" && navigator.clipboard) {
          await navigator.clipboard.writeText(`${text} ${url}`);
          setShareState("copied");
          setTimeout(() => setShareState("idle"), 2200);
        }
      } catch {
        /* user dismissed the share sheet */
      }
    }

    return (
      <div className="card p-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-muted">
          {practice ? "Practice round" : "Daily challenge complete"}
        </p>
        <p className="mt-2 font-display text-5xl font-bold text-cobalt">{percent}%</p>
        <p className="mt-1 text-muted">
          {score} / {total} correct — {msg}
        </p>
        {newBest && !practice && (
          <p className="animate-pop mt-3 inline-flex items-center gap-1.5 rounded-full bg-amber/20 px-4 py-1.5 text-sm font-bold text-ink">
            🎉 New best streak!
          </p>
        )}
        {!practice && streak > 0 && (
          <p className="mt-1 text-sm text-muted">
            🔥 {streak}-day streak
            {best > 0 && <span> · Best: {best} {best === 1 ? "day" : "days"}</span>}
          </p>
        )}
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          {!practice && (
            <button
              onClick={shareResult}
              className="rounded-full bg-cobalt px-6 py-2.5 font-semibold text-white transition hover:brightness-110"
            >
              {shareState === "shared"
                ? "Shared ✓"
                : shareState === "copied"
                  ? "Result copied ✓"
                  : "Share my result"}
            </button>
          )}
          <button
            onClick={() => begin(true)}
            className="rounded-full border border-line bg-white px-6 py-2.5 font-semibold text-ink transition hover:border-cobalt hover:text-cobalt"
          >
            Practise again
          </button>
          <Link
            href="/cbse"
            className={
              practice
                ? "rounded-full bg-cobalt px-6 py-2.5 font-semibold text-white transition hover:brightness-110"
                : "rounded-full border border-line bg-white px-6 py-2.5 font-semibold text-ink transition hover:border-cobalt hover:text-cobalt"
            }
          >
            Study chapters
          </Link>
        </div>
        <ResetHint className="mt-4" />
      </div>
    );
  }

  /* ------------------------------ intro card ---------------------------- */
  if (!started) {
    return (
      <div className="card p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="chip bg-amber/20 text-ink">🗓️ {prettyDate(today)}</span>
          <div className="flex items-center gap-2">
            {streak > 0 && <span className="chip bg-coral/15 text-coral">🔥 {streak}-day streak</span>}
            {best > 0 && <span className="chip bg-cobalt-soft text-cobalt">Best: {best}</span>}
          </div>
        </div>
        <h2 className="mt-4 font-display text-2xl font-bold text-ink">
          {prior ? "You've done today's challenge" : "Today's challenge"}
        </h2>
        <p className="mt-1 text-muted">
          {questions.length} questions mixed from across every class and subject. The same set for
          everyone today — come back tomorrow for a new one.
        </p>

        {prior ? (
          <div className="mt-5 rounded-2xl bg-cobalt-soft/60 p-4">
            <p className="text-sm text-ink">
              Today's score:{" "}
              <strong className="font-display text-lg text-cobalt">{prior.percent}%</strong>{" "}
              ({prior.score}/{prior.total})
            </p>
            <ResetHint className="mt-1" />
          </div>
        ) : null}

        <div className="mt-5 flex flex-wrap gap-3">
          {!prior && (
            <button
              onClick={() => begin(false)}
              className="rounded-full bg-cobalt px-6 py-3 font-semibold text-white shadow-sm transition hover:brightness-110"
            >
              Start today's challenge
            </button>
          )}
          <button
            onClick={() => begin(true)}
            className={`rounded-full px-6 py-3 font-semibold transition ${
              prior
                ? "bg-cobalt text-white shadow-sm hover:brightness-110"
                : "border border-line bg-white text-ink hover:border-cobalt hover:text-cobalt"
            }`}
          >
            {prior ? "Play again for practice" : "Just practise (no streak)"}
          </button>
        </div>
        <p className="mt-4 text-xs text-muted">
          Tip: press 1–4 to answer and Enter to move on.
        </p>
      </div>
    );
  }

  /* ------------------------------- quiz UI ------------------------------ */
  return (
    <div className="card overflow-hidden">
      <div className="flex items-center justify-between border-b border-line px-5 py-3 text-sm">
        <span className="font-semibold text-ink">
          Question {i + 1} <span className="text-muted">of {questions.length}</span>
          {practice && <span className="ml-2 text-muted">· practice</span>}
        </span>
        <span className="chip bg-cobalt-soft text-cobalt">Score {score}</span>
      </div>

      <div className="h-1.5 w-full bg-line">
        <div
          className="h-full bg-amber transition-all"
          style={{ width: `${(i / questions.length) * 100}%` }}
        />
      </div>

      <div className="p-5">
        <p className="font-display text-lg font-semibold leading-snug text-ink">{q.q}</p>
        <div className="mt-4 grid gap-2.5">
          {q.options.map((opt, idx) => {
            const isCorrect = idx === q.answer;
            const isPicked = idx === picked;
            let cls = "border-line bg-white hover:border-cobalt hover:bg-cobalt-soft/50";
            if (answered && isCorrect) cls = "border-green bg-green/10 text-ink";
            else if (answered && isPicked) cls = "border-coral bg-coral/10 text-ink";
            else if (answered) cls = "border-line bg-white opacity-70";
            return (
              <button
                key={idx}
                onClick={() => choose(idx)}
                disabled={answered}
                className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-left transition ${cls}`}
              >
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-cream text-xs font-bold text-muted">
                  {idx + 1}
                </span>
                <span className="text-[0.95rem]">{opt}</span>
              </button>
            );
          })}
        </div>

        {answered && (
          <div className="mt-4 rounded-2xl bg-cobalt-soft/60 p-4 text-sm leading-relaxed text-ink">
            <span className="font-bold">
              {picked === q.answer ? "Correct. " : "Not quite. "}
            </span>
            {q.explanation}
            <Link
              href={q.url}
              className="mt-2 block font-semibold text-cobalt hover:underline"
            >
              From: {q.chapterTitle} — Class {q.classId} ·{" "}
              {q.subject === "maths" ? "Maths" : "Science"} →
            </Link>
          </div>
        )}

        <div className="mt-5 flex justify-end">
          <button
            onClick={next}
            disabled={!answered}
            className="rounded-full bg-cobalt px-6 py-2.5 font-semibold text-white transition enabled:hover:brightness-110 disabled:opacity-40"
          >
            {i + 1 < questions.length ? "Next question" : "See result"}
          </button>
        </div>
      </div>
    </div>
  );
}
