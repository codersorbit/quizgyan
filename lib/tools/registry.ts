import type { CategoryMeta, ToolCategory, ToolConfig } from "./types";

/* ------------------------------ Categories ------------------------------ */

export const CATEGORIES: ReadonlyArray<CategoryMeta> = [
  {
    key: "marks",
    name: { en: "Marks & Grades", bn: "নম্বর ও গ্রেড" },
    blurb: {
      en: "Turn marks into percentages, CGPA and CBSE grades in one tap.",
      bn: "এক ক্লিকে নম্বরকে শতকরা, সিজিপিএ ও সিবিএসই গ্রেডে বদলে নাও।",
    },
  },
  {
    key: "school",
    name: { en: "School Life", bn: "স্কুল জীবন" },
    blurb: {
      en: "Admission age, exam countdowns and focused study sessions.",
      bn: "ভর্তির বয়স, পরীক্ষার কাউন্টডাউন আর মন দিয়ে পড়ার সময়।",
    },
  },
  {
    key: "maths",
    name: { en: "Maths Helpers", bn: "অঙ্কের সহায়ক" },
    blurb: {
      en: "Step-by-step fractions, LCM/HCF, averages and more — Class 4–10.",
      bn: "ধাপে ধাপে ভগ্নাংশ, লসাগু/গসাগু, গড় ও আরও — চতুর্থ থেকে দশম।",
    },
  },
  {
    key: "teacher",
    name: { en: "Teacher Tools", bn: "শিক্ষকের সরঞ্জাম" },
    blurb: {
      en: "Build class results and question-paper blueprints in minutes.",
      bn: "মিনিটে ক্লাসের ফল আর প্রশ্নপত্রের নকশা তৈরি করো।",
    },
  },
];

/* -------------------------------- Tools --------------------------------- */
// Phase 1 ships these five. Phase 2 appends the remaining nine here; the hub,
// sitemap and related grids all read from this array, so nothing else changes.

