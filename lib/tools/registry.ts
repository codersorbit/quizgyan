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
