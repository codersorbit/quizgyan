"use client";

import { useMemo, useState } from "react";
import { lcmHcf, factorString } from "@/lib/tools/logic/lcmhcf";
import { LangToggle, ErrorText, ResultActions, useLang, useT, useUrlSync } from "./_shared";

type Method = "prime" | "division";

export default function LcmHcfIsland() {
  const [lang, setLang] = useLang();
  const [text, setText] = useState("12, 18");
  const [method, setMethod] = useState<Method>("prime");

  useUrlSync({ n: text }, (q) => {
    const n = q.get("n");
    if (n != null) setText(n);
  });

  const t = useT(lang);
  const nums = useMemo(
    () => text.split(/[\s,]+/).map((x) => x.trim()).filter(Boolean).map(Number),
    [text],
  );
  const res = useMemo(() => lcmHcf(nums), [nums]);
  const show = res.ok;

  const shareText = () => (show ? `${res.numbers.join(", ")} → HCF ${res.hcf}, LCM ${res.lcm}` : "");

  return (
    <div className="card border p-5 sm:p-6">
      <div className="mb-4 flex justify-end">
        <LangToggle lang={lang} onChange={setLang} />
      </div>

      <label htmlFor="lcm-nums" className="block">
        <span className="mb-1 block text-sm font-semibold text-ink">{t("Numbers (2–5, comma separated)", "সংখ্যা (২–৫টি, কমা দিয়ে)")}</span>
        <input id="lcm-nums" type="text" inputMode="numeric" value={text} onChange={(e) => setText(e.target.value)} placeholder="12, 18, 24"
          className="w-full rounded-2xl border border-line bg-cream px-3 py-2 text-lg font-semibold text-ink outline-none focus:ring-2 focus:ring-cobalt" />
      </label>

      {text.trim() !== "" && !res.ok && <ErrorText>{res.error}</ErrorText>}

      <div aria-live="polite" className="mt-4">
        {show && (
          <>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-cobalt-soft p-4 text-center">
                <p className="text-sm font-medium text-muted">{t("HCF (GCD)", "গসাগু")}</p>
                <p className="font-display text-4xl font-bold text-cobalt">{res.hcf}</p>
              </div>
              <div className="rounded-2xl bg-green/10 p-4 text-center">
                <p className="text-sm font-medium text-muted">{t("LCM", "লসাগু")}</p>
                <p className="font-display text-4xl font-bold text-green">{res.lcm}</p>
              </div>
            </div>

            <div className="mt-4 inline-flex rounded-full border border-line bg-cream p-0.5 text-sm font-semibold">
              {([["prime", t("Prime factors", "মৌলিক উৎপাদক")], ["division", t("Division method", "ভাগ পদ্ধতি")]] as const).map(([m, l]) => (
                <button key={m} type="button" aria-pressed={method === m} onClick={() => setMethod(m)}
                  className={`rounded-full px-3 py-1 transition ${method === m ? "bg-ink text-white" : "text-muted hover:text-ink"}`}>{l}</button>
              ))}
            </div>

            {method === "prime" ? (
              <div className="mt-3 rounded-2xl border border-line bg-cream p-4 text-sm">
                {res.factors.map((f) => (
                  <p key={f.n} className="py-0.5 text-ink">
                    <strong>{f.n}</strong> = {factorString(f.factors)}
                  </p>
                ))}
                <p className="mt-2 text-muted">
                  {t("HCF = product of common primes (lowest powers); LCM = product of all primes (highest powers).",
                     "গসাগু = সাধারণ মৌলিক উৎপাদকের (সর্বনিম্ন ঘাত) গুণফল; লসাগু = সব মৌলিক উৎপাদকের (সর্বোচ্চ ঘাত) গুণফল।")}
                </p>
              </div>
            ) : (
              <div className="mt-3 overflow-x-auto rounded-2xl border border-line bg-cream p-4">
                <table className="w-full text-center text-sm tabular-nums">
                  <tbody>
                    {res.divisionRows.map((row, i) => (
                      <tr key={i} className="border-b border-line last:border-0">
                        <td className="py-1 pr-3 text-right font-bold text-cobalt">{row[0]}</td>
                        <td className="py-1 pl-3 text-left text-ink">{row.slice(1).join("   ")}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="mt-2 text-xs text-muted">{t("Divide by a prime that goes into at least one number, until all become 1.", "অন্তত একটি সংখ্যাকে ভাগ করে এমন মৌলিক সংখ্যা দিয়ে ভাগ করো, যতক্ষণ না সব ১ হয়।")}</p>
              </div>
            )}
          </>
        )}
      </div>

      <ResultActions lang={lang} shareTitle="LCM & HCF Calculator — StudyMatic" getShareText={shareText} disabled={!show} />
    </div>
  );
}
