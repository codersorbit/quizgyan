// Safe scientific-expression evaluator. No eval, no Function(). Pipeline:
// tokenize → normalise (implicit ×, unary minus) → shunting-yard (RPN) → evaluate.
// Supports + − × ÷ ^, parentheses, unary minus, factorial (!), percent (%),
// constants π and e, and functions sin cos tan asin acos atan log ln sqrt cbrt abs.

export type Angle = "deg" | "rad";

export type EvalResult = { ok: true; value: number } | { ok: false; error: string };

type Tok =
  | { t: "num"; v: number }
  | { t: "const"; v: "pi" | "e" }
  | { t: "op"; v: "+" | "-" | "*" | "/" | "^" | "u-" }
  | { t: "post"; v: "!" | "%" }
  | { t: "func"; v: string }
  | { t: "lp" }
  | { t: "rp" };

const FUNCS = new Set(["sin", "cos", "tan", "asin", "acos", "atan", "log", "ln", "sqrt", "cbrt", "abs"]);

class CalcError extends Error {}

/* ------------------------------- tokenize ------------------------------- */
function tokenize(src: string): Tok[] {
  const s = src.replace(/×/g, "*").replace(/÷/g, "/").replace(/−/g, "-").replace(/π/g, "pi");
  const toks: Tok[] = [];
  let i = 0;
  while (i < s.length) {
    const c = s[i];
    if (c === " " || c === "\t") {
      i += 1;
      continue;
    }
    if ((c >= "0" && c <= "9") || c === ".") {
      let j = i;
      while (j < s.length && ((s[j] >= "0" && s[j] <= "9") || s[j] === ".")) j += 1;
      const raw = s.slice(i, j);
      const v = Number(raw);
      if (!Number.isFinite(v)) throw new CalcError(`Bad number “${raw}”`);
      toks.push({ t: "num", v });
      i = j;
      continue;
    }
    if (/[a-zA-Z]/.test(c)) {
      let j = i;
      while (j < s.length && /[a-zA-Z]/.test(s[j])) j += 1;
      const name = s.slice(i, j).toLowerCase();
      if (name === "pi" || name === "e") toks.push({ t: "const", v: name });
      else if (FUNCS.has(name)) toks.push({ t: "func", v: name });
      else throw new CalcError(`Unknown name “${name}”`);
      i = j;
      continue;
    }
    if ("+-*/^".includes(c)) {
      toks.push({ t: "op", v: c as "+" | "-" | "*" | "/" | "^" });
      i += 1;
      continue;
    }
    if (c === "!" || c === "%") {
      toks.push({ t: "post", v: c });
      i += 1;
      continue;
    }
    if (c === "(") {
      toks.push({ t: "lp" });
      i += 1;
      continue;
    }
    if (c === ")") {
      toks.push({ t: "rp" });
      i += 1;
      continue;
    }
    throw new CalcError(`Unexpected character “${c}”`);
  }
  return toks;
}

/* ----------------- normalise: unary minus + implicit × ----------------- */
function normalise(toks: Tok[]): Tok[] {
  const out: Tok[] = [];
  for (let k = 0; k < toks.length; k += 1) {
    const tok = toks[k];
    const prev = out[out.length - 1];
    const prevIsValue = prev && (prev.t === "num" || prev.t === "const" || prev.t === "rp" || prev.t === "post");

    // implicit multiplication: value followed by value/lparen/func
    if (prevIsValue && (tok.t === "num" || tok.t === "const" || tok.t === "lp" || tok.t === "func")) {
      out.push({ t: "op", v: "*" });
    }

    if (tok.t === "op" && (tok.v === "-" || tok.v === "+")) {
      const unary = !prevIsValue; // start, or after op/lparen/func
      if (unary) {
        if (tok.v === "-") out.push({ t: "op", v: "u-" });
        // unary plus: drop
        continue;
      }
    }
    out.push(tok);
  }
  return out;
}

/* --------------------------- shunting-yard ------------------------------ */
const PREC: Record<string, number> = { "+": 2, "-": 2, "*": 3, "/": 3, "u-": 4, "^": 5 };
const RIGHT = new Set(["^", "u-"]);

