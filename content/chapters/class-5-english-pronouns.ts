import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  board: "wbbpe",
  classId: "5",
  subject: "english",
  slug: "pronouns",
  title: "Subject & Object Pronouns",
  order: 15,
  seoTitle: "Subject & Object Pronouns — WBBPE Class 5 English (Butterfly) | StudyMatic",
  metaDescription:
    "WBBPE Class 5 English: subject pronouns (I, he, she, we, they) do the action; object pronouns (me, him, her, us, them) receive it. Notes and a quiz.",
  overview:
    "In this chapter we learn two kinds of pronouns — subject pronouns that do the action, and object pronouns that receive it.",
  objectives: [
    "Know subject pronouns.",
    "Know object pronouns.",
    "Choose the right one in a sentence.",
    "Change he→him, she→her.",
  ],
  concepts: [
    {
      heading: "Subject pronouns",
      body: "A subject pronoun does the action and usually comes before the verb: I, you, he, she, it, we, they. ‘She sings.’",
    },
    {
      heading: "Object pronouns",
      body: "An object pronoun receives the action and usually comes after the verb: me, you, him, her, it, us, them. ‘Give it to me.’",
    },
    {
      heading: "he → him, she → her",
      body: "‘I saw him.’ ‘She helped her.’ The object forms are ‘him’ and ‘her’.",
    },
  ],
  formulas: [],
  definitions: [
    { term: "Subject pronoun", meaning: "A pronoun that does the action (I, he, she, we, they)." },
    { term: "Object pronoun", meaning: "A pronoun that receives the action (me, him, her, us, them)." },
  ],
  examples: [
    { problem: "‘___ is my friend.’ (subject)", solution: "He / She." },
    { problem: "‘Give the book to ___.’ (object)", solution: "me." },
  ],
  commonMistakes: [
    "Using a subject pronoun where an object pronoun is needed (‘Give it to I’ ✗).",
    "Mixing up he/him and she/her.",
  ],
  mcqs: [
    {
      id: "w5e-pron-1",
      q: "A pronoun that does the action (like I, he, she) is a ___ pronoun.",
      options: ["proper", "subject", "object", "common"],
      answer: 1,
      explanation: "It is a subject pronoun.",
      difficulty: "easy",
    },
    {
      id: "w5e-pron-2",
      q: "A pronoun that receives the action (like me, him, her) is an ___ pronoun.",
      options: ["common", "subject", "object", "proper"],
      answer: 2,
      explanation: "It is an object pronoun.",
      difficulty: "easy",
    },
    {
      id: "w5e-pron-3",
      q: "‘___ is my friend.’ — fill in (subject).",
      options: ["Me", "Her", "Him", "She"],
      answer: 3,
      explanation: "A subject pronoun is needed → ‘She’.",
      difficulty: "medium",
    },
    {
      id: "w5e-pron-4",
      q: "‘Give the book to ___.’ — fill in (object).",
      options: ["me", "I", "we", "they"],
      answer: 0,
      explanation: "An object pronoun is needed → ‘me’.",
      difficulty: "medium",
    },
    {
      id: "w5e-pron-5",
      q: "The object form of ‘he’ is ___.",
      options: ["his", "him", "he", "himself"],
      answer: 1,
      explanation: "‘he’ → ‘him’ as an object.",
      difficulty: "easy",
    },
  ],
  shortQuestions: [
    { q: "The object form of ‘they’ is ___.", a: "them." },
    { q: "The subject form used for yourself is ___.", a: "I." },
  ],
  longQuestions: [
    {
      q: "Fill in: ‘___ called me, and I called ___.’ (she / her)",
      a: "She called me, and I called her.",
    },
  ],
  hots: [
    {
      q: "Why is ‘Me went home’ wrong?",
      a: "‘Me’ is an object pronoun; the subject form is needed → ‘I went home.’",
    },
  ],
  revisionNotes: [
    "Subject pronouns: I, you, he, she, it, we, they.",
    "Object pronouns: me, you, him, her, it, us, them.",
    "Subject does the action; object receives it.",
  ],
  keyTakeaways: ["Tell subject from object pronouns.", "Use the right form."],
  faq: [
    { q: "Object form of ‘we’?", a: "us." },
  ],
  related: [
    { board: "wbbpe", classId: "5", subject: "english", slug: "nouns" },
    { board: "wbbpe", classId: "5", subject: "english", slug: "past-tense" },
  ],
};

export default chapter;
