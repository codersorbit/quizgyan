"use client";

import { useMemo, useState } from "react";
import { CATEGORIES, getCategory, convert, type Category } from "@/lib/tools/logic/units";
import { LangToggle, ErrorText, ResultActions, useLang, useUrlSync } from "./_shared";

export default function UnitConverterIsland() {
  const [lang, setLang] = useLang();
  const [cat, setCat] = useState<Category>("length");
  const [from, setFrom] = useState("km");
  const [to, setTo] = useState("m");
  const [value, setValue] = useState("1");

  useUrlSync({ cat, from, to, v: value }, (q) => {
    const c = q.get("cat") as Category | null;
    if (c && CATEGORIES.some((x) => x.key === c)) {
      setCat(c);
      const units = getCategory(c).units;
      setFrom(q.get("from") && units.some((u) => u.id === q.get("from")) ? q.get("from")! : units[0].id);
      setTo(q.get("to") && units.some((u) => u.id === q.get("to")) ? q.get("to")! : units[1]?.id ?? units[0].id);
    }
    const v = q.get("v");
    if (v != null) setValue(v);
  });

  const t = (en: string, bn: string) => (lang === "bn" ? bn : en);
  const category = getCategory(cat);
  const res = useMemo(() => convert(value, cat, from, to), [value, cat, from, to]);
  const show = value.trim() !== "" && res.ok;

  const changeCat = (c: Category) => {
    setCat(c);
    const units = getCategory(c).units;
    setFrom(units[0].id);
    setTo(units[1]?.id ?? units[0].id);
  };

  const selCls = "w-full rounded-2xl border border-line bg-cream px-3 py-2 text-base font-semibold text-ink outline-none focus:ring-2 focus:ring-cobalt";
  const shareText = () => (show ? `${value} ${from} = ${res.value} ${to}` : "");

  return (
    <div className="card border p-5 sm:p-6">
      <div className="mb-4 flex justify-end">
        <LangToggle lang={lang} onChange={setLang} />
      </div>

      <div className="no-print flex flex-wrap gap-2">
        {CATEGORIES.map((c) => (
          <button key={c.key} type="button" aria-pressed={cat === c.key} onClick={() => changeCat(c.key)}
            className={`rounded-full border px-3 py-1 text-sm font-semibold transition ${cat === c.key ? "border-cobalt bg-cobalt text-white" : "border-line text-muted hover:border-cobalt"}`}>{c.label}</button>
        ))}
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-end">
        <div>
          <label htmlFor="uc-val" className="mb-1 block text-sm font-semibold text-ink">{t("Value", "মান")}</label>
          <input id="uc-val" type="number" inputMode="decimal" value={value} onChange={(e) => setValue(e.target.value)}
            className="w-full rounded-2xl border border-line bg-cream px-3 py-2 text-lg font-semibold text-ink outline-none focus:ring-2 focus:ring-cobalt [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none" />
          <label htmlFor="uc-from" className="sr-only">{t("From unit", "যে একক থেকে")}</label>
          <select id="uc-from" value={from} onChange={(e) => setFrom(e.target.value)} className={`${selCls} mt-2`}>
            {category.units.map((u) => (<option key={u.id} value={u.id}>{u.label}</option>))}
          </select>
        </div>

        <button type="button" onClick={() => { setFrom(to); setTo(from); }} aria-label={t("Swap units", "একক অদলবদল")}
          className="no-print mx-auto grid h-10 w-10 place-items-center rounded-full border border-line bg-card text-cobalt transition hover:border-cobalt">⇄</button>

        <div>
          <label htmlFor="uc-out" className="mb-1 block text-sm font-semibold text-ink">{t("Result", "ফল")}</label>
          <output id="uc-out" aria-live="polite" className="block w-full truncate rounded-2xl bg-cobalt-soft px-3 py-2 text-lg font-bold text-cobalt">
            {show ? res.value : "—"}
          </output>
          <label htmlFor="uc-to" className="sr-only">{t("To unit", "যে এককে")}</label>
          <select id="uc-to" value={to} onChange={(e) => setTo(e.target.value)} className={`${selCls} mt-2`}>
            {category.units.map((u) => (<option key={u.id} value={u.id}>{u.label}</option>))}
          </select>
        </div>
      </div>

      {value.trim() !== "" && !res.ok && <ErrorText>{res.error}</ErrorText>}

      {show && (
        <p className="mt-3 rounded-2xl bg-cream p-3 text-sm text-ink">{res.note}</p>
      )}

      <ResultActions lang={lang} shareTitle="Unit Converter — StudyMatic" getShareText={shareText} disabled={!show} />
    </div>
  );
}
