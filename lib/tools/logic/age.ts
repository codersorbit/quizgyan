// Pure age + countdown logic. No React, no I/O. Dates are passed as ISO strings.

export interface AgeResult {
  ok: boolean;
  years: number;
  months: number;
  days: number;
  /** total complete months, useful for guidance */
  totalMonths: number;
  guidanceClass: string;
  error?: string;
}

/** Exact age (years/months/days) on a cutoff date. */
export function ageOn(dobIso: string, cutoffIso: string): AgeResult {
  const dob = parseDate(dobIso);
  const cutoff = parseDate(cutoffIso);
  if (!dob || !cutoff) {
    return { ok: false, years: 0, months: 0, days: 0, totalMonths: 0, guidanceClass: "", error: "Enter a valid date of birth and cutoff date." };
  }
  if (cutoff < dob) {
    return { ok: false, years: 0, months: 0, days: 0, totalMonths: 0, guidanceClass: "", error: "Cutoff date is before the date of birth." };
  }

  let years = cutoff.getFullYear() - dob.getFullYear();
  let months = cutoff.getMonth() - dob.getMonth();
  let days = cutoff.getDate() - dob.getDate();

  if (days < 0) {
    months -= 1;
    // days in the month before the cutoff month
    const prevMonth = new Date(cutoff.getFullYear(), cutoff.getMonth(), 0).getDate();
    days += prevMonth;
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const totalMonths = years * 12 + months;
  return { ok: true, years, months, days, totalMonths, guidanceClass: eligibleClass(years, months) };
}

/**
 * Common (NEP-aligned) age-for-class guidance. This is GUIDANCE ONLY — exact
 * norms vary by state and school, so the UI shows a "verify with your school" note.
 * Age is measured on the cutoff date.
 */
function eligibleClass(years: number, months: number): string {
  const m = years * 12 + months;
  if (m < 3 * 12) return "Pre-nursery / Playgroup";
  if (m < 4 * 12) return "Nursery (LKG readiness)";
  if (m < 5 * 12) return "LKG";
  if (m < 6 * 12) return "UKG";
  if (m < 7 * 12) return "Class 1";
  if (m < 8 * 12) return "Class 2";
  if (m < 9 * 12) return "Class 3";
  if (m < 10 * 12) return "Class 4";
  if (m < 11 * 12) return "Class 5";
  const cls = Math.min(10, years - 5);
  return `Around Class ${cls}`;
}

/* ------------------------------ Countdown ------------------------------- */

export interface Countdown {
  ok: boolean;
  past: boolean;
  totalSeconds: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  error?: string;
}

/** Time remaining until an ISO target, relative to `nowMs`. */
export function timeLeft(targetIso: string, nowMs: number): Countdown {
  const target = parseDate(targetIso);
  if (!target) {
    return { ok: false, past: false, totalSeconds: 0, days: 0, hours: 0, minutes: 0, seconds: 0, error: "Pick an exam date." };
  }
  let diff = Math.floor((target.getTime() - nowMs) / 1000);
  const past = diff < 0;
  if (past) diff = 0;
  const days = Math.floor(diff / 86400);
  const hours = Math.floor((diff % 86400) / 3600);
  const minutes = Math.floor((diff % 3600) / 60);
  const seconds = diff % 60;
  return { ok: true, past, totalSeconds: diff, days, hours, minutes, seconds };
}

/** Study-time framing: ~hours of study left at `perDay` hours/day. */
export function studyHours(days: number, perDay = 2): number {
  return Math.max(0, days) * perDay;
}

/* ------------------------------- helpers -------------------------------- */

function parseDate(iso: string): Date | null {
  if (!iso) return null;
  // Accept YYYY-MM-DD (date input) or full ISO.
  const d = new Date(iso.length === 10 ? `${iso}T00:00:00` : iso);
  return Number.isNaN(d.getTime()) ? null : d;
}
