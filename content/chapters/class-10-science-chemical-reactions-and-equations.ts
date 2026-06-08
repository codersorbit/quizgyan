import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "10",
  subject: "science",
  slug: "chemical-reactions-and-equations",
  title: "Chemical Reactions and Equations",
  order: 1,
  seoTitle:
    "Chemical Reactions and Equations Class 10 CBSE Notes, MCQs, Quiz & Types",
  metaDescription:
    "Class 10 Science Chemical Reactions and Equations: balancing equations, combination, decomposition, displacement and double displacement reactions, oxidation and reduction, corrosion, rancidity, MCQ quiz and important questions.",
  overview:
    "A chemical reaction changes one or more substances into new substances with new properties. This chapter teaches you to write and balance chemical equations using the law of conservation of mass, to classify reactions into their main types, and to understand oxidation, reduction, corrosion and rancidity. It is the opening chapter of Class 10 Chemistry and lays the groundwork for everything that follows.",
  objectives: [
    "Write and balance a chemical equation.",
    "State the law of conservation of mass.",
    "Classify reactions as combination, decomposition, displacement or double displacement.",
    "Identify oxidation and reduction in a reaction.",
    "Explain corrosion and rancidity with examples.",
  ],
  concepts: [
    {
      heading: "Chemical equations and balancing",
      body: "A chemical equation shows reactants changing into products. Because matter is neither created nor destroyed (law of conservation of mass), the number of atoms of each element must be equal on both sides — this is done by adjusting coefficients, never the subscripts inside a formula.",
    },
    {
      heading: "Types of chemical reactions",
      body: "Combination: two or more substances form one product. Decomposition: one substance breaks into two or more. Displacement: a more reactive element pushes out a less reactive one. Double displacement: two compounds exchange ions, often forming a precipitate.",
    },
    {
      heading: "Oxidation and reduction (redox)",
      body: "Oxidation is the gain of oxygen or loss of hydrogen; reduction is the loss of oxygen or gain of hydrogen. They always occur together in a redox reaction — one substance is oxidised while another is reduced.",
    },
    {
      heading: "Corrosion and rancidity",
      body: "Corrosion is the slow oxidation of a metal by air and moisture (e.g. rusting of iron). Rancidity is the oxidation of fats and oils in food, giving an unpleasant smell and taste; it is slowed by antioxidants, airtight packing and refrigeration.",
    },
  ],
  formulas: [
    { name: "Combination (example)", formula: "2Mg + O₂ → 2MgO" },
    { name: "Decomposition (example)", formula: "CaCO₃ → CaO + CO₂ (on heating)" },
    { name: "Displacement (example)", formula: "Fe + CuSO₄ → FeSO₄ + Cu" },
    { name: "Double displacement (example)", formula: "Na₂SO₄ + BaCl₂ → BaSO₄↓ + 2NaCl" },
  ],
  definitions: [
    { term: "Chemical reaction", meaning: "A process in which reactants change into new products with different properties." },
    { term: "Balanced equation", meaning: "An equation with equal numbers of atoms of each element on both sides." },
    { term: "Oxidation", meaning: "Gain of oxygen or loss of hydrogen by a substance." },
    { term: "Reduction", meaning: "Loss of oxygen or gain of hydrogen by a substance." },
  ],
  examples: [
    {
      problem: "Balance the equation H₂ + O₂ → H₂O.",
      solution:
        "Oxygen is unbalanced. Put 2 before H₂O: H₂ + O₂ → 2H₂O. Now hydrogen is unbalanced, so put 2 before H₂: 2H₂ + O₂ → 2H₂O. Atoms now balance (H: 4 = 4, O: 2 = 2).",
    },
    {
      problem: "Identify the type of reaction: CaCO₃ → CaO + CO₂.",
      solution:
        "One reactant breaks into two products on heating, so it is a (thermal) decomposition reaction.",
    },
    {
      problem: "Why does Fe + CuSO₄ → FeSO₄ + Cu occur?",
      solution:
        "Iron is more reactive than copper, so it displaces copper from copper sulphate. This is a displacement reaction; the blue colour fades and a reddish copper deposit forms.",
    },
  ],
  commonMistakes: [
    "Changing subscripts inside a formula to balance — only coefficients may be adjusted.",
    "Forgetting that the number of atoms (not molecules) must match on both sides.",
    "Confusing oxidation (gain of oxygen) with reduction (loss of oxygen).",
    "Omitting state symbols (s, l, g, aq) where the question asks for them.",
  ],
  mcqs: [
    { id: "cr1", difficulty: "easy", q: "A balanced chemical equation obeys the law of:", options: ["definite volumes", "multiple proportions", "constant proportions", "conservation of mass"], answer: 3, explanation: "Equal atoms on both sides reflect conservation of mass." },
    { id: "cr2", difficulty: "easy", q: "2Mg + O₂ → 2MgO is an example of a:", options: ["double displacement reaction", "decomposition reaction", "combination reaction", "displacement reaction"], answer: 2, explanation: "Two substances combine to form one product." },
    { id: "cr3", difficulty: "easy", q: "CaCO₃ → CaO + CO₂ on heating is a:", options: ["neutralisation", "displacement reaction", "combination reaction", "decomposition reaction"], answer: 3, explanation: "One compound splits into two — decomposition." },
    { id: "cr4", difficulty: "medium", q: "Fe + CuSO₄ → FeSO₄ + Cu is a:", options: ["displacement reaction", "combination reaction", "double displacement reaction", "decomposition reaction"], answer: 0, explanation: "More reactive iron displaces copper — displacement." },
    { id: "cr5", difficulty: "medium", q: "Oxidation is defined as:", options: ["gain of hydrogen", "loss of mass", "loss of oxygen", "gain of oxygen or loss of hydrogen"], answer: 3, explanation: "Oxidation = gain of oxygen / loss of hydrogen." },
    { id: "cr6", difficulty: "medium", q: "Reduction is defined as:", options: ["loss of hydrogen", "gain of mass", "loss of oxygen or gain of hydrogen", "gain of oxygen"], answer: 2, explanation: "Reduction = loss of oxygen / gain of hydrogen." },
    { id: "cr7", difficulty: "easy", q: "The unpleasant smell of oily food kept for long is due to:", options: ["oxidation of fats (rancidity)", "corrosion", "neutralisation", "rusting"], answer: 0, explanation: "Rancidity is the oxidation of fats and oils." },
    { id: "cr8", difficulty: "easy", q: "Rusting of iron is an example of:", options: ["decomposition", "corrosion", "combination", "reduction"], answer: 1, explanation: "Rusting is corrosion — slow oxidation of a metal." },
    { id: "cr9", difficulty: "medium", q: "In Na₂SO₄ + BaCl₂ → BaSO₄ + 2NaCl, the white precipitate is:", options: ["BaSO₄", "NaCl", "BaCl₂", "Na₂SO₄"], answer: 0, explanation: "Barium sulphate (BaSO₄) is the insoluble white precipitate." },
    { id: "cr10", difficulty: "hard", q: "Respiration in our body is a:", options: ["endothermic reaction", "displacement reaction", "decomposition only", "exothermic reaction"], answer: 3, explanation: "Respiration releases energy, so it is exothermic (and a redox/oxidation process)." },
    { id: "bk10s0", difficulty: "easy", q: "A reaction in which two or more substances combine to form a single product is a?", options: ["Combination reaction", "Decomposition reaction", "Displacement reaction", "Double displacement reaction"], answer: 0, explanation: "In a combination reaction, A + B → AB." },
    { id: "bk10s1", difficulty: "medium", q: "A reaction in which a single compound breaks into simpler substances is a?", options: ["Combination reaction", "Decomposition reaction", "Neutralisation", "Combustion"], answer: 1, explanation: "In decomposition, AB → A + B." },
    { id: "bk10s2", difficulty: "medium", q: "The gain of oxygen or loss of hydrogen by a substance is called?", options: ["Reduction", "Neutralisation", "Oxidation", "Sublimation"], answer: 2, explanation: "Oxidation is gain of oxygen or loss of hydrogen." },
  ],
  shortQuestions: [
    { q: "Why must a chemical equation be balanced?", a: "To satisfy the law of conservation of mass — atoms are neither created nor destroyed in a reaction." },
    { q: "Give one example of a combination reaction.", a: "C + O₂ → CO₂ (carbon burns in oxygen to form carbon dioxide)." },
    { q: "How can rancidity be prevented?", a: "By adding antioxidants, packing in nitrogen, keeping food refrigerated and storing it in airtight containers." },
  ],
  longQuestions: [
    { q: "Define and give one example each of displacement and double displacement reactions.", a: "Displacement: a more reactive element replaces a less reactive one, e.g. Zn + CuSO₄ → ZnSO₄ + Cu. Double displacement: two compounds exchange ions, e.g. AgNO₃ + NaCl → AgCl↓ + NaNO₃, forming a precipitate of silver chloride." },
    { q: "What is a redox reaction? Identify the substance oxidised and reduced in CuO + H₂ → Cu + H₂O.", a: "A redox reaction is one in which oxidation and reduction occur together. Here CuO loses oxygen (reduced to Cu), and H₂ gains oxygen (oxidised to H₂O). So CuO is reduced and H₂ is oxidised." },
  ],
  hots: [
    { q: "Why does the colour of copper sulphate solution change when an iron nail is dipped in it?", a: "Iron is more reactive than copper and displaces it from copper sulphate, forming light-green iron sulphate. The blue colour fades and reddish copper deposits on the nail." },
    { q: "A magnesium ribbon is burnt in air. Why should it not be looked at directly?", a: "Magnesium burns with a dazzling white light (forming MgO) that is bright enough to harm the eyes, so direct viewing is avoided." },
  ],
  revisionNotes: [
    "Balance equations using coefficients (conservation of mass).",
    "Types: combination, decomposition, displacement, double displacement.",
    "Oxidation = gain O / lose H; Reduction = lose O / gain H.",
    "Corrosion = metal oxidation; rancidity = oxidation of fats/oils.",
  ],
  keyTakeaways: [
    "Never change subscripts to balance — only coefficients.",
    "Oxidation and reduction always happen together (redox).",
    "Recognise reaction types from how reactants rearrange.",
  ],
  faq: [
    { q: "What is the difference between corrosion and rancidity?", a: "Corrosion is the oxidation of metals (like rusting of iron); rancidity is the oxidation of fats and oils in food." },
    { q: "How do I balance a chemical equation quickly?", a: "Count atoms of each element on both sides, then adjust coefficients (not subscripts) until each element is equal, usually balancing metals first and hydrogen/oxygen last." },
    { q: "Is this chapter important for the board exam?", a: "Yes — balancing, reaction types and redox are frequently asked and carry steady marks." },
  ],
  related: [
    { classId: "10", subject: "science", slug: "acids-bases-and-salts" },
    { classId: "10", subject: "science", slug: "metals-and-non-metals" },
  ],
};

export default chapter;
