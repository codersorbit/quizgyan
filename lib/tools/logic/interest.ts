// Pure simple-interest & profit-loss logic. No React, no I/O.

const round2 = (n: number) => Math.round(n * 100) / 100;

function num(v: string | number): number {
  if (typeof v === "number") return v;
  const t = v.trim();
  return t === "" ? NaN : Number(t);
}

/* ------------------------------ Simple interest ------------------------------ */

export interface SIResult {
  ok: boolean;
  principal: number;
  rate: number;
  time: number;
  interest: number;
  amount: number;
  /** which field was solved for */
  solvedFor: "SI" | "P" | "R" | "T" | null;
  steps: string[];
  error?: string;
}

/**
 * SI = P·R·T / 100. Pass exactly three of {p, r, t, si} as numbers and leave
 * the unknown empty ("") — the fourth is solved.
 */
export function simpleInterest(
  pIn: string,
  rIn: string,
  tIn: string,
  siIn: string,
): SIResult {
  const given = { p: pIn.trim() !== "", r: rIn.trim() !== "", t: tIn.trim() !== "", si: siIn.trim() !== "" };
  const count = Object.values(given).filter(Boolean).length;
  const fail = (msg: string): SIResult => ({
    ok: false, principal: 0, rate: 0, time: 0, interest: 0, amount: 0, solvedFor: null, steps: [], error: msg,
  });
  if (count < 3) return fail("Fill in any three values; leave the one you want blank.");

  let P = num(pIn);
  let R = num(rIn);
  let T = num(tIn);
  let SI = num(siIn);
  const steps: string[] = [];
  let solvedFor: SIResult["solvedFor"] = null;

  if (!given.si) {
    if ([P, R, T].some(Number.isNaN)) return fail("Enter valid numbers for principal, rate and time.");
    if (P < 0 || R < 0 || T < 0) return fail("Values cannot be negative.");
    SI = (P * R * T) / 100;
    solvedFor = "SI";
    steps.push(`SI = P × R × T ÷ 100 = ${P} × ${R} × ${T} ÷ 100 = ${round2(SI)}.`);
  } else if (!given.p) {
    if ([SI, R, T].some(Number.isNaN)) return fail("Enter valid numbers for interest, rate and time.");
    if (R === 0 || T === 0) return fail("Rate and time must be greater than 0 to find principal.");
    P = (SI * 100) / (R * T);
    solvedFor = "P";
    steps.push(`P = SI × 100 ÷ (R × T) = ${SI} × 100 ÷ (${R} × ${T}) = ${round2(P)}.`);
  } else if (!given.r) {
    if ([SI, P, T].some(Number.isNaN)) return fail("Enter valid numbers for interest, principal and time.");
    if (P === 0 || T === 0) return fail("Principal and time must be greater than 0 to find rate.");
    R = (SI * 100) / (P * T);
    solvedFor = "R";
    steps.push(`R = SI × 100 ÷ (P × T) = ${SI} × 100 ÷ (${P} × ${T}) = ${round2(R)}% per year.`);
  } else {
    if ([SI, P, R].some(Number.isNaN)) return fail("Enter valid numbers for interest, principal and rate.");
    if (P === 0 || R === 0) return fail("Principal and rate must be greater than 0 to find time.");
    T = (SI * 100) / (P * R);
    solvedFor = "T";
    steps.push(`T = SI × 100 ÷ (P × R) = ${SI} × 100 ÷ (${P} × ${R}) = ${round2(T)} years.`);
  }

  const interest = round2(SI);
  const principal = round2(P);
  const amount = round2(principal + interest);
  steps.push(`Total amount = principal + interest = ${principal} + ${interest} = ${amount}.`);

  return { ok: true, principal, rate: round2(R), time: round2(T), interest, amount, solvedFor, steps };
}

/* ------------------------------ Profit / loss ------------------------------ */

export interface PLResult {
  ok: boolean;
  cp: number;
  sp: number;
  /** positive = profit, negative = loss */
  amount: number;
  percent: number;
  kind: "profit" | "loss" | "none";
  steps: string[];
  error?: string;
}

export function profitLoss(cpIn: string, spIn: string): PLResult {
  const cp = num(cpIn);
  const sp = num(spIn);
  if (Number.isNaN(cp) || Number.isNaN(sp)) {
    return { ok: false, cp: 0, sp: 0, amount: 0, percent: 0, kind: "none", steps: [], error: "Enter cost price and selling price." };
  }
  if (cp <= 0) {
    return { ok: false, cp: 0, sp: 0, amount: 0, percent: 0, kind: "none", steps: [], error: "Cost price must be greater than 0." };
  }
  if (sp < 0) {
    return { ok: false, cp: 0, sp: 0, amount: 0, percent: 0, kind: "none", steps: [], error: "Selling price cannot be negative." };
  }
  const diff = sp - cp;
  const kind = diff > 0 ? "profit" : diff < 0 ? "loss" : "none";
  const amount = round2(Math.abs(diff));
  const percent = round2((Math.abs(diff) / cp) * 100);
  const steps: string[] = [];
  if (kind === "none") {
    steps.push(`Selling price equals cost price, so there is no profit or loss.`);
  } else {
    steps.push(`${kind === "profit" ? "Profit" : "Loss"} = |SP − CP| = |${sp} − ${cp}| = ${amount}.`);
    steps.push(`${kind === "profit" ? "Profit" : "Loss"}% = (${amount} ÷ ${cp}) × 100 = ${percent}%.`);
  }
  return { ok: true, cp: round2(cp), sp: round2(sp), amount, percent, kind, steps };
}
