// Pure, framework-free text statistics. Unicode-aware so English, বাংলা and
// हिन्दी all count fairly. Runs in the browser and in Node (Intl.Segmenter is
// available in both modern runtimes); falls back gracefully if it is absent.

export interface TextStats {
  words: number;
  charsWithSpaces: number;
  charsNoSpaces: number;
  sentences: number;
  paragraphs: number;
  longestWord: string;
  avgWordLength: number; // characters per word, one decimal place
  readingSeconds: number; // at READ_WPM
  speakingSeconds: number; // at SPEAK_WPM
}

export const READ_WPM = 200;
export const SPEAK_WPM = 130;

const hasSegmenter = typeof Intl !== "undefined" && typeof (Intl as { Segmenter?: unknown }).Segmenter === "function";

/** Count user-perceived characters (grapheme clusters), not UTF-16 code units. */
export function countGraphemes(s: string): number {
  if (!s) return 0;
  if (hasSegmenter) {
    const seg = new Intl.Segmenter(undefined, { granularity: "grapheme" });
    let n = 0;
    for (const _ of seg.segment(s)) n += 1;
    return n;
  }
  return Array.from(s).length;
}

/** Word-like segments using a Unicode segmenter, with a whitespace fallback. */
export function words(s: string): string[] {
  const trimmed = s.trim();
  if (!trimmed) return [];
  if (hasSegmenter) {
    const seg = new Intl.Segmenter(undefined, { granularity: "word" });
    const out: string[] = [];
    for (const part of seg.segment(trimmed)) {
      if (part.isWordLike) out.push(part.segment);
    }
    return out;
  }
  return trimmed.split(/\s+/u).filter(Boolean);
}

/** Sentences via end marks: . ! ? plus the Indian danda । and double danda ॥. */
export function countSentences(s: string): number {
  const trimmed = s.trim();
  if (!trimmed) return 0;
  const matches = trimmed.match(/[.!?।॥]+(?=\s|$)/gu);
  if (matches && matches.length > 0) return matches.length;
  return 1; // text with no terminator is still one sentence
}

/** Paragraphs = blocks separated by one or more blank lines. */
export function countParagraphs(s: string): number {
  return s
    .split(/\n\s*\n/u)
    .map((p) => p.trim())
    .filter(Boolean).length;
}

function round(n: number): number {
  return Math.round(n);
}

export function analyze(text: string): TextStats {
  const wordList = words(text);
  const wordCount = wordList.length;
  const charsWithSpaces = countGraphemes(text);
  const charsNoSpaces = countGraphemes(text.replace(/\s/gu, ""));

  let longestWord = "";
  let longestLen = 0;
  let lettersInWords = 0;
  for (const w of wordList) {
    const len = countGraphemes(w);
    lettersInWords += len;
    if (len > longestLen) {
      longestLen = len;
      longestWord = w;
    }
  }

  return {
    words: wordCount,
    charsWithSpaces,
    charsNoSpaces,
    sentences: countSentences(text),
    paragraphs: countParagraphs(text),
    longestWord,
    avgWordLength: wordCount ? Math.round((lettersInWords / wordCount) * 10) / 10 : 0,
    readingSeconds: round((wordCount / READ_WPM) * 60),
    speakingSeconds: round((wordCount / SPEAK_WPM) * 60),
  };
}
