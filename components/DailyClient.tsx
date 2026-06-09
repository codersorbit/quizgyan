"use client";

import { useEffect, useMemo, useState } from "react";
import type { ChallengeMcq } from "@/lib/content";
import { DAILY_BOARDS } from "@/lib/daily";
import { QuestionOfDay } from "./QuestionOfDay";
import { DailyChallenge } from "./DailyChallenge";

export function DailyClient({ count = 10 }: { count?: number }) {
  const [pool, setPool] = useState<ChallengeMcq[] | null>(null);
  const [error, setError] = useState(false);
  const [board, setBoard] = useState("cbse");

  useEffect(() => {
    try {
      const b = localStorage.getItem("qg:board");
      if (b === "cbse" || b === "wbbpe") setBoard(b);
    } catch {
      /* ignore */
    }
  }, []);

  function chooseBoard(b: string) {
    setBoard(b);
    try {
      localStorage.setItem("qg:board", b);
    } catch {
      /* ignore */
    }
  }

  useEffect(() => {
    let alive = true;
    fetch("/daily-pool.json")
      .then((r) => {
        if (!r.ok) throw new Error("bad response");
        return r.json();
      })
      .then((data: ChallengeMcq[]) => {
        if (alive) setPool(data);
      })
      .catch(() => {
        if (alive) setError(true);
      });
    return () => {
      alive = false;
    };
  }, []);

  // Which boards actually have questions in the pool (so we only show real options).
  const boards = useMemo(() => {
    if (!pool) return DAILY_BOARDS;
    const present = new Set(pool.map((q) => q.board ?? "cbse"));
    return DAILY_BOARDS.filter((b) => present.has(b.key));
  }, [pool]);

  const view = useMemo(
    () => (pool ? pool.filter((q) => (q.board ?? "cbse") === board) : []),
    [pool, board],
  );

  if (error) {
    return (
      <div className="card p-6 text-muted">
        Couldn&apos;t load today&apos;s questions. Please check your connection and refresh.
      </div>
    );
  }

  if (!pool) {
    return (
      <div className="space-y-6">
        <div className="card p-6">
          <div className="h-4 w-44 animate-pulse rounded bg-line" />
          <div className="mt-4 h-20 animate-pulse rounded-2xl bg-line/60" />
        </div>
        <div className="card p-6">
          <div className="h-4 w-40 animate-pulse rounded bg-line" />
          <div className="mt-4 h-24 animate-pulse rounded-2xl bg-line/60" />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {boards.length > 1 && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-semibold text-muted">Board:</span>
          <div className="inline-flex rounded-full border border-white/60 bg-white/55 p-1 backdrop-blur">
            {boards.map((b) => {
              const active = b.key === board;
              return (
                <button
                  key={b.key}
                  onClick={() => chooseBoard(b.key)}
                  className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                    active
                      ? "bg-linear-to-r from-cobalt to-violet text-white shadow-sm"
                      : "text-ink hover:text-cobalt"
                  }`}
                >
                  {b.label}
                  {b.sublabel ? <span className="ml-1 opacity-80">· {b.sublabel}</span> : null}
                </button>
              );
            })}
          </div>
        </div>
      )}
      <QuestionOfDay pool={view} board={board} />
      <DailyChallenge pool={view} count={count} board={board} />
    </div>
  );
}
