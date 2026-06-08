import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "9",
  subject: "science",
  slug: "matter-in-our-surroundings",
  title: "Matter in Our Surroundings",
  order: 1,
  seoTitle: "Matter in Our Surroundings Class 9 CBSE Notes, MCQs & Quiz",
  metaDescription:
    "Class 9 Science Matter in Our Surroundings: particle nature of matter, states of matter, change of state, melting and boiling points, latent heat, evaporation and cooling, MCQ quiz and important questions.",
  overview:
    "Everything around us that has mass and takes up space is matter. This opening Class 9 chapter explains the particle nature of matter, the three common states (solid, liquid, gas), how matter changes from one state to another, and ideas like latent heat and evaporation. It builds the foundation for all of Class 9 Chemistry.",
  objectives: [
    "State the characteristics of the particles of matter.",
    "Compare the properties of solids, liquids and gases.",
    "Explain change of state and the role of temperature and pressure.",
    "Define melting point, boiling point and latent heat.",
    "Explain evaporation and why it causes cooling.",
  ],
  concepts: [
    {
      heading: "Particle nature of matter",
      body: "Matter is made of tiny particles that are very small, have spaces between them, are continuously moving, and attract one another. The strength of these forces of attraction differs between solids, liquids and gases.",
    },
    {
      heading: "States of matter",
      body: "Solids have a fixed shape and volume (strong forces, closely packed particles). Liquids have a fixed volume but take the shape of their container. Gases have neither fixed shape nor volume and are highly compressible (weak forces, particles far apart).",
    },
    {
      heading: "Change of state",
      body: "Matter changes state on heating or cooling. Melting (solid→liquid) occurs at the melting point, boiling (liquid→gas) at the boiling point; the reverse changes are freezing and condensation. Sublimation is the direct change between solid and gas.",
    },
    {
      heading: "Latent heat and evaporation",
      body: "Latent heat is the heat absorbed or released during a change of state at constant temperature. Evaporation is the slow change of a liquid to vapour at any temperature from its surface; it absorbs heat and so produces a cooling effect.",
    },
  ],
  formulas: [
    { name: "Temperature conversion", formula: "K = °C + 273" },
    { name: "Common reference", formula: "0 °C = 273 K, 100 °C = 373 K" },
  ],
  definitions: [
    { term: "Matter", meaning: "Anything that has mass and occupies space." },
    { term: "Latent heat", meaning: "The heat absorbed or released during a change of state at constant temperature." },
    { term: "Sublimation", meaning: "The direct change of a solid into a gas without becoming a liquid." },
    { term: "Evaporation", meaning: "The change of a liquid into vapour at any temperature from its surface." },
  ],
  examples: [
    {
      problem: "Why does evaporation cause cooling?",
      solution:
        "During evaporation, the fastest particles escape from the liquid surface, taking energy with them. To do so they absorb heat from the surroundings (and the liquid), lowering the temperature — which we feel as cooling.",
    },
    {
      problem: "Convert 25 °C into kelvin.",
      solution: "K = °C + 273 = 25 + 273 = 298 K.",
    },
    {
      problem: "Why do we feel cooler under a fan after sweating?",
      solution:
        "The moving air increases the rate of evaporation of sweat, which absorbs more heat from our body, giving a stronger cooling effect.",
    },
  ],
  commonMistakes: [
    "Saying gases have a fixed volume — they do not.",
    "Confusing evaporation (surface, any temperature) with boiling (throughout, at boiling point).",
    "Forgetting that temperature stays constant during a change of state.",
    "Adding the wrong constant in °C to K conversion (it is +273).",
  ],
  mcqs: [
    { id: "ms1", difficulty: "easy", q: "Matter is anything that has mass and:", options: ["colour", "is visible", "occupies space", "is solid"], answer: 2, explanation: "Matter has mass and occupies space." },
    { id: "ms2", difficulty: "easy", q: "Which state has a fixed shape and volume?", options: ["plasma", "gas", "liquid", "solid"], answer: 3, explanation: "Solids have a fixed shape and volume." },
    { id: "ms3", difficulty: "medium", q: "The direct change of a solid into a gas is called:", options: ["condensation", "boiling", "melting", "sublimation"], answer: 3, explanation: "Solid to gas directly is sublimation." },
    { id: "ms4", difficulty: "medium", q: "During a change of state, the temperature:", options: ["decreases", "increases", "stays constant", "becomes zero"], answer: 2, explanation: "Temperature is constant during a state change (latent heat)." },
    { id: "ms5", difficulty: "easy", q: "Evaporation causes:", options: ["heating", "cooling", "freezing", "no change"], answer: 1, explanation: "Evaporation absorbs heat, producing a cooling effect." },
    { id: "ms6", difficulty: "easy", q: "Which state is the most compressible?", options: ["all equal", "gas", "solid", "liquid"], answer: 1, explanation: "Gases are highly compressible due to large spaces between particles." },
    { id: "ms7", difficulty: "medium", q: "25 °C equals how many kelvin?", options: ["273 K", "248 K", "298 K", "300 K"], answer: 2, explanation: "25 + 273 = 298 K." },
    { id: "ms8", difficulty: "easy", q: "The heat absorbed during melting at constant temperature is the:", options: ["latent heat of fusion", "calorific value", "specific heat", "latent heat of vaporisation"], answer: 0, explanation: "It is the latent heat of fusion." },
    { id: "ms9", difficulty: "medium", q: "Liquids have:", options: ["no fixed shape, fixed volume", "neither fixed", "fixed shape, fixed volume", "fixed shape, no fixed volume"], answer: 0, explanation: "Liquids take the container's shape but keep a fixed volume." },
    { id: "ms10", difficulty: "hard", q: "Steam causes more severe burns than boiling water because steam:", options: ["moves faster", "is a gas", "carries extra latent heat of vaporisation", "is hotter"], answer: 2, explanation: "Steam releases additional latent heat of vaporisation on condensing on the skin." },
    { id: "bk9s0", difficulty: "easy", q: "Matter is anything that has mass and occupies?", options: ["Colour", "Charge", "Sound", "Space"], answer: 3, explanation: "Matter has mass and takes up space (volume)." },
    { id: "bk9s1", difficulty: "medium", q: "The change of a solid directly into a gas, without becoming a liquid, is called?", options: ["Sublimation", "Evaporation", "Condensation", "Melting"], answer: 0, explanation: "Sublimation is the direct change from solid to gas." },
  ],
  shortQuestions: [
    { q: "Name the change of state from gas to liquid.", a: "Condensation." },
    { q: "Why do gases fill any container completely?", a: "Their particles move freely and are far apart, so they spread to occupy all the available space." },
    { q: "Convert 100 °C to kelvin.", a: "100 + 273 = 373 K." },
  ],
  longQuestions: [
    { q: "List the characteristics of the particles of matter.", a: "The particles of matter are extremely small; they have spaces (intermolecular spaces) between them; they are continuously moving (they possess kinetic energy); and they attract one another with intermolecular forces whose strength varies among solids, liquids and gases." },
    { q: "Explain the factors that affect the rate of evaporation.", a: "Evaporation increases with a larger surface area, a higher temperature, lower humidity, and faster wind speed. More surface and heat give more particles enough energy to escape, while drier, windier air carries the vapour away quickly." },
  ],
  hots: [
    { q: "Why does a desert cooler cool better on a hot, dry day?", a: "Higher temperature and low humidity speed up the evaporation of water in the cooler, and faster evaporation absorbs more heat, giving better cooling." },
    { q: "Why does the temperature of ice not rise while it is melting?", a: "The heat supplied is used as latent heat to break the forces holding the solid together, not to raise temperature, so the temperature stays constant until all the ice has melted." },
  ],
  revisionNotes: [
    "Particles: small, spaced, moving, attracting.",
    "Solid (fixed shape/volume), liquid (fixed volume), gas (neither).",
    "State changes: melting, boiling, freezing, condensation, sublimation.",
    "Latent heat at constant temperature; evaporation cools.",
  ],
  keyTakeaways: [
    "Forces of attraction explain the differences between states.",
    "Temperature is constant during a change of state.",
    "Evaporation absorbs heat and produces cooling.",
  ],
  faq: [
    { q: "What is the difference between evaporation and boiling?", a: "Evaporation happens slowly at the surface at any temperature; boiling happens throughout the liquid at its boiling point." },
    { q: "What is latent heat?", a: "The heat absorbed or released during a change of state without any change in temperature." },
    { q: "How do I convert Celsius to kelvin?", a: "Add 273 to the Celsius value: K = °C + 273." },
  ],
  related: [
    { classId: "9", subject: "science", slug: "is-matter-around-us-pure" },
    { classId: "9", subject: "science", slug: "atoms-and-molecules" },
  ],
};

export default chapter;
