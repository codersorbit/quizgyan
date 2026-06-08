"use client";

import { useEffect, useState, useCallback } from "react";
import type { MCQ } from "@/lib/types";
import { localDayStr } from "@/lib/daily";

/* --------------------------- localStorage utils -------------------------- */
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
    /* private mode or storage full — ignore */
  }
}

function recordCompletion(storageKey: string, title: string, percent: number) {
  // Best score for this quiz
  const bestKey = `qg:best:${storageKey}`;
  const prevBest = readJSON<number>(bestKey, 0);
  if (percent > prevBest) writeJSON(bestKey, percent);

  // Recently completed (most recent first, capped at 8)
  const recent = readJSON<{ key: string; title: string; percent: number; at: number }[]>(
    "qg:recent",
    [],
  ).filter((r) => r.key !== storageKey);
  recent.unshift({ key: storageKey, title, percent, at: Date.now() });
  writeJSON("qg:recent", recent.slice(0, 8));

  // Daily streak (uses the user's LOCAL date so it rolls over at local midnight)
  const today = localDayStr(0);
  const streak = readJSON<{ count: number; last: string }>("qg:streak", {
    count: 0,
    last: "",
  });
  if (streak.last !== today) {
    const yesterday = localDayStr(-1);
    streak.count = streak.last === yesterday ? streak.count + 1 : 1;
    streak.last = today;
    writeJSON("qg:streak", streak);
  }

  // Best (longest) streak ever
  const bestStreak = readJSON<number>("qg:beststreak", 0);
  if (streak.count > bestStreak) writeJSON("qg:beststreak", streak.count);
}

/* -------------------------------- Quiz UI -------------------------------- */
export function Quiz({
  mcqs,
  title,
  storageKey,
}: {
  mcqs: MCQ[];
  title: string;
  storageKey: string;
}) {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [best, setBest] = useState<number | null>(null);

  useEffect(() => {
    setBest(readJSON<number>(`qg:best:${storageKey}`, 0) || null);
  }, [storageKey]);

  const q = mcqs[i];
  const answered = picked !== null;

  const choose = useCallback(
    (idx: number) => {
      if (picked !== null) return;
      setPicked(idx);
      if (idx === q.answer) setScore((s) => s + 1);
    },
    [picked, q],
  );

  function next() {
    if (i + 1 < mcqs.length) {
      setI(i + 1);
      setPicked(null);
    } else {
      const percent = Math.round((score / mcqs.length) * 100);
      recordCompletion(storageKey, title, percent);
      setBest((b) => (b === null ? percent : Math.max(b, percent)));
      setDone(true);
    }
  }

  function restart() {
    setI(0);
    setPicked(null);
    setScore(0);
    setDone(false);
  }

  // Keyboard: 1–4 to pick, Enter/→ to advance
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (done) return;
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
  }, [answered, done, q, choose]);

  if (done) {
    const percent = Math.round((score / mcqs.length) * 100);
    const msg =
      percent >= 80 ? "Excellent! 🎉" : percent >= 50 ? "Good effort 👍" : "Keep practising 💪";
    return (
      <div className="card p-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-muted">Quiz complete</p>
        <p className="mt-2 font-display text-5xl font-bold text-cobalt">{percent}%</p>
        <p className="mt-1 text-muted">
          {score} / {mcqs.length} correct — {msg}
        </p>
        {best !== null && best > percent && (
          <p className="mt-1 text-sm text-muted">Your best on this quiz: {best}%</p>
        )}
        <button
          onClick={restart}
          className="mt-5 rounded-full bg-cobalt px-6 py-2.5 font-semibold text-white transition hover:brightness-110"
        >
          Retake quiz
        </button>
      </div>
    );
  }

  return (
    <div className="card overflow-hidden">
      <div className="flex items-center justify-between border-b border-line px-5 py-3 text-sm">
        <span className="font-semibold text-ink">
          Question {i + 1} <span className="text-muted">of {mcqs.length}</span>
        </span>
        <span className="chip bg-cobalt-soft text-cobalt">Score {score}</span>
      </div>

      <div className="h-1.5 w-full bg-line">
        <div
          className="h-full bg-amber transition-all"
          style={{ width: `${(i / mcqs.length) * 100}%` }}
        />
      </div>

      <div className="p-5">
        <p className="font-display text-lg font-semibold leading-snug text-ink">{q.q}</p>
        <div className="mt-4 grid gap-2.5">
          {q.options.map((opt, idx) => {
            const isCorrect = idx === q.answer;
            const isPicked = idx === picked;
            let cls =
              "border-line bg-white hover:border-cobalt hover:bg-cobalt-soft/50";
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
          </div>
        )}

        <div className="mt-5 flex justify-end">
          <button
            onClick={next}
            disabled={!answered}
            className="rounded-full bg-cobalt px-6 py-2.5 font-semibold text-white transition enabled:hover:brightness-110 disabled:opacity-40"
          >
            {i + 1 < mcqs.length ? "Next question" : "See result"}
          </button>
        </div>
      </div>
    </div>
  );
}
