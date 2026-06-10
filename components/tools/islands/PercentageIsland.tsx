"use client";

import { useMemo, useState } from "react";
import { simplePercentage, multiSubject, type SubjectRow } from "@/lib/tools/logic/percentage";
import { LangToggle, NumberField, ErrorText, ResultActions, useLang, useUrlSync } from "./_shared";

type Mode = "single" | "multi";

const blankRows: SubjectRow[] = [
  { name: "", obtained: NaN, max: 100 },
  { name: "", obtained: NaN, max: 100 },
  { name: "", obtained: NaN, max: 100 },
];

export default function PercentageIsland() {
  const [lang, setLang] = useLang();
  const [mode, setMode] = useState<Mode>("single");
  const [obtained, setObtained] = useState("");
  const [total, setTotal] = useState("");
  const [pass, setPass] = useState("33");
  const [rows, setRows] = useState<{ name: string; obtained: string; max: string }[]>(
    blankRows.map((r) => ({ name: r.name, obtained: "", max: String(r.max) })),
  );

  useUrlSync(
    mode === "single" ? { o: obtained, t: total, p: pass } : {},
    (q) => {
      const o = q.get("o");
      const tt = q.get("t");
      const p = q.get("p");
      if (o != null || tt != null) {
        setMode("single");
        if (o != null) setObtained(o);
        if (tt != null) setTotal(tt);
      }
      if (p != null) setPass(p);
    },
  );

  const t = (en: string, bn: string) => (lang === "bn" ? bn : en);
  const passMark = Number(pass) || 33;

  const single = useMemo(() => simplePercentage(obtained, total, passMark), [obtained, total, passMark]);
  const multi = useMemo(
    () =>
      multiSubject(
        rows.map((r) => ({ name: r.name, obtained: Number(r.obtained), max: Number(r.max) })),
        passMark,
      ),
    [rows, passMark],
  );

  const singleHasInput = obtained.trim() !== "" && total.trim() !== "";
  const multiHasInput = rows.some((r) => r.obtained.trim() !== "");

  const showSingle = mode === "single" && singleHasInput && single.ok;
  const showMulti = mode === "multi" && multiHasInput && multi.ok;

  const setRow = (i: number, patch: Partial<{ name: string; obtained: string; max: string }>) =>
    setRows((rs) => rs.map((r, idx) => (idx === i ? { ...r, ...patch } : r)));
  const addRow = () => setRows((rs) => [...rs, { name: "", obtained: "", max: "100" }]);
  const removeRow = (i: number) => setRows((rs) => (rs.length > 1 ? rs.filter((_, idx) => idx !== i) : rs));

  const shareText = () => {
    if (showSingle) return `${obtained}/${total} = ${single.percent}% (${single.pass ? "Pass" : "Fail"})`;
    if (showMulti)
      return `Overall: ${multi.totalObtained}/${multi.totalMax} = ${multi.percent}% · best ${multi.best?.name} (${multi.best?.percent}%)`;
    return "";
  };

  return (
    <div className="card border p-5 sm:p-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex rounded-full border border-line bg-cream p-0.5 text-sm font-semibold">
          {([["single", t("One subject", "এক বিষয়")], ["multi", t("Many subjects", "অনেক বিষয়")]] as const).map(
            ([m, label]) => (
              <button
                key={m}
                type="button"
                aria-pressed={mode === m}
                onClick={() => setMode(m)}
                className={`rounded-full px-3 py-1 transition ${
                  mode === m ? "bg-cobalt text-white shadow-sm" : "text-muted hover:text-ink"
                }`}
              >
                {label}
              </button>
            ),
          )}
        </div>
        <LangToggle lang={lang} onChange={setLang} />
      </div>

      {mode === "single" ? (
        <div className="grid gap-3 sm:grid-cols-2">
          <NumberField id="obt" label={t("Marks obtained", "প্রাপ্ত নম্বর")} value={obtained} onChange={setObtained} placeholder="78" min={0} />
          <NumberField id="tot" label={t("Total marks", "মোট নম্বর")} value={total} onChange={setTotal} placeholder="100" min={1} />
        </div>
      ) : (
        <div className="space-y-2">
          <div className="hidden grid-cols-[1fr_5rem_5rem_2rem] gap-2 px-1 text-xs font-semibold text-muted sm:grid">
            <span>{t("Subject", "বিষয়")}</span>
            <span>{t("Marks", "নম্বর")}</span>
            <span>{t("Out of", "পূর্ণমান")}</span>
            <span />
          </div>
          {rows.map((r, i) => (
            <div key={i} className="grid grid-cols-[1fr_4.5rem_4.5rem_2rem] items-center gap-2">
              <input
                aria-label={t("Subject name", "বিষয়ের নাম")}
                value={r.name}
                onChange={(e) => setRow(i, { name: e.target.value })}
                placeholder={t("Subject", "বিষয়")}
                className="rounded-xl border border-line bg-cream px-2 py-2 text-sm text-ink outline-none focus:ring-2 focus:ring-cobalt"
              />
              <input
                aria-label={t("Marks obtained", "প্রাপ্ত নম্বর")}
                type="number"
                inputMode="decimal"
                value={r.obtained}
                onChange={(e) => setRow(i, { obtained: e.target.value })}
                placeholder="0"
                className="rounded-xl border border-line bg-cream px-2 py-2 text-sm font-semibold text-ink outline-none focus:ring-2 focus:ring-cobalt [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none"
              />
              <input
                aria-label={t("Out of", "পূর্ণমান")}
                type="number"
                inputMode="decimal"
                value={r.max}
                onChange={(e) => setRow(i, { max: e.target.value })}
                placeholder="100"
                className="rounded-xl border border-line bg-cream px-2 py-2 text-sm font-semibold text-ink outline-none focus:ring-2 focus:ring-cobalt [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none"
              />
              <button
                type="button"
                onClick={() => removeRow(i)}
                aria-label={t("Remove subject", "বিষয় বাদ দাও")}
                className="grid h-8 w-8 place-items-center rounded-full border border-line text-muted transition hover:border-coral hover:text-coral"
              >
                ×
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addRow}
            className="no-print mt-1 rounded-full border border-dashed border-line px-3 py-1.5 text-sm font-semibold text-cobalt transition hover:border-cobalt"
          >
            + {t("Add subject", "বিষয় যোগ করো")}
          </button>
        </div>
      )}

      <div className="mt-3 max-w-[12rem]">
        <NumberField id="passm" label={t("Pass mark (%)", "পাশ নম্বর (%)")} value={pass} onChange={setPass} min={0} max={100} suffix="%" />
      </div>

      {mode === "single" && singleHasInput && !single.ok && <ErrorText>{single.error}</ErrorText>}
      {mode === "multi" && multiHasInput && !multi.ok && <ErrorText>{multi.error}</ErrorText>}

      <div aria-live="polite" className="mt-4">
        {showSingle && (
          <div className="rounded-2xl bg-cobalt-soft p-4">
            <p className="text-sm font-medium text-muted">{t("Percentage", "শতকরা")}</p>
            <p className="font-display text-4xl font-bold text-cobalt">{single.percent}%</p>
            <span
              className={`mt-1 inline-block rounded-full px-2.5 py-0.5 text-xs font-bold ${
                single.pass ? "bg-green/15 text-green" : "bg-coral/15 text-coral"
              }`}
            >
              {single.pass ? t("Pass", "পাশ") : t("Below pass mark", "পাশ নম্বরের নিচে")}
            </span>
          </div>
        )}

        {showMulti && (
          <div className="rounded-2xl bg-cobalt-soft p-4">
            <p className="text-sm font-medium text-muted">{t("Overall percentage", "মোট শতকরা")}</p>
            <p className="font-display text-4xl font-bold text-cobalt">{multi.percent}%</p>
            <p className="mt-1 text-sm text-ink">
              {multi.totalObtained} / {multi.totalMax} ·{" "}
              <span className={multi.pass ? "font-semibold text-green" : "font-semibold text-coral"}>
                {multi.pass ? t("Pass", "পাশ") : t("Below pass", "পাশের নিচে")}
              </span>
            </p>
            <div className="mt-2 flex flex-wrap gap-2 text-xs">
              {multi.best && (
                <span className="rounded-full bg-green/15 px-2.5 py-1 font-semibold text-green">
                  {t("Best", "সেরা")}: {multi.best.name} ({multi.best.percent}%)
                </span>
              )}
              {multi.weakest && (
                <span className="rounded-full bg-amber/20 px-2.5 py-1 font-semibold text-ink">
                  {t("Weakest", "দুর্বলতম")}: {multi.weakest.name} ({multi.weakest.percent}%)
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      <ResultActions
        lang={lang}
        shareTitle="Percentage Calculator — StudyMatic"
        getShareText={shareText}
        disabled={!(showSingle || showMulti)}
      />
    </div>
  );
}
