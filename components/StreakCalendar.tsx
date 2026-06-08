"use client";

import { useEffect, useState } from "react";
import { todayStr } from "@/lib/daily";

type Recent = { key: string; title: string; percent: number; at: number };

/** Longest run of consecutive active days within the given ISO-date set. */
function longestRun(isoSet: Set<string>): number {
  const days = Array.from(isoSet)
    .map((iso) => {
      const [y, m, d] = iso.split("-").map(Number);
      return Math.floor(Date.UTC(y, m - 1, d) / 86400000);
    })
    .sort((a, b) => a - b);
  let best = 0;
  let cur = 0;
  let prev: number | null = null;
  for (const d of days) {
    cur = prev !== null && d === prev + 1 ? cur + 1 : 1;
    if (cur > best) best = cur;
    prev = d;
  }
  return best;
}

export function StreakCalendar() {
  const [ready, setReady] = useState(false);
  const [streak, setStreak] = useState(0);
  const [best, setBest] = useState(0);
  const [recent, setRecent] = useState<Recent[]>([]);
  const [active, setActive] = useState<Set<string>>(new Set());

  useEffect(() => {
    const set = new Set<string>();
    let s = 0;
    let r: Recent[] = [];
    try {
      const streakObj = JSON.parse(localStorage.getItem("qg:streak") || "{}");
      if (typeof streakObj.count === "number") s = streakObj.count;
      const rawRecent = JSON.parse(localStorage.getItem("qg:recent") || "[]");
      r = Array.isArray(rawRecent) ? rawRecent : [];
      for (const it of r) if (it && it.at) set.add(todayStr(new Date(it.at)));
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && k.startsWith("qg:daily:")) set.add(k.slice("qg:daily:".length));
      }
      // Best streak: the larger of the stored record, the current streak,
      // and the longest consecutive run we can see in the activity history.
      let storedBest = 0;
      try {
        storedBest = JSON.parse(localStorage.getItem("qg:beststreak") || "0") || 0;
      } catch {
        storedBest = 0;
      }
      const computedBest = Math.max(storedBest, s, longestRun(set));
      if (computedBest > storedBest) {
        try {
          localStorage.setItem("qg:beststreak", JSON.stringify(computedBest));
        } catch {
          /* ignore */
        }
      }
      setBest(computedBest);
    } catch {
      /* ignore */
    }
    setStreak(s);
    setRecent(r);
    setActive(set);
    setReady(true);
  }, []);

  // Avoid layout shift before hydration and for brand-new visitors.
  if (!ready || (streak === 0 && active.size === 0)) return null;

  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const todayISO = todayStr(now);
  const dow = now.getDay(); // 0 = Sunday
  const gridStart = new Date(now);
  gridStart.setDate(now.getDate() - dow - 7 * 4); // Sunday, 5 weeks incl. this week

  const cells: { iso: string; isActive: boolean; isToday: boolean; future: boolean }[] = [];
  for (let k = 0; k < 35; k++) {
    const d = new Date(gridStart);
    d.setDate(gridStart.getDate() + k);
    const iso = todayStr(d);
    cells.push({
      iso,
      isActive: active.has(iso),
      isToday: iso === todayISO,
      future: d.getTime() > now.getTime(),
    });
  }
  const activeCount = cells.filter((c) => c.isActive).length;
  const weekLabels = ["S", "M", "T", "W", "T", "F", "S"];

  return (
    <section className="mt-10 card p-5">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        {/* Streak summary */}
        <div className="flex items-center gap-3">
          <span aria-hidden className="grid h-12 w-12 place-items-center rounded-2xl bg-amber/20 text-2xl">
            🔥
          </span>
          <div>
            <p className="font-display text-3xl font-bold leading-none text-ink">{streak}</p>
            <p className="text-sm text-muted">day streak</p>
            <p className="mt-1 text-xs text-muted">
              Best: {best} {best === 1 ? "day" : "days"} · {activeCount} active in 5 weeks
            </p>
          </div>
        </div>

        {/* Activity calendar */}
        <div>
          <div className="mb-1 grid grid-cols-7 gap-1.5">
            {weekLabels.map((w, i) => (
              <span key={i} className="text-center text-[0.6rem] font-semibold text-muted">
                {w}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1.5" role="img" aria-label={`${activeCount} active study days in the last five weeks`}>
            {cells.map((c) => {
              let cls = "bg-line/50"; // past, inactive
              if (c.future) cls = "bg-line/20";
              else if (c.isActive) cls = "bg-cobalt";
              return (
                <span
                  key={c.iso}
                  title={c.iso + (c.isActive ? " · studied" : "")}
                  className={`h-4 w-4 rounded-[5px] ${cls} ${
                    c.isToday ? "ring-2 ring-amber ring-offset-1 ring-offset-white" : ""
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>

      {recent.length > 0 && (
        <div className="mt-5 border-t border-line pt-4">
          <p className="mb-1.5 text-sm font-semibold text-muted">Recently completed</p>
          <ul className="flex flex-wrap gap-2">
            {recent.slice(0, 4).map((item) => (
              <li key={item.key} className="chip bg-cobalt-soft text-cobalt">
                {item.title.length > 22 ? item.title.slice(0, 22) + "…" : item.title} ·{" "}
                {item.percent}%
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
