import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  board: "wbbpe",
  classId: "4",
  subject: "english",
  slug: "verbs-tense",
  title: "Verbs: Present Continuous",
  order: 4,
  seoTitle: "Verbs: Present Continuous — WBBPE Class 4 English (Butterfly) | StudyMatic",
  metaDescription:
    "WBBPE Class 4 English: the present continuous tense shows an action happening now — am/is/are + verb + ing. Notes and a quiz.",
  overview:
    "In this chapter we learn the present continuous tense. It shows an action happening right now, and is formed with am, is or are + a verb ending in -ing.",
  objectives: [
    "Know what the present continuous shows.",
    "Form it with am/is/are + verb + -ing.",
    "Choose am, is or are correctly.",
    "Make -ing verbs.",
  ],
  concepts: [
    {
      heading: "What it shows",
      body: "The present continuous shows an action happening now. For example: ‘She is reading.’",
    },
    {
      heading: "How to form it",
      body: "We use am/is/are + the verb + -ing. ‘I am playing.’ ‘He is running.’ ‘They are singing.’",
    },
    {
      heading: "The -ing verb",
      body: "We add -ing to the verb: play → playing, run → running, sing → singing.",
    },
  ],
  formulas: [],
  definitions: [
    { term: "Present continuous", meaning: "A tense that shows an action happening now (am/is/are + verb + -ing)." },
  ],
  examples: [
    { problem: "‘She ___ a book now.’ (read)", solution: "is reading." },
    { problem: "‘They ___ (play).’", solution: "are playing." },
  ],
  commonMistakes: [
    "Forgetting the -ing on the verb.",
    "Using the wrong helper (am/is/are).",
  ],
  mcqs: [
    {
      id: "w4e-tense-1",
      q: "The present continuous shows an action happening ___.",
      options: ["last year", "yesterday", "now", "never"],
      answer: 2,
      explanation: "It shows an action happening now.",
      difficulty: "easy",
    },
    {
      id: "w4e-tense-2",
      q: "It is formed with am/is/are + verb + ___.",
      options: ["-est", "-ed", "-er", "-ing"],
      answer: 3,
      explanation: "am/is/are + verb + -ing.",
      difficulty: "easy",
    },
    {
      id: "w4e-tense-3",
      q: "‘She is ___ a book.’ (read) — fill in.",
      options: ["reading", "read", "reads", "readed"],
      answer: 0,
      explanation: "read + -ing = reading.",
      difficulty: "medium",
    },
    {
      id: "w4e-tense-4",
      q: "‘They ___ playing.’ — fill in.",
      options: ["am", "are", "is", "be"],
      answer: 1,
      explanation: "‘They’ takes ‘are’.",
      difficulty: "easy",
    },
    {
      id: "w4e-tense-5",
      q: "‘I ___ singing.’ — fill in.",
      options: ["be", "is", "am", "are"],
      answer: 2,
      explanation: "‘I’ takes ‘am’.",
      difficulty: "medium",
    },
  ],
  shortQuestions: [
    { q: "Add -ing: ‘jump’ → ?", a: "jumping." },
    { q: "‘He ___ running.’ — fill in.", a: "is." },
  ],
  longQuestions: [
    {
      q: "Write what is happening now using present continuous: (I / write), (they / sing).",
      a: "I am writing. They are singing.",
    },
  ],
  hots: [
    {
      q: "Why is ‘She reading a book’ not complete?",
      a: "It needs a helper word: ‘She is reading a book.’ (is + reading)",
    },
  ],
  revisionNotes: [
    "Present continuous = action happening now.",
    "am/is/are + verb + -ing.",
    "I am, he/she/it is, you/we/they are.",
  ],
  keyTakeaways: ["Form actions happening now.", "Use am/is/are + verb-ing."],
  faq: [
    { q: "What goes with ‘I’ in present continuous?", a: "am (I am playing)." },
  ],
  related: [
    { board: "wbbpe", classId: "4", subject: "english", slug: "adjectives" },
    { board: "wbbpe", classId: "4", subject: "english", slug: "adverbs" },
  ],
};

export default chapter;
