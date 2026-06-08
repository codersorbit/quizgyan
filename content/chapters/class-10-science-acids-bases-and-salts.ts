import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "10",
  subject: "science",
  slug: "acids-bases-and-salts",
  title: "Acids, Bases and Salts",
  order: 2,
  seoTitle: "Acids Bases and Salts Class 10 CBSE Notes, MCQs, Quiz & pH Scale",
  metaDescription:
    "Class 10 Science Acids, Bases and Salts: properties, indicators, pH scale, neutralisation, important salts like baking soda, washing soda, bleaching powder and plaster of Paris, MCQ quiz and important questions.",
  overview:
    "Acids taste sour and bases taste bitter, but chemistry defines them by the ions they release in water. This chapter covers their properties, the indicators and pH scale used to identify them, how they neutralise each other to form salts, and the preparation and uses of important salts such as baking soda, washing soda, bleaching powder and plaster of Paris.",
  objectives: [
    "List the chemical properties of acids and bases.",
    "Use indicators to distinguish acids from bases.",
    "Explain the pH scale and its importance.",
    "Describe neutralisation and the formation of salts.",
    "State the preparation and uses of common salts.",
  ],
  concepts: [
    {
      heading: "Acids and bases",
      body: "Acids produce hydrogen ions (H⁺) in water; bases produce hydroxide ions (OH⁻). Acids react with metals to give hydrogen gas, with carbonates to give CO₂, and with bases to give salt and water. Bases that dissolve in water are called alkalis.",
    },
    {
      heading: "Indicators",
      body: "Indicators change colour to show acidity or basicity. Litmus turns red in acid and blue in base; methyl orange and phenolphthalein behave differently in each; olfactory indicators (like onion or clove oil) change smell.",
    },
    {
      heading: "The pH scale",
      body: "pH measures hydrogen-ion concentration on a scale of 0 to 14. pH < 7 is acidic, pH = 7 is neutral, and pH > 7 is basic. A lower pH means a stronger acid. pH is important in our body, in soil, and in tooth decay.",
    },
    {
      heading: "Neutralisation and salts",
      body: "When an acid reacts with a base, they neutralise each other to form a salt and water: acid + base → salt + water. Salts can be acidic, basic or neutral depending on the acid and base that formed them.",
    },
  ],
  formulas: [
    { name: "Neutralisation", formula: "acid + base → salt + water" },
    { name: "Acid + metal", formula: "acid + metal → salt + hydrogen gas" },
    { name: "Acid + carbonate", formula: "acid + carbonate → salt + water + CO₂" },
    { name: "pH scale", formula: "pH < 7 acidic, = 7 neutral, > 7 basic" },
  ],
  definitions: [
    { term: "Acid", meaning: "A substance that produces hydrogen ions (H⁺) when dissolved in water." },
    { term: "Base", meaning: "A substance that produces hydroxide ions (OH⁻) when dissolved in water." },
    { term: "Salt", meaning: "An ionic compound formed by the neutralisation of an acid with a base." },
    { term: "pH", meaning: "A number from 0 to 14 indicating the hydrogen-ion concentration and hence acidity or basicity." },
  ],
  examples: [
    {
      problem: "What happens when dilute HCl reacts with zinc?",
      solution:
        "Zinc reacts with hydrochloric acid to give zinc chloride and hydrogen gas: Zn + 2HCl → ZnCl₂ + H₂↑. The gas burns with a 'pop' sound.",
    },
    {
      problem: "Why does our mouth need a pH above 5.5?",
      solution:
        "Below pH 5.5, tooth enamel (calcium phosphate) starts to corrode, causing decay. Bacteria produce acids from sugar, lowering the pH, so brushing with a basic toothpaste neutralises the acid.",
    },
    {
      problem: "Write the salt formed when NaOH reacts with HCl.",
      solution: "NaOH + HCl → NaCl + H₂O. The salt is sodium chloride (common salt).",
    },
  ],
  commonMistakes: [
    "Thinking all bases are alkalis — only water-soluble bases are alkalis.",
    "Assuming a higher pH means more acidic (it is the opposite).",
    "Forgetting that acids release H₂ gas with metals but CO₂ with carbonates.",
    "Mixing up the colour changes of litmus in acids and bases.",
  ],
  mcqs: [
    { id: "ab1", difficulty: "easy", q: "Acids produce which ion in water?", options: ["H⁺", "OH⁻", "Na⁺", "Cl⁻"], answer: 0, explanation: "Acids release hydrogen ions (H⁺) in water." },
    { id: "ab2", difficulty: "easy", q: "A neutral solution has a pH of:", options: ["0", "14", "7", "1"], answer: 2, explanation: "pH = 7 is neutral." },
    { id: "ab3", difficulty: "easy", q: "Blue litmus turns ____ in an acid.", options: ["green", "red", "blue", "colourless"], answer: 1, explanation: "Acids turn blue litmus red." },
    { id: "ab4", difficulty: "medium", q: "Acid reacting with a metal produces:", options: ["carbon dioxide", "chlorine", "hydrogen gas", "oxygen"], answer: 2, explanation: "Acid + metal → salt + hydrogen gas." },
    { id: "ab5", difficulty: "medium", q: "The reaction of an acid with a base is called:", options: ["displacement", "corrosion", "oxidation", "neutralisation"], answer: 3, explanation: "Acid + base → salt + water is neutralisation." },
    { id: "ab6", difficulty: "easy", q: "Which of these is used to whiten clothes and disinfect water?", options: ["common salt", "baking soda", "washing soda", "bleaching powder"], answer: 3, explanation: "Bleaching powder (CaOCl₂) is a bleaching and disinfecting agent." },
    { id: "ab7", difficulty: "medium", q: "Baking soda is chemically:", options: ["Na₂CO₃", "CaOCl₂", "NaHCO₃", "NaCl"], answer: 2, explanation: "Baking soda is sodium hydrogen carbonate, NaHCO₃." },
    { id: "ab8", difficulty: "medium", q: "Plaster of Paris is obtained by heating:", options: ["gypsum", "common salt", "washing soda", "limestone"], answer: 0, explanation: "Heating gypsum (CaSO₄·2H₂O) gives plaster of Paris (CaSO₄·½H₂O)." },
    { id: "ab9", difficulty: "easy", q: "As acidity increases, the pH value:", options: ["becomes 14", "stays at 7", "decreases", "increases"], answer: 2, explanation: "Stronger acids have lower pH." },
    { id: "ab10", difficulty: "hard", q: "Acid reacting with a carbonate releases which gas?", options: ["carbon dioxide", "hydrogen", "oxygen", "nitrogen"], answer: 0, explanation: "Acid + carbonate → salt + water + CO₂." },
    { id: "bk10s3", difficulty: "medium", q: "Acids produce which ion when dissolved in water?", options: ["Hydroxide ions (OH-)", "Sodium ions", "Chloride ions", "Hydrogen ions (H+)"], answer: 3, explanation: "Acids release H+ ions in water; bases release OH- ions." },
    { id: "bk10s4", difficulty: "medium", q: "The pH value of a neutral solution such as pure water is?", options: ["7", "0", "14", "1"], answer: 0, explanation: "A neutral solution has a pH of 7." },
  ],
  shortQuestions: [
    { q: "What is an alkali?", a: "A base that dissolves in water (e.g. NaOH, KOH)." },
    { q: "Name the gas released when an acid reacts with a metal, and the test for it.", a: "Hydrogen gas; it burns with a 'pop' sound when a burning splinter is brought near." },
    { q: "Give the chemical name and one use of washing soda.", a: "Sodium carbonate (Na₂CO₃·10H₂O); used for removing permanent hardness of water and in cleaning." },
  ],
  longQuestions: [
    { q: "Explain the preparation and two uses of bleaching powder.", a: "Bleaching powder (calcium oxychloride, CaOCl₂) is prepared by passing chlorine over dry slaked lime [Ca(OH)₂]. Uses: bleaching cotton and paper, and disinfecting drinking water." },
    { q: "Why is plaster of Paris stored in moisture-proof containers?", a: "Plaster of Paris (CaSO₄·½H₂O) reacts with water and sets into a hard solid (gypsum). If exposed to moisture, it would set in the container and become useless, so it is kept dry." },
  ],
  hots: [
    { q: "A farmer's soil is too acidic. What should be added and why?", a: "A base such as quicklime (CaO) or slaked lime [Ca(OH)₂] is added to neutralise the excess acid and raise the soil pH to a range suitable for crops." },
    { q: "Why does dry HCl gas not turn blue litmus red, but its water solution does?", a: "Dry HCl gas does not release H⁺ ions; only when dissolved in water does it ionise to give H⁺, which makes it acidic and turns blue litmus red." },
  ],
  revisionNotes: [
    "Acids → H⁺; bases → OH⁻; alkalis are soluble bases.",
    "pH: <7 acidic, 7 neutral, >7 basic; lower pH = stronger acid.",
    "Acid + base → salt + water (neutralisation).",
    "Key salts: NaHCO₃ (baking soda), Na₂CO₃ (washing soda), CaOCl₂ (bleaching powder), CaSO₄·½H₂O (PoP).",
  ],
  keyTakeaways: [
    "Identify acids/bases by the ions they give in water.",
    "Remember the reactions of acids with metals, carbonates and bases.",
    "Know the formula and one use of each important salt.",
  ],
  faq: [
    { q: "What is the pH of a neutral solution?", a: "Exactly 7 — neither acidic nor basic, like pure water." },
    { q: "Why is the pH scale important in daily life?", a: "It explains tooth decay, soil treatment for crops, the action of antacids in the stomach, and why some plants and animals need specific pH ranges." },
    { q: "What is the difference between baking soda and washing soda?", a: "Baking soda is sodium hydrogen carbonate (NaHCO₃); washing soda is sodium carbonate decahydrate (Na₂CO₃·10H₂O)." },
  ],
  related: [
    { classId: "10", subject: "science", slug: "chemical-reactions-and-equations" },
    { classId: "10", subject: "science", slug: "metals-and-non-metals" },
  ],
};

export default chapter;
