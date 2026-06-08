import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "10",
  subject: "maths",
  slug: "probability",
  title: "Probability",
  order: 14,
  seoTitle: "Probability Class 10 CBSE Notes, MCQs, Quiz & Solved Examples",
  metaDescription:
    "Class 10 Maths Probability: theoretical probability, range of probability, P(not E) = 1 − P(E), coins, dice and cards, solved examples, MCQ quiz with answers and important questions.",
  overview:
    "Probability measures how likely an event is to happen, on a scale from 0 (impossible) to 1 (certain). In Class 10 you work with theoretical (classical) probability — counting favourable outcomes out of equally likely total outcomes — using familiar experiments like tossing coins, rolling dice and drawing cards. It is a short, intuitive and high-scoring chapter.",
  objectives: [
    "Define the theoretical probability of an event.",
    "Use P(E) = number of favourable outcomes ÷ total number of outcomes.",
    "Recall that probability always lies between 0 and 1.",
    "Use the complement rule P(not E) = 1 − P(E).",
    "Solve problems involving coins, dice and playing cards.",
  ],
  concepts: [
    {
      heading: "Theoretical probability",
      body: "When all outcomes of an experiment are equally likely, the probability of an event E is P(E) = (number of outcomes favourable to E) ÷ (total number of possible outcomes).",
    },
    {
      heading: "Range of probability",
      body: "Probability always lies between 0 and 1. The probability of an impossible event is 0, and the probability of a sure (certain) event is 1.",
    },
    {
      heading: "Complement of an event",
      body: "The event 'not E' (E does not happen) is the complement of E. Their probabilities add to 1, so P(not E) = 1 − P(E).",
    },
    {
      heading: "Sum of all probabilities",
      body: "The sum of the probabilities of all the elementary (individual) outcomes of an experiment is 1. For example, for a coin, P(head) + P(tail) = 1/2 + 1/2 = 1.",
    },
  ],
  formulas: [
    { name: "Probability of an event", formula: "P(E) = favourable outcomes ÷ total outcomes" },
    { name: "Complement rule", formula: "P(not E) = 1 − P(E)" },
    { name: "Range", formula: "0 ≤ P(E) ≤ 1" },
  ],
  definitions: [
    { term: "Sure (certain) event", meaning: "An event that is bound to happen; its probability is 1." },
    { term: "Impossible event", meaning: "An event that cannot happen; its probability is 0." },
    { term: "Complement of an event", meaning: "The event that E does not occur, written E̅ or 'not E', with P(not E) = 1 − P(E)." },
  ],
  examples: [
    {
      problem: "A coin is tossed once. Find the probability of getting a head.",
      solution:
        "Total outcomes = 2 (head, tail). Favourable = 1 (head). P(head) = 1/2.",
    },
    {
      problem: "A die is rolled once. Find (i) P(getting a 3) and (ii) P(getting an even number).",
      solution:
        "Total outcomes = 6. (i) Favourable for 3 = 1, so P(3) = 1/6. (ii) Even numbers are 2, 4, 6 — 3 outcomes — so P(even) = 3/6 = 1/2.",
    },
    {
      problem: "A bag has 3 red and 2 blue balls. One ball is drawn at random. Find the probability that it is red.",
      solution:
        "Total balls = 5, favourable (red) = 3. P(red) = 3/5.",
    },
  ],
  commonMistakes: [
    "Giving a probability greater than 1 or less than 0 — always check 0 ≤ P(E) ≤ 1.",
    "Counting the total outcomes wrongly (e.g. forgetting a card or a die face).",
    "Confusing 'favourable' outcomes with the total outcomes.",
    "Forgetting that P(E) + P(not E) = 1.",
  ],
  mcqs: [
    { id: "pr1", difficulty: "easy", q: "The probability of a sure event is:", options: ["0", "1", "0.5", "2"], answer: 1, explanation: "A certain event has probability 1." },
    { id: "pr2", difficulty: "easy", q: "The probability of an impossible event is:", options: ["1", "0.5", "0", "−1"], answer: 2, explanation: "An impossible event has probability 0." },
    { id: "pr3", difficulty: "easy", q: "The probability of any event always lies between:", options: ["0 and 100", "1 and 2", "0 and 1", "−1 and 1"], answer: 2, explanation: "0 ≤ P(E) ≤ 1." },
    { id: "pr4", difficulty: "easy", q: "The probability of getting a head when a coin is tossed is:", options: ["1", "1/4", "0", "1/2"], answer: 3, explanation: "1 favourable out of 2 outcomes = 1/2." },
    { id: "pr5", difficulty: "medium", q: "The probability of getting an even number on a die is:", options: ["1/3", "2/3", "1/6", "1/2"], answer: 3, explanation: "Even numbers 2,4,6 give 3/6 = 1/2." },
    { id: "pr6", difficulty: "easy", q: "P(not E) equals:", options: ["1 ÷ P(E)", "1 + P(E)", "1 − P(E)", "P(E)"], answer: 2, explanation: "The complement rule: P(not E) = 1 − P(E)." },
    { id: "pr7", difficulty: "medium", q: "The probability of getting a number greater than 4 on a die is:", options: ["1/3", "1/2", "2/3", "1/6"], answer: 0, explanation: "Numbers >4 are 5 and 6: 2/6 = 1/3." },
    { id: "pr8", difficulty: "medium", q: "The probability of drawing a king from a well-shuffled deck of 52 cards is:", options: ["1/4", "1/13", "1/52", "4/13"], answer: 1, explanation: "4 kings out of 52 = 4/52 = 1/13." },
    { id: "pr9", difficulty: "easy", q: "A bag has 3 red and 2 blue balls. P(red) is:", options: ["2/5", "3/5", "3/2", "1/2"], answer: 1, explanation: "3 red out of 5 balls = 3/5." },
    { id: "pr10", difficulty: "medium", q: "The sum of the probabilities of all elementary outcomes of an experiment is:", options: ["the number of outcomes", "0", "1", "0.5"], answer: 2, explanation: "All elementary probabilities add up to 1." },
    { id: "bk10m14", difficulty: "medium", q: "The probability of a sure (certain) event is?", options: ["0", "1/2", "1", "100"], answer: 2, explanation: "A certain event has probability 1." },
    { id: "bk10m15", difficulty: "medium", q: "The probability of getting a head when a fair coin is tossed once is?", options: ["1", "0", "1/4", "1/2"], answer: 3, explanation: "One favourable outcome out of two equally likely outcomes = 1/2." },
  ],
  shortQuestions: [
    { q: "A die is thrown once. What is the probability of getting an odd number?", a: "Odd numbers 1, 3, 5 give 3/6 = 1/2." },
    { q: "If P(E) = 0.35, what is P(not E)?", a: "P(not E) = 1 − 0.35 = 0.65." },
    { q: "What is the probability of getting a tail when a coin is tossed?", a: "1/2." },
  ],
  longQuestions: [
    { q: "One card is drawn from a deck of 52 cards. Find the probability that it is (i) a red card, (ii) a face card.", a: "(i) There are 26 red cards, so P(red) = 26/52 = 1/2. (ii) Face cards (J, Q, K of each suit) number 12, so P(face card) = 12/52 = 3/13." },
    { q: "A bag contains 5 red, 4 green and 3 blue balls. One ball is drawn at random. Find the probability it is (i) green, (ii) not blue.", a: "Total = 12 balls. (i) P(green) = 4/12 = 1/3. (ii) Not blue means red or green = 9 balls, so P(not blue) = 9/12 = 3/4 (or 1 − 3/12)." },
  ],
  hots: [
    { q: "Two coins are tossed together. Find the probability of getting at least one head.", a: "Outcomes: HH, HT, TH, TT (4 total). 'At least one head' excludes only TT, so favourable = 3. P = 3/4." },
    { q: "A number is chosen at random from 1 to 25. Find the probability that it is a multiple of 5.", a: "Multiples of 5 from 1 to 25 are 5, 10, 15, 20, 25 — that's 5 numbers. P = 5/25 = 1/5." },
  ],
  revisionNotes: [
    "P(E) = favourable ÷ total outcomes.",
    "0 ≤ P(E) ≤ 1; impossible = 0, sure = 1.",
    "P(not E) = 1 − P(E).",
    "All elementary probabilities add up to 1.",
  ],
  keyTakeaways: [
    "Count the total outcomes carefully — that's where most errors come from.",
    "Use the complement rule when 'at least one' or 'not' appears.",
    "A probability can never exceed 1.",
  ],
  faq: [
    { q: "What is theoretical probability?", a: "It is the probability calculated by reasoning about equally likely outcomes, as favourable outcomes divided by total outcomes — without performing the experiment." },
    { q: "Can a probability be more than 1?", a: "No. Probability always lies between 0 and 1, inclusive." },
    { q: "How many cards of each type are in a standard deck?", a: "A deck has 52 cards: 26 red and 26 black, 4 suits of 13 cards each, with 4 aces, 4 kings, 4 queens and 4 jacks." },
  ],
  related: [
    { classId: "10", subject: "maths", slug: "statistics" },
  ],
};

export default chapter;
