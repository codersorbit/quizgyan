"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useLang, LangToggle, useUrlSync } from "@/components/tools/islands/_shared";
import { WORKSHEET_T } from "@/lib/tools/worksheet-i18n";
import {
  DEFAULT_MARKS,
  TYPE_ORDER,
  emptyCounts,
  buildWorksheetSets,
  customToQuestion,
  answerKeyCsv,
  pickReplacement,
  type CustomQuestion,
  type QType,
  type WLang,
  type WorksheetBank,
  type WorksheetQuestion,
  type SelectionResult,
  type WorksheetSection,
} from "@/lib/tools/logic/worksheet";

/* Latin option markers — universally readable on EN/BN/HI papers. */
const OPT = ["(a)", "(b)", "(c)", "(d)", "(e)", "(f)"];
type Tab = "worksheet" | "key";
const ALL_TYPES: QType[] = ["mcq", "fill", "truefalse", "short", "match", "hots", "long"];

let CID = 0;
const blankCustom = (): CustomQuestion => ({
  id: String(++CID),
  type: "short",
  prompt: "",
  answer: "",
  marks: DEFAULT_MARKS.short,
});

export default function WorksheetIsland() {
  const [lang, setLang] = useLang();
  const T = WORKSHEET_T[lang];

  const [bank, setBank] = useState<WorksheetBank | null>(null);
  const [loadError, setLoadError] = useState(false);

  // scope
  const [board, setBoard] = useState("");
  const [classId, setClassId] = useState("");
  const [subject, setSubject] = useState("");
  const [chosen, setChosen] = useState<Set<string>>(new Set());

  // mix + marks
  const [mix, setMix] = useState<Record<QType, number>>(emptyCounts);
  const [marks, setMarks] = useState<Record<QType, number>>({ ...DEFAULT_MARKS });

  // header
  const [school, setSchool] = useState("");
  const [teacher, setTeacher] = useState("");
  const [title, setTitle] = useState("");
  const [dateStr, setDateStr] = useState("");
  const [duration, setDuration] = useState("");
  const [maxMarksOverride, setMaxMarksOverride] = useState("");
  const [instructions, setInstructions] = useState("");

  // sets + custom questions
  const [setCount, setSetCount] = useState(1);
  const [customs, setCustoms] = useState<CustomQuestion[]>([]);

  const [seed, setSeed] = useState("ws-1");
  const [results, setResults] = useState<SelectionResult[] | null>(null);
  const [tab, setTab] = useState<Tab>("worksheet");
  const [activeSet, setActiveSet] = useState(0);
  const [copied, setCopied] = useState(false);
  const outputRef = useRef<HTMLDivElement | null>(null);

  /* ----- load the bank once ----- */
  useEffect(() => {
    let alive = true;
    fetch("/worksheet-bank.json")
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error("load"))))
      .then((data: WorksheetBank) => {
        if (alive) setBank(data);
      })
      .catch(() => alive && setLoadError(true));
    return () => {
      alive = false;
    };
  }, []);

  /* default instructions follow the active UI language until edited */
  const instrEdited = useRef(false);
  useEffect(() => {
    if (!instrEdited.current) setInstructions(T.defaultInstructions);
  }, [T.defaultInstructions]);

  /* clean up the print marker after printing */
  useEffect(() => {
    const clear = () => document.body.removeAttribute("data-print");
    window.addEventListener("afterprint", clear);
    return () => window.removeEventListener("afterprint", clear);
  }, []);

  /* ----- URL state (shareable, reproducible via seed) ----- */
  const urlState = useMemo(() => {
    const mixStr = TYPE_ORDER.filter((t) => mix[t] > 0).map((t) => `${t}-${mix[t]}`).join(".");
    const mkStr = TYPE_ORDER.filter((t) => marks[t] !== DEFAULT_MARKS[t]).map((t) => `${t}-${marks[t]}`).join(".");
    return {
      b: board,
      c: classId,
      s: subject,
      ch: [...chosen].join(","),
      mix: mixStr,
      mk: mkStr,
      sets: setCount > 1 ? String(setCount) : "",
      seed: seed !== "ws-1" ? seed : "",
      sc: school,
      tn: teacher,
      ti: title,
      dt: dateStr,
      du: duration,
      mm: maxMarksOverride,
    };
  }, [board, classId, subject, chosen, mix, marks, setCount, seed, school, teacher, title, dateStr, duration, maxMarksOverride]);

  useUrlSync(urlState, (q) => {
    const get = (k: string) => q.get(k) ?? "";
    if (get("b")) setBoard(get("b"));
    if (get("c")) setClassId(get("c"));
    if (get("s")) setSubject(get("s"));
    if (get("ch")) setChosen(new Set(get("ch").split(",").filter(Boolean)));
    if (get("mix")) {
      const m = emptyCounts();
      get("mix").split(".").forEach((p) => {
        const [t, v] = p.split("-");
        if ((TYPE_ORDER as string[]).includes(t)) m[t as QType] = Math.max(0, Number(v) || 0);
      });
      setMix(m);
    }
    if (get("mk")) {
      const m = { ...DEFAULT_MARKS };
      get("mk").split(".").forEach((p) => {
        const [t, v] = p.split("-");
        if ((TYPE_ORDER as string[]).includes(t)) m[t as QType] = Math.max(0, Number(v) || 0);
      });
      setMarks(m);
    }
    if (get("sets")) setSetCount(Math.max(1, Math.min(4, Number(get("sets")) || 1)));
    if (get("seed")) setSeed(get("seed"));
    if (get("sc")) setSchool(get("sc"));
    if (get("tn")) setTeacher(get("tn"));
    if (get("ti")) setTitle(get("ti"));
    if (get("dt")) setDateStr(get("dt"));
    if (get("du")) setDuration(get("du"));
    if (get("mm")) setMaxMarksOverride(get("mm"));
  });

  /* ----- cascade option lists ----- */
  const boards = bank?.scope ?? [];
  const classes = useMemo(() => boards.find((b) => b.board === board)?.classes ?? [], [boards, board]);
  const subjects = useMemo(() => classes.find((c) => c.id === classId)?.subjects ?? [], [classes, classId]);
  const chapters = useMemo(() => subjects.find((s) => s.key === subject)?.chapters ?? [], [subjects, subject]);

  /* ----- pool for the current selection ----- */
  const pool = useMemo<WorksheetQuestion[]>(() => {
    if (!bank || !board || !classId || !subject || chosen.size === 0) return [];
    return bank.questions.filter(
      (q) => q.board === board && String(q.classLevel) === classId && q.subject === subject && chosen.has(q.chapterSlug),
    );
  }, [bank, board, classId, subject, chosen]);

  const availability = useMemo(() => {
    const c = emptyCounts();
    for (const q of pool) c[q.type] = (c[q.type] ?? 0) + 1;
    return c;
  }, [pool]);

  const availableTypes = TYPE_ORDER.filter((t) => availability[t] > 0);

  const contentLangs = useMemo(() => {
    const s = new Set<WLang>();
    for (const q of pool) s.add(q.lang);
    return [...s];
  }, [pool]);

  const validCustoms = useMemo(() => customs.filter((c) => c.prompt.trim() !== ""), [customs]);
  const customMarks = validCustoms.reduce((s, c) => s + (Number(c.marks) || 0), 0);

  const bankQ = availableTypes.reduce((s, t) => s + Math.min(mix[t], availability[t]), 0);
  const bankMarks = availableTypes.reduce((s, t) => s + Math.min(mix[t], availability[t]) * marks[t], 0);
  const totalQuestions = bankQ + validCustoms.length;
  const totalMarks = bankMarks + customMarks;

  /* ----- scope change resets ----- */
  function chooseBoard(v: string) {
    setBoard(v);
    setClassId("");
    setSubject("");
    setChosen(new Set());
    setResults(null);
  }
  function chooseClass(v: string) {
    setClassId(v);
    setSubject("");
    setChosen(new Set());
    setResults(null);
  }
  function chooseSubject(v: string) {
    setSubject(v);
    setChosen(new Set());
    setResults(null);
  }
  function toggleChapter(slug: string) {
    setChosen((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
    setResults(null);
  }
  function selectAllChapters() {
    setChosen(new Set(chapters.map((c) => c.slug)));
    setResults(null);
  }

  function step(type: QType, delta: number) {
    setMix((m) => {
      const cap = availability[type] ?? 0;
      const next = Math.max(0, Math.min(cap, (m[type] ?? 0) + delta));
      return { ...m, [type]: next };
    });
    setResults(null);
  }
  function setMarkFor(type: QType, v: string) {
    const n = Math.max(0, Math.floor(Number(v) || 0));
    setMarks((m) => ({ ...m, [type]: n }));
    setResults(null);
  }

  /* ----- custom-question editor ----- */
  function addCustom() {
    setCustoms((c) => [...c, blankCustom()]);
  }
  function removeCustom(id: string) {
    setCustoms((c) => c.filter((q) => q.id !== id));
    setResults(null);
  }
  function patchCustom(id: string, patch: Partial<CustomQuestion>) {
    setCustoms((c) => c.map((q) => (q.id === id ? { ...q, ...patch } : q)));
    setResults(null);
  }
  function changeCustomType(id: string, type: QType) {
    setCustoms((c) =>
      c.map((q) => {
        if (q.id !== id) return q;
        const next: CustomQuestion = { ...q, type, marks: DEFAULT_MARKS[type] };
        if (type === "mcq") {
          next.options = q.options && q.options.length === 4 ? q.options : ["", "", "", ""];
          next.answerIndex = q.answerIndex ?? 0;
        } else {
          next.options = undefined;
          next.answerIndex = undefined;
        }
        return next;
      }),
    );
    setResults(null);
  }
  function setCustomOption(id: string, i: number, v: string) {
    setCustoms((c) =>
      c.map((q) => {
        if (q.id !== id) return q;
        const options = [...(q.options ?? ["", "", "", ""])];
        options[i] = v;
        return { ...q, options };
      }),
    );
    setResults(null);
  }

  /* ----- generate ----- */
  function generate(newSeed?: string) {
    if (totalQuestions === 0) return;
    const s = newSeed ?? seed;
    if (newSeed) setSeed(newSeed);
    const customQs = validCustoms.map(customToQuestion);
    const sets = buildWorksheetSets(pool, { mix, marksByType: marks, seed: s }, customQs, setCount);
    if (!title.trim()) {
      const cls = classes.find((c) => c.id === classId)?.label ?? (classId ? `Class ${classId}` : "");
      const subj = subjects.find((x) => x.key === subject)?.name ?? subject;
      const bits = [cls, subj, T.worksheetTab].filter(Boolean);
      setTitle(bits.join(" — "));
    }
    setResults(sets);
    setActiveSet(0);
    setTab("worksheet");
    requestAnimationFrame(() => outputRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }

  function swap(setIndex: number, sectionType: QType, qid: string) {
    if (!results) return;
    const cur = results[setIndex];
    if (!cur) return;
    const used = new Set<string>();
    cur.sections.forEach((sec) => sec.questions.forEach((q) => used.add(q.id)));
    const repl = pickReplacement(pool, sectionType, used, `${seed}:swap:${qid}:${Date.now()}`);
    if (!repl) return;
    const m = marks[sectionType];
    const sections = cur.sections.map((sec) =>
      sec.type !== sectionType
        ? sec
        : { ...sec, questions: sec.questions.map((q) => (q.id === qid ? { ...repl, marks: m } : q)) },
    );
    const totalQ = sections.reduce((s, sec) => s + sec.questions.length, 0);
    const totalM = sections.reduce((s, sec) => s + sec.questions.reduce((a, q) => a + q.marks, 0), 0);
    setResults(results.map((r, i) => (i === setIndex ? { ...cur, sections, totalQuestions: totalQ, totalMarks: totalM } : r)));
  }

  function printDoc(which: Tab) {
    document.body.setAttribute("data-print", which);
    window.print();
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable */
    }
  }
  function openWhatsApp() {
    const text = `${title || T.worksheetTab} — studymatic.in`;
    window.open(`https://wa.me/?text=${encodeURIComponent(`${text}\n${window.location.href}`)}`, "_blank", "noopener");
  }
  function downloadCsv() {
    const set = results?.[activeSet];
    if (!set) return;
    const csv = answerKeyCsv(set.sections);
    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `answer-key${results.length > 1 ? `-set-${activeSet + 1}` : ""}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  /* ----- derived render values ----- */
  const current = results?.[activeSet] ?? null;
  const maxMarks =
    maxMarksOverride.trim() !== "" ? maxMarksOverride : String(current?.totalMarks ?? totalMarks);

  const sourceChaptersOf = (sections: WorksheetSection[]): string[] => {
    const set = new Map<string, string>();
    sections.forEach((s) =>
      s.questions.forEach((q) => set.set(q.chapterSlug, q.chapterSlug === "custom" ? T.customLabel : q.chapterTitle)),
    );
    return [...set.values()];
  };

  if (loadError) {
    return (
      <div className="card border p-5 text-sm text-muted">Could not load the question bank. Please refresh the page.</div>
    );
  }
  if (!bank) {
    return (
      <div className="card border p-5 text-sm text-muted" aria-live="polite">
        Loading question bank…
      </div>
    );
  }

  const setLetter = (i: number) => T.sectionLetters[i] ?? String(i + 1);

  return (
    <div className="space-y-5">
      {/* ---------------- BUILDER ---------------- */}
      <div className="no-print space-y-5">
        {/* language */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-sm font-semibold text-ink">{T.uiLanguage}</span>
          <LangToggle lang={lang} onChange={setLang} />
        </div>

        {/* scope */}
        <section className="card border p-5 sm:p-6">
          <h2 className="mb-3 font-display text-lg font-bold text-ink">{T.scope}</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            <Select label={T.board} value={board} onChange={chooseBoard} options={boards.map((b) => ({ value: b.board, label: b.label }))} />
            <Select label={T.klass} value={classId} onChange={chooseClass} disabled={!board} options={classes.map((c) => ({ value: c.id, label: c.label }))} />
            <Select label={T.subject} value={subject} onChange={chooseSubject} disabled={!classId} options={subjects.map((s) => ({ value: s.key, label: s.name }))} />
          </div>

          {subject && (
            <div className="mt-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-semibold text-ink">{T.chapters}</span>
                <button type="button" onClick={selectAllChapters} className="rounded-full border border-dashed border-line px-3 py-1 text-xs font-semibold text-cobalt hover:border-cobalt">
                  {T.selectAll}
                </button>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                {chapters.map((c) => (
                  <label key={c.slug} className="flex cursor-pointer items-start gap-2 rounded-xl border border-line bg-cream px-3 py-2 text-sm">
                    <input type="checkbox" checked={chosen.has(c.slug)} onChange={() => toggleChapter(c.slug)} className="mt-0.5 h-4 w-4 accent-cobalt" />
                    <span>
                      <span className="font-semibold text-ink">{c.title}</span>
                      <span className="ml-1 text-xs text-muted">· {c.total} Q</span>
                    </span>
                  </label>
                ))}
              </div>

              {chosen.size > 0 && contentLangs.length > 0 && (
                <p className="mt-3 rounded-xl bg-cobalt-soft px-3 py-2 text-xs text-ink">
                  {lang === "hi"
                    ? T.contentLangNote(contentLangs.map((l) => T.langName[l]).join(" / "))
                    : `${T.questionMix}: ${contentLangs.map((l) => T.langName[l]).join(" / ")}`}
                </p>
              )}
            </div>
          )}

          {!subject && <p className="mt-3 text-sm text-muted">{T.pickScopeFirst}</p>}
        </section>

        {/* question mix */}
        {chosen.size > 0 && (
          <section className="card border p-5 sm:p-6">
            <h2 className="mb-1 font-display text-lg font-bold text-ink">{T.questionMix}</h2>
            {availableTypes.length === 0 ? (
              <p className="text-sm text-muted">{T.noQuestionsScope}</p>
            ) : (
              <div className="mt-3 space-y-2">
                {availableTypes.map((t) => (
                  <div key={t} className="grid grid-cols-[1fr_auto_auto] items-center gap-3 rounded-xl border border-line px-3 py-2">
                    <div className="min-w-0">
                      <div className="truncate font-semibold text-ink">{T.types[t]}</div>
                      <div className="text-xs text-muted">{availability[t]} {T.availableShort}</div>
                    </div>
                    <label className="flex items-center gap-1 text-xs text-muted">
                      <input aria-label={`${T.types[t]} ${T.marksEach}`} inputMode="numeric" value={String(marks[t])} onChange={(e) => setMarkFor(t, e.target.value)} className="w-12 rounded-lg border border-line bg-white px-2 py-1 text-center text-sm text-ink" />
                      <span className="hidden sm:inline">{T.marksEach}</span>
                    </label>
                    <div className="flex items-center gap-1">
                      <button type="button" aria-label="−" onClick={() => step(t, -1)} className="grid h-8 w-8 place-items-center rounded-full border border-line text-muted hover:border-cobalt hover:text-cobalt">−</button>
                      <span className="w-8 text-center text-sm font-bold tabular-nums text-ink">{mix[t]}</span>
                      <button type="button" aria-label="+" onClick={() => step(t, 1)} className="grid h-8 w-8 place-items-center rounded-full border border-line text-muted hover:border-cobalt hover:text-cobalt">+</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* custom questions */}
        <section className="card border p-5 sm:p-6">
          <h2 className="font-display text-lg font-bold text-ink">{T.customTitle}</h2>
          <p className="mt-0.5 text-sm text-muted">{T.customSubtitle}</p>
          <div className="mt-3 space-y-3">
            {customs.map((c, i) => (
              <div key={c.id} className="rounded-xl border border-line bg-cream p-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-muted">#{i + 1}</span>
                  <select value={c.type} onChange={(e) => changeCustomType(c.id, e.target.value as QType)} className="rounded-lg border border-line bg-white px-2 py-1 text-sm text-ink">
                    {ALL_TYPES.map((t) => (
                      <option key={t} value={t}>{T.types[t]}</option>
                    ))}
                  </select>
                  <label className="ml-auto flex items-center gap-1 text-xs text-muted">
                    {T.qMarks}
                    <input inputMode="numeric" value={String(c.marks)} onChange={(e) => patchCustom(c.id, { marks: Math.max(0, Math.floor(Number(e.target.value) || 0)) })} className="w-12 rounded-lg border border-line bg-white px-2 py-1 text-center text-sm text-ink" />
                  </label>
                  <button type="button" onClick={() => removeCustom(c.id)} className="rounded-full border border-line px-2 py-1 text-xs font-semibold text-coral hover:border-coral">{T.removeQ}</button>
                </div>
                <textarea value={c.prompt} onChange={(e) => patchCustom(c.id, { prompt: e.target.value })} rows={2} placeholder={T.qPrompt} className="mt-2 w-full rounded-lg border border-line bg-white px-3 py-2 text-sm text-ink" />
                {c.type === "mcq" ? (
                  <div className="mt-2 grid gap-2 sm:grid-cols-2">
                    {(c.options ?? ["", "", "", ""]).map((opt, oi) => (
                      <label key={oi} className="flex items-center gap-2 text-sm">
                        <input type="radio" name={`correct-${c.id}`} checked={(c.answerIndex ?? 0) === oi} onChange={() => patchCustom(c.id, { answerIndex: oi })} className="h-4 w-4 accent-cobalt" aria-label={`${T.correctOption} ${OPT[oi]}`} />
                        <span className="text-muted">{OPT[oi]}</span>
                        <input value={opt} onChange={(e) => setCustomOption(c.id, oi, e.target.value)} placeholder={`${T.qOption} ${oi + 1}`} className="min-w-0 flex-1 rounded-lg border border-line bg-white px-2 py-1 text-sm text-ink" />
                      </label>
                    ))}
                  </div>
                ) : (
                  <input value={c.answer} onChange={(e) => patchCustom(c.id, { answer: e.target.value })} placeholder={T.qAnswer} className="mt-2 w-full rounded-lg border border-line bg-white px-3 py-2 text-sm text-ink" />
                )}
                <input value={c.explanation ?? ""} onChange={(e) => patchCustom(c.id, { explanation: e.target.value })} placeholder={T.qExplanation} className="mt-2 w-full rounded-lg border border-line bg-white px-3 py-2 text-sm text-ink" />
              </div>
            ))}
          </div>
          <button type="button" onClick={addCustom} className="mt-3 rounded-full border border-dashed border-line px-4 py-1.5 text-sm font-semibold text-cobalt hover:border-cobalt">+ {T.addQuestion}</button>
        </section>

        {/* sets + totals + generate */}
        {totalQuestions > 0 && (
          <section className="card border p-5 sm:p-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <label className="block">
                <span className="mb-1 block text-sm font-semibold text-ink">{T.numberOfSets}</span>
                <select value={setCount} onChange={(e) => { setSetCount(Number(e.target.value)); setResults(null); }} className="rounded-xl border border-line bg-white px-3 py-2 text-sm text-ink">
                  {[1, 2, 3, 4].map((n) => (
                    <option key={n} value={n}>{n === 1 ? "1" : `${n} (${T.setWord} ${T.sectionLetters.slice(0, n).join("/")})`}</option>
                  ))}
                </select>
              </label>
              <div className="flex flex-wrap items-center gap-4 rounded-2xl bg-cobalt-soft px-4 py-3" aria-live="polite">
                <Stat label={T.totalQuestions} value={totalQuestions} />
                <Stat label={T.totalMarks} value={totalMarks} />
              </div>
            </div>

            {/* header form */}
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <Text label={T.schoolName} value={school} onChange={setSchool} />
              <Text label={T.teacherName} value={teacher} onChange={setTeacher} />
              <Text label={T.worksheetTitle} value={title} onChange={setTitle} />
              <Text label={T.date} value={dateStr} onChange={setDateStr} />
              <Text label={T.duration} value={duration} onChange={setDuration} placeholder="1 hr" />
              <Text label={T.maxMarks} value={maxMarksOverride} onChange={setMaxMarksOverride} placeholder={String(totalMarks)} inputMode="numeric" />
            </div>
            <label className="mt-3 block">
              <span className="mb-1 block text-sm font-semibold text-ink">{T.generalInstructions}</span>
              <textarea value={instructions} onChange={(e) => { instrEdited.current = true; setInstructions(e.target.value); }} rows={2} className="w-full rounded-xl border border-line bg-white px-3 py-2 text-sm text-ink" />
            </label>

            <button type="button" onClick={() => generate()} className="btn-candy cobalt mt-4 w-full sm:w-auto">{T.generate}</button>
          </section>
        )}
      </div>

      {/* ---------------- OUTPUT ---------------- */}
      {results && current && (
        <div ref={outputRef} className="ws-print-area space-y-4">
          <div className="no-print flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex rounded-full border border-line bg-cream p-0.5 text-sm font-semibold">
                <TabBtn active={tab === "worksheet"} onClick={() => setTab("worksheet")}>{T.worksheetTab}</TabBtn>
                <TabBtn active={tab === "key"} onClick={() => setTab("key")}>{T.answerKeyTab}</TabBtn>
              </div>
              {results.length > 1 && (
                <div className="inline-flex rounded-full border border-line bg-cream p-0.5 text-sm font-semibold">
                  {results.map((_, i) => (
                    <TabBtn key={i} active={activeSet === i} onClick={() => setActiveSet(i)}>{`${T.setWord} ${setLetter(i)}`}</TabBtn>
                  ))}
                </div>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              <button type="button" onClick={() => printDoc("worksheet")} className="rounded-full border border-line px-3 py-1.5 text-sm font-semibold text-cobalt hover:border-cobalt">{T.printWorksheet}</button>
              <button type="button" onClick={() => printDoc("key")} className="rounded-full border border-line px-3 py-1.5 text-sm font-semibold text-cobalt hover:border-cobalt">{T.printAnswerKey}</button>
              <button type="button" onClick={downloadCsv} className="rounded-full border border-line px-3 py-1.5 text-sm font-semibold text-cobalt hover:border-cobalt">{T.downloadCsv}</button>
              <button type="button" onClick={openWhatsApp} className="rounded-full border border-line px-3 py-1.5 text-sm font-semibold text-cobalt hover:border-cobalt">{T.whatsapp}</button>
              <button type="button" onClick={copyLink} className="rounded-full border border-line px-3 py-1.5 text-sm font-semibold text-cobalt hover:border-cobalt">{copied ? T.copied : T.copyLink}</button>
              <button type="button" onClick={() => generate(`ws-${Date.now()}`)} className="rounded-full border border-dashed border-line px-3 py-1.5 text-sm font-semibold text-cobalt hover:border-cobalt">{T.regenerate}</button>
            </div>
          </div>

          <p className="no-print text-xs text-muted">{T.shareNote} {T.pdfHint}</p>

          {/* WORKSHEET DOC — all sets (active visible on screen, all printable) */}
          <div className={`ws-doc ws-doc-worksheet ${tab === "worksheet" ? "" : "hidden"}`}>
            {results.map((set, i) => (
              <article key={i} className={`ws-set rounded-2xl border border-line bg-white p-5 sm:p-8 ${i === activeSet ? "" : "hidden"}`}>
                {results.length > 1 && <div className="mb-2 inline-block rounded-full bg-ink/90 px-3 py-1 text-xs font-bold text-white">{`${T.setWord} ${setLetter(i)}`}</div>}
                <Header T={T} school={school} teacher={teacher} title={title} subject={subjectName(subjects, subject)} dateStr={dateStr} duration={duration} maxMarks={maxMarksOverride.trim() !== "" ? maxMarksOverride : String(set.totalMarks)} />
                {instructions.trim() && (
                  <p className="mt-3 border-y border-line py-2 text-sm text-ink"><span className="font-semibold">{T.generalInstructions}: </span>{instructions}</p>
                )}
                {renderSections(set.sections, T, "worksheet", i, swap)}
                <p className="ws-footer mt-6 border-t border-line pt-2 text-center text-xs text-muted">{T.footer}</p>
              </article>
            ))}
          </div>

          {/* ANSWER KEY DOC */}
          <div className={`ws-doc ws-doc-key ${tab === "key" ? "" : "hidden"}`}>
            {results.map((set, i) => (
              <article key={i} className={`ws-set rounded-2xl border border-line bg-white p-5 sm:p-8 ${i === activeSet ? "" : "hidden"}`}>
                <h3 className="font-display text-lg font-bold text-ink">{T.answerKeyTitle}{results.length > 1 ? ` — ${T.setWord} ${setLetter(i)}` : ""}{title ? ` · ${title}` : ""}</h3>
                <div className="mt-2 flex flex-wrap gap-4 rounded-xl bg-cobalt-soft p-3 text-sm">
                  <Stat label={T.totalQuestions} value={set.totalQuestions} />
                  <Stat label={T.totalMarks} value={set.totalMarks} />
                </div>
                <p className="mt-2 text-xs text-muted"><span className="font-semibold">{T.sourceChapters}: </span>{sourceChaptersOf(set.sections).join(", ")}</p>
                {renderSections(set.sections, T, "key", i, swap)}
                <p className="ws-footer mt-6 border-t border-line pt-2 text-center text-xs text-muted">{T.footer}</p>
              </article>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ============================ render helpers ============================ */

function subjectName(subjects: { key: string; name: string }[], key: string) {
  return subjects.find((s) => s.key === key)?.name ?? key;
}

function renderSections(
  sections: WorksheetSection[],
  T: (typeof WORKSHEET_T)["en"],
  mode: "worksheet" | "key",
  setIndex: number,
  swap: (setIndex: number, type: QType, id: string) => void,
) {
  let n = 0;
  return (
    <div className="mt-4 space-y-5">
      {sections.map((sec, si) => {
        const letter = T.sectionLetters[si] ?? String(si + 1);
        const per = sec.questions[0]?.marks ?? 0;
        const eachWord = per === 1 ? T.markEachOne : T.marksEachMany;
        return (
          <section key={sec.type} className="ws-section">
            <h4 className="font-display text-base font-bold text-ink">
              {T.sectionWord} {letter} — {T.types[sec.type]} <span className="font-normal text-muted">({per} {eachWord})</span>
            </h4>
            <ol className="mt-2 space-y-3">
              {sec.questions.map((q) => {
                n += 1;
                const isCustom = q.id.startsWith("custom:");
                return (
                  <li key={q.id} className="ws-q grid grid-cols-[1fr_auto] gap-3">
                    <div className="min-w-0">
                      <p className="text-sm text-ink"><span className="font-semibold">{n}. </span>{q.prompt}</p>
                      {mode === "worksheet" ? (
                        <AnswerSpace q={q} />
                      ) : (
                        <div className="mt-1 rounded-lg bg-cream px-3 py-2 text-sm">
                          <span className="font-semibold text-green">{T.correctAnswer}: </span>
                          <span className="text-ink">{q.type === "mcq" && q.answerIndex != null ? `${OPT[q.answerIndex]} ` : ""}{q.answer}</span>
                          {q.explanation && (
                            <div className="mt-0.5 text-muted"><span className="font-semibold">{T.explanation}: </span>{q.explanation}</div>
                          )}
                          <div className="mt-0.5 text-xs text-muted">{T.difficultyLabel}: {T.difficulty[q.difficulty]}</div>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="shrink-0 text-xs font-semibold text-muted">[{q.marks}]</span>
                      {mode === "worksheet" && !isCustom && (
                        <button type="button" onClick={() => swap(setIndex, sec.type, q.id)} className="no-print rounded-full border border-line px-2 py-0.5 text-[11px] font-semibold text-cobalt hover:border-cobalt">{T.swap}</button>
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>
          </section>
        );
      })}
    </div>
  );
}

function AnswerSpace({ q }: { q: WorksheetQuestion }) {
  if (q.type === "mcq" && q.options) {
    return (
      <ul className="mt-1 grid gap-1 sm:grid-cols-2">
        {q.options.map((o, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-ink">
            <span aria-hidden className="inline-grid h-4 w-4 place-items-center rounded-full border border-line text-[10px]" />
            <span>{OPT[i]} {o}</span>
          </li>
        ))}
      </ul>
    );
  }
  if (q.type === "truefalse") return <p className="mt-1 text-sm text-muted">◯ True&nbsp;&nbsp;&nbsp;◯ False</p>;
  if (q.type === "fill") return <p className="mt-2 border-b border-dashed border-line" style={{ minWidth: "12rem", height: "1.1rem" }} />;
  if (q.type === "long" || q.type === "hots") return <div className="mt-2 rounded-lg border border-dashed border-line" style={{ height: "5.5rem" }} />;
  if (q.type === "match") {
    return (
      <div className="mt-2 grid grid-cols-2 gap-2 text-sm text-muted">
        <div className="rounded-lg border border-dashed border-line p-2" style={{ minHeight: "3rem" }}>A</div>
        <div className="rounded-lg border border-dashed border-line p-2" style={{ minHeight: "3rem" }}>B</div>
      </div>
    );
  }
  return (
    <div className="mt-2 space-y-3">
      <div className="border-b border-dashed border-line" />
      <div className="border-b border-dashed border-line" />
    </div>
  );
}

function Header({ T, school, teacher, title, subject, dateStr, duration, maxMarks }: { T: (typeof WORKSHEET_T)["en"]; school: string; teacher: string; title: string; subject: string; dateStr: string; duration: string; maxMarks: string }) {
  return (
    <header className="border-b-2 border-ink/70 pb-3">
      <div className="text-center">
        {school && <div className="font-display text-lg font-bold text-ink">{school}</div>}
        {title && <div className="font-semibold text-ink">{title}</div>}
        <div className="text-sm text-muted">{subject}{teacher ? ` · ${teacher}` : ""}</div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1 text-sm text-ink sm:grid-cols-3">
        <Field label={T.name} grow />
        <Field label={T.rollNo} />
        <Field label={T.classField} />
        <Field label={T.section} />
        <Field label={T.maxMarks} value={maxMarks} />
        <Field label={T.time} value={duration || undefined} />
      </div>
      {dateStr && <p className="mt-1 text-right text-xs text-muted">{T.date}: {dateStr}</p>}
    </header>
  );
}

function Field({ label, value, grow }: { label: string; value?: string; grow?: boolean }) {
  return (
    <div className={`flex items-baseline gap-1 ${grow ? "col-span-2 sm:col-span-1" : ""}`}>
      <span className="shrink-0 font-semibold">{label}:</span>
      {value != null && value !== "" ? <span>{value}</span> : <span className="min-w-0 flex-1 self-end border-b border-dotted border-ink/40">&nbsp;</span>}
    </div>
  );
}

function Select({ label, value, onChange, options, disabled }: { label: string; value: string; onChange: (v: string) => void; options: { value: string; label: string }[]; disabled?: boolean }) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-semibold text-ink">{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)} disabled={disabled} className="w-full rounded-xl border border-line bg-white px-3 py-2 text-sm text-ink disabled:opacity-50">
        <option value="">—</option>
        {options.map((o) => (<option key={o.value} value={o.value}>{o.label}</option>))}
      </select>
    </label>
  );
}

function Text({ label, value, onChange, placeholder, inputMode }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; inputMode?: "text" | "numeric" }) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-semibold text-ink">{label}</span>
      <input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} inputMode={inputMode} className="w-full rounded-xl border border-line bg-white px-3 py-2 text-sm text-ink" />
    </label>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="font-display text-2xl font-bold text-cobalt tabular-nums">{value}</div>
      <div className="text-xs font-semibold text-muted">{label}</div>
    </div>
  );
}

function TabBtn({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button type="button" onClick={onClick} aria-pressed={active} className={`rounded-full px-4 py-1.5 transition ${active ? "bg-cobalt text-white" : "text-muted hover:text-cobalt"}`}>
      {children}
    </button>
  );
}
