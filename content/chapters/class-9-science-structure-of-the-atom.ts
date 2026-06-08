import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "9",
  subject: "science",
  slug: "structure-of-the-atom",
  title: "Structure of the Atom",
  order: 4,
  seoTitle: "Structure of the Atom Class 9 CBSE Notes, MCQs, Quiz & Models",
  metaDescription:
    "Class 9 Science Structure of the Atom: sub-atomic particles, Thomson, Rutherford and Bohr models, atomic number, mass number, isotopes and isobars, electronic configuration and valency, MCQ quiz and important questions.",
  overview:
    "What is inside an atom? This Class 9 chapter traces the discovery of electrons, protons and neutrons, follows the atomic models of Thomson, Rutherford and Bohr, and explains atomic number, mass number, isotopes, isobars, electronic configuration and valency. It builds directly on Atoms and Molecules and sets up the periodic table.",
  objectives: [
    "Identify the sub-atomic particles and their charges.",
    "Compare the Thomson, Rutherford and Bohr models.",
    "Define atomic number and mass number.",
    "Distinguish isotopes and isobars.",
    "Write the electronic configuration and find valency.",
  ],
  concepts: [
    {
      heading: "Sub-atomic particles",
      body: "An atom contains electrons (negative charge, very light), protons (positive charge) and neutrons (no charge). Protons and neutrons sit in the central nucleus, while electrons revolve around it in shells.",
    },
    {
      heading: "Atomic models",
      body: "Thomson pictured the atom as a sphere of positive charge with embedded electrons (plum-pudding). Rutherford's scattering experiment showed a tiny, dense, positive nucleus with electrons around it. Bohr proposed that electrons revolve in fixed energy shells (K, L, M, N).",
    },
    {
      heading: "Atomic number, mass number, isotopes and isobars",
      body: "Atomic number (Z) is the number of protons; mass number (A) is protons + neutrons. Isotopes are atoms of the same element with the same Z but different A; isobars are atoms of different elements with the same A but different Z.",
    },
    {
      heading: "Electronic configuration and valency",
      body: "Electrons fill shells following the rule that the maximum in a shell is 2n². The valency is decided by the electrons in the outermost shell — usually the number it must lose, gain or share to complete its octet.",
    },
  ],
  formulas: [
    { name: "Mass number", formula: "A = number of protons + number of neutrons" },
    { name: "Atomic number", formula: "Z = number of protons (= electrons in a neutral atom)" },
    { name: "Maximum electrons in a shell", formula: "= 2n²" },
  ],
  definitions: [
    { term: "Atomic number (Z)", meaning: "The number of protons in the nucleus of an atom." },
    { term: "Mass number (A)", meaning: "The total number of protons and neutrons in the nucleus." },
    { term: "Isotopes", meaning: "Atoms of the same element with the same atomic number but different mass numbers." },
    { term: "Valency", meaning: "The combining capacity of an element, decided by its outermost electrons." },
  ],
  examples: [
    {
      problem: "Write the electronic configuration of carbon (Z = 6) and state its valency.",
      solution:
        "Configuration: 2, 4 (2 in K shell, 4 in L shell). The outermost shell needs 4 more electrons to complete the octet, so the valency of carbon is 4.",
    },
    {
      problem: "An atom has 11 protons and 12 neutrons. Find its atomic number and mass number.",
      solution: "Atomic number Z = 11 (protons); mass number A = 11 + 12 = 23.",
    },
    {
      problem: "Why are two atoms with the same Z but different A called isotopes?",
      solution:
        "They have the same number of protons (same element) but a different number of neutrons, which changes their mass number — these are isotopes.",
    },
  ],
  commonMistakes: [
    "Placing protons or neutrons outside the nucleus.",
    "Confusing isotopes (same Z) with isobars (same A).",
    "Forgetting the 2n² rule when filling shells.",
    "Thinking the neutron has a charge — it is neutral.",
  ],
  mcqs: [
    { id: "sa1", difficulty: "easy", q: "Which particle carries a negative charge?", options: ["proton", "nucleus", "electron", "neutron"], answer: 2, explanation: "The electron is negatively charged." },
    { id: "sa2", difficulty: "easy", q: "Protons and neutrons are found in the:", options: ["orbitals only", "nucleus", "shells", "space outside"], answer: 1, explanation: "They are in the central nucleus." },
    { id: "sa3", difficulty: "medium", q: "The atomic number of an element equals its number of:", options: ["protons", "neutrons", "electrons + neutrons", "nucleons"], answer: 0, explanation: "Atomic number = number of protons." },
    { id: "sa4", difficulty: "medium", q: "Atoms with the same atomic number but different mass numbers are:", options: ["ions", "isobars", "isomers", "isotopes"], answer: 3, explanation: "Same Z, different A ⇒ isotopes." },
    { id: "sa5", difficulty: "medium", q: "The maximum number of electrons in the L shell (n = 2) is:", options: ["2", "32", "18", "8"], answer: 3, explanation: "2n² = 2 × 4 = 8." },
    { id: "sa6", difficulty: "easy", q: "The nuclear model of the atom was proposed by:", options: ["Bohr", "Dalton", "Thomson", "Rutherford"], answer: 3, explanation: "Rutherford proposed the nuclear model." },
    { id: "sa7", difficulty: "medium", q: "Mass number is the sum of protons and:", options: ["shells", "neutrons", "ions", "electrons"], answer: 1, explanation: "A = protons + neutrons." },
    { id: "sa8", difficulty: "easy", q: "Electrons revolve in fixed energy shells according to:", options: ["Avogadro", "Dalton", "Thomson", "Bohr"], answer: 3, explanation: "Bohr proposed fixed energy shells." },
    { id: "sa9", difficulty: "medium", q: "The valency of an atom with configuration 2, 8, 1 is:", options: ["7", "1", "8", "2"], answer: 1, explanation: "It loses 1 outer electron, so valency is 1." },
    { id: "sa10", difficulty: "hard", q: "Atoms of different elements with the same mass number are:", options: ["ions", "isobars", "isomers", "isotopes"], answer: 1, explanation: "Same A, different Z ⇒ isobars." },
    { id: "bk9s5", difficulty: "medium", q: "The sub-atomic particle that carries a negative charge is the?", options: ["Electron", "Proton", "Neutron", "Nucleus"], answer: 0, explanation: "Electrons carry a negative charge." },
    { id: "bk9s6", difficulty: "medium", q: "Who proposed that electrons revolve around the nucleus in fixed orbits?", options: ["John Dalton", "Niels Bohr", "J. J. Thomson", "James Chadwick"], answer: 1, explanation: "Bohr's model placed electrons in fixed energy shells around the nucleus." },
  ],
  shortQuestions: [
    { q: "Which sub-atomic particle has no charge?", a: "The neutron." },
    { q: "Write the electronic configuration of oxygen (Z = 8).", a: "2, 6." },
    { q: "Define isobars.", a: "Atoms of different elements with the same mass number but different atomic numbers." },
  ],
  longQuestions: [
    { q: "Describe Rutherford's alpha-particle scattering experiment and its conclusions.", a: "Rutherford bombarded a thin gold foil with alpha particles. Most passed straight through, some deflected, and very few bounced back. This showed that most of the atom is empty space, that the positive charge and nearly all the mass are concentrated in a tiny central nucleus, and that electrons revolve around it." },
    { q: "Explain why isotopes have the same chemical properties.", a: "Chemical properties depend on the number and arrangement of electrons, which is set by the atomic number. Isotopes of an element have the same atomic number (same electrons), so they behave the same chemically; only their masses (number of neutrons) differ." },
  ],
  hots: [
    { q: "Why could Thomson's model not explain Rutherford's scattering results?", a: "Thomson's model spread the positive charge evenly, predicting only tiny deflections; it could not explain why a few alpha particles bounced straight back, which required a concentrated positive nucleus." },
    { q: "An element has the configuration 2, 8, 8. Is it reactive? Why?", a: "It has a complete outermost shell (octet), so it has no tendency to gain, lose or share electrons — it is stable and largely unreactive (like a noble gas)." },
  ],
  revisionNotes: [
    "Electron (−), proton (+), neutron (0); protons/neutrons in the nucleus.",
    "Models: Thomson → Rutherford (nucleus) → Bohr (shells).",
    "Z = protons; A = protons + neutrons.",
    "Isotopes: same Z; isobars: same A; shells fill by 2n².",
  ],
  keyTakeaways: [
    "The nucleus holds the mass and positive charge.",
    "Valency comes from the outermost electrons.",
    "Distinguish isotopes (same Z) from isobars (same A).",
  ],
  faq: [
    { q: "What is the difference between atomic number and mass number?", a: "Atomic number is the number of protons; mass number is the total of protons and neutrons." },
    { q: "What are isotopes?", a: "Atoms of the same element with the same atomic number but different mass numbers, due to different numbers of neutrons." },
    { q: "How is valency determined?", a: "By the number of electrons in the outermost shell — how many the atom must lose, gain or share to complete its octet." },
  ],
  related: [
    { classId: "9", subject: "science", slug: "atoms-and-molecules" },
    { classId: "9", subject: "science", slug: "the-fundamental-unit-of-life" },
  ],
};

export default chapter;
