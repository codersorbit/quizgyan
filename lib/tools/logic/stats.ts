// Pure descriptive-statistics logic. No React, no I/O.

export interface StatsResult {
  ok: boolean;
  values: number[];
  sorted: number[];
  count: number;
  sum: number;
  mean: number;
  median: number;
  /** all modes (empty if every value is unique) */
  modes: number[];
  range: number;
  min: number;
  max: number;
  /** 0-based index/indices of the median in the sorted list */
  medianIndices: number[];
  error?: string;
}

const round4 = (n: number) => Math.round(n * 10000) / 10000;

/** Parse a free-text list: commas, spaces or newlines all work. */
export function parseList(input: string): number[] {
  return input
    .split(/[\s,]+/)
    .map((t) => t.trim())
    .filter((t) => t !== "")
    .map(Number)
    .filter((n) => Number.isFinite(n));
}

export function computeStats(input: string | number[]): StatsResult {
  const values = Array.isArray(input) ? input.filter((n) => Number.isFinite(n)) : parseList(input);
  const empty: StatsResult = {
    ok: false, values: [], sorted: [], count: 0, sum: 0, mean: 0, median: 0,
    modes: [], range: 0, min: 0, max: 0, medianIndices: [], error: "Enter at least one number.",
  };
  if (values.length === 0) return empty;

  const sorted = [...values].sort((a, b) => a - b);
  const count = sorted.length;
  const sum = sorted.reduce((s, n) => s + n, 0);
  const mean = round4(sum / count);

  let median: number;
  let medianIndices: number[];
  const mid = Math.floor(count / 2);
  if (count % 2 === 1) {
    median = sorted[mid];
    medianIndices = [mid];
  } else {
    median = round4((sorted[mid - 1] + sorted[mid]) / 2);
    medianIndices = [mid - 1, mid];
  }

  // modes
  const freq = new Map<number, number>();
  for (const n of sorted) freq.set(n, (freq.get(n) ?? 0) + 1);
  const maxFreq = Math.max(...freq.values());
  const modes = maxFreq <= 1 ? [] : [...freq.entries()].filter(([, f]) => f === maxFreq).map(([n]) => n).sort((a, b) => a - b);

  return {
    ok: true,
    values,
    sorted,
    count,
    sum: round4(sum),
    mean,
    median,
    modes,
    range: round4(sorted[count - 1] - sorted[0]),
    min: sorted[0],
    max: sorted[count - 1],
    medianIndices,
  };
}
