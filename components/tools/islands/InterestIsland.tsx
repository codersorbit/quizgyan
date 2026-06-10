"use client";

import { useMemo, useState } from "react";
import { simpleInterest, profitLoss } from "@/lib/tools/logic/interest";
import { LangToggle, NumberField, ErrorText, ResultActions, useLang, useUrlSync } from "./_shared";

type Tab = "si" | "pl";

export default function InterestIsland() {
  const [lang, setLang] = useLang();
  const [tab, setTab] = useState<Tab>("si");
  const [p, setP] = useState("");
  const [r, setR] = useState("");
  const [time, setTime] = useState("");
  const [si, setSi] = useState("");
  const [cp, setCp] = useState("");
  const [sp, setSp] = useState("");

  useUrlSync(
    tab === "si" ? { p, r, ti: time, si } : { cp, sp },
    (q) => {
      const cpv = q.get("cp");
      const spv = q.get("sp");
      if (cpv != null || spv != null) {
        setTab("pl");
        if (cpv != null) setCp(cpv);
        if (spv != null) setSp(spv);
        return;
      }
      const pv = q.get("p"), rv = q.get("r"), tv = q.get("ti"), sv = q.get("si");
      if ([pv, rv, tv, sv].some((x) => x != null)) {
        setTab("si");
        if (pv != null) setP(pv);
        if (rv != null) setR(rv);
        if (tv != null) setTime(tv);
        if (sv != null) setSi(sv);
      }
    },
  );

  const t = (en: string, bn: string) => (lang === "bn" ? bn : en);
  const siRes = useMemo(() => simpleInterest(p, r, time, si), [p, r, time, si]);
  const plRes = useMemo(() => profitLoss(cp, sp), [cp, sp]);

  const siFilled = [p, r, time, si].filter((x) => x.trim() !== "").length;
  const showSi = tab === "si" && siFilled >= 3 && siRes.ok;
  const showPl = tab === "pl" && cp.trim() !== "" && sp.trim() !== "" && plRes.ok;

  const shareText = () => {
    if (showSi) return `SI=${siRes.interest}, P=${siRes.principal}, R=${siRes.rate}%, T=${siRes.time}yr → amount ${siRes.amount}`;
    if (showPl) return plRes.kind === "none" ? `No profit or loss (CP=SP=${plRes.cp})` : `${plRes.kind === "profit" ? "Profit" : "Loss"} ${plRes.amount} (${plRes.percent}%)`;
    return "";
  };

  return (
    <div className="card border p-5 sm:p-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex rounded-full border border-line bg-cream p-0.5 text-sm font-semibold">
          {([["si", t("Simple interest", "সরল সুদ")], ["pl", t("Profit & loss", "লাভ-ক্ষতি")]] as const).map(([m, l]) => (
            <button key={m} type="button" aria-pressed={tab === m} onClick={() => setTab(m)}
              className={`rounded-full px-3 py-1 transition ${tab === m ? "bg-cobalt text-white shadow-sm" : "text-muted hover:text-ink"}`}>{l}</button>
          ))}
        </div>
        <LangToggle lang={lang} onChange={setLang} />
      </div>

      {tab === "si" ? (
        <>
          <p className="mb-2 text-xs text-muted">{t("Fill any three; leave the one you want to find blank.", "যেকোনো তিনটি দাও; যেটা বের করবে সেটা খালি রাখো।")}</p>
          <div className="grid gap-3 sm:grid-cols-2">
            <NumberField id="si-p" label={t("Principal (P)", "আসল (P)")} value={p} onChange={setP} placeholder="1000" min={0} suffix="₹" />
            <NumberField id="si-r" label={t("Rate (R, % per year)", "সুদের হার (R, %/বছর)")} value={r} onChange={setR} placeholder="5" min={0} suffix="%" />
            <NumberField id="si-t" label={t("Time (T, years)", "সময় (T, বছর)")} value={time} onChange={setTime} placeholder="2" min={0} />
            <NumberField id="si-si" label={t("Interest (SI)", "সুদ (SI)")} value={si} onChange={setSi} placeholder="—" min={0} suffix="₹" />
          </div>
          {siFilled >= 3 && !siRes.ok && <ErrorText>{siRes.error}</ErrorText>}
          {siFilled < 3 && siFilled > 0 && <ErrorText>{t("Enter three values to solve the fourth.", "চতুর্থটি বের করতে তিনটি মান দাও।")}</ErrorText>}
        </>
      ) : (
        <>
          <div className="grid gap-3 sm:grid-cols-2">
            <NumberField id="pl-cp" label={t("Cost price (CP)", "ক্রয়মূল্য (CP)")} value={cp} onChange={setCp} placeholder="200" min={0} suffix="₹" />
            <NumberField id="pl-sp" label={t("Selling price (SP)", "বিক্রয়মূল্য (SP)")} value={sp} onChange={setSp} placeholder="250" min={0} suffix="₹" />
          </div>
          {cp.trim() !== "" && sp.trim() !== "" && !plRes.ok && <ErrorText>{plRes.error}</ErrorText>}
        </>
      )}

      <div aria-live="polite" className="mt-4">
        {showSi && (
          <div className="rounded-2xl bg-cobalt-soft p-4">
            <p className="text-sm font-medium text-muted">
              {siRes.solvedFor === "SI" && t("Simple interest", "সরল সুদ")}
              {siRes.solvedFor === "P" && t("Principal", "আসল")}
              {siRes.solvedFor === "R" && t("Rate", "হার")}
              {siRes.solvedFor === "T" && t("Time", "সময়")}
            </p>
            <p className="font-display text-4xl font-bold text-cobalt">
              {siRes.solvedFor === "SI" && `₹${siRes.interest}`}
              {siRes.solvedFor === "P" && `₹${siRes.principal}`}
              {siRes.solvedFor === "R" && `${siRes.rate}%`}
              {siRes.solvedFor === "T" && `${siRes.time} ${t("yr", "বছর")}`}
            </p>
            <p className="mt-1 text-sm text-ink">{t("Total amount", "মোট পরিমাণ")}: <strong>₹{siRes.amount}</strong></p>
            <ol className="mt-3 space-y-1 text-sm text-muted">{siRes.steps.map((s, i) => (<li key={i}>{s}</li>))}</ol>
          </div>
        )}
        {showPl && (
          <div className={`rounded-2xl p-4 ${plRes.kind === "loss" ? "bg-coral/10" : "bg-green/10"}`}>
            <p className="text-sm font-medium text-muted">
              {plRes.kind === "profit" ? t("Profit", "লাভ") : plRes.kind === "loss" ? t("Loss", "ক্ষতি") : t("Result", "ফল")}
            </p>
            <p className={`font-display text-4xl font-bold ${plRes.kind === "loss" ? "text-coral" : "text-green"}`}>
              {plRes.kind === "none" ? t("No profit/loss", "লাভ-ক্ষতি নেই") : `₹${plRes.amount}`}
            </p>
            {plRes.kind !== "none" && <p className="mt-1 text-sm text-ink">{plRes.kind === "profit" ? t("Profit", "লাভ") : t("Loss", "ক্ষতি")}%: <strong>{plRes.percent}%</strong></p>}
            <ol className="mt-3 space-y-1 text-sm text-muted">{plRes.steps.map((s, i) => (<li key={i}>{s}</li>))}</ol>
          </div>
        )}
      </div>

      <ResultActions lang={lang} shareTitle="Interest & Profit–Loss — StudyMatic" getShareText={shareText} disabled={!(showSi || showPl)} />
    </div>
  );
}
