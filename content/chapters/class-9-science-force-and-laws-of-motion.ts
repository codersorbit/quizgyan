import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "9",
  subject: "science",
  slug: "force-and-laws-of-motion",
  title: "Force and Laws of Motion",
  order: 8,
  seoTitle: "Force and Laws of Motion Class 9 CBSE Notes, MCQs & Newton's Laws",
  metaDescription:
    "Class 9 Science Force and Laws of Motion: balanced and unbalanced forces, Newton's three laws of motion, inertia and mass, momentum, F = ma and conservation of momentum, solved numericals and MCQ quiz.",
  overview:
    "A force is a push or a pull that can change the state of motion of an object. This Class 9 chapter explains balanced and unbalanced forces, Newton's three laws of motion, the ideas of inertia and momentum, the relation F = ma, and the law of conservation of momentum. It connects directly to the equations of motion you learned in the previous chapter.",
  objectives: [
    "Distinguish balanced and unbalanced forces.",
    "State Newton's three laws of motion.",
    "Relate inertia to mass.",
    "Define momentum and apply F = ma.",
    "State and apply the law of conservation of momentum.",
  ],
  concepts: [
    {
      heading: "Forces and inertia",
      body: "Balanced forces cancel out and cause no change in motion; unbalanced forces change an object's speed or direction. Inertia is the tendency of an object to resist a change in its state of rest or motion, and it increases with mass.",
    },
    {
      heading: "Newton's first law",
      body: "An object stays at rest or in uniform motion in a straight line unless acted on by an unbalanced force. This is the law of inertia, which is why we lurch forward when a moving bus stops suddenly.",
    },
    {
      heading: "Newton's second law",
      body: "The rate of change of momentum is proportional to the applied force and acts in its direction. This gives the relation F = ma, where momentum p = mv. The SI unit of force is the newton (N).",
    },
    {
      heading: "Newton's third law and conservation of momentum",
      body: "For every action there is an equal and opposite reaction. In the absence of external forces, the total momentum of a system is conserved, which explains the recoil of a gun and rocket propulsion.",
    },
  ],
  formulas: [
    { name: "Force", formula: "F = ma" },
    { name: "Momentum", formula: "p = mv" },
    { name: "Newton's second law", formula: "F = (mv − mu) ÷ t = rate of change of momentum" },
    { name: "Conservation of momentum", formula: "m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂" },
  ],
  definitions: [
    { term: "Force", meaning: "A push or pull that can change the state of motion or shape of a body." },
    { term: "Inertia", meaning: "The tendency of a body to resist a change in its state of rest or motion." },
    { term: "Momentum", meaning: "The product of an object's mass and velocity (p = mv)." },
    { term: "Newton (N)", meaning: "The SI unit of force; 1 N accelerates a 1 kg mass at 1 m/s²." },
  ],
  examples: [
    {
      problem: "A force of 20 N acts on a mass of 4 kg. Find the acceleration.",
      solution: "Using F = ma: a = F/m = 20/4 = 5 m/s².",
    },
    {
      problem: "Find the momentum of a 2 kg ball moving at 3 m/s.",
      solution: "p = mv = 2 × 3 = 6 kg·m/s.",
    },
    {
      problem: "Why do passengers fall backward when a bus suddenly starts?",
      solution:
        "By inertia of rest, the lower body moves with the bus while the upper body tends to stay at rest, so passengers fall backward.",
    },
  ],
  commonMistakes: [
    "Thinking a moving object needs a continuous force to keep moving (it does not, without friction).",
    "Confusing mass (amount of matter) with inertia's cause and weight.",
    "Treating action and reaction as acting on the same body — they act on different bodies.",
    "Forgetting units: force in N, momentum in kg·m/s.",
  ],
  mcqs: [
    { id: "fm1", difficulty: "easy", q: "The tendency of a body to resist change in its motion is:", options: ["momentum", "acceleration", "inertia", "force"], answer: 2, explanation: "This tendency is inertia." },
    { id: "fm2", difficulty: "easy", q: "The SI unit of force is the:", options: ["newton", "pascal", "watt", "joule"], answer: 0, explanation: "Force is measured in newtons (N)." },
    { id: "fm3", difficulty: "medium", q: "Newton's second law gives the relation:", options: ["F = ma", "F = m/a", "F = mv", "p = mv"], answer: 0, explanation: "F = ma comes from the second law." },
    { id: "fm4", difficulty: "medium", q: "A 20 N force on a 4 kg mass gives an acceleration of:", options: ["80 m/s²", "5 m/s²", "0.2 m/s²", "16 m/s²"], answer: 1, explanation: "a = F/m = 20/4 = 5 m/s²." },
    { id: "fm5", difficulty: "easy", q: "Momentum is the product of mass and:", options: ["force", "acceleration", "velocity", "time"], answer: 2, explanation: "p = mv." },
    { id: "fm6", difficulty: "medium", q: "'For every action there is an equal and opposite reaction' is Newton's:", options: ["first law", "law of gravitation", "third law", "second law"], answer: 2, explanation: "This is the third law." },
    { id: "fm7", difficulty: "easy", q: "Inertia of a body depends on its:", options: ["colour", "mass", "shape", "speed"], answer: 1, explanation: "Greater mass means greater inertia." },
    { id: "fm8", difficulty: "medium", q: "The recoil of a gun is explained by:", options: ["friction", "conservation of momentum", "inertia of motion", "the first law"], answer: 1, explanation: "Total momentum is conserved, so the gun recoils." },
    { id: "fm9", difficulty: "easy", q: "Forces that cancel each other are called:", options: ["applied forces", "balanced forces", "net forces", "unbalanced forces"], answer: 1, explanation: "Equal and opposite forces are balanced." },
    { id: "fm10", difficulty: "hard", q: "The momentum of a 5 kg object moving at 4 m/s is:", options: ["20 kg·m/s", "10 kg·m/s", "1.25 kg·m/s", "9 kg·m/s"], answer: 0, explanation: "p = mv = 5 × 4 = 20 kg·m/s." },
    { id: "bk9s11", difficulty: "medium", q: "Newton's first law of motion is also known as the law of?", options: ["Gravitation", "Action and reaction", "Inertia", "Acceleration"], answer: 2, explanation: "The first law is the law of inertia." },
    { id: "bk9s12", difficulty: "hard", q: "According to Newton's second law, force equals mass times?", options: ["Velocity", "Distance", "Time", "Acceleration"], answer: 3, explanation: "F = m × a (force = mass × acceleration)." },
  ],
  shortQuestions: [
    { q: "State Newton's first law of motion.", a: "A body remains at rest or in uniform motion unless acted on by an unbalanced external force." },
    { q: "Why are seat belts important in cars?", a: "They prevent the body's inertia from throwing it forward during a sudden stop, reducing injury." },
    { q: "Define one newton.", a: "The force that gives a 1 kg mass an acceleration of 1 m/s²." },
  ],
  longQuestions: [
    { q: "State and explain the law of conservation of momentum with an example.", a: "When no external force acts on a system, its total momentum stays constant. For two colliding bodies: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂. Example: when a bullet is fired, the forward momentum of the bullet equals the backward momentum of the gun, so the gun recoils — the total momentum before and after firing is zero." },
    { q: "Derive F = ma from Newton's second law.", a: "Momentum p = mv. The second law says force equals the rate of change of momentum: F = (mv − mu)/t = m(v − u)/t. Since acceleration a = (v − u)/t, we get F = ma." },
  ],
  hots: [
    { q: "A karate player breaks a slab with a fast blow. Use momentum to explain why speed matters.", a: "A very short contact time means a large rate of change of momentum, producing a large force on the slab (F = change in momentum ÷ time); the high speed of the hand maximises this force." },
    { q: "Why is it easier to stop a tennis ball than a cricket ball moving at the same speed?", a: "The cricket ball has more mass and hence more momentum, so a larger force (or more time) is needed to stop it compared to the lighter tennis ball." },
  ],
  revisionNotes: [
    "Balanced forces: no change; unbalanced forces: change motion.",
    "First law = inertia; inertia increases with mass.",
    "Second law: F = ma, momentum p = mv.",
    "Third law: equal and opposite reactions; momentum is conserved.",
  ],
  keyTakeaways: [
    "Action and reaction act on different bodies.",
    "F = ma links force, mass and acceleration.",
    "Conservation of momentum explains recoil and propulsion.",
  ],
  faq: [
    { q: "What is inertia?", a: "The natural tendency of a body to resist any change in its state of rest or uniform motion; it increases with mass." },
    { q: "What is Newton's second law?", a: "The rate of change of momentum is proportional to the applied force, giving the relation F = ma." },
    { q: "What does the law of conservation of momentum state?", a: "In the absence of external forces, the total momentum of a system remains constant." },
  ],
  related: [
    { classId: "9", subject: "science", slug: "motion" },
    { classId: "9", subject: "science", slug: "gravitation" },
  ],
};

export default chapter;
