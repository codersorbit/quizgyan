// Single typed string table for the Worksheet Generator — EN / বাংলা / हिन्दी.
// Real translations (not transliterations) so auditing is trivial.

import type { QType, WDifficulty, WLang } from "@/lib/tools/logic/worksheet";

export interface WorksheetStrings {
  // builder chrome
  scope: string;
  board: string;
  klass: string;
  subject: string;
  chapters: string;
  selectAll: string;
  clear: string;
  uiLanguage: string;
  pickScopeFirst: string;
  questionMix: string;
  availableShort: string; // "avail."
  marksEach: string;
  totalQuestions: string;
  totalMarks: string;
  generate: string;
  regenerate: string;
  swap: string;
  // worksheet header form
  schoolName: string;
  teacherName: string;
  worksheetTitle: string;
  date: string;
  duration: string;
  maxMarks: string;
  generalInstructions: string;
  defaultInstructions: string;
  // rendered worksheet
  name: string;
  rollNo: string;
  classField: string;
  section: string;
  time: string;
  sectionWord: string;
  sectionLetters: string[];
  markEachOne: string; // "mark each"
  marksEachMany: string; // "marks each"
  footer: string;
  // tabs + actions
  worksheetTab: string;
  answerKeyTab: string;
  printWorksheet: string;
  printAnswerKey: string;
  // answer key
  answerKeyTitle: string;
  correctAnswer: string;
  explanation: string;
  difficultyLabel: string;
  sourceChapters: string;
  breakdown: string;
  // notes
  contentLangNote: (langs: string) => string;
  shortfall: (got: number, want: number, type: string) => string;
  noQuestionsScope: string;
  chooseChapters: string;
  // dictionaries
  types: Record<QType, string>;
  difficulty: Record<WDifficulty, string>;
  langName: Record<WLang, string>;
  // sets
  setsTitle: string;
  numberOfSets: string;
  setWord: string;
  // custom questions
  customTitle: string;
  customSubtitle: string;
  addQuestion: string;
  qType: string;
  qPrompt: string;
  qAnswer: string;
  qExplanation: string;
  qMarks: string;
  qOption: string;
  correctOption: string;
  removeQ: string;
  customLabel: string;
  // actions / sharing
  share: string;
  whatsapp: string;
  copyLink: string;
  copied: string;
  downloadCsv: string;
  shareNote: string;
  pdfHint: string;
}

