// Run with: npx tsx scripts/test-number-to-words.ts
import { numberToWords, groupDigits, parseNumberInput } from "../lib/tools/logic/numberToWords";

let failed = 0;
function eq(label: string, got: unknown, want: unknown) {
  if (JSON.stringify(got) !== JSON.stringify(want)) {
    failed += 1;
    console.error(`✗ ${label}\n    got:  ${JSON.stringify(got)}\n    want: ${JSON.stringify(want)}`);
  } else {
    console.log(`✓ ${label}`);
  }
}
const en = (s: string, o = {}) => numberToWords(s, { lang: "en", ...o });
const hi = (s: string, o = {}) => numberToWords(s, { lang: "hi", ...o });
const bn = (s: string, o = {}) => numberToWords(s, { lang: "bn", ...o });

// English — Indian system
eq("en 0", en("0"), "Zero");
eq("en 5", en("5"), "Five");
eq("en 19", en("19"), "Nineteen");
eq("en 67", en("67"), "Sixty-Seven");
eq("en 100", en("100"), "One Hundred");
eq("en 234", en("234"), "Two Hundred Thirty-Four");
eq("en 1000", en("1000"), "One Thousand");
eq("en 100000", en("100000"), "One Lakh");
eq("en 1234567", en("1234567"), "Twelve Lakh Thirty-Four Thousand Five Hundred Sixty-Seven");
eq("en 1 crore", en("10000000"), "One Crore");
eq("en 100 crore", en("1000000000"), "One Hundred Crore");
eq("en negative", en("-45"), "Minus Forty-Five");
eq("en decimal", en("12.34"), "Twelve Point Three Four");
eq("en decimal trailing zero trimmed", en("12.50"), "Twelve Point Five");
eq("en -0 is zero", en("-0"), "Zero");

// English — international system
eq("en intl million", en("1000000", { system: "international" }), "One Million");
eq("en intl 1.23B", en("1234567890", { system: "international" }), "One Billion Two Hundred Thirty-Four Million Five Hundred Sixty-Seven Thousand Eight Hundred Ninety");

// English — currency
eq("en currency", en("1234.50", { currency: true }), "Rupees One Thousand Two Hundred Thirty-Four and Fifty Paise Only");
eq("en currency no paise", en("500", { currency: true }), "Rupees Five Hundred Only");
eq("en currency 5.05", en("5.05", { currency: true }), "Rupees Five and Five Paise Only");

// Hindi
eq("hi 1234567", hi("1234567"), "बारह लाख चौंतीस हज़ार पाँच सौ सड़सठ");
eq("hi 234", hi("234"), "दो सौ चौंतीस");
eq("hi 99", hi("99"), "निन्यानवे");
eq("hi currency", hi("1234.50", { currency: true }), "एक हज़ार दो सौ चौंतीस रुपये और पचास पैसे मात्र");
eq("hi decimal", hi("7.5"), "सात दशमलव पाँच");

// Bengali
eq("bn 1234567", bn("1234567"), "বারো লাখ চৌত্রিশ হাজার পাঁচশো সাতষট্টি");
eq("bn 200", bn("200"), "দুইশো");
eq("bn 99", bn("99"), "নিরানব্বই");
eq("bn currency", bn("1234.50", { currency: true }), "এক হাজার দুইশো চৌত্রিশ টাকা এবং পঞ্চাশ পয়সা মাত্র");

// Grouping + parse
eq("group indian", groupDigits("1234567", "indian"), "12,34,567");
eq("group intl", groupDigits("1234567", "international"), "1,234,567");
eq("parse forgiving", parseNumberInput("12,34,567").intPart, "1234567");
eq("parse invalid", parseNumberInput("12a3").valid, false);
eq("empty → ''", en(""), "");

// Large (BigInt exactness)
eq("en large", en("12345678901234567890"), "One Lakh Twenty-Three Thousand Four Hundred Fifty-Six Crore Seventy-Eight Lakh Ninety Thousand One Hundred Twenty-Three Crore Forty-Five Lakh Sixty-Seven Thousand Eight Hundred Ninety");

if (failed) {
  console.error(`\n${failed} assertion(s) failed.`);
  process.exit(1);
}
console.log("\nAll number-to-words assertions passed.");
