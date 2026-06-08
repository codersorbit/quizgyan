"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { ChallengeMcq } from "@/lib/content";
import { pickOne, todayStr, prettyDate } from "@/lib/daily";

export function QuestionOfDay({ pool }: { pool: ChallengeMcq[] }) {
  const [today, setToday] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [shareState, setShareState] = useState<"idle" | "copied" | "shared">("idle");

  useEffect(() => {
    setToday(todayStr());
  }, []);

  const q = useMemo(
    () => (today ? pickOne(pool, `qotd:${today}`) : null),
    [pool, today],
  );

  async function share() {
    if (!q) return;
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const url = `${origin}/daily`;
    const text = `🧠 Question of the Day\n\n${q.q}\n\nCan you crack it? Practise free on Quiz Gyan:`;
    const imgUrl = `${origin}/api/og?type=question&q=${encodeURIComponent(q.q)}&cls=${encodeURIComponent(
      q.classId,
    )}&sub=${encodeURIComponent(q.subject)}`;
    try {
      // Best experience: share the generated question image as a file (mobile).
      if (typeof navigator !== "undefined" && navigator.canShare) {
        try {
          const res = await fetch(imgUrl);
          const blob = await res.blob();
          const file = new File([blob], "quizgyan-qotd.png", { type: "image/png" });
          if (navigator.canShare({ files: [file] })) {
            await navigator.share({ files: [file], title: "Quiz Gyan — Question of the Day", text, url });
            setShareState("shared");
            return;
          }
        } catch {
          /* fall through to text share */
        }
      }
      if (typeof navigator !== "undefined" && navigator.share) {
        await navigator.share({ title: "Quiz Gyan — Question of the Day", text, url });
        setShareState("shared");
      } else if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(`${text}\n${url}`);
        setShareState("copied");
        setTimeout(() => setShareState("idle"), 2200);
      }
    } catch {
      /* user dismissed the share sheet — no-op */
    }
  }

  if (!today || !q) {
    return (
      <div className="card p-6">
        <div className="h-4 w-44 animate-pulse rounded bg-line" />
        <div className="mt-4 h-20 animate-pulse rounded-2xl bg-line/60" />
      </div>
    );
  }

  const letters = ["A", "B", "C", "D"];

  return (
    <div className="card overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-2 bg-amber/15 px-5 py-3">
        <span className="font-display font-bold text-ink">🧠 Question of the day</span>
        <span className="text-xs text-muted">{prettyDate(today)}</span>
      </div>

      <div className="p-5">
        <p className="font-display text-lg font-semibold leading-snug text-ink">{q.q}</p>

        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {q.options.map((opt, idx) => {
            const isCorrect = idx === q.answer;
            const cls =
              revealed && isCorrect
                ? "border-green bg-green/10 text-ink"
                : "border-line bg-white text-ink";
            return (
              <li
                key={idx}
                className={`flex items-center gap-2.5 rounded-2xl border px-3.5 py-2.5 text-[0.95rem] ${cls}`}
              >
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-cream text-xs font-bold text-muted">
                  {letters[idx] ?? idx + 1}
                </span>
                <span>{opt}</span>
                {revealed && isCorrect && (
                  <span aria-hidden className="ml-auto text-green">✓</span>
                )}
              </li>
            );
          })}
        </ul>

        {revealed && (
          <div className="mt-4 rounded-2xl bg-cobalt-soft/60 p-4 text-sm leading-relaxed text-ink">
            <span className="font-bold">Answer: {letters[q.answer]}. </span>
            {q.explanation}
            <Link href={q.url} className="mt-2 block font-semibold text-cobalt hover:underline">
              From: {q.chapterTitle} — Class {q.classId} ·{" "}
              {q.subject === "maths" ? "Maths" : "Science"} →
            </Link>
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-3">
          <button
            onClick={() => setRevealed((r) => !r)}
            className="rounded-full border border-line bg-white px-5 py-2.5 font-semibold text-ink transition hover:border-cobalt hover:text-cobalt"
          >
            {revealed ? "Hide answer" : "Reveal answer"}
          </button>
          <button
            onClick={share}
            className="rounded-full bg-cobalt px-5 py-2.5 font-semibold text-white transition hover:brightness-110"
          >
            {shareState === "copied"
              ? "Link copied ✓"
              : shareState === "shared"
                ? "Shared ✓"
                : "Share question"}
          </button>
        </div>
      </div>
    </div>
  );
}
