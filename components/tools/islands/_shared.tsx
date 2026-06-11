"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import type { Lang } from "@/lib/tools/types";

export { pick } from "@/lib/tools/types";
export type { Lang };

/* --------------------------- URL state sync ----------------------------- */
/**
 * Keeps a tool's inputs in the URL query string (shareable, indexable) without
 * pulling in next/navigation (which would force a client bailout on these
 * statically-rendered pages). Hydrates once from window.location on mount,
 * then mirrors `params` into the URL with history.replaceState.
 */
export function useUrlSync(
  params: Record<string, string>,
  onHydrate: (q: URLSearchParams) => void,
) {
  const hydrated = useRef(false);
  const onHydrateRef = useRef(onHydrate);
  onHydrateRef.current = onHydrate;

  useEffect(() => {
    if (hydrated.current) return;
    onHydrateRef.current(new URLSearchParams(window.location.search));
    hydrated.current = true;
  }, []);

  const serialized = JSON.stringify(params);
  useEffect(() => {
    if (!hydrated.current) return;
    const sp = new URLSearchParams(window.location.search);
    for (const [k, v] of Object.entries(params)) {
      if (v === "" || v == null) sp.delete(k);
      else sp.set(k, v);
    }
    const qs = sp.toString();
    const url = qs ? `${window.location.pathname}?${qs}` : window.location.pathname;
    window.history.replaceState(null, "", url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serialized]);
}

/* ------------------------------ Language -------------------------------- */

function readLangFromUrl(): Lang {
  if (typeof window === "undefined") return "en";
  const q = new URLSearchParams(window.location.search).get("lang");
  return q === "bn" ? "bn" : q === "hi" ? "hi" : "en";
}

// One in-page event so every useLang() instance (toggles + links) stays in
// sync when any of them changes the language. Stored in the URL only.
const LANG_EVENT = "smx:lang";

/** Read the initial language from ?lang=hi|bn (defaults to English). */
export function useLang(): [Lang, (l: Lang) => void] {
  const [lang, setLang] = useState<Lang>("en");
  useEffect(() => {
    setLang(readLangFromUrl());
    const onChange = (e: Event) => setLang((e as CustomEvent<Lang>).detail);
    window.addEventListener(LANG_EVENT, onChange);
    return () => window.removeEventListener(LANG_EVENT, onChange);
  }, []);
  const set = useCallback((l: Lang) => {
    setLang(l);
    const sp = new URLSearchParams(window.location.search);
    if (l === "en") sp.delete("lang");
    else sp.set("lang", l);
    const qs = sp.toString();
    window.history.replaceState(null, "", qs ? `${window.location.pathname}?${qs}` : window.location.pathname);
    window.dispatchEvent(new CustomEvent(LANG_EVENT, { detail: l }));
  }, []);
  return [lang, set];
}

/** Append the active language to an internal path (English stays clean). */
export function withLang(path: string, lang: Lang): string {
  if (lang === "en") return path;
  const sep = path.includes("?") ? "&" : "?";
  return /[?&]lang=/.test(path) ? path : `${path}${sep}lang=${lang}`;
}

/** Three-way picker for inline strings: tri(lang, english, hindi, bangla). */
export function tri(lang: Lang, en: string, hi: string, bn: string): string {
  return lang === "bn" ? bn : lang === "hi" ? hi : en;
}

/**
 * Returns a translator t(en, bn) for island UI microcopy. English and Bangla
 * are supplied at each call site (as before); Hindi is looked up from the
 * shared UI_HI dictionary, falling back to English if a key is missing.
 */
export function useT(lang: Lang) {
  return (en: string, bn: string): string =>
    lang === "bn" ? bn : lang === "hi" ? UI_HI[en] ?? en : en;
}

/* ------------------------------ UI atoms -------------------------------- */

export function LangToggle({ lang, onChange }: { lang: Lang; onChange: (l: Lang) => void }) {
  const opts: { id: Lang; label: string; aria: string }[] = [
    { id: "en", label: "EN", aria: "English" },
    { id: "hi", label: "हिं", aria: "हिन्दी (Hindi)" },
    { id: "bn", label: "বাং", aria: "বাংলা (Bangla)" },
  ];
  return (
    <div className="no-print inline-flex rounded-full border border-line bg-cream p-0.5 text-sm font-semibold">
      {opts.map((o) => (
        <button
          key={o.id}
          type="button"
          aria-pressed={lang === o.id}
          aria-label={o.aria}
          onClick={() => onChange(o.id)}
          className={`rounded-full px-2.5 py-1 transition ${
            lang === o.id ? "bg-cobalt text-white shadow-sm" : "text-muted hover:text-ink"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export function ErrorText({ children }: { children: React.ReactNode }) {
  if (!children) return null;
  return (
    <p role="alert" className="mt-2 text-sm font-medium text-coral">
      {children}
    </p>
  );
}

/** Labelled numeric input with consistent styling and a11y wiring. */
export function NumberField(props: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
  inputMode?: "numeric" | "decimal";
  suffix?: string;
}) {
  const { id, label, value, onChange, placeholder, min, max, step, inputMode = "decimal", suffix } = props;
  return (
    <label htmlFor={id} className="block">
      <span className="mb-1 block text-sm font-semibold text-ink">{label}</span>
      <span className="flex items-center gap-2 rounded-2xl border border-line bg-cream px-3 py-2 focus-within:ring-2 focus-within:ring-cobalt">
        <input
          id={id}
          type="number"
          inputMode={inputMode}
          value={value}
          min={min}
          max={max}
          step={step}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent text-lg font-semibold text-ink outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none"
        />
        {suffix && <span className="shrink-0 text-sm font-medium text-muted">{suffix}</span>}
      </span>
    </label>
  );
}

/* --------------------------- Result actions ----------------------------- */

export function ResultActions({
  lang,
  shareTitle,
  getShareText,
  disabled,
}: {
  lang: Lang;
  shareTitle: string;
  getShareText: () => string;
  disabled?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(getShareText());
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard blocked — ignore */
    }
  }, [getShareText]);

  const share = useCallback(async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const text = getShareText();
    if (navigator.share) {
      try {
        await navigator.share({ title: shareTitle, text, url });
        return;
      } catch {
        /* user cancelled — fall through to copy */
      }
    }
    try {
      await navigator.clipboard.writeText(`${text}\n${url}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* ignore */
    }
  }, [getShareText, shareTitle]);

  return (
    <div className="no-print mt-4 flex flex-wrap gap-2">
      <button
        type="button"
        onClick={copy}
        disabled={disabled}
        className="rounded-full bg-cobalt px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-105 disabled:opacity-40"
      >
        {copied
          ? tri(lang, "Copied ✓", "कॉपी हुआ ✓", "কপি হয়েছে ✓")
          : tri(lang, "Copy result", "परिणाम कॉपी करें", "ফল কপি")}
      </button>
      <button
        type="button"
        onClick={share}
        disabled={disabled}
        className="rounded-full border border-line bg-card px-4 py-2 text-sm font-semibold text-ink transition hover:border-cobalt disabled:opacity-40"
      >
        {tri(lang, "Share", "शेयर", "শেয়ার")}
      </button>
      <button
        type="button"
        onClick={() => window.print()}
        disabled={disabled}
        className="rounded-full border border-line bg-card px-4 py-2 text-sm font-semibold text-ink transition hover:border-cobalt disabled:opacity-40"
      >
        {tri(lang, "Print", "प्रिंट", "প্রিন্ট")}
      </button>
    </div>
  );
}

/* ----------------------- Hindi microcopy dictionary --------------------- */
/* Keys are the exact English strings used in island t("…", "…") calls.
   Missing keys fall back to English, so the UI never breaks. */
export const UI_HI: Record<string, string> = {
  "% → CGPA": "% → सीजीपीए",
  "(streak resets if you reload)": "(रीलोड करने पर रीसेट हो जाएगा)",
  "A 100% target can't be reached once a class is missed.": "एक भी क्लास छूटने पर 100% लक्ष्य पाना संभव नहीं।",
  "A long break follows every 4 focus sessions.": "हर 4 फोकस सेशन के बाद एक लंबा ब्रेक आता है।",
  "Add section": "सेक्शन जोड़ें",
  "Add subject": "विषय जोड़ें",
  "Answer": "उत्तर",
  "As a decimal": "दशमलव में",
  "Attend the next": "अगली",
  "Average": "औसत",
  "Balanced": "संतुलित",
  "Below pass": "पास से कम",
  "Below pass mark": "पास अंक से कम",
  "Best": "सर्वश्रेष्ठ",
  "CBSE grade": "सीबीएसई ग्रेड",
  "CBSE grade table": "सीबीएसई ग्रेड तालिका",
  "CBSE grading table": "सीबीएसई ग्रेडिंग तालिका",
  "CGPA": "सीजीपीए",
  "CGPA × 9.5": "सीजीपीए × 9.5",
  "CGPA → %": "सीजीपीए → %",
  "Calculate": "गणना",
  "Classes attended": "उपस्थित क्लास",
  "Classes held": "कुल क्लास",
  "Cost price (CP)": "क्रय मूल्य (CP)",
  "Count": "संख्या",
  "Customise durations": "समय बदलें",
  "Cutoff date": "कट-ऑफ तिथि",
  "Dashed line = target": "टूटी रेखा = लक्ष्य",
  "Date of birth": "जन्म तिथि",
  "Divide by a prime that goes into at least one number, until all become 1.":
    "किसी ऐसी अभाज्य संख्या से भाग दें जो कम से कम एक संख्या को विभाजित करे, जब तक सभी 1 न हो जाएँ।",
  "Division method": "भाग विधि",
  "Download CSV": "CSV डाउनलोड करें",
  "Duration (min)": "अवधि (मिनट)",
  "Enter three values to solve the fourth.": "चौथा निकालने के लिए तीन मान भरें।",
  "Exact age on the cutoff date": "कट-ऑफ तिथि पर सटीक आयु",
  "Exam": "परीक्षा",
  "Exam date": "परीक्षा तिथि",
  "Exam name": "परीक्षा का नाम",
  "Fail": "फेल",
  "Failed": "फेल",
  "Fill any three; leave the one you want to find blank.": "कोई भी तीन भरें; जो निकालना है उसे खाली छोड़ें।",
  "Focus": "फोकस",
  "Focus sessions done": "पूरे हुए फोकस सेशन",
  "Formula: attendance % = attended ÷ held × 100. To reach a target t, attend x where (attended + x) ÷ (held + x) ≥ t.":
    "सूत्र: उपस्थिति % = उपस्थित ÷ कुल × 100। लक्ष्य t पाने के लिए ऐसी x क्लास करें जहाँ (उपस्थित + x) ÷ (कुल + x) ≥ t हो।",
  "From %": "% से",
  "From marks": "अंक से",
  "From unit": "जिस इकाई से",
  "Grade": "ग्रेड",
  "Grade band": "ग्रेड बैंड",
  "Grade distribution": "ग्रेड वितरण",
  "Grade point": "ग्रेड पॉइंट",
  "Guidance only — age norms vary by state and school. Always verify with your school.":
    "केवल मार्गदर्शन — आयु नियम राज्य व स्कूल के अनुसार बदलते हैं। हमेशा अपने स्कूल से पुष्टि करें।",
  "HCF (GCD)": "म.स. (HCF)",
  "HCF = product of common primes (lowest powers); LCM = product of all primes (highest powers).":
    "म.स. = सार्व अभाज्य गुणनखंडों (न्यूनतम घात) का गुणनफल; ल.स. = सभी अभाज्य गुणनखंडों (अधिकतम घात) का गुणनफल।",
  "Highest": "सर्वोच्च",
  "Interest (SI)": "ब्याज (SI)",
  "LCM": "ल.स.",
  "Leave the whole-number box empty for a simple fraction.": "साधारण भिन्न के लिए पूर्ण-संख्या वाला बॉक्स खाली रखें।",
  "Likely eligible for": "संभावित कक्षा",
  "Long": "लंबा",
  "Loss": "हानि",
  "Lowest": "न्यूनतम",
  "Many subjects": "कई विषय",
  "Marks": "अंक",
  "Marks (one student per line: Name, Marks)": "अंक (प्रति पंक्ति एक छात्र: नाम, अंक)",
  "Marks each": "प्रत्येक के अंक",
  "Marks obtained": "प्राप्त अंक",
  "Marks range": "अंक सीमा",
  "Max marks": "अधिकतम अंक",
  "Mean": "माध्य",
  "Mean = sum ÷ count =": "माध्य = योग ÷ संख्या =",
  "Median": "माध्यिका",
  "Median = middle of the sorted list.": "माध्यिका = क्रमबद्ध सूची का मध्य मान।",
  "Mode": "बहुलक",
  "Mode = the most frequent value(s).": "बहुलक = सबसे अधिक बार आने वाला मान।",
  "Name": "नाम",
  "No profit/loss": "कोई लाभ/हानि नहीं",
  "No tools match that search yet. Try another word.": "इस खोज से कोई टूल नहीं मिला। दूसरा शब्द आज़माएँ।",
  "Numbers (2–5, comma separated)": "संख्याएँ (2–5, कॉमा से अलग)",
  "One subject": "एक विषय",
  "Out of": "में से",
  "Overall CGPA": "कुल सीजीपीए",
  "Overall percentage": "कुल प्रतिशत",
  "Pace": "गति",
  "Pass": "पास",
  "Pass mark (%)": "पास अंक (%)",
  "Passed": "पास",
  "Pause": "रोकें",
  "Percentage": "प्रतिशत",
  "Point": "पॉइंट",
  "Prime factors": "अभाज्य गुणनखंड",
  "Principal": "मूलधन",
  "Principal (P)": "मूलधन (P)",
  "Profit": "लाभ",
  "Profit & loss": "लाभ-हानि",
  "Range": "परिसर",
  "Range = max − min =": "परिसर = अधिकतम − न्यूनतम =",
  "Rate": "दर",
  "Rate (R, % per year)": "दर (R, % प्रति वर्ष)",
  "Remove": "हटाएँ",
  "Remove subject": "विषय हटाएँ",
  "Reset": "रीसेट",
  "Result": "परिणाम",
  "Search tools": "टूल खोजें",
  "Search tools…": "टूल खोजें…",
  "Section": "सेक्शन",
  "Section name": "सेक्शन का नाम",
  "Sections total": "सेक्शन का कुल",
  "Selling price (SP)": "विक्रय मूल्य (SP)",
  "Separate with commas, spaces or new lines.": "कॉमा, स्पेस या नई पंक्ति से अलग करें।",
  "Short": "छोटा",
  "Simple interest": "साधारण ब्याज",
  "Simplify only": "केवल सरल करें",
  "Sorted list": "क्रमबद्ध सूची",
  "Start": "शुरू",
  "Students": "छात्र",
  "Study hours per day": "प्रतिदिन पढ़ाई के घंटे",
  "Subject": "विषय",
  "Subject name": "विषय का नाम",
  "Subjects → CGPA": "विषय → सीजीपीए",
  "Subtotal": "उप-योग",
  "Suggested time": "सुझाया समय",
  "Sum": "योग",
  "Swap units": "इकाई बदलें",
  "Target (%)": "लक्ष्य (%)",
  "The day has arrived — all the best!": "वह दिन आ गया — शुभकामनाएँ!",
  "Time": "समय",
  "Time (T, years)": "समय (T, वर्ष)",
  "Time's up!": "समय समाप्त!",
  "To unit": "जिस इकाई में",
  "Total amount": "कुल राशि",
  "Total marks": "कुल अंक",
  "Value": "मान",
  "Weakest": "सबसे कमज़ोर",
  "You can miss": "आप छोड़ सकते हैं",
  "You're above your target.": "आप अपने लक्ष्य से ऊपर हैं।",
  "Your CGPA (0–10)": "आपका सीजीपीए (0–10)",
  "Your attendance": "आपकी उपस्थिति",
  "Your numbers": "आपकी संख्याएँ",
  "Your percentage (0–100)": "आपका प्रतिशत (0–100)",
  about: "लगभग",
  add: "बढ़ाएँ",
  "and stay at or above": "और बने रहें",
  "but paper is": "पर पेपर है",
  "class(es) in a row to reach": "क्लास लगातार करें ताकि पहुँचें",
  days: "दिन",
  denominator: "हर",
  "e.g. 7, 3, 9, 3, 5": "जैसे 7, 3, 9, 3, 5",
  "e.g. Maths Final": "जैसे गणित परीक्षा",
  "grade point": "ग्रेड पॉइंट",
  "hours at": "घंटे, प्रतिदिन",
  hrs: "घंटे",
  "hrs/day.": "घंटे/दिन की दर से।",
  marks: "अंक",
  "median highlighted": "माध्यिका चिह्नित",
  min: "मिनट",
  "min per mark.": "मिनट प्रति अंक।",
  mo: "माह",
  "more class(es)": "और क्लास",
  none: "कोई नहीं",
  numerator: "अंश",
  range: "परिसर",
  remove: "घटाएँ",
  "result(s)": "परिणाम",
  sec: "सेकंड",
  "study days left": "पढ़ाई के दिन शेष",
  w: "पू",
  whole: "पूर्ण",
  yr: "वर्ष",
};