function toRpn(toks: Tok[]): Tok[] {
  const out: Tok[] = [];
  const stack: Tok[] = [];
  for (const tok of toks) {
    if (tok.t === "num" || tok.t === "const") {
      out.push(tok);
    } else if (tok.t === "post") {
      out.push(tok); // postfix applies to the operand already emitted
    } else if (tok.t === "func") {
      stack.push(tok);
    } else if (tok.t === "op") {
      while (stack.length) {
        const top = stack[stack.length - 1];
        if (top.t === "func") {
          out.push(stack.pop()!);
          continue;
        }
        if (top.t === "op") {
          const higher = PREC[top.v] > PREC[tok.v];
          const equalLeft = PREC[top.v] === PREC[tok.v] && !RIGHT.has(tok.v);
          if (higher || equalLeft) {
            out.push(stack.pop()!);
            continue;
          }
        }
        break;
      }
      stack.push(tok);
    } else if (tok.t === "lp") {
      stack.push(tok);
    } else if (tok.t === "rp") {
      let found = false;
      while (stack.length) {
        const top = stack.pop()!;
        if (top.t === "lp") {
          found = true;
          break;
        }
        out.push(top);
      }
      if (!found) throw new CalcError("Mismatched parentheses");
      if (stack.length && stack[stack.length - 1].t === "func") out.push(stack.pop()!);
    }
  }
  while (stack.length) {
    const top = stack.pop()!;
    if (top.t === "lp") throw new CalcError("Mismatched parentheses");
    out.push(top);
  }
  return out;
}

/* ------------------------------ evaluate -------------------------------- */
function factorial(n: number): number {
  if (n < 0 || !Number.isInteger(n)) throw new CalcError("Factorial needs a whole number ≥ 0");
  if (n > 170) throw new CalcError("Number too large");
  let r = 1;
  for (let k = 2; k <= n; k += 1) r *= k;
  return r;
}

function applyFunc(name: string, x: number, angle: Angle): number {
  const toRad = (d: number) => (angle === "deg" ? (d * Math.PI) / 180 : d);
  const fromRad = (r: number) => (angle === "deg" ? (r * 180) / Math.PI : r);
  switch (name) {
    case "sin": return Math.sin(toRad(x));
    case "cos": return Math.cos(toRad(x));
    case "tan": return Math.tan(toRad(x));
    case "asin":
      if (x < -1 || x > 1) throw new CalcError("asin needs a value between −1 and 1");
      return fromRad(Math.asin(x));
    case "acos":
      if (x < -1 || x > 1) throw new CalcError("acos needs a value between −1 and 1");
      return fromRad(Math.acos(x));
    case "atan": return fromRad(Math.atan(x));
    case "log":
      if (x <= 0) throw new CalcError("log needs a value greater than 0");
      return Math.log10(x);
    case "ln":
      if (x <= 0) throw new CalcError("ln needs a value greater than 0");
      return Math.log(x);
    case "sqrt":
      if (x < 0) throw new CalcError("Cannot take the square root of a negative number");
      return Math.sqrt(x);
    case "cbrt": return Math.cbrt(x);
    case "abs": return Math.abs(x);
    default: throw new CalcError(`Unknown function “${name}”`);
  }
}

function evalRpn(rpn: Tok[], angle: Angle): number {
  const st: number[] = [];
  const pop = (): number => {
    if (!st.length) throw new CalcError("Malformed expression");
    return st.pop()!;
  };
  for (const tok of rpn) {
    if (tok.t === "num") st.push(tok.v);
    else if (tok.t === "const") st.push(tok.v === "pi" ? Math.PI : Math.E);
    else if (tok.t === "func") st.push(applyFunc(tok.v, pop(), angle));
    else if (tok.t === "post") {
      const a = pop();
      st.push(tok.v === "!" ? factorial(a) : a / 100);
    } else if (tok.t === "op") {
      if (tok.v === "u-") {
        st.push(-pop());
        continue;
      }
      const b = pop();
      const a = pop();
      switch (tok.v) {
        case "+": st.push(a + b); break;
        case "-": st.push(a - b); break;
        case "*": st.push(a * b); break;
        case "/":
          if (b === 0) throw new CalcError("Cannot divide by zero");
          st.push(a / b);
          break;
        case "^": {
          const r = Math.pow(a, b);
          if (Number.isNaN(r)) throw new CalcError("Not a real number");
          st.push(r);
          break;
        }
      }
    }
  }
  if (st.length !== 1) throw new CalcError("Malformed expression");
  return st[0];
}

export function evaluate(expr: string, opts: { angle?: Angle } = {}): EvalResult {
  const angle: Angle = opts.angle ?? "rad";
  try {
    if (!expr.trim()) return { ok: false, error: "Empty expression" };
    const rpn = toRpn(normalise(tokenize(expr)));
    const value = evalRpn(rpn, angle);
    if (!Number.isFinite(value)) return { ok: false, error: "Result is not a finite number" };
    return { ok: true, value };
  } catch (e) {
    return { ok: false, error: e instanceof CalcError ? e.message : "Invalid expression" };
  }
}

/** Tidy a result: kill 1e-12 float noise, keep integers clean. */
export function formatNumber(value: number): string {
  if (Object.is(value, -0)) return "0";
  if (!Number.isFinite(value)) return "Error";
  const rounded = Number(value.toPrecision(12));
  if (Number.isInteger(rounded) && Math.abs(rounded) < 1e15) return String(rounded);
  return String(rounded);
}
