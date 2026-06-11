"use client";

import { useRef, useState } from "react";
import { useLang, LangToggle, tri } from "@/components/tools/islands/_shared";
import { evaluate, formatNumber, type Angle } from "@/lib/tools/logic/calculator";

interface HistItem {
  expr: string;
  result: string;
}

export default function CalculatorIsland() {
  const [lang, setLang] = useLang();
  const [expr, setExpr] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [angle, setAngle] = useState<Angle>("deg");
  const [memory, setMemory] = useState(0);
  const [history, setHistory] = useState<HistItem[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  function insert(token: string) {
    setExpr((e) => e + token);
    setError(null);
    inputRef.current?.focus();
  }
  function backspace() {
    setExpr((e) => e.slice(0, -1));
    setError(null);
  }
  function clearAll() {
    setExpr("");
    setResult(null);
    setError(null);
  }
  function equals() {
    if (!expr.trim()) return;
    const r = evaluate(expr, { angle });
    if (r.ok) {
      const out = formatNumber(r.value);
      setResult(out);
      setError(null);
      setHistory((h) => [{ expr, result: out }, ...h].slice(0, 12));
    } else {
      setResult(null);
      setError(r.error);
    }
  }
  function currentValue(): number | null {
    const r = evaluate(expr, { angle });
    if (r.ok) return r.value;
    if (result !== null && Number.isFinite(Number(result))) return Number(result);
    return null;
  }
  function memAdd(sign: 1 | -1) {
    const v = currentValue();
    if (v !== null) setMemory((m) => m + sign * v);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      equals();
    } else if (e.key === "Escape") {
      e.preventDefault();
      clearAll();
    }
  }

  const Btn = ({
    label,
    onClick,
    kind = "default",
    aria,
  }: {
    label: React.ReactNode;
    onClick: () => void;
    kind?: "default" | "op" | "fn" | "primary" | "warn";
    aria?: string;
  }) => {
    const base = "rounded-xl py-3 text-center font-semibold transition select-none active:scale-95";
    const styles: Record<string, string> = {
      default: "bg-white border border-line text-ink hover:border-cobalt",
      op: "bg-cobalt-soft text-cobalt hover:bg-cobalt/15",
      fn: "bg-white border border-line text-muted text-sm hover:border-cobalt hover:text-cobalt",
      primary: "bg-cobalt text-white hover:brightness-110",
      warn: "bg-coral/10 text-coral border border-coral/30 hover:bg-coral/15",
    };
    return (
      <button type="button" onClick={onClick} aria-label={aria} className={`${base} ${styles[kind]}`}>
        {label}
      </button>
    );
  };

  return (
    <div className="space-y-4">
      <div className="no-print flex items-center justify-between gap-3">
        <div className="inline-flex rounded-full border border-line bg-cream p-0.5" role="group" aria-label={tri(lang, "Angle unit", "कोण इकाई", "কোণের একক")}>
          <button type="button" aria-pressed={angle === "deg"} onClick={() => setAngle("deg")} className={`rounded-full px-3 py-1.5 text-sm font-semibold transition ${angle === "deg" ? "bg-cobalt text-white" : "text-muted hover:text-cobalt"}`}>{tri(lang, "Degrees", "डिग्री", "ডিগ্রি")}</button>
          <button type="button" aria-pressed={angle === "rad"} onClick={() => setAngle("rad")} className={`rounded-full px-3 py-1.5 text-sm font-semibold transition ${angle === "rad" ? "bg-cobalt text-white" : "text-muted hover:text-cobalt"}`}>{tri(lang, "Radians", "रेडियन", "রেডিয়ান")}</button>
        </div>
        <LangToggle lang={lang} onChange={setLang} />
      </div>

      {/* Display */}
      <div className="rounded-2xl border border-line bg-card p-3">
        <label htmlFor="calc-input" className="sr-only">{tri(lang, "Expression", "व्यंजक", "রাশি")}</label>
        <input
          id="calc-input"
          ref={inputRef}
          value={expr}
          onChange={(e) => { setExpr(e.target.value); setError(null); }}
          onKeyDown={onKeyDown}
          inputMode="text"
          autoComplete="off"
          spellCheck={false}
          placeholder="2 + 3 × 4"
          className="w-full bg-transparent text-right font-display text-2xl text-ink outline-none tabular-nums"
        />
        <div aria-live="polite" className="mt-1 text-right text-lg font-bold tabular-nums">
          {error ? (
            <span className="text-coral">{error}</span>
          ) : result !== null ? (
            <span className="text-cobalt">= {result}</span>
          ) : (
            <span className="text-muted/50">{memory !== 0 ? `M = ${formatNumber(memory)}` : "\u00a0"}</span>
          )}
        </div>
      </div>

      {/* Memory row */}
      <div className="no-print grid grid-cols-4 gap-2">
        <Btn kind="fn" label="MC" aria="Memory clear" onClick={() => setMemory(0)} />
        <Btn kind="fn" label="MR" aria="Memory recall" onClick={() => insert(formatNumber(memory))} />
        <Btn kind="fn" label="M+" aria="Memory add" onClick={() => memAdd(1)} />
        <Btn kind="fn" label="M−" aria="Memory subtract" onClick={() => memAdd(-1)} />
      </div>

      {/* Scientific functions */}
      <div className="no-print grid grid-cols-5 gap-2">
        <Btn kind="fn" label="sin" onClick={() => insert("sin(")} />
        <Btn kind="fn" label="cos" onClick={() => insert("cos(")} />
        <Btn kind="fn" label="tan" onClick={() => insert("tan(")} />
        <Btn kind="fn" label="π" onClick={() => insert("π")} />
        <Btn kind="fn" label="e" onClick={() => insert("e")} />
        <Btn kind="fn" label="sin⁻¹" aria="arcsine" onClick={() => insert("asin(")} />
        <Btn kind="fn" label="cos⁻¹" aria="arccosine" onClick={() => insert("acos(")} />
        <Btn kind="fn" label="tan⁻¹" aria="arctangent" onClick={() => insert("atan(")} />
        <Btn kind="fn" label="xʸ" aria="power" onClick={() => insert("^")} />
        <Btn kind="fn" label="√" aria="square root" onClick={() => insert("sqrt(")} />
        <Btn kind="fn" label="ln" onClick={() => insert("ln(")} />
        <Btn kind="fn" label="log" onClick={() => insert("log(")} />
        <Btn kind="fn" label="∛" aria="cube root" onClick={() => insert("cbrt(")} />
        <Btn kind="fn" label="n!" aria="factorial" onClick={() => insert("!")} />
        <Btn kind="fn" label="%" onClick={() => insert("%")} />
      </div>

      {/* Main keypad */}
      <div className="no-print grid grid-cols-4 gap-2 text-lg">
        <Btn kind="op" label="(" onClick={() => insert("(")} />
        <Btn kind="op" label=")" onClick={() => insert(")")} />
        <Btn kind="warn" label="⌫" aria={tri(lang, "Backspace", "बैकस्पेस", "ব্যাকস্পেস")} onClick={backspace} />
        <Btn kind="warn" label="C" aria={tri(lang, "Clear", "साफ़ करें", "মুছে ফেলো")} onClick={clearAll} />

        <Btn label="7" onClick={() => insert("7")} />
        <Btn label="8" onClick={() => insert("8")} />
        <Btn label="9" onClick={() => insert("9")} />
        <Btn kind="op" label="÷" onClick={() => insert("÷")} />

        <Btn label="4" onClick={() => insert("4")} />
        <Btn label="5" onClick={() => insert("5")} />
        <Btn label="6" onClick={() => insert("6")} />
        <Btn kind="op" label="×" onClick={() => insert("×")} />

        <Btn label="1" onClick={() => insert("1")} />
        <Btn label="2" onClick={() => insert("2")} />
        <Btn label="3" onClick={() => insert("3")} />
        <Btn kind="op" label="−" onClick={() => insert("-")} />

        <Btn label="0" onClick={() => insert("0")} />
        <Btn label="." onClick={() => insert(".")} />
        <Btn kind="primary" label="=" aria={tri(lang, "Equals", "बराबर", "সমান")} onClick={equals} />
        <Btn kind="op" label="+" onClick={() => insert("+")} />
      </div>

      {/* History */}
      {history.length > 0 && (
        <div className="no-print">
          <div className="mb-1 flex items-center justify-between">
            <span className="text-sm font-semibold text-ink">{tri(lang, "History", "इतिहास", "ইতিহাস")}</span>
            <button type="button" onClick={() => setHistory([])} className="text-xs font-semibold text-muted hover:text-coral">
              {tri(lang, "Clear", "साफ़ करें", "মুছে ফেলো")}
            </button>
          </div>
          <ul className="space-y-1 text-sm">
            {history.map((h, i) => (
              <li key={i}>
                <button
                  type="button"
                  onClick={() => { setExpr(h.expr); setResult(h.result); setError(null); }}
                  className="w-full rounded-lg border border-line bg-white px-3 py-1.5 text-right tabular-nums hover:border-cobalt"
                >
                  <span className="text-muted">{h.expr} = </span>
                  <span className="font-bold text-ink">{h.result}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
