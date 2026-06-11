"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useLang, LangToggle, tri } from "@/components/tools/islands/_shared";
import {
  TYPING_PASSAGES,
  TIMED_OPTIONS,
  compareTyped,
  computeStats,
  type TypingStats,
} from "@/lib/tools/logic/typingTest";

type Phase = "ready" | "running" | "done";
type Mode = "timed" | "full";

export default function TypingTestIsland() {
  const [lang, setLang] = useLang();
  const passages = TYPING_PASSAGES[lang];

  const [idx, setIdx] = useState(0);
  const passage = passages[idx % passages.length];

  const [mode, setMode] = useState<Mode>("timed");
  const [limit, setLimit] = useState<number>(60);
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState<Phase>("ready");
  const [elapsed, setElapsed] = useState(0);
  const [stats, setStats] = useState<TypingStats | null>(null);
  const startRef = useRef<number>(0);
  const taRef = useRef<HTMLTextAreaElement | null>(null);

  // reset when language or passage changes
  useEffect(() => {
    setTyped("");
    setPhase("ready");
    setElapsed(0);
    setStats(null);
  }, [lang, idx, mode, limit]);

  const finish = useMemo(
    () =>
      (ms: number, finalTyped: string) => {
        const { incorrect } = compareTyped(passage, finalTyped);
        setStats(computeStats(finalTyped.length, incorrect, ms));
        setPhase("done");
      },
    [passage],
  );

  // ticking timer while running
  useEffect(() => {
    if (phase !== "running") return;
    const id = window.setInterval(() => {
      const ms = Date.now() - startRef.current;
      setElapsed(ms);
      if (mode === "timed" && ms >= limit * 1000) {
        window.clearInterval(id);
        finish(limit * 1000, taRef.current?.value ?? "");
      }
    }, 100);
    return () => window.clearInterval(id);
  }, [phase, mode, limit, finish]);

  function onType(value: string) {
    if (phase === "done") return;
    const capped = value.slice(0, passage.length);
    if (phase === "ready" && capped.length > 0) {
      startRef.current = Date.now();
      setPhase("running");
    }
    setTyped(capped);
    if (capped.length >= passage.length) {
      finish(Date.now() - startRef.current, capped);
    }
  }

  function restart(newPassage = false) {
    if (newPassage) setIdx((i) => (i + 1) % passages.length);
    setTyped("");
    setPhase("ready");
    setElapsed(0);
    setStats(null);
    requestAnimationFrame(() => taRef.current?.focus());
  }

  const live = phase === "running" ? computeStats(typed.length, compareTyped(passage, typed).incorrect, elapsed) : null;
  const remaining = mode === "timed" ? Math.max(0, limit - Math.floor(elapsed / 1000)) : null;

  return (
    <div className="space-y-4">
      <div className="no-print flex items-center justify-between gap-3">
        <span className="text-sm font-semibold text-ink">{tri(lang, "Practice typing in this language", "इस भाषा में टाइपिंग का अभ्यास करें", "এই ভাষায় টাইপিং অনুশীলন করো")}</span>
        <LangToggle lang={lang} onChange={setLang} />
      </div>

      {/* Settings */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="inline-flex rounded-full border border-line bg-cream p-0.5" role="group" aria-label={tri(lang, "Test mode", "टेस्ट मोड", "টেস্ট মোড")}>
          <button type="button" aria-pressed={mode === "timed"} onClick={() => setMode("timed")} className={`rounded-full px-3 py-1.5 text-sm font-semibold transition ${mode === "timed" ? "bg-cobalt text-white" : "text-muted hover:text-cobalt"}`}>{tri(lang, "Timed", "समयबद्ध", "সময়সীমা")}</button>
          <button type="button" aria-pressed={mode === "full"} onClick={() => setMode("full")} className={`rounded-full px-3 py-1.5 text-sm font-semibold transition ${mode === "full" ? "bg-cobalt text-white" : "text-muted hover:text-cobalt"}`}>{tri(lang, "Full passage", "पूरा गद्यांश", "পুরো অনুচ্ছেদ")}</button>
        </div>
        {mode === "timed" && (
          <div className="inline-flex rounded-full border border-line bg-cream p-0.5" role="group" aria-label={tri(lang, "Time limit", "समय सीमा", "সময়সীমা")}>
            {TIMED_OPTIONS.map((sec) => (
              <button key={sec} type="button" aria-pressed={limit === sec} onClick={() => setLimit(sec)} className={`rounded-full px-3 py-1.5 text-sm font-semibold transition ${limit === sec ? "bg-cobalt text-white" : "text-muted hover:text-cobalt"}`}>{sec / 60} {tri(lang, "min", "मिनट", "মিনিট")}</button>
            ))}
          </div>
        )}
        <button type="button" onClick={() => restart(true)} className="ml-auto rounded-full border border-dashed border-line px-3 py-1.5 text-sm font-semibold text-cobalt hover:border-cobalt">↻ {tri(lang, "New passage", "नया गद्यांश", "নতুন অনুচ্ছেদ")}</button>
      </div>

      {/* Live status */}
      <div className="flex flex-wrap items-center gap-4 rounded-2xl bg-cobalt-soft px-4 py-3 text-sm" aria-live="polite">
        {remaining !== null && phase !== "done" && (
          <Stat label={tri(lang, "Time left", "शेष समय", "বাকি সময়")} value={`${remaining}s`} />
        )}
        <Stat label={tri(lang, "WPM", "WPM", "WPM")} value={String(live?.grossWpm ?? stats?.grossWpm ?? 0)} />
        <Stat label={tri(lang, "Accuracy", "सटीकता", "নির্ভুলতা")} value={`${live?.accuracy ?? stats?.accuracy ?? 100}%`} />
        <Stat label={tri(lang, "Progress", "प्रगति", "অগ্রগতি")} value={`${Math.round((typed.length / passage.length) * 100)}%`} />
      </div>

      {/* Passage with live highlighting */}
      <div aria-hidden className="rounded-2xl border border-line bg-card p-4 text-lg leading-relaxed" style={{ fontVariantLigatures: "none" }}>
        {passage.split("").map((ch, i) => {
          let cls = "text-muted/60";
          if (i < typed.length) cls = typed[i] === ch ? "text-green" : "rounded bg-coral/20 text-coral";
          else if (i === typed.length && phase !== "done") cls = "rounded bg-cobalt/15 text-ink underline";
          return (
            <span key={i} className={cls}>{ch}</span>
          );
        })}
      </div>

      {/* Input */}
      <label htmlFor="typing-input" className="sr-only">{tri(lang, "Type the passage here", "यहाँ गद्यांश टाइप करें", "এখানে অনুচ্ছেদটি টাইপ করো")}</label>
      <textarea
        id="typing-input"
        ref={taRef}
        value={typed}
        onChange={(e) => onType(e.target.value)}
        disabled={phase === "done"}
        rows={3}
        spellCheck={false}
        autoComplete="off"
        autoCapitalize="off"
        placeholder={tri(lang, "Start typing here to begin the test…", "टेस्ट शुरू करने के लिए यहाँ टाइप करना शुरू करें…", "টেস্ট শুরু করতে এখানে টাইপ করা শুরু করো…")}
        className="w-full rounded-2xl border border-line bg-white px-4 py-3 text-lg text-ink outline-none focus:ring-2 focus:ring-cobalt disabled:opacity-60"
      />

      {/* Results */}
      {phase === "done" && stats && (
        <section className="card border p-4" aria-live="polite">
          <h3 className="font-display text-lg font-bold text-ink">{tri(lang, "Your result", "आपका परिणाम", "তোমার ফল")}</h3>
          <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            <Result label={tri(lang, "Net WPM", "नेट WPM", "নেট WPM")} value={String(stats.netWpm)} big />
            <Result label={tri(lang, "Gross WPM", "ग्रॉस WPM", "গ্রস WPM")} value={String(stats.grossWpm)} />
            <Result label={tri(lang, "Accuracy", "सटीकता", "নির্ভুলতা")} value={`${stats.accuracy}%`} />
            <Result label={tri(lang, "Errors", "त्रुटियाँ", "ভুল")} value={String(stats.errors)} />
          </div>
          <p className="mt-2 text-sm text-muted">{tri(lang, "Time", "समय", "সময়")}: {stats.seconds}s · {tri(lang, "Characters", "वर्ण", "অক্ষর")}: {stats.typed}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button type="button" onClick={() => restart(false)} className="btn-candy cobalt">{tri(lang, "Try again", "फिर कोशिश करें", "আবার চেষ্টা করো")}</button>
            <button type="button" onClick={() => restart(true)} className="rounded-full border border-line px-4 py-2 text-sm font-semibold text-cobalt hover:border-cobalt">{tri(lang, "New passage", "नया गद्यांश", "নতুন অনুচ্ছেদ")}</button>
          </div>
        </section>
      )}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-display text-xl font-bold tabular-nums text-cobalt">{value}</div>
      <div className="text-xs font-semibold text-muted">{label}</div>
    </div>
  );
}

function Result({ label, value, big }: { label: string; value: string; big?: boolean }) {
  return (
    <div className={`rounded-2xl border border-line bg-card p-3 text-center ${big ? "ring-2 ring-cobalt/30" : ""}`}>
      <div className={`font-display font-bold tabular-nums text-cobalt ${big ? "text-3xl" : "text-2xl"}`}>{value}</div>
      <div className="mt-0.5 text-xs font-semibold text-muted">{label}</div>
    </div>
  );
}
