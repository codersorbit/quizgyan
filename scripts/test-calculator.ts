// Run with: npx tsx scripts/test-calculator.ts
import { evaluate, formatNumber, type Angle } from "../lib/tools/logic/calculator";

let failed = 0;
function val(expr: string, angle: Angle = "rad"): number | string {
  const r = evaluate(expr, { angle });
  return r.ok ? r.value : `ERR:${r.error}`;
}
function approx(label: string, expr: string, want: number, angle: Angle = "rad") {
  const r = evaluate(expr, { angle });
  const ok = r.ok && Math.abs(r.value - want) < 1e-9;
  if (!ok) {
    failed += 1;
    console.error(`✗ ${label}: ${expr} → ${r.ok ? r.value : r.error}, want ${want}`);
  } else console.log(`✓ ${label}`);
}
function isErr(label: string, expr: string, angle: Angle = "rad") {
  const r = evaluate(expr, { angle });
  if (r.ok) {
    failed += 1;
    console.error(`✗ ${label}: expected error, got ${r.value}`);
  } else console.log(`✓ ${label} (${r.error})`);
}

// precedence + associativity
approx("add/mul precedence", "2+3*4", 14);
approx("parentheses", "(2+3)*4", 20);
approx("power right-assoc", "2^3^2", 512);
approx("unary minus vs power", "-3^2", -9);
approx("paren negative power", "(-3)^2", 9);
approx("left-assoc division", "10/2/5", 1);
approx("unary minus mult", "-2*3", -6);
approx("nested", "2*(3+(4-1)*2)", 18);

// functions
approx("sqrt", "sqrt(16)", 4);
approx("cbrt", "cbrt(27)", 3);
approx("log10", "log(1000)", 3);
approx("ln e", "ln(e)", 1);
approx("abs", "abs(-7)", 7);

// trig deg/rad
approx("sin 30 deg", "sin(30)", 0.5, "deg");
approx("cos 0", "cos(0)", 1, "deg");
approx("asin 1 deg", "asin(1)", 90, "deg");
approx("sin pi/6 rad", "sin(pi/6)", 0.5, "rad");

// factorial, percent, constants, implicit mult
approx("factorial", "5!", 120);
approx("factorial in expr", "2+3!", 8);
approx("power then factorial", "2^3!", 64);
approx("percent", "50%", 0.5);
approx("percent expr", "50%*200", 100);
approx("implicit const", "2pi", 2 * Math.PI);
approx("implicit paren", "2(3+4)", 14);
approx("implicit paren-paren", "(2)(3)", 6);

// formatting
if (formatNumber(0.1 + 0.2) !== "0.3") { failed += 1; console.error(`✗ format 0.1+0.2 → ${formatNumber(0.1 + 0.2)}`); } else console.log("✓ format float noise");
if (formatNumber(-0) !== "0") { failed += 1; console.error("✗ format -0"); } else console.log("✓ format -0");

// errors
isErr("divide by zero", "1/0");
isErr("sqrt negative", "sqrt(-1)");
isErr("log zero", "log(0)");
isErr("asin domain", "asin(2)", "deg");
isErr("mismatched paren", "(2+3");
isErr("mismatched paren 2", "2+3)");
isErr("empty", "");
isErr("unknown name", "foo(2)");
isErr("negative factorial", "(-1)!");
isErr("bad number", "1.2.3");

console.log(`\nspot: 2+3*4 = ${val("2+3*4")}, sin(30deg) = ${val("sin(30)", "deg")}`);
if (failed) {
  console.error(`\n${failed} failed.`);
  process.exit(1);
}
console.log("\nAll calculator assertions passed.");
