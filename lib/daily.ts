import type { ChallengeMcq } from "@/lib/content";

/** FNV-1a string hash → 32-bit unsigned int (stable across runs/browsers). */
export function hashStr(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  }
  return h >>> 0;
}

/** Small deterministic PRNG seeded by an integer. */
export function mulberry32(a: number) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Local calendar date as YYYY-MM-DD. */
export function todayStr(d: Date = new Date()): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate(),
  ).padStart(2, "0")}`;
}

/**
 * Local date (YYYY-MM-DD) shifted by `deltaDays` from today, using calendar
 * arithmetic so it rolls over at the user's local midnight and stays correct
 * across DST changes (unlike subtracting 86,400,000 ms).
 */
export function localDayStr(deltaDays = 0): string {
  const n = new Date();
  return todayStr(new Date(n.getFullYear(), n.getMonth(), n.getDate() + deltaDays));
}

/** Calendar date (YYYY-MM-DD) at a given timezone offset in minutes (IST = 330). */
export function todayStrTz(offsetMinutes: number): string {
  const d = new Date(Date.now() + offsetMinutes * 60000);
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}-${String(
    d.getUTCDate(),
  ).padStart(2, "0")}`;
}

export function prettyDate(iso: string): string {
  try {
    return new Date(iso + "T00:00:00").toLocaleDateString(undefined, {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
  } catch {
    return iso;
  }
}

/** Deterministically pick `count` questions for a given seed (e.g. the date). */
export function pickDaily(
  pool: ChallengeMcq[],
  count: number,
  seedStr: string,
): ChallengeMcq[] {
  const rng = mulberry32(hashStr(seedStr));
  const idx = pool.map((_, i) => i);
  for (let i = idx.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }
  return idx.slice(0, Math.min(count, pool.length)).map((i) => pool[i]);
}

/** Deterministically pick a single question for a given seed. */
export function pickOne(pool: ChallengeMcq[], seedStr: string): ChallengeMcq | null {
  if (pool.length === 0) return null;
  const rng = mulberry32(hashStr(seedStr));
  return pool[Math.floor(rng() * pool.length)];
}

/* ------------------------------ board helpers ----------------------------- */
export type DailyBoard = { key: string; label: string; sublabel?: string };

/** Boards offered in the Daily Challenge picker. */
export const DAILY_BOARDS: DailyBoard[] = [
  { key: "cbse", label: "CBSE", sublabel: "Class 1 & 6–10" },
  { key: "wbbpe", label: "WBBPE", sublabel: "বাংলা মাধ্যম" },
];

/**
 * localStorage key for a day's record. CBSE keeps the original key
 * (`qg:daily:<date>`) for back-compat with the homepage card; other boards
 * get a board-scoped key so each board's daily is independent.
 */
export function dailyKey(board: string, date: string): string {
  return board === "cbse" ? `qg:daily:${date}` : `qg:daily:${board}:${date}`;
}

/** Seed for the daily pick — CBSE keeps the original date-only seed. */
export function dailySeed(board: string, date: string): string {
  return board === "cbse" ? date : `${board}:${date}`;
}

/** Human label for a subject, aware of the board's medium. */
export function subjectLabel(board: string, subject: string): string {
  if (board === "wbbpe") {
    return (
      { maths: "গণিত", bengali: "বাংলা", english: "ইংরেজি" } as Record<string, string>
    )[subject] ?? subject;
  }
  return (
    {
      maths: "Maths",
      science: "Science",
      "social-science": "Social Science",
      english: "English",
    } as Record<string, string>
  )[subject] ?? "English";
}
