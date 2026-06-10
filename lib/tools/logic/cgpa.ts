// Pure CGPA <-> percentage logic (CBSE). No React, no I/O.
// CBSE multiplier: percentage = CGPA × 9.5.

export const CGPA_MULTIPLIER = 9.5;
export const CGPA_MIN = 0;
export const CGPA_MAX = 10;

const round1 = (n: number) => Math.round(n * 10) / 10;
const round2 = (n: number) => Math.round(n * 100) / 100;

export interface CgpaResult {
  ok: boolean;
  /** percentage, one decimal */
  percentage: number;
  grade: GradeBand;
  error?: string;
}

export interface PercentResult {
  ok: boolean;
  /** cgpa, two decimals */
  cgpa: number;
  grade: GradeBand;
  error?: string;
}

export interface GradeBand {
  code: string;
  point: number | null;
  /** human label of the marks range, e.g. "91–100" */
  range: string;
}

// CBSE grading table (per subject), used for the displayed grade band.
const BANDS: GradeBand[] = [
  { code: "A1", point: 10, range: "91–100" },
  { code: "A2", point: 9, range: "81–90" },
  { code: "B1", point: 8, range: "71–80" },
  { code: "B2", point: 7, range: "61–70" },
  { code: "C1", point: 6, range: "51–60" },
  { code: "C2", point: 5, range: "41–50" },
  { code: "D", point: 4, range: "33–40" },
  { code: "E", point: null, range: "Below 33" },
];

export const GRADE_TABLE: ReadonlyArray<GradeBand> = BANDS;

/** Grade band for a percentage (0–100). */
export function gradeForPercentage(pct: number): GradeBand {
  if (pct >= 91) return BANDS[0];
  if (pct >= 81) return BANDS[1];
  if (pct >= 71) return BANDS[2];
  if (pct >= 61) return BANDS[3];
  if (pct >= 51) return BANDS[4];
  if (pct >= 41) return BANDS[5];
  if (pct >= 33) return BANDS[6];
  return BANDS[7];
}

function parseNum(v: string | number): number {
  if (typeof v === "number") return v;
  const t = v.trim();
  if (t === "") return NaN;
  return Number(t);
}

/** CGPA (0–10) → percentage with grade band. */
export function cgpaToPercentage(input: string | number): CgpaResult {
  const cgpa = parseNum(input);
  if (Number.isNaN(cgpa)) {
    return { ok: false, percentage: 0, grade: BANDS[7], error: "Enter a CGPA between 0 and 10." };
  }
  if (cgpa < CGPA_MIN || cgpa > CGPA_MAX) {
    return { ok: false, percentage: 0, grade: BANDS[7], error: "CGPA must be between 0 and 10." };
  }
  const percentage = round1(cgpa * CGPA_MULTIPLIER);
  return { ok: true, percentage, grade: gradeForPercentage(percentage) };
}

/** Percentage (0–100) → CGPA with grade band. */
export function percentageToCgpa(input: string | number): PercentResult {
  const pct = parseNum(input);
  if (Number.isNaN(pct)) {
    return { ok: false, cgpa: 0, grade: BANDS[7], error: "Enter a percentage between 0 and 100." };
  }
  if (pct < 0 || pct > 100) {
    return { ok: false, cgpa: 0, grade: BANDS[7], error: "Percentage must be between 0 and 100." };
  }
  const cgpa = round2(pct / CGPA_MULTIPLIER);
  return { ok: true, cgpa, grade: gradeForPercentage(pct) };
}

/** Used by the static variant pages: stable label for a CGPA value. */
export function cgpaLabel(cgpa: number): string {
  const pct = cgpaToPercentage(cgpa);
  return pct.ok ? `${cgpa.toFixed(1)} CGPA = ${pct.percentage}%` : `${cgpa} CGPA`;
}