export const TOOLS: ReadonlyArray<ToolConfig> = [
  {
    slug: "cgpa-to-percentage",
    name: { en: "CGPA to Percentage Converter", bn: "সিজিপিএ থেকে শতকরা রূপান্তর" },
    category: "marks",
    icon: "🎯",
    popular: true,
    short: {
      en: "Convert CBSE CGPA to percentage (and back) instantly.",
      bn: "সিবিএসই সিজিপিএ সঙ্গে সঙ্গে শতকরায় (ও উল্টোটাও) বদলাও।",
    },
    intro: {
      en: "CBSE report cards show a CGPA, but most forms ask for a percentage. This converter uses the official CBSE rule — percentage = CGPA × 9.5 — to give you the exact figure, your grade band, and a reverse mode that turns a percentage back into CGPA.",
      bn: "সিবিএসই রিপোর্ট কার্ডে সিজিপিএ থাকে, কিন্তু বেশির ভাগ ফর্মে শতকরা চাওয়া হয়। এই টুলটি সিবিএসই-র নিয়ম — শতকরা = সিজিপিএ × ৯.৫ — ব্যবহার করে সঠিক মান, গ্রেড ব্যান্ড আর শতকরা থেকে সিজিপিএ বের করার উল্টো মোড দেয়।",
    },
    how: {
      en: "CBSE defines the overall percentage as your CGPA multiplied by 9.5. So a 9.2 CGPA becomes 9.2 × 9.5 = 87.4%. To reverse it, divide the percentage by 9.5. The grade band (A1, A2, …) comes from the standard CBSE grading table.",
      bn: "সিবিএসই অনুযায়ী মোট শতকরা = সিজিপিএ × ৯.৫। তাই ৯.২ সিজিপিএ হয় ৯.২ × ৯.৫ = ৮৭.৪%। উল্টোভাবে শতকরাকে ৯.৫ দিয়ে ভাগ করলে সিজিপিএ পাওয়া যায়। গ্রেড ব্যান্ড (A1, A2 …) আসে সিবিএসই গ্রেডিং টেবিল থেকে।",
    },
    keywords: [
      "cgpa to percentage",
      "cbse cgpa to percentage",
      "9.2 cgpa in percentage",
      "cgpa calculator",
      "percentage to cgpa",
    ],
    faq: [
      {
        q: { en: "What is 9.2 CGPA in percentage?", bn: "৯.২ সিজিপিএ শতকরায় কত?" },
        a: {
          en: "9.2 CGPA equals 87.4% under the CBSE formula (9.2 × 9.5).",
          bn: "সিবিএসই নিয়মে ৯.২ সিজিপিএ = ৮৭.৪% (৯.২ × ৯.৫)।",
        },
      },
      {
        q: { en: "How do I convert CGPA to percentage in CBSE?", bn: "সিবিএসই-তে সিজিপিএ থেকে শতকরা কীভাবে বের করব?" },
        a: {
          en: "Multiply your CGPA by 9.5. The result is your overall percentage.",
          bn: "তোমার সিজিপিএ-কে ৯.৫ দিয়ে গুণ করো। ফলটাই তোমার মোট শতকরা।",
        },
      },
      {
        q: { en: "How do I convert percentage to CGPA?", bn: "শতকরা থেকে সিজিপিএ কীভাবে বের করব?" },
        a: {
          en: "Divide your percentage by 9.5. For example, 85% ÷ 9.5 ≈ 8.95 CGPA.",
          bn: "তোমার শতকরাকে ৯.৫ দিয়ে ভাগ করো। যেমন ৮৫% ÷ ৯.৫ ≈ ৮.৯৫ সিজিপিএ।",
        },
      },
      {
        q: { en: "Why does CBSE use 9.5 as the multiplier?", bn: "সিবিএসই ৯.৫ গুণক ব্যবহার করে কেন?" },
        a: {
          en: "CBSE derived 9.5 from the average marks of high-scoring students across five subjects over several years.",
          bn: "কয়েক বছরের পরীক্ষায় ভালো নম্বর পাওয়া শিক্ষার্থীদের পাঁচটি বিষয়ের গড় থেকে সিবিএসই ৯.৫ সংখ্যাটি ঠিক করেছে।",
        },
      },
      {
        q: { en: "Is this the same for every subject?", bn: "এটা কি প্রতিটি বিষয়ের জন্য একই?" },
        a: {
          en: "The 9.5 rule applies to the overall CGPA. A single subject's percentage is its grade point × 9.5.",
          bn: "৯.৫ নিয়মটি মোট সিজিপিএ-র জন্য। কোনো একটি বিষয়ের শতকরা = সেই বিষয়ের গ্রেড পয়েন্ট × ৯.৫।",
        },
      },
      {
        q: { en: "Does a 10 CGPA mean 100%?", bn: "১০ সিজিপিএ মানে কি ১০০%?" },
        a: {
          en: "Yes — 10 × 9.5 = 95%. CBSE caps the formula here, so a 10 CGPA is reported as 95%.",
          bn: "১০ × ৯.৫ = ৯৫%। সিবিএসই নিয়মে ১০ সিজিপিএ ৯৫% হিসেবে দেখানো হয়।",
        },
      },
    ],
    related: ["percentage-calculator", "grade-calculator", "attendance-calculator"],
    chapterLinks: [],
  },

  {
    slug: "percentage-calculator",
    name: { en: "Marks Percentage Calculator", bn: "নম্বরের শতকরা ক্যালকুলেটর" },
    category: "marks",
    icon: "📊",
    popular: true,
    short: {
      en: "Find your percentage from marks — one subject or many.",
      bn: "নম্বর থেকে শতকরা বের করো — এক বিষয় বা অনেক বিষয়।",
    },
    intro: {
      en: "Enter the marks you scored and the total marks to get an instant percentage. Switch to multi-subject mode to add every subject, see your overall percentage, and find your strongest and weakest subjects at a glance.",
      bn: "তোমার পাওয়া নম্বর আর মোট নম্বর দিলেই সঙ্গে সঙ্গে শতকরা পাবে। মাল্টি-সাবজেক্ট মোডে প্রতিটি বিষয় যোগ করে মোট শতকরা এবং সবচেয়ে ভালো ও দুর্বল বিষয় দেখে নাও।",
    },
    how: {
      en: "Percentage = (marks obtained ÷ total marks) × 100. For many subjects, add up all the marks you scored and all the maximum marks, then divide and multiply by 100. The pass line is configurable (33% by default).",
      bn: "শতকরা = (প্রাপ্ত নম্বর ÷ মোট নম্বর) × ১০০। অনেক বিষয়ের জন্য সব প্রাপ্ত নম্বর ও সব পূর্ণমান যোগ করো, তারপর ভাগ করে ১০০ দিয়ে গুণ করো। পাশ-সীমা পাল্টানো যায় (ডিফল্ট ৩৩%)।",
    },
    keywords: [
      "percentage calculator",
      "marks percentage calculator",
      "how to calculate percentage of marks",
      "total marks percentage",
    ],
    faq: [
      {
        q: { en: "How do I calculate percentage of marks?", bn: "নম্বরের শতকরা কীভাবে বের করব?" },
        a: {
          en: "Divide the marks you scored by the total marks, then multiply by 100.",
          bn: "প্রাপ্ত নম্বরকে মোট নম্বর দিয়ে ভাগ করে ১০০ দিয়ে গুণ করো।",
        },
      },
      {
        q: { en: "How do I find the percentage across several subjects?", bn: "কয়েকটি বিষয়ের মোট শতকরা কীভাবে বের করব?" },
        a: {
          en: "Add the marks of all subjects and all the maximum marks, then divide and multiply by 100.",
          bn: "সব বিষয়ের প্রাপ্ত নম্বর ও পূর্ণমান যোগ করো, তারপর ভাগ করে ১০০ দিয়ে গুণ করো।",
        },
      },
      {
        q: { en: "What percentage is a pass in CBSE?", bn: "সিবিএসই-তে কত শতকরা পেলে পাশ?" },
        a: {
          en: "CBSE generally needs 33% to pass a subject. You can change the pass mark in the tool.",
          bn: "সিবিএসই-তে সাধারণত একটি বিষয়ে পাশ করতে ৩৩% দরকার। টুলে পাশ-সীমা বদলানো যায়।",
        },
      },
      {
        q: { en: "Does each subject need the same maximum marks?", bn: "প্রতিটি বিষয়ের পূর্ণমান কি একই হতে হবে?" },
        a: {
          en: "No. Give each subject its own maximum — the tool handles different totals correctly.",
          bn: "না। প্রতিটি বিষয়ে আলাদা পূর্ণমান দাও — টুল আলাদা পূর্ণমান ঠিকভাবে হিসাব করে।",
        },
      },
      {
        q: { en: "Can I round my percentage?", bn: "শতকরা কি রাউন্ড করা যায়?" },
        a: {
          en: "The tool shows two decimals. Round only if your school asks you to.",
          bn: "টুল দুই দশমিক পর্যন্ত দেখায়। স্কুল বললে তবেই রাউন্ড করো।",
        },
      },
    ],
    related: ["cgpa-to-percentage", "grade-calculator", "result-calculator"],
    chapterLinks: [],
  },

  {
    slug: "attendance-calculator",
    name: { en: "Attendance Percentage Calculator", bn: "উপস্থিতির শতকরা ক্যালকুলেটর" },
    category: "marks",
    icon: "🗓️",
    popular: true,
    short: {
      en: "Check your attendance % and how many classes to reach 75%.",
      bn: "উপস্থিতির শতকরা আর ৭৫% ছুঁতে কত ক্লাস লাগবে দেখো।",
    },
    intro: {
      en: "Enter the number of classes held and how many you attended to see your attendance percentage. Then set a target (75% by default) to find out exactly how many classes you must attend next — or how many you can still afford to miss.",
      bn: "কত ক্লাস হয়েছে আর তুমি কতটায় ছিলে দিলেই উপস্থিতির শতকরা দেখা যাবে। তারপর একটি লক্ষ্য (ডিফল্ট ৭৫%) দিয়ে জেনে নাও আর কতগুলো ক্লাস করতেই হবে — অথবা আর কতগুলো বাদ দেওয়া যাবে।",
    },
    how: {
      en: "Attendance % = (classes attended ÷ classes held) × 100. To reach a target t, you must attend x classes where (attended + x) ÷ (held + x) ≥ t. If you are already above the target, you can miss y classes while attended ÷ (held + y) stays ≥ t. The tool shows the numbers behind each answer.",
      bn: "উপস্থিতি % = (উপস্থিত ক্লাস ÷ মোট ক্লাস) × ১০০। লক্ষ্য t ছুঁতে এমন x ক্লাস করতে হবে যেখানে (উপস্থিত + x) ÷ (মোট + x) ≥ t। আগেই লক্ষ্যের উপরে থাকলে এমন y ক্লাস বাদ দেওয়া যায় যেখানে উপস্থিত ÷ (মোট + y) ≥ t থাকে। টুল প্রতিটি উত্তরের হিসাব দেখায়।",
    },
    keywords: [
      "attendance calculator",
      "attendance percentage calculator",
      "75 percent attendance calculator",
      "how many classes can i miss",
    ],
    faq: [
      {
        q: { en: "Is 75% attendance compulsory in CBSE?", bn: "সিবিএসই-তে কি ৭৫% উপস্থিতি বাধ্যতামূলক?" },
        a: {
          en: "CBSE generally requires 75% attendance to sit board exams, with limited medical exemptions. Always confirm your school's rule.",
          bn: "সিবিএসই-তে বোর্ড পরীক্ষায় বসতে সাধারণত ৭৫% উপস্থিতি দরকার, কিছু মেডিক্যাল ছাড় থাকে। স্কুলের নিয়ম যাচাই করে নিও।",
        },
      },
      {
        q: { en: "How do I calculate attendance percentage?", bn: "উপস্থিতির শতকরা কীভাবে বের করব?" },
        a: {
          en: "Divide the classes you attended by the classes held, then multiply by 100.",
          bn: "উপস্থিত ক্লাসকে মোট ক্লাস দিয়ে ভাগ করে ১০০ দিয়ে গুণ করো।",
        },
      },
      {
        q: { en: "How many classes must I attend to reach 75%?", bn: "৭৫% ছুঁতে আর কত ক্লাস করতে হবে?" },
        a: {
          en: "Enter your numbers and the tool computes the exact count of consecutive classes you must attend.",
          bn: "তোমার সংখ্যা দাও — টুল ঠিক কতগুলো পরপর ক্লাস করতে হবে তা বলে দেবে।",
        },
      },
      {
        q: { en: "How many classes can I miss and stay above 75%?", bn: "৭৫%-এর উপরে থেকে কতগুলো ক্লাস বাদ দিতে পারি?" },
        a: {
          en: "If you are already above the target, the tool shows the maximum classes you can miss safely.",
          bn: "তুমি আগেই লক্ষ্যের উপরে থাকলে টুল নিরাপদে কতগুলো ক্লাস বাদ দেওয়া যায় তা দেখায়।",
        },
      },
      {
        q: { en: "Does attendance affect my marks?", bn: "উপস্থিতি কি নম্বরে প্রভাব ফেলে?" },
        a: {
          en: "It usually decides exam eligibility rather than marks, but low attendance can block you from sitting exams.",
          bn: "এটি সাধারণত নম্বরের চেয়ে পরীক্ষায় বসার যোগ্যতা ঠিক করে, তবে কম উপস্থিতি পরীক্ষায় বসা আটকে দিতে পারে।",
        },
      },
    ],
    related: ["percentage-calculator", "cgpa-to-percentage", "exam-countdown"],
    chapterLinks: [],
  },

  {
    slug: "age-calculator",
    name: { en: "School Admission Age Calculator", bn: "স্কুল ভর্তির বয়স ক্যালকুলেটর" },
    category: "school",
    icon: "🎂",
    short: {
      en: "Find a child's exact age on the cutoff date and likely class.",
      bn: "কাট-অফ তারিখে শিশুর সঠিক বয়স ও সম্ভাব্য শ্রেণি বের করো।",
    },
    intro: {
      en: "Enter a date of birth and an admission cutoff date to see the child's exact age in years, months and days — and the class they would commonly be eligible for. Age norms vary by state and school, so treat the class as guidance and confirm with your school.",
      bn: "জন্ম তারিখ ও ভর্তির কাট-অফ তারিখ দিলে শিশুর সঠিক বয়স (বছর, মাস, দিন) এবং সাধারণত যে শ্রেণিতে ভর্তি হওয়া যায় তা দেখা যাবে। বয়সের নিয়ম রাজ্য ও স্কুলভেদে আলাদা, তাই শ্রেণিটিকে নির্দেশনা হিসেবে দেখো ও স্কুলে যাচাই করো।",
    },
    how: {
      en: "The tool counts the exact years, months and days from the date of birth to the cutoff date (presets: 31 March and 1 April of the admission year, both editable). The suggested class follows common NEP-aligned age norms — for example, a child turning 6 by the cutoff is usually ready for Class 1.",
      bn: "টুলটি জন্ম তারিখ থেকে কাট-অফ তারিখ পর্যন্ত সঠিক বছর, মাস ও দিন গোনে (প্রিসেট: ভর্তির বছরের ৩১ মার্চ ও ১ এপ্রিল, দুটোই বদলানো যায়)। সম্ভাব্য শ্রেণিটি সাধারণ এনইপি বয়স-নিয়ম অনুসরণ করে — যেমন কাট-অফের মধ্যে ৬ বছর পূর্ণ হলে সাধারণত প্রথম শ্রেণির জন্য প্রস্তুত।",
    },
    keywords: [
      "school admission age calculator",
      "age calculator for school",
      "age on cutoff date",
      "class 1 admission age",
    ],
    faq: [
      {
        q: { en: "What is the age for Class 1 admission?", bn: "প্রথম শ্রেণিতে ভর্তির বয়স কত?" },
        a: {
          en: "Under NEP, children are usually 6 years old on the cutoff date for Class 1, but states and schools differ.",
          bn: "এনইপি অনুযায়ী প্রথম শ্রেণির জন্য কাট-অফ তারিখে সাধারণত ৬ বছর হয়, তবে রাজ্য ও স্কুলভেদে আলাদা।",
        },
      },
      {
        q: { en: "Which cutoff date should I use?", bn: "কোন কাট-অফ তারিখ ব্যবহার করব?" },
        a: {
          en: "Many schools use 31 March or 1 April of the admission year. The tool presets both and lets you edit them.",
          bn: "অনেক স্কুল ভর্তির বছরের ৩১ মার্চ বা ১ এপ্রিল ব্যবহার করে। টুলে দুটোই প্রিসেট আছে এবং বদলানো যায়।",
        },
      },
      {
        q: { en: "Is the suggested class official?", bn: "সম্ভাব্য শ্রেণিটি কি সরকারি?" },
        a: {
          en: "No. It is general guidance only — always confirm the exact age rule with your school or board.",
          bn: "না। এটি কেবল সাধারণ নির্দেশনা — সঠিক বয়স-নিয়ম স্কুল বা বোর্ডে যাচাই করো।",
        },
      },
      {
        q: { en: "How is exact age calculated?", bn: "সঠিক বয়স কীভাবে হিসাব হয়?" },
        a: {
          en: "The tool counts complete years and months, then the leftover days, adjusting for month lengths.",
          bn: "টুলটি পূর্ণ বছর ও মাস গোনে, তারপর বাকি দিনগুলো — মাসের দৈর্ঘ্য মিলিয়ে।",
        },
      },
      {
        q: { en: "Does it handle leap years?", bn: "অধিবর্ষ কি হিসাবে ধরে?" },
        a: {
          en: "Yes. The day count uses real calendar months, so February and leap years are handled correctly.",
          bn: "হ্যাঁ। দিন গোনায় আসল ক্যালেন্ডার মাস ব্যবহার হয়, তাই ফেব্রুয়ারি ও অধিবর্ষ ঠিকভাবে ধরা হয়।",
        },
      },
    ],
    related: ["exam-countdown", "attendance-calculator", "percentage-calculator"],
    chapterLinks: [],
  },

  {
    slug: "exam-countdown",
    name: { en: "Exam Countdown", bn: "পরীক্ষার কাউন্টডাউন" },
    category: "school",
    icon: "⏳",
    short: {
      en: "Live days-to-exam countdown with study-time planning.",
      bn: "পরীক্ষা পর্যন্ত লাইভ কাউন্টডাউন আর পড়ার সময়ের পরিকল্পনা।",
    },
    intro: {
      en: "Name your exam and pick its date to see a live countdown in days, hours and minutes. The tool also reframes the time as study days left and roughly how many study hours that is, so you can plan a steady revision schedule.",
      bn: "তোমার পরীক্ষার নাম দাও আর তারিখ বেছে নাও — দিন, ঘণ্টা ও মিনিটে লাইভ কাউন্টডাউন দেখো। টুলটি সময়কে ‘পড়ার দিন’ ও আনুমানিক পড়ার ঘণ্টায় দেখায়, যাতে তুমি নিয়মিত রিভিশনের পরিকল্পনা করতে পারো।",
    },
    how: {
      en: "The countdown is simply the exam date and time minus right now. The study-time view multiplies the days left by your daily study hours (2 hours/day by default) to estimate the total revision time you have.",
      bn: "কাউন্টডাউন মানে পরীক্ষার তারিখ ও সময় থেকে এখনকার সময় বাদ। পড়ার সময় হিসাব করতে বাকি দিনগুলোকে তোমার দৈনিক পড়ার ঘণ্টা (ডিফল্ট ২ ঘণ্টা/দিন) দিয়ে গুণ করা হয়।",
    },
    keywords: [
      "exam countdown",
      "days until exam",
      "board exam countdown",
      "study days left",
    ],
    faq: [
      {
        q: { en: "Can I share my countdown?", bn: "কাউন্টডাউন কি শেয়ার করা যায়?" },
        a: {
          en: "Yes. The exam name and date are saved in the page link, so sharing the URL shares the countdown.",
          bn: "হ্যাঁ। পরীক্ষার নাম ও তারিখ লিংকে থাকে, তাই URL শেয়ার করলেই কাউন্টডাউন শেয়ার হয়।",
        },
      },
      {
        q: { en: "How many study hours do I have left?", bn: "আমার আর কত ঘণ্টা পড়ার সময় আছে?" },
        a: {
          en: "The tool multiplies your days left by your daily study hours to give an estimate you can adjust.",
          bn: "টুলটি বাকি দিনগুলোকে দৈনিক পড়ার ঘণ্টা দিয়ে গুণ করে একটি আনুমানিক হিসাব দেয়, যা বদলানো যায়।",
        },
      },
      {
        q: { en: "Does the countdown keep running?", bn: "কাউন্টডাউন কি চলতেই থাকে?" },
        a: {
          en: "Yes — it updates every second while the page is open, down to the exam moment.",
          bn: "হ্যাঁ — পেজ খোলা থাকলে প্রতি সেকেন্ডে হালনাগাদ হয়, পরীক্ষার মুহূর্ত পর্যন্ত।",
        },
      },
      {
        q: { en: "Can I print the countdown card?", bn: "কাউন্টডাউন কার্ড কি প্রিন্ট করা যায়?" },
        a: {
          en: "Yes. Use the print button for a clean card you can stick on your study wall.",
          bn: "হ্যাঁ। প্রিন্ট বোতামে পরিষ্কার একটি কার্ড পাবে, পড়ার দেয়ালে লাগিয়ে রাখতে পারো।",
        },
      },
      {
        q: { en: "What date should I use for board exams?", bn: "বোর্ড পরীক্ষার জন্য কোন তারিখ দেব?" },
        a: {
          en: "Use the official date sheet for your board. Pick your first paper's date for a revision countdown.",
          bn: "তোমার বোর্ডের সরকারি ডেট-শিট ব্যবহার করো। রিভিশনের জন্য প্রথম পরীক্ষার তারিখ বেছে নাও।",
        },
      },
    ],
    related: ["study-timer", "age-calculator", "attendance-calculator"],
    chapterLinks: [],
  },

  {
    slug: "grade-calculator",
    name: { en: "Grade Calculator (CBSE)", bn: "গ্রেড ক্যালকুলেটর (সিবিএসই)" },
    category: "marks",
    icon: "🏅",
    short: { en: "Turn marks or a percentage into a CBSE grade and point.", bn: "নম্বর বা শতকরাকে সিবিএসই গ্রেড ও পয়েন্টে বদলাও।" },
    intro: {
      en: "Enter your marks or percentage to get the matching CBSE grade (A1–E) and its grade point, with the full grading table shown. Switch to subject-wise mode to turn each subject's grade point into an overall CGPA.",
      bn: "তোমার নম্বর বা শতকরা দিয়ে সিবিএসই গ্রেড (A1–E) ও তার গ্রেড পয়েন্ট পাও, সঙ্গে পুরো গ্রেডিং টেবিল। বিষয়ভিত্তিক মোডে প্রতিটি বিষয়ের গ্রেড পয়েন্ট থেকে মোট সিজিপিএ বের করো।",
    },
    how: {
      en: "CBSE assigns a grade band from your percentage: 91–100 is A1 (10 points), 81–90 is A2 (9), and so on down to E. For subject-wise CGPA, the tool averages the grade points of all subjects.",
      bn: "সিবিএসই শতকরা থেকে গ্রেড ব্যান্ড দেয়: ৯১–১০০ হলে A1 (১০ পয়েন্ট), ৮১–৯০ হলে A2 (৯), এভাবে E পর্যন্ত। বিষয়ভিত্তিক সিজিপিএ-র জন্য টুল সব বিষয়ের গ্রেড পয়েন্টের গড় নেয়।",
    },
    keywords: ["cbse grade calculator", "grade point calculator", "marks to grade", "cgpa from grades"],
    faq: [
      { q: { en: "How is a CBSE grade calculated?", bn: "সিবিএসই গ্রেড কীভাবে হিসাব হয়?" }, a: { en: "Your percentage maps to a band: 91–100 = A1, 81–90 = A2, and so on.", bn: "তোমার শতকরা একটি ব্যান্ডে পড়ে: ৯১–১০০ = A1, ৮১–৯০ = A2, ইত্যাদি।" } },
      { q: { en: "What is the grade point for A1?", bn: "A1-এর গ্রেড পয়েন্ট কত?" }, a: { en: "A1 carries a grade point of 10 under the CBSE scale.", bn: "সিবিএসই স্কেলে A1-এর গ্রেড পয়েন্ট ১০।" } },
      { q: { en: "How do I get CGPA from grades?", bn: "গ্রেড থেকে সিজিপিএ কীভাবে পাব?" }, a: { en: "Average the grade points of your main subjects — that is your CGPA.", bn: "তোমার মূল বিষয়গুলোর গ্রেড পয়েন্টের গড় নাও — সেটাই সিজিপিএ।" } },
      { q: { en: "What is the lowest passing grade?", bn: "পাশের সর্বনিম্ন গ্রেড কোনটি?" }, a: { en: "Grade D (33–40%) is the lowest pass; below 33% is E.", bn: "গ্রেড D (৩৩–৪০%) সর্বনিম্ন পাশ; ৩৩%-এর নিচে E।" } },
      { q: { en: "Can grade points exceed 10?", bn: "গ্রেড পয়েন্ট কি ১০-এর বেশি হতে পারে?" }, a: { en: "No. 10 is the maximum grade point in the CBSE system.", bn: "না। সিবিএসই-তে সর্বোচ্চ গ্রেড পয়েন্ট ১০।" } },
    ],
    related: ["cgpa-to-percentage", "percentage-calculator", "result-calculator"],
    chapterLinks: [],
  },

  {
    slug: "study-timer",
    name: { en: "Study Timer (Pomodoro)", bn: "পড়ার টাইমার (পোমোডোরো)" },
    category: "school",
    icon: "🍅",
    short: { en: "Focus in 25-minute sprints with short and long breaks.", bn: "২৫ মিনিটের মনোযোগ আর ছোট-বড় বিরতিতে পড়ো।" },
    intro: {
      en: "A simple Pomodoro timer to help you study with focus: work for 25 minutes, take a 5-minute break, and a longer break after four sessions. Durations are fully adjustable, with a gentle chime and a session counter.",
      bn: "মন দিয়ে পড়ার জন্য সহজ পোমোডোরো টাইমার: ২৫ মিনিট পড়ো, ৫ মিনিট বিরতি, আর চারটি সেশনের পর বড় বিরতি। সময় বদলানো যায়, সঙ্গে নরম ঘণ্টা ও সেশন গণনা।",
    },
    how: {
      en: "The Pomodoro method breaks study into focused sprints separated by short rests, which helps concentration and reduces tiredness. This timer chimes at the end of each phase and counts how many focus sessions you finish.",
      bn: "পোমোডোরো পদ্ধতি পড়াকে ছোট মনোযোগী ভাগে ভেঙে মাঝে বিশ্রাম দেয়, যা মনোযোগ বাড়ায় ও ক্লান্তি কমায়। এই টাইমার প্রতিটি ধাপ শেষে ঘণ্টা বাজায় ও কতগুলো সেশন শেষ করলে তা গোনে।",
    },
    keywords: ["pomodoro timer", "study timer", "focus timer", "25 minute timer"],
    faq: [
      { q: { en: "What is the Pomodoro technique?", bn: "পোমোডোরো কৌশল কী?" }, a: { en: "Study for 25 minutes, rest for 5, and take a longer break after four rounds.", bn: "২৫ মিনিট পড়ো, ৫ মিনিট বিশ্রাম, আর চার রাউন্ড পর বড় বিরতি নাও।" } },
      { q: { en: "Can I change the timer lengths?", bn: "টাইমারের সময় কি বদলানো যায়?" }, a: { en: "Yes — open ‘Customise durations’ to set your own focus and break times.", bn: "হ্যাঁ — ‘সময় বদলাও’ খুলে নিজের মতো সময় ঠিক করো।" } },
      { q: { en: "Does it make a sound?", bn: "এটা কি শব্দ করে?" }, a: { en: "A gentle chime plays at the end of each session, generated in your browser.", bn: "প্রতিটি সেশন শেষে একটি নরম ঘণ্টা বাজে, যা ব্রাউজারেই তৈরি হয়।" } },
      { q: { en: "Will my session count be saved?", bn: "সেশন গণনা কি সংরক্ষিত হবে?" }, a: { en: "It counts during your visit but resets if you reload — nothing is stored.", bn: "তোমার ভিজিটের সময় গোনে, রিলোড করলে শূন্য হয় — কিছু সংরক্ষণ হয় না।" } },
      { q: { en: "Why take breaks while studying?", bn: "পড়ার ফাঁকে বিরতি কেন?" }, a: { en: "Short rests refresh your attention so you remember more and tire less.", bn: "ছোট বিশ্রাম মনোযোগ চাঙ্গা করে, তাই বেশি মনে থাকে ও কম ক্লান্ত লাগে।" } },
    ],
    related: ["exam-countdown", "age-calculator", "mean-median-mode"],
    chapterLinks: [],
  },

  {
    slug: "fraction-calculator",
    name: { en: "Fraction Calculator", bn: "ভগ্নাংশ ক্যালকুলেটর" },
    category: "maths",
    icon: "½",
    short: { en: "Add, subtract, multiply, divide fractions — with steps.", bn: "ভগ্নাংশ যোগ-বিয়োগ-গুণ-ভাগ — ধাপে ধাপে।" },
    intro: {
      en: "Work with two fractions, including mixed numbers, and see every step — the LCM, the conversion and the final simplification. There's a simplify-only mode too, because on a learning site the working is the whole point.",
      bn: "দুটি ভগ্নাংশ (মিশ্র সংখ্যা সহ) নিয়ে কাজ করো এবং প্রতিটি ধাপ দেখো — লসাগু, রূপান্তর ও চূড়ান্ত সরলীকরণ। শুধু সরল করার মোডও আছে, কারণ শেখার সাইটে ধাপগুলোই আসল।",
    },
    how: {
      en: "To add or subtract, the tool finds the LCM of the denominators and rewrites both fractions over it. To multiply, numerators and denominators multiply across; to divide, it multiplies by the reciprocal. Every answer is reduced to lowest terms.",
      bn: "যোগ বা বিয়োগে টুল হরগুলোর লসাগু বের করে দুটি ভগ্নাংশকে সেই হরে লেখে। গুণে লব ও হর আড়াআড়ি গুণ হয়; ভাগে বিপরীত ভগ্নাংশ দিয়ে গুণ হয়। প্রতিটি উত্তর সরলতম আকারে আনা হয়।",
    },
    keywords: ["fraction calculator", "add fractions", "mixed number calculator", "simplify fractions"],
    faq: [
      { q: { en: "How do I add two fractions?", bn: "দুটি ভগ্নাংশ কীভাবে যোগ করব?" }, a: { en: "Make the denominators equal using their LCM, then add the numerators.", bn: "লসাগু দিয়ে হর সমান করো, তারপর লব যোগ করো।" } },
      { q: { en: "Can it handle mixed numbers?", bn: "মিশ্র সংখ্যা কি চলবে?" }, a: { en: "Yes — fill the whole-number box and the tool converts it for you.", bn: "হ্যাঁ — পূর্ণ-সংখ্যার ঘর ভরো, টুল নিজেই রূপান্তর করবে।" } },
      { q: { en: "How do I divide fractions?", bn: "ভগ্নাংশ কীভাবে ভাগ করব?" }, a: { en: "Multiply the first fraction by the reciprocal (flip) of the second.", bn: "প্রথম ভগ্নাংশকে দ্বিতীয়টির বিপরীত (উল্টানো) দিয়ে গুণ করো।" } },
      { q: { en: "What does ‘simplify’ mean?", bn: "‘সরল করা’ মানে কী?" }, a: { en: "Divide the numerator and denominator by their HCF to get the smallest form.", bn: "লব ও হরকে তাদের গসাগু দিয়ে ভাগ করে ক্ষুদ্রতম রূপ পাওয়া।" } },
      { q: { en: "Why show the steps?", bn: "ধাপ দেখানো কেন?" }, a: { en: "Seeing each step helps you learn the method, not just copy the answer.", bn: "প্রতিটি ধাপ দেখলে পদ্ধতি শেখা যায়, শুধু উত্তর টোকা নয়।" } },
    ],
    related: ["lcm-hcf-calculator", "mean-median-mode", "percentage-calculator"],
    chapterLinks: [
      { classId: "6", subject: "maths", slug: "fractions", board: "cbse", label: { en: "Class 6 Maths — Fractions", bn: "ষষ্ঠ অঙ্ক — ভগ্নাংশ" } },
      { classId: "7", subject: "maths", slug: "working-with-fractions", board: "cbse", label: { en: "Class 7 Maths — Working with Fractions", bn: "সপ্তম অঙ্ক — ভগ্নাংশ নিয়ে কাজ" } },
      { classId: "8", subject: "maths", slug: "fractions-in-disguise", board: "cbse", label: { en: "Class 8 Maths — Fractions in Disguise", bn: "অষ্টম অঙ্ক — ছদ্মবেশী ভগ্নাংশ" } },
    ],
  },

  {
    slug: "lcm-hcf-calculator",
    name: { en: "LCM & HCF Calculator", bn: "লসাগু ও গসাগু ক্যালকুলেটর" },
    category: "maths",
    icon: "🔢",
    short: { en: "Find LCM and HCF with prime-factor and division methods.", bn: "মৌলিক উৎপাদক ও ভাগ পদ্ধতিতে লসাগু-গসাগু বের করো।" },
    intro: {
      en: "Enter two to five numbers to get their LCM and HCF, shown two ways: a prime-factorization breakdown and the step-by-step division (ladder) method. Toggle between them to learn whichever your class uses.",
      bn: "দুই থেকে পাঁচটি সংখ্যা দিয়ে তাদের লসাগু ও গসাগু পাও, দুইভাবে দেখানো: মৌলিক উৎপাদকে বিশ্লেষণ ও ধাপে ধাপে ভাগ (মই) পদ্ধতি। তোমার ক্লাসে যেটা চলে সেটা শিখতে টগল করো।",
    },
    how: {
      en: "Break each number into prime factors. The HCF is the product of the common primes taken to their lowest powers; the LCM is the product of all primes taken to their highest powers. The division method divides all numbers by a shared prime until each becomes 1.",
      bn: "প্রতিটি সংখ্যাকে মৌলিক উৎপাদকে ভাঙো। গসাগু = সাধারণ মৌলিকগুলোর সর্বনিম্ন ঘাতের গুণফল; লসাগু = সব মৌলিকের সর্বোচ্চ ঘাতের গুণফল। ভাগ পদ্ধতিতে সব সংখ্যাকে একটি সাধারণ মৌলিক দিয়ে ভাগ করা হয় যতক্ষণ না প্রতিটি ১ হয়।",
    },
    keywords: ["lcm calculator", "hcf calculator", "gcd calculator", "lcm and hcf with steps"],
    faq: [
      { q: { en: "What is the difference between LCM and HCF?", bn: "লসাগু ও গসাগুর পার্থক্য কী?" }, a: { en: "HCF is the largest number that divides all of them; LCM is the smallest number all of them divide.", bn: "গসাগু = যে বৃহত্তম সংখ্যা সবগুলোকে ভাগ করে; লসাগু = যে ক্ষুদ্রতম সংখ্যাকে সবগুলো ভাগ করে।" } },
      { q: { en: "How do I find HCF by prime factors?", bn: "মৌলিক উৎপাদকে গসাগু কীভাবে বের করব?" }, a: { en: "Multiply the primes common to every number, each at its lowest power.", bn: "প্রতিটি সংখ্যায় থাকা সাধারণ মৌলিকগুলো সর্বনিম্ন ঘাতে গুণ করো।" } },
      { q: { en: "What is the division method?", bn: "ভাগ পদ্ধতি কী?" }, a: { en: "Keep dividing all the numbers by a common prime until each becomes 1.", bn: "সব সংখ্যাকে একটি সাধারণ মৌলিক দিয়ে ভাগ করতে থাকো যতক্ষণ না প্রতিটি ১ হয়।" } },
      { q: { en: "Is LCM × HCF related to the numbers?", bn: "লসাগু × গসাগু কি সংখ্যাগুলোর সঙ্গে সম্পর্কিত?" }, a: { en: "For two numbers, LCM × HCF equals the product of the two numbers.", bn: "দুটি সংখ্যার ক্ষেত্রে লসাগু × গসাগু = সংখ্যা দুটির গুণফল।" } },
      { q: { en: "How many numbers can I enter?", bn: "কতগুলো সংখ্যা দিতে পারি?" }, a: { en: "Between two and five whole numbers works best for clear steps.", bn: "পরিষ্কার ধাপের জন্য দুই থেকে পাঁচটি পূর্ণসংখ্যা সবচেয়ে ভালো।" } },
    ],
    related: ["fraction-calculator", "mean-median-mode", "simple-interest-calculator"],
    chapterLinks: [
      { classId: "7", subject: "maths", slug: "number-play", board: "cbse", label: { en: "Class 7 Maths — Number Play", bn: "সপ্তম অঙ্ক — সংখ্যা নিয়ে খেলা" } },
      { classId: "8", subject: "maths", slug: "number-play", board: "cbse", label: { en: "Class 8 Maths — Number Play", bn: "অষ্টম অঙ্ক — সংখ্যা নিয়ে খেলা" } },
      { classId: "5", subject: "maths", slug: "multiples-factors", board: "wbbpe", label: { en: "Class 5 Maths — Multiples & Factors", bn: "পঞ্চম অঙ্ক — গুণিতক ও উৎপাদক" } },
    ],
  },

  {
    slug: "mean-median-mode",
    name: { en: "Mean, Median & Mode Calculator", bn: "গড়, মধ্যমা ও প্রচুরক ক্যালকুলেটর" },
    category: "maths",
    icon: "📈",
    short: { en: "Mean, median, mode, range and more from a list.", bn: "একটি তালিকা থেকে গড়, মধ্যমা, প্রচুরক, পরিসর ও আরও।" },
    intro: {
      en: "Type or paste a list of numbers to get the mean, median, mode, range, count and sum at once. The sorted list is shown with the median highlighted, and each measure comes with a plain-language explanation.",
      bn: "সংখ্যার একটি তালিকা টাইপ বা পেস্ট করো — একসঙ্গে গড়, মধ্যমা, প্রচুরক, পরিসর, সংখ্যা ও যোগফল পাও। সাজানো তালিকায় মধ্যমা চিহ্নিত থাকে, আর প্রতিটি মানের সহজ ব্যাখ্যা দেওয়া হয়।",
    },
    how: {
      en: "Mean is the sum divided by the count. Median is the middle value of the sorted list (the average of the two middle values if the count is even). Mode is the most frequent value, and range is the largest minus the smallest.",
      bn: "গড় = যোগফল ÷ সংখ্যা। মধ্যমা = সাজানো তালিকার মাঝের মান (সংখ্যা জোড় হলে মাঝের দুটির গড়)। প্রচুরক = সবচেয়ে বেশি বার আসা মান, আর পরিসর = সর্বোচ্চ − সর্বনিম্ন।",
    },
    keywords: ["mean median mode calculator", "average calculator", "range calculator", "statistics calculator"],
    faq: [
      { q: { en: "How do I find the mean?", bn: "গড় কীভাবে বের করব?" }, a: { en: "Add all the numbers and divide by how many there are.", bn: "সব সংখ্যা যোগ করে কয়টি আছে তা দিয়ে ভাগ করো।" } },
      { q: { en: "How is the median found?", bn: "মধ্যমা কীভাবে বের হয়?" }, a: { en: "Sort the numbers and pick the middle one; average the two middle ones if the count is even.", bn: "সংখ্যাগুলো সাজিয়ে মাঝেরটা নাও; জোড় হলে মাঝের দুটির গড় নাও।" } },
      { q: { en: "Can there be more than one mode?", bn: "একাধিক প্রচুরক কি হতে পারে?" }, a: { en: "Yes — if several values tie for the highest frequency, all are modes.", bn: "হ্যাঁ — একাধিক মান সমান সর্বোচ্চবার এলে সবগুলোই প্রচুরক।" } },
      { q: { en: "What if every number appears once?", bn: "প্রতিটি সংখ্যা একবার করে এলে?" }, a: { en: "Then there is no mode — the tool shows ‘none’.", bn: "তখন কোনো প্রচুরক নেই — টুল ‘নেই’ দেখায়।" } },
      { q: { en: "What is the range?", bn: "পরিসর কী?" }, a: { en: "The difference between the largest and the smallest value.", bn: "সর্বোচ্চ ও সর্বনিম্ন মানের পার্থক্য।" } },
    ],
    related: ["fraction-calculator", "lcm-hcf-calculator", "percentage-calculator"],
    chapterLinks: [
      { classId: "6", subject: "maths", slug: "data-handling-and-presentation", board: "cbse", label: { en: "Class 6 Maths — Data Handling", bn: "ষষ্ঠ অঙ্ক — তথ্য বিন্যাস" } },
      { classId: "9", subject: "maths", slug: "statistics", board: "cbse", label: { en: "Class 9 Maths — Statistics", bn: "নবম অঙ্ক — পরিসংখ্যান" } },
      { classId: "10", subject: "maths", slug: "statistics", board: "cbse", label: { en: "Class 10 Maths — Statistics", bn: "দশম অঙ্ক — পরিসংখ্যান" } },
    ],
  },

  {
    slug: "simple-interest-calculator",
    name: { en: "Simple Interest & Profit–Loss Calculator", bn: "সরল সুদ ও লাভ-ক্ষতি ক্যালকুলেটর" },
    category: "maths",
    icon: "💰",
    short: { en: "Solve simple interest or profit/loss with full steps.", bn: "ধাপে ধাপে সরল সুদ বা লাভ-ক্ষতি বের করো।" },
    intro: {
      en: "Two calculators in one. The simple-interest tab solves for whichever value you leave blank — principal, rate, time or interest. The profit-and-loss tab turns cost and selling price into the profit or loss amount and percentage, with the steps shown.",
      bn: "একটিতে দুটি ক্যালকুলেটর। সরল সুদ ট্যাবে তুমি যেটা খালি রাখবে সেটা বের করে — আসল, হার, সময় বা সুদ। লাভ-ক্ষতি ট্যাবে ক্রয়মূল্য ও বিক্রয়মূল্য থেকে লাভ বা ক্ষতির পরিমাণ ও শতকরা বের হয়, ধাপসহ।",
    },
    how: {
      en: "Simple interest is SI = P × R × T ÷ 100, so any one of P, R, T or SI can be found from the other three. For profit and loss, profit or loss = |SP − CP|, and the percentage is that amount divided by the cost price, times 100.",
      bn: "সরল সুদ = P × R × T ÷ ১০০, তাই P, R, T বা SI-এর যেকোনো একটি বাকি তিনটি থেকে বের করা যায়। লাভ-ক্ষতির জন্য লাভ বা ক্ষতি = |SP − CP|, আর শতকরা = সেই পরিমাণ ÷ ক্রয়মূল্য × ১০০।",
    },
    keywords: ["simple interest calculator", "profit and loss calculator", "si formula", "profit percentage"],
    faq: [
      { q: { en: "What is the simple interest formula?", bn: "সরল সুদের সূত্র কী?" }, a: { en: "SI = P × R × T ÷ 100, where P is principal, R the yearly rate and T the time in years.", bn: "SI = P × R × T ÷ ১০০, যেখানে P আসল, R বছরের হার, T বছরে সময়।" } },
      { q: { en: "Can I find the rate or time?", bn: "হার বা সময় কি বের করা যায়?" }, a: { en: "Yes — fill any three boxes and leave the unknown blank; the tool solves it.", bn: "হ্যাঁ — যেকোনো তিনটি ভরো, অজানাটা খালি রাখো; টুল বের করবে।" } },
      { q: { en: "How is profit percentage calculated?", bn: "লাভের শতকরা কীভাবে হিসাব হয়?" }, a: { en: "Profit ÷ cost price × 100. Loss percentage uses the same with the loss amount.", bn: "লাভ ÷ ক্রয়মূল্য × ১০০। ক্ষতির শতকরাও একইভাবে, ক্ষতির পরিমাণ দিয়ে।" } },
      { q: { en: "What is the amount in simple interest?", bn: "সরল সুদে মোট পরিমাণ কী?" }, a: { en: "The amount is the principal plus the interest.", bn: "মোট পরিমাণ = আসল + সুদ।" } },
      { q: { en: "Is profit always when SP is higher?", bn: "বিক্রয়মূল্য বেশি হলেই কি লাভ?" }, a: { en: "Yes — if selling price is above cost price it's a profit; below it, a loss.", bn: "হ্যাঁ — বিক্রয়মূল্য ক্রয়মূল্যের বেশি হলে লাভ; কম হলে ক্ষতি।" } },
    ],
    related: ["percentage-calculator", "fraction-calculator", "unit-converter"],
    chapterLinks: [
      { classId: "8", subject: "maths", slug: "proportional-reasoning-1", board: "cbse", label: { en: "Class 8 Maths — Proportional Reasoning 1", bn: "অষ্টম অঙ্ক — অনুপাত ১" } },
      { classId: "8", subject: "maths", slug: "proportional-reasoning-2", board: "cbse", label: { en: "Class 8 Maths — Proportional Reasoning 2", bn: "অষ্টম অঙ্ক — অনুপাত ২" } },
    ],
  },

  {
    slug: "unit-converter",
    name: { en: "Unit Converter (Science)", bn: "একক রূপান্তর (বিজ্ঞান)" },
    category: "maths",
    icon: "📏",
    short: { en: "Convert length, mass, time, temperature and more.", bn: "দৈর্ঘ্য, ভর, সময়, তাপমাত্রা ও আরও রূপান্তর করো।" },
    intro: {
      en: "Convert between the units you meet in Class 6–10 science and maths — length, mass, time, temperature, area, volume and speed. Conversions are instant and the factor is always shown, so you learn the relationship, not just the answer.",
      bn: "ষষ্ঠ থেকে দশম শ্রেণির বিজ্ঞান ও অঙ্কে যে এককগুলো আসে — দৈর্ঘ্য, ভর, সময়, তাপমাত্রা, ক্ষেত্রফল, আয়তন ও দ্রুতি — সেগুলোর মধ্যে রূপান্তর করো। রূপান্তর সঙ্গে সঙ্গে হয় ও গুণনীয়ক দেখানো হয়, যাতে শুধু উত্তর নয়, সম্পর্কটাও শেখা যায়।",
    },
    how: {
      en: "Most units convert through a base unit — for example 1 km = 1000 m, so 3.5 km = 3500 m. Temperature uses formulas instead: °F = °C × 9/5 + 32, and K = °C + 273.15.",
      bn: "বেশির ভাগ একক একটি ভিত্তি-এককের মাধ্যমে রূপান্তরিত হয় — যেমন ১ কিমি = ১০০০ মিটার, তাই ৩.৫ কিমি = ৩৫০০ মিটার। তাপমাত্রায় সূত্র লাগে: °F = °C × ৯/৫ + ৩২, আর K = °C + ২৭৩.১৫।",
    },
    keywords: ["unit converter", "length converter", "temperature converter", "km to m", "celsius to fahrenheit"],
    faq: [
      { q: { en: "How do I convert km to m?", bn: "কিমি থেকে মিটার কীভাবে করব?" }, a: { en: "Multiply by 1000, because 1 km = 1000 m.", bn: "১০০০ দিয়ে গুণ করো, কারণ ১ কিমি = ১০০০ মিটার।" } },
      { q: { en: "How do I convert Celsius to Fahrenheit?", bn: "সেলসিয়াস থেকে ফারেনহাইট কীভাবে করব?" }, a: { en: "Use °F = °C × 9/5 + 32.", bn: "ব্যবহার করো °F = °C × ৯/৫ + ৩২।" } },
      { q: { en: "What is the base unit of mass here?", bn: "এখানে ভরের ভিত্তি-একক কী?" }, a: { en: "Grams — mg, g, kg and tonnes all convert through grams.", bn: "গ্রাম — mg, g, kg ও টন সবই গ্রামের মাধ্যমে রূপান্তরিত হয়।" } },
      { q: { en: "How do I change km/h to m/s?", bn: "কিমি/ঘণ্টা থেকে মি/সেকেন্ড কীভাবে করব?" }, a: { en: "Multiply by 5/18 (that is, 1000 ÷ 3600).", bn: "৫/১৮ দিয়ে গুণ করো (অর্থাৎ ১০০০ ÷ ৩৬০০)।" } },
      { q: { en: "Is Kelvin ever negative?", bn: "কেলভিন কি কখনো ঋণাত্মক হয়?" }, a: { en: "No — 0 K is the lowest possible temperature.", bn: "না — ০ K সম্ভাব্য সর্বনিম্ন তাপমাত্রা।" } },
    ],
    related: ["simple-interest-calculator", "mean-median-mode", "fraction-calculator"],
    chapterLinks: [
      { classId: "6", subject: "science", slug: "measurement-of-length-and-motion", board: "cbse", label: { en: "Class 6 Science — Measurement of Length & Motion", bn: "ষষ্ঠ বিজ্ঞান — দৈর্ঘ্য ও গতি পরিমাপ" } },
      { classId: "7", subject: "science", slug: "measurement-of-time-and-motion", board: "cbse", label: { en: "Class 7 Science — Measurement of Time & Motion", bn: "সপ্তম বিজ্ঞান — সময় ও গতি পরিমাপ" } },
      { classId: "6", subject: "science", slug: "temperature-and-its-measurement", board: "cbse", label: { en: "Class 6 Science — Temperature & its Measurement", bn: "ষষ্ঠ বিজ্ঞান — তাপমাত্রা ও তার পরিমাপ" } },
    ],
  },

  {
    slug: "result-calculator",
    name: { en: "Class Result Calculator", bn: "ক্লাস রেজাল্ট ক্যালকুলেটর" },
    category: "teacher",
    icon: "🧑‍🏫",
    short: { en: "Paste a class's marks for instant results and a CSV.", bn: "ক্লাসের নম্বর পেস্ট করে তৎক্ষণাৎ ফল ও CSV পাও।" },
    intro: {
      en: "Paste a whole class's marks — one student per line as ‘Name, Marks’ — and get each student's percentage and grade, the class average, the highest and lowest, the pass count and a grade-distribution chart. Export a CSV or print a clean result sheet.",
      bn: "পুরো ক্লাসের নম্বর পেস্ট করো — প্রতি লাইনে একজন ‘নাম, নম্বর’ — আর পাও প্রতিটি শিক্ষার্থীর শতকরা ও গ্রেড, ক্লাসের গড়, সর্বোচ্চ-সর্বনিম্ন, পাশের সংখ্যা ও গ্রেড বণ্টনের চার্ট। CSV ডাউনলোড করো বা পরিষ্কার রেজাল্ট শিট প্রিন্ট করো।",
    },
    how: {
      en: "The tool reads each ‘Name, Marks’ line (a comma, tab or spaces all work), converts marks to a percentage against the maximum you set, and assigns a CBSE grade. It then totals the class: average, highest, lowest, pass count and how many fall in each grade.",
      bn: "টুলটি প্রতিটি ‘নাম, নম্বর’ লাইন পড়ে (কমা, ট্যাব বা স্পেস চলবে), তুমি দেওয়া পূর্ণমানের সাপেক্ষে নম্বরকে শতকরায় বদলায় ও সিবিএসই গ্রেড দেয়। তারপর ক্লাসের হিসাব করে: গড়, সর্বোচ্চ, সর্বনিম্ন, পাশ সংখ্যা ও কোন গ্রেডে কতজন।",
    },
    keywords: ["class result calculator", "bulk marks calculator", "result sheet maker", "grade distribution"],
    faq: [
      { q: { en: "What format should the marks be in?", bn: "নম্বর কোন ফরম্যাটে দেব?" }, a: { en: "One student per line as ‘Name, Marks’. A comma, tab or spaces between them all work.", bn: "প্রতি লাইনে একজন ‘নাম, নম্বর’। মাঝে কমা, ট্যাব বা স্পেস — সবই চলবে।" } },
      { q: { en: "Can I download the results?", bn: "ফলাফল কি ডাউনলোড করা যায়?" }, a: { en: "Yes — use the CSV button to save a spreadsheet-ready file.", bn: "হ্যাঁ — CSV বোতামে স্প্রেডশিট-উপযোগী ফাইল সেভ করো।" } },
      { q: { en: "How is the grade decided?", bn: "গ্রেড কীভাবে ঠিক হয়?" }, a: { en: "Each percentage maps to the CBSE grade band (A1–E).", bn: "প্রতিটি শতকরা সিবিএসই গ্রেড ব্যান্ডে (A1–E) পড়ে।" } },
      { q: { en: "Can I change the pass mark?", bn: "পাশ নম্বর কি বদলানো যায়?" }, a: { en: "Yes — set any pass percentage; the default is 33%.", bn: "হ্যাঁ — যেকোনো পাশ শতকরা দাও; ডিফল্ট ৩৩%।" } },
      { q: { en: "Is student data uploaded anywhere?", bn: "শিক্ষার্থীর তথ্য কি কোথাও আপলোড হয়?" }, a: { en: "No — everything is computed in your browser and nothing is sent or stored.", bn: "না — সব কিছু তোমার ব্রাউজারেই হিসাব হয়, কিছু পাঠানো বা সংরক্ষণ হয় না।" } },
    ],
    related: ["question-paper-planner", "grade-calculator", "percentage-calculator"],
    chapterLinks: [],
  },

  {
    slug: "question-paper-planner",
    name: { en: "Question Paper Blueprint Planner", bn: "প্রশ্নপত্রের নকশা পরিকল্পক" },
    category: "teacher",
    icon: "📝",
    short: { en: "Design a balanced paper with section-wise marks and timing.", bn: "বিভাগভিত্তিক নম্বর ও সময়সহ সুষম প্রশ্নপত্র সাজাও।" },
    intro: {
      en: "Set a paper's total marks and duration, then add sections (like MCQ ×1, Short ×3, Long ×5). The planner checks live that the sections add up to the total, suggests a time allocation per section, and gives you a clean blueprint table to print or share.",
      bn: "প্রশ্নপত্রের মোট নম্বর ও সময় ঠিক করো, তারপর বিভাগ যোগ করো (যেমন MCQ ×১, সংক্ষিপ্ত ×৩, রচনাধর্মী ×৫)। পরিকল্পক সঙ্গে সঙ্গে দেখে নেয় বিভাগগুলোর যোগফল মোটের সমান কিনা, প্রতিটি বিভাগের জন্য সময় প্রস্তাব করে, আর প্রিন্ট বা শেয়ারের জন্য পরিষ্কার নকশা টেবিল দেয়।",
    },
    how: {
      en: "Each section's marks are its question count times the marks per question. The planner sums these and compares with the paper total, flagging any gap. Time per section is shared out in proportion to its marks, based on the total duration.",
      bn: "প্রতিটি বিভাগের নম্বর = প্রশ্ন সংখ্যা × প্রতি প্রশ্নের নম্বর। পরিকল্পক এগুলো যোগ করে মোটের সঙ্গে মেলায় ও কোনো ফারাক থাকলে দেখায়। মোট সময়ের ভিত্তিতে প্রতিটি বিভাগের সময় তার নম্বরের অনুপাতে ভাগ করা হয়।",
    },
    keywords: ["question paper blueprint", "exam paper planner", "marks distribution", "question paper format"],
    faq: [
      { q: { en: "How do I check my paper adds up?", bn: "প্রশ্নপত্রের যোগফল ঠিক আছে কিনা কীভাবে দেখব?" }, a: { en: "The planner compares the section totals with the paper total and flags any difference.", bn: "পরিকল্পক বিভাগের মোট ও পেপারের মোট মিলিয়ে ফারাক দেখায়।" } },
      { q: { en: "How is time per section suggested?", bn: "প্রতি বিভাগের সময় কীভাবে প্রস্তাব হয়?" }, a: { en: "Total minutes are shared in proportion to each section's marks.", bn: "মোট মিনিট প্রতিটি বিভাগের নম্বরের অনুপাতে ভাগ করা হয়।" } },
      { q: { en: "Can I share my blueprint?", bn: "নকশা কি শেয়ার করা যায়?" }, a: { en: "Yes — the layout is saved in the link, so sharing the URL shares the plan.", bn: "হ্যাঁ — নকশা লিংকে থাকে, তাই URL শেয়ার করলেই পরিকল্পনা শেয়ার হয়।" } },
      { q: { en: "How many sections can I add?", bn: "কতগুলো বিভাগ যোগ করা যায়?" }, a: { en: "Add as many as your paper needs — each with its own count and marks.", bn: "যত দরকার তত যোগ করো — প্রতিটির নিজস্ব সংখ্যা ও নম্বরসহ।" } },
      { q: { en: "Can I print the blueprint?", bn: "নকশা কি প্রিন্ট করা যায়?" }, a: { en: "Yes — use print for a clean blueprint table without the page chrome.", bn: "হ্যাঁ — প্রিন্ট ব্যবহার করো পরিষ্কার নকশা টেবিলের জন্য।" } },
    ],
    related: ["result-calculator", "grade-calculator", "study-timer"],
    chapterLinks: [],
  },
];

/* ------------------------------- Helpers -------------------------------- */

export function getTool(slug: string): ToolConfig | undefined {
  return TOOLS.find((t) => t.slug === slug);
}

export const toolUrl = (slug: string) => `/tools/${slug}`;

export function toolsInCategory(cat: ToolCategory): ToolConfig[] {
  return TOOLS.filter((t) => t.category === cat);
}

/** Only return related tools that actually exist (resilient across phases). */
export function relatedTools(slug: string): ToolConfig[] {
  const tool = getTool(slug);
  if (!tool) return [];
  return tool.related.map(getTool).filter((t): t is ToolConfig => Boolean(t));
}
