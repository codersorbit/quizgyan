import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  board: "wbbpe",
  classId: "4",
  subject: "english",
  slug: "adverbs",
  title: "Adverbs",
  order: 5,
  seoTitle: "Adverbs — WBBPE Class 4 English (Butterfly) | StudyMatic",
  metaDescription:
    "WBBPE Class 4 English: adverbs tell us more about a verb — how, when or where an action happens (quickly, today, here). Notes and a quiz.",
  overview:
    "In this chapter we learn adverbs. An adverb tells us more about a verb — how, when or where an action happens.",
  objectives: [
    "Know what an adverb is.",
    "Find adverbs in a sentence.",
    "Know that many adverbs end in -ly.",
    "Tell how/when/where adverbs apart.",
  ],
  concepts: [
    {
      heading: "What is an adverb",
      body: "An adverb tells us more about a verb — usually how, when or where the action happens. In ‘She runs quickly’, ‘quickly’ tells us how she runs.",
    },
    {
      heading: "Adverbs that end in -ly",
      body: "Many adverbs of manner (how) end in -ly: quickly, slowly, loudly, softly.",
    },
    {
      heading: "When and where",
      body: "Some adverbs tell when (now, today) or where (here, there). ‘Come here.’ ‘We will go today.’",
    },
  ],
  formulas: [],
  definitions: [
    { term: "Adverb", meaning: "A word that tells more about a verb — how, when or where." },
  ],
  examples: [
    { problem: "In ‘She sings sweetly’, which is the adverb?", solution: "sweetly." },
    { problem: "In ‘He came late’, which is the adverb?", solution: "late." },
    { problem: "In ‘The baby sleeps quietly’, which is the adverb?", solution: "quietly." },
    { problem: "Make an adverb from ‘slow’.", solution: "slowly." },
    { problem: "In ‘We will go today’, which word is the adverb?", solution: "today." },
  ],
  commonMistakes: [
    "Mixing adverbs up with adjectives (adverbs describe verbs, not nouns).",
    "Forgetting that not every adverb ends in -ly (now, here).",
  ],
  mcqs: [
    {
      id: "w4e-adv-1",
      q: "A word that tells us more about a verb is an ___.",
      options: ["adjective", "adverb", "noun", "article"],
      answer: 1,
      explanation: "A word that tells more about a verb is an adverb.",
      difficulty: "easy",
    },
    {
      id: "w4e-adv-2",
      q: "In ‘She runs quickly’, which is the adverb?",
      options: ["she", "runs", "quickly", "ball"],
      answer: 2,
      explanation: "‘quickly’ tells how she runs.",
      difficulty: "easy",
    },
    {
      id: "w4e-adv-3",
      q: "Many adverbs of manner end in ___.",
      options: ["-s", "-ing", "-est", "-ly"],
      answer: 3,
      explanation: "quickly, slowly, softly — they end in -ly.",
      difficulty: "medium",
    },
    {
      id: "w4e-adv-4",
      q: "‘He spoke ___.’ (in a soft way) — fill in.",
      options: ["softly", "soft", "softer", "softest"],
      answer: 0,
      explanation: "The adverb of manner is ‘softly’.",
      difficulty: "medium",
    },
    {
      id: "w4e-adv-5",
      q: "An adverb can tell us how, when or ___ an action happens.",
      options: ["who", "where", "which", "whose"],
      answer: 1,
      explanation: "Adverbs tell how, when or where.",
      difficulty: "easy",
    },
    {
      id: "w4e-adv-6",
      q: "In ‘She runs quickly’, which is the adverb?",
      options: ["She", "runs", "quickly", "and"],
      answer: 2,
      explanation: "‘quickly’ tells how she runs — it is the adverb.",
      difficulty: "easy",
    },
    {
      id: "w4e-adv-7",
      q: "An adverb usually tells more about a ___.",
      options: ["noun", "verb", "article", "number"],
      answer: 1,
      explanation: "An adverb tells more about a verb (how, when or where).",
      difficulty: "easy",
    },
    {
      id: "w4e-adv-8",
      q: "Which word is an adverb of manner?",
      options: ["happy", "loudly", "table", "blue"],
      answer: 1,
      explanation: "‘loudly’ tells how — an adverb of manner.",
      difficulty: "easy",
    },
    {
      id: "w4e-adv-9",
      q: "Make an adverb from ‘quick’.",
      options: ["quicker", "quickly", "quickest", "quickness"],
      answer: 1,
      explanation: "quick → quickly.",
      difficulty: "medium",
    },
    {
      id: "w4e-adv-10",
      q: "In ‘Come here’, which is the adverb?",
      options: ["Come", "here", "now", "go"],
      answer: 1,
      explanation: "‘here’ tells where — an adverb of place.",
      difficulty: "medium",
    },
  ],
  shortQuestions: [
    { q: "Change ‘slow’ into an adverb.", a: "slowly." },
    { q: "Is ‘here’ an adverb?", a: "Yes — it tells where." },
  ],
  longQuestions: [
    {
      q: "Use ‘quickly’ and ‘today’ in two short sentences.",
      a: "The boy ran quickly. We will meet today.",
    },
  ],
  hots: [
    {
      q: "In ‘a quick runner’ and ‘runs quickly’, which has the adverb?",
      a: "‘runs quickly’ — ‘quickly’ describes the verb ‘runs’; ‘quick’ in the first describes the noun, so it is an adjective.",
    },
  ],
  revisionNotes: [
    "Adverbs tell more about verbs.",
    "How/when/where an action happens.",
    "Many adverbs of manner end in -ly.",
  ],
  keyTakeaways: ["Spot adverbs.", "Adverbs describe verbs, not nouns."],
  faq: [
    { q: "Does every adverb end in -ly?", a: "No — words like now, here and today are adverbs too." },
  ],
  related: [
    { board: "wbbpe", classId: "4", subject: "english", slug: "verbs-tense" },
    { board: "wbbpe", classId: "4", subject: "english", slug: "prepositions" },
  ],
};

export default chapter;
