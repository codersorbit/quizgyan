import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  board: "wbbpe",
  classId: "5",
  subject: "english",
  slug: "nouns",
  title: "Kinds of Nouns",
  order: 14,
  seoTitle: "Kinds of Nouns — WBBPE Class 5 English (Butterfly) | StudyMatic",
  metaDescription:
    "WBBPE Class 5 English: common, proper and collective nouns — a collective noun names a group (team, herd, bunch). Notes and a quiz.",
  overview:
    "In this chapter we revise common and proper nouns and learn collective nouns — words that name a whole group of people, animals or things.",
  objectives: [
    "Recall common and proper nouns.",
    "Know what a collective noun is.",
    "Find collective nouns.",
    "Use them in sentences.",
  ],
  concepts: [
    {
      heading: "Common and proper (recall)",
      body: "A common noun is a general name (city, boy). A proper noun is a particular name and takes a capital letter (Delhi, Rahul).",
    },
    {
      heading: "Collective noun",
      body: "A collective noun names a whole group of people, animals or things — a team (of players), a herd (of cows), a bunch (of bananas).",
    },
    {
      heading: "Using collective nouns",
      body: "‘A herd of elephants crossed the road.’ — ‘herd’ names the whole group of elephants.",
    },
  ],
  formulas: [],
  definitions: [
    { term: "Collective noun", meaning: "A word that names a group, like team, herd or bunch." },
  ],
  examples: [
    { problem: "A group of cows is a ___.", solution: "herd." },
    { problem: "Is ‘team’ a collective noun?", solution: "Yes." },
  ],
  commonMistakes: [
    "Forgetting that a collective noun names one whole group.",
    "Mixing collective nouns up with plurals.",
  ],
  mcqs: [
    {
      id: "w5e-noun-1",
      q: "A word that names a group (like team, herd, bunch) is a ___ noun.",
      options: ["question", "proper", "action", "collective"],
      answer: 3,
      explanation: "A group-naming word is a collective noun.",
      difficulty: "easy",
    },
    {
      id: "w5e-noun-2",
      q: "A group of cows is called a ___.",
      options: ["herd", "team", "bunch", "fleet"],
      answer: 0,
      explanation: "A group of cows is a herd.",
      difficulty: "easy",
    },
    {
      id: "w5e-noun-3",
      q: "Which one is a collective noun?",
      options: ["river", "bunch", "Delhi", "run"],
      answer: 1,
      explanation: "‘bunch’ names a group, so it is collective.",
      difficulty: "medium",
    },
    {
      id: "w5e-noun-4",
      q: "A ___ of players plays the match.",
      options: ["forest", "herd", "team", "bunch"],
      answer: 2,
      explanation: "A group of players is a team.",
      difficulty: "medium",
    },
    {
      id: "w5e-noun-5",
      q: "‘a bunch of ___’ — which word fits?",
      options: ["sand", "water", "air", "bananas"],
      answer: 3,
      explanation: "We say ‘a bunch of bananas’.",
      difficulty: "medium",
    },
  ],
  shortQuestions: [
    { q: "What do we call a group of stars? (a ___)", a: "cluster." },
    { q: "Is ‘Kolkata’ common or proper?", a: "Proper." },
  ],
  longQuestions: [
    {
      q: "Give a collective noun for: players, cows, bananas.",
      a: "A team of players, a herd of cows, a bunch of bananas.",
    },
  ],
  hots: [
    {
      q: "Why is ‘herd’ called a collective noun even though it stands for many cows?",
      a: "Because it names the whole group as one — that is what a collective noun does.",
    },
  ],
  revisionNotes: [
    "Common = general; proper = particular (capital).",
    "Collective = names a group.",
    "team, herd, bunch, cluster.",
  ],
  keyTakeaways: ["Know collective nouns.", "Match the group word to the group."],
  faq: [
    { q: "Is ‘flock’ a collective noun?", a: "Yes — a flock of birds or sheep." },
  ],
  related: [
    { board: "wbbpe", classId: "5", subject: "english", slug: "subject-predicate" },
    { board: "wbbpe", classId: "5", subject: "english", slug: "pronouns" },
  ],
};

export default chapter;
