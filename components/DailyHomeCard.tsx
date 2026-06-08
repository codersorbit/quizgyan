"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { todayStr } from "@/lib/daily";

type DailyRecord = { percent: number; score: number; total: number; at: number };

export function DailyHomeCard() {
  const [mounted, setMounted] = useState(false);
  const [rec, setRec] = useState<DailyRecord | null>(null);
  const [streak, setStreak] = useState(0);
  const [best, setBest] = useState(0);
  const [shareState, setShareState] = useState<"idle" | "shared" | "copied">("idle");
  const [imgOk, setImgOk] = useState(true);
  const [justBest, setJustBest] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const today = todayStr();
      const r = JSON.parse(localStorage.getItem(`qg:daily:${today}`) || "null");
      if (r && typeof r.percent === "number") setRec(r);
      const s = JSON.parse(localStorage.getItem("qg:streak") || "{}");
      if (typeof s.count === "number") setStreak(s.count);
      const b = JSON.parse(localStorage.getItem("qg:beststreak") || "0");
      if (typeof b === "number") setBest(b);
      const nb = localStorage.getItem("qg:newbest");
      if (nb === today) {
        setJustBest(true);
        localStorage.removeItem("qg:newbest"); // celebrate once
      } else if (nb) {
        localStorage.removeItem("qg:newbest"); // stale flag from a previous day
      }
    } catch {
      /* ignore */
    }
  }, []);

  // Default (server render, and when today's challenge isn't done yet): the CTA banner.
  if (!mounted || !rec) {
    return (
      <Link
        href="/daily"
        className="card group flex flex-wrap items-center justify-between gap-4 p-6 transition hover:-translate-y-0.5"
      >
        <div className="flex items-center gap-4">
          <span aria-hidden className="grid h-12 w-12 place-items-center rounded-2xl bg-amber/20 text-2xl">
            🗓️
          </span>
          <div>
            <h2 className="font-display text-xl font-bold text-ink group-hover:text-cobalt">
              Take the daily challenge
            </h2>
            <p className="text-sm text-muted">
              10 fresh questions mixed from every class &amp; subject — build a streak.
            </p>
          </div>
        </div>
        <span className="rounded-full bg-cobalt px-5 py-2.5 font-semibold text-white transition group-hover:brightness-110">
          Play today →
        </span>
      </Link>
    );
  }

  const imgUrl = `/api/og?type=result&score=${rec.score}&total=${rec.total}&pct=${rec.percent}&streak=${streak}&best=${best}`;

  async function shareResult() {
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const url = `${origin}/daily`;
    const r = rec!;
    const text = `I scored ${r.score}/${r.total} (${r.percent}%) on today's Quiz Gyan daily challenge${
      streak > 0 ? ` — ${streak}-day streak` : ""
    }! Try it:`;
    const full = `${origin}${imgUrl}`;
    try {
      if (typeof navigator !== "undefined" && navigator.canShare) {
        try {
          const res = await fetch(full);
          const blob = await res.blob();
          const file = new File([blob], "quizgyan-daily.png", { type: "image/png" });
          if (navigator.canShare({ files: [file] })) {
            await navigator.share({ files: [file], title: "Quiz Gyan — Daily Challenge", text, url });
            setShareState("shared");
            return;
          }
        } catch {
          /* fall through */
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
      /* dismissed */
    }
  }

  return (
    <section className={`card p-5 sm:p-6 ${justBest ? "glow-best" : ""}`}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="flex items-center gap-2 font-display text-xl font-bold text-ink">
          Today&apos;s daily challenge
          <span
            aria-label="Completed today"
            title="Completed today"
            className="inline-grid h-5 w-5 place-items-center rounded-full bg-green text-xs font-bold leading-none text-white"
          >
            ✓
          </span>
        </h2>
        {justBest ? (
          <span className="chip animate-pop bg-amber/25 font-bold text-ink">🎉 New best streak!</span>
        ) : (
          streak > 0 && <span className="chip bg-coral/15 text-coral">🔥 {streak}-day streak</span>
        )}
      </div>
      <div className={imgOk ? "mt-4 grid gap-4 sm:grid-cols-[1.6fr_1fr] sm:items-center" : "mt-4"}>
        {imgOk && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imgUrl}
            alt={`Your result: ${rec.percent}% (${rec.score} of ${rec.total} correct)`}
            width={1200}
            height={630}
            onError={() => setImgOk(false)}
            className="w-full rounded-2xl border border-line"
          />
        )}
        <div className="flex flex-col gap-3">
          <p className="text-muted">
            You scored{" "}
            <strong className="font-display text-lg text-ink">{rec.percent}%</strong> (
            {rec.score}/{rec.total}). Done for today!
          </p>
          <button
            onClick={shareResult}
            className="rounded-full bg-cobalt px-5 py-2.5 font-semibold text-white transition hover:brightness-110"
          >
            {shareState === "shared"
              ? "Shared ✓"
              : shareState === "copied"
                ? "Result copied ✓"
                : "Share my result"}
          </button>
          <Link
            href="/daily"
            className="rounded-full border border-line bg-white px-5 py-2.5 text-center font-semibold text-ink transition hover:border-cobalt hover:text-cobalt"
          >
            Practise again
          </Link>
        </div>
      </div>
    </section>
  );
}
