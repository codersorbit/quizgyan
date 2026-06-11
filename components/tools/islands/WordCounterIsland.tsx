"use client";

import { useMemo, useState } from "react";
import { useLang, LangToggle, tri } from "@/components/tools/islands/_shared";
import { analyze } from "@/lib/tools/logic/wordCount";

function fmtTime(seconds: number, lang: "en" | "hi" | "bn"): string {
  if (seconds < 60) {
    const unit = tri(lang, "sec", "सेकंड", "সেকেন্ড");
    return `${seconds} ${unit}`;
  }
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  const minU = tri(lang, "min", "मिनट", "মিনিট");
  const secU = tri(lang, "sec", "सेकंड", "সেকেন্ড");
  return s ? `${m} ${minU} ${s} ${secU}` : `${m} ${minU}`;
}

export default function WordCounterIsland() {
  const [lang, setLang] = useLang();
  const [text, setText] = useState("");

  const stats = useMemo(() => analyze(text), [text]);

  const cards: { label: string; value: string }[] = [
    { label: tri(lang, "Words", "शब्द", "শব্দ"), value: String(stats.words) },
    { label: tri(lang, "Characters", "वर्ण", "অক্ষর"), value: String(stats.charsWithSpaces) },
    { label: tri(lang, "Characters (no spaces)", "वर्ण (बिना स्पेस)", "অক্ষর (স্পেস ছাড়া)"), value: String(stats.charsNoSpaces) },
    { label: tri(lang, "Sentences", "वाक्य", "বাক্য"), value: String(stats.sentences) },
    { label: tri(lang, "Paragraphs", "अनुच्छेद", "অনুচ্ছেদ"), value: String(stats.paragraphs) },
    { label: tri(lang, "Reading time", "पढ़ने का समय", "পড়ার সময়"), value: fmtTime(stats.readingSeconds, lang) },
    { label: tri(lang, "Speaking time", "बोलने का समय", "বলার সময়"), value: fmtTime(stats.speakingSeconds, lang) },
    { label: tri(lang, "Avg word length", "औसत शब्द लंबाई", "গড় শব্দ দৈর্ঘ্য"), value: stats.avgWordLength ? String(stats.avgWordLength) : "—" },
  ];

  return (
    <div className="space-y-4">
      <div className="no-print flex items-center justify-between gap-3">
        <span className="text-sm font-semibold text-ink">
          {tri(lang, "Type or paste your text", "अपना टेक्स्ट टाइप या पेस्ट करें", "তোমার লেখা টাইপ বা পেস্ট করো")}
        </span>
        <LangToggle lang={lang} onChange={setLang} />
      </div>

      <label htmlFor="wc-input" className="sr-only">
        {tri(lang, "Text to count", "गिनने के लिए टेक्स्ट", "গণনার জন্য লেখা")}
      </label>
      <textarea
        id="wc-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={9}
        placeholder={tri(
          lang,
          "Start typing, or paste an essay or assignment here…",
          "टाइप करना शुरू करें, या यहाँ निबंध/असाइनमेंट पेस्ट करें…",
          "টাইপ করা শুরু করো, বা এখানে রচনা/অ্যাসাইনমেন্ট পেস্ট করো…",
        )}
        className="w-full rounded-2xl border border-line bg-card px-4 py-3 text-ink outline-none focus:ring-2 focus:ring-cobalt"
      />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs text-muted">
          🔒 {tri(
            lang,
            "Everything is counted in your browser — your text never leaves your device.",
            "सब कुछ आपके ब्राउज़र में गिना जाता है — आपका टेक्स्ट आपके डिवाइस से बाहर नहीं जाता।",
            "সবকিছু তোমার ব্রাউজারেই গোনা হয় — তোমার লেখা ডিভাইস ছেড়ে কোথাও যায় না।",
          )}
        </p>
        {text && (
          <button
            type="button"
            onClick={() => setText("")}
            className="no-print rounded-full border border-line px-4 py-1.5 text-sm font-semibold text-cobalt transition hover:border-cobalt"
          >
            {tri(lang, "Clear", "साफ़ करें", "মুছে ফেলো")}
          </button>
        )}
      </div>

      <div
        aria-live="polite"
        className="grid grid-cols-2 gap-2.5 sm:grid-cols-4"
      >
        {cards.map((c) => (
          <div key={c.label} className="rounded-2xl border border-line bg-card p-3 text-center">
            <div className="font-display text-2xl font-bold tabular-nums text-cobalt">{c.value}</div>
            <div className="mt-0.5 text-xs font-semibold text-muted">{c.label}</div>
          </div>
        ))}
      </div>

      {stats.longestWord && (
        <p className="text-sm text-muted">
          <span className="font-semibold text-ink">{tri(lang, "Longest word", "सबसे लंबा शब्द", "দীর্ঘতম শব্দ")}: </span>
          {stats.longestWord}
        </p>
      )}
    </div>
  );
}
