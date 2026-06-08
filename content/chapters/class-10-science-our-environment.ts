import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "10",
  subject: "science",
  slug: "our-environment",
  title: "Our Environment",
  order: 13,
  seoTitle: "Our Environment Class 10 CBSE Notes, MCQs, Quiz & Food Chains",
  metaDescription:
    "Class 10 Science Our Environment: ecosystem, food chains and food webs, trophic levels, ten percent law of energy flow, ozone layer depletion and waste management, MCQ quiz and important questions.",
  overview:
    "Our environment is made up of all living organisms and their non-living surroundings, interacting as ecosystems. This chapter explains the components of an ecosystem, food chains and webs, how energy flows through trophic levels, and human impacts such as ozone depletion and the problem of waste. It is a short, scoring biology chapter with clear, memorable ideas.",
  objectives: [
    "Identify the biotic and abiotic components of an ecosystem.",
    "Construct food chains and explain food webs.",
    "Explain trophic levels and the ten percent law of energy flow.",
    "Describe the importance and depletion of the ozone layer.",
    "Classify wastes as biodegradable or non-biodegradable.",
  ],
  concepts: [
    {
      heading: "Ecosystem and its components",
      body: "An ecosystem includes all living organisms (biotic) and their physical surroundings (abiotic) in an area. Biotic components are producers (green plants), consumers (herbivores, carnivores, omnivores) and decomposers (bacteria, fungi) that break down dead matter.",
    },
    {
      heading: "Food chains and food webs",
      body: "A food chain shows how energy and nutrients pass from one organism to the next, e.g. grass → deer → lion. Each step is a trophic level. In nature, many food chains interconnect to form a food web, which makes the ecosystem more stable.",
    },
    {
      heading: "Flow of energy (ten percent law)",
      body: "Energy enters an ecosystem from the Sun and flows in one direction through the trophic levels. Only about 10% of the energy at one level is passed to the next; the rest is used in life processes or lost as heat. This is why food chains usually have only three or four levels.",
    },
    {
      heading: "Environmental issues",
      body: "The ozone layer in the upper atmosphere shields us from harmful ultraviolet rays, but chemicals like CFCs deplete it. Wastes are biodegradable (broken down by decomposers, e.g. paper, food scraps) or non-biodegradable (not broken down, e.g. plastics), and harmful non-biodegradable substances can build up through the food chain (biological magnification).",
    },
  ],
  formulas: [
    { name: "Ten percent law", formula: "≈ 10% of energy is transferred to the next trophic level" },
    { name: "Energy flow", formula: "Sun → producers → consumers (unidirectional)" },
  ],
  definitions: [
    { term: "Ecosystem", meaning: "A unit made of all living organisms and their non-living surroundings interacting together." },
    { term: "Trophic level", meaning: "Each step or level in a food chain at which energy is transferred." },
    { term: "Decomposers", meaning: "Organisms (bacteria, fungi) that break down dead remains and return nutrients to the environment." },
    { term: "Biodegradable waste", meaning: "Waste that can be broken down into harmless substances by decomposers." },
  ],
  examples: [
    {
      problem: "Write a food chain found in a grassland and identify the trophic levels.",
      solution:
        "Grass → grasshopper → frog → snake → hawk. Grass is the producer (1st level), grasshopper the primary consumer (2nd), frog the secondary consumer (3rd), and so on up the chain.",
    },
    {
      problem: "Why are food chains generally limited to three or four trophic levels?",
      solution:
        "Because only about 10% of energy passes to each next level (ten percent law), the energy left after a few levels is too little to support more, so food chains are short.",
    },
    {
      problem: "Classify these as biodegradable or non-biodegradable: vegetable peels, plastic bag, paper, glass.",
      solution:
        "Biodegradable: vegetable peels and paper. Non-biodegradable: plastic bag and glass.",
    },
  ],
  commonMistakes: [
    "Listing decomposers as producers — decomposers break down dead matter.",
    "Saying energy flow is cyclic — energy flow is one-way; only nutrients cycle.",
    "Forgetting that only ~10% of energy moves to the next trophic level.",
    "Confusing biodegradable (decays) with non-biodegradable (does not decay) wastes.",
  ],
  mcqs: [
    { id: "oe1", difficulty: "easy", q: "Green plants in an ecosystem are called:", options: ["consumers", "decomposers", "predators", "producers"], answer: 3, explanation: "Producers make their own food by photosynthesis." },
    { id: "oe2", difficulty: "easy", q: "Bacteria and fungi that break down dead matter are:", options: ["herbivores", "decomposers", "producers", "carnivores"], answer: 1, explanation: "Decomposers recycle nutrients from dead organisms." },
    { id: "oe3", difficulty: "medium", q: "The percentage of energy passed to the next trophic level is about:", options: ["90%", "1%", "10%", "50%"], answer: 2, explanation: "The ten percent law: ~10% is transferred." },
    { id: "oe4", difficulty: "easy", q: "Each step in a food chain is called a:", options: ["trophic level", "biome", "niche", "habitat"], answer: 0, explanation: "Levels of energy transfer are trophic levels." },
    { id: "oe5", difficulty: "medium", q: "The gas layer that protects us from ultraviolet rays is the:", options: ["methane layer", "nitrogen layer", "ozone layer", "carbon dioxide layer"], answer: 2, explanation: "The ozone layer absorbs harmful UV radiation." },
    { id: "oe6", difficulty: "medium", q: "Which of these is non-biodegradable?", options: ["vegetable peels", "plastic", "cotton cloth", "paper"], answer: 1, explanation: "Plastic is not broken down by decomposers." },
    { id: "oe7", difficulty: "easy", q: "Energy flow in an ecosystem is:", options: ["unidirectional", "absent", "two-way", "cyclic"], answer: 0, explanation: "Energy flows in one direction from the Sun upward." },
    { id: "oe8", difficulty: "medium", q: "The chemicals mainly responsible for ozone depletion are:", options: ["CO₂", "CFCs", "O₂", "N₂"], answer: 1, explanation: "Chlorofluorocarbons (CFCs) deplete the ozone layer." },
    { id: "oe9", difficulty: "easy", q: "An interconnected network of food chains is a:", options: ["biomass", "food web", "trophic level", "pyramid"], answer: 1, explanation: "Many linked food chains form a food web." },
    { id: "oe10", difficulty: "hard", q: "The build-up of harmful chemicals along a food chain is called:", options: ["decomposition", "biodegradation", "biological magnification", "photosynthesis"], answer: 2, explanation: "Biological magnification is the increasing concentration of toxins up the chain." },
  ],
  shortQuestions: [
    { q: "What are the two main components of an ecosystem?", a: "Biotic (living) and abiotic (non-living) components." },
    { q: "Give one reason food webs make ecosystems more stable than single food chains.", a: "If one species is lost, organisms can feed on alternatives in the web, so the whole system is less likely to collapse." },
    { q: "Why should we minimise the use of non-biodegradable substances?", a: "Because they are not broken down by decomposers, they accumulate as pollution and can magnify through food chains." },
  ],
  longQuestions: [
    { q: "Explain the ten percent law of energy flow with an example.", a: "When energy passes from one trophic level to the next, only about 10% is stored as usable energy at the higher level; the remaining ~90% is used for the organism's own life processes or lost as heat. For example, if producers store 1000 J, herbivores get about 100 J, and the carnivores eating them get only about 10 J. This loss limits food chains to a few levels." },
    { q: "Why is the depletion of the ozone layer a matter of concern?", a: "The ozone layer absorbs most of the Sun's harmful ultraviolet (UV) radiation. As it is depleted by chemicals like CFCs, more UV reaches the Earth, increasing the risk of skin cancer, cataracts, weakened immunity in humans, and damage to crops and aquatic life. International agreements now limit ozone-depleting chemicals." },
  ],
  hots: [
    { q: "If all the decomposers in an ecosystem were removed, what would happen?", a: "Dead plants and animals would pile up, nutrients would not be recycled back to the soil, and producers would eventually run short of nutrients — breaking down the whole ecosystem." },
    { q: "Why is a top carnivore likely to have the highest concentration of a pesticide that entered the food chain?", a: "Through biological magnification, the pesticide becomes more concentrated at each higher trophic level, so the top carnivore, which eats many lower organisms, accumulates the most." },
  ],
  revisionNotes: [
    "Ecosystem = biotic + abiotic; producers, consumers, decomposers.",
    "Food chain → trophic levels; food web = interconnected chains.",
    "Ten percent law: ~10% energy to next level; energy flow is one-way.",
    "Ozone protects from UV; wastes are biodegradable or non-biodegradable.",
  ],
  keyTakeaways: [
    "Energy flows one way and decreases ~10× each level.",
    "Decomposers recycle nutrients and are essential.",
    "Reduce non-biodegradable waste to limit pollution and magnification.",
  ],
  faq: [
    { q: "What is the ten percent law?", a: "Only about 10% of the energy at one trophic level is passed on to the next; the rest is used or lost as heat." },
    { q: "Why is the ozone layer important?", a: "It absorbs harmful ultraviolet rays from the Sun, protecting living things from their damaging effects." },
    { q: "What is the difference between biodegradable and non-biodegradable waste?", a: "Biodegradable waste can be broken down by decomposers (like food scraps and paper); non-biodegradable waste cannot (like plastic and glass)." },
  ],
  related: [
    { classId: "10", subject: "science", slug: "life-processes" },
    { classId: "10", subject: "science", slug: "how-do-organisms-reproduce" },
  ],
};

export default chapter;
