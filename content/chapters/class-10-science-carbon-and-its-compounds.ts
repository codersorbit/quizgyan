import type { Chapter } from "@/lib/types";

const chapter: Chapter = {
  classId: "10",
  subject: "science",
  slug: "carbon-and-its-compounds",
  title: "Carbon and its Compounds",
  order: 4,
  seoTitle:
    "Carbon and its Compounds Class 10 CBSE Notes, MCQs, Quiz & Functional Groups",
  metaDescription:
    "Class 10 Science Carbon and its Compounds: covalent bonding, allotropes, hydrocarbons, functional groups, homologous series, ethanol and ethanoic acid, soaps and detergents, MCQ quiz and important questions.",
  overview:
    "Carbon forms more compounds than any other element because of two special properties — catenation (linking with itself) and tetravalency (four bonds). This chapter explains covalent bonding, the types of carbon compounds and their functional groups, homologous series, the important compounds ethanol and ethanoic acid, and how soaps and detergents clean. It is a rich, high-weightage chapter.",
  objectives: [
    "Explain why carbon forms covalent bonds.",
    "Describe catenation and tetravalency.",
    "Identify saturated and unsaturated hydrocarbons and functional groups.",
    "Define a homologous series.",
    "Explain the properties of ethanol, ethanoic acid, soaps and detergents.",
  ],
  concepts: [
    {
      heading: "Covalent bonding in carbon",
      body: "Carbon has four valence electrons and forms four covalent bonds by sharing electrons, rather than gaining or losing them. Covalent compounds are usually poor conductors with low melting and boiling points.",
    },
    {
      heading: "Catenation, tetravalency and allotropes",
      body: "Catenation is carbon's ability to bond with other carbon atoms to form long chains, branches and rings. Tetravalency lets each carbon bond with up to four atoms. Pure carbon exists as allotropes such as diamond, graphite and fullerenes.",
    },
    {
      heading: "Hydrocarbons and functional groups",
      body: "Hydrocarbons contain only carbon and hydrogen; they are saturated (single bonds — alkanes) or unsaturated (double/triple bonds — alkenes/alkynes). A functional group (e.g. –OH alcohol, –COOH carboxylic acid) is the reactive part that decides a compound's chemistry.",
    },
    {
      heading: "Homologous series and key compounds",
      body: "A homologous series is a family of compounds with the same functional group, differing by a –CH₂– unit. Ethanol (C₂H₅OH) is a common alcohol; ethanoic acid (CH₃COOH, vinegar) is a weak acid. Soaps are sodium/potassium salts of fatty acids and clean by forming micelles.",
    },
  ],
  formulas: [
    { name: "Methane", formula: "CH₄ (simplest alkane)" },
    { name: "Ethanol", formula: "C₂H₅OH (alcohol, –OH group)" },
    { name: "Ethanoic acid", formula: "CH₃COOH (carboxylic acid, –COOH group)" },
    { name: "Homologous difference", formula: "successive members differ by –CH₂– (14 mass units)" },
  ],
  definitions: [
    { term: "Catenation", meaning: "The ability of carbon atoms to link with one another to form chains and rings." },
    { term: "Hydrocarbon", meaning: "A compound made of only carbon and hydrogen." },
    { term: "Functional group", meaning: "An atom or group of atoms that gives a compound its characteristic chemical properties." },
    { term: "Homologous series", meaning: "A group of compounds with the same functional group and general formula, differing by –CH₂–." },
  ],
  examples: [
    {
      problem: "Why does carbon form covalent bonds rather than ionic bonds?",
      solution:
        "Carbon has 4 valence electrons. Losing or gaining 4 electrons would require too much energy, so carbon instead shares its electrons to complete its octet, forming four covalent bonds.",
    },
    {
      problem: "Distinguish between saturated and unsaturated hydrocarbons.",
      solution:
        "Saturated hydrocarbons (alkanes) have only single C–C bonds and burn with a clean blue flame. Unsaturated hydrocarbons (alkenes/alkynes) have double or triple bonds, are more reactive, and burn with a sooty yellow flame.",
    },
    {
      problem: "Why does soap clean greasy dirt?",
      solution:
        "A soap molecule has a water-loving (hydrophilic) head and an oil-loving (hydrophobic) tail. The tails surround grease to form tiny clusters called micelles, which are then washed away in water.",
    },
  ],
  commonMistakes: [
    "Writing the molecular formula of ethanol as CH₃OH (that is methanol) instead of C₂H₅OH.",
    "Confusing alkenes (double bond) with alkynes (triple bond).",
    "Forgetting that the functional group, not the chain length, decides reactivity.",
    "Thinking soaps work well in hard water — they form scum; detergents work better.",
  ],
  mcqs: [
    { id: "cc1", difficulty: "easy", q: "Carbon achieves a stable octet by:", options: ["sharing electrons (covalent bonds)", "gaining 4 electrons", "losing 4 electrons", "forming ions"], answer: 0, explanation: "Carbon shares electrons to form four covalent bonds." },
    { id: "cc2", difficulty: "easy", q: "The ability of carbon to form long chains is called:", options: ["isomerism", "allotropy", "catenation", "tetravalency"], answer: 2, explanation: "Catenation is self-linking of carbon atoms." },
    { id: "cc3", difficulty: "easy", q: "The simplest hydrocarbon is:", options: ["methane", "butane", "propane", "ethane"], answer: 0, explanation: "Methane (CH₄) is the simplest alkane." },
    { id: "cc4", difficulty: "medium", q: "The functional group in ethanoic acid is:", options: ["–COOH", "–CHO", "–CO–", "–OH"], answer: 0, explanation: "Ethanoic acid contains the carboxylic acid group –COOH." },
    { id: "cc5", difficulty: "medium", q: "Two successive members of a homologous series differ by:", options: ["–C₂H₅", "–CH₂–", "–CH₃", "–OH"], answer: 1, explanation: "They differ by a –CH₂– unit (14 mass units)." },
    { id: "cc6", difficulty: "easy", q: "Which has a carbon–carbon double bond?", options: ["acid", "alkane", "alkene", "alcohol"], answer: 2, explanation: "Alkenes contain a C=C double bond." },
    { id: "cc7", difficulty: "medium", q: "Ethanol's molecular formula is:", options: ["CH₃COOH", "C₂H₅OH", "C₂H₆", "CH₃OH"], answer: 1, explanation: "Ethanol is C₂H₅OH." },
    { id: "cc8", difficulty: "medium", q: "Soaps are sodium or potassium salts of:", options: ["mineral acids", "carbonic acid", "amino acids", "fatty acids"], answer: 3, explanation: "Soaps are salts of long-chain fatty acids." },
    { id: "cc9", difficulty: "easy", q: "Diamond and graphite are ____ of carbon.", options: ["allotropes", "isotopes", "compounds", "isomers"], answer: 0, explanation: "They are different physical forms (allotropes) of the same element." },
    { id: "cc10", difficulty: "hard", q: "Detergents are preferred over soaps in hard water because they:", options: ["do not form scum with hard water", "are natural", "are cheaper", "smell better"], answer: 0, explanation: "Detergents do not form insoluble scum with the calcium/magnesium ions of hard water." },
    { id: "bk10s6", difficulty: "hard", q: "The ability of carbon to form long chains by bonding with its own atoms is called?", options: ["Isomerism", "Oxidation", "Catenation", "Ionisation"], answer: 2, explanation: "Catenation is carbon's self-linking property forming chains and rings." },
  ],
  shortQuestions: [
    { q: "Define tetravalency of carbon.", a: "Carbon has four valence electrons, so it can form four covalent bonds." },
    { q: "Name the gas formed when ethanol reacts with sodium.", a: "Hydrogen gas (along with sodium ethoxide)." },
    { q: "Why is ethanoic acid called a weak acid?", a: "It only partially ionises in water, releasing few hydrogen ions." },
  ],
  longQuestions: [
    { q: "What is a homologous series? Give two characteristics.", a: "A homologous series is a family of organic compounds with the same functional group and a general formula, where consecutive members differ by –CH₂–. Characteristics: (i) members have similar chemical properties, and (ii) their physical properties (like boiling point) change gradually with increasing molecular size." },
    { q: "Explain the cleansing action of soap using the idea of micelles.", a: "A soap molecule has a hydrophilic (water-loving) head and a hydrophobic (oil-loving) tail. In water, the tails point inward toward grease and the heads point outward, forming spherical clusters called micelles. The grease is trapped inside the micelles and carried away with the rinse water." },
  ],
  hots: [
    { q: "Why do unsaturated hydrocarbons burn with a sooty flame?", a: "They have a higher proportion of carbon, which does not burn completely in the available oxygen, releasing unburnt carbon particles (soot) that make the flame yellow and smoky." },
    { q: "Conversion of ethanol to ethanoic acid is called an oxidation reaction. Why?", a: "Oxygen is added (hydrogen is removed) when ethanol (C₂H₅OH) is converted to ethanoic acid (CH₃COOH), and addition of oxygen is oxidation." },
  ],
  revisionNotes: [
    "Carbon forms 4 covalent bonds (tetravalency) and chains (catenation).",
    "Hydrocarbons: saturated (alkanes) vs unsaturated (alkenes/alkynes).",
    "Functional group decides chemistry; –OH alcohol, –COOH acid.",
    "Soaps = salts of fatty acids; clean via micelles; detergents work in hard water.",
  ],
  keyTakeaways: [
    "Catenation + tetravalency explain carbon's huge number of compounds.",
    "Ethanol is C₂H₅OH; ethanoic acid is CH₃COOH — don't mix them up.",
    "Micelle formation is the key to how soap cleans.",
  ],
  faq: [
    { q: "Why does carbon form so many compounds?", a: "Because of catenation (it links with itself into chains and rings) and tetravalency (each carbon can bond with up to four atoms)." },
    { q: "What is the difference between soap and detergent?", a: "Soaps are salts of fatty acids and form scum in hard water; detergents are synthetic cleansing agents that work even in hard water." },
    { q: "What is a functional group?", a: "It is the reactive part of a molecule (like –OH or –COOH) that determines the compound's chemical behaviour." },
  ],
  related: [
    { classId: "10", subject: "science", slug: "metals-and-non-metals" },
    { classId: "10", subject: "science", slug: "acids-bases-and-salts" },
  ],
};

export default chapter;
