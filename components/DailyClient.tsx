"use client";

import { useEffect, useState } from "react";
import type { ChallengeMcq } from "@/lib/content";
import { QuestionOfDay } from "./QuestionOfDay";
import { DailyChallenge } from "./DailyChallenge";

export function DailyClient({ count = 10 }: { count?: number }) {
  const [pool, setPool] = useState<ChallengeMcq[] | null>(null);
  const [error, setError] = useState(false);

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
      <QuestionOfDay pool={pool} />
      <DailyChallenge pool={pool} count={count} />
    </div>
  );
}
