import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "9",
  subject: "science",
  slug: "gravitation",
  title: "Gravitation",
  order: 9,
  seoTitle: "Gravitation Class 9 CBSE Notes, MCQs, Quiz & Universal Law",
  metaDescription:
    "Class 9 Science Gravitation: universal law of gravitation, acceleration due to gravity, mass versus weight, free fall, thrust and pressure, buoyancy, Archimedes' principle and relative density, solved numericals and MCQ quiz.",
  overview:
    "Gravitation is the force of attraction between any two masses, and it keeps us on the Earth and the Moon in orbit. This Class 9 chapter covers the universal law of gravitation, acceleration due to gravity, the difference between mass and weight, and then moves to thrust, pressure, buoyancy, Archimedes' principle and relative density — explaining why objects float or sink.",
  objectives: [
    "State the universal law of gravitation.",
    "Distinguish mass from weight and explain free fall.",
    "Define thrust and pressure and use P = F/A.",
    "Explain buoyancy and Archimedes' principle.",
    "Define and calculate relative density.",
  ],
  concepts: [
    {
      heading: "Universal law of gravitation",
      body: "Every object attracts every other object with a force directly proportional to the product of their masses and inversely proportional to the square of the distance between them: F = G·m₁·m₂/r², where G is the universal gravitational constant.",
    },
    {
      heading: "Mass, weight and free fall",
      body: "Mass is the amount of matter in a body (constant everywhere); weight is the force of gravity on it, W = mg, which varies with g. Near the Earth's surface g ≈ 9.8 m/s². An object falling only under gravity is in free fall.",
    },
    {
      heading: "Thrust and pressure",
      body: "Thrust is the force acting perpendicular to a surface; pressure is thrust per unit area, P = F/A, measured in pascals (Pa). The same force gives more pressure on a smaller area, which is why sharp tools cut better.",
    },
    {
      heading: "Buoyancy, Archimedes' principle and relative density",
      body: "Buoyancy is the upward force exerted by a fluid on an object in it. Archimedes' principle states that this upthrust equals the weight of fluid displaced. Relative density is the ratio of a substance's density to that of water; objects with relative density less than 1 float.",
    },
  ],
  formulas: [
    { name: "Universal law", formula: "F = G·m₁·m₂ ÷ r²" },
    { name: "Weight", formula: "W = mg  (g ≈ 9.8 m/s²)" },
    { name: "Pressure", formula: "P = F ÷ A  (pascal)" },
    { name: "Relative density", formula: "= density of substance ÷ density of water" },
  ],
  definitions: [
    { term: "Gravitation", meaning: "The force of attraction between any two objects having mass." },
    { term: "Weight", meaning: "The force with which gravity pulls a body, W = mg." },
    { term: "Pressure", meaning: "The thrust (force) acting per unit area on a surface." },
    { term: "Buoyancy", meaning: "The upward force exerted by a fluid on an object placed in it." },
  ],
  examples: [
    {
      problem: "Find the weight of a 10 kg object on Earth. (g = 9.8 m/s².)",
      solution: "W = mg = 10 × 9.8 = 98 N.",
    },
    {
      problem: "A force of 100 N acts on an area of 2 m². Find the pressure.",
      solution: "P = F/A = 100/2 = 50 Pa.",
    },
    {
      problem: "Why does an iron nail sink but a ship made of iron floats?",
      solution:
        "The nail's relative density is greater than 1, so it sinks. A ship is hollow with a large volume, so it displaces enough water for the upthrust to balance its weight, making it float (relative density of the whole ship is less than 1).",
    },
  ],
  commonMistakes: [
    "Treating mass and weight as the same — weight changes with g, mass does not.",
    "Forgetting the inverse-square (1/r²) in the law of gravitation.",
    "Confusing thrust (force) with pressure (force per area).",
    "Thinking heavy objects always sink — floating depends on relative density.",
  ],
  mcqs: [
    { id: "gr1", difficulty: "easy", q: "The force of attraction between any two masses is:", options: ["tension", "magnetism", "gravitation", "friction"], answer: 2, explanation: "It is the gravitational force." },
    { id: "gr2", difficulty: "medium", q: "In F = Gm₁m₂/r², the force is inversely proportional to:", options: ["r²", "m₁", "G", "r"], answer: 0, explanation: "It varies inversely with the square of the distance." },
    { id: "gr3", difficulty: "easy", q: "The weight of a body is given by:", options: ["g/m", "ma only", "m/g", "mg"], answer: 3, explanation: "W = mg." },
    { id: "gr4", difficulty: "medium", q: "The value of g near the Earth's surface is about:", options: ["9.8 m/s²", "1.8 m/s²", "10.8 m/s²", "8.9 m/s²"], answer: 0, explanation: "g ≈ 9.8 m/s²." },
    { id: "gr5", difficulty: "easy", q: "Pressure is defined as:", options: ["force × area", "mass × g", "area ÷ force", "force ÷ area"], answer: 3, explanation: "P = F/A." },
    { id: "gr6", difficulty: "medium", q: "The SI unit of pressure is the:", options: ["newton", "pascal", "joule", "watt"], answer: 1, explanation: "Pressure is measured in pascals (Pa)." },
    { id: "gr7", difficulty: "medium", q: "Archimedes' principle relates to the:", options: ["weight of fluid displaced", "mass of the object", "force of friction", "volume of air"], answer: 0, explanation: "Upthrust equals the weight of fluid displaced." },
    { id: "gr8", difficulty: "easy", q: "An object floats if its relative density is:", options: ["equal to 1 only", "exactly 2", "greater than 1", "less than 1"], answer: 3, explanation: "Relative density below 1 means it floats." },
    { id: "gr9", difficulty: "medium", q: "The weight of a 10 kg mass (g = 9.8) is:", options: ["100 N", "10 N", "98 N", "9.8 N"], answer: 2, explanation: "W = 10 × 9.8 = 98 N." },
    { id: "gr10", difficulty: "hard", q: "A force of 50 N on an area of 0.5 m² produces a pressure of:", options: ["0.01 Pa", "100 Pa", "50 Pa", "25 Pa"], answer: 1, explanation: "P = 50 / 0.5 = 100 Pa." },
    { id: "bk9s13", difficulty: "medium", q: "The force of attraction between any two objects with mass is called?", options: ["Gravitation", "Friction", "Magnetism", "Tension"], answer: 0, explanation: "Gravitation is the universal force of attraction between masses." },
  ],
  shortQuestions: [
    { q: "What is the difference between mass and weight?", a: "Mass is the amount of matter (constant); weight is the gravitational force on it (W = mg), which varies with g." },
    { q: "State Archimedes' principle.", a: "A body immersed in a fluid experiences an upward thrust equal to the weight of the fluid it displaces." },
    { q: "Why do school bags have wide straps?", a: "Wide straps spread the force over a larger area, reducing the pressure on the shoulders." },
  ],
  longQuestions: [
    { q: "State the universal law of gravitation and define the gravitational constant G.", a: "Every object attracts every other object with a force F = Gm₁m₂/r², directly proportional to the product of their masses and inversely proportional to the square of the distance between them. G is the universal gravitational constant — the force between two unit masses placed one unit distance apart — with value about 6.67 × 10⁻¹¹ N·m²/kg²." },
    { q: "Explain why an object weighs less on the Moon than on the Earth.", a: "Weight is W = mg, and g on the Moon is about one-sixth of that on the Earth because the Moon has much less mass and a smaller radius. The object's mass stays the same, but since g is smaller, its weight on the Moon is about one-sixth of its weight on the Earth." },
  ],
  hots: [
    { q: "Why is it easier to swim in sea water than in river water?", a: "Sea water is denser, so it exerts a greater upthrust (buoyant force) on the swimmer for the same volume displaced, making it easier to stay afloat." },
    { q: "A camel walks easily on sand but a man in shoes sinks. Why?", a: "The camel's broad feet spread its weight over a larger area, lowering the pressure on the sand, whereas narrow shoes concentrate the force over a small area, increasing pressure and causing sinking." },
  ],
  revisionNotes: [
    "Universal law: F = Gm₁m₂/r² (inverse-square).",
    "Mass is constant; weight W = mg varies with g (≈ 9.8 m/s²).",
    "Pressure P = F/A (pascal); thrust is the perpendicular force.",
    "Archimedes: upthrust = weight of fluid displaced; RD < 1 floats.",
  ],
  keyTakeaways: [
    "Don't confuse mass and weight.",
    "Smaller area → higher pressure for the same force.",
    "Floating depends on relative density, not just heaviness.",
  ],
  faq: [
    { q: "What is the universal law of gravitation?", a: "Every mass attracts every other mass with a force proportional to the product of the masses and inversely proportional to the square of the distance between them." },
    { q: "What is the difference between mass and weight?", a: "Mass is the quantity of matter (same everywhere); weight is the gravitational force on it (W = mg) and changes with location." },
    { q: "What does Archimedes' principle state?", a: "An object in a fluid is pushed up by a force equal to the weight of the fluid it displaces." },
  ],
  related: [
    { classId: "9", subject: "science", slug: "force-and-laws-of-motion" },
    { classId: "9", subject: "science", slug: "work-and-energy" },
  ],
};

export default chapter;
