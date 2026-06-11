// Run with: npx tsx scripts/test-typing-test.ts
import { compareTyped, computeStats, TYPING_PASSAGES } from "../lib/tools/logic/typingTest";

let failed = 0;
function eq(label: string, got: unknown, want: unknown) {
  if (JSON.stringify(got) !== JSON.stringify(want)) {
    failed += 1;
    console.error(`✗ ${label}: got ${JSON.stringify(got)}, want ${JSON.stringify(want)}`);
  } else console.log(`✓ ${label}`);
}

eq("compare all correct", compareTyped("hello", "hello"), { correct: 5, incorrect: 0 });
eq("compare one wrong", compareTyped("hello", "hexlo"), { correct: 4, incorrect: 1 });
eq("compare partial", compareTyped("hello world", "hello"), { correct: 5, incorrect: 0 });
eq("compare overtyped", compareTyped("hi", "hiya"), { correct: 2, incorrect: 2 });

// 250 chars, 0 errors, 60s → 50 wpm gross & net, 100% accuracy
eq("50 wpm clean", computeStats(250, 0, 60000), { grossWpm: 50, netWpm: 50, accuracy: 100, errors: 0, correct: 250, typed: 250, seconds: 60 });
// 5 errors in 60s
const s = computeStats(250, 5, 60000);
eq("net penalised by errors", s.netWpm, 45);
eq("accuracy with errors", s.accuracy, 98);
// 250 chars in 30s → double the wpm
eq("30s doubles gross", computeStats(250, 0, 30000).grossWpm, 100);
// nothing typed
eq("empty accuracy 100", computeStats(0, 0, 10000).accuracy, 100);

// passages present & non-trivial in all three languages
for (const lang of ["en", "hi", "bn"] as const) {
  eq(`${lang} has ≥3 passages`, TYPING_PASSAGES[lang].length >= 3, true);
  eq(`${lang} passages non-empty`, TYPING_PASSAGES[lang].every((p) => p.length > 100), true);
}

if (failed) {
  console.error(`\n${failed} failed.`);
  process.exit(1);
}
console.log("\nAll typing-test assertions passed.");
