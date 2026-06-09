import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  board: "wbbpe",
  classId: "2",
  subject: "english",
  slug: "this-and-that",
  title: "This and That",
  order: 3,
  seoTitle: "This and That — WBBPE Class 2 English (Amar Boi) | StudyMatic",
  metaDescription:
    "WBBPE Class 2 English: use ‘this’ for something near and ‘that’ for something far; these and those for many. Simple notes and a quiz.",
  overview:
    "In this chapter we learn ‘this’ and ‘that’. We use ‘this’ for something near us and ‘that’ for something far away.",
  objectives: [
    "Use ‘this’ for something near.",
    "Use ‘that’ for something far.",
    "Know ‘these’ and ‘those’ for many things.",
    "Use them in simple sentences.",
  ],
  concepts: [
    {
      heading: "this — near",
      body: "We use ‘this’ for one thing that is near us. For example, a pen in your hand — ‘This is a pen.’",
    },
    {
      heading: "that — far",
      body: "We use ‘that’ for one thing that is far away. For example, a tree over there — ‘That is a tree.’",
    },
    {
      heading: "these and those",
      body: "For many things we use ‘these’ (near) and ‘those’ (far) — ‘these books’, ‘those birds’.",
    },
  ],
  formulas: [],
  definitions: [
    { term: "this", meaning: "Used for one thing that is near." },
    { term: "that", meaning: "Used for one thing that is far." },
  ],
  examples: [
    { problem: "A pen in your hand — what do you say?", solution: "‘This is a pen.’" },
    { problem: "A tree far away — what do you say?", solution: "‘That is a tree.’" },
  ],
  commonMistakes: [
    "Using ‘this’ for something far away.",
    "Using ‘that’ for something in your hand.",
  ],
  mcqs: [
    {
      id: "w2e-tt-1",
      q: "We use ‘this’ for something ___.",
      options: ["red", "far", "big", "near"],
      answer: 3,
      explanation: "‘this’ is for something near.",
      difficulty: "easy",
    },
    {
      id: "w2e-tt-2",
      q: "We use ‘that’ for something ___.",
      options: ["far", "near", "small", "blue"],
      answer: 0,
      explanation: "‘that’ is for something far.",
      difficulty: "easy",
    },
    {
      id: "w2e-tt-3",
      q: "A pen in your hand — which is right?",
      options: ["That is a pen.", "This is a pen.", "both", "none"],
      answer: 1,
      explanation: "It is near, so ‘This is a pen.’",
      difficulty: "easy",
    },
    {
      id: "w2e-tt-4",
      q: "A tree far away — which is right?",
      options: ["both", "This is a tree.", "That is a tree.", "none"],
      answer: 2,
      explanation: "It is far, so ‘That is a tree.’",
      difficulty: "medium",
    },
    {
      id: "w2e-tt-5",
      q: "‘this’ and ‘that’ tell us about ___.",
      options: ["sound", "colour", "number", "near or far"],
      answer: 3,
      explanation: "They tell whether a thing is near or far.",
      difficulty: "medium",
    },
  ],
  shortQuestions: [
    { q: "Which word for something near — this or that?", a: "this." },
    { q: "Which word for many things far away?", a: "those." },
  ],
  longQuestions: [
    { q: "Make one sentence with ‘this’ and one with ‘that’.", a: "‘This is my bag.’ ‘That is a bird.’" },
  ],
  hots: [
    {
      q: "Your friend is far away holding a kite. Do you say ‘this kite’ or ‘that kite’?",
      a: "‘that kite’ — because it is far from you.",
    },
  ],
  revisionNotes: [
    "this → near; that → far.",
    "these → near (many); those → far (many).",
    "They show how near or far a thing is.",
  ],
  keyTakeaways: ["Use this/that for near/far.", "Use these/those for many."],
  faq: [
    { q: "Which is for far — this or that?", a: "that." },
  ],
  related: [
    { board: "wbbpe", classId: "2", subject: "english", slug: "a-an-the" },
    { board: "wbbpe", classId: "2", subject: "english", slug: "singular-and-plural" },
  ],
};

export default chapter;
