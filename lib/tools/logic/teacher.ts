// Pure logic for grade calculator, class result, and question-paper planner.

import { gradeForPercentage, type GradeBand, GRADE_TABLE, CGPA_MULTIPLIER } from "./cgpa";

export { GRADE_TABLE };

/* ------------------------------ Grade calc ------------------------------ */

export interface GradeOut {
  ok: boolean;
  percent: number;
  grade: GradeBand;
  error?: string;
}

function num(v: string | number): number {
  if (typeof v === "number") return v;
  const t = v.trim();
  return t === "" ? NaN : Number(t);
}

/** Grade from marks (obtained/total) or directly from a percentage. */
export function gradeFromMarks(obtainedIn: string, totalIn: string): GradeOut {
  const o = num(obtainedIn);
  const t = num(totalIn);
  if (Number.isNaN(o) || Number.isNaN(t)) return { ok: false, percent: 0, grade: GRADE_TABLE[7], error: "Enter obtained and total marks." };
  if (t <= 0) return { ok: false, percent: 0, grade: GRADE_TABLE[7], error: "Total must be greater than 0." };
  if (o < 0 || o > t) return { ok: false, percent: 0, grade: GRADE_TABLE[7], error: "Obtained must be between 0 and total." };
  const percent = Math.round((o / t) * 10000) / 100;
  return { ok: true, percent, grade: gradeForPercentage(percent) };
}

export function gradeFromPercent(pctIn: string): GradeOut {
  const p = num(pctIn);
  if (Number.isNaN(p)) return { ok: false, percent: 0, grade: GRADE_TABLE[7], error: "Enter a percentage." };
  if (p < 0 || p > 100) return { ok: false, percent: 0, grade: GRADE_TABLE[7], error: "Percentage must be 0–100." };
  return { ok: true, percent: p, grade: gradeForPercentage(p) };
}

export interface SubjectGrade {
  name: string;
  percent: number;
  grade: GradeBand;
}

export interface GradeMultiOut {
  ok: boolean;
  rows: SubjectGrade[];
  /** CGPA from the mean of grade points (E counts as 0) */
  cgpa: number;
  overallPercent: number;
  error?: string;
}

/** Subject-wise grade points → overall CGPA (mean of points). */
export function multiGrade(rows: { name: string; obtained: string; max: string }[]): GradeMultiOut {
  const parsed: SubjectGrade[] = [];
  for (const r of rows) {
    if (r.obtained.trim() === "" && r.max.trim() === "") continue;
    const g = gradeFromMarks(r.obtained, r.max);
    if (!g.ok) return { ok: false, rows: [], cgpa: 0, overallPercent: 0, error: g.error };
    parsed.push({ name: r.name || "Subject", percent: g.percent, grade: g.grade });
  }
  if (parsed.length === 0) return { ok: false, rows: [], cgpa: 0, overallPercent: 0, error: "Add at least one subject." };
  const points = parsed.map((p) => p.grade.point ?? 0);
  const cgpa = Math.round((points.reduce((s, n) => s + n, 0) / points.length) * 100) / 100;
  const overallPercent = Math.round(cgpa * CGPA_MULTIPLIER * 100) / 100;
  return { ok: true, rows: parsed, cgpa, overallPercent };
}

/* ----------------------------- Class result ----------------------------- */

export interface StudentRow {
  name: string;
  marks: number;
  percent: number;
  grade: string;
  pass: boolean;
}

export interface ClassResult {
  ok: boolean;
  total: number;
  students: StudentRow[];
  average: number;
  highest?: StudentRow;
  lowest?: StudentRow;
  passCount: number;
  failCount: number;
  distribution: { code: string; count: number }[];
  error?: string;
}

/**
 * Parse forgiving "Name, Marks" lines (comma/tab/multi-space separated).
 * `maxMarks` converts marks to a percentage; `passMark` is a percentage.
 */
