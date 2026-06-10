"use client";

import { useMemo, useState } from "react";
import { computeStats } from "@/lib/tools/logic/stats";
import { LangToggle, ErrorText, ResultActions, useLang, useUrlSync } from "./_shared";

export default function MeanMedianModeIsland() {
  const [lang, setLang] = useLang();
  const [text, setText] = useState("");

  useUrlSync({ d: text }, (q) => {
    const d = q.get("d");
    if (d != null) setText(d);
  });

  const t = (en: string, bn: string) => (lang === "bn" ? bn : en);
  const res = useMemo(() => computeStats(text), [text]);
  const show = res.ok;

  const Stat = ({ label, value }: { label: string; value: string | number }) => (
    <div className="rounded-2xl bg-white p-3 text-center shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-muted">{label}</p>
      <p className="font-display text-2xl font-bold text-cobalt tabular-nums">{value}</p>
    </div>
  );

  const shareText = () =>
    show ? `n=${res.count} · mean ${res.mean} · median ${res.median} · mode ${res.modes.length ? res.modes.join("/") : "none"} · range ${res.range}` : "";

  return (
    <div className="card border p-5 sm:p-6">
      <div className="mb-4 flex justify-end">
        <LangToggle lang={lang} onChange={setLang} />
      </div>

      <label htmlFor="mmm" className="block">
        <span className="mb-1 block text-sm font-semibold text-ink">{t("Your numbers", "তোমার সংখ্যাগুলো")}</span>
        <textarea id="mmm" rows={3} value={text} onChange={(e) => setText(e.target.value)} placeholder={t("e.g. 7, 3, 9, 3, 5", "যেমন ৭, ৩, ৯, ৩, ৫")}
          className="w-full rounded-2xl border border-line bg-cream px-3 py-2 text-base text-ink outline-none focus:ring-2 focus:ring-cobalt" />
      </label>
      <p className="mt-1 text-xs text-muted">{t("Separate with commas, spaces or new lines.", "কমা, স্পেস বা নতুন লাইনে আলাদা করো।")}</p>

      {text.trim() !== "" && !res.ok && <ErrorText>{res.error}</ErrorText>}

      <div aria-live="polite" className="mt-4">
        {show && (
          <div className="rounded-2xl bg-cobalt-soft p-4">
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
              <Stat label={t("Mean", "গড়")} value={res.mean} />
              <Stat label={t("Median", "মধ্যমা")} value={res.median} />
              <Stat label={t("Mode", "প্রচুরক")} value={res.modes.length ? res.modes.join(", ") : t("none", "নেই")} />
              <Stat label={t("Range", "পরিসর")} value={res.range} />
              <Stat label={t("Count", "সংখ্যা")} value={res.count} />
              <Stat label={t("Sum", "যোগফল")} value={res.sum} />
            </div>

            <div className="mt-3">
              <p className="mb-1 text-sm font-semibold text-ink">{t("Sorted list", "সাজানো তালিকা")} ({t("median highlighted", "মধ্যমা চিহ্নিত")}):</p>
              <div className="flex flex-wrap gap-1.5">
                {res.sorted.map((v, i) => (
                  <span key={i} className={`rounded-lg px-2 py-1 text-sm font-semibold tabular-nums ${res.medianIndices.includes(i) ? "bg-amber text-[#3a2a00]" : "bg-white text-ink"}`}>{v}</span>
                ))}
              </div>
            </div>

            <div className="mt-3 space-y-1 text-sm text-muted">
              <p>• {t("Mean = sum ÷ count =", "গড় = যোগফল ÷ সংখ্যা =")} {res.sum} ÷ {res.count} = {res.mean}.</p>
              <p>• {t("Median = middle of the sorted list.", "মধ্যমা = সাজানো তালিকার মাঝের মান।")}</p>
              <p>• {t("Mode = the most frequent value(s).", "প্রচুরক = সবচেয়ে বেশি বার আসা মান।")}</p>
              <p>• {t("Range = max − min =", "পরিসর = সর্বোচ্চ − সর্বনিম্ন =")} {res.max} − {res.min} = {res.range}.</p>
            </div>
          </div>
        )}
      </div>

      <ResultActions lang={lang} shareTitle="Mean, Median & Mode — StudyMatic" getShareText={shareText} disabled={!show} />
    </div>
  );
}
