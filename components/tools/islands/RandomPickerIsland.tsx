"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useLang, LangToggle, tri, useUrlSync } from "@/components/tools/islands/_shared";
import { parseNames, makeGroups, pickIndex, type GroupMode } from "@/lib/tools/logic/randomPicker";

type Mode = "picker" | "groups";

export default function RandomPickerIsland() {
  const [lang, setLang] = useLang();
  const [text, setText] = useState("");
  const [mode, setMode] = useState<Mode>("picker");

  // picker
  const [noRepeat, setNoRepeat] = useState(true);
  const [remaining, setRemaining] = useState<string[]>([]);
  const [picked, setPicked] = useState<string | null>(null);
  const [pickMsg, setPickMsg] = useState<string | null>(null);

  // groups
  const [groupMode, setGroupMode] = useState<GroupMode>("count");
  const [groupValue, setGroupValue] = useState("4");
  const [seed, setSeed] = useState("r1");
  const [copied, setCopied] = useState(false);

  const names = useMemo(() => parseNames(text), [text]);

  // reset the no-repeat pool whenever the roster or option changes
  useEffect(() => {
    setRemaining(names);
    setPicked(null);
    setPickMsg(null);
  }, [names, noRepeat]);

  // URL-synced config (the names list stays in memory only)
  useUrlSync(
    {
      m: mode === "groups" ? "g" : "",
      gm: groupMode === "size" ? "size" : "",
      gv: groupValue !== "4" ? groupValue : "",
      nr: noRepeat ? "" : "0",
      seed: seed !== "r1" ? seed : "",
    },
    (q) => {
      if (q.get("m") === "g") setMode("groups");
      if (q.get("gm") === "size") setGroupMode("size");
      if (q.get("gv")) setGroupValue(q.get("gv")!);
      if (q.get("nr") === "0") setNoRepeat(false);
      if (q.get("seed")) setSeed(q.get("seed")!);
    },
  );

  const groups = useMemo(() => makeGroups(names, groupMode, Number(groupValue), seed), [names, groupMode, groupValue, seed]);

  // print cleanup
  useEffect(() => {
    const clear = () => document.body.removeAttribute("data-print-tool");
    window.addEventListener("afterprint", clear);
    return () => window.removeEventListener("afterprint", clear);
  }, []);

  function pick() {
    if (names.length === 0) {
      setPickMsg(tri(lang, "Add some names first.", "पहले कुछ नाम जोड़ें।", "আগে কিছু নাম যোগ করো।"));
      return;
    }
    if (noRepeat) {
      if (remaining.length === 0) {
        setPickMsg(tri(lang, "Everyone has been picked — reset the pool to go again.", "सभी चुने जा चुके हैं — फिर से शुरू करने के लिए पूल रीसेट करें।", "সবাইকে বেছে নেওয়া হয়েছে — আবার শুরু করতে পুল রিসেট করো।"));
        return;
      }
      const i = pickIndex(remaining.length, Math.random);
      setPicked(remaining[i]);
      setRemaining((r) => r.filter((_, idx) => idx !== i));
      setPickMsg(null);
    } else {
      const i = pickIndex(names.length, Math.random);
      setPicked(names[i]);
      setPickMsg(null);
    }
  }

  function resetPool() {
    setRemaining(names);
    setPicked(null);
    setPickMsg(null);
  }

  async function copyGroups() {
    const out = groups.map((g, i) => `${tri(lang, "Group", "समूह", "দল")} ${i + 1}: ${g.join(", ")}`).join("\n");
    try {
      await navigator.clipboard.writeText(out);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable */
    }
  }
  function printGroups() {
    document.body.setAttribute("data-print-tool", "mtable");
    window.print();
  }

  return (
    <div className="space-y-4">
      <div className="no-print flex items-center justify-between gap-3">
        <div className="inline-flex rounded-full border border-line bg-cream p-0.5" role="group" aria-label={tri(lang, "Mode", "मोड", "মোড")}>
          <button type="button" aria-pressed={mode === "picker"} onClick={() => setMode("picker")} className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${mode === "picker" ? "bg-cobalt text-white" : "text-muted hover:text-cobalt"}`}>{tri(lang, "Pick a student", "एक छात्र चुनें", "একজন শিক্ষার্থী বাছো")}</button>
          <button type="button" aria-pressed={mode === "groups"} onClick={() => setMode("groups")} className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${mode === "groups" ? "bg-cobalt text-white" : "text-muted hover:text-cobalt"}`}>{tri(lang, "Make groups", "समूह बनाएँ", "দল বানাও")}</button>
        </div>
        <LangToggle lang={lang} onChange={setLang} />
      </div>

      {/* Roster */}
      <div className="no-print">
        <label htmlFor="rp-names" className="mb-1 flex items-center justify-between text-sm font-semibold text-ink">
          <span>{tri(lang, "Class list (one name per line)", "कक्षा सूची (हर पंक्ति में एक नाम)", "ক্লাসের তালিকা (প্রতি লাইনে একটি নাম)")}</span>
          <span className="font-normal text-muted">{names.length} {tri(lang, "names", "नाम", "নাম")}</span>
        </label>
        <textarea
          id="rp-names"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={6}
          placeholder={tri(lang, "Aryan\nDiya\nKabir\nMeera\n…", "आर्यन\nदिया\nकबीर\nमीरा\n…", "আরিয়ান\nদিয়া\nকবীর\nমীরা\n…")}
          className="w-full rounded-2xl border border-line bg-card px-4 py-3 text-ink outline-none focus:ring-2 focus:ring-cobalt"
        />
      </div>

      {mode === "picker" ? (
        <section className="space-y-3">
          <div aria-live="polite" className="grid min-h-[6rem] place-items-center rounded-2xl border border-line bg-cobalt-soft p-6 text-center">
            {picked ? (
              <span className="font-display text-3xl font-bold text-cobalt transition">{picked}</span>
            ) : (
              <span className="text-muted">{pickMsg ?? tri(lang, "Press the button to pick a random student.", "किसी छात्र को चुनने के लिए बटन दबाएँ।", "একজন শিক্ষার্থী বাছতে বোতাম চাপো।")}</span>
            )}
          </div>
          <div className="no-print flex flex-wrap items-center gap-3">
            <button type="button" onClick={pick} className="btn-candy cobalt">🎲 {tri(lang, "Pick", "चुनें", "বাছো")}</button>
            <label className="flex items-center gap-2 text-sm text-ink">
              <input type="checkbox" checked={noRepeat} onChange={(e) => setNoRepeat(e.target.checked)} className="h-4 w-4 accent-cobalt" />
              {tri(lang, "Don't repeat until everyone is picked", "जब तक सभी न चुने जाएँ, दोहराएँ नहीं", "সবাই বাছা না হওয়া পর্যন্ত পুনরাবৃত্তি নয়")}
            </label>
            {noRepeat && (
              <span className="text-sm text-muted">{remaining.length} {tri(lang, "of", "में से", "-এর মধ্যে")} {names.length} {tri(lang, "remaining", "शेष", "বাকি")}</span>
            )}
            {noRepeat && names.length > 0 && (
              <button type="button" onClick={resetPool} className="rounded-full border border-line px-3 py-1.5 text-sm font-semibold text-cobalt hover:border-cobalt">{tri(lang, "Reset pool", "पूल रीसेट करें", "পুল রিসেট")}</button>
            )}
          </div>
        </section>
      ) : (
        <section className="space-y-3">
          <div className="no-print flex flex-wrap items-end gap-3">
            <div className="inline-flex rounded-full border border-line bg-cream p-0.5" role="group" aria-label={tri(lang, "Group by", "किसके अनुसार", "কীভাবে দল")}>
              <button type="button" aria-pressed={groupMode === "count"} onClick={() => setGroupMode("count")} className={`rounded-full px-3 py-1.5 text-sm font-semibold transition ${groupMode === "count" ? "bg-cobalt text-white" : "text-muted hover:text-cobalt"}`}>{tri(lang, "Number of groups", "समूहों की संख्या", "দলের সংখ্যা")}</button>
              <button type="button" aria-pressed={groupMode === "size"} onClick={() => setGroupMode("size")} className={`rounded-full px-3 py-1.5 text-sm font-semibold transition ${groupMode === "size" ? "bg-cobalt text-white" : "text-muted hover:text-cobalt"}`}>{tri(lang, "Students per group", "प्रति समूह छात्र", "প্রতি দলে শিক্ষার্থী")}</button>
            </div>
            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-ink">{groupMode === "count" ? tri(lang, "Groups", "समूह", "দল") : tri(lang, "Per group", "प्रति समूह", "প্রতি দলে")}</span>
              <input type="number" inputMode="numeric" min={1} value={groupValue} onChange={(e) => setGroupValue(e.target.value)} className="w-24 rounded-xl border border-line bg-white px-3 py-2 text-ink outline-none focus:ring-2 focus:ring-cobalt" />
            </label>
            <button type="button" onClick={() => setSeed(`r-${Date.now()}`)} className="rounded-full border border-dashed border-line px-3 py-2 text-sm font-semibold text-cobalt hover:border-cobalt">↻ {tri(lang, "Shuffle", "फेंटें", "শাফল")}</button>
          </div>

          {groups.length > 0 ? (
            <>
              <div className="no-print flex flex-wrap gap-2">
                <button type="button" onClick={copyGroups} className="rounded-full border border-line px-3 py-1.5 text-sm font-semibold text-cobalt hover:border-cobalt">{copied ? tri(lang, "Copied ✓", "कॉपी हुआ ✓", "কপি হয়েছে ✓") : tri(lang, "Copy", "कॉपी करें", "কপি করো")}</button>
                <button type="button" onClick={printGroups} className="rounded-full border border-line px-3 py-1.5 text-sm font-semibold text-cobalt hover:border-cobalt">🖨️ {tri(lang, "Print", "प्रिंट", "প্রিন্ট")}</button>
              </div>
              <div className="mt-print-area grid gap-3 sm:grid-cols-2">
                {groups.map((g, i) => (
                  <div key={i} className="mt-table rounded-2xl border border-line bg-white p-4">
                    <h3 className="mb-2 font-display text-lg font-bold text-ink">{tri(lang, "Group", "समूह", "দল")} {i + 1} <span className="text-sm font-normal text-muted">({g.length})</span></h3>
                    <ol className="space-y-0.5 text-sm text-ink">
                      {g.map((name, j) => (<li key={j}>{j + 1}. {name}</li>))}
                    </ol>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p className="rounded-2xl border border-line bg-card p-6 text-center text-muted">{tri(lang, "Add at least one name to make groups.", "समूह बनाने के लिए कम से कम एक नाम जोड़ें।", "দল বানাতে অন্তত একটি নাম যোগ করো।")}</p>
          )}
        </section>
      )}
    </div>
  );
}
