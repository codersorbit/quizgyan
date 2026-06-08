import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "9",
  subject: "science",
  slug: "atoms-and-molecules",
  title: "Atoms and Molecules",
  order: 3,
  seoTitle: "Atoms and Molecules Class 9 CBSE Notes, MCQs, Quiz & Mole Concept",
  metaDescription:
    "Class 9 Science Atoms and Molecules: laws of chemical combination, Dalton's atomic theory, atoms, molecules and ions, atomic and molecular mass, the mole concept and Avogadro number, MCQ quiz and important questions.",
  overview:
    "All matter is built from atoms. This Class 9 chapter covers the laws of chemical combination and Dalton's atomic theory, explains atoms, molecules and ions, shows how to write chemical formulae and find molecular masses, and introduces the mole concept and Avogadro number — the chemist's way of counting particles.",
  objectives: [
    "State the laws of chemical combination.",
    "Outline Dalton's atomic theory.",
    "Distinguish atoms, molecules and ions.",
    "Calculate molecular and formula unit masses.",
    "Apply the mole concept and Avogadro number.",
  ],
  concepts: [
    {
      heading: "Laws of chemical combination",
      body: "The law of conservation of mass states that mass is neither created nor destroyed in a chemical reaction. The law of constant proportions states that a pure compound always contains the same elements in the same ratio by mass.",
    },
    {
      heading: "Atoms, molecules and ions",
      body: "An atom is the smallest particle of an element. A molecule is a group of two or more atoms bonded together (e.g. O₂, H₂O). An ion is a charged particle formed when an atom gains or loses electrons (cation +, anion −).",
    },
    {
      heading: "Atomic and molecular mass",
      body: "Atomic mass is the mass of an atom relative to 1/12 the mass of a carbon-12 atom (in u). Molecular mass is the sum of the atomic masses of all atoms in a molecule; for ionic compounds we use the formula unit mass.",
    },
    {
      heading: "The mole concept",
      body: "One mole of any substance contains 6.022 × 10²³ particles (Avogadro number) and has a mass equal to its atomic or molecular mass in grams (molar mass). Moles link the mass of a substance to the number of its particles.",
    },
  ],
  formulas: [
    { name: "Avogadro number", formula: "1 mole = 6.022 × 10²³ particles" },
    { name: "Number of moles", formula: "n = mass ÷ molar mass" },
    { name: "Particles", formula: "number of particles = n × 6.022 × 10²³" },
  ],
  definitions: [
    { term: "Atom", meaning: "The smallest particle of an element that takes part in a chemical reaction." },
    { term: "Molecule", meaning: "A group of two or more atoms chemically bonded together." },
    { term: "Ion", meaning: "A charged particle formed when an atom gains or loses electrons." },
    { term: "Mole", meaning: "The amount of substance containing 6.022 × 10²³ particles." },
  ],
  examples: [
    {
      problem: "Find the molecular mass of water (H₂O). (H = 1, O = 16.)",
      solution: "Molecular mass = (2 × 1) + 16 = 18 u.",
    },
    {
      problem: "How many moles are present in 36 g of water?",
      solution: "Molar mass of water = 18 g. Moles = mass ÷ molar mass = 36 ÷ 18 = 2 moles.",
    },
    {
      problem: "How many molecules are in 2 moles of a substance?",
      solution: "Molecules = 2 × 6.022 × 10²³ = 1.2044 × 10²⁴ molecules.",
    },
  ],
  commonMistakes: [
    "Confusing atomic mass with mass number (mass number is for the nucleus only).",
    "Forgetting to multiply by the number of atoms when finding molecular mass.",
    "Mixing up the mole (amount) with a single molecule.",
    "Using the wrong molar mass when converting grams to moles.",
  ],
  mcqs: [
    { id: "am1", difficulty: "easy", q: "Mass is neither created nor destroyed in a reaction — this is the law of:", options: ["multiple proportions", "constant proportions", "conservation of mass", "Avogadro"], answer: 2, explanation: "It is the law of conservation of mass." },
    { id: "am2", difficulty: "easy", q: "The smallest particle of an element is a/an:", options: ["compound", "ion", "molecule", "atom"], answer: 3, explanation: "An atom is the smallest particle of an element." },
    { id: "am3", difficulty: "medium", q: "A charged particle formed by losing or gaining electrons is a/an:", options: ["molecule", "isotope", "ion", "atom"], answer: 2, explanation: "Such a charged particle is an ion." },
    { id: "am4", difficulty: "medium", q: "One mole of a substance contains how many particles?", options: ["6.022 × 10²⁴", "3.011 × 10²³", "6.022 × 10²³", "6.022 × 10²²"], answer: 2, explanation: "Avogadro number is 6.022 × 10²³." },
    { id: "am5", difficulty: "medium", q: "The molecular mass of water (H₂O) is:", options: ["20 u", "17 u", "16 u", "18 u"], answer: 3, explanation: "(2 × 1) + 16 = 18 u." },
    { id: "am6", difficulty: "easy", q: "A positively charged ion is called a/an:", options: ["cation", "radical", "isotope", "anion"], answer: 0, explanation: "A positive ion is a cation." },
    { id: "am7", difficulty: "medium", q: "The number of moles in 44 g of CO₂ (molar mass 44) is:", options: ["2", "1", "0.5", "44"], answer: 1, explanation: "44 ÷ 44 = 1 mole." },
    { id: "am8", difficulty: "easy", q: "The mass of one mole of a substance in grams is its:", options: ["atomic number", "valency", "density", "molar mass"], answer: 3, explanation: "It equals the molar mass in grams." },
    { id: "am9", difficulty: "medium", q: "A compound always has the same elements in the same ratio by mass — this is the law of:", options: ["conservation of mass", "Avogadro", "constant proportions", "Dalton"], answer: 2, explanation: "It is the law of constant (definite) proportions." },
    { id: "am10", difficulty: "hard", q: "The number of atoms in 0.5 mole of an element is:", options: ["3.011 × 10²³", "1.2 × 10²⁴", "6.022 × 10²³", "6.022 × 10²²"], answer: 0, explanation: "0.5 × 6.022 × 10²³ = 3.011 × 10²³ atoms." },
    { id: "bk9s4", difficulty: "hard", q: "The smallest particle of an element that can take part in a chemical reaction is the?", options: ["Molecule", "Electron", "Crystal", "Atom"], answer: 3, explanation: "The atom is the basic particle that takes part in reactions." },
  ],
  shortQuestions: [
    { q: "State the law of constant proportions.", a: "A pure compound always contains the same elements combined in the same fixed ratio by mass." },
    { q: "What is the value of Avogadro number?", a: "6.022 × 10²³ particles per mole." },
    { q: "Write the molecular mass of CO₂. (C = 12, O = 16.)", a: "12 + (2 × 16) = 44 u." },
  ],
  longQuestions: [
    { q: "State the postulates of Dalton's atomic theory.", a: "All matter is made of tiny indivisible atoms; atoms of a given element are identical in mass and properties; atoms of different elements differ; atoms combine in small whole-number ratios to form compounds; and atoms are neither created nor destroyed in a chemical reaction." },
    { q: "Calculate the number of moles and molecules in 9 g of water.", a: "Molar mass of water = 18 g. Moles = 9 ÷ 18 = 0.5 mole. Molecules = 0.5 × 6.022 × 10²³ = 3.011 × 10²³ molecules of water." },
  ],
  hots: [
    { q: "Why is the mole concept useful to chemists?", a: "Atoms and molecules are far too small and numerous to count individually; the mole links a measurable mass to a fixed huge number of particles, making chemical calculations practical." },
    { q: "Equal masses of two gases need not contain equal numbers of molecules. Why?", a: "Because the molecules have different molar masses; the number of molecules depends on moles (mass ÷ molar mass), not on mass alone." },
  ],
  revisionNotes: [
    "Conservation of mass and constant proportions are the key laws.",
    "Atom (smallest), molecule (bonded atoms), ion (charged).",
    "Molecular mass = sum of atomic masses.",
    "1 mole = 6.022 × 10²³ particles = molar mass in grams.",
  ],
  keyTakeaways: [
    "Moles connect mass and number of particles.",
    "Always count every atom when finding molecular mass.",
    "Avogadro number is 6.022 × 10²³.",
  ],
  faq: [
    { q: "What is a mole?", a: "The amount of a substance that contains 6.022 × 10²³ particles, with a mass equal to its molar mass in grams." },
    { q: "What is the difference between an atom and a molecule?", a: "An atom is the smallest particle of an element; a molecule is two or more atoms chemically bonded together." },
    { q: "How do I find the number of moles from mass?", a: "Divide the given mass by the molar mass: n = mass ÷ molar mass." },
  ],
  related: [
    { classId: "9", subject: "science", slug: "structure-of-the-atom" },
    { classId: "9", subject: "science", slug: "is-matter-around-us-pure" },
  ],
};

export default chapter;
