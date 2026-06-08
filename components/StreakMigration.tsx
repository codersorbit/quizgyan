"use client";

import { useEffect } from "react";
import { localDayStr, todayStr } from "@/lib/daily";

/** True if there's recorded activity (daily challenge or any quiz) on a local date. */
function activeOn(localDate: string): boolean {
  try {
    if (localStorage.getItem(`qg:daily:${localDate}`)) return true;
    const recent = JSON.parse(localStorage.getItem("qg:recent") || "[]");
    if (Array.isArray(recent)) {
      for (const r of recent) {
        if (r && typeof r.at === "number" && todayStr(new Date(r.at)) === localDate) return true;
      }
    }
  } catch {
    /* ignore */
  }
  return false;
}

/**
 * Earlier versions stored the streak's `last` date in UTC, while the app now
 * compares against the user's LOCAL date. Across that change a user could be
 * off by a day and lose their streak. This runs once per device to fold the
 * old value into the local scheme:
 *   - a `last` in the future (timezones behind UTC over-dated it) → clamp to today
 *   - a `last` two local days ago, in a timezone ahead of UTC (which under-dated
 *     it), is bumped to "yesterday" ONLY if qg:daily/qg:recent history confirms
 *     the user actually played yesterday — otherwise it's left as a genuine gap.
 * Conservative: it never shortens a streak and only nudges the boundary.
 */
function migrateStreak() {
  try {
    if (localStorage.getItem("qg:streakMigrated")) return;

    const raw = localStorage.getItem("qg:streak");
    if (raw) {
      const s = JSON.parse(raw);
      if (s && typeof s.last === "string" && /^\d{4}-\d{2}-\d{2}$/.test(s.last)) {
        const today = localDayStr(0);
        const yesterday = localDayStr(-1);
        const twoAgo = localDayStr(-2);
        const aheadOfUtc = new Date().getTimezoneOffset() < 0; // e.g. IST is -330

        if (s.last > today) {
          s.last = today; // a future date is impossible under the local scheme
        } else if (s.last === twoAgo && aheadOfUtc && activeOn(yesterday)) {
          // Under-dated by UTC, and we can confirm they actually played yesterday.
          s.last = yesterday;
        }
        localStorage.setItem("qg:streak", JSON.stringify(s));
      }
    }

    localStorage.setItem("qg:streakMigrated", "1");
  } catch {
    /* ignore */
  }
}

export function StreakMigration() {
  useEffect(() => {
    migrateStreak();
  }, []);
  return null;
}
