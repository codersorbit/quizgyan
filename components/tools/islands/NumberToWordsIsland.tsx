"use client";

import { useMemo, useState } from "react";
import { useLang, LangToggle, tri } from "@/components/tools/islands/_shared";
import { numberToWords, groupDigits, parseNumberInput, type NumSystem } from "@/lib/tools/logic/numberToWords";

export default function NumberToWordsIsland() {
  const [lang, setLang] = useLang();
  const [value, setValue] = useState("");
  const [system, setSystem] = useState<NumSystem>("indian");
  const [currency, setCurrency] = useState(false);
  const [copied, setCopied] = useState(false);

  const parsed = useMemo(() => parseNumberInput(value), [value]);
  const words = useMemo(
    () => numberToWords(value, { lang, system, currency }),
    [value, lang, system, currency],
  );
  const grouped = parsed.valid ? (parsed.negative ? "-" : "") + groupDigits(parsed.intPart, system) + (parsed.decPart ? `.${parsed.decPart}` : "") : "";

  async function copy() {
    if (!words) return;
    try {
      await navigator.clipboard.writeText(words);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable */
    }
  }

  const Toggle = ({ on, onClick, children }: { on: boolean; onClick: () => void; children: React.ReactNode }) => (
    <button
      type="button"
      aria-pressed={on}
      onClick={onClick}
      className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${on ? "bg-cobalt text-white" : "text-muted hover:text-cobalt"}`}
    >
      {children}
    </button>
  );

  return (
    <div className="space-y-4">
      <div className="no-print flex items-center justify-between gap-3">
        <span className="text-sm font-semibold text-ink">
          {tri(lang, "Enter a number", "एक संख्या दर्ज करें", "একটি সংখ্যা লেখো")}
        </span>
        <LangToggle lang={lang} onChange={setLang} />
      </div>

      <label htmlFor="n2w-input" className="sr-only">
        {tri(lang, "Number to convert", "बदलने के लिए संख्या", "রূপান্তরের সংখ্যা")}
      </label>
      <input
        id="n2w-input"
        type="text"
        inputMode="decimal"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={tri(lang, "e.g. 1234567 or 1234.50", "जैसे 1234567 या 1234.50", "যেমন 1234567 বা 1234.50")}
        maxLength={31}
        className="w-full rounded-2xl border border-line bg-card px-4 py-3 text-lg text-ink outline-none focus:ring-2 focus:ring-cobalt"
      />

      <div className="flex flex-wrap gap-3">
        <div className="inline-flex rounded-full border border-line bg-cream p-0.5" role="group" aria-label={tri(lang, "Number system", "संख्या प्रणाली", "সংখ্যা পদ্ধতি")}>
          <Toggle on={system === "indian"} onClick={() => setSystem("indian")}>{tri(lang, "Indian (Lakh, Crore)", "भारतीय (लाख, करोड़)", "ভারতীয় (লাখ, কোটি)")}</Toggle>
          <Toggle on={system === "international"} onClick={() => setSystem("international")}>{tri(lang, "International", "अंतरराष्ट्रीय", "আন্তর্জাতিক")}</Toggle>
        </div>
        <div className="inline-flex rounded-full border border-line bg-cream p-0.5" role="group" aria-label={tri(lang, "Output mode", "आउटपुट मोड", "আউটপুট মোড")}>
          <Toggle on={!currency} onClick={() => setCurrency(false)}>{tri(lang, "Plain number", "सामान्य संख्या", "সাধারণ সংখ্যা")}</Toggle>
          <Toggle on={currency} onClick={() => setCurrency(true)}>{tri(lang, "Currency (₹)", "मुद्रा (₹)", "মুদ্রা (₹)")}</Toggle>
        </div>
      </div>

      <div aria-live="polite" className="min-h-[5rem] rounded-2xl border border-line bg-cobalt-soft p-5">
        {words ? (
          <>
            {grouped && <div className="text-sm font-semibold text-muted tabular-nums">{grouped}</div>}
            <p className="mt-1 font-display text-lg font-bold leading-snug text-ink">{words}</p>
            <button
              type="button"
              onClick={copy}
              className="no-print mt-3 rounded-full border border-line bg-white/70 px-4 py-1.5 text-sm font-semibold text-cobalt transition hover:border-cobalt"
            >
              {copied ? tri(lang, "Copied ✓", "कॉपी हुआ ✓", "কপি হয়েছে ✓") : tri(lang, "Copy", "कॉपी करें", "কপি করো")}
            </button>
          </>
        ) : (
          <p className="text-muted">
            {value && !parsed.valid
              ? tri(lang, "Please enter a valid number.", "कृपया एक मान्य संख्या दर्ज करें।", "অনুগ্রহ করে একটি সঠিক সংখ্যা লেখো।")
              : tri(lang, "The number in words will appear here.", "संख्या शब्दों में यहाँ दिखेगी।", "সংখ্যাটি কথায় এখানে দেখা যাবে।")}
          </p>
        )}
      </div>
    </div>
  );
}
