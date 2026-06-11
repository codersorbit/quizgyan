// Run with: npx tsx scripts/test-wordcount.ts
// Lightweight assertions (no test framework needed). Exits non-zero on failure.
import { analyze, words, countSentences, countParagraphs } from "../lib/tools/logic/wordCount";

let failed = 0;
function eq(label: string, got: unknown, want: unknown) {
  const ok = JSON.stringify(got) === JSON.stringify(want);
  if (!ok) {
    failed += 1;
    console.error(`✗ ${label}: got ${JSON.stringify(got)}, want ${JSON.stringify(want)}`);
  } else {
    console.log(`✓ ${label}`);
  }
}

// English
eq("two words", analyze("Hello world").words, 2);
eq("empty words", analyze("").words, 0);
eq("empty sentences", countSentences(""), 0);
eq("empty paragraphs", countParagraphs(""), 0);
eq("chars with spaces", analyze("ab cd").charsWithSpaces, 5);
eq("chars no spaces", analyze("ab cd").charsNoSpaces, 4);
eq("three sentences", countSentences("One. Two! Three?"), 3);
eq("no end mark = 1 sentence", countSentences("just some text"), 1);
eq("two paragraphs", countParagraphs("para one\n\npara two"), 2);
eq("one paragraph (single newline)", countParagraphs("line one\nline two"), 1);
eq("longest word", analyze("a bb cccc dd").longestWord, "cccc");
eq("avg word length", analyze("aa bb cc").avgWordLength, 2);

// Indian danda + Bengali
eq("danda sentences", countSentences("আমি যাই। তুমি এসো।"), 2);
eq("bengali words", words("আমি বাংলা লিখি").length, 3);
eq("hindi words", words("मैं हिन्दी लिखता हूँ").length, 4);

// Reading/speaking time (200 / 130 wpm)
eq("reading time 200 words", analyze(Array(200).fill("word").join(" ")).readingSeconds, 60);

if (failed) {
  console.error(`\n${failed} assertion(s) failed.`);
  process.exit(1);
}
console.log("\nAll word-count assertions passed.");
