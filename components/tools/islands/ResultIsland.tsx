"use client";

import { useMemo, useState } from "react";
import { classResult, resultCsv } from "@/lib/tools/logic/teacher";
import { LangToggle, NumberField, ErrorText, ResultActions, useLang, useUrlSync } from "./_shared";

export default function ResultIsland() {
  const [lang, setLang] = useLang();
  const [raw, setRaw] = useState("");
  const [max, setMax] = useState("100");
  const [pass, setPass] = useState("33");

  // Marks lists can be long, so only the small settings sync to the URL.
  useUrlSync({ max, pass }, (q) => {
    const m = q.get("max");
    const p = q.get("pass");
    if (m != null) setMax(m);
    if (p != null) setPass(p);
  });

  const t = (en: string, bn: string) => (lang === "bn" ? bn : en);
  const res = useMemo(() => classResult(raw, Number(max), Number(pass) || 33), [raw, max, pass]);
  const show = res.ok;
  const maxBar = show ? Math.max(1, ...res.distribution.map((d) => d.count)) : 1;

  const downloadCsv = () => {
    const blob = new Blob([resultCsv(res)], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "class-result.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  const shareText = () =>
    show ? `Class of ${res.total}: avg ${res.average}%, pass ${res.passCount}/${res.total}, top ${res.highest?.name} (${res.highest?.percent}%)` : "";

  return (
    <div className="card border p-5 sm:p-6">
      <div className="mb-4 flex justify-end">
        <LangToggle lang={lang} onChange={setLang} />
      </div>

      <label htmlFor="res-raw" className="block">
        <span className="mb-1 block text-sm font-semibold text-ink">{t("Marks (one student per line: Name, Marks)", "নম্বর (প্রতি লাইনে একজন: নাম, নম্বর)")}</span>
        <textarea id="res-raw" rows={6} value={raw} onChange={(e) => setRaw(e.target.value)}
          placeholder={"Aisha, 82\nRahul, 47\nMeera 91"}
          className="w-full rounded-2xl border border-line bg-cream px-3 py-2 font-mono text-sm text-ink outline-none focus:ring-2 focus:ring-cobalt" />
      </label>
      <div className="mt-3 grid max-w-sm grid-cols-2 gap-3">
        <NumberField id="res-max" label={t("Max marks", "পূর্ণমান")} value={max} onChange={setMax} min={1} />
        <NumberField id="res-pass" label={t("Pass mark (%)", "পাশ (%)")} value={pass} onChange={setPass} min={0} max={100} suffix="%" />
      </div>

      {raw.trim() !== "" && !res.ok && <ErrorText>{res.error}</ErrorText>}

      <div aria-live="polite" className="mt-4">
        {show && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {[
                [t("Students", "শিক্ষার্থী"), res.total],
                [t("Average", "গড়"), `${res.average}%`],
                [t("Passed", "পাশ"), `${res.passCount}/${res.total}`],
                [t("Failed", "ফেল"), res.failCount],
              ].map(([l, v]) => (
                <div key={String(l)} className="rounded-2xl bg-cobalt-soft p-3 text-center">
                  <p className="text-xs font-semibold text-muted">{l}</p>
                  <p className="font-display text-2xl font-bold text-cobalt">{v}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              <p className="rounded-xl bg-green/10 px-3 py-2 text-sm text-ink">🏆 {t("Highest", "সর্বোচ্চ")}: <strong>{res.highest?.name}</strong> — {res.highest?.marks} ({res.highest?.percent}%)</p>
              <p className="rounded-xl bg-amber/15 px-3 py-2 text-sm text-ink">🔻 {t("Lowest", "সর্বনিম্ন")}: <strong>{res.lowest?.name}</strong> — {res.lowest?.marks} ({res.lowest?.percent}%)</p>
            </div>

            {/* CSS bar chart of grade distribution */}
            <div className="rounded-2xl border border-line bg-cream p-4">
              <p className="mb-2 text-sm font-semibold text-ink">{t("Grade distribution", "গ্রেড বণ্টন")}</p>
              <div className="space-y-1.5">
                {res.distribution.map((d) => (
                  <div key={d.code} className="flex items-center gap-2 text-sm">
                    <span className="w-7 font-semibold text-ink">{d.code}</span>
                    <div className="h-4 flex-1 overflow-hidden rounded-full bg-white">
                      <div className="h-full rounded-full bg-cobalt transition-[width] duration-300" style={{ width: `${(d.count / maxBar) * 100}%` }} />
                    </div>
                    <span className="w-6 text-right tabular-nums text-muted">{d.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Result sheet (prints nicely) */}
            <div className="overflow-x-auto rounded-2xl border border-line">
              <table className="w-full text-left text-sm">
                <thead className="bg-cream">
                  <tr className="text-muted">
                    <th className="px-3 py-2 font-semibold">{t("Name", "নাম")}</th>
                    <th className="px-3 py-2 font-semibold">{t("Marks", "নম্বর")}</th>
                    <th className="px-3 py-2 font-semibold">%</th>
                    <th className="px-3 py-2 font-semibold">{t("Grade", "গ্রেড")}</th>
                    <th className="px-3 py-2 font-semibold">{t("Result", "ফল")}</th>
                  </tr>
                </thead>
                <tbody>
                  {res.students.map((s, i) => (
                    <tr key={i} className="border-t border-line">
                      <td className="px-3 py-1.5 text-ink">{s.name}</td>
                      <td className="px-3 py-1.5 tabular-nums text-ink">{s.marks}</td>
                      <td className="px-3 py-1.5 tabular-nums text-muted">{s.percent}</td>
                      <td className="px-3 py-1.5 font-semibold text-ink">{s.grade}</td>
                      <td className={`px-3 py-1.5 font-semibold ${s.pass ? "text-green" : "text-coral"}`}>{s.pass ? t("Pass", "পাশ") : t("Fail", "ফেল")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button type="button" onClick={downloadCsv} className="no-print rounded-full bg-green px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-105">
              ⬇ {t("Download CSV", "CSV ডাউনলোড")}
            </button>
          </div>
        )}
      </div>

      <ResultActions lang={lang} shareTitle="Class Result Calculator — StudyMatic" getShareText={shareText} disabled={!show} />
    </div>
  );
}
