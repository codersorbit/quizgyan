import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  board: "wbbpe",
  classId: "5",
  subject: "english",
  slug: "reading-comprehension",
  title: "Reading a Passage",
  order: 8,
  seoTitle: "Reading a Passage — WBBPE Class 5 English (Butterfly) | StudyMatic",
  metaDescription:
    "WBBPE Class 5 English: read a short passage carefully and answer who/what/when/where/why questions. Notes and a quiz.",
  overview:
    "In this chapter we read a short passage and answer questions about it — who, what, when, where and why. The answers are in the passage.",
  objectives: [
    "Read a passage carefully.",
    "Answer who/what/when/where/why.",
    "Find facts in the passage.",
    "Answer in your own words.",
  ],
  concepts: [
    {
      heading: "Read carefully",
      body: "Read the whole passage slowly. If needed, read it again so you understand it well.",
    },
    {
      heading: "Find the answers",
      body: "Answers to who, what, when, where and why are in the passage. Look back at the words to find them.",
    },
    {
      heading: "A short passage",
      body: "Read this: ‘Maya lives near a big river. Every morning she walks to school with her brother. On the way, they feed the ducks by the river. Maya wants to be a teacher when she grows up.’ From it — Who lives near a river? Maya. Whom does she walk with? Her brother.",
    },
  ],
  formulas: [],
  definitions: [
    { term: "Passage", meaning: "A short piece of writing with a few sentences." },
  ],
  examples: [
    { problem: "(passage) Who lives near a big river?", solution: "Maya." },
    { problem: "(passage) What do they feed?", solution: "The ducks." },
  ],
  commonMistakes: [
    "Answering without reading the passage.",
    "Not noticing what the question asks.",
  ],
  mcqs: [
    {
      id: "w5e-rc-1",
      q: "To understand a passage, we should read it ___.",
      options: ["never", "very fast", "carefully", "once a year"],
      answer: 2,
      explanation: "Reading carefully helps us understand.",
      difficulty: "easy",
    },
    {
      id: "w5e-rc-2",
      q: "(passage) Who lives near a big river?",
      options: ["Anu", "Rina", "Sam", "Maya"],
      answer: 3,
      explanation: "The passage says Maya lives near a big river.",
      difficulty: "easy",
    },
    {
      id: "w5e-rc-3",
      q: "(passage) Whom does Maya walk to school with?",
      options: ["her brother", "her friend", "her teacher", "alone"],
      answer: 0,
      explanation: "She walks with her brother.",
      difficulty: "easy",
    },
    {
      id: "w5e-rc-4",
      q: "(passage) What do they feed on the way?",
      options: ["the cows", "the ducks", "the goats", "the cats"],
      answer: 1,
      explanation: "They feed the ducks by the river.",
      difficulty: "medium",
    },
    {
      id: "w5e-rc-5",
      q: "(passage) What does Maya want to be?",
      options: ["a singer", "a doctor", "a teacher", "a pilot"],
      answer: 2,
      explanation: "The passage says Maya wants to be a teacher.",
      difficulty: "medium",
    },
  ],
  shortQuestions: [
    { q: "What is a passage?", a: "A short piece of writing with a few sentences." },
    { q: "(passage) When does Maya walk to school?", a: "Every morning." },
  ],
  longQuestions: [
    {
      q: "‘Maya lives near a big river. Every morning she walks to school with her brother.’ — Write two facts about Maya.",
      a: "1) Maya lives near a big river. 2) She walks to school every morning with her brother.",
    },
  ],
  hots: [
    {
      q: "Can you answer ‘What does Maya want to be?’ without reading the passage?",
      a: "No — we must read the passage to learn that she wants to be a teacher.",
    },
  ],
  revisionNotes: [
    "Read the passage carefully.",
    "Find who/what/when/where/why in the words.",
    "Answers are in the passage.",
  ],
  keyTakeaways: ["Read, then answer.", "Find facts in the passage."],
  faq: [
    { q: "Where are the answers?", a: "In the passage itself." },
  ],
  related: [
    { board: "wbbpe", classId: "5", subject: "english", slug: "conjunctions" },
    { board: "wbbpe", classId: "5", subject: "english", slug: "subject-predicate" },
  ],
};

export default chapter;
