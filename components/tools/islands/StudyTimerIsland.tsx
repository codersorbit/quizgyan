"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { LangToggle, NumberField, useLang } from "./_shared";

type Phase = "focus" | "short" | "long";

const LABELS: Record<Phase, { en: string; bn: string }> = {
  focus: { en: "Focus", bn: "মনোযোগ" },
  short: { en: "Short break", bn: "ছোট বিরতি" },
  long: { en: "Long break", bn: "বড় বিরতি" },
};

export default function StudyTimerIsland() {
  const [lang, setLang] = useLang();
  const [focusMin, setFocusMin] = useState("25");
  const [shortMin, setShortMin] = useState("5");
  const [longMin, setLongMin] = useState("15");
  const [phase, setPhase] = useState<Phase>("focus");
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [running, setRunning] = useState(false);
  const [completed, setCompleted] = useState(0); // focus sessions done (resets on reload)
  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const t = (en: string, bn: string) => (lang === "bn" ? bn : en);
  const phaseLen = useCallback(
    (p: Phase) => (p === "focus" ? Number(focusMin) : p === "short" ? Number(shortMin) : Number(longMin)) * 60,
    [focusMin, shortMin, longMin],
  );

  // Keep the clock in sync when durations change while paused.
  useEffect(() => {
    if (!running) setSecondsLeft(Math.max(1, phaseLen(phase)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusMin, shortMin, longMin, phase]);

  const chime = useCallback(() => {
    try {
      const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new Ctx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = "sine";
      osc.frequency.value = 880;
      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.3, ctx.currentTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
      osc.start();
      osc.stop(ctx.currentTime + 0.6);
      osc.onended = () => ctx.close();
    } catch {
      /* audio not available — ignore */
    }
  }, []);

  const nextPhase = useCallback(() => {
    chime();
    if (typeof Notification !== "undefined" && Notification.permission === "granted") {
      new Notification(t("Time's up!", "সময় শেষ!"), { body: t(LABELS[phase].en, LABELS[phase].bn) });
    }
    if (phase === "focus") {
      const done = completed + 1;
      setCompleted(done);
      const np: Phase = done % 4 === 0 ? "long" : "short";
      setPhase(np);
      setSecondsLeft(phaseLen(np));
    } else {
      setPhase("focus");
      setSecondsLeft(phaseLen("focus"));
    }
  }, [chime, phase, completed, phaseLen, t]);

  useEffect(() => {
    if (!running) return;
    tickRef.current = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          nextPhase();
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => {
      if (tickRef.current) clearInterval(tickRef.current);
    };
  }, [running, nextPhase]);

  const mm = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const ss = String(secondsLeft % 60).padStart(2, "0");

  // Reflect countdown in the tab title while running.
  useEffect(() => {
    if (running) document.title = `${mm}:${ss} · ${t(LABELS[phase].en, LABELS[phase].bn)}`;
    return () => {
      document.title = "StudyMatic";
    };
  }, [running, mm, ss, phase, t]);

  const reset = () => {
    setRunning(false);
    setPhase("focus");
    setSecondsLeft(phaseLen("focus"));
  };

  const askNotify = () => {
    if (typeof Notification !== "undefined" && Notification.permission === "default") Notification.requestPermission();
  };

  const ring = phase === "focus" ? "text-cobalt" : phase === "short" ? "text-green" : "text-violet";

  return (
    <div className="card border p-5 sm:p-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex rounded-full border border-line bg-cream p-0.5 text-sm font-semibold">
          {(Object.keys(LABELS) as Phase[]).map((p) => (
            <button key={p} type="button" aria-pressed={phase === p}
              onClick={() => { setPhase(p); setRunning(false); setSecondsLeft(phaseLen(p)); }}
              className={`rounded-full px-3 py-1 transition ${phase === p ? "bg-cobalt text-white shadow-sm" : "text-muted hover:text-ink"}`}>
              {t(LABELS[p].en, LABELS[p].bn)}
            </button>
          ))}
        </div>
        <LangToggle lang={lang} onChange={setLang} />
      </div>

      <div className="rounded-2xl bg-cobalt-soft p-6 text-center" aria-live="polite">
        <p className="text-sm font-semibold text-muted">{t(LABELS[phase].en, LABELS[phase].bn)}</p>
        <p className={`font-display text-6xl font-bold tabular-nums ${ring}`}>{mm}:{ss}</p>
        <p className="mt-1 text-sm text-ink">🍅 {t("Focus sessions done", "শেষ হওয়া সেশন")}: <strong>{completed}</strong></p>
        <p className="text-xs text-muted">{t("(streak resets if you reload)", "(রিলোড করলে শূন্য হয়ে যাবে)")}</p>
      </div>

      <div className="no-print mt-4 flex flex-wrap gap-2">
        <button type="button" onClick={() => { setRunning((r) => !r); askNotify(); }}
          className="rounded-full bg-cobalt px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-105">
          {running ? t("Pause", "থামাও") : t("Start", "শুরু")}
        </button>
        <button type="button" onClick={reset} className="rounded-full border border-line bg-card px-5 py-2 text-sm font-semibold text-ink transition hover:border-cobalt">
          {t("Reset", "রিসেট")}
        </button>
      </div>

      <details className="no-print mt-5 rounded-2xl border border-line bg-cream p-4">
        <summary className="cursor-pointer text-sm font-semibold text-ink">{t("Customise durations", "সময় বদলাও")}</summary>
        <div className="mt-3 grid grid-cols-3 gap-3">
          <NumberField id="st-focus" label={t("Focus", "মনোযোগ")} value={focusMin} onChange={setFocusMin} min={1} max={120} suffix={t("min", "মি")} />
          <NumberField id="st-short" label={t("Short", "ছোট")} value={shortMin} onChange={setShortMin} min={1} max={60} suffix={t("min", "মি")} />
          <NumberField id="st-long" label={t("Long", "বড়")} value={longMin} onChange={setLongMin} min={1} max={60} suffix={t("min", "মি")} />
        </div>
        <p className="mt-2 text-xs text-muted">{t("A long break follows every 4 focus sessions.", "প্রতি ৪টি মনোযোগ সেশনের পর একটি বড় বিরতি আসে।")}</p>
      </details>
    </div>
  );
}
