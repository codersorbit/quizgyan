"use client";

import { useMemo, useState } from "react";
import { computeFraction, simplifyFraction, type Op } from "@/lib/tools/logic/fraction";
import { LangToggle, ErrorText, ResultActions, useLang, useT, useUrlSync } from "./_shared";

const OPS: { id: Op; sym: string }[] = [
  { id: "add", sym: "+" },
  { id: "sub", sym: "−" },
  { id: "mul", sym: "×" },
  { id: "div", sym: "÷" },
];

export default function FractionIsland() {
  const [lang, setLang] = useLang();
  const [simplifyMode, setSimplifyMode] = useState(false);
  const [op, setOp] = useState<Op>("add");
  const [a, setA] = useState({ w: "", n: "1", d: "2" });
  const [b, setB] = useState({ w: "", n: "1", d: "3" });

  useUrlSync(
    { aw: a.w, an: a.n, ad: a.d, bw: b.w, bn: b.n, bd: b.d, op },
    (q) => {
      const g = (k: string, f: string) => q.get(k) ?? f;
      setA({ w: g("aw", ""), n: g("an", "1"), d: g("ad", "2") });
      setB({ w: g("bw", ""), n: g("bn", "1"), d: g("bd", "3") });
      const o = q.get("op") as Op | null;
      if (o && OPS.some((x) => x.id === o)) setOp(o);
    },
  );

  const t = useT(lang);
  const toFrac = (f: { w: string; n: string; d: string }) => ({
    whole: f.w.trim() === "" ? 0 : Number(f.w),
    num: f.n.trim() === "" ? 0 : Number(f.n),
    den: f.d.trim() === "" ? NaN : Number(f.d),
  });

  const res = useMemo(() => {
    if (simplifyMode) return simplifyFraction(toFrac(a).num + toFrac(a).whole * (toFrac(a).den || 1), toFrac(a).den);
    return computeFraction(toFrac(a), toFrac(b), op);
  }, [simplifyMode, a, b, op]);

  const show = res.ok;

  const FracInput = ({ f, set, id }: { f: { w: string; n: string; d: string }; set: (v: { w: string; n: string; d: string }) => void; id: string }) => {
    const cls = "w-12 rounded-lg border border-line bg-cream px-1 py-1.5 text-center text-base font-semibold text-ink outline-none focus:ring-2 focus:ring-cobalt [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none";
    return (
      <div className="flex items-center gap-1.5">
        <input aria-label={`${id} ${t("whole", "পূর্ণ")}`} type="number" value={f.w} onChange={(e) => set({ ...f, w: e.target.value })} placeholder={t("w", "পূ")} className={cls} />
        <div className="flex flex-col items-center">
          <input aria-label={`${id} ${t("numerator", "লব")}`} type="number" value={f.n} onChange={(e) => set({ ...f, n: e.target.value })} className={cls} />
          <span className="my-0.5 h-px w-10 bg-ink" aria-hidden />
          <input aria-label={`${id} ${t("denominator", "হর")}`} type="number" value={f.d} onChange={(e) => set({ ...f, d: e.target.value })} className={cls} />
        </div>
      </div>
    );
  };

  const shareText = () => {
    if (!show) return "";
    const m = res.mixed;
    const mixedStr = m.whole !== 0 && m.num !== 0 ? `${m.whole} ${m.num}/${m.den}` : `${res.num}/${res.den}`;
    return `${t("Answer", "উত্তর")}: ${res.num}/${res.den}${m.whole !== 0 && m.num !== 0 ? ` = ${mixedStr}` : ""} = ${res.decimal}`;
  };

  return (
    <div className="card border p-5 sm:p-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex rounded-full border border-line bg-cream p-0.5 text-sm font-semibold">
          <button type="button" aria-pressed={!simplifyMode} onClick={() => setSimplifyMode(false)} className={`rounded-full px-3 py-1 transition ${!simplifyMode ? "bg-cobalt text-white shadow-sm" : "text-muted hover:text-ink"}`}>{t("Calculate", "হিসাব")}</button>
          <button type="button" aria-pressed={simplifyMode} onClick={() => setSimplifyMode(true)} className={`rounded-full px-3 py-1 transition ${simplifyMode ? "bg-cobalt text-white shadow-sm" : "text-muted hover:text-ink"}`}>{t("Simplify only", "শুধু সরল")}</button>
        </div>
        <LangToggle lang={lang} onChange={setLang} />
      </div>

      <p className="mb-2 text-xs text-muted">{t("Leave the whole-number box empty for a simple fraction.", "সাধারণ ভগ্নাংশের জন্য পূর্ণ-সংখ্যার ঘর খালি রাখো।")}</p>

      <div className="flex flex-wrap items-center gap-3">
        <FracInput f={a} set={setA} id="A" />
        {!simplifyMode && (
          <>
            <div className="inline-flex rounded-full border border-line bg-cream p-0.5 text-base font-bold">
              {OPS.map((o) => (
                <button key={o.id} type="button" aria-pressed={op === o.id} aria-label={o.id} onClick={() => setOp(o.id)} className={`h-8 w-8 rounded-full transition ${op === o.id ? "bg-cobalt text-white" : "text-muted hover:text-ink"}`}>{o.sym}</button>
              ))}
            </div>
            <FracInput f={b} set={setB} id="B" />
          </>
        )}
        <span className="text-xl font-bold text-muted">=</span>
        {show && (
          <span className="font-display text-2xl font-bold text-cobalt">
            {res.num}/{res.den}
          </span>
        )}
      </div>

      {!res.ok && <ErrorText>{res.error}</ErrorText>}

      <div aria-live="polite" className="mt-4">
        {show && (
          <div className="rounded-2xl bg-cobalt-soft p-4">
            <p className="text-sm font-medium text-muted">{t("Answer", "উত্তর")}</p>
            <p className="font-display text-3xl font-bold text-cobalt">
              {res.num}/{res.den}
              {res.mixed.whole !== 0 && res.mixed.num !== 0 && (
                <span className="ml-2 text-xl text-ink">= {res.mixed.whole} {res.mixed.num}/{res.mixed.den}</span>
              )}
            </p>
            <p className="mt-1 text-sm text-ink">{t("As a decimal", "দশমিকে")}: {res.decimal}</p>
            <ol className="mt-3 space-y-1 text-sm text-muted">
              {res.steps.map((s, i) => (<li key={i} className="flex gap-2"><span className="font-semibold text-cobalt">{i + 1}.</span><span>{s}</span></li>))}
            </ol>
          </div>
        )}
      </div>

      <ResultActions lang={lang} shareTitle="Fraction Calculator — StudyMatic" getShareText={shareText} disabled={!show} />
    </div>
  );
}
