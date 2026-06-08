import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "10",
  subject: "science",
  slug: "light-reflection-and-refraction",
  title: "Light – Reflection and Refraction",
  order: 9,
  seoTitle:
    "Light Reflection and Refraction Class 10 CBSE Notes, MCQs, Quiz & Numericals",
  metaDescription:
    "Class 10 Science Light – Reflection and Refraction: laws of reflection, spherical mirrors, mirror and lens formulas, refractive index, power of a lens, solved numericals, MCQ quiz and important questions.",
  overview:
    "This chapter explains how light behaves when it strikes mirrors (reflection) and when it crosses from one transparent medium into another (refraction). You will learn the laws of reflection and refraction, image formation by concave and convex mirrors and lenses, and the formulas that connect object distance, image distance and focal length. It is one of the most numerical-heavy and high-scoring chapters in CBSE Class 10 Science.",
  objectives: [
    "State the laws of reflection and apply the New Cartesian sign convention.",
    "Describe image formation by concave and convex mirrors.",
    "Use the mirror formula and magnification to solve numericals.",
    "Explain refraction, refractive index and the laws of refraction.",
    "Use the lens formula and calculate the power of a lens.",
  ],
  concepts: [
    {
      heading: "Laws of reflection",
      body: "The angle of incidence equals the angle of reflection, and the incident ray, the reflected ray and the normal at the point of incidence all lie in the same plane.",
    },
    {
      heading: "Spherical mirrors",
      body: "A concave mirror is converging and a convex mirror is diverging. Key terms: pole (P), centre of curvature (C), radius of curvature (R), principal focus (F) and focal length (f). For a spherical mirror, f = R/2.",
    },
    {
      heading: "Mirror formula and magnification",
      body: "The mirror formula is 1/v + 1/u = 1/f, where u is the object distance, v the image distance and f the focal length (with signs by the New Cartesian convention). Magnification m = −v/u = h'/h, where h' and h are image and object heights.",
    },
    {
      heading: "Refraction and refractive index",
      body: "Light bends when it passes between media of different optical densities. By Snell's law, sin i / sin r is a constant for a given pair of media. The refractive index of a medium is n = c/v, the ratio of the speed of light in vacuum to its speed in that medium.",
    },
    {
      heading: "Lenses and power",
      body: "A convex lens converges light and a concave lens diverges it. The lens formula is 1/v − 1/u = 1/f, with magnification m = v/u. The power of a lens is P = 1/f (f in metres), measured in dioptres (D); convex lenses have positive power, concave lenses negative.",
    },
  ],
  formulas: [
    { name: "Focal length of a mirror", formula: "f = R ÷ 2" },
    { name: "Mirror formula", formula: "1/v + 1/u = 1/f" },
    { name: "Magnification (mirror)", formula: "m = −v ÷ u = h' ÷ h" },
    { name: "Refractive index", formula: "n = c ÷ v" },
    { name: "Lens formula", formula: "1/v − 1/u = 1/f" },
    { name: "Power of a lens", formula: "P = 1 ÷ f (f in metres), unit: dioptre (D)" },
  ],
  definitions: [
    { term: "Reflection", meaning: "The bouncing back of light into the same medium after striking a surface." },
    { term: "Refraction", meaning: "The bending of light as it passes from one transparent medium into another." },
    { term: "Principal focus", meaning: "The point on the principal axis where rays parallel to the axis meet (or appear to meet) after reflection or refraction." },
    { term: "Refractive index", meaning: "The ratio of the speed of light in vacuum to its speed in a medium (n = c/v)." },
    { term: "Dioptre", meaning: "The SI unit of power of a lens; 1 D is the power of a lens of focal length 1 metre." },
  ],
  examples: [
    {
      problem: "A concave mirror has focal length 15 cm. An object is placed 30 cm in front of it. Find the image distance.",
      solution:
        "By the sign convention, u = −30 cm and f = −15 cm. Using 1/v + 1/u = 1/f: 1/v = 1/f − 1/u = (−1/15) − (−1/30) = −1/15 + 1/30 = −1/30. So v = −30 cm — a real, inverted image 30 cm in front of the mirror, the same size as the object.",
    },
    {
      problem: "The refractive index of glass is 1.5. Find the speed of light in glass. (c = 3 × 10⁸ m/s)",
      solution:
        "n = c/v, so v = c/n = (3 × 10⁸) ÷ 1.5 = 2 × 10⁸ m/s.",
    },
    {
      problem: "A convex lens has focal length 20 cm. Find its power.",
      solution:
        "Convert f to metres: f = 0.20 m. P = 1/f = 1/0.20 = +5 D. The plus sign confirms it is a converging (convex) lens.",
    },
  ],
  commonMistakes: [
    "Sign convention errors — distances are measured from the pole (mirror) or optical centre (lens), with directions taken as positive or negative consistently.",
    "Confusing the mirror formula (1/v + 1/u = 1/f) with the lens formula (1/v − 1/u = 1/f).",
    "Mixing magnifications: for mirrors m = −v/u, for lenses m = v/u.",
    "Forgetting to convert focal length to metres before finding power.",
    "Claiming a convex mirror can form a real image — it always gives a virtual, erect, diminished image.",
  ],
  mcqs: [
    { id: "lr1", difficulty: "easy", q: "For a spherical mirror, the focal length and radius of curvature are related by:", options: ["f = R/4", "f = 2R", "f = R/2", "f = R"], answer: 2, explanation: "The focal length is half the radius of curvature." },
    { id: "lr2", difficulty: "easy", q: "The mirror formula is:", options: ["1/v + 1/u = 1/f", "1/v × 1/u = 1/f", "v + u = f", "1/v − 1/u = 1/f"], answer: 0, explanation: "For mirrors, 1/v + 1/u = 1/f." },
    { id: "lr3", difficulty: "medium", q: "A convex mirror always forms an image that is:", options: ["virtual and magnified", "real, inverted and magnified", "virtual, erect and diminished", "real and the same size"], answer: 2, explanation: "A convex mirror always gives a virtual, erect, diminished image." },
    { id: "lr4", difficulty: "easy", q: "The SI unit of power of a lens is the:", options: ["watt", "newton", "dioptre", "joule"], answer: 2, explanation: "Power of a lens is measured in dioptres (D)." },
    { id: "lr5", difficulty: "medium", q: "The refractive index of a medium is given by:", options: ["c/v", "c − v", "v/c", "c × v"], answer: 0, explanation: "n = c/v, the ratio of speed of light in vacuum to that in the medium." },
    { id: "lr6", difficulty: "medium", q: "The power of a convex lens of focal length 50 cm is:", options: ["+0.5 D", "+2 D", "+50 D", "−2 D"], answer: 1, explanation: "f = 0.5 m, so P = 1/0.5 = +2 D." },
    { id: "lr7", difficulty: "easy", q: "The bending of light as it passes from one medium to another is called:", options: ["scattering", "dispersion", "reflection", "refraction"], answer: 3, explanation: "Bending at a boundary between media is refraction." },
    { id: "lr8", difficulty: "medium", q: "The focal length of a concave lens is taken as:", options: ["infinite", "zero", "negative", "positive"], answer: 2, explanation: "By convention a concave (diverging) lens has negative focal length and power." },
    { id: "lr9", difficulty: "easy", q: "The magnification produced by a mirror is:", options: ["m = v/u", "m = −v/u", "m = v × u", "m = u/v"], answer: 1, explanation: "For mirrors, m = −v/u." },
    { id: "lr10", difficulty: "hard", q: "If the refractive index of water is 1.33, the speed of light in water is about (c = 3 × 10⁸ m/s):", options: ["3 × 10⁸ m/s", "1.33 × 10⁸ m/s", "2.25 × 10⁸ m/s", "3.99 × 10⁸ m/s"], answer: 2, explanation: "v = c/n = (3 × 10⁸)/1.33 ≈ 2.25 × 10⁸ m/s." },
    { id: "bk10s10", difficulty: "medium", q: "The bending of light as it passes from one transparent medium to another is?", options: ["Reflection", "Dispersion", "Refraction", "Diffraction"], answer: 2, explanation: "Refraction is the change in direction of light between media." },
  ],
  shortQuestions: [
    { q: "State the two laws of reflection.", a: "The angle of incidence equals the angle of reflection, and the incident ray, reflected ray and normal lie in the same plane." },
    { q: "Define the power of a lens and give its unit.", a: "Power is the reciprocal of focal length in metres (P = 1/f); its unit is the dioptre (D)." },
    { q: "Why does a convex mirror always give a virtual image?", a: "Reflected rays from a convex mirror diverge, so they only appear to meet behind the mirror, producing a virtual, erect, diminished image." },
  ],
  longQuestions: [
    { q: "An object is placed 10 cm from a convex lens of focal length 15 cm. Find the image distance and state the nature of the image.", a: "u = −10 cm, f = +15 cm. Lens formula: 1/v = 1/f + 1/u = 1/15 + (−1/10) = 2/30 − 3/30 = −1/30, so v = −30 cm. The image is virtual, erect and magnified (on the same side as the object), as expected when the object is within the focal length." },
    { q: "Explain why we use a convex mirror as a rear-view mirror in vehicles.", a: "A convex mirror always gives an erect, diminished image and has a wider field of view than a plane mirror, letting the driver see a larger area of traffic behind in a small mirror." },
  ],
  hots: [
    { q: "A concave mirror produces a three-times magnified real image of an object placed 10 cm in front of it. Where is the image?", a: "For a real image, magnification m = −3, and m = −v/u with u = −10 cm. So −3 = −v/(−10) ⇒ v = −30 cm. The image is 30 cm in front of the mirror (real and inverted)." },
    { q: "The refractive index of medium A with respect to B is 1.5. What is the refractive index of B with respect to A?", a: "They are reciprocals: n(B with respect to A) = 1 ÷ 1.5 = 0.67 (approximately 2/3)." },
  ],
  revisionNotes: [
    "Laws of reflection: angle i = angle r; rays and normal are coplanar.",
    "Spherical mirror: f = R/2.",
    "Mirror formula 1/v + 1/u = 1/f; magnification m = −v/u.",
    "Refractive index n = c/v; Snell's law: sin i / sin r is constant.",
    "Lens formula 1/v − 1/u = 1/f; power P = 1/f (metres), in dioptres.",
  ],
  keyTakeaways: [
    "Apply the sign convention carefully and consistently — most numerical errors come from signs.",
    "Remember which formula belongs to mirrors (+) and which to lenses (−).",
    "Convex lens ⇒ positive power; concave lens ⇒ negative power.",
  ],
  faq: [
    { q: "Is Light – Reflection and Refraction important for Class 10 boards?", a: "Yes. It is numerical-heavy and high-scoring, and ray diagrams plus mirror and lens numericals appear regularly." },
    { q: "What is the difference between the mirror and lens formulas?", a: "The mirror formula is 1/v + 1/u = 1/f and the lens formula is 1/v − 1/u = 1/f — note the plus versus minus sign." },
    { q: "How do I avoid sign mistakes in numericals?", a: "Use the New Cartesian sign convention consistently: measure all distances from the pole or optical centre and assign signs by direction before substituting." },
  ],
  related: [],
};

export default chapter;
