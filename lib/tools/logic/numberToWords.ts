// Pure number → words. Indian (lakh/crore) and international (million/billion)
// systems, in English / हिन्दी / বাংলা, with a Rupees-Paise currency mode.
// BigInt-based, so arbitrarily large integers are exact.
//
// NOTE (// VERIFY): the Hindi and Bengali 0–99 tables and scale words below are
// the standard literary forms. They should be eyeballed by a native reader once
// — number spelling (esp. 21–99) is irregular and easy to get subtly wrong.

export type NumLang = "en" | "hi" | "bn";
export type NumSystem = "indian" | "international";

interface Dict {
  zero: string;
  units: string[]; // length 100: words for 0..99
  hundred: string;
  hundredJoin: string; // " " (en/hi) or "" (bn → একশো)
  indian: { thousand: string; lakh: string; crore: string };
  intl: { thousand: string; million: string; billion: string; trillion: string };
  point: string;
  minus: string;
  rupees: string;
  paise: string;
  and: string;
  only: string;
  rupeesFirst: boolean; // en: "Rupees X Only"; hi/bn: "X টাকা মাত্র"
}

/* ------------------------------- English -------------------------------- */
const EN_ONES = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
const EN_TENS = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
function enUnits(): string[] {
  const u: string[] = [];
  for (let i = 0; i < 100; i++) {
    if (i < 20) u.push(EN_ONES[i]);
    else u.push(EN_TENS[Math.floor(i / 10)] + (i % 10 ? `-${EN_ONES[i % 10]}` : ""));
  }
  return u;
}

/* -------------------------------- Hindi --------------------------------- */
const HI_UNITS = [
  "शून्य", "एक", "दो", "तीन", "चार", "पाँच", "छह", "सात", "आठ", "नौ",
  "दस", "ग्यारह", "बारह", "तेरह", "चौदह", "पंद्रह", "सोलह", "सत्रह", "अठारह", "उन्नीस",
  "बीस", "इक्कीस", "बाईस", "तेईस", "चौबीस", "पच्चीस", "छब्बीस", "सत्ताईस", "अट्ठाईस", "उनतीस",
  "तीस", "इकतीस", "बत्तीस", "तैंतीस", "चौंतीस", "पैंतीस", "छत्तीस", "सैंतीस", "अड़तीस", "उनतालीस",
  "चालीस", "इकतालीस", "बयालीस", "तैंतालीस", "चौवालीस", "पैंतालीस", "छियालीस", "सैंतालीस", "अड़तालीस", "उनचास",
  "पचास", "इक्यावन", "बावन", "तिरेपन", "चौवन", "पचपन", "छप्पन", "सत्तावन", "अट्ठावन", "उनसठ",
  "साठ", "इकसठ", "बासठ", "तिरसठ", "चौंसठ", "पैंसठ", "छियासठ", "सड़सठ", "अड़सठ", "उनहत्तर",
  "सत्तर", "इकहत्तर", "बहत्तर", "तिहत्तर", "चौहत्तर", "पचहत्तर", "छिहत्तर", "सतहत्तर", "अठहत्तर", "उन्यासी",
  "अस्सी", "इक्यासी", "बयासी", "तिरासी", "चौरासी", "पचासी", "छियासी", "सत्तासी", "अट्ठासी", "नवासी",
  "नब्बे", "इक्यानवे", "बानवे", "तिरानवे", "चौरानवे", "पचानवे", "छियानवे", "सत्तानवे", "अट्ठानवे", "निन्यानवे",
];

