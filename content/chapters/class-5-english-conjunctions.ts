import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  board: "wbbpe",
  classId: "5",
  subject: "english",
  slug: "conjunctions",
  title: "Conjunctions",
  order: 7,
  seoTitle: "Conjunctions — WBBPE Class 5 English (Butterfly) | StudyMatic",
  metaDescription:
    "WBBPE Class 5 English: conjunctions join words or sentences — and, but, or, because. Notes, examples and a quiz.",
  overview:
    "In this chapter we learn conjunctions — joining words like and, but, or and because that link words or sentences.",
  objectives: [
    "Know what a conjunction is.",
    "Use and, but and or.",
    "Use because to give a reason.",
    "Choose the right conjunction.",
  ],
  concepts: [
    {
      heading: "Joining words",
      body: "A conjunction joins words or sentences. ‘Ram and Shyam’; ‘tea or coffee’.",
    },
    {
      heading: "and, but, or",
      body: "‘and’ adds one thing to another; ‘but’ shows a difference; ‘or’ shows a choice. ‘I was tired but happy.’",
    },
    {
      heading: "because",
      body: "‘because’ gives a reason. ‘She stayed home because she was ill.’",
    },
  ],
  formulas: [],
  definitions: [
    { term: "Conjunction", meaning: "A joining word that links words or sentences." },
  ],
  examples: [
    { problem: "‘tea ___ coffee’ (a choice)", solution: "or." },
    { problem: "‘tired ___ happy’ (a difference)", solution: "but." },
  ],
  commonMistakes: [
    "Using ‘and’ where ‘but’ (difference) is needed.",
    "Forgetting ‘because’ when giving a reason.",
  ],
  mcqs: [
    {
      id: "w5e-conj-1",
      q: "A word that joins words or sentences is a ___.",
      options: ["noun", "conjunction", "article", "adverb"],
      answer: 1,
      explanation: "A joining word is a conjunction.",
      difficulty: "easy",
    },
    {
      id: "w5e-conj-2",
      q: "Which word adds one thing to another?",
      options: ["or", "but", "and", "because"],
      answer: 2,
      explanation: "‘and’ adds.",
      difficulty: "easy",
    },
    {
      id: "w5e-conj-3",
      q: "‘I was tired ___ happy.’ (a difference) — fill in.",
      options: ["because", "and", "or", "but"],
      answer: 3,
      explanation: "A difference → ‘but’.",
      difficulty: "medium",
    },
    {
      id: "w5e-conj-4",
      q: "‘Will you take tea ___ coffee?’ (a choice) — fill in.",
      options: ["or", "and", "but", "because"],
      answer: 0,
      explanation: "A choice → ‘or’.",
      difficulty: "medium",
    },
    {
      id: "w5e-conj-5",
      q: "‘She stayed home ___ she was ill.’ (a reason) — fill in.",
      options: ["but", "because", "or", "and"],
      answer: 1,
      explanation: "A reason → ‘because’.",
      difficulty: "medium",
    },
  ],
  shortQuestions: [
    { q: "Which conjunction gives a reason?", a: "because." },
    { q: "Join with ‘and’: ‘salt ___ sugar’.", a: "salt and sugar." },
  ],
  longQuestions: [
    {
      q: "Use ‘but’ and ‘because’ in two short sentences.",
      a: "It was small but strong. He ran because he was late.",
    },
  ],
  hots: [
    {
      q: "Which conjunction best joins ‘It rained.’ and ‘We stayed in.’ to show a reason?",
      a: "‘because’ — ‘We stayed in because it rained.’",
    },
  ],
  revisionNotes: [
    "Conjunctions join words/sentences.",
    "and adds; but differs; or = choice.",
    "because gives a reason.",
  ],
  keyTakeaways: ["Spot conjunctions.", "Pick the right joining word."],
  faq: [
    { q: "Is ‘or’ a conjunction?", a: "Yes — it shows a choice." },
  ],
  related: [
    { board: "wbbpe", classId: "5", subject: "english", slug: "articles" },
    { board: "wbbpe", classId: "5", subject: "english", slug: "reading-comprehension" },
  ],
};

export default chapter;
