import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  board: "wbbpe",
  classId: "5",
  subject: "english",
  slug: "future-tense",
  title: "Simple Future Tense",
  order: 17,
  seoTitle: "Simple Future Tense — WBBPE Class 5 English (Butterfly) | StudyMatic",
  metaDescription:
    "WBBPE Class 5 English: the simple future tense shows an action that will happen later — will + verb. Notes and a quiz.",
  overview:
    "In this chapter we learn the simple future tense. It shows an action that will happen later, and is formed with ‘will’ + the base verb.",
  objectives: [
    "Know what the simple future shows.",
    "Form it with will + verb.",
    "Use it for all persons.",
    "Spot future-tense sentences.",
  ],
  concepts: [
    {
      heading: "What it shows",
      body: "The simple future tense shows an action that will happen in the future. ‘I will play tomorrow.’",
    },
    {
      heading: "How to form it",
      body: "Use ‘will’ + the base verb (no -ing, no -ed). ‘I will go.’ ‘She will read.’ ‘They will come.’",
    },
    {
      heading: "Same for all",
      body: "‘will’ stays the same for I, you, he, she, it, we and they.",
    },
  ],
  formulas: [],
  definitions: [
    { term: "Simple future tense", meaning: "A tense that shows an action that will happen later (will + verb)." },
  ],
  examples: [
    { problem: "‘I ___ go tomorrow.’", solution: "will." },
    { problem: "‘She will ___ a book.’ (read)", solution: "read." },
  ],
  commonMistakes: [
    "Adding -ing or -ed after ‘will’ (‘will going’ ✗).",
    "Changing ‘will’ for different persons (it stays the same).",
  ],
  mcqs: [
    {
      id: "w5e-fut-1",
      q: "The simple future tense shows an action that ___.",
      options: ["is happening now", "finished already", "will happen later", "never happens"],
      answer: 2,
      explanation: "It shows a future action.",
      difficulty: "easy",
    },
    {
      id: "w5e-fut-2",
      q: "The simple future is formed with ___ + verb.",
      options: ["was", "-ed", "-ing", "will"],
      answer: 3,
      explanation: "‘will’ + base verb.",
      difficulty: "easy",
    },
    {
      id: "w5e-fut-3",
      q: "‘I ___ go tomorrow.’ — fill in.",
      options: ["will", "was", "am", "did"],
      answer: 0,
      explanation: "Future → ‘will’.",
      difficulty: "easy",
    },
    {
      id: "w5e-fut-4",
      q: "‘She will ___ a book.’ (read) — fill in.",
      options: ["reads", "read", "reading", "readed"],
      answer: 1,
      explanation: "After ‘will’ we use the base verb ‘read’.",
      difficulty: "medium",
    },
    {
      id: "w5e-fut-5",
      q: "Which sentence is in the future tense?",
      options: ["They are coming.", "They came.", "They will come.", "They come."],
      answer: 2,
      explanation: "‘They will come.’ is the future tense.",
      difficulty: "medium",
    },
  ],
  shortQuestions: [
    { q: "Make ‘I eat’ future.", a: "I will eat." },
    { q: "Does ‘will’ change for ‘they’?", a: "No — it stays ‘will’." },
  ],
  longQuestions: [
    {
      q: "Write in the future tense: (I / play), (she / sing).",
      a: "I will play. She will sing.",
    },
  ],
  hots: [
    {
      q: "Why is ‘I will going’ wrong?",
      a: "After ‘will’ we use the base verb, so it should be ‘I will go.’",
    },
  ],
  revisionNotes: [
    "Simple future = action that will happen.",
    "will + base verb.",
    "‘will’ is the same for all persons.",
  ],
  keyTakeaways: ["Form the future tense.", "Use will + base verb."],
  faq: [
    { q: "Future of ‘come’?", a: "will come." },
  ],
  related: [
    { board: "wbbpe", classId: "5", subject: "english", slug: "past-tense" },
    { board: "wbbpe", classId: "5", subject: "english", slug: "articles" },
  ],
};

export default chapter;
