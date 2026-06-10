"use client";

import { useMemo, useState } from "react";
import { gradeFromMarks, gradeFromPercent, multiGrade, GRADE_TABLE } from "@/lib/tools/logic/teacher";
import { LangToggle, NumberField, ErrorText, ResultActions, useLang, useT, useUrlSync } from "./_shared";

type Mode = "single" | "multi";
type Src = "marks" | "percent";

export default function GradeIsland() {
  const [lang, setLang] = useLang();
  const [mode, setMode] = useState<Mode>("single");
  const [src, setSrc] = useState<Src>("marks");
  const [obtained, setObtained] = useState("");
  const [total, setTotal] = useState("100");
  const [pct, setPct] = useState("");
  const [rows, setRows] = useState([
    { name: "", obtained: "", max: "100" },
    { name: "", obtained: "", max: "100" },
    { name: "", obtained: "", max: "100" },
  ]);

  useUrlSync(mode === "single" ? (src === "marks" ? { o: obtained, t: total } : { pct }) : {}, (q) => {
    const o = q.get("o");
    const t = q.get("t");
    const p = q.get("pct");
    if (p != null) {
      setMode("single");
      setSrc("percent");
      setPct(p);
    } else if (o != null || t != null) {
      setMode("single");
      setSrc("marks");
      if (o != null) setObtained(o);
      if (t != null) setTotal(t);
    }
  });

  const t = useT(lang);
  const single = useMemo(
    () => (src === "marks" ? gradeFromMarks(obtained, total) : gradeFromPercent(pct)),
    [src, obtained, total, pct],
  );
  const multi = useMemo(() => multiGrade(rows), [rows]);

  const singleHasInput = src === "marks" ? obtained.trim() !== "" : pct.trim() !== "";
  const multiHasInput = rows.some((r) => r.obtained.trim() !== "");
  const showSingle = mode === "single" && singleHasInput && single.ok;
  const showMulti = mode === "multi" && multiHasInput && multi.ok;

  const setRow = (i: number, patch: Partial<{ name: string; obtained: string; max: string }>) =>
    setRows((rs) => rs.map((r, idx) => (idx === i ? { ...r, ...patch } : r)));

  const inCls = "rounded-xl border border-line bg-cream px-2 py-2 text-sm font-semibold text-ink outline-none focus:ring-2 focus:ring-cobalt [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none";

  const shareText = () => {
    if (showSingle) return `${single.percent}% → CBSE grade ${single.grade.code} (point ${single.grade.point ?? "—"})`;
    if (showMulti) return `Overall CGPA ${multi.cgpa} (~${multi.overallPercent}%) from ${multi.rows.length} subjects`;
    return "";
  };

  return (
    <div className="card border p-5 sm:p-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex rounded-full border border-line bg-cream p-0.5 text-sm font-semibold">
          {([["single", t("One subject", "এক বিষয়")], ["multi", t("Subjects → CGPA", "বিষয় → সিজিপিএ")]] as const).map(([m, l]) => (
            <button key={m} type="button" aria-pressed={mode === m} onClick={() => setMode(m)}
              className={`rounded-full px-3 py-1 transition ${mode === m ? "bg-cobalt text-white shadow-sm" : "text-muted hover:text-ink"}`}>{l}</button>
          ))}
        </div>
        <LangToggle lang={lang} onChange={setLang} />
      </div>

      {mode === "single" ? (
        <>
          <div className="mb-3 inline-flex rounded-full border border-line bg-cream p-0.5 text-xs font-semibold">
            {([["marks", t("From marks", "নম্বর থেকে")], ["percent", t("From %", "শতকরা থেকে")]] as const).map(([s, l]) => (
              <button key={s} type="button" aria-pressed={src === s} onClick={() => setSrc(s)}
                className={`rounded-full px-3 py-1 transition ${src === s ? "bg-ink text-white" : "text-muted hover:text-ink"}`}>{l}</button>
            ))}
          </div>
          {src === "marks" ? (
            <div className="grid gap-3 sm:grid-cols-2">
              <NumberField id="g-obt" label={t("Marks obtained", "প্রাপ্ত নম্বর")} value={obtained} onChange={setObtained} placeholder="76" min={0} />
              <NumberField id="g-tot" label={t("Total marks", "মোট নম্বর")} value={total} onChange={setTotal} placeholder="100" min={1} />
            </div>
          ) : (
            <div className="max-w-[12rem]">
              <NumberField id="g-pct" label={t("Percentage", "শতকরা")} value={pct} onChange={setPct} placeholder="76" min={0} max={100} suffix="%" />
            </div>
          )}
        </>
      ) : (
        <div className="space-y-2">
          {rows.map((r, i) => (
            <div key={i} className="grid grid-cols-[1fr_4.5rem_4.5rem_2rem] items-center gap-2">
              <input aria-label={t("Subject", "বিষয়")} value={r.name} onChange={(e) => setRow(i, { name: e.target.value })} placeholder={t("Subject", "বিষয়")} className={inCls} />
              <input aria-label={t("Marks", "নম্বর")} type="number" value={r.obtained} onChange={(e) => setRow(i, { obtained: e.target.value })} placeholder="0" className={inCls} />
              <input aria-label={t("Out of", "পূর্ণমান")} type="number" value={r.max} onChange={(e) => setRow(i, { max: e.target.value })} placeholder="100" className={inCls} />
              <button type="button" onClick={() => setRows((rs) => (rs.length > 1 ? rs.filter((_, idx) => idx !== i) : rs))} aria-label={t("Remove", "বাদ")} className="grid h-8 w-8 place-items-center rounded-full border border-line text-muted hover:border-coral hover:text-coral">×</button>
            </div>
          ))}
          <button type="button" onClick={() => setRows((rs) => [...rs, { name: "", obtained: "", max: "100" }])} className="no-print rounded-full border border-dashed border-line px-3 py-1.5 text-sm font-semibold text-cobalt hover:border-cobalt">+ {t("Add subject", "বিষয় যোগ")}</button>
        </div>
      )}

      {mode === "single" && singleHasInput && !single.ok && <ErrorText>{single.error}</ErrorText>}
      {mode === "multi" && multiHasInput && !multi.ok && <ErrorText>{multi.error}</ErrorText>}

      <div aria-live="polite" className="mt-4">
        {showSingle && (
          <div className="rounded-2xl bg-cobalt-soft p-4">
            <p className="text-sm font-medium text-muted">{t("CBSE grade", "সিবিএসই গ্রেড")} · {single.percent}%</p>
            <p className="font-display text-4xl font-bold text-cobalt">{single.grade.code}</p>
            <p className="mt-1 text-sm text-ink">{t("Grade point", "গ্রেড পয়েন্ট")}: <strong>{single.grade.point ?? "—"}</strong> · {t("range", "পরিসর")} {single.grade.range}</p>
          </div>
        )}
        {showMulti && (
          <div className="rounded-2xl bg-cobalt-soft p-4">
            <p className="text-sm font-medium text-muted">{t("Overall CGPA", "মোট সিজিপিএ")}</p>
            <p className="font-display text-4xl font-bold text-cobalt">{multi.cgpa}</p>
            <p className="mt-1 text-sm text-ink">≈ {multi.overallPercent}% ({t("CGPA × 9.5", "সিজিপিএ × ৯.৫")})</p>
            <table className="mt-3 w-full text-left text-sm">
              <thead><tr className="text-muted"><th className="py-1 pr-3 font-semibold">{t("Subject", "বিষয়")}</th><th className="py-1 pr-3 font-semibold">%</th><th className="py-1 font-semibold">{t("Grade", "গ্রেড")}</th></tr></thead>
              <tbody>
                {multi.rows.map((r, i) => (
                  <tr key={i} className="border-t border-line"><td className="py-1 pr-3 text-ink">{r.name}</td><td className="py-1 pr-3 text-muted">{r.percent}</td><td className="py-1 font-semibold text-ink">{r.grade.code}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <ResultActions lang={lang} shareTitle="Grade Calculator — StudyMatic" getShareText={shareText} disabled={!(showSingle || showMulti)} />

      <details className="mt-5 rounded-2xl border border-line bg-cream p-4">
        <summary className="cursor-pointer text-sm font-semibold text-ink">{t("CBSE grade table", "সিবিএসই গ্রেড টেবিল")}</summary>
        <table className="mt-3 w-full text-left text-sm">
          <thead><tr className="text-muted"><th className="py-1 pr-3 font-semibold">{t("Grade", "গ্রেড")}</th><th className="py-1 pr-3 font-semibold">{t("Range", "পরিসর")}</th><th className="py-1 font-semibold">{t("Point", "পয়েন্ট")}</th></tr></thead>
          <tbody>{GRADE_TABLE.map((g) => (<tr key={g.code} className="border-t border-line"><td className="py-1 pr-3 font-semibold text-ink">{g.code}</td><td className="py-1 pr-3 text-muted">{g.range}</td><td className="py-1 text-muted">{g.point ?? "—"}</td></tr>))}</tbody>
        </table>
      </details>
    </div>
  );
}
