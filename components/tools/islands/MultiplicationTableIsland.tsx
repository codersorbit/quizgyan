"use client";

import { useEffect, useMemo, useState } from "react";
import { useLang, LangToggle, tri } from "@/components/tools/islands/_shared";
import { singleTable, chartGrid, booklet } from "@/lib/tools/logic/multiplicationTable";

type Mode = "single" | "chart" | "booklet";
type Display = "list" | "grid";

/** Subtle ink-light tint that grows with the value (readable on screen & print). */
function tint(value: number, max: number): string {
  const ratio = max > 0 ? value / max : 0;
  const light = 96 - Math.round(ratio * 14); // 96% → 82%
  return `hsl(214 72% ${light}%)`;
}

export default function MultiplicationTableIsland({
  initialN,
  initialMode,
}: {
  initialN?: number;
  initialMode?: Mode;
} = {}) {
  const [lang, setLang] = useLang();
  const [mode, setMode] = useState<Mode>(initialMode ?? "single");
  const [display, setDisplay] = useState<Display>("grid");

  const [n, setN] = useState(initialN ?? 7);
  const [upTo, setUpTo] = useState(10);
  const [chartSize, setChartSize] = useState(10);
  const [from, setFrom] = useState(2);
  const [to, setTo] = useState(20);

  useEffect(() => {
    const clear = () => document.body.removeAttribute("data-print-tool");
    window.addEventListener("afterprint", clear);
    return () => window.removeEventListener("afterprint", clear);
  }, []);

  const table = useMemo(() => singleTable(n, upTo), [n, upTo]);
  const grid = useMemo(() => chartGrid(chartSize, chartSize), [chartSize]);
  const tables = useMemo(() => booklet(from, to, upTo), [from, to, upTo]);

  function print() {
    document.body.setAttribute("data-print-tool", "mtable");
    window.print();
  }

  const ModeBtn = ({ m, children }: { m: Mode; children: React.ReactNode }) => (
    <button type="button" aria-pressed={mode === m} onClick={() => setMode(m)} className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${mode === m ? "bg-cobalt text-white" : "text-muted hover:text-cobalt"}`}>
      {children}
    </button>
  );

  const Num = ({ id, label, value, onChange, min, max }: { id: string; label: string; value: number; onChange: (v: number) => void; min: number; max: number }) => (
    <label htmlFor={id} className="block">
      <span className="mb-1 block text-sm font-semibold text-ink">{label}</span>
      <input id={id} type="number" inputMode="numeric" min={min} max={max} value={value} onChange={(e) => onChange(Number(e.target.value))} className="w-24 rounded-xl border border-line bg-white px-3 py-2 text-ink outline-none focus:ring-2 focus:ring-cobalt" />
    </label>
  );

  return (
    <div className="space-y-4">
      {/* Controls */}
      <div className="no-print space-y-4">
        <div className="flex items-center justify-between gap-3">
          <div className="inline-flex flex-wrap rounded-full border border-line bg-cream p-0.5" role="group" aria-label={tri(lang, "Mode", "मोड", "মোড")}>
            <ModeBtn m="single">{tri(lang, "Single table", "एक पहाड़ा", "একটি নামতা")}</ModeBtn>
            <ModeBtn m="chart">{tri(lang, "Chart", "चार्ट", "চার্ট")}</ModeBtn>
            <ModeBtn m="booklet">{tri(lang, "Booklet", "पुस्तिका", "পুস্তিকা")}</ModeBtn>
          </div>
          <LangToggle lang={lang} onChange={setLang} />
        </div>

        <div className="flex flex-wrap items-end gap-4">
          {mode === "single" && (
            <>
              <Num id="mt-n" label={tri(lang, "Table of", "पहाड़ा", "নামতা")} value={n} onChange={setN} min={1} max={999} />
              <Num id="mt-upto" label={tri(lang, "Up to", "तक", "পর্যন্ত")} value={upTo} onChange={setUpTo} min={1} max={30} />
              <div className="inline-flex rounded-full border border-line bg-cream p-0.5" role="group" aria-label={tri(lang, "Display", "प्रदर्शन", "প্রদর্শন")}>
                <button type="button" aria-pressed={display === "list"} onClick={() => setDisplay("list")} className={`rounded-full px-3 py-1.5 text-sm font-semibold transition ${display === "list" ? "bg-cobalt text-white" : "text-muted hover:text-cobalt"}`}>{tri(lang, "List", "सूची", "তালিকা")}</button>
                <button type="button" aria-pressed={display === "grid"} onClick={() => setDisplay("grid")} className={`rounded-full px-3 py-1.5 text-sm font-semibold transition ${display === "grid" ? "bg-cobalt text-white" : "text-muted hover:text-cobalt"}`}>{tri(lang, "Coloured grid", "रंगीन ग्रिड", "রঙিন গ্রিড")}</button>
              </div>
            </>
          )}
          {mode === "chart" && (
            <label htmlFor="mt-size" className="block">
              <span className="mb-1 block text-sm font-semibold text-ink">{tri(lang, "Chart size", "चार्ट आकार", "চার্টের আকার")}</span>
              <select id="mt-size" value={chartSize} onChange={(e) => setChartSize(Number(e.target.value))} className="rounded-xl border border-line bg-white px-3 py-2 text-ink">
                {[10, 12, 15, 20].map((s) => (<option key={s} value={s}>{s} × {s}</option>))}
              </select>
            </label>
          )}
          {mode === "booklet" && (
            <>
              <Num id="mt-from" label={tri(lang, "From", "से", "থেকে")} value={from} onChange={setFrom} min={1} max={999} />
              <Num id="mt-to" label={tri(lang, "To", "तक", "পর্যন্ত")} value={to} onChange={setTo} min={1} max={999} />
              <Num id="mt-bupto" label={tri(lang, "Up to", "तक", "পর্যন্ত")} value={upTo} onChange={setUpTo} min={1} max={30} />
            </>
          )}
          <button type="button" onClick={print} className="btn-candy cobalt ml-auto">🖨️ {tri(lang, "Print", "प्रिंट", "প্রিন্ট")}</button>
        </div>
      </div>

      {/* Printable output */}
      <div className="mt-print-area">
        {mode === "single" && (
          <section className="mt-table rounded-2xl border border-line bg-white p-5">
            <h2 className="mb-3 font-display text-xl font-bold text-ink">{tri(lang, "Table of", "का पहाड़ा", "-এর নামতা")} {n}</h2>
            {display === "list" ? (
              <ol className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                {table.map((r) => (
                  <li key={r.b} className="rounded-lg px-3 py-1.5 text-lg tabular-nums" style={{ background: tint(r.product, n * upTo) }}>
                    {r.a} × {r.b} = <span className="font-bold text-ink">{r.product}</span>
                  </li>
                ))}
              </ol>
            ) : (
              <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
                {table.map((r) => (
                  <div key={r.b} className="rounded-xl border border-line p-2 text-center" style={{ background: tint(r.product, n * upTo) }}>
                    <div className="text-xs text-muted tabular-nums">{r.a} × {r.b}</div>
                    <div className="font-display text-xl font-bold text-ink tabular-nums">{r.product}</div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {mode === "chart" && (
          <section className="mt-table overflow-x-auto rounded-2xl border border-line bg-white p-3">
            <h2 className="mb-3 font-display text-xl font-bold text-ink">{tri(lang, "Multiplication chart", "गुणन चार्ट", "গুণন চার্ট")} ({chartSize} × {chartSize})</h2>
            <table className="w-full border-collapse text-center text-sm tabular-nums">
              <caption className="sr-only">{tri(lang, "Multiplication chart", "गुणन चार्ट", "গুণন চার্ট")}</caption>
              <thead>
                <tr>
                  <th className="border border-line bg-cobalt/10 p-1.5">×</th>
                  {Array.from({ length: chartSize }, (_, j) => (
                    <th key={j} scope="col" className="border border-line bg-cobalt/10 p-1.5 font-bold text-ink">{j + 1}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {grid.map((row, i) => (
                  <tr key={i}>
                    <th scope="row" className="border border-line bg-cobalt/10 p-1.5 font-bold text-ink">{i + 1}</th>
                    {row.map((p, j) => (
                      <td key={j} className="border border-line p-1.5 text-ink" style={{ background: tint(p, chartSize * chartSize) }}>{p}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {mode === "booklet" && (
          <div className="grid gap-4 sm:grid-cols-2">
            {tables.map((t) => (
              <section key={t.n} className="mt-table rounded-2xl border border-line bg-white p-4">
                <h3 className="mb-2 font-display text-lg font-bold text-ink">{tri(lang, "Table of", "का पहाड़ा", "-এর নামতা")} {t.n}</h3>
                <ol className="space-y-0.5 text-base tabular-nums">
                  {t.rows.map((r) => (
                    <li key={r.b}>{r.a} × {r.b} = <span className="font-semibold text-ink">{r.product}</span></li>
                  ))}
                </ol>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
