import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  board: "wbbpe",
  classId: "5",
  subject: "english",
  slug: "past-tense",
  title: "Simple Past Tense",
  order: 16,
  seoTitle: "Simple Past Tense — WBBPE Class 5 English (Butterfly) | StudyMatic",
  metaDescription:
    "WBBPE Class 5 English: the simple past tense shows a finished action — most verbs add -ed; some are irregular (go→went). Notes and a quiz.",
  overview:
    "In this chapter we learn the simple past tense. It shows an action that has already finished. Most verbs add -ed, but some change form.",
  objectives: [
    "Know what the simple past shows.",
    "Add -ed to regular verbs.",
    "Learn common irregular past forms.",
    "Use the past tense in sentences.",
  ],
  concepts: [
    {
      heading: "What it shows",
      body: "The simple past tense shows an action that has already finished. ‘I played yesterday.’",
    },
    {
      heading: "Regular verbs",
      body: "Most verbs add -ed for the past: play → played, walk → walked, jump → jumped.",
    },
    {
      heading: "Irregular verbs",
      body: "Some verbs change form: go → went, eat → ate, see → saw, come → came.",
    },
  ],
  formulas: [],
  definitions: [
    { term: "Simple past tense", meaning: "A tense that shows an action finished in the past." },
  ],
  examples: [
    { problem: "Past tense of ‘walk’?", solution: "walked." },
    { problem: "Past tense of ‘go’?", solution: "went." },
  ],
  commonMistakes: [
    "Adding -ed to irregular verbs (‘goed’ ✗ → ‘went’).",
    "Forgetting the -ed on regular verbs.",
  ],
  mcqs: [
    {
      id: "w5e-past-1",
      q: "The simple past tense shows an action that ___.",
      options: ["finished in the past", "is happening now", "will happen", "never happens"],
      answer: 0,
      explanation: "It shows a finished past action.",
      difficulty: "easy",
    },
    {
      id: "w5e-past-2",
      q: "Most verbs form the past tense by adding ___.",
      options: ["-er", "-ed", "-ing", "-est"],
      answer: 1,
      explanation: "Regular verbs add -ed.",
      difficulty: "easy",
    },
    {
      id: "w5e-past-3",
      q: "The past tense of ‘play’ is ___.",
      options: ["play", "plays", "played", "playing"],
      answer: 2,
      explanation: "play → played.",
      difficulty: "easy",
    },
    {
      id: "w5e-past-4",
      q: "The past tense of ‘go’ is ___.",
      options: ["going", "goed", "gone", "went"],
      answer: 3,
      explanation: "‘go’ is irregular → ‘went’.",
      difficulty: "medium",
    },
    {
      id: "w5e-past-5",
      q: "‘Yesterday I ___ to school.’ (walk) — fill in.",
      options: ["walked", "walk", "walking", "walks"],
      answer: 0,
      explanation: "Past of ‘walk’ is ‘walked’.",
      difficulty: "medium",
    },
  ],
  shortQuestions: [
    { q: "Past tense of ‘eat’?", a: "ate." },
    { q: "Past tense of ‘jump’?", a: "jumped." },
  ],
  longQuestions: [
    {
      q: "Write the past tense: walk, see, come.",
      a: "walk → walked; see → saw; come → came.",
    },
  ],
  hots: [
    {
      q: "Why is ‘She goed home’ wrong?",
      a: "‘go’ is irregular, so the past is ‘went’ — ‘She went home.’",
    },
  ],
  revisionNotes: [
    "Simple past = finished action.",
    "Regular verbs add -ed.",
    "Irregular: go→went, eat→ate, see→saw, come→came.",
  ],
  keyTakeaways: ["Form the past tense.", "Know common irregular verbs."],
  faq: [
    { q: "Past tense of ‘see’?", a: "saw." },
  ],
  related: [
    { board: "wbbpe", classId: "5", subject: "english", slug: "pronouns" },
    { board: "wbbpe", classId: "5", subject: "english", slug: "future-tense" },
  ],
};

export default chapter;
