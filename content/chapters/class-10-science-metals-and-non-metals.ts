import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "10",
  subject: "science",
  slug: "metals-and-non-metals",
  title: "Metals and Non-metals",
  order: 3,
  seoTitle:
    "Metals and Non-metals Class 10 CBSE Notes, MCQs, Quiz & Reactivity Series",
  metaDescription:
    "Class 10 Science Metals and Non-metals: physical and chemical properties, reactivity series, ionic bonding, extraction of metals, corrosion and its prevention, MCQ quiz and important questions.",
  overview:
    "Elements are broadly divided into metals and non-metals, each with characteristic properties. This chapter compares their physical and chemical behaviour, introduces the reactivity series, explains how metals form ionic compounds, outlines how metals are extracted from their ores, and discusses corrosion and how to prevent it. It is a core, well-rewarded chapter in Class 10 Chemistry.",
  objectives: [
    "Compare the physical properties of metals and non-metals.",
    "Arrange metals using the reactivity series.",
    "Explain the formation of ionic compounds.",
    "Describe the basic steps of extracting metals from ores.",
    "Explain corrosion and methods to prevent it.",
  ],
  concepts: [
    {
      heading: "Physical properties",
      body: "Metals are usually lustrous, malleable, ductile, sonorous and good conductors of heat and electricity; most are solids with high melting points. Non-metals are generally dull, brittle, poor conductors (except graphite) and may be solids, liquids or gases.",
    },
    {
      heading: "Chemical properties and the reactivity series",
      body: "Metals react with oxygen to form basic oxides, with water and acids to release hydrogen, and can displace less reactive metals from their salts. The reactivity series (K, Na, Ca, Mg, Al, Zn, Fe, Pb, H, Cu, Ag, Au) ranks metals from most to least reactive.",
    },
    {
      heading: "Ionic compounds",
      body: "When a metal loses electrons and a non-metal gains them, oppositely charged ions form and are held by strong electrostatic forces — an ionic bond. Ionic compounds have high melting points and conduct electricity when molten or dissolved.",
    },
    {
      heading: "Extraction and corrosion",
      body: "Metals are extracted from ores by methods that depend on reactivity: highly reactive metals by electrolysis, moderately reactive by reduction of their oxides, and unreactive metals found free. Corrosion (e.g. rusting) is prevented by painting, oiling, galvanising, or alloying.",
    },
  ],
  formulas: [
    { name: "Metal + oxygen", formula: "metal + O₂ → metal oxide (basic)" },
    { name: "Metal + acid", formula: "metal + dilute acid → salt + hydrogen gas" },
    { name: "Reactivity series", formula: "K Na Ca Mg Al Zn Fe Pb (H) Cu Ag Au" },
  ],
  definitions: [
    { term: "Malleability", meaning: "The property of being beaten into thin sheets (a property of metals)." },
    { term: "Ductility", meaning: "The property of being drawn into wires (a property of metals)." },
    { term: "Ore", meaning: "A mineral from which a metal can be profitably extracted." },
    { term: "Alloy", meaning: "A homogeneous mixture of a metal with one or more metals or non-metals (e.g. steel, brass)." },
  ],
  examples: [
    {
      problem: "Why is sodium stored under kerosene?",
      solution:
        "Sodium is so reactive that it catches fire when exposed to air and reacts vigorously with moisture. Kerosene keeps air and water away, preventing these reactions.",
    },
    {
      problem: "What happens when zinc is added to copper sulphate solution?",
      solution:
        "Zinc, being more reactive than copper, displaces it: Zn + CuSO₄ → ZnSO₄ + Cu. The blue colour fades and reddish copper is deposited.",
    },
    {
      problem: "Why does iron rust, and how can rusting be prevented?",
      solution:
        "Iron reacts with oxygen and moisture to form hydrated iron oxide (rust). It is prevented by painting, oiling, greasing, galvanising (zinc coating) or making alloys like stainless steel.",
    },
  ],
  commonMistakes: [
    "Calling all metals solids — mercury is a liquid at room temperature.",
    "Saying non-metals never conduct electricity — graphite (a non-metal) conducts.",
    "Reversing the reactivity series order.",
    "Confusing minerals with ores (all ores are minerals, but not all minerals are ores).",
  ],
  mcqs: [
    { id: "mn1", difficulty: "easy", q: "Which property allows metals to be drawn into wires?", options: ["sonority", "lustre", "malleability", "ductility"], answer: 3, explanation: "Ductility is the ability to be drawn into wires." },
    { id: "mn2", difficulty: "easy", q: "The only metal that is liquid at room temperature is:", options: ["sodium", "zinc", "mercury", "iron"], answer: 2, explanation: "Mercury is a liquid metal at room temperature." },
    { id: "mn3", difficulty: "medium", q: "Which non-metal is a good conductor of electricity?", options: ["sulphur", "graphite", "iodine", "phosphorus"], answer: 1, explanation: "Graphite (a form of carbon) conducts electricity." },
    { id: "mn4", difficulty: "medium", q: "Metals react with dilute acids to release:", options: ["hydrogen", "oxygen", "carbon dioxide", "chlorine"], answer: 0, explanation: "Metal + dilute acid → salt + hydrogen gas." },
    { id: "mn5", difficulty: "medium", q: "The most reactive metal among these is:", options: ["iron", "gold", "copper", "potassium"], answer: 3, explanation: "Potassium is at the top of the reactivity series." },
    { id: "mn6", difficulty: "easy", q: "Ionic compounds generally have:", options: ["no melting point", "low melting points", "high melting points", "a gaseous state"], answer: 2, explanation: "Strong electrostatic forces give ionic compounds high melting points." },
    { id: "mn7", difficulty: "easy", q: "Coating iron with zinc to prevent rusting is called:", options: ["alloying", "tempering", "galvanising", "annealing"], answer: 2, explanation: "Galvanising is coating iron/steel with zinc." },
    { id: "mn8", difficulty: "medium", q: "Sodium is stored under kerosene because it:", options: ["is unreactive", "is heavy", "reacts vigorously with air and water", "is a liquid"], answer: 2, explanation: "Kerosene keeps reactive sodium away from air and moisture." },
    { id: "mn9", difficulty: "easy", q: "A homogeneous mixture of metals is called a/an:", options: ["ore", "amalgam only", "alloy", "salt"], answer: 2, explanation: "An alloy is a mixture of a metal with other metals/non-metals." },
    { id: "mn10", difficulty: "hard", q: "Highly reactive metals like sodium and potassium are extracted by:", options: ["displacement", "electrolysis of molten salts", "roasting", "reduction with carbon"], answer: 1, explanation: "Very reactive metals are obtained by electrolytic reduction." },
    { id: "bk10s5", difficulty: "hard", q: "Which gas is usually released when a metal reacts with a dilute acid?", options: ["Oxygen", "Hydrogen", "Carbon dioxide", "Nitrogen"], answer: 1, explanation: "Metal + dilute acid → salt + hydrogen gas." },
  ],
  shortQuestions: [
    { q: "Why are metals sonorous?", a: "They produce a ringing sound when struck, which is why they are used in bells and wires." },
    { q: "Name two metals that are found in a free state in nature.", a: "Gold and silver (and platinum) — they are unreactive." },
    { q: "What is an amalgam?", a: "An alloy in which one of the metals is mercury." },
  ],
  longQuestions: [
    { q: "Explain how the reactivity series helps in displacement reactions, with an example.", a: "A metal higher in the reactivity series can displace a metal lower than it from the latter's salt solution. For example, iron (higher) displaces copper (lower): Fe + CuSO₄ → FeSO₄ + Cu. A less reactive metal cannot displace a more reactive one." },
    { q: "Describe how moderately reactive metals are extracted from their oxide ores.", a: "Their ores are first converted to oxides (by roasting sulphide ores or calcining carbonate ores). The oxide is then reduced to the metal using a reducing agent such as carbon (e.g. ZnO + C → Zn + CO). Finally, the metal is refined, often by electrolysis." },
  ],
  hots: [
    { q: "Why does silver jewellery turn black over time?", a: "Silver reacts slowly with sulphur compounds in the air to form a black coating of silver sulphide — a form of corrosion specific to silver." },
    { q: "Aluminium is reactive, yet it resists corrosion. Why?", a: "Aluminium forms a thin, hard, unreactive layer of aluminium oxide on its surface that protects the metal underneath from further reaction." },
  ],
  revisionNotes: [
    "Metals: lustrous, malleable, ductile, sonorous, good conductors.",
    "Non-metals: dull, brittle, poor conductors (graphite is an exception).",
    "Reactivity series: K Na Ca Mg Al Zn Fe Pb (H) Cu Ag Au.",
    "Extraction by reactivity; corrosion prevented by coating/alloying.",
  ],
  keyTakeaways: [
    "Reactivity decides both displacement reactions and the method of extraction.",
    "Ionic compounds form between metals and non-metals.",
    "Know the standard exceptions (mercury, graphite, aluminium oxide layer).",
  ],
  faq: [
    { q: "What is the reactivity series used for?", a: "To predict displacement reactions and to choose the right method for extracting a metal from its ore." },
    { q: "Why do ionic compounds conduct electricity only when molten or dissolved?", a: "Their ions are fixed in a solid lattice but become free to move when the compound is melted or dissolved, allowing it to conduct." },
    { q: "What is the difference between a mineral and an ore?", a: "A mineral is any naturally occurring substance containing a metal; an ore is a mineral from which the metal can be extracted profitably." },
  ],
  related: [
    { classId: "10", subject: "science", slug: "chemical-reactions-and-equations" },
    { classId: "10", subject: "science", slug: "carbon-and-its-compounds" },
  ],
};

export default chapter;
