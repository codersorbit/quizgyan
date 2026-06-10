// Pure fraction arithmetic with working steps. No React, no I/O.

export type Op = "add" | "sub" | "mul" | "div";

export interface Frac {
  /** whole part (for mixed numbers); may be 0 */
  whole: number;
  num: number;
  den: number;
}

export interface FractionResult {
  ok: boolean;
  /** simplified improper result */
  num: number;
  den: number;
  /** mixed-number view */
  mixed: { whole: number; num: number; den: number };
  decimal: number;
  steps: string[];
  error?: string;
}

export function gcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    [a, b] = [b, a % b];
  }
  return a || 1;
}

export function lcm(a: number, b: number): number {
  if (a === 0 || b === 0) return 0;
  return Math.abs(a / gcd(a, b) * b);
}

/** Convert a (possibly mixed) fraction to an improper numerator/denominator. */
function toImproper(f: Frac): { n: number; d: number } | null {
  if (!Number.isInteger(f.num) || !Number.isInteger(f.den) || !Number.isInteger(f.whole)) return null;
  if (f.den === 0) return null;
  const sign = f.den < 0 ? -1 : 1;
  const den = Math.abs(f.den);
  // whole keeps its own sign; combine with fractional part
  const wholeSign = f.whole < 0 ? -1 : 1;
  const n = wholeSign * (Math.abs(f.whole) * den + Math.abs(f.num)) * sign;
  return { n, d: den };
}

function simplify(n: number, d: number) {
  if (d === 0) return { n, d };
  const sign = d < 0 ? -1 : 1;
  n *= sign;
  d *= sign;
  const g = gcd(n, d);
  return { n: n / g, d: d / g };
}

function mixedView(n: number, d: number) {
  const sign = n < 0 ? -1 : 1;
  const an = Math.abs(n);
  const whole = Math.floor(an / d);
  const rem = an - whole * d;
  return { whole: sign * whole, num: rem, den: d };
}

/** Add / subtract / multiply / divide two fractions, showing the steps. */
export function computeFraction(a: Frac, b: Frac, op: Op): FractionResult {
  const A = toImproper(a);
  const B = toImproper(b);
  const fail = (msg: string): FractionResult => ({
    ok: false,
    num: 0,
    den: 1,
    mixed: { whole: 0, num: 0, den: 1 },
    decimal: 0,
    steps: [],
    error: msg,
  });
  if (!A || !B) return fail("Enter whole-number parts and a denominator that isn't zero.");
  if (op === "div" && B.n === 0) return fail("Cannot divide by a fraction equal to zero.");

  const steps: string[] = [];
  const fa = `${A.n}/${A.d}`;
  const fb = `${B.n}/${B.d}`;
  steps.push(`Write as improper fractions: ${fa} and ${fb}.`);

  let rn: number;
  let rd: number;
  if (op === "mul") {
    rn = A.n * B.n;
    rd = A.d * B.d;
    steps.push(`Multiply across: (${A.n}×${B.n}) / (${A.d}×${B.d}) = ${rn}/${rd}.`);
  } else if (op === "div") {
    rn = A.n * B.d;
    rd = A.d * B.n;
    steps.push(`Divide = multiply by the reciprocal: ${fa} × ${B.d}/${B.n} = ${rn}/${rd}.`);
  } else {
    const L = lcm(A.d, B.d);
    const an = A.n * (L / A.d);
    const bn = B.n * (L / B.d);
    steps.push(`LCM of ${A.d} and ${B.d} is ${L}.`);
    steps.push(`Rewrite with denominator ${L}: ${an}/${L} and ${bn}/${L}.`);
    rn = op === "add" ? an + bn : an - bn;
    rd = L;
    steps.push(`${op === "add" ? "Add" : "Subtract"} the numerators: ${an}${op === "add" ? "+" : "−"}${bn} = ${rn}, over ${L}.`);
  }

  const s = simplify(rn, rd);
  if (s.n !== rn || s.d !== rd) {
    steps.push(`Simplify by dividing by ${gcd(rn, rd)}: ${s.n}/${s.d}.`);
  } else {
    steps.push(`Already in lowest terms: ${s.n}/${s.d}.`);
  }

  return {
    ok: true,
    num: s.n,
    den: s.d,
    mixed: mixedView(s.n, s.d),
    decimal: Math.round((s.n / s.d) * 10000) / 10000,
    steps,
  };
}

/** Simplify a single fraction, showing the divisor. */
export function simplifyFraction(num: number, den: number): FractionResult {
  if (!Number.isInteger(num) || !Number.isInteger(den) || den === 0) {
    return { ok: false, num: 0, den: 1, mixed: { whole: 0, num: 0, den: 1 }, decimal: 0, steps: [], error: "Enter whole numbers; denominator can't be 0." };
  }
  const g = gcd(num, den);
  const s = simplify(num, den);
  return {
    ok: true,
    num: s.n,
    den: s.d,
    mixed: mixedView(s.n, s.d),
    decimal: Math.round((s.n / s.d) * 10000) / 10000,
    steps: [
      `Find the HCF of ${Math.abs(num)} and ${Math.abs(den)}: ${g}.`,
      `Divide top and bottom by ${g}: ${s.n}/${s.d}.`,
    ],
  };
}
