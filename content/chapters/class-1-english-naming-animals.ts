import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  board: "wbbpe",
  classId: "1",
  subject: "english",
  slug: "naming-animals",
  title: "Naming Animals",
  order: 5,
  seoTitle: "Naming Animals — WBBPE Class 1 English (Amar Boi) | StudyMatic",
  metaDescription:
    "WBBPE Class 1 English: learn English names of common animals — cat, dog, cow, hen, fish, bird. Simple notes, Bengali help and a quiz.",
  overview:
    "In this chapter we learn the English names of animals we see around us — like cat, dog, cow, hen, fish and bird.",
  objectives: [
    "Name common animals in English.",
    "Match an animal to its English word.",
    "Know one or two animal sounds.",
    "Tell where some animals live.",
  ],
  concepts: [
    {
      heading: "Common animals",
      body: "Some animals we know — cat, dog, cow, hen, fish and bird. We see many of them around our homes.",
    },
    {
      heading: "Animal sounds",
      body: "Animals make sounds. A cow says 'moo' and a cat says 'meow'. Sounds help us know which animal it is.",
    },
    {
      heading: "Where they live",
      body: "A fish lives in water, a bird can fly in the sky, and a cow stays on land. Each animal has its own home.",
    },
  ],
  formulas: [],
  definitions: [
    { term: "Cat (বিড়াল)", meaning: "A small animal that says 'meow'." },
    { term: "Dog (কুকুর)", meaning: "An animal that says 'bow-wow'." },
    { term: "Cow (গরু)", meaning: "An animal that gives us milk." },
  ],
  examples: [
    { problem: "Which animal gives us milk?", solution: "The cow." },
    { problem: "Which animal lives in water?", solution: "The fish." },
  ],
  commonMistakes: [
    "Mixing up the English names of two animals.",
    "Matching the wrong sound to an animal.",
  ],
  mcqs: [
    {
      id: "w1e-an-1",
      q: "Which animal says 'meow'?",
      options: ["hen", "dog", "cow", "cat"],
      answer: 3,
      explanation: "A cat says 'meow'.",
      difficulty: "easy",
    },
    {
      id: "w1e-an-2",
      q: "A ___ gives us milk.",
      options: ["cow", "cat", "fish", "bird"],
      answer: 0,
      explanation: "A cow gives us milk.",
      difficulty: "easy",
    },
    {
      id: "w1e-an-3",
      q: "The English word for 'কুকুর' is ___.",
      options: ["cat", "dog", "cow", "hen"],
      answer: 1,
      explanation: "'কুকুর' is 'dog' in English.",
      difficulty: "easy",
    },
    {
      id: "w1e-an-4",
      q: "Which one is a bird?",
      options: ["dog", "cow", "hen", "fish"],
      answer: 2,
      explanation: "A hen is a bird.",
      difficulty: "medium",
    },
    {
      id: "w1e-an-5",
      q: "A ___ lives in water.",
      options: ["dog", "cat", "cow", "fish"],
      answer: 3,
      explanation: "A fish lives in water.",
      difficulty: "medium",
    },
  ],
  shortQuestions: [
    { q: "What sound does a cow make?", a: "'Moo'." },
    { q: "The English word for 'গরু' is?", a: "Cow." },
  ],
  longQuestions: [
    { q: "Name three animals in English.", a: "For example — cat, dog and cow." },
  ],
  hots: [
    {
      q: "One animal swims and one animal flies. Which is which?",
      a: "A fish swims (in water) and a bird flies (in the sky).",
    },
  ],
  revisionNotes: [
    "Animals: cat, dog, cow, hen, fish, bird.",
    "A cow says 'moo', a cat says 'meow'.",
    "A fish lives in water; a bird flies.",
  ],
  keyTakeaways: ["Name animals in English.", "Match animals, sounds and homes."],
  faq: [
    { q: "What is 'বিড়াল' in English?", a: "Cat." },
  ],
  related: [
    { board: "wbbpe", classId: "1", subject: "english", slug: "words-around-us" },
    { board: "wbbpe", classId: "1", subject: "english", slug: "simple-sentences" },
  ],
};

export default chapter;
