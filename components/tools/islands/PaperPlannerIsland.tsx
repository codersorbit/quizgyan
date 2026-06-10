"use client";

import { useMemo, useState } from "react";
import { paperPlan, type PaperSection } from "@/lib/tools/logic/teacher";
import { LangToggle, NumberField, ErrorText, ResultActions, useLang, useUrlSync } from "./_shared";

type Row = { name: string; count: string; marksEach: string };

const DEFAULT_ROWS: Row[] = [
  { name: "MCQ", count: "20", marksEach: "1" },
  { name: "Short answer", count: "8", marksEach: "3" },
  { name: "Long answer", count: "6", marksEach: "6" },
];

function encodeRows(rows: Row[]): string {
  return rows.map((r) => `${r.name}~${r.count}~${r.marksEach}`).join("|");
}
function decodeRows(s: string): Row[] {
  return s
    .split("|")
    .map((chunk) => chunk.split("~"))
    .filter((p) => p.length === 3)
    .map(([name, count, marksEach]) => ({ name, count, marksEach }));
}

export default function PaperPlannerIsland() {
  const [lang, setLang] = useLang();
  const [total, setTotal] = useState("80");
  const [duration, setDuration] = useState("180");
  const [rows, setRows] = useState<Row[]>(DEFAULT_ROWS);

  useUrlSync({ tot: total, dur: duration, s: encodeRows(rows) }, (q) => {
    const tot = q.get("tot");
    const dur = q.get("dur");
    const s = q.get("s");
    if (tot != null) setTotal(tot);
    if (dur != null) setDuration(dur);
    if (s) {
      const decoded = decodeRows(s);
      if (decoded.length) setRows(decoded);
    }
  });

  const t = (en: string, bn: string) => (lang === "bn" ? bn : en);
  const sections: PaperSection[] = rows.map((r) => ({ name: r.name, count: Number(r.count), marksEach: Number(r.marksEach) }));
  const plan = useMemo(() => paperPlan(sections, Number(total), Number(duration)), [rows, total, duration]);
  const show = plan.ok;

  const setRow = (i: number, patch: Partial<Row>) => setRows((rs) => rs.map((r, idx) => (idx === i ? { ...r, ...patch } : r)));
  const inCls = "rounded-xl border border-line bg-cream px-2 py-2 text-sm font-semibold text-ink outline-none focus:ring-2 focus:ring-cobalt [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none";

  const shareText = () =>
    show ? `Paper: ${plan.sectionTotal}/${plan.paperTotal} marks ${plan.matches ? "✓ balanced" : `(off by ${plan.difference})`}, ${duration} min` : "";

  return (
    <div className="card border p-5 sm:p-6">
      <div className="mb-4 flex justify-end">
        <LangToggle lang={lang} onChange={setLang} />
      </div>

      <div className="grid max-w-sm grid-cols-2 gap-3">
        <NumberField id="pp-total" label={t("Total marks", "মোট নম্বর")} value={total} onChange={setTotal} min={1} />
        <NumberField id="pp-dur" label={t("Duration (min)", "সময় (মিনিট)")} value={duration} onChange={setDuration} min={1} />
      </div>

      <div className="mt-4 space-y-2">
        <div className="hidden grid-cols-[1fr_4rem_4rem_4.5rem_2rem] gap-2 px-1 text-xs font-semibold text-muted sm:grid">
          <span>{t("Section", "বিভাগ")}</span>
          <span>{t("Count", "সংখ্যা")}</span>
          <span>{t("Marks", "নম্বর")}</span>
          <span>{t("Subtotal", "উপমোট")}</span>
          <span />
        </div>
        {rows.map((r, i) => {
          const sub = (Number(r.count) || 0) * (Number(r.marksEach) || 0);
          return (
            <div key={i} className="grid grid-cols-[1fr_3.5rem_3.5rem_4rem_2rem] items-center gap-2">
              <input aria-label={t("Section name", "বিভাগের নাম")} value={r.name} onChange={(e) => setRow(i, { name: e.target.value })} placeholder={t("Section", "বিভাগ")} className={inCls} />
              <input aria-label={t("Count", "সংখ্যা")} type="number" value={r.count} onChange={(e) => setRow(i, { count: e.target.value })} placeholder="0" className={inCls} />
              <input aria-label={t("Marks each", "প্রতিটির নম্বর")} type="number" value={r.marksEach} onChange={(e) => setRow(i, { marksEach: e.target.value })} placeholder="0" className={inCls} />
              <span className="text-center text-sm font-bold tabular-nums text-cobalt">{sub}</span>
              <button type="button" onClick={() => setRows((rs) => (rs.length > 1 ? rs.filter((_, idx) => idx !== i) : rs))} aria-label={t("Remove", "বাদ")} className="grid h-8 w-8 place-items-center rounded-full border border-line text-muted hover:border-coral hover:text-coral">×</button>
            </div>
          );
        })}
        <button type="button" onClick={() => setRows((rs) => [...rs, { name: "", count: "", marksEach: "" }])} className="no-print rounded-full border border-dashed border-line px-3 py-1.5 text-sm font-semibold text-cobalt hover:border-cobalt">+ {t("Add section", "বিভাগ যোগ")}</button>
      </div>

      {!plan.ok && <ErrorText>{plan.error}</ErrorText>}

      <div aria-live="polite" className="mt-4">
        {show && (
          <div className={`rounded-2xl p-4 ${plan.matches ? "bg-green/10" : "bg-amber/15"}`}>
            <p className="font-display text-lg font-bold text-ink">
              {plan.matches ? (
                <>✅ {t("Balanced", "সঠিক")}: {plan.sectionTotal} / {plan.paperTotal} {t("marks", "নম্বর")}</>
              ) : (
                <>⚠️ {t("Sections total", "বিভাগের মোট")} {plan.sectionTotal}, {t("but paper is", "কিন্তু পেপার")} {plan.paperTotal} — {plan.difference > 0 ? t("remove", "কমাও") : t("add", "বাড়াও")} {Math.abs(plan.difference)} {t("marks", "নম্বর")}.</>
              )}
            </p>
            <p className="mt-1 text-sm text-muted">{t("Pace", "গতি")}: ~{plan.minutesPerMark} {t("min per mark.", "মিনিট প্রতি নম্বর।")}</p>
            <table className="mt-3 w-full text-left text-sm">
              <thead><tr className="text-muted"><th className="py-1 pr-3 font-semibold">{t("Section", "বিভাগ")}</th><th className="py-1 pr-3 font-semibold">{t("Marks", "নম্বর")}</th><th className="py-1 font-semibold">{t("Suggested time", "প্রস্তাবিত সময়")}</th></tr></thead>
              <tbody>
                {plan.sectionMinutes.map((s, i) => (
                  <tr key={i} className="border-t border-line"><td className="py-1 pr-3 text-ink">{s.name}</td><td className="py-1 pr-3 tabular-nums text-muted">{s.marks}</td><td className="py-1 tabular-nums text-ink">{s.minutes} {t("min", "মিনিট")}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <ResultActions lang={lang} shareTitle="Question Paper Planner — StudyMatic" getShareText={shareText} disabled={!show} />
    </div>
  );
}