export const WORKSHEET_T: Record<WLang, WorksheetStrings> = {
  en: {
    scope: "Scope",
    board: "Board",
    klass: "Class",
    subject: "Subject",
    chapters: "Chapters",
    selectAll: "Select all",
    clear: "Clear",
    uiLanguage: "Worksheet language",
    pickScopeFirst: "Pick a board, class and subject to begin.",
    questionMix: "Question mix",
    availableShort: "avail.",
    marksEach: "marks each",
    totalQuestions: "Total questions",
    totalMarks: "Total marks",
    generate: "Generate worksheet",
    regenerate: "Regenerate",
    swap: "Swap",
    schoolName: "School name",
    teacherName: "Teacher name",
    worksheetTitle: "Worksheet title",
    date: "Date",
    duration: "Duration",
    maxMarks: "Max marks",
    generalInstructions: "General instructions",
    defaultInstructions:
      "All questions are compulsory. Write neatly. Marks for each question are shown in the margin.",
    name: "Name",
    rollNo: "Roll No.",
    classField: "Class",
    section: "Section",
    time: "Time",
    sectionWord: "Section",
    sectionLetters: ["A", "B", "C", "D", "E", "F", "G"],
    markEachOne: "mark each",
    marksEachMany: "marks each",
    footer: "Generated free at studymatic.in — no login, no ads.",
    worksheetTab: "Worksheet",
    answerKeyTab: "Answer key",
    printWorksheet: "Print worksheet",
    printAnswerKey: "Print answer key",
    answerKeyTitle: "Answer key",
    correctAnswer: "Answer",
    explanation: "Explanation",
    difficultyLabel: "Level",
    sourceChapters: "Source chapters",
    breakdown: "Breakdown",
    contentLangNote: (langs) =>
      `Worksheet labels are in Hindi; the questions are shown in ${langs} (the chapter's own language).`,
    shortfall: (got, want, type) =>
      `Only ${got} of ${want} ${type} questions were available in this scope — added what exists.`,
    noQuestionsScope: "No questions are available for the chapters you selected.",
    chooseChapters: "Choose at least one chapter, then set the question mix.",
    types: {
      mcq: "Multiple Choice",
      fill: "Fill in the Blanks",
      truefalse: "True / False",
      short: "Short Answer",
      match: "Match the Following",
      hots: "HOTS",
      long: "Long Answer",
    },
    difficulty: { easy: "Easy", standard: "Standard", hard: "Hard", hots: "HOTS" },
    langName: { en: "English", bn: "Bengali", hi: "Hindi" },
    setsTitle: "Question paper sets",
    numberOfSets: "Number of sets",
    setWord: "Set",
    customTitle: "Your own questions",
    customSubtitle: "Bring your own questions, get an instant answer key.",
    addQuestion: "Add question",
    qType: "Type",
    qPrompt: "Question",
    qAnswer: "Answer",
    qExplanation: "Explanation (optional)",
    qMarks: "Marks",
    qOption: "Option",
    correctOption: "Correct",
    removeQ: "Remove",
    customLabel: "Your questions",
    share: "Share",
    whatsapp: "WhatsApp",
    copyLink: "Copy link",
    copied: "Copied ✓",
    downloadCsv: "Answer key (CSV)",
    shareNote: "The link reproduces this setup and the same questions (via the seed). Your own typed questions are not stored in the link.",
    pdfHint: "Tip: in the print dialog choose “Save as PDF” for a clean file.",
  },

  bn: {
    scope: "পরিসর",
    board: "বোর্ড",
    klass: "শ্রেণি",
    subject: "বিষয়",
    chapters: "অধ্যায়",
    selectAll: "সব নির্বাচন",
    clear: "মুছে ফেলো",
    uiLanguage: "ওয়ার্কশিটের ভাষা",
    pickScopeFirst: "শুরু করতে বোর্ড, শ্রেণি ও বিষয় নির্বাচন করো।",
    questionMix: "প্রশ্নের মিশ্রণ",
    availableShort: "আছে",
    marksEach: "নম্বর প্রতিটি",
    totalQuestions: "মোট প্রশ্ন",
    totalMarks: "পূর্ণমান",
    generate: "ওয়ার্কশিট তৈরি করো",
    regenerate: "আবার তৈরি করো",
    swap: "বদলাও",
    schoolName: "বিদ্যালয়ের নাম",
    teacherName: "শিক্ষকের নাম",
    worksheetTitle: "ওয়ার্কশিটের শিরোনাম",
    date: "তারিখ",
    duration: "সময়সীমা",
    maxMarks: "পূর্ণমান",
    generalInstructions: "সাধারণ নির্দেশাবলী",
    defaultInstructions:
      "সব প্রশ্নের উত্তর দিতে হবে। পরিষ্কারভাবে লেখো। প্রতিটি প্রশ্নের নম্বর পাশে দেওয়া আছে।",
    name: "নাম",
    rollNo: "রোল নম্বর",
    classField: "শ্রেণি",
    section: "শাখা",
    time: "সময়",
    sectionWord: "বিভাগ",
    sectionLetters: ["ক", "খ", "গ", "ঘ", "ঙ", "চ", "ছ"],
    markEachOne: "নম্বর প্রতিটি",
    marksEachMany: "নম্বর প্রতিটি",
    footer: "studymatic.in-এ বিনামূল্যে তৈরি — লগইন নেই, বিজ্ঞাপন নেই।",
    worksheetTab: "ওয়ার্কশিট",
    answerKeyTab: "উত্তরপত্র",
    printWorksheet: "ওয়ার্কশিট প্রিন্ট",
    printAnswerKey: "উত্তরপত্র প্রিন্ট",
    answerKeyTitle: "উত্তরপত্র",
    correctAnswer: "উত্তর",
    explanation: "ব্যাখ্যা",
    difficultyLabel: "স্তর",
    sourceChapters: "উৎস অধ্যায়",
    breakdown: "বিভাজন",
    contentLangNote: (langs) =>
      `ওয়ার্কশিটের লেখা হিন্দিতে; প্রশ্নগুলো দেখানো হচ্ছে ${langs}-এ (অধ্যায়ের নিজস্ব ভাষা)।`,
    shortfall: (got, want, type) =>
      `এই পরিসরে ${type} প্রশ্ন ${want}টির মধ্যে মাত্র ${got}টি ছিল — যা আছে তা যোগ করা হয়েছে।`,
    noQuestionsScope: "তুমি যে অধ্যায়গুলো নির্বাচন করেছ তার জন্য কোনো প্রশ্ন নেই।",
    chooseChapters: "অন্তত একটি অধ্যায় বেছে নাও, তারপর প্রশ্নের মিশ্রণ ঠিক করো।",
    types: {
      mcq: "বহুনির্বাচনী",
      fill: "শূন্যস্থান পূরণ",
      truefalse: "সত্য / মিথ্যা",
      short: "সংক্ষিপ্ত উত্তর",
      match: "মিলাও",
      hots: "উচ্চস্তরের চিন্তন (HOTS)",
      long: "দীর্ঘ উত্তর",
    },
    difficulty: { easy: "সহজ", standard: "সাধারণ", hard: "কঠিন", hots: "HOTS" },
    langName: { en: "ইংরেজি", bn: "বাংলা", hi: "হিন্দি" },
    setsTitle: "প্রশ্নপত্রের সেট",
    numberOfSets: "সেটের সংখ্যা",
    setWord: "সেট",
    customTitle: "তোমার নিজের প্রশ্ন",
    customSubtitle: "নিজের প্রশ্ন দাও, সঙ্গে সঙ্গে উত্তরপত্র পাও।",
    addQuestion: "প্রশ্ন যোগ করো",
    qType: "ধরন",
    qPrompt: "প্রশ্ন",
    qAnswer: "উত্তর",
    qExplanation: "ব্যাখ্যা (ঐচ্ছিক)",
    qMarks: "নম্বর",
    qOption: "বিকল্প",
    correctOption: "সঠিক",
    removeQ: "মুছে ফেলো",
    customLabel: "তোমার প্রশ্ন",
    share: "শেয়ার",
    whatsapp: "হোয়াটসঅ্যাপ",
    copyLink: "লিঙ্ক কপি",
    copied: "কপি হয়েছে ✓",
    downloadCsv: "উত্তরপত্র (CSV)",
    shareNote: "লিঙ্কটি এই সেটআপ ও একই প্রশ্ন ফিরিয়ে আনে (সিড অনুযায়ী)। তোমার নিজের লেখা প্রশ্ন লিঙ্কে থাকে না।",
    pdfHint: "টিপ: প্রিন্ট উইন্ডোতে “Save as PDF” বেছে নিলে পরিষ্কার ফাইল পাবে।",
  },

  hi: {
    scope: "दायरा",
    board: "बोर्ड",
    klass: "कक्षा",
    subject: "विषय",
    chapters: "अध्याय",
    selectAll: "सभी चुनें",
    clear: "हटाएँ",
    uiLanguage: "वर्कशीट की भाषा",
    pickScopeFirst: "शुरू करने के लिए बोर्ड, कक्षा और विषय चुनें।",
    questionMix: "प्रश्नों का मिश्रण",
    availableShort: "उपलब्ध",
    marksEach: "अंक प्रत्येक",
    totalQuestions: "कुल प्रश्न",
    totalMarks: "पूर्णांक",
    generate: "वर्कशीट बनाएँ",
    regenerate: "फिर से बनाएँ",
    swap: "बदलें",
    schoolName: "विद्यालय का नाम",
    teacherName: "शिक्षक का नाम",
    worksheetTitle: "वर्कशीट का शीर्षक",
    date: "दिनांक",
    duration: "अवधि",
    maxMarks: "पूर्णांक",
    generalInstructions: "सामान्य निर्देश",
    defaultInstructions:
      "सभी प्रश्न अनिवार्य हैं। साफ़-साफ़ लिखें। प्रत्येक प्रश्न के अंक हाशिये में दिए गए हैं।",
    name: "नाम",
    rollNo: "अनुक्रमांक",
    classField: "कक्षा",
    section: "वर्ग",
    time: "समय",
    sectionWord: "खंड",
    sectionLetters: ["क", "ख", "ग", "घ", "ङ", "च", "छ"],
    markEachOne: "अंक प्रत्येक",
    marksEachMany: "अंक प्रत्येक",
    footer: "studymatic.in पर निःशुल्क बनाया गया — कोई लॉगिन नहीं, कोई विज्ञापन नहीं।",
    worksheetTab: "वर्कशीट",
    answerKeyTab: "उत्तर कुंजी",
    printWorksheet: "वर्कशीट प्रिंट करें",
    printAnswerKey: "उत्तर कुंजी प्रिंट करें",
    answerKeyTitle: "उत्तर कुंजी",
    correctAnswer: "उत्तर",
    explanation: "व्याख्या",
    difficultyLabel: "स्तर",
    sourceChapters: "स्रोत अध्याय",
    breakdown: "विभाजन",
    contentLangNote: (langs) =>
      `वर्कशीट के लेबल हिन्दी में हैं; प्रश्न ${langs} में दिखाए गए हैं (अध्याय की अपनी भाषा)।`,
    shortfall: (got, want, type) =>
      `इस दायरे में ${type} के ${want} में से केवल ${got} प्रश्न उपलब्ध थे — जो हैं वे जोड़ दिए गए।`,
    noQuestionsScope: "आपके चुने हुए अध्यायों के लिए कोई प्रश्न उपलब्ध नहीं है।",
    chooseChapters: "कम से कम एक अध्याय चुनें, फिर प्रश्नों का मिश्रण तय करें।",
    types: {
      mcq: "बहुविकल्पीय",
      fill: "रिक्त स्थान भरें",
      truefalse: "सही / गलत",
      short: "लघु उत्तरीय",
      match: "मिलान करें",
      hots: "उच्च स्तरीय चिंतन (HOTS)",
      long: "दीर्घ उत्तरीय",
    },
    difficulty: { easy: "आसान", standard: "सामान्य", hard: "कठिन", hots: "HOTS" },
    langName: { en: "अंग्रेज़ी", bn: "बंगाली", hi: "हिन्दी" },
    setsTitle: "प्रश्नपत्र के सेट",
    numberOfSets: "सेटों की संख्या",
    setWord: "सेट",
    customTitle: "आपके अपने प्रश्न",
    customSubtitle: "अपने प्रश्न दें, तुरंत उत्तर-कुंजी पाएँ।",
    addQuestion: "प्रश्न जोड़ें",
    qType: "प्रकार",
    qPrompt: "प्रश्न",
    qAnswer: "उत्तर",
    qExplanation: "व्याख्या (वैकल्पिक)",
    qMarks: "अंक",
    qOption: "विकल्प",
    correctOption: "सही",
    removeQ: "हटाएँ",
    customLabel: "आपके प्रश्न",
    share: "शेयर",
    whatsapp: "व्हाट्सऐप",
    copyLink: "लिंक कॉपी करें",
    copied: "कॉपी हुआ ✓",
    downloadCsv: "उत्तर-कुंजी (CSV)",
    shareNote: "यह लिंक इस सेटअप और वही प्रश्न दोबारा बनाता है (सीड के ज़रिए)। आपके अपने टाइप किए प्रश्न लिंक में संग्रहीत नहीं होते।",
    pdfHint: "सुझाव: प्रिंट विंडो में “Save as PDF” चुनें ताकि साफ़ फ़ाइल मिले।",
  },
};
