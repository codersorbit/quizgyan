// Pure marks-percentage logic. No React, no I/O.

const round2 = (n: number) => Math.round(n * 100) / 100;

export interface SimplePercent {
  ok: boolean;
  percent: number;
  pass: boolean;
  error?: string;
}

export interface SubjectRow {
  name: string;
  obtained: number;
  max: number;
}

export interface MultiResult {
  ok: boolean;
  totalObtained: number;
  totalMax: number;
  percent: number;
  pass: boolean;
  best?: { name: string; percent: number };
  weakest?: { name: string; percent: number };
  rows: Array<{ name: string; obtained: number; max: number; percent: number }>;
  error?: string;
}

function n(v: string | number): number {
  if (typeof v === "number") return v;
  const t = v.trim();
  return t === "" ? NaN : Number(t);
}

/** obtained / total → percentage, with pass flag vs passMark (default 33). */
export function simplePercentage(
  obtainedIn: string | number,
  totalIn: string | number,
  passMark = 33,
): SimplePercent {
  const obtained = n(obtainedIn);
  const total = n(totalIn);
  if (Number.isNaN(obtained) || Number.isNaN(total)) {
    return { ok: false, percent: 0, pass: false, error: "Enter both obtained and total marks." };
  }
  if (total <= 0) {
    return { ok: false, percent: 0, pass: false, error: "Total marks must be greater than 0." };
  }
  if (obtained < 0) {
    return { ok: false, percent: 0, pass: false, error: "Obtained marks cannot be negative." };
  }
  if (obtained > total) {
    return { ok: false, percent: 0, pass: false, error: "Obtained marks cannot exceed total marks." };
  }
  const percent = round2((obtained / total) * 100);
  return { ok: true, percent, pass: percent >= passMark };
}

/** Multi-subject total + overall % + best / weakest subject. */
export function multiSubject(rows: SubjectRow[], passMark = 33): MultiResult {
  const clean = rows.filter((r) => r.max > 0 && !Number.isNaN(r.obtained) && !Number.isNaN(r.max));
  if (clean.length === 0) {
    return {
      ok: false,
      totalObtained: 0,
      totalMax: 0,
      percent: 0,
      pass: false,
      rows: [],
      error: "Add at least one subject with a max mark greater than 0.",
    };
  }
  for (const r of clean) {
    if (r.obtained < 0 || r.obtained > r.max) {
      return {
        ok: false,
        totalObtained: 0,
        totalMax: 0,
        percent: 0,
        pass: false,
        rows: [],
        error: `Check "${r.name || "subject"}": marks must be between 0 and ${r.max}.`,
      };
    }
  }
  const detailed = clean.map((r) => ({
    name: r.name || "Subject",
    obtained: r.obtained,
    max: r.max,
    percent: round2((r.obtained / r.max) * 100),
  }));
  const totalObtained = detailed.reduce((s, r) => s + r.obtained, 0);
  const totalMax = detailed.reduce((s, r) => s + r.max, 0);
  const percent = round2((totalObtained / totalMax) * 100);
  const sorted = [...detailed].sort((a, b) => b.percent - a.percent);
  return {
    ok: true,
    totalObtained,
    totalMax,
    percent,
    pass: percent >= passMark,
    best: { name: sorted[0].name, percent: sorted[0].percent },
    weakest: { name: sorted[sorted.length - 1].name, percent: sorted[sorted.length - 1].percent },
    rows: detailed,
  };
}
