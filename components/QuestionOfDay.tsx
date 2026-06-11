"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { ChallengeMcq } from "@/lib/content";
import { pickOne, todayStr, prettyDate, subjectLabel } from "@/lib/daily";

export function QuestionOfDay({ pool, board = "cbse" }: { pool: ChallengeMcq[]; board?: string }) {
  const [today, setToday] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [picked, setPicked] = useState<number | null>(null);
  const [shareState, setShareState] = useState<"idle" | "copied" | "shared">("idle");

  useEffect(() => {
    setToday(todayStr());
  }, []);

  const q = useMemo(
    () => (today ? pickOne(pool, board === "cbse" ? `qotd:${today}` : `qotd:${board}:${today}`) : null),
    [pool, today, board],
  );

  // Reset the chosen option / reveal whenever the question changes (new day or board).
  useEffect(() => {
    setPicked(null);
    setRevealed(false);
  }, [q]);

  async function share() {
    if (!q) return;
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const url = `${origin}/daily`;
    const text = `🧠 Question of the Day\n\n${q.q}\n\nCan you crack it? Practise free on StudyMatic:`;
    const imgUrl = `${origin}/api/og?type=question&q=${encodeURIComponent(q.q)}&cls=${encodeURIComponent(
      q.classId,
    )}&sub=${encodeURIComponent(q.subject)}`;
    try {
      // Best experience: share the generated question image as a file (mobile).
      if (typeof navigator !== "undefined" && navigator.canShare) {
        try {
          const res = await fetch(imgUrl);
          const blob = await res.blob();
          const file = new File([blob], "studymatic-qotd.png", { type: "image/png" });
          if (navigator.canShare({ files: [file] })) {
            await navigator.share({ files: [file], title: "StudyMatic — Question of the Day", text, url });
            setShareState("shared");
            return;
          }
        } catch {
          /* fall through to text share */
        }
      }
      if (typeof navigator !== "undefined" && navigator.share) {
        await navigator.share({ title: "StudyMatic — Question of the Day", text, url });
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
  const open = revealed || picked !== null;

  return (
    <div className="card overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-2 bg-amber/15 px-5 py-3">
        <span className="font-display font-bold text-ink">🧠 Question of the day</span>
        <span className="text-xs text-muted">{prettyDate(today)}</span>
      </div>

      <div className="p-5">
        <p className="font-display text-lg font-semibold leading-snug text-ink">{q.q}</p>

        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {q.options.map((opt, idx) => {
            const isCorrect = idx === q.answer;
            const isPicked = idx === picked;
            let cls = "border-white/60 bg-white/55 backdrop-blur hover:border-cobalt hover:bg-white/80";
            if (open && isCorrect) cls = "border-green/70 bg-green/15 text-ink";
            else if (isPicked) cls = "border-coral/70 bg-coral/15 text-ink";
            else if (open) cls = "border-white/50 bg-white/35 opacity-70";
            return (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  if (!open) setPicked(idx);
                }}
                disabled={open}
                className={`flex items-center gap-2.5 rounded-2xl border px-3.5 py-2.5 text-left text-[0.95rem] shadow-sm transition ${cls}`}
              >
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-white/70 text-xs font-bold text-muted">
                  {letters[idx] ?? idx + 1}
                </span>
                <span>{opt}</span>
                {open && isCorrect && <span aria-hidden className="ml-auto text-green">✓</span>}
              </button>
            );
          })}
        </div>
        {!open && (
          <p className="mt-2 text-xs text-muted">Tap an option to answer — or reveal it below.</p>
        )}

        {open && (
          <div
            className={`mt-4 rounded-2xl border bg-white/55 p-4 text-sm leading-relaxed text-ink backdrop-blur ${
              picked !== null ? (picked === q.answer ? "border-green/50" : "border-coral/50") : "border-cobalt/30"
            }`}
          >
            <span
              className={`font-bold ${
                picked !== null ? (picked === q.answer ? "text-green" : "text-coral") : "text-cobalt"
              }`}
            >
              {picked !== null ? (picked === q.answer ? "Correct! " : "Not quite. ") : ""}
              Answer: {letters[q.answer]}.{" "}
            </span>
            {q.explanation}
            <Link href={q.url} className="mt-2 block font-semibold text-cobalt hover:underline">
              From: {q.chapterTitle} — Class {q.classId} ·{" "}
              {subjectLabel(board, q.subject)}{" "}
              →
            </Link>
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-3">
          {!open ? (
            <button
              type="button"
              onClick={() => setRevealed(true)}
              className="rounded-full border border-white/60 bg-white/55 px-5 py-2.5 font-semibold text-ink backdrop-blur transition hover:text-cobalt"
            >
              Reveal answer
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                setPicked(null);
                setRevealed(false);
              }}
              className="rounded-full border border-white/60 bg-white/55 px-5 py-2.5 font-semibold text-ink backdrop-blur transition hover:text-cobalt"
            >
              Try again
            </button>
          )}
          <button
            onClick={share}
            className="rounded-full bg-linear-to-r from-cobalt to-violet px-5 py-2.5 font-semibold text-white shadow-sm shadow-cobalt/20 transition hover:brightness-110"
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
