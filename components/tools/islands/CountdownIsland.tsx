"use client";

import { useEffect, useMemo, useState } from "react";
import { timeLeft, studyHours } from "@/lib/tools/logic/age";
import { LangToggle, ErrorText, ResultActions, useLang, useUrlSync } from "./_shared";

/**
 * TODO (maintainer): fill these in once official date sheets are published.
 * Leave dates empty ("") to hide a preset button. Format: "YYYY-MM-DD".
 */
const EXAM_PRESETS: { label: string; date: string }[] = [
  { label: "CBSE Class 10 Boards", date: "" }, // TODO: set first-paper date
  { label: "WB Madhyamik", date: "" }, // TODO: set first-paper date
];

export default function CountdownIsland() {
  const [lang, setLang] = useLang();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [perDay, setPerDay] = useState("2");
  const [now, setNow] = useState(() => Date.now());

  useUrlSync({ name, date, hpd: perDay }, (q) => {
    const n = q.get("name");
    const d = q.get("date");
    const h = q.get("hpd");
    if (n != null) setName(n);
    if (d != null) setDate(d);
    if (h != null) setPerDay(h);
  });

  // Tick every second while mounted.
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const t = (en: string, bn: string) => (lang === "bn" ? bn : en);
  const cd = useMemo(() => timeLeft(date, now), [date, now]);
  const show = date !== "" && cd.ok;
  const hours = studyHours(cd.days, Number(perDay) || 2);

  const labelCls = "mb-1 block text-sm font-semibold text-ink";
  const inputCls =
    "w-full rounded-2xl border border-line bg-cream px-3 py-2 text-base font-semibold text-ink outline-none focus:ring-2 focus:ring-cobalt";

  const shareText = () => {
    if (!show) return "";
    const who = name.trim() || t("Exam", "পরীক্ষা");
    if (cd.past) return `${who}: the day has arrived!`;
    return `${who} in ${cd.days}d ${cd.hours}h ${cd.minutes}m · ~${hours} study hours left`;
  };

  const Box = ({ v, l }: { v: number; l: string }) => (
    <div className="rounded-2xl bg-white px-3 py-3 text-center shadow-sm">
      <div className="font-display text-3xl font-bold text-cobalt tabular-nums sm:text-4xl">
        {String(v).padStart(2, "0")}
      </div>
      <div className="text-[11px] font-semibold uppercase tracking-wide text-muted">{l}</div>
    </div>
  );

  return (
    <div className="card border p-5 sm:p-6">
      <div className="mb-4 flex justify-end">
        <LangToggle lang={lang} onChange={setLang} />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <label htmlFor="exam-name" className="block">
          <span className={labelCls}>{t("Exam name", "পরীক্ষার নাম")}</span>
          <input
            id="exam-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t("e.g. Maths Final", "যেমন অঙ্ক পরীক্ষা")}
            className={inputCls}
          />
        </label>
        <label htmlFor="exam-date" className="block">
          <span className={labelCls}>{t("Exam date", "পরীক্ষার তারিখ")}</span>
          <input id="exam-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} className={inputCls} />
        </label>
      </div>

      {EXAM_PRESETS.some((p) => p.date) && (
        <div className="no-print mt-2 flex flex-wrap gap-2 text-xs">
          {EXAM_PRESETS.filter((p) => p.date).map((p) => (
            <button
              key={p.label}
              type="button"
              onClick={() => {
                setName(p.label);
                setDate(p.date);
              }}
              className="rounded-full border border-line px-3 py-1 font-semibold text-cobalt transition hover:border-cobalt"
            >
              {p.label}
            </button>
          ))}
        </div>
      )}

      {date !== "" && !cd.ok && <ErrorText>{cd.error}</ErrorText>}

      <div aria-live="polite" className="mt-4">
        {show && (
          <div className="rounded-2xl bg-cobalt-soft p-4">
            {name.trim() && <p className="mb-2 font-semibold text-ink">{name.trim()}</p>}
            {cd.past ? (
              <p className="font-display text-2xl font-bold text-green">🎉 {t("The day has arrived — all the best!", "দিনটা এসে গেছে — শুভকামনা!")}</p>
            ) : (
              <>
                <div className="grid grid-cols-4 gap-2">
                  <Box v={cd.days} l={t("days", "দিন")} />
                  <Box v={cd.hours} l={t("hrs", "ঘণ্টা")} />
                  <Box v={cd.minutes} l={t("min", "মিনিট")} />
                  <Box v={cd.seconds} l={t("sec", "সেকেন্ড")} />
                </div>
                <p className="mt-3 text-sm text-ink">
                  📚 <strong>{cd.days}</strong> {t("study days left", "পড়ার দিন বাকি")} —{" "}
                  {t("about", "প্রায়")} <strong>{hours}</strong> {t("hours at", "ঘণ্টা, দিনে")} {perDay}{" "}
                  {t("hrs/day.", "ঘণ্টা হিসেবে।")}
                </p>
              </>
            )}
          </div>
        )}
      </div>

      <div className="no-print mt-3 max-w-[14rem]">
        <label htmlFor="hpd" className="block">
          <span className="mb-1 block text-sm font-semibold text-ink">{t("Study hours per day", "দিনে পড়ার ঘণ্টা")}</span>
          <input
            id="hpd"
            type="number"
            inputMode="numeric"
            min={1}
            max={16}
            value={perDay}
            onChange={(e) => setPerDay(e.target.value)}
            className="w-full rounded-2xl border border-line bg-cream px-3 py-2 text-base font-semibold text-ink outline-none focus:ring-2 focus:ring-cobalt [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none"
          />
        </label>
      </div>

      <ResultActions lang={lang} shareTitle="Exam Countdown — StudyMatic" getShareText={shareText} disabled={!show} />
    </div>
  );
}