/* ------------------------------- Bengali -------------------------------- */
const BN_UNITS = [
  "শূন্য", "এক", "দুই", "তিন", "চার", "পাঁচ", "ছয়", "সাত", "আট", "নয়",
  "দশ", "এগারো", "বারো", "তেরো", "চোদ্দো", "পনেরো", "ষোলো", "সতেরো", "আঠারো", "ঊনিশ",
  "কুড়ি", "একুশ", "বাইশ", "তেইশ", "চব্বিশ", "পঁচিশ", "ছাব্বিশ", "সাতাশ", "আটাশ", "ঊনত্রিশ",
  "ত্রিশ", "একত্রিশ", "বত্রিশ", "তেত্রিশ", "চৌত্রিশ", "পঁয়ত্রিশ", "ছত্রিশ", "সাঁইত্রিশ", "আটত্রিশ", "ঊনচল্লিশ",
  "চল্লিশ", "একচল্লিশ", "বিয়াল্লিশ", "তেতাল্লিশ", "চুয়াল্লিশ", "পঁয়তাল্লিশ", "ছেচল্লিশ", "সাতচল্লিশ", "আটচল্লিশ", "ঊনপঞ্চাশ",
  "পঞ্চাশ", "একান্ন", "বাহান্ন", "তিপ্পান্ন", "চুয়ান্ন", "পঞ্চান্ন", "ছাপ্পান্ন", "সাতান্ন", "আটান্ন", "ঊনষাট",
  "ষাট", "একষট্টি", "বাষট্টি", "তেষট্টি", "চৌষট্টি", "পঁয়ষট্টি", "ছেষট্টি", "সাতষট্টি", "আটষট্টি", "ঊনসত্তর",
  "সত্তর", "একাত্তর", "বাহাত্তর", "তিয়াত্তর", "চুয়াত্তর", "পঁচাত্তর", "ছিয়াত্তর", "সাতাত্তর", "আটাত্তর", "ঊনআশি",
  "আশি", "একাশি", "বিরাশি", "তিরাশি", "চুরাশি", "পঁচাশি", "ছিয়াশি", "সাতাশি", "আটাশি", "ঊননব্বই",
  "নব্বই", "একানব্বই", "বিরানব্বই", "তিরানব্বই", "চুরানব্বই", "পঁচানব্বই", "ছিয়ানব্বই", "সাতানব্বই", "আটানব্বই", "নিরানব্বই",
];

const DICTS: Record<NumLang, Dict> = {
  en: {
    zero: "Zero",
    units: enUnits(),
    hundred: "Hundred",
    hundredJoin: " ",
    indian: { thousand: "Thousand", lakh: "Lakh", crore: "Crore" },
    intl: { thousand: "Thousand", million: "Million", billion: "Billion", trillion: "Trillion" },
    point: "Point",
    minus: "Minus",
    rupees: "Rupees",
    paise: "Paise",
    and: "and",
    only: "Only",
    rupeesFirst: true,
  },
  hi: {
    zero: "शून्य",
    units: HI_UNITS,
    hundred: "सौ",
    hundredJoin: " ",
    indian: { thousand: "हज़ार", lakh: "लाख", crore: "करोड़" },
    intl: { thousand: "हज़ार", million: "मिलियन", billion: "बिलियन", trillion: "ट्रिलियन" },
    point: "दशमलव",
    minus: "ऋण",
    rupees: "रुपये",
    paise: "पैसे",
    and: "और",
    only: "मात्र",
    rupeesFirst: false,
  },
  bn: {
    zero: "শূন্য",
    units: BN_UNITS,
    hundred: "শো",
    hundredJoin: "",
    indian: { thousand: "হাজার", lakh: "লাখ", crore: "কোটি" },
    intl: { thousand: "হাজার", million: "মিলিয়ন", billion: "বিলিয়ন", trillion: "ট্রিলিয়ন" },
    point: "দশমিক",
    minus: "ঋণ",
    rupees: "টাকা",
    paise: "পয়সা",
    and: "এবং",
    only: "মাত্র",
    rupeesFirst: false,
  },
};

function threeDigit(n: number, d: Dict): string {
  const h = Math.floor(n / 100);
  const r = n % 100;
  const parts: string[] = [];
  if (h > 0) parts.push(d.units[h] + d.hundredJoin + d.hundred);
  if (r > 0) parts.push(d.units[r]);
  return parts.join(" ");
}

const T3 = 1000n;
const T5 = 100000n;
const T7 = 10000000n;

function indianBig(n: bigint, d: Dict): string {
  if (n === 0n) return d.zero;
  const parts: string[] = [];
  const crore = n / T7;
  let rem = n % T7;
  const lakh = rem / T5;
  rem %= T5;
  const thousand = rem / T3;
  const hundreds = rem % T3;
  if (crore > 0n) parts.push(`${indianBig(crore, d)} ${d.indian.crore}`);
  if (lakh > 0n) parts.push(`${d.units[Number(lakh)]} ${d.indian.lakh}`);
  if (thousand > 0n) parts.push(`${d.units[Number(thousand)]} ${d.indian.thousand}`);
  if (hundreds > 0n) parts.push(threeDigit(Number(hundreds), d));
  return parts.join(" ");
}

