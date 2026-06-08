import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "10",
  subject: "maths",
  slug: "surface-areas-and-volumes",
  title: "Surface Areas and Volumes",
  order: 12,
  seoTitle: "Surface Areas and Volumes Class 10 CBSE Notes, MCQs, Quiz & Formulas",
  metaDescription:
    "Class 10 Maths Surface Areas and Volumes: formulas for cylinder, cone, sphere and hemisphere, combinations of solids, solved examples, MCQ quiz with answers and important questions.",
  overview:
    "This chapter is all about the surface areas and volumes of three-dimensional solids — cylinders, cones, spheres and hemispheres — and shapes made by combining them. The main work is choosing the right formula and substituting carefully. It is formula-heavy but very scoring once the formulas are memorised.",
  objectives: [
    "Recall the surface area and volume formulas for standard solids.",
    "Compute the slant height of a cone.",
    "Find surface areas and volumes of single solids.",
    "Handle combinations of solids (e.g. a cone on a cylinder).",
    "Solve problems on melting and recasting solids.",
  ],
  concepts: [
    {
      heading: "Cylinder",
      body: "For a cylinder of radius r and height h: curved surface area = 2πrh, total surface area = 2πr(r + h), and volume = πr²h.",
    },
    {
      heading: "Cone",
      body: "For a cone of radius r, height h and slant height l = √(r² + h²): curved surface area = πrl, total surface area = πr(r + l), and volume = ⅓πr²h.",
    },
    {
      heading: "Sphere and hemisphere",
      body: "For a sphere of radius r: surface area = 4πr², volume = (4/3)πr³. For a hemisphere: curved surface area = 2πr², total surface area = 3πr², volume = (2/3)πr³.",
    },
    {
      heading: "Combinations and recasting",
      body: "For a combined solid, add the surface areas of the exposed parts (not the joined faces) and add the volumes. When one solid is melted and recast into another, the volume stays the same — equate the two volumes.",
    },
  ],
  formulas: [
    { name: "Cylinder volume", formula: "πr²h" },
    { name: "Cone CSA / volume", formula: "CSA = πrl,  V = ⅓πr²h,  l = √(r² + h²)" },
    { name: "Sphere", formula: "SA = 4πr²,  V = (4/3)πr³" },
    { name: "Hemisphere", formula: "CSA = 2πr²,  TSA = 3πr²,  V = (2/3)πr³" },
  ],
  definitions: [
    { term: "Curved surface area (CSA)", meaning: "The area of the curved (lateral) part of a solid, excluding the flat ends." },
    { term: "Total surface area (TSA)", meaning: "The total area of all surfaces of a solid, including the flat faces." },
    { term: "Slant height", meaning: "The distance from the apex of a cone to a point on the edge of its base, l = √(r² + h²)." },
  ],
  examples: [
    {
      problem: "Find the volume of a sphere of radius 3 cm. (Leave the answer in terms of π.)",
      solution: "V = (4/3)πr³ = (4/3)π(27) = 36π cm³.",
    },
    {
      problem: "Find the curved surface area of a cylinder of radius 7 cm and height 10 cm. (π = 22/7.)",
      solution: "CSA = 2πrh = 2 × (22/7) × 7 × 10 = 440 cm².",
    },
    {
      problem: "A cone has radius 6 cm and height 8 cm. Find its slant height and curved surface area (in terms of π).",
      solution:
        "l = √(6² + 8²) = √100 = 10 cm. CSA = πrl = π × 6 × 10 = 60π cm².",
    },
  ],
  commonMistakes: [
    "Confusing the cone volume (⅓πr²h) with the cylinder volume (πr²h).",
    "Forgetting to compute the slant height before finding a cone's CSA.",
    "Adding the joined faces when finding the surface area of a combined solid.",
    "Mixing up CSA and TSA for hemispheres (2πr² vs 3πr²).",
  ],
  mcqs: [
    { id: "sv1", difficulty: "easy", q: "The volume of a cylinder of radius r and height h is:", options: ["2πrh", "⅓πr²h", "πr²h", "πrl"], answer: 2, explanation: "Cylinder volume = πr²h." },
    { id: "sv2", difficulty: "easy", q: "The volume of a sphere of radius r is:", options: ["4πr²", "(4/3)πr³", "(2/3)πr³", "πr³"], answer: 1, explanation: "Sphere volume = (4/3)πr³." },
    { id: "sv3", difficulty: "easy", q: "The curved surface area of a cone is:", options: ["⅓πr²h", "2πrh", "πrl", "πr(r + l)"], answer: 2, explanation: "Cone CSA = πrl." },
    { id: "sv4", difficulty: "medium", q: "The total surface area of a hemisphere of radius r is:", options: ["2πr²", "πr²", "4πr²", "3πr²"], answer: 3, explanation: "Hemisphere TSA = 2πr² (curved) + πr² (flat) = 3πr²." },
    { id: "sv5", difficulty: "easy", q: "The slant height of a cone is:", options: ["rh", "√(r² + h²)", "r + h", "√(r² − h²)"], answer: 1, explanation: "l = √(r² + h²)." },
    { id: "sv6", difficulty: "easy", q: "The volume of a cone is:", options: ["πr²h", "⅓πr²h", "(4/3)πr³", "2πr²h"], answer: 1, explanation: "Cone volume = ⅓πr²h." },
    { id: "sv7", difficulty: "easy", q: "The surface area of a sphere of radius r is:", options: ["4πr²", "2πr²", "πr²", "3πr²"], answer: 0, explanation: "Sphere SA = 4πr²." },
    { id: "sv8", difficulty: "medium", q: "The volume of a hemisphere of radius r is:", options: ["(2/3)πr³", "(4/3)πr³", "(1/3)πr³", "πr³"], answer: 0, explanation: "Hemisphere volume = (2/3)πr³." },
    { id: "sv9", difficulty: "medium", q: "The CSA of a cylinder with r = 7 cm and h = 10 cm (π = 22/7) is:", options: ["154 cm²", "748 cm²", "220 cm²", "440 cm²"], answer: 3, explanation: "2 × (22/7) × 7 × 10 = 440 cm²." },
    { id: "sv10", difficulty: "medium", q: "The volume of a sphere of radius 3 cm (in terms of π) is:", options: ["9π cm³", "12π cm³", "27π cm³", "36π cm³"], answer: 3, explanation: "(4/3)π(27) = 36π cm³." },
  ],
  shortQuestions: [
    { q: "Write the formula for the total surface area of a cylinder.", a: "TSA = 2πr(r + h)." },
    { q: "Find the volume of a cone with r = 3 cm and h = 7 cm (π = 22/7).", a: "V = ⅓ × (22/7) × 9 × 7 = ⅓ × 198 = 66 cm³." },
    { q: "What stays constant when a solid is melted and recast?", a: "Its volume." },
  ],
  longQuestions: [
    { q: "A solid is in the shape of a cone mounted on a hemisphere, both of radius 7 cm, the cone's height being 24 cm. Find the total volume. (π = 22/7)", a: "Cone volume = ⅓πr²h = ⅓ × (22/7) × 49 × 24 = 1232 cm³. Hemisphere volume = (2/3)πr³ = (2/3) × (22/7) × 343 ≈ 718.67 cm³. Total ≈ 1232 + 718.67 = 1950.67 cm³." },
    { q: "A metallic sphere of radius 6 cm is melted and recast into a cylinder of radius 4 cm. Find the height of the cylinder.", a: "Equate volumes: (4/3)π(6³) = π(4²)h ⇒ (4/3)(216) = 16h ⇒ 288 = 16h ⇒ h = 18 cm." },
  ],
  hots: [
    { q: "How many spherical lead shots of radius 1 cm can be made from a solid cube of lead of edge 11 cm? (π = 22/7)", a: "Cube volume = 11³ = 1331 cm³. One shot = (4/3)π(1)³ = 88/21 cm³. Number = 1331 ÷ (88/21) = 1331 × 21/88 ≈ 317 shots." },
    { q: "Why do you not include the joined circular faces when finding the surface area of a cone-on-cylinder?", a: "Those faces are hidden inside the combined solid, so they are not part of its exposed (outer) surface area." },
  ],
  revisionNotes: [
    "Cylinder: CSA 2πrh, TSA 2πr(r+h), V πr²h.",
    "Cone: CSA πrl, V ⅓πr²h, l = √(r²+h²).",
    "Sphere: SA 4πr², V (4/3)πr³.",
    "Hemisphere: CSA 2πr², TSA 3πr², V (2/3)πr³.",
    "Recasting keeps volume constant.",
  ],
  keyTakeaways: [
    "Memorise the formula table — it is the whole chapter.",
    "Compute slant height first for any cone surface-area question.",
    "For combinations, add exposed surfaces only; for recasting, equate volumes.",
  ],
  faq: [
    { q: "Which solids are covered in Class 10?", a: "Cylinders, cones, spheres and hemispheres, plus solids formed by combining them." },
    { q: "What is the slant height and why do I need it?", a: "It is l = √(r² + h²); a cone's curved surface area formula πrl uses the slant height, not the vertical height." },
    { q: "How do recasting problems work?", a: "When a solid is melted and reshaped, its volume is unchanged, so you set the two volumes equal and solve for the unknown." },
  ],
  related: [
    { classId: "10", subject: "maths", slug: "areas-related-to-circles" },
  ],
};

export default chapter;
