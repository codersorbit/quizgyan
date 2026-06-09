import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  board: "wbbpe",
  classId: "3",
  subject: "english",
  slug: "reading-comprehension",
  title: "Reading a Passage",
  order: 8,
  seoTitle: "Reading a Passage — WBBPE Class 3 English (Butterfly) | StudyMatic",
  metaDescription:
    "WBBPE Class 3 English: read a short passage carefully and answer who/what/when questions. Simple notes and a quiz.",
  overview:
    "In this chapter we read a short passage and answer questions about it — who, what, where and when. The answers are in the passage.",
  objectives: [
    "Read a short passage carefully.",
    "Answer who/what/where/when questions.",
    "Find facts in the passage.",
    "Answer in simple words.",
  ],
  concepts: [
    {
      heading: "Read carefully",
      body: "Read the whole passage slowly. If needed, read it again so you understand it well.",
    },
    {
      heading: "Find the answers",
      body: "Answers to ‘who’, ‘what’, ‘where’ and ‘when’ are in the passage. Look back at the words to find them.",
    },
    {
      heading: "A short passage",
      body: "Read this: ‘Mina has a small garden. She grows roses in it. Every morning she waters the plants.’ From it — Who has a garden? Mina. What does she grow? Roses. When does she water? Every morning.",
    },
  ],
  formulas: [],
  definitions: [
    { term: "Passage (অনুচ্ছেদ)", meaning: "A short piece of writing with a few sentences." },
  ],
  examples: [
    { problem: "(passage) Who has a garden?", solution: "Mina." },
    { problem: "(passage) What does Mina grow?", solution: "Roses." },
  ],
  commonMistakes: [
    "Answering without reading the passage.",
    "Not noticing what the question asks.",
  ],
  mcqs: [
    {
      id: "w3e-rc-1",
      q: "To understand a passage, we read it ___.",
      options: ["once a year", "very fast", "never", "carefully"],
      answer: 3,
      explanation: "Reading carefully helps us understand.",
      difficulty: "easy",
    },
    {
      id: "w3e-rc-2",
      q: "(passage) Who has a garden?",
      options: ["Mina", "Ravi", "Sam", "Anu"],
      answer: 0,
      explanation: "The passage says Mina has a garden.",
      difficulty: "easy",
    },
    {
      id: "w3e-rc-3",
      q: "(passage) What does Mina grow?",
      options: ["mangoes", "roses", "rice", "corn"],
      answer: 1,
      explanation: "The passage says she grows roses.",
      difficulty: "easy",
    },
    {
      id: "w3e-rc-4",
      q: "(passage) When does she water the plants?",
      options: ["once a year", "at night", "every morning", "never"],
      answer: 2,
      explanation: "The passage says every morning.",
      difficulty: "medium",
    },
    {
      id: "w3e-rc-5",
      q: "The answers to a passage are found ___.",
      options: ["in numbers", "in a song", "nowhere", "in the passage"],
      answer: 3,
      explanation: "The answers are in the passage itself.",
      difficulty: "medium",
    },
  ],
  shortQuestions: [
    { q: "What is a passage?", a: "A short piece of writing with a few sentences." },
    { q: "(passage) Where does Mina grow roses?", a: "In her small garden." },
  ],
  longQuestions: [
    {
      q: "‘Mina has a small garden. She grows roses in it. Every morning she waters the plants.’ — Write two facts about Mina.",
      a: "1) Mina has a small garden. 2) She grows roses and waters them every morning.",
    },
  ],
  hots: [
    {
      q: "Can you answer ‘What does Mina grow?’ without reading the passage?",
      a: "No — we must read the passage to find that she grows roses.",
    },
  ],
  revisionNotes: [
    "Read the passage carefully.",
    "Find who/what/where/when in the words.",
    "Answers are in the passage.",
  ],
  keyTakeaways: ["Read, then answer.", "Find facts in the passage."],
  faq: [
    { q: "Where are the answers?", a: "In the passage itself." },
  ],
  related: [
    { board: "wbbpe", classId: "3", subject: "english", slug: "making-sentences" },
    { board: "wbbpe", classId: "3", subject: "english", slug: "describing-words" },
  ],
};

export default chapter;
