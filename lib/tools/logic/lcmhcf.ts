// Pure LCM & HCF logic with method breakdowns. No React, no I/O.

import { gcd } from "./fraction";

export interface PrimeFactor {
  prime: number;
  power: number;
}

export interface LcmHcfResult {
  ok: boolean;
  numbers: number[];
  hcf: number;
  lcm: number;
  /** prime factorization per input number */
  factors: { n: number; factors: PrimeFactor[] }[];
  /** division-method rows: each row is [divisor, ...quotients] */
  divisionRows: number[][];
  error?: string;
}

/** Prime factorization as [{prime, power}]. */
export function primeFactorize(n: number): PrimeFactor[] {
  const out: PrimeFactor[] = [];
  let x = Math.abs(n);
  if (x < 2) return out;
  for (let p = 2; p * p <= x; p++) {
    if (x % p === 0) {
      let power = 0;
      while (x % p === 0) {
        x /= p;
        power++;
      }
      out.push({ prime: p, power });
    }
  }
  if (x > 1) out.push({ prime: x, power: 1 });
  return out;
}

function hcfOf(nums: number[]): number {
  return nums.reduce((a, b) => gcd(a, b));
}

function lcmPair(a: number, b: number): number {
  return Math.abs((a / gcd(a, b)) * b);
}

function lcmOf(nums: number[]): number {
  return nums.reduce((a, b) => lcmPair(a, b));
}

/**
 * Division (ladder) method rows for the LCM: repeatedly divide by a prime that
 * divides at least one number. Each row = [divisor, q1, q2, ...].
 */
function divisionLadder(nums: number[]): number[][] {
  let cur = [...nums];
  const rows: number[][] = [];
  let guard = 0;
  while (cur.some((n) => n > 1) && guard < 1000) {
    guard++;
    // smallest prime dividing any value
    let p = 2;
    while (p <= Math.max(...cur)) {
      if (cur.some((n) => n % p === 0)) break;
      p++;
    }
    if (p > Math.max(...cur)) break;
    rows.push([p, ...cur.map((n) => (n % p === 0 ? n / p : n))]);
    cur = cur.map((n) => (n % p === 0 ? n / p : n));
  }
  return rows;
}

export function lcmHcf(input: number[]): LcmHcfResult {
  const numbers = input.filter((n) => Number.isFinite(n));
  if (numbers.length < 2) {
    return { ok: false, numbers: [], hcf: 0, lcm: 0, factors: [], divisionRows: [], error: "Enter at least two numbers." };
  }
  if (numbers.some((n) => !Number.isInteger(n) || n < 1)) {
    return { ok: false, numbers: [], hcf: 0, lcm: 0, factors: [], divisionRows: [], error: "Use whole numbers of 1 or more." };
  }
  if (numbers.some((n) => n > 1_000_000)) {
    return { ok: false, numbers: [], hcf: 0, lcm: 0, factors: [], divisionRows: [], error: "Keep numbers below 1,000,000." };
  }
  return {
    ok: true,
    numbers,
    hcf: hcfOf(numbers),
    lcm: lcmOf(numbers),
    factors: numbers.map((n) => ({ n, factors: primeFactorize(n) })),
    divisionRows: divisionLadder(numbers),
  };
}

/** Render a factor list like "2² × 3 × 5". */
export function factorString(factors: PrimeFactor[]): string {
  if (factors.length === 0) return "1";
  const sup = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"];
  return factors
    .map((f) => (f.power === 1 ? `${f.prime}` : `${f.prime}${String(f.power).split("").map((d) => sup[+d]).join("")}`))
    .join(" × ");
}
