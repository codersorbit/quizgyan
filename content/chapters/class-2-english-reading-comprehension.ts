import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  board: "wbbpe",
  classId: "2",
  subject: "english",
  slug: "reading-comprehension",
  title: "Reading a Short Passage",
  order: 8,
  seoTitle: "Reading a Short Passage — WBBPE Class 2 English (Amar Boi) | StudyMatic",
  metaDescription:
    "WBBPE Class 2 English: read a short passage carefully and answer who/what/where questions. Simple notes and a quiz.",
  overview:
    "In this chapter we read a short passage carefully and answer questions about it — who, what and where. The answers are in the passage.",
  objectives: [
    "Read a short passage carefully.",
    "Find answers to who/what/where.",
    "Pick out facts from the passage.",
    "Answer in simple words.",
  ],
  concepts: [
    {
      heading: "Read carefully",
      body: "Read the whole passage slowly. If needed, read it again to understand it well.",
    },
    {
      heading: "Find the answers",
      body: "Answers to ‘who’, ‘what’ and ‘where’ are in the passage itself. Look back at the words to find them.",
    },
    {
      heading: "A short passage",
      body: "Read this: ‘Sam has a red ball. He plays with it in the park.’ From it — Who has a ball? Sam. What colour is it? Red. Where does he play? In the park.",
    },
  ],
  formulas: [],
  definitions: [
    { term: "Passage (অনুচ্ছেদ)", meaning: "A short piece of writing with a few sentences." },
  ],
  examples: [
    { problem: "(passage) What does Sam have?", solution: "A red ball." },
    { problem: "(passage) Where does Sam play?", solution: "In the park." },
  ],
  commonMistakes: [
    "Answering without reading the passage.",
    "Not noticing what the question asks.",
  ],
  mcqs: [
    {
      id: "w2e-rc-1",
      q: "To understand a passage, we should read it ___.",
      options: ["very fast", "carefully", "never", "once a year"],
      answer: 1,
      explanation: "Reading carefully helps us understand.",
      difficulty: "easy",
    },
    {
      id: "w2e-rc-2",
      q: "(passage) What does Sam have?",
      options: ["a kite", "a blue bat", "a red ball", "a book"],
      answer: 2,
      explanation: "The passage says Sam has a red ball.",
      difficulty: "easy",
    },
    {
      id: "w2e-rc-3",
      q: "(passage) What colour is the ball?",
      options: ["yellow", "blue", "green", "red"],
      answer: 3,
      explanation: "The passage says the ball is red.",
      difficulty: "easy",
    },
    {
      id: "w2e-rc-4",
      q: "(passage) Where does Sam play?",
      options: ["in the park", "at school", "at home", "in a shop"],
      answer: 0,
      explanation: "The passage says he plays in the park.",
      difficulty: "medium",
    },
    {
      id: "w2e-rc-5",
      q: "Answers to a passage are found ___.",
      options: ["in a song", "in the passage", "nowhere", "in numbers"],
      answer: 1,
      explanation: "The answers are in the passage itself.",
      difficulty: "medium",
    },
  ],
  shortQuestions: [
    { q: "What is a passage?", a: "A short piece of writing with a few sentences." },
    { q: "(passage) Who has a ball?", a: "Sam." },
  ],
  longQuestions: [
    {
      q: "‘Sam has a red ball. He plays with it in the park.’ — Write two facts about Sam.",
      a: "1) Sam has a red ball. 2) He plays with it in the park.",
    },
  ],
  hots: [
    {
      q: "Can you answer ‘Where does Sam play?’ without reading the passage?",
      a: "No — we must read the passage to find that he plays in the park.",
    },
  ],
  revisionNotes: [
    "Read the passage carefully.",
    "Find who/what/where in the words.",
    "Answers are in the passage.",
  ],
  keyTakeaways: ["Read, then answer.", "Find facts in the passage."],
  faq: [
    { q: "Where are the answers?", a: "In the passage itself." },
  ],
  related: [
    { board: "wbbpe", classId: "2", subject: "english", slug: "months-of-the-year" },
    { board: "wbbpe", classId: "2", subject: "english", slug: "naming-words" },
  ],
};

export default chapter;