const TRILLION = 1000000000000n;
const BILLION = 1000000000n;
const MILLION = 1000000n;

function intlBig(n: bigint, d: Dict): string {
  if (n === 0n) return d.zero;
  const parts: string[] = [];
  const tr = n / TRILLION;
  let rem = n % TRILLION;
  const bil = rem / BILLION;
  rem %= BILLION;
  const mil = rem / MILLION;
  rem %= MILLION;
  const tho = rem / T3;
  const hun = rem % T3;
  if (tr > 0n) parts.push(`${intlBig(tr, d)} ${d.intl.trillion}`);
  if (bil > 0n) parts.push(`${threeDigit(Number(bil), d)} ${d.intl.billion}`);
  if (mil > 0n) parts.push(`${threeDigit(Number(mil), d)} ${d.intl.million}`);
  if (tho > 0n) parts.push(`${threeDigit(Number(tho), d)} ${d.intl.thousand}`);
  if (hun > 0n) parts.push(threeDigit(Number(hun), d));
  return parts.join(" ");
}

export interface NumberToWordsOptions {
  lang: NumLang;
  system?: NumSystem; // default "indian"
  currency?: boolean; // Rupees & Paise
}

export interface ParsedNumber {
  valid: boolean;
  negative: boolean;
  intPart: string; // digits, no sign, leading zeros stripped ("" → treat as 0)
  decPart: string; // digits after the point (may be "")
}

/** Forgiving parse: strips commas/spaces, validates the shape. */
export function parseNumberInput(raw: string): ParsedNumber {
  const cleaned = raw.replace(/[,\s_]/g, "");
  if (cleaned === "" || cleaned === "-" || cleaned === "." || cleaned === "-.") {
    return { valid: false, negative: false, intPart: "", decPart: "" };
  }
  if (!/^-?\d*\.?\d*$/.test(cleaned)) {
    return { valid: false, negative: false, intPart: "", decPart: "" };
  }
  const negative = cleaned.startsWith("-");
  const body = negative ? cleaned.slice(1) : cleaned;
  const [intRaw = "", decRaw = ""] = body.split(".");
  const intPart = intRaw.replace(/^0+(?=\d)/, "");
  return { valid: true, negative, intPart, decPart: decRaw };
}

function integerWords(intPart: string, d: Dict, system: NumSystem): string {
  const n = BigInt(intPart === "" ? "0" : intPart);
  return system === "international" ? intlBig(n, d) : indianBig(n, d);
}

/** Convert a number string into words. Returns "" for invalid/empty input. */
export function numberToWords(raw: string, opts: NumberToWordsOptions): string {
  const { lang, system = "indian", currency = false } = opts;
  const d = DICTS[lang];
  const p = parseNumberInput(raw);
  if (!p.valid) return "";

  const isZero = (p.intPart === "" || /^0*$/.test(p.intPart)) && /^0*$/.test(p.decPart);
  const negative = p.negative && !isZero;

  if (currency) {
    const intWords = integerWords(p.intPart, d, system);
    const paiseNum = Number((p.decPart + "00").slice(0, 2));
    const segs: string[] = [];
    if (d.rupeesFirst) {
      segs.push(`${d.rupees} ${intWords}`);
      if (paiseNum > 0) segs.push(`${d.and} ${d.units[paiseNum]} ${d.paise}`);
      segs.push(d.only);
    } else {
      segs.push(`${intWords} ${d.rupees}`);
      if (paiseNum > 0) segs.push(`${d.and} ${d.units[paiseNum]} ${d.paise}`);
      segs.push(d.only);
    }
    const out = segs.join(" ");
    return negative ? `${d.minus} ${out}` : out;
  }

  let out = integerWords(p.intPart, d, system);
  const dec = p.decPart.replace(/0+$/, ""); // trim trailing zeros for plain decimals
  if (dec.length > 0) {
    const digits = dec.split("").map((ch) => d.units[Number(ch)]);
    out += ` ${d.point} ${digits.join(" ")}`;
  }
  return negative ? `${d.minus} ${out}` : out;
}

/** Group an integer-digit string with separators for display. */
export function groupDigits(intPart: string, system: NumSystem): string {
  const s = intPart === "" ? "0" : intPart;
  if (system === "international") {
    return s.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  // Indian: last 3, then groups of 2.
  if (s.length <= 3) return s;
  const last3 = s.slice(-3);
  const rest = s.slice(0, -3);
  return rest.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + last3;
}
