import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  board: "wbbpe",
  classId: "3",
  subject: "english",
  slug: "has-and-have",
  title: "Has and Have",
  order: 4,
  seoTitle: "Has and Have — WBBPE Class 3 English (Butterfly) | StudyMatic",
  metaDescription:
    "WBBPE Class 3 English: using has and have — he/she/it has; I/you/we/they have. Simple notes, Bengali help and a quiz.",
  overview:
    "In this chapter we learn ‘has’ and ‘have’. They show what someone owns or has. Use ‘has’ with one (he/she/it) and ‘have’ with I, you, we and they.",
  objectives: [
    "Use ‘has’ with he, she, it.",
    "Use ‘have’ with I, you, we, they.",
    "Show owning with has/have.",
    "Choose has/have correctly.",
  ],
  concepts: [
    {
      heading: "has with one",
      body: "Use ‘has’ with one person or thing (he, she, it). For example: ‘She has a pen.’ ‘The dog has a bone.’",
    },
    {
      heading: "have with the rest",
      body: "Use ‘have’ with I, you, we and they. For example: ‘I have a book.’ ‘They have toys.’",
    },
    {
      heading: "What they mean",
      body: "‘has’ and ‘have’ show that someone owns or has something.",
    },
  ],
  formulas: [],
  definitions: [
    { term: "has / have", meaning: "Words that show owning: he/she/it has; I/you/we/they have." },
  ],
  examples: [
    { problem: "‘He ___ a cycle.’", solution: "has." },
    { problem: "‘We ___ a garden.’", solution: "have." },
  ],
  commonMistakes: [
    "Using ‘has’ with ‘I’ (we say ‘I have’).",
    "Using ‘have’ with ‘he’ (we say ‘he has’).",
  ],
  mcqs: [
    {
      id: "w3e-hh-1",
      q: "Which word goes with ‘he’, ‘she’ or ‘it’?",
      options: ["having", "have", "had", "has"],
      answer: 3,
      explanation: "One person/thing takes ‘has’.",
      difficulty: "easy",
    },
    {
      id: "w3e-hh-2",
      q: "I ___ a new bag.",
      options: ["have", "has", "had", "having"],
      answer: 0,
      explanation: "‘I’ takes ‘have’.",
      difficulty: "easy",
    },
    {
      id: "w3e-hh-3",
      q: "She ___ long hair.",
      options: ["have", "has", "had", "having"],
      answer: 1,
      explanation: "‘She’ takes ‘has’.",
      difficulty: "easy",
    },
    {
      id: "w3e-hh-4",
      q: "They ___ many friends.",
      options: ["had", "has", "have", "having"],
      answer: 2,
      explanation: "‘They’ takes ‘have’.",
      difficulty: "medium",
    },
    {
      id: "w3e-hh-5",
      q: "‘has’ and ‘have’ show that someone ___ something.",
      options: ["reads", "eats", "runs", "owns"],
      answer: 3,
      explanation: "They show owning or having.",
      difficulty: "medium",
    },
  ],
  shortQuestions: [
    { q: "‘You ___ a nice smile.’ — fill in.", a: "have." },
    { q: "‘The cat ___ soft fur.’ — fill in.", a: "has." },
  ],
  longQuestions: [
    { q: "Fill in: ‘I ___ a pen. She ___ a book. We ___ bags.’", a: "I have a pen. She has a book. We have bags." },
  ],
  hots: [
    {
      q: "Why is ‘He have a ball’ wrong?",
      a: "Because ‘he’ takes ‘has’ — it should be ‘He has a ball’.",
    },
  ],
  revisionNotes: [
    "he / she / it → has.",
    "I / you / we / they → have.",
    "Both show owning something.",
  ],
  keyTakeaways: ["Match has/have to the naming word.", "‘I’ takes ‘have’."],
  faq: [
    { q: "Which goes with ‘they’?", a: "have." },
  ],
  related: [
    { board: "wbbpe", classId: "3", subject: "english", slug: "am-is-are" },
    { board: "wbbpe", classId: "3", subject: "english", slug: "opposite-words" },
  ],
};

export default chapter;
