"use client";

import { useMemo, useState } from "react";
import { ageOn } from "@/lib/tools/logic/age";
import { LangToggle, ErrorText, ResultActions, useLang, useUrlSync } from "./_shared";

function admissionYear(): number {
  // Next admission cycle: if we're past June, assume next calendar year.
  const now = new Date();
  return now.getMonth() >= 5 ? now.getFullYear() + 1 : now.getFullYear();
}

export default function AgeIsland() {
  const [lang, setLang] = useLang();
  const [dob, setDob] = useState("");
  const yr = admissionYear();
  const [cutoff, setCutoff] = useState(`${yr}-03-31`);

  useUrlSync({ dob, cut: cutoff }, (q) => {
    const d = q.get("dob");
    const c = q.get("cut");
    if (d != null) setDob(d);
    if (c != null) setCutoff(c);
  });

  const t = (en: string, bn: string) => (lang === "bn" ? bn : en);
  const res = useMemo(() => ageOn(dob, cutoff), [dob, cutoff]);
  const show = dob !== "" && res.ok;

  const labelCls = "mb-1 block text-sm font-semibold text-ink";
  const inputCls =
    "w-full rounded-2xl border border-line bg-cream px-3 py-2 text-base font-semibold text-ink outline-none focus:ring-2 focus:ring-cobalt";

  const shareText = () =>
    show ? `Age on ${cutoff}: ${res.years}y ${res.months}m ${res.days}d · guidance: ${res.guidanceClass}` : "";

  return (
    <div className="card border p-5 sm:p-6">
      <div className="mb-4 flex justify-end">
        <LangToggle lang={lang} onChange={setLang} />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <label htmlFor="dob" className="block">
          <span className={labelCls}>{t("Date of birth", "জন্ম তারিখ")}</span>
          <input id="dob" type="date" value={dob} max={cutoff} onChange={(e) => setDob(e.target.value)} className={inputCls} />
        </label>
        <label htmlFor="cut" className="block">
          <span className={labelCls}>{t("Cutoff date", "কাট-অফ তারিখ")}</span>
          <input id="cut" type="date" value={cutoff} onChange={(e) => setCutoff(e.target.value)} className={inputCls} />
        </label>
      </div>

      <div className="no-print mt-2 flex flex-wrap gap-2 text-xs">
        <button
          type="button"
          onClick={() => setCutoff(`${yr}-03-31`)}
          className="rounded-full border border-line px-3 py-1 font-semibold text-cobalt transition hover:border-cobalt"
        >
          31 Mar {yr}
        </button>
        <button
          type="button"
          onClick={() => setCutoff(`${yr}-04-01`)}
          className="rounded-full border border-line px-3 py-1 font-semibold text-cobalt transition hover:border-cobalt"
        >
          1 Apr {yr}
        </button>
      </div>

      {dob !== "" && !res.ok && <ErrorText>{res.error}</ErrorText>}

      <div aria-live="polite" className="mt-4">
        {show && (
          <div className="rounded-2xl bg-cobalt-soft p-4">
            <p className="text-sm font-medium text-muted">{t("Exact age on the cutoff date", "কাট-অফ তারিখে সঠিক বয়স")}</p>
            <p className="font-display text-3xl font-bold text-cobalt">
              {res.years} <span className="text-lg">{t("yr", "বছর")}</span> {res.months}{" "}
              <span className="text-lg">{t("mo", "মাস")}</span> {res.days}{" "}
              <span className="text-lg">{t("days", "দিন")}</span>
            </p>
            <p className="mt-2 text-sm text-ink">
              {t("Likely eligible for", "সম্ভাব্য শ্রেণি")}: <strong>{res.guidanceClass}</strong>
            </p>
            <p className="mt-2 rounded-xl bg-amber/15 px-3 py-2 text-xs text-ink">
              ⚠️{" "}
              {t(
                "Guidance only — age norms vary by state and school. Always verify with your school.",
                "শুধু নির্দেশনা — বয়স-নিয়ম রাজ্য ও স্কুলভেদে আলাদা। সবসময় স্কুলে যাচাই করো।",
              )}
            </p>
          </div>
        )}
      </div>

      <ResultActions lang={lang} shareTitle="School Admission Age — StudyMatic" getShareText={shareText} disabled={!show} />
    </div>
  );
}
