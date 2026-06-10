import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  board: "wbbpe",
  classId: "5",
  subject: "english",
  slug: "subject-predicate",
  title: "Subject & Predicate",
  order: 13,
  seoTitle: "Subject & Predicate — WBBPE Class 5 English (Butterfly) | StudyMatic",
  metaDescription:
    "WBBPE Class 5 English: a sentence has two parts — the subject (who/what it is about) and the predicate (what is said about the subject). Notes and a quiz.",
  overview:
    "In this chapter we learn that a sentence has two parts — the subject and the predicate. The subject tells who or what the sentence is about; the predicate tells what is said about it.",
  objectives: [
    "Know the two parts of a sentence.",
    "Find the subject.",
    "Find the predicate.",
    "Separate them in a sentence.",
  ],
  concepts: [
    {
      heading: "The subject",
      body: "The subject is the part that tells who or what the sentence is about. In ‘The monkey landed on the rock.’, the subject is ‘The monkey’.",
    },
    {
      heading: "The predicate",
      body: "The predicate is the part that tells what the subject does or is. In the sentence above, the predicate is ‘landed on the rock’.",
    },
    {
      heading: "How to find them",
      body: "Ask ‘who?’ or ‘what?’ before the verb — the answer is the subject; the rest is the predicate. ‘Birds fly in the sky.’ — subject ‘Birds’, predicate ‘fly in the sky’.",
    },
  ],
  formulas: [],
  definitions: [
    { term: "Subject", meaning: "The part of a sentence that tells who or what it is about." },
    { term: "Predicate", meaning: "The part that tells what the subject does or is." },
  ],
  examples: [
    { problem: "In ‘The crocodile swam to the rock.’, what is the subject?", solution: "The crocodile." },
    { problem: "In ‘The crocodile swam to the rock.’, what is the predicate?", solution: "swam to the rock." },
  ],
  commonMistakes: [
    "Mixing up the subject and the predicate.",
    "Thinking the predicate is only the verb (it can include more).",
  ],
  mcqs: [
    {
      id: "w5e-sp-1",
      q: "A sentence has two main parts — subject and ___.",
      options: ["adverb", "adjective", "article", "predicate"],
      answer: 3,
      explanation: "The two parts are subject and predicate.",
      difficulty: "easy",
    },
    {
      id: "w5e-sp-2",
      q: "The part that tells who or what the sentence is about is the ___.",
      options: ["subject", "predicate", "verb", "object"],
      answer: 0,
      explanation: "That part is the subject.",
      difficulty: "easy",
    },
    {
      id: "w5e-sp-3",
      q: "In ‘The monkey landed on the rock’, the subject is ___.",
      options: ["landed", "The monkey", "on the rock", "rock"],
      answer: 1,
      explanation: "The sentence is about ‘The monkey’.",
      difficulty: "medium",
    },
    {
      id: "w5e-sp-4",
      q: "In ‘The monkey landed on the rock’, the predicate is ___.",
      options: ["monkey", "The monkey", "landed on the rock", "The"],
      answer: 2,
      explanation: "What is said about the monkey is ‘landed on the rock’.",
      difficulty: "medium",
    },
    {
      id: "w5e-sp-5",
      q: "In ‘Birds fly in the sky’, the subject is ___.",
      options: ["in the sky", "fly", "sky", "Birds"],
      answer: 3,
      explanation: "The sentence is about ‘Birds’.",
      difficulty: "easy",
    },
  ],
  shortQuestions: [
    { q: "In ‘The sun rises in the east.’, what is the subject?", a: "The sun." },
    { q: "In ‘The sun rises in the east.’, what is the predicate?", a: "rises in the east." },
  ],
  longQuestions: [
    {
      q: "Split ‘The little girl sang a sweet song.’ into subject and predicate.",
      a: "Subject: The little girl; Predicate: sang a sweet song.",
    },
  ],
  hots: [
    {
      q: "In ‘Here comes our teacher.’, the subject is not at the start. What is the subject?",
      a: "‘our teacher’ — the subject can sometimes come later in the sentence.",
    },
  ],
  revisionNotes: [
    "A sentence = subject + predicate.",
    "Subject = who/what it is about.",
    "Predicate = what is said about the subject.",
  ],
  keyTakeaways: ["Find subject and predicate.", "Ask who/what to find the subject."],
  faq: [
    { q: "Can the predicate be more than the verb?", a: "Yes — it includes the verb and the rest." },
  ],
  related: [
    { board: "wbbpe", classId: "5", subject: "english", slug: "nouns" },
    { board: "wbbpe", classId: "5", subject: "english", slug: "pronouns" },
  ],
};

export default chapter;
