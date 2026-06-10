"use client";

import { useMemo, useState } from "react";
import { cgpaToPercentage, percentageToCgpa, GRADE_TABLE } from "@/lib/tools/logic/cgpa";
import { LangToggle, NumberField, ErrorText, ResultActions, useLang, useUrlSync, pick } from "./_shared";

type Mode = "c2p" | "p2c";

export default function CgpaIsland({ initialCgpa }: { initialCgpa?: string }) {
  const [lang, setLang] = useLang();
  const [mode, setMode] = useState<Mode>("c2p");
  const [cgpa, setCgpa] = useState(initialCgpa ?? "");
  const [pct, setPct] = useState("");

  useUrlSync(
    mode === "c2p" ? { cgpa } : { pct },
    (q) => {
      const c = q.get("cgpa");
      const p = q.get("pct");
      if (p != null) {
        setMode("p2c");
        setPct(p);
      } else if (c != null) {
        setMode("c2p");
        setCgpa(c);
      }
    },
  );

  const t = (en: string, bn: string) => (lang === "bn" ? bn : en);

  const c2p = useMemo(() => cgpaToPercentage(cgpa), [cgpa]);
  const p2c = useMemo(() => percentageToCgpa(pct), [pct]);

  const active = mode === "c2p" ? c2p : p2c;
  const hasInput = mode === "c2p" ? cgpa.trim() !== "" : pct.trim() !== "";
  const showResult = hasInput && active.ok;

  const scalePct = mode === "c2p" ? (c2p.ok ? c2p.percentage : 0) : p2c.ok ? Number(pct) : 0;

  const shareText = () => {
    if (mode === "c2p" && c2p.ok) return `${cgpa} CGPA = ${c2p.percentage}% (CBSE) · grade ${c2p.grade.code}`;
    if (mode === "p2c" && p2c.ok) return `${pct}% = ${p2c.cgpa} CGPA (CBSE) · grade ${p2c.grade.code}`;
    return "";
  };

  return (
    <div className="card border p-5 sm:p-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex rounded-full border border-line bg-cream p-0.5 text-sm font-semibold">
          {([["c2p", t("CGPA → %", "সিজিপিএ → %")], ["p2c", t("% → CGPA", "% → সিজিপিএ")]] as const).map(
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

      {mode === "c2p" ? (
        <NumberField
          id="cgpa-in"
          label={t("Your CGPA (0–10)", "তোমার সিজিপিএ (০–১০)")}
          value={cgpa}
          onChange={setCgpa}
          placeholder="9.2"
          min={0}
          max={10}
          step={0.1}
          suffix="CGPA"
        />
      ) : (
        <NumberField
          id="pct-in"
          label={t("Your percentage (0–100)", "তোমার শতকরা (০–১০০)")}
          value={pct}
          onChange={setPct}
          placeholder="87.4"
          min={0}
          max={100}
          step={0.1}
          suffix="%"
        />
      )}

      {hasInput && !active.ok && <ErrorText>{t(active.error ?? "", active.error ?? "")}</ErrorText>}

      <div aria-live="polite" className="mt-4">
        {showResult && (
          <div className="rounded-2xl bg-cobalt-soft p-4">
            <p className="text-sm font-medium text-muted">
              {mode === "c2p" ? t("Percentage", "শতকরা") : t("CGPA", "সিজিপিএ")}
            </p>
            <p className="font-display text-4xl font-bold text-cobalt">
              {mode === "c2p" ? `${c2p.percentage}%` : p2c.cgpa}
            </p>
            <p className="mt-1 text-sm text-ink">
              {t("Grade band", "গ্রেড ব্যান্ড")}:{" "}
              <span className="font-semibold">{active.grade.code}</span>
              {active.grade.point != null && (
                <span className="text-muted"> · {t("grade point", "গ্রেড পয়েন্ট")} {active.grade.point}</span>
              )}
            </p>

            {/* Visual scale bar */}
            <div className="mt-3" aria-hidden>
              <div className="h-3 w-full overflow-hidden rounded-full bg-white">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-green via-amber to-cobalt transition-[width] duration-300"
                  style={{ width: `${Math.max(0, Math.min(100, scalePct))}%` }}
                />
              </div>
              <div className="mt-1 flex justify-between text-[11px] text-muted">
                <span>0%</span>
                <span>50%</span>
                <span>100%</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <ResultActions
        lang={lang}
        shareTitle="CGPA to Percentage — StudyMatic"
        getShareText={shareText}
        disabled={!showResult}
      />

      {/* CBSE grade table */}
      <details className="mt-5 rounded-2xl border border-line bg-cream p-4">
        <summary className="cursor-pointer text-sm font-semibold text-ink">
          {t("CBSE grading table", "সিবিএসই গ্রেডিং টেবিল")}
        </summary>
        <table className="mt-3 w-full text-left text-sm">
          <thead>
            <tr className="text-muted">
              <th className="py-1 pr-3 font-semibold">{t("Grade", "গ্রেড")}</th>
              <th className="py-1 pr-3 font-semibold">{t("Marks range", "নম্বরের পরিসর")}</th>
              <th className="py-1 font-semibold">{t("Grade point", "গ্রেড পয়েন্ট")}</th>
            </tr>
          </thead>
          <tbody>
            {GRADE_TABLE.map((g) => (
              <tr key={g.code} className="border-t border-line">
                <td className="py-1 pr-3 font-semibold text-ink">{g.code}</td>
                <td className="py-1 pr-3 text-muted">{g.range}</td>
                <td className="py-1 text-muted">{g.point ?? "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </div>
  );
}
