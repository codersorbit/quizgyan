import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "9",
  subject: "maths",
  slug: "surface-areas-and-volumes",
  title: "Surface Areas and Volumes",
  order: 11,
  seoTitle: "Surface Areas and Volumes Class 9 CBSE Notes, MCQs, Quiz & Formulas",
  metaDescription:
    "Class 9 Maths Surface Areas and Volumes: cuboid, cube, cylinder, cone, sphere and hemisphere formulas, solved examples and MCQ quiz with answers and important questions.",
  overview:
    "This Class 9 chapter gives the surface area and volume formulas for the common solids — the cuboid, cube, cylinder, cone, sphere and hemisphere. The work is mostly choosing the right formula and substituting carefully. It is formula-heavy but highly scoring, and it sets up the combination-of-solids problems of Class 10.",
  objectives: [
    "Recall surface area and volume formulas for standard solids.",
    "Find the surface area and volume of a cuboid and a cube.",
    "Find the curved/total surface area and volume of a cylinder and a cone.",
    "Find the surface area and volume of a sphere and a hemisphere.",
    "Apply the formulas to word problems.",
  ],
  concepts: [
    {
      heading: "Cuboid and cube",
      body: "For a cuboid with length l, breadth b and height h: total surface area = 2(lb + bh + hl) and volume = l × b × h. A cube of side a is a special cuboid: surface area = 6a², volume = a³.",
    },
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
  ],
  formulas: [
    { name: "Cuboid", formula: "TSA = 2(lb + bh + hl),  V = lbh" },
    { name: "Cube", formula: "TSA = 6a²,  V = a³" },
    { name: "Cylinder", formula: "CSA = 2πrh,  TSA = 2πr(r + h),  V = πr²h" },
    { name: "Cone", formula: "CSA = πrl,  V = ⅓πr²h,  l = √(r² + h²)" },
    { name: "Sphere / hemisphere", formula: "Sphere: 4πr², (4/3)πr³ ;  Hemisphere: 3πr², (2/3)πr³" },
  ],
  definitions: [
    { term: "Surface area", meaning: "The total area of the outer surfaces of a solid." },
    { term: "Volume", meaning: "The amount of space occupied by a solid." },
    { term: "Slant height", meaning: "The distance from the apex of a cone to the edge of its base, l = √(r² + h²)." },
    { term: "Cuboid", meaning: "A box-shaped solid with six rectangular faces." },
  ],
  examples: [
    {
      problem: "Find the volume of a cube of side 4 cm.",
      solution: "Volume = a³ = 4³ = 64 cm³.",
    },
    {
      problem: "Find the volume of a cuboid measuring 5 cm × 4 cm × 3 cm.",
      solution: "Volume = l × b × h = 5 × 4 × 3 = 60 cm³.",
    },
    {
      problem: "Find the surface area of a sphere of radius 7 cm. (π = 22/7.)",
      solution: "Surface area = 4πr² = 4 × (22/7) × 49 = 616 cm².",
    },
  ],
  commonMistakes: [
    "Confusing total surface area with curved surface area.",
    "Using the diameter in place of the radius.",
    "Forgetting to find the slant height before a cone's CSA.",
    "Mixing up the sphere (4/3 πr³) and hemisphere (2/3 πr³) volumes.",
  ],
  mcqs: [
    { id: "sv1", difficulty: "easy", q: "The volume of a cube of side a is:", options: ["6a²", "a²", "a³", "3a"], answer: 2, explanation: "Cube volume = a³." },
    { id: "sv2", difficulty: "easy", q: "The total surface area of a cuboid is:", options: ["lbh", "2(lb + bh + hl)", "6a²", "2πr(r + h)"], answer: 1, explanation: "TSA of a cuboid = 2(lb + bh + hl)." },
    { id: "sv3", difficulty: "easy", q: "The curved surface area of a cylinder is:", options: ["πrl", "2πr(r + h)", "2πrh", "πr²h"], answer: 2, explanation: "Cylinder CSA = 2πrh." },
    { id: "sv4", difficulty: "medium", q: "The volume of a sphere of radius r is:", options: ["4πr²", "πr³", "(2/3)πr³", "(4/3)πr³"], answer: 3, explanation: "Sphere volume = (4/3)πr³." },
    { id: "sv5", difficulty: "easy", q: "The slant height of a cone is:", options: ["rh", "√(r² + h²)", "r + h", "√(r² − h²)"], answer: 1, explanation: "l = √(r² + h²)." },
    { id: "sv6", difficulty: "medium", q: "The total surface area of a cube of side 3 cm is:", options: ["27 cm²", "54 cm²", "36 cm²", "18 cm²"], answer: 1, explanation: "6a² = 6 × 9 = 54 cm²." },
    { id: "sv7", difficulty: "easy", q: "The volume of a cylinder is:", options: ["2πrh", "πr²h", "πrl", "(1/3)πr²h"], answer: 1, explanation: "Cylinder volume = πr²h." },
    { id: "sv8", difficulty: "medium", q: "The total surface area of a hemisphere of radius r is:", options: ["3πr²", "2πr²", "πr²", "4πr²"], answer: 0, explanation: "Hemisphere TSA = 3πr²." },
    { id: "sv9", difficulty: "medium", q: "The volume of a cuboid 6 × 5 × 2 is:", options: ["26", "30", "13", "60"], answer: 3, explanation: "6 × 5 × 2 = 60 cubic units." },
    { id: "sv10", difficulty: "hard", q: "The curved surface area of a cone with r = 3 cm and l = 5 cm (π = 22/7) is about:", options: ["33 cm²", "15 cm²", "94.3 cm²", "47.1 cm²"], answer: 3, explanation: "πrl = (22/7) × 3 × 5 ≈ 47.14 cm²." },
    { id: "bk9m10", difficulty: "medium", q: "The total surface area of a cube of edge 4 cm is?", options: ["64 cm²", "16 cm²", "96 cm²", "48 cm²"], answer: 2, explanation: "TSA = 6 × edge² = 6 × 16 = 96 cm²." },
    { id: "bk9m11", difficulty: "medium", q: "The volume of a cube of edge 5 cm is?", options: ["25 cm³", "75 cm³", "100 cm³", "125 cm³"], answer: 3, explanation: "Volume = edge³ = 5³ = 125 cm³." },
    { id: "bk9m12", difficulty: "hard", q: "The volume of a sphere of radius r is?", options: ["(4/3)πr³", "πr²", "2πr", "(1/3)πr²h"], answer: 0, explanation: "The volume of a sphere is (4/3)πr³." },
  ],
  shortQuestions: [
    { q: "Write the volume formula of a cone.", a: "V = ⅓πr²h." },
    { q: "Find the surface area of a cube of side 5 cm.", a: "6 × 5² = 150 cm²." },
    { q: "What is the total surface area of a cylinder?", a: "2πr(r + h)." },
  ],
  longQuestions: [
    { q: "A closed cylindrical tank has radius 7 m and height 10 m. Find its total surface area. (π = 22/7)", a: "TSA = 2πr(r + h) = 2 × (22/7) × 7 × (7 + 10) = 2 × 22 × 17 = 748 m²." },
    { q: "Find the volume and surface area of a sphere of radius 3 cm (leave answers in terms of π).", a: "Volume = (4/3)π(3)³ = (4/3)π × 27 = 36π cm³. Surface area = 4π(3)² = 36π cm²." },
  ],
  hots: [
    { q: "A solid cube of side 6 cm is cut into smaller cubes of side 2 cm. How many small cubes are formed?", a: "Number = (6/2)³ = 3³ = 27 small cubes (volume 216 ÷ 8 = 27)." },
    { q: "If the radius of a sphere is doubled, how does its volume change?", a: "Volume depends on r³, so doubling the radius multiplies the volume by 2³ = 8 times." },
  ],
  revisionNotes: [
    "Cuboid: TSA 2(lb+bh+hl), V lbh; Cube: 6a², a³.",
    "Cylinder: CSA 2πrh, TSA 2πr(r+h), V πr²h.",
    "Cone: CSA πrl, V ⅓πr²h, l = √(r²+h²).",
    "Sphere: 4πr², (4/3)πr³; Hemisphere: 3πr², (2/3)πr³.",
  ],
  keyTakeaways: [
    "Keep the formula table at your fingertips.",
    "Find the slant height first for cone surface areas.",
    "Always substitute the radius, not the diameter.",
  ],
  faq: [
    { q: "What solids are covered in Class 9?", a: "Cuboid, cube, cylinder, cone, sphere and hemisphere." },
    { q: "What is the difference between CSA and TSA?", a: "CSA (curved surface area) excludes the flat faces; TSA (total surface area) includes them." },
    { q: "How is the slant height of a cone found?", a: "Using l = √(r² + h²), from the radius and the vertical height." },
  ],
  related: [
    { classId: "9", subject: "maths", slug: "herons-formula" },
    { classId: "9", subject: "maths", slug: "statistics" },
  ],
};

export default chapter;
