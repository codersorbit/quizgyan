import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "10",
  subject: "science",
  slug: "life-processes",
  title: "Life Processes",
  order: 5,
  seoTitle: "Life Processes Class 10 CBSE Notes, MCQs, Quiz & Diagrams",
  metaDescription:
    "Class 10 Science Life Processes: nutrition, respiration, transportation and excretion in plants and animals, photosynthesis and respiration equations, the human heart and nephron, MCQ quiz and important questions.",
  overview:
    "Life processes are the basic functions that keep an organism alive — nutrition, respiration, transportation and excretion. This chapter explains how plants and animals obtain energy, exchange gases, move materials around the body, and remove wastes. It is one of the largest and most important biology chapters in Class 10, rich in diagrams and definitions.",
  objectives: [
    "Distinguish autotrophic and heterotrophic nutrition.",
    "Write the equations for photosynthesis and respiration.",
    "Compare aerobic and anaerobic respiration.",
    "Describe transportation in humans and in plants.",
    "Explain excretion in humans (the nephron) and in plants.",
  ],
  concepts: [
    {
      heading: "Nutrition",
      body: "Autotrophs (green plants) make their own food by photosynthesis using sunlight, chlorophyll, carbon dioxide and water. Heterotrophs obtain food from other organisms. In humans, food is digested in the alimentary canal by enzymes and absorbed in the small intestine.",
    },
    {
      heading: "Respiration",
      body: "Respiration breaks down glucose to release energy (ATP). Aerobic respiration uses oxygen and gives more energy, carbon dioxide and water. Anaerobic respiration occurs without oxygen — yeast forms ethanol and CO₂, while our muscles form lactic acid, causing cramps.",
    },
    {
      heading: "Transportation",
      body: "In humans, the heart pumps blood in a double circulation; arteries carry blood away from the heart and veins carry it back. In plants, xylem transports water and minerals upward, while phloem transports food (translocation) to all parts.",
    },
    {
      heading: "Excretion",
      body: "Excretion removes harmful nitrogenous wastes. In humans, the kidneys filter blood through units called nephrons to form urine. Plants excrete by releasing gases, storing wastes in leaves/bark, and shedding parts.",
    },
  ],
  formulas: [
    { name: "Photosynthesis", formula: "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (sunlight, chlorophyll)" },
    { name: "Aerobic respiration", formula: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy" },
    { name: "Anaerobic (yeast)", formula: "C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ + energy" },
    { name: "Anaerobic (muscle)", formula: "C₆H₁₂O₆ → 2 lactic acid + energy" },
  ],
  definitions: [
    { term: "Autotrophic nutrition", meaning: "Making one's own food from simple inorganic substances, as green plants do." },
    { term: "Nephron", meaning: "The basic filtering unit of the kidney." },
    { term: "Xylem", meaning: "The plant tissue that carries water and minerals from roots to leaves." },
    { term: "Phloem", meaning: "The plant tissue that transports food made in the leaves to other parts." },
  ],
  examples: [
    {
      problem: "Why do athletes sometimes get muscle cramps after intense exercise?",
      solution:
        "During vigorous exercise, oxygen supply falls short, so muscles respire anaerobically and produce lactic acid. Its build-up causes cramps; the pain eases after rest and oxygen returns.",
    },
    {
      problem: "What are the raw materials and products of photosynthesis?",
      solution:
        "Raw materials: carbon dioxide and water, using sunlight and chlorophyll. Products: glucose (food) and oxygen.",
    },
    {
      problem: "Why is the human heart said to have a double circulation?",
      solution:
        "Blood passes through the heart twice in one complete cycle — once as deoxygenated blood going to the lungs (pulmonary circulation) and once as oxygenated blood going to the body (systemic circulation).",
    },
  ],
  commonMistakes: [
    "Saying photosynthesis releases CO₂ — it takes in CO₂ and releases O₂.",
    "Confusing arteries (carry blood away from the heart) with veins (carry it back).",
    "Mixing up xylem (water) and phloem (food).",
    "Stating that anaerobic respiration releases more energy than aerobic — it releases less.",
  ],
  mcqs: [
    { id: "lp1", difficulty: "easy", q: "Green plants prepare food by:", options: ["transpiration", "digestion", "respiration", "photosynthesis"], answer: 3, explanation: "Photosynthesis makes food using sunlight, CO₂ and water." },
    { id: "lp2", difficulty: "easy", q: "The basic filtering unit of the kidney is the:", options: ["neuron", "nephron", "villus", "alveolus"], answer: 1, explanation: "The nephron filters blood to form urine." },
    { id: "lp3", difficulty: "easy", q: "Water and minerals in plants are transported by:", options: ["stomata", "phloem", "xylem", "cambium"], answer: 2, explanation: "Xylem carries water and minerals upward." },
    { id: "lp4", difficulty: "medium", q: "Anaerobic respiration in muscles produces:", options: ["lactic acid", "ethanol", "carbon dioxide only", "oxygen"], answer: 0, explanation: "Muscle cells form lactic acid without oxygen." },
    { id: "lp5", difficulty: "medium", q: "Aerobic respiration releases ____ energy compared to anaerobic.", options: ["the same", "no", "more", "less"], answer: 2, explanation: "Complete oxidation in aerobic respiration releases more energy." },
    { id: "lp6", difficulty: "easy", q: "Blood vessels that carry blood away from the heart are:", options: ["arteries", "veins", "valves", "capillaries"], answer: 0, explanation: "Arteries carry blood away from the heart." },
    { id: "lp7", difficulty: "medium", q: "The food made in leaves is transported by:", options: ["roots", "phloem", "xylem", "stomata"], answer: 1, explanation: "Phloem carries food (translocation)." },
    { id: "lp8", difficulty: "easy", q: "The green pigment essential for photosynthesis is:", options: ["chlorophyll", "melanin", "haemoglobin", "carotene"], answer: 0, explanation: "Chlorophyll captures light energy." },
    { id: "lp9", difficulty: "medium", q: "Exchange of gases in human lungs occurs in the:", options: ["alveoli", "trachea", "bronchi", "larynx"], answer: 0, explanation: "Alveoli are the tiny air sacs where gas exchange happens." },
    { id: "lp10", difficulty: "hard", q: "During photosynthesis, plants take in ____ and release ____.", options: ["N₂ ; O₂", "O₂ ; CO₂", "CO₂ ; O₂", "CO₂ ; N₂"], answer: 2, explanation: "Plants absorb CO₂ and give out O₂ during photosynthesis." },
    { id: "bk10s7", difficulty: "easy", q: "The process by which green plants prepare their food is?", options: ["Respiration", "Transpiration", "Digestion", "Photosynthesis"], answer: 3, explanation: "Photosynthesis makes glucose using sunlight, water and carbon dioxide." },
    { id: "bk10s8", difficulty: "medium", q: "The red pigment in blood that carries oxygen is?", options: ["Haemoglobin", "Chlorophyll", "Insulin", "Melanin"], answer: 0, explanation: "Haemoglobin in red blood cells carries oxygen." },
  ],
  shortQuestions: [
    { q: "Name the products of anaerobic respiration in yeast.", a: "Ethanol and carbon dioxide (with some energy)." },
    { q: "What is translocation?", a: "The transport of food made in the leaves to other parts of the plant through phloem." },
    { q: "Where is bile produced and stored?", a: "Bile is produced by the liver and stored in the gall bladder." },
  ],
  longQuestions: [
    { q: "Describe the human double circulation.", a: "Blood passes twice through the heart in one cycle. In pulmonary circulation, deoxygenated blood goes from the right side of the heart to the lungs and returns oxygenated. In systemic circulation, oxygenated blood is pumped from the left side to the whole body and returns deoxygenated. The complete separation keeps oxygenated and deoxygenated blood from mixing, which is efficient for warm-blooded animals." },
    { q: "Compare aerobic and anaerobic respiration.", a: "Aerobic respiration uses oxygen, occurs mainly in the mitochondria, completely breaks down glucose into CO₂ and water, and releases a large amount of energy. Anaerobic respiration occurs without oxygen, breaks glucose only partially (into lactic acid in muscles or ethanol + CO₂ in yeast), and releases much less energy." },
  ],
  hots: [
    { q: "Why are the walls of the left ventricle thicker than those of the right ventricle?",  a: "The left ventricle pumps oxygenated blood to the entire body against high pressure, so it needs thicker, more muscular walls than the right ventricle, which only pumps blood to the nearby lungs." },
    { q: "Why does a plant not need a special excretory organ like the kidney?", a: "Plants produce less harmful waste, can store wastes in leaves/bark that fall off, and release gaseous wastes through stomata, so they do not need a dedicated excretory organ." },
  ],
  revisionNotes: [
    "Photosynthesis: CO₂ + H₂O → glucose + O₂ (light, chlorophyll).",
    "Aerobic respiration releases more energy than anaerobic.",
    "Arteries carry blood away; veins carry it back; double circulation in humans.",
    "Xylem → water; phloem → food; nephron filters blood in kidneys.",
  ],
  keyTakeaways: [
    "Photosynthesis and respiration are opposite processes — know both equations.",
    "Don't confuse xylem/phloem or arteries/veins.",
    "Anaerobic respiration gives less energy and different products.",
  ],
  faq: [
    { q: "Why is this chapter important?", a: "Life Processes is large and high-weightage, with many diagram-based and definition questions in the board exam." },
    { q: "What is the difference between aerobic and anaerobic respiration?", a: "Aerobic respiration uses oxygen and releases more energy; anaerobic respiration occurs without oxygen and releases less, forming lactic acid (in muscles) or ethanol and CO₂ (in yeast)." },
    { q: "What do xylem and phloem do?", a: "Xylem transports water and minerals upward; phloem transports food made in leaves to the rest of the plant." },
  ],
  related: [
    { classId: "10", subject: "science", slug: "control-and-coordination" },
    { classId: "10", subject: "science", slug: "how-do-organisms-reproduce" },
  ],
};

export default chapter;
