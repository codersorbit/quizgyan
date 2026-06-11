// Pure table generation — single table, square chart grid, and a booklet range.
// No DOM; trivially testable.

export interface TableRow {
  a: number;
  b: number;
  product: number;
}

export function clampInt(n: number, min: number, max: number): number {
  if (!Number.isFinite(n)) return min;
  return Math.max(min, Math.min(max, Math.trunc(n)));
}

/** Table of `n` from n×1 to n×upTo (upTo clamped to 1..30). */
export function singleTable(n: number, upTo: number): TableRow[] {
  const u = clampInt(upTo, 1, 30);
  const rows: TableRow[] = [];
  for (let b = 1; b <= u; b += 1) rows.push({ a: n, b, product: n * b });
  return rows;
}

/** A rows×cols grid of products (1..rows down, 1..cols across). */
export function chartGrid(rows: number, cols: number): number[][] {
  const r = clampInt(rows, 1, 30);
  const c = clampInt(cols, 1, 30);
  const grid: number[][] = [];
  for (let i = 1; i <= r; i += 1) {
    const row: number[] = [];
    for (let j = 1; j <= c; j += 1) row.push(i * j);
    grid.push(row);
  }
  return grid;
}

/** Tables from `from` to `to` (order-tolerant), each up to `upTo`. Capped at 30 tables. */
export function booklet(from: number, to: number, upTo: number): { n: number; rows: TableRow[] }[] {
  let a = clampInt(from, 1, 999);
  let b = clampInt(to, 1, 999);
  if (a > b) [a, b] = [b, a];
  if (b - a > 29) b = a + 29; // keep the printable sane
  const out: { n: number; rows: TableRow[] }[] = [];
  for (let n = a; n <= b; n += 1) out.push({ n, rows: singleTable(n, upTo) });
  return out;
}