export function classResult(raw: string, maxMarks: number, passMark = 33): ClassResult {
  const lines = raw.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  if (lines.length === 0) return { ok: false, total: 0, students: [], average: 0, passCount: 0, failCount: 0, distribution: [], error: "Paste at least one 'Name, Marks' line." };
  if (!(maxMarks > 0)) return { ok: false, total: 0, students: [], average: 0, passCount: 0, failCount: 0, distribution: [], error: "Set the maximum marks (greater than 0)." };

  const students: StudentRow[] = [];
  for (const line of lines) {
    const m = line.match(/^(.*?)[,\t]\s*(-?\d+(?:\.\d+)?)\s*$/) || line.match(/^(.*\S)\s+(-?\d+(?:\.\d+)?)\s*$/);
    if (!m) continue;
    const name = m[1].trim() || "Student";
    const marks = Number(m[2]);
    if (Number.isNaN(marks) || marks < 0 || marks > maxMarks) continue;
    const percent = Math.round((marks / maxMarks) * 10000) / 100;
    const band = gradeForPercentage(percent);
    students.push({ name, marks, percent, grade: band.code, pass: percent >= passMark });
  }
  if (students.length === 0) return { ok: false, total: 0, students: [], average: 0, passCount: 0, failCount: 0, distribution: [], error: "Couldn't read any valid rows. Use 'Name, Marks' per line." };

  const avg = Math.round((students.reduce((s, r) => s + r.percent, 0) / students.length) * 100) / 100;
  const sorted = [...students].sort((a, b) => b.marks - a.marks);
  const passCount = students.filter((s) => s.pass).length;
  const distribution = GRADE_TABLE.map((g) => ({ code: g.code, count: students.filter((s) => s.grade === g.code).length }));

  return {
    ok: true,
    total: students.length,
    students,
    average: avg,
    highest: sorted[0],
    lowest: sorted[sorted.length - 1],
    passCount,
    failCount: students.length - passCount,
    distribution,
  };
}

export function resultCsv(r: ClassResult): string {
  const head = "Name,Marks,Percentage,Grade,Result";
  const rows = r.students.map((s) => `${csv(s.name)},${s.marks},${s.percent},${s.grade},${s.pass ? "Pass" : "Fail"}`);
  return [head, ...rows].join("\n");
}
function csv(s: string): string {
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

/* -------------------------- Question paper plan -------------------------- */

export interface PaperSection {
  name: string;
  count: number;
  marksEach: number;
}

export interface PaperPlan {
  ok: boolean;
  sectionTotal: number;
  paperTotal: number;
  matches: boolean;
  difference: number;
  /** suggested minutes per section, proportional to marks */
  sectionMinutes: { name: string; marks: number; minutes: number }[];
  minutesPerMark: number;
  error?: string;
}

export function paperPlan(sections: PaperSection[], totalMarks: number, durationMin: number): PaperPlan {
  const clean = sections.filter((s) => s.count > 0 && s.marksEach > 0);
  if (!(totalMarks > 0)) return { ok: false, sectionTotal: 0, paperTotal: 0, matches: false, difference: 0, sectionMinutes: [], minutesPerMark: 0, error: "Set the paper's total marks." };
  if (clean.length === 0) return { ok: false, sectionTotal: 0, paperTotal: totalMarks, matches: false, difference: totalMarks, sectionMinutes: [], minutesPerMark: 0, error: "Add at least one section." };

  const sectionTotal = clean.reduce((s, x) => s + x.count * x.marksEach, 0);
  const minutesPerMark = durationMin > 0 ? Math.round((durationMin / totalMarks) * 100) / 100 : 0;
  const sectionMinutes = clean.map((s) => {
    const marks = s.count * s.marksEach;
    return { name: s.name || "Section", marks, minutes: Math.round(minutesPerMark * marks) };
  });

  return {
    ok: true,
    sectionTotal,
    paperTotal: totalMarks,
    matches: sectionTotal === totalMarks,
    difference: sectionTotal - totalMarks,
    sectionMinutes,
    minutesPerMark,
  };
}
