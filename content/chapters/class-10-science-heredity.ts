import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "10",
  subject: "science",
  slug: "heredity",
  title: "Heredity",
  order: 8,
  seoTitle: "Heredity Class 10 CBSE Notes, MCQs, Quiz & Mendel's Laws",
  metaDescription:
    "Class 10 Science Heredity: Mendel's experiments and laws, dominant and recessive traits, monohybrid and dihybrid crosses, sex determination in humans, MCQ quiz and important questions.",
  overview:
    "Heredity is the passing of traits from parents to offspring through genes. This chapter follows Mendel's famous experiments with pea plants to explain dominant and recessive traits, monohybrid and dihybrid crosses, and how sex is determined in humans. It is a concept-driven chapter where understanding the crosses is the key to scoring well.",
  objectives: [
    "Define heredity and explain how traits are inherited.",
    "State Mendel's laws of inheritance.",
    "Work out monohybrid and dihybrid cross ratios.",
    "Distinguish dominant and recessive traits.",
    "Explain how sex is determined in human beings.",
  ],
  concepts: [
    {
      heading: "Mendel and inherited traits",
      body: "Gregor Mendel studied pea plants and found that traits are controlled by pairs of factors (now called genes). Each parent passes one factor of each pair to the offspring. A trait that shows up even when only one copy is present is dominant; one that appears only with two copies is recessive.",
    },
    {
      heading: "Monohybrid cross",
      body: "A cross involving one pair of contrasting traits. Crossing a tall (TT) and a short (tt) pea gives all tall (Tt) plants in the F₁ generation. Self-crossing F₁ gives a phenotype ratio of 3 tall : 1 short in F₂ — Mendel's law of segregation in action.",
    },
    {
      heading: "Dihybrid cross",
      body: "A cross involving two pairs of traits at once. Mendel's dihybrid cross gives an F₂ phenotype ratio of 9 : 3 : 3 : 1, showing that the two traits are inherited independently (the law of independent assortment).",
    },
    {
      heading: "Sex determination in humans",
      body: "Humans have 23 pairs of chromosomes, one of which is the sex pair. Females are XX and males are XY. The egg always carries X, while a sperm carries either X or Y. If an X-sperm fertilises the egg the child is a girl (XX); if a Y-sperm does, the child is a boy (XY) — so the father determines the sex.",
    },
  ],
  formulas: [
    { name: "Monohybrid F₂ ratio", formula: "3 : 1 (phenotype)" },
    { name: "Dihybrid F₂ ratio", formula: "9 : 3 : 3 : 1 (phenotype)" },
    { name: "Human sex chromosomes", formula: "female XX, male XY" },
  ],
  definitions: [
    { term: "Heredity", meaning: "The transmission of characters (traits) from parents to offspring." },
    { term: "Gene", meaning: "A unit of inheritance that controls a particular trait." },
    { term: "Dominant trait", meaning: "A trait that expresses itself even when only one copy of its gene is present." },
    { term: "Recessive trait", meaning: "A trait that expresses itself only when both copies of its gene are present." },
  ],
  examples: [
    {
      problem: "In a cross between a pure tall (TT) and a pure short (tt) pea plant, what is the F₁ generation?",
      solution:
        "All offspring receive one T and one t, becoming Tt. Since T (tall) is dominant, all F₁ plants are tall (but carry the short gene).",
    },
    {
      problem: "What is the phenotype ratio when two F₁ tall (Tt) plants are crossed?",
      solution:
        "The cross Tt × Tt gives genotypes TT : Tt : tt in the ratio 1 : 2 : 1, which is a phenotype ratio of 3 tall : 1 short.",
    },
    {
      problem: "Who determines the sex of a child in humans, and why?",
      solution:
        "The father. The mother's egg always carries an X chromosome, but the father's sperm carries either X or Y. The sperm decides whether the child is XX (girl) or XY (boy).",
    },
  ],
  commonMistakes: [
    "Confusing genotype (gene make-up, e.g. Tt) with phenotype (visible trait, e.g. tall).",
    "Stating the monohybrid genotype ratio (1:2:1) as the phenotype ratio (it is 3:1).",
    "Thinking the mother determines the child's sex — it is the father.",
    "Forgetting that a recessive trait needs both copies to appear.",
  ],
  mcqs: [
    { id: "he1", difficulty: "easy", q: "The scientist who founded the study of heredity using pea plants was:", options: ["Pasteur", "Lamarck", "Mendel", "Darwin"], answer: 2, explanation: "Gregor Mendel is called the father of genetics." },
    { id: "he2", difficulty: "easy", q: "A trait that appears with only one copy of its gene is:", options: ["recessive", "dominant", "mutant", "hidden"], answer: 1, explanation: "A dominant trait shows up even with a single copy." },
    { id: "he3", difficulty: "medium", q: "The F₂ phenotype ratio of a monohybrid cross is:", options: ["9 : 3 : 3 : 1", "1 : 2 : 1", "3 : 1", "1 : 1"], answer: 2, explanation: "Monohybrid F₂ phenotype ratio is 3 : 1." },
    { id: "he4", difficulty: "medium", q: "The F₂ phenotype ratio of a dihybrid cross is:", options: ["1 : 1", "9 : 3 : 3 : 1", "3 : 1", "1 : 2 : 1"], answer: 1, explanation: "Dihybrid F₂ ratio is 9 : 3 : 3 : 1." },
    { id: "he5", difficulty: "easy", q: "Human females have the sex chromosomes:", options: ["XO", "YY", "XY", "XX"], answer: 3, explanation: "Females are XX." },
    { id: "he6", difficulty: "easy", q: "Human males have the sex chromosomes:", options: ["XO", "XX", "YY", "XY"], answer: 3, explanation: "Males are XY." },
    { id: "he7", difficulty: "medium", q: "The sex of a child in humans is determined by the:", options: ["mother", "grandparents", "both equally and randomly", "father"], answer: 3, explanation: "The father's sperm carries X or Y, deciding the sex." },
    { id: "he8", difficulty: "easy", q: "The visible characteristic of an organism is its:", options: ["chromosome", "phenotype", "allele", "genotype"], answer: 1, explanation: "Phenotype is the observable trait." },
    { id: "he9", difficulty: "medium", q: "In Tt, the trait expressed is the:", options: ["both equally", "neither", "dominant one", "recessive one"], answer: 2, explanation: "With one dominant and one recessive gene, the dominant trait shows." },
    { id: "he10", difficulty: "hard", q: "The genotype ratio in a monohybrid F₂ generation (Tt × Tt) is:", options: ["9 : 3 : 3 : 1", "1 : 2 : 1", "3 : 1", "1 : 1"], answer: 1, explanation: "TT : Tt : tt = 1 : 2 : 1." },
    { id: "bk10s9", difficulty: "hard", q: "The unit of inheritance carried on chromosomes is the?", options: ["Cell", "Gene", "Tissue", "Neuron"], answer: 1, explanation: "Genes are the units of heredity located on chromosomes." },
  ],
  shortQuestions: [
    { q: "What is the difference between genotype and phenotype?", a: "Genotype is the genetic make-up (e.g. Tt); phenotype is the visible trait (e.g. tall)." },
    { q: "Which chromosome does a sperm need to carry to produce a male child?", a: "The Y chromosome." },
    { q: "State Mendel's law of segregation in one line.", a: "The two factors of a trait separate during gamete formation, and each gamete carries only one of them." },
  ],
  longQuestions: [
    { q: "Explain a monohybrid cross between a tall (TT) and a short (tt) pea plant up to the F₂ generation.", a: "F₁: TT × tt gives all Tt — tall plants (T is dominant). F₂: crossing Tt × Tt gives TT, Tt, Tt, tt → genotype ratio 1 : 2 : 1 and phenotype ratio 3 tall : 1 short. This shows that the recessive (short) trait, hidden in F₁, reappears in F₂." },
    { q: "How is the sex of a child determined in humans?", a: "Of the 23 chromosome pairs, one is the sex pair. Women are XX and men are XY. Every egg carries X, but a sperm carries either X or Y. If an X-carrying sperm fertilises the egg, the child is XX (girl); if a Y-carrying sperm does, the child is XY (boy). Thus the father's sperm determines the sex." },
  ],
  hots: [
    { q: "Two black guinea pigs are crossed and produce some white offspring. What does this tell you about the parents?", a: "White must be recessive and both parents must be heterozygous (Bb). Each carries a hidden white gene, so some offspring receive bb and appear white." },
    { q: "Why did Mendel choose pea plants for his experiments?", a: "Pea plants have clearly contrasting traits, grow quickly, produce many offspring, and can be self- or cross-pollinated easily, making them ideal for studying inheritance." },
  ],
  revisionNotes: [
    "Traits are controlled by genes; dominant shows with one copy, recessive needs two.",
    "Monohybrid F₂: phenotype 3:1, genotype 1:2:1.",
    "Dihybrid F₂: 9:3:3:1 (independent assortment).",
    "Humans: female XX, male XY; father determines sex.",
  ],
  keyTakeaways: [
    "Master the cross diagrams — they answer most questions.",
    "Separate genotype (genes) from phenotype (appearance).",
    "The father, through X or Y sperm, determines the child's sex.",
  ],
  faq: [
    { q: "What are dominant and recessive traits?", a: "A dominant trait appears even when only one copy of its gene is present; a recessive trait appears only when both copies are present." },
    { q: "Who determines the sex of a baby?", a: "The father, because his sperm carries either an X (girl) or a Y (boy) chromosome, while the egg always carries X." },
    { q: "What is the F₂ ratio of a monohybrid cross?", a: "The phenotype ratio is 3 : 1, and the genotype ratio is 1 : 2 : 1." },
  ],
  related: [
    { classId: "10", subject: "science", slug: "how-do-organisms-reproduce" },
    { classId: "10", subject: "science", slug: "life-processes" },
  ],
};

export default chapter;
