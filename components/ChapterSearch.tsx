"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { SearchItem } from "@/lib/content";

export type { SearchItem };

type LoadState = "idle" | "loading" | "loaded" | "error";

export function ChapterSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [items, setItems] = useState<SearchItem[] | null>(null);
  const [loadState, setLoadState] = useState<LoadState>("idle");
  const blurTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Fetch the search index lazily — only when the user first interacts with the box.
  const ensureLoaded = useCallback(() => {
    if (loadState !== "idle") return;
    setLoadState("loading");
    fetch("/search-index.json")
      .then((r) => {
        if (!r.ok) throw new Error("bad response");
        return r.json();
      })
      .then((data: SearchItem[]) => {
        setItems(data);
        setLoadState("loaded");
      })
      .catch(() => setLoadState("error"));
  }, [loadState]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q || !items) return [];
    const words = q.split(/\s+/);
    const scored: { it: SearchItem; score: number }[] = [];
    for (const it of items) {
      const titleHay = `${it.classLabel} ${it.subjectName} ${it.title}`.toLowerCase();
      const fullHay = `${titleHay} ${it.keywords}`;
      // Every typed word must appear somewhere (title or concept keywords).
      if (!words.every((w) => fullHay.includes(w))) continue;
      // Rank title/class/subject matches above concept-only matches.
      const score = words.every((w) => titleHay.includes(w)) ? 0 : 1;
      scored.push({ it, score });
    }
    scored.sort((a, b) => a.score - b.score || a.it.title.localeCompare(b.it.title));
    return scored.slice(0, 8).map((s) => s.it);
  }, [items, query]);

  function go(i: number) {
    const item = results[i];
    if (item) router.push(item.url);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!open || results.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => (a + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => (a - 1 + results.length) % results.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      go(active);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  const showPanel = open && query.trim().length > 0;

  return (
    <div className="relative w-full max-w-xl">
      <div className="relative">
        <span
          aria-hidden
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg text-muted"
        >
          🔍
        </span>
        <input
          type="text"
          role="combobox"
          aria-expanded={showPanel}
          aria-controls="chapter-search-results"
          autoComplete="off"
          spellCheck={false}
          value={query}
          placeholder="Search topics & chapters — try “Pythagoras” or “osmosis”"
          onChange={(e) => {
            ensureLoaded();
            setQuery(e.target.value);
            setOpen(true);
            setActive(0);
          }}
          onFocus={() => {
            ensureLoaded();
            setOpen(true);
          }}
          onKeyDown={onKeyDown}
          onBlur={() => {
            blurTimer.current = setTimeout(() => setOpen(false), 150);
          }}
          className="w-full rounded-full border border-white/60 bg-white/70 py-3 pl-11 pr-4 text-ink shadow-sm outline-none backdrop-blur transition placeholder:text-muted focus:border-cobalt focus:ring-2 focus:ring-cobalt/20"
        />
      </div>

      {showPanel && (
        <div
          id="chapter-search-results"
          role="listbox"
          onMouseDown={() => {
            // keep focus/navigation working when a result is clicked
            if (blurTimer.current) clearTimeout(blurTimer.current);
          }}
          className="card absolute z-20 mt-2 w-full overflow-hidden p-1.5 shadow-lg"
        >
          {results.length === 0 ? (
            <p className="px-3 py-3 text-sm text-muted">
              {loadState === "loading" || (loadState === "idle" && !items)
                ? "Searching…"
                : loadState === "error"
                  ? "Couldn’t load search. Please refresh and try again."
                  : `No chapters match “${query.trim()}”. Try a topic, class or subject.`}
            </p>
          ) : (
            <ul className="max-h-80 overflow-auto">
              {results.map((it, i) => (
                <li key={it.url} role="option" aria-selected={i === active}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onClick={() => go(i)}
                    className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left transition ${
                      i === active ? "bg-cobalt-soft" : "hover:bg-cobalt-soft/60"
                    }`}
                  >
                    <span className="min-w-0">
                      <span className="block truncate font-semibold text-ink">
                        {it.title}
                      </span>
                      <span className="text-xs text-muted">
                        {it.classLabel} · {it.subjectName}
                      </span>
                    </span>
                    <span aria-hidden className="shrink-0 text-muted">↵</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
