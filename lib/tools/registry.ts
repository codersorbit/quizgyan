import type { CategoryMeta, ToolCategory, ToolConfig } from "./types";

/* ------------------------------ Categories ------------------------------ */

export const CATEGORIES: ReadonlyArray<CategoryMeta> = [
  {
    key: "marks",
    name: { en: "Marks & Grades", hi: "अंक और ग्रेड", bn: "নম্বর ও গ্রেড" },
    blurb: {
      en: "Turn marks into percentages, CGPA and CBSE grades in one tap.",
      hi: "एक टैप में अंकों को प्रतिशत, सीजीपीए और सीबीएसई ग्रेड में बदलें।",
      bn: "এক ক্লিকে নম্বরকে শতকরা, সিজিপিএ ও সিবিএসই গ্রেডে বদলে নাও।",
    },
  },
  {
    key: "school",
    name: { en: "School Life", hi: "स्कूल जीवन", bn: "স্কুল জীবন" },
    blurb: {
      en: "Admission age, exam countdowns and focused study sessions.",
      hi: "दाखिले की उम्र, परीक्षा काउंटडाउन और मन लगाकर पढ़ाई।",
      bn: "ভর্তির বয়স, পরীক্ষার কাউন্টডাউন আর মন দিয়ে পড়ার সময়।",
    },
  },
  {
    key: "maths",
    name: { en: "Maths Helpers", hi: "गणित सहायक", bn: "অঙ্কের সহায়ক" },
    blurb: {
      en: "Step-by-step fractions, LCM/HCF, averages and more — Class 4–10.",
      hi: "चरण-दर-चरण भिन्न, ल.स./म.स., औसत और बहुत कुछ — कक्षा 4–10।",
      bn: "ধাপে ধাপে ভগ্নাংশ, লসাগু/গসাগু, গড় ও আরও — চতুর্থ থেকে দশম।",
    },
  },
  {
    key: "teacher",
    name: { en: "Teacher Tools", hi: "शिक्षक उपकरण", bn: "শিক্ষকের সরঞ্জাম" },
    blurb: {
      en: "Build class results and question-paper blueprints in minutes.",
      hi: "मिनटों में कक्षा का परिणाम और प्रश्नपत्र का खाका तैयार करें।",
      bn: "মিনিটে ক্লাসের ফল আর প্রশ্নপত্রের নকশা তৈরি করো।",
    },
  },
];

/* -------------------------------- Tools --------------------------------- */
// The hub, sitemap and related grids all read from this array.

export const TOOLS: ReadonlyArray<ToolConfig> = [
  {
    slug: "cgpa-to-percentage",
    name: { en: "CGPA to Percentage Converter", hi: "सीजीपीए से प्रतिशत कन्वर्टर", bn: "সিজিপিএ থেকে শতকরা রূপান্তর" },
    category: "marks",
    icon: "🎯",
    popular: true,
    short: {
      en: "Convert CBSE CGPA to percentage (and back) instantly.",
      hi: "सीबीएसई सीजीपीए को तुरंत प्रतिशत में (और वापस) बदलें।",
      bn: "সিবিএসই সিজিপিএ সঙ্গে সঙ্গে শতকরায় (ও উল্টোটাও) বদলাও।",
    },
    intro: {
      en: "CBSE report cards show a CGPA, but most forms ask for a percentage. This converter uses the official CBSE rule — percentage = CGPA × 9.5 — to give you the exact figure, your grade band, and a reverse mode that turns a percentage back into CGPA.",
      hi: "सीबीएसई रिपोर्ट कार्ड में सीजीपीए होता है, पर ज़्यादातर फ़ॉर्म में प्रतिशत माँगा जाता है। यह कन्वर्टर सीबीएसई के नियम — प्रतिशत = सीजीपीए × 9.5 — से सटीक मान, ग्रेड बैंड और प्रतिशत से सीजीपीए निकालने का उल्टा मोड देता है।",
      bn: "সিবিএসই রিপোর্ট কার্ডে সিজিপিএ থাকে, কিন্তু বেশির ভাগ ফর্মে শতকরা চাওয়া হয়। এই টুলটি সিবিএসই-র নিয়ম — শতকরা = সিজিপিএ × ৯.৫ — ব্যবহার করে সঠিক মান, গ্রেড ব্যান্ড আর শতকরা থেকে সিজিপিএ বের করার উল্টো মোড দেয়।",
    },
    how: {
      en: "CBSE defines the overall percentage as your CGPA multiplied by 9.5. So a 9.2 CGPA becomes 9.2 × 9.5 = 87.4%. To reverse it, divide the percentage by 9.5. The grade band (A1, A2, …) comes from the standard CBSE grading table.",
      hi: "सीबीएसई के अनुसार कुल प्रतिशत = सीजीपीए × 9.5। इसलिए 9.2 सीजीपीए = 9.2 × 9.5 = 87.4%। उल्टा निकालने के लिए प्रतिशत को 9.5 से भाग दें। ग्रेड बैंड (A1, A2 …) मानक सीबीएसई ग्रेडिंग तालिका से आता है।",
      bn: "সিবিএসই অনুযায়ী মোট শতকরা = সিজিপিএ × ৯.৫। তাই ৯.২ সিজিপিএ হয় ৯.২ × ৯.৫ = ৮৭.৪%। উল্টোভাবে শতকরাকে ৯.৫ দিয়ে ভাগ করলে সিজিপিএ পাওয়া যায়। গ্রেড ব্যান্ড (A1, A2 …) আসে সিবিএসই গ্রেডিং টেবিল থেকে।",
    },
    keywords: ["cgpa to percentage", "cbse cgpa to percentage", "9.2 cgpa in percentage", "cgpa calculator", "percentage to cgpa"],
    faq: [
      {
        q: { en: "What is 9.2 CGPA in percentage?", hi: "9.2 सीजीपीए प्रतिशत में कितना है?", bn: "৯.২ সিজিপিএ শতকরায় কত?" },
        a: { en: "9.2 CGPA equals 87.4% under the CBSE formula (9.2 × 9.5).", hi: "सीबीएसई सूत्र से 9.2 सीजीपीए = 87.4% (9.2 × 9.5)।", bn: "সিবিএসই নিয়মে ৯.২ সিজিপিএ = ৮৭.৪% (৯.২ × ৯.৫)।" },
      },
      {
        q: { en: "How do I convert CGPA to percentage in CBSE?", hi: "सीबीएसई में सीजीपीए से प्रतिशत कैसे निकालें?", bn: "সিবিএসই-তে সিজিপিএ থেকে শতকরা কীভাবে বের করব?" },
        a: { en: "Multiply your CGPA by 9.5. The result is your overall percentage.", hi: "अपने सीजीपीए को 9.5 से गुणा करें। परिणाम ही आपका कुल प्रतिशत है।", bn: "তোমার সিজিপিএ-কে ৯.৫ দিয়ে গুণ করো। ফলটাই তোমার মোট শতকরা।" },
      },
      {
        q: { en: "How do I convert percentage to CGPA?", hi: "प्रतिशत से सीजीपीए कैसे निकालें?", bn: "শতকরা থেকে সিজিপিএ কীভাবে বের করব?" },
        a: { en: "Divide your percentage by 9.5. For example, 85% ÷ 9.5 ≈ 8.95 CGPA.", hi: "अपने प्रतिशत को 9.5 से भाग दें। जैसे 85% ÷ 9.5 ≈ 8.95 सीजीपीए।", bn: "তোমার শতকরাকে ৯.৫ দিয়ে ভাগ করো। যেমন ৮৫% ÷ ৯.৫ ≈ ৮.৯৫ সিজিপিএ।" },
      },
      {
        q: { en: "Why does CBSE use 9.5 as the multiplier?", hi: "सीबीएसई 9.5 गुणक क्यों इस्तेमाल करता है?", bn: "সিবিএসই ৯.৫ গুণক ব্যবহার করে কেন?" },
        a: { en: "CBSE derived 9.5 from the average marks of high-scoring students across five subjects over several years.", hi: "सीबीएसई ने कई वर्षों में पाँच विषयों में अच्छे अंक पाने वाले छात्रों के औसत से 9.5 तय किया।", bn: "কয়েক বছরের পরীক্ষায় ভালো নম্বর পাওয়া শিক্ষার্থীদের পাঁচটি বিষয়ের গড় থেকে সিবিএসই ৯.৫ সংখ্যাটি ঠিক করেছে।" },
      },
      {
        q: { en: "Is this the same for every subject?", hi: "क्या यह हर विषय के लिए समान है?", bn: "এটা কি প্রতিটি বিষয়ের জন্য একই?" },
        a: { en: "The 9.5 rule applies to the overall CGPA. A single subject's percentage is its grade point × 9.5.", hi: "9.5 का नियम कुल सीजीपीए पर लागू होता है। किसी एक विषय का प्रतिशत = उसका ग्रेड पॉइंट × 9.5।", bn: "৯.৫ নিয়মটি মোট সিজিপিএ-র জন্য। কোনো একটি বিষয়ের শতকরা = সেই বিষয়ের গ্রেড পয়েন্ট × ৯.৫।" },
      },
      {
        q: { en: "Does a 10 CGPA mean 100%?", hi: "क्या 10 सीजीपीए का मतलब 100% है?", bn: "১০ সিজিপিএ মানে কি ১০০%?" },
        a: { en: "No — 10 × 9.5 = 95%. CBSE caps the formula here, so a 10 CGPA is reported as 95%.", hi: "नहीं — 10 × 9.5 = 95%। सीबीएसई में 10 सीजीपीए को 95% के रूप में दिखाया जाता है।", bn: "১০ × ৯.৫ = ৯৫%। সিবিএসই নিয়মে ১০ সিজিপিএ ৯৫% হিসেবে দেখানো হয়।" },
      },
    ],
    related: ["percentage-calculator", "grade-calculator", "attendance-calculator"],
    chapterLinks: [],
  },

  {
    slug: "percentage-calculator",
    name: { en: "Marks Percentage Calculator", hi: "अंक प्रतिशत कैलकुलेटर", bn: "নম্বরের শতকরা ক্যালকুলেটর" },
    category: "marks",
    icon: "📊",
    popular: true,
    short: {
      en: "Find your percentage from marks — one subject or many.",
      hi: "अंकों से प्रतिशत निकालें — एक विषय या कई।",
      bn: "নম্বর থেকে শতকরা বের করো — এক বিষয় বা অনেক বিষয়।",
    },
    intro: {
      en: "Enter the marks you scored and the total marks to get an instant percentage. Switch to multi-subject mode to add every subject, see your overall percentage, and find your strongest and weakest subjects at a glance.",
      hi: "अपने प्राप्त अंक और कुल अंक डालें और तुरंत प्रतिशत पाएँ। मल्टी-सब्जेक्ट मोड में हर विषय जोड़कर कुल प्रतिशत और अपना सबसे मज़बूत व कमज़ोर विषय एक नज़र में देखें।",
      bn: "তোমার পাওয়া নম্বর আর মোট নম্বর দিলেই সঙ্গে সঙ্গে শতকরা পাবে। মাল্টি-সাবজেক্ট মোডে প্রতিটি বিষয় যোগ করে মোট শতকরা এবং সবচেয়ে ভালো ও দুর্বল বিষয় দেখে নাও।",
    },
    how: {
      en: "Percentage = (marks obtained ÷ total marks) × 100. For many subjects, add up all the marks you scored and all the maximum marks, then divide and multiply by 100. The pass line is configurable (33% by default).",
      hi: "प्रतिशत = (प्राप्त अंक ÷ कुल अंक) × 100। कई विषयों के लिए सभी प्राप्त अंक और सभी पूर्णांक जोड़ें, फिर भाग देकर 100 से गुणा करें। पास सीमा बदली जा सकती है (डिफ़ॉल्ट 33%)।",
      bn: "শতকরা = (প্রাপ্ত নম্বর ÷ মোট নম্বর) × ১০০। অনেক বিষয়ের জন্য সব প্রাপ্ত নম্বর ও সব পূর্ণমান যোগ করো, তারপর ভাগ করে ১০০ দিয়ে গুণ করো। পাশ-সীমা পাল্টানো যায় (ডিফল্ট ৩৩%)।",
    },
    keywords: ["percentage calculator", "marks percentage calculator", "how to calculate percentage of marks", "total marks percentage"],
    faq: [
      {
        q: { en: "How do I calculate percentage of marks?", hi: "अंकों का प्रतिशत कैसे निकालें?", bn: "নম্বরের শতকরা কীভাবে বের করব?" },
        a: { en: "Divide the marks you scored by the total marks, then multiply by 100.", hi: "प्राप्त अंकों को कुल अंकों से भाग दें, फिर 100 से गुणा करें।", bn: "প্রাপ্ত নম্বরকে মোট নম্বর দিয়ে ভাগ করে ১০০ দিয়ে গুণ করো।" },
      },
      {
        q: { en: "How do I find the percentage across several subjects?", hi: "कई विषयों का कुल प्रतिशत कैसे निकालें?", bn: "কয়েকটি বিষয়ের মোট শতকরা কীভাবে বের করব?" },
        a: { en: "Add the marks of all subjects and all the maximum marks, then divide and multiply by 100.", hi: "सभी विषयों के अंक और सभी पूर्णांक जोड़ें, फिर भाग देकर 100 से गुणा करें।", bn: "সব বিষয়ের প্রাপ্ত নম্বর ও পূর্ণমান যোগ করো, তারপর ভাগ করে ১০০ দিয়ে গুণ করো।" },
      },
      {
        q: { en: "What percentage is a pass in CBSE?", hi: "सीबीएसई में पास के लिए कितना प्रतिशत चाहिए?", bn: "সিবিএসই-তে কত শতকরা পেলে পাশ?" },
        a: { en: "CBSE generally needs 33% to pass a subject. You can change the pass mark in the tool.", hi: "सीबीएसई में किसी विषय में पास के लिए आमतौर पर 33% चाहिए। टूल में पास अंक बदला जा सकता है।", bn: "সিবিএসই-তে সাধারণত একটি বিষয়ে পাশ করতে ৩৩% দরকার। টুলে পাশ-সীমা বদলানো যায়।" },
      },
      {
        q: { en: "Does each subject need the same maximum marks?", hi: "क्या हर विषय के पूर्णांक समान होने चाहिए?", bn: "প্রতিটি বিষয়ের পূর্ণমান কি একই হতে হবে?" },
        a: { en: "No. Give each subject its own maximum — the tool handles different totals correctly.", hi: "नहीं। हर विषय के अपने पूर्णांक दें — टूल अलग-अलग पूर्णांक सही ढंग से संभालता है।", bn: "না। প্রতিটি বিষয়ে আলাদা পূর্ণমান দাও — টুল আলাদা পূর্ণমান ঠিকভাবে হিসাব করে।" },
      },
      {
        q: { en: "Can I round my percentage?", hi: "क्या मैं अपना प्रतिशत राउंड कर सकता हूँ?", bn: "শতকরা কি রাউন্ড করা যায়?" },
        a: { en: "The tool shows two decimals. Round only if your school asks you to.", hi: "टूल दो दशमलव तक दिखाता है। स्कूल कहे तभी राउंड करें।", bn: "টুল দুই দশমিক পর্যন্ত দেখায়। স্কুল বললে তবেই রাউন্ড করো।" },
      },
    ],
    related: ["cgpa-to-percentage", "grade-calculator", "result-calculator"],
    chapterLinks: [],
  },

  {
    slug: "attendance-calculator",
    name: { en: "Attendance Percentage Calculator", hi: "उपस्थिति प्रतिशत कैलकुलेटर", bn: "উপস্থিতির শতকরা ক্যালকুলেটর" },
    category: "marks",
    icon: "🗓️",
    popular: true,
    short: {
      en: "Check your attendance % and how many classes to reach 75%.",
      hi: "अपनी उपस्थिति % और 75% तक पहुँचने के लिए कितनी क्लास चाहिए, देखें।",
      bn: "উপস্থিতির শতকরা আর ৭৫% ছুঁতে কত ক্লাস লাগবে দেখো।",
    },
    intro: {
      en: "Enter the number of classes held and how many you attended to see your attendance percentage. Then set a target (75% by default) to find out exactly how many classes you must attend next — or how many you can still afford to miss.",
      hi: "कुल कितनी क्लास हुईं और आप कितनी में उपस्थित रहे, यह डालें और अपनी उपस्थिति प्रतिशत देखें। फिर एक लक्ष्य (डिफ़ॉल्ट 75%) तय करें और जानें कि आगे कितनी क्लास करनी ज़रूरी हैं — या कितनी और छोड़ी जा सकती हैं।",
      bn: "কত ক্লাস হয়েছে আর তুমি কতটায় ছিলে দিলেই উপস্থিতির শতকরা দেখা যাবে। তারপর একটি লক্ষ্য (ডিফল্ট ৭৫%) দিয়ে জেনে নাও আর কতগুলো ক্লাস করতেই হবে — অথবা আর কতগুলো বাদ দেওয়া যাবে।",
    },
    how: {
      en: "Attendance % = (classes attended ÷ classes held) × 100. To reach a target t, you must attend x classes where (attended + x) ÷ (held + x) ≥ t. If you are already above the target, you can miss y classes while attended ÷ (held + y) stays ≥ t. The tool shows the numbers behind each answer.",
      hi: "उपस्थिति % = (उपस्थित क्लास ÷ कुल क्लास) × 100। लक्ष्य t पाने के लिए ऐसी x क्लास करनी होंगी जहाँ (उपस्थित + x) ÷ (कुल + x) ≥ t हो। यदि आप पहले से लक्ष्य से ऊपर हैं, तो y क्लास छोड़ सकते हैं जब तक उपस्थित ÷ (कुल + y) ≥ t रहे। टूल हर उत्तर का हिसाब दिखाता है।",
      bn: "উপস্থিতি % = (উপস্থিত ক্লাস ÷ মোট ক্লাস) × ১০০। লক্ষ্য t ছুঁতে এমন x ক্লাস করতে হবে যেখানে (উপস্থিত + x) ÷ (মোট + x) ≥ t। আগেই লক্ষ্যের উপরে থাকলে এমন y ক্লাস বাদ দেওয়া যায় যেখানে উপস্থিত ÷ (মোট + y) ≥ t থাকে। টুল প্রতিটি উত্তরের হিসাব দেখায়।",
    },
    keywords: ["attendance calculator", "attendance percentage calculator", "75 percent attendance calculator", "how many classes can i miss"],
    faq: [
      {
        q: { en: "Is 75% attendance compulsory in CBSE?", hi: "क्या सीबीएसई में 75% उपस्थिति अनिवार्य है?", bn: "সিবিএসই-তে কি ৭৫% উপস্থিতি বাধ্যতামূলক?" },
        a: { en: "CBSE generally requires 75% attendance to sit board exams, with limited medical exemptions. Always confirm your school's rule.", hi: "सीबीएसई में बोर्ड परीक्षा में बैठने के लिए आमतौर पर 75% उपस्थिति चाहिए, कुछ चिकित्सा छूट के साथ। अपने स्कूल का नियम ज़रूर जाँचें।", bn: "সিবিএসই-তে বোর্ড পরীক্ষায় বসতে সাধারণত ৭৫% উপস্থিতি দরকার, কিছু মেডিক্যাল ছাড় থাকে। স্কুলের নিয়ম যাচাই করে নিও।" },
      },
      {
        q: { en: "How do I calculate attendance percentage?", hi: "उपस्थिति प्रतिशत कैसे निकालें?", bn: "উপস্থিতির শতকরা কীভাবে বের করব?" },
        a: { en: "Divide the classes you attended by the classes held, then multiply by 100.", hi: "उपस्थित क्लास को कुल क्लास से भाग दें, फिर 100 से गुणा करें।", bn: "উপস্থিত ক্লাসকে মোট ক্লাস দিয়ে ভাগ করে ১০০ দিয়ে গুণ করো।" },
      },
      {
        q: { en: "How many classes must I attend to reach 75%?", hi: "75% तक पहुँचने के लिए कितनी क्लास करनी होंगी?", bn: "৭৫% ছুঁতে আর কত ক্লাস করতে হবে?" },
        a: { en: "Enter your numbers and the tool computes the exact count of consecutive classes you must attend.", hi: "अपनी संख्याएँ डालें — टूल बता देगा कि लगातार कितनी क्लास करनी होंगी।", bn: "তোমার সংখ্যা দাও — টুল ঠিক কতগুলো পরপর ক্লাস করতে হবে তা বলে দেবে।" },
      },
      {
        q: { en: "How many classes can I miss and stay above 75%?", hi: "75% से ऊपर रहते हुए कितनी क्लास छोड़ सकता हूँ?", bn: "৭৫%-এর উপরে থেকে কতগুলো ক্লাস বাদ দিতে পারি?" },
        a: { en: "If you are already above the target, the tool shows the maximum classes you can miss safely.", hi: "यदि आप पहले से लक्ष्य से ऊपर हैं, तो टूल बताता है कि सुरक्षित रूप से कितनी क्लास छोड़ी जा सकती हैं।", bn: "তুমি আগেই লক্ষ্যের উপরে থাকলে টুল নিরাপদে কতগুলো ক্লাস বাদ দেওয়া যায় তা দেখায়।" },
      },
      {
        q: { en: "Does attendance affect my marks?", hi: "क्या उपस्थिति मेरे अंकों को प्रभावित करती है?", bn: "উপস্থিতি কি নম্বরে প্রভাব ফেলে?" },
        a: { en: "It usually decides exam eligibility rather than marks, but low attendance can block you from sitting exams.", hi: "यह आमतौर पर अंकों के बजाय परीक्षा की पात्रता तय करती है, पर कम उपस्थिति परीक्षा में बैठने से रोक सकती है।", bn: "এটি সাধারণত নম্বরের চেয়ে পরীক্ষায় বসার যোগ্যতা ঠিক করে, তবে কম উপস্থিতি পরীক্ষায় বসা আটকে দিতে পারে।" },
      },
    ],
    related: ["percentage-calculator", "cgpa-to-percentage", "exam-countdown"],
    chapterLinks: [],
  },

  {
    slug: "age-calculator",
    name: { en: "School Admission Age Calculator", hi: "स्कूल दाखिला आयु कैलकुलेटर", bn: "স্কুল ভর্তির বয়স ক্যালকুলেটর" },
    category: "school",
    icon: "🎂",
    short: {
      en: "Find a child's exact age on the cutoff date and likely class.",
      hi: "कट-ऑफ तिथि पर बच्चे की सटीक आयु और संभावित कक्षा जानें।",
      bn: "কাট-অফ তারিখে শিশুর সঠিক বয়স ও সম্ভাব্য শ্রেণি বের করো।",
    },
    intro: {
      en: "Enter a date of birth and an admission cutoff date to see the child's exact age in years, months and days — and the class they would commonly be eligible for. Age norms vary by state and school, so treat the class as guidance and confirm with your school.",
      hi: "जन्म तिथि और दाखिले की कट-ऑफ तिथि डालें और बच्चे की सटीक आयु (वर्ष, माह, दिन) तथा सामान्यतः जिस कक्षा के लिए वह पात्र होगा, देखें। आयु नियम राज्य व स्कूल के अनुसार बदलते हैं, इसलिए कक्षा को मार्गदर्शन मानें और स्कूल से पुष्टि करें।",
      bn: "জন্ম তারিখ ও ভর্তির কাট-অফ তারিখ দিলে শিশুর সঠিক বয়স (বছর, মাস, দিন) এবং সাধারণত যে শ্রেণিতে ভর্তি হওয়া যায় তা দেখা যাবে। বয়সের নিয়ম রাজ্য ও স্কুলভেদে আলাদা, তাই শ্রেণিটিকে নির্দেশনা হিসেবে দেখো ও স্কুলে যাচাই করো।",
    },
    how: {
      en: "The tool counts the exact years, months and days from the date of birth to the cutoff date (presets: 31 March and 1 April of the admission year, both editable). The suggested class follows common NEP-aligned age norms — for example, a child turning 6 by the cutoff is usually ready for Class 1.",
      hi: "टूल जन्म तिथि से कट-ऑफ तिथि तक सटीक वर्ष, माह और दिन गिनता है (प्रिसेट: दाखिले के वर्ष की 31 मार्च व 1 अप्रैल, दोनों बदले जा सकते हैं)। सुझाई गई कक्षा सामान्य एनईपी आयु-नियमों पर आधारित है — जैसे कट-ऑफ तक 6 वर्ष पूरे होने पर आमतौर पर कक्षा 1 के लिए तैयार।",
      bn: "টুলটি জন্ম তারিখ থেকে কাট-অফ তারিখ পর্যন্ত সঠিক বছর, মাস ও দিন গোনে (প্রিসেট: ভর্তির বছরের ৩১ মার্চ ও ১ এপ্রিল, দুটোই বদলানো যায়)। সম্ভাব্য শ্রেণিটি সাধারণ এনইপি বয়স-নিয়ম অনুসরণ করে — যেমন কাট-অফের মধ্যে ৬ বছর পূর্ণ হলে সাধারণত প্রথম শ্রেণির জন্য প্রস্তুত।",
    },
    keywords: ["school admission age calculator", "age calculator for school", "age on cutoff date", "class 1 admission age"],
    faq: [
      {
        q: { en: "What is the age for Class 1 admission?", hi: "कक्षा 1 में दाखिले की उम्र क्या है?", bn: "প্রথম শ্রেণিতে ভর্তির বয়স কত?" },
        a: { en: "Under NEP, children are usually 6 years old on the cutoff date for Class 1, but states and schools differ.", hi: "एनईपी के तहत कक्षा 1 के लिए कट-ऑफ तिथि पर बच्चे आमतौर पर 6 वर्ष के होते हैं, पर राज्य व स्कूल अलग होते हैं।", bn: "এনইপি অনুযায়ী প্রথম শ্রেণির জন্য কাট-অফ তারিখে সাধারণত ৬ বছর হয়, তবে রাজ্য ও স্কুলভেদে আলাদা।" },
      },
      {
        q: { en: "Which cutoff date should I use?", hi: "कौन सी कट-ऑफ तिथि इस्तेमाल करूँ?", bn: "কোন কাট-অফ তারিখ ব্যবহার করব?" },
        a: { en: "Many schools use 31 March or 1 April of the admission year. The tool presets both and lets you edit them.", hi: "कई स्कूल दाखिले के वर्ष की 31 मार्च या 1 अप्रैल का उपयोग करते हैं। टूल में दोनों प्रिसेट हैं और बदले जा सकते हैं।", bn: "অনেক স্কুল ভর্তির বছরের ৩১ মার্চ বা ১ এপ্রিল ব্যবহার করে। টুলে দুটোই প্রিসেট আছে এবং বদলানো যায়।" },
      },
      {
        q: { en: "Is the suggested class official?", hi: "क्या सुझाई गई कक्षा आधिकारिक है?", bn: "সম্ভাব্য শ্রেণিটি কি সরকারি?" },
        a: { en: "No. It is general guidance only — always confirm the exact age rule with your school or board.", hi: "नहीं। यह केवल सामान्य मार्गदर्शन है — सटीक आयु नियम स्कूल या बोर्ड से पुष्टि करें।", bn: "না। এটি কেবল সাধারণ নির্দেশনা — সঠিক বয়স-নিয়ম স্কুল বা বোর্ডে যাচাই করো।" },
      },
      {
        q: { en: "How is exact age calculated?", hi: "सटीक आयु कैसे निकाली जाती है?", bn: "সঠিক বয়স কীভাবে হিসাব হয়?" },
        a: { en: "The tool counts complete years and months, then the leftover days, adjusting for month lengths.", hi: "टूल पूरे वर्ष और माह गिनता है, फिर बचे दिन — महीनों की लंबाई के अनुसार समायोजित करके।", bn: "টুলটি পূর্ণ বছর ও মাস গোনে, তারপর বাকি দিনগুলো — মাসের দৈর্ঘ্য মিলিয়ে।" },
      },
      {
        q: { en: "Does it handle leap years?", hi: "क्या यह लीप वर्ष संभालता है?", bn: "অধিবর্ষ কি হিসাবে ধরে?" },
        a: { en: "Yes. The day count uses real calendar months, so February and leap years are handled correctly.", hi: "हाँ। दिन गिनती में वास्तविक कैलेंडर माह इस्तेमाल होते हैं, इसलिए फरवरी और लीप वर्ष सही संभाले जाते हैं।", bn: "হ্যাঁ। দিন গোনায় আসল ক্যালেন্ডার মাস ব্যবহার হয়, তাই ফেব্রুয়ারি ও অধিবর্ষ ঠিকভাবে ধরা হয়।" },
      },
    ],
    related: ["exam-countdown", "attendance-calculator", "percentage-calculator"],
    chapterLinks: [],
  },

  {
    slug: "exam-countdown",
    name: { en: "Exam Countdown", hi: "परीक्षा काउंटडाउन", bn: "পরীক্ষার কাউন্টডাউন" },
    category: "school",
    icon: "⏳",
    short: {
      en: "Live days-to-exam countdown with study-time planning.",
      hi: "परीक्षा तक लाइव काउंटडाउन के साथ पढ़ाई के समय की योजना।",
      bn: "পরীক্ষা পর্যন্ত লাইভ কাউন্টডাউন আর পড়ার সময়ের পরিকল্পনা।",
    },
    intro: {
      en: "Name your exam and pick its date to see a live countdown in days, hours and minutes. The tool also reframes the time as study days left and roughly how many study hours that is, so you can plan a steady revision schedule.",
      hi: "अपनी परीक्षा का नाम दें और तिथि चुनें — दिन, घंटे और मिनट में लाइव काउंटडाउन देखें। टूल समय को ‘पढ़ाई के दिन’ और लगभग कितने पढ़ाई घंटे, के रूप में भी दिखाता है, ताकि आप नियमित रिवीज़न की योजना बना सकें।",
      bn: "তোমার পরীক্ষার নাম দাও আর তারিখ বেছে নাও — দিন, ঘণ্টা ও মিনিটে লাইভ কাউন্টডাউন দেখো। টুলটি সময়কে ‘পড়ার দিন’ ও আনুমানিক পড়ার ঘণ্টায় দেখায়, যাতে তুমি নিয়মিত রিভিশনের পরিকল্পনা করতে পারো।",
    },
    how: {
      en: "The countdown is simply the exam date and time minus right now. The study-time view multiplies the days left by your daily study hours (2 hours/day by default) to estimate the total revision time you have.",
      hi: "काउंटडाउन = परीक्षा की तिथि व समय में से अभी का समय घटाना। पढ़ाई-समय दृश्य बचे दिनों को आपके दैनिक पढ़ाई घंटों (डिफ़ॉल्ट 2 घंटे/दिन) से गुणा करके कुल रिवीज़न समय का अनुमान देता है।",
      bn: "কাউন্টডাউন মানে পরীক্ষার তারিখ ও সময় থেকে এখনকার সময় বাদ। পড়ার সময় হিসাব করতে বাকি দিনগুলোকে তোমার দৈনিক পড়ার ঘণ্টা (ডিফল্ট ২ ঘণ্টা/দিন) দিয়ে গুণ করা হয়।",
    },
    keywords: ["exam countdown", "days until exam", "board exam countdown", "study days left"],
    faq: [
      {
        q: { en: "Can I share my countdown?", hi: "क्या मैं अपना काउंटडाउन शेयर कर सकता हूँ?", bn: "কাউন্টডাউন কি শেয়ার করা যায়?" },
        a: { en: "Yes. The exam name and date are saved in the page link, so sharing the URL shares the countdown.", hi: "हाँ। परीक्षा का नाम व तिथि लिंक में सेव होते हैं, इसलिए URL शेयर करने पर काउंटडाउन शेयर हो जाता है।", bn: "হ্যাঁ। পরীক্ষার নাম ও তারিখ লিংকে থাকে, তাই URL শেয়ার করলেই কাউন্টডাউন শেয়ার হয়।" },
      },
      {
        q: { en: "How many study hours do I have left?", hi: "मेरे पास कितने पढ़ाई घंटे बचे हैं?", bn: "আমার আর কত ঘণ্টা পড়ার সময় আছে?" },
        a: { en: "The tool multiplies your days left by your daily study hours to give an estimate you can adjust.", hi: "टूल बचे दिनों को आपके दैनिक पढ़ाई घंटों से गुणा करके अनुमान देता है, जिसे बदला जा सकता है।", bn: "টুলটি বাকি দিনগুলোকে দৈনিক পড়ার ঘণ্টা দিয়ে গুণ করে একটি আনুমানিক হিসাব দেয়, যা বদলানো যায়।" },
      },
      {
        q: { en: "Does the countdown keep running?", hi: "क्या काउंटडाउन चलता रहता है?", bn: "কাউন্টডাউন কি চলতেই থাকে?" },
        a: { en: "Yes — it updates every second while the page is open, down to the exam moment.", hi: "हाँ — पेज खुले रहने पर यह हर सेकंड अपडेट होता है, परीक्षा के क्षण तक।", bn: "হ্যাঁ — পেজ খোলা থাকলে প্রতি সেকেন্ডে হালনাগাদ হয়, পরীক্ষার মুহূর্ত পর্যন্ত।" },
      },
      {
        q: { en: "Can I print the countdown card?", hi: "क्या काउंटडाउन कार्ड प्रिंट किया जा सकता है?", bn: "কাউন্টডাউন কার্ড কি প্রিন্ট করা যায়?" },
        a: { en: "Yes. Use the print button for a clean card you can stick on your study wall.", hi: "हाँ। प्रिंट बटन से एक साफ़ कार्ड पाएँ, जिसे पढ़ाई की दीवार पर लगा सकते हैं।", bn: "হ্যাঁ। প্রিন্ট বোতামে পরিষ্কার একটি কার্ড পাবে, পড়ার দেয়ালে লাগিয়ে রাখতে পারো।" },
      },
      {
        q: { en: "What date should I use for board exams?", hi: "बोर्ड परीक्षा के लिए कौन सी तिथि दूँ?", bn: "বোর্ড পরীক্ষার জন্য কোন তারিখ দেব?" },
        a: { en: "Use the official date sheet for your board. Pick your first paper's date for a revision countdown.", hi: "अपने बोर्ड की आधिकारिक डेटशीट इस्तेमाल करें। रिवीज़न काउंटडाउन के लिए पहले पेपर की तिथि चुनें।", bn: "তোমার বোর্ডের সরকারি ডেট-শিট ব্যবহার করো। রিভিশনের জন্য প্রথম পরীক্ষার তারিখ বেছে নাও।" },
      },
    ],
    related: ["study-timer", "age-calculator", "attendance-calculator"],
    chapterLinks: [],
  },

  {
    slug: "grade-calculator",
    name: { en: "Grade Calculator (CBSE)", hi: "ग्रेड कैलकुलेटर (सीबीएसई)", bn: "গ্রেড ক্যালকুলেটর (সিবিএসই)" },
    category: "marks",
    icon: "🏅",
    short: { en: "Turn marks or a percentage into a CBSE grade and point.", hi: "अंक या प्रतिशत को सीबीएसई ग्रेड और पॉइंट में बदलें।", bn: "নম্বর বা শতকরাকে সিবিএসই গ্রেড ও পয়েন্টে বদলাও।" },
    intro: {
      en: "Enter your marks or percentage to get the matching CBSE grade (A1–E) and its grade point, with the full grading table shown. Switch to subject-wise mode to turn each subject's grade point into an overall CGPA.",
      hi: "अपने अंक या प्रतिशत डालें और संगत सीबीएसई ग्रेड (A1–E) तथा उसका ग्रेड पॉइंट पाएँ, पूरी ग्रेडिंग तालिका के साथ। विषय-वार मोड में हर विषय के ग्रेड पॉइंट से कुल सीजीपीए निकालें।",
      bn: "তোমার নম্বর বা শতকরা দিয়ে সিবিএসই গ্রেড (A1–E) ও তার গ্রেড পয়েন্ট পাও, সঙ্গে পুরো গ্রেডিং টেবিল। বিষয়ভিত্তিক মোডে প্রতিটি বিষয়ের গ্রেড পয়েন্ট থেকে মোট সিজিপিএ বের করো।",
    },
    how: {
      en: "CBSE assigns a grade band from your percentage: 91–100 is A1 (10 points), 81–90 is A2 (9), and so on down to E. For subject-wise CGPA, the tool averages the grade points of all subjects.",
      hi: "सीबीएसई प्रतिशत से ग्रेड बैंड देता है: 91–100 = A1 (10 पॉइंट), 81–90 = A2 (9), इसी तरह E तक। विषय-वार सीजीपीए के लिए टूल सभी विषयों के ग्रेड पॉइंट का औसत लेता है।",
      bn: "সিবিএসই শতকরা থেকে গ্রেড ব্যান্ড দেয়: ৯১–১০০ হলে A1 (১০ পয়েন্ট), ৮১–৯০ হলে A2 (৯), এভাবে E পর্যন্ত। বিষয়ভিত্তিক সিজিপিএ-র জন্য টুল সব বিষয়ের গ্রেড পয়েন্টের গড় নেয়।",
    },
    keywords: ["cbse grade calculator", "grade point calculator", "marks to grade", "cgpa from grades"],
    faq: [
      {
        q: { en: "How is a CBSE grade calculated?", hi: "सीबीएसई ग्रेड कैसे तय होता है?", bn: "সিবিএসই গ্রেড কীভাবে হিসাব হয়?" },
        a: { en: "Your percentage maps to a band: 91–100 = A1, 81–90 = A2, and so on.", hi: "आपका प्रतिशत एक बैंड में आता है: 91–100 = A1, 81–90 = A2, इत्यादि।", bn: "তোমার শতকরা একটি ব্যান্ডে পড়ে: ৯১–১০০ = A1, ৮১–৯০ = A2, ইত্যাদি।" },
      },
      {
        q: { en: "What is the grade point for A1?", hi: "A1 का ग्रेड पॉइंट क्या है?", bn: "A1-এর গ্রেড পয়েন্ট কত?" },
        a: { en: "A1 carries a grade point of 10 under the CBSE scale.", hi: "सीबीएसई स्केल में A1 का ग्रेड पॉइंट 10 है।", bn: "সিবিএসই স্কেলে A1-এর গ্রেড পয়েন্ট ১০।" },
      },
      {
        q: { en: "How do I get CGPA from grades?", hi: "ग्रेड से सीजीपीए कैसे निकालें?", bn: "গ্রেড থেকে সিজিপিএ কীভাবে পাব?" },
        a: { en: "Average the grade points of your main subjects — that is your CGPA.", hi: "अपने मुख्य विषयों के ग्रेड पॉइंट का औसत निकालें — वही सीजीपीए है।", bn: "তোমার মূল বিষয়গুলোর গ্রেড পয়েন্টের গড় নাও — সেটাই সিজিপিএ।" },
      },
      {
        q: { en: "What is the lowest passing grade?", hi: "पास होने का सबसे निचला ग्रेड कौन सा है?", bn: "পাশের সর্বনিম্ন গ্রেড কোনটি?" },
        a: { en: "Grade D (33–40%) is the lowest pass; below 33% is E.", hi: "ग्रेड D (33–40%) सबसे निचला पास है; 33% से नीचे E है।", bn: "গ্রেড D (৩৩–৪০%) সর্বনিম্ন পাশ; ৩৩%-এর নিচে E।" },
      },
      {
        q: { en: "Can grade points exceed 10?", hi: "क्या ग्रेड पॉइंट 10 से अधिक हो सकता है?", bn: "গ্রেড পয়েন্ট কি ১০-এর বেশি হতে পারে?" },
        a: { en: "No. 10 is the maximum grade point in the CBSE system.", hi: "नहीं। सीबीएसई में अधिकतम ग्रेड पॉइंट 10 है।", bn: "না। সিবিএসই-তে সর্বোচ্চ গ্রেড পয়েন্ট ১০।" },
      },
    ],
    related: ["cgpa-to-percentage", "percentage-calculator", "result-calculator"],
    chapterLinks: [],
  },

  {
    slug: "study-timer",
    name: { en: "Study Timer (Pomodoro)", hi: "स्टडी टाइमर (पोमोडोरो)", bn: "পড়ার টাইমার (পোমোডোরো)" },
    category: "school",
    icon: "🍅",
    short: { en: "Focus in 25-minute sprints with short and long breaks.", hi: "छोटे और लंबे ब्रेक के साथ 25 मिनट के सत्रों में ध्यान लगाएँ।", bn: "২৫ মিনিটের মনোযোগ আর ছোট-বড় বিরতিতে পড়ো।" },
    intro: {
      en: "A simple Pomodoro timer to help you study with focus: work for 25 minutes, take a 5-minute break, and a longer break after four sessions. Durations are fully adjustable, with a gentle chime and a session counter.",
      hi: "ध्यान लगाकर पढ़ने में मदद के लिए एक सरल पोमोडोरो टाइमर: 25 मिनट पढ़ें, 5 मिनट ब्रेक लें, और चार सत्रों के बाद लंबा ब्रेक। समय पूरी तरह बदला जा सकता है, साथ में हल्की घंटी और सत्र गिनती।",
      bn: "মন দিয়ে পড়ার জন্য সহজ পোমোডোরো টাইমার: ২৫ মিনিট পড়ো, ৫ মিনিট বিরতি, আর চারটি সেশনের পর বড় বিরতি। সময় বদলানো যায়, সঙ্গে নরম ঘণ্টা ও সেশন গণনা।",
    },
    how: {
      en: "The Pomodoro method breaks study into focused sprints separated by short rests, which helps concentration and reduces tiredness. This timer chimes at the end of each phase and counts how many focus sessions you finish.",
      hi: "पोमोडोरो विधि पढ़ाई को छोटे विश्रामों से अलग किए गए केंद्रित सत्रों में बाँटती है, जिससे एकाग्रता बढ़ती है और थकान घटती है। यह टाइमर हर चरण के अंत में घंटी बजाता है और गिनता है कि आपने कितने फोकस सत्र पूरे किए।",
      bn: "পোমোডোরো পদ্ধতি পড়াকে ছোট মনোযোগী ভাগে ভেঙে মাঝে বিশ্রাম দেয়, যা মনোযোগ বাড়ায় ও ক্লান্তি কমায়। এই টাইমার প্রতিটি ধাপ শেষে ঘণ্টা বাজায় ও কতগুলো সেশন শেষ করলে তা গোনে।",
    },
    keywords: ["pomodoro timer", "study timer", "focus timer", "25 minute timer"],
    faq: [
      {
        q: { en: "What is the Pomodoro technique?", hi: "पोमोडोरो तकनीक क्या है?", bn: "পোমোডোরো কৌশল কী?" },
        a: { en: "Study for 25 minutes, rest for 5, and take a longer break after four rounds.", hi: "25 मिनट पढ़ें, 5 मिनट विश्राम करें, और चार राउंड के बाद लंबा ब्रेक लें।", bn: "২৫ মিনিট পড়ো, ৫ মিনিট বিশ্রাম, আর চার রাউন্ড পর বড় বিরতি নাও।" },
      },
      {
        q: { en: "Can I change the timer lengths?", hi: "क्या मैं टाइमर का समय बदल सकता हूँ?", bn: "টাইমারের সময় কি বদলানো যায়?" },
        a: { en: "Yes — open ‘Customise durations’ to set your own focus and break times.", hi: "हाँ — ‘समय बदलें’ खोलकर अपने फोकस व ब्रेक का समय तय करें।", bn: "হ্যাঁ — ‘সময় বদলাও’ খুলে নিজের মতো সময় ঠিক করো।" },
      },
      {
        q: { en: "Does it make a sound?", hi: "क्या यह आवाज़ करता है?", bn: "এটা কি শব্দ করে?" },
        a: { en: "A gentle chime plays at the end of each session, generated in your browser.", hi: "हर सत्र के अंत में एक हल्की घंटी बजती है, जो आपके ब्राउज़र में ही बनती है।", bn: "প্রতিটি সেশন শেষে একটি নরম ঘণ্টা বাজে, যা ব্রাউজারেই তৈরি হয়।" },
      },
      {
        q: { en: "Will my session count be saved?", hi: "क्या मेरी सत्र गिनती सेव होगी?", bn: "সেশন গণনা কি সংরক্ষিত হবে?" },
        a: { en: "It counts during your visit but resets if you reload — nothing is stored.", hi: "यह आपकी विज़िट के दौरान गिनता है पर रीलोड पर रीसेट हो जाता है — कुछ भी सेव नहीं होता।", bn: "তোমার ভিজিটের সময় গোনে, রিলোড করলে শূন্য হয় — কিছু সংরক্ষণ হয় না।" },
      },
      {
        q: { en: "Why take breaks while studying?", hi: "पढ़ाई के बीच ब्रेक क्यों लें?", bn: "পড়ার ফাঁকে বিরতি কেন?" },
        a: { en: "Short rests refresh your attention so you remember more and tire less.", hi: "छोटे विश्राम ध्यान को ताज़ा करते हैं, जिससे ज़्यादा याद रहता है और थकान कम होती है।", bn: "ছোট বিশ্রাম মনোযোগ চাঙ্গা করে, তাই বেশি মনে থাকে ও কম ক্লান্ত লাগে।" },
      },
    ],
    related: ["exam-countdown", "age-calculator", "mean-median-mode"],
    chapterLinks: [],
  },
  {
    slug: "fraction-calculator",
    name: { en: "Fraction Calculator", hi: "भिन्न कैलकुलेटर", bn: "ভগ্নাংশ ক্যালকুলেটর" },
    category: "maths",
    icon: "½",
    short: { en: "Add, subtract, multiply, divide fractions — with steps.", hi: "भिन्नों को जोड़ें, घटाएँ, गुणा-भाग करें — चरणों सहित।", bn: "ভগ্নাংশ যোগ-বিয়োগ-গুণ-ভাগ — ধাপে ধাপে।" },
    intro: {
      en: "Work with two fractions, including mixed numbers, and see every step — the LCM, the conversion and the final simplification. There's a simplify-only mode too, because on a learning site the working is the whole point.",
      hi: "दो भिन्नों (मिश्र संख्याओं सहित) के साथ काम करें और हर चरण देखें — ल.स., रूपांतरण और अंतिम सरलीकरण। केवल सरल करने का मोड भी है, क्योंकि सीखने की साइट पर हल के चरण ही सबसे ज़रूरी हैं।",
      bn: "দুটি ভগ্নাংশ (মিশ্র সংখ্যা সহ) নিয়ে কাজ করো এবং প্রতিটি ধাপ দেখো — লসাগু, রূপান্তর ও চূড়ান্ত সরলীকরণ। শুধু সরল করার মোডও আছে, কারণ শেখার সাইটে ধাপগুলোই আসল।",
    },
    how: {
      en: "To add or subtract, the tool finds the LCM of the denominators and rewrites both fractions over it. To multiply, numerators and denominators multiply across; to divide, it multiplies by the reciprocal. Every answer is reduced to lowest terms.",
      hi: "जोड़ने या घटाने के लिए टूल हरों का ल.स. निकालकर दोनों भिन्नों को उसी हर पर लिखता है। गुणा में अंश और हर आपस में गुणा होते हैं; भाग में व्युत्क्रम से गुणा किया जाता है। हर उत्तर को निम्नतम रूप में लाया जाता है।",
      bn: "যোগ বা বিয়োগে টুল হরগুলোর লসাগু বের করে দুটি ভগ্নাংশকে সেই হরে লেখে। গুণে লব ও হর আড়াআড়ি গুণ হয়; ভাগে বিপরীত ভগ্নাংশ দিয়ে গুণ হয়। প্রতিটি উত্তর সরলতম আকারে আনা হয়।",
    },
    keywords: ["fraction calculator", "add fractions", "mixed number calculator", "simplify fractions"],
    faq: [
      { q: { en: "How do I add two fractions?", hi: "दो भिन्न कैसे जोड़ें?", bn: "দুটি ভগ্নাংশ কীভাবে যোগ করব?" }, a: { en: "Make the denominators equal using their LCM, then add the numerators.", hi: "उनके ल.स. से हर बराबर करें, फिर अंशों को जोड़ें।", bn: "লসাগু দিয়ে হর সমান করো, তারপর লব যোগ করো।" } },
      { q: { en: "Can it handle mixed numbers?", hi: "क्या यह मिश्र संख्याएँ संभालता है?", bn: "মিশ্র সংখ্যা কি চলবে?" }, a: { en: "Yes — fill the whole-number box and the tool converts it for you.", hi: "हाँ — पूर्ण-संख्या वाला बॉक्स भरें, टूल उसे बदल देगा।", bn: "হ্যাঁ — পূর্ণ-সংখ্যার ঘর ভরো, টুল নিজেই রূপান্তর করবে।" } },
      { q: { en: "How do I divide fractions?", hi: "भिन्नों को कैसे भाग करें?", bn: "ভগ্নাংশ কীভাবে ভাগ করব?" }, a: { en: "Multiply the first fraction by the reciprocal (flip) of the second.", hi: "पहली भिन्न को दूसरी के व्युत्क्रम (उलटा) से गुणा करें।", bn: "প্রথম ভগ্নাংশকে দ্বিতীয়টির বিপরীত (উল্টানো) দিয়ে গুণ করো।" } },
      { q: { en: "What does ‘simplify’ mean?", hi: "‘सरल करना’ का क्या मतलब है?", bn: "‘সরল করা’ মানে কী?" }, a: { en: "Divide the numerator and denominator by their HCF to get the smallest form.", hi: "अंश और हर को उनके म.स. से भाग देकर सबसे छोटा रूप पाना।", bn: "লব ও হরকে তাদের গসাগু দিয়ে ভাগ করে ক্ষুদ্রতম রূপ পাওয়া।" } },
      { q: { en: "Why show the steps?", hi: "चरण क्यों दिखाए जाते हैं?", bn: "ধাপ দেখানো কেন?" }, a: { en: "Seeing each step helps you learn the method, not just copy the answer.", hi: "हर चरण देखने से विधि सीखी जाती है, सिर्फ़ उत्तर नकल नहीं होता।", bn: "প্রতিটি ধাপ দেখলে পদ্ধতি শেখা যায়, শুধু উত্তর টোকা নয়।" } },
    ],
    related: ["lcm-hcf-calculator", "mean-median-mode", "percentage-calculator"],
    chapterLinks: [
      { classId: "6", subject: "maths", slug: "fractions", board: "cbse", label: { en: "Class 6 Maths — Fractions", hi: "कक्षा 6 गणित — भिन्न", bn: "ষষ্ঠ অঙ্ক — ভগ্নাংশ" } },
      { classId: "7", subject: "maths", slug: "working-with-fractions", board: "cbse", label: { en: "Class 7 Maths — Working with Fractions", hi: "कक्षा 7 गणित — भिन्नों के साथ काम", bn: "সপ্তম অঙ্ক — ভগ্নাংশ নিয়ে কাজ" } },
      { classId: "8", subject: "maths", slug: "fractions-in-disguise", board: "cbse", label: { en: "Class 8 Maths — Fractions in Disguise", hi: "कक्षा 8 गणित — छिपी हुई भिन्न", bn: "অষ্টম অঙ্ক — ছদ্মবেশী ভগ্নাংশ" } },
    ],
  },

  {
    slug: "lcm-hcf-calculator",
    name: { en: "LCM & HCF Calculator", hi: "ल.स. और म.स. कैलकुलेटर", bn: "লসাগু ও গসাগু ক্যালকুলেটর" },
    category: "maths",
    icon: "🔢",
    short: { en: "Find LCM and HCF with prime-factor and division methods.", hi: "अभाज्य गुणनखंड और भाग विधि से ल.स. और म.स. निकालें।", bn: "মৌলিক উৎপাদক ও ভাগ পদ্ধতিতে লসাগু-গসাগু বের করো।" },
    intro: {
      en: "Enter two to five numbers to get their LCM and HCF, shown two ways: a prime-factorization breakdown and the step-by-step division (ladder) method. Toggle between them to learn whichever your class uses.",
      hi: "दो से पाँच संख्याएँ डालें और उनका ल.स. व म.स. दो तरह से देखें: अभाज्य गुणनखंड और चरण-दर-चरण भाग (सीढ़ी) विधि। अपनी कक्षा में जो विधि चलती है, उसे चुनें।",
      bn: "দুই থেকে পাঁচটি সংখ্যা দিয়ে তাদের লসাগু ও গসাগু পাও, দুইভাবে দেখানো: মৌলিক উৎপাদকে বিশ্লেষণ ও ধাপে ধাপে ভাগ (মই) পদ্ধতি। তোমার ক্লাসে যেটা চলে সেটা শিখতে টগল করো।",
    },
    how: {
      en: "Break each number into prime factors. The HCF is the product of the common primes taken to their lowest powers; the LCM is the product of all primes taken to their highest powers. The division method divides all numbers by a shared prime until each becomes 1.",
      hi: "हर संख्या को अभाज्य गुणनखंडों में तोड़ें। म.स. = सार्व अभाज्य गुणनखंडों (सबसे कम घात) का गुणनफल; ल.स. = सभी अभाज्य गुणनखंडों (सबसे अधिक घात) का गुणनफल। भाग विधि में सभी संख्याओं को एक सार्व अभाज्य से तब तक भाग देते हैं जब तक प्रत्येक 1 न हो जाए।",
      bn: "প্রতিটি সংখ্যাকে মৌলিক উৎপাদকে ভাঙো। গসাগু = সাধারণ মৌলিকগুলোর সর্বনিম্ন ঘাতের গুণফল; লসাগু = সব মৌলিকের সর্বোচ্চ ঘাতের গুণফল। ভাগ পদ্ধতিতে সব সংখ্যাকে একটি সাধারণ মৌলিক দিয়ে ভাগ করা হয় যতক্ষণ না প্রতিটি ১ হয়।",
    },
    keywords: ["lcm calculator", "hcf calculator", "gcd calculator", "lcm and hcf with steps"],
    faq: [
      { q: { en: "What is the difference between LCM and HCF?", hi: "ल.स. और म.स. में क्या अंतर है?", bn: "লসাগু ও গসাগুর পার্থক্য কী?" }, a: { en: "HCF is the largest number that divides all of them; LCM is the smallest number all of them divide.", hi: "म.स. वह सबसे बड़ी संख्या है जो सभी को विभाजित करे; ल.स. वह सबसे छोटी संख्या है जिसे सभी विभाजित करें।", bn: "গসাগু = যে বৃহত্তম সংখ্যা সবগুলোকে ভাগ করে; লসাগু = যে ক্ষুদ্রতম সংখ্যাকে সবগুলো ভাগ করে।" } },
      { q: { en: "How do I find HCF by prime factors?", hi: "अभाज्य गुणनखंड से म.स. कैसे निकालें?", bn: "মৌলিক উৎপাদকে গসাগু কীভাবে বের করব?" }, a: { en: "Multiply the primes common to every number, each at its lowest power.", hi: "हर संख्या में सार्व अभाज्य गुणनखंडों को उनकी सबसे कम घात पर गुणा करें।", bn: "প্রতিটি সংখ্যায় থাকা সাধারণ মৌলিকগুলো সর্বনিম্ন ঘাতে গুণ করো।" } },
      { q: { en: "What is the division method?", hi: "भाग विधि क्या है?", bn: "ভাগ পদ্ধতি কী?" }, a: { en: "Keep dividing all the numbers by a common prime until each becomes 1.", hi: "सभी संख्याओं को एक सार्व अभाज्य से तब तक भाग दें जब तक प्रत्येक 1 न हो।", bn: "সব সংখ্যাকে একটি সাধারণ মৌলিক দিয়ে ভাগ করতে থাকো যতক্ষণ না প্রতিটি ১ হয়।" } },
      { q: { en: "Is LCM × HCF related to the numbers?", hi: "क्या ल.स. × म.स. संख्याओं से संबंधित है?", bn: "লসাগু × গসাগু কি সংখ্যাগুলোর সঙ্গে সম্পর্কিত?" }, a: { en: "For two numbers, LCM × HCF equals the product of the two numbers.", hi: "दो संख्याओं के लिए, ल.स. × म.स. = उन दोनों संख्याओं का गुणनफल।", bn: "দুটি সংখ্যার ক্ষেত্রে লসাগু × গসাগু = সংখ্যা দুটির গুণফল।" } },
      { q: { en: "How many numbers can I enter?", hi: "मैं कितनी संख्याएँ डाल सकता हूँ?", bn: "কতগুলো সংখ্যা দিতে পারি?" }, a: { en: "Between two and five whole numbers works best for clear steps.", hi: "स्पष्ट चरणों के लिए दो से पाँच पूर्ण संख्याएँ सबसे अच्छी रहती हैं।", bn: "পরিষ্কার ধাপের জন্য দুই থেকে পাঁচটি পূর্ণসংখ্যা সবচেয়ে ভালো।" } },
    ],
    related: ["fraction-calculator", "mean-median-mode", "simple-interest-calculator"],
    chapterLinks: [
      { classId: "7", subject: "maths", slug: "number-play", board: "cbse", label: { en: "Class 7 Maths — Number Play", hi: "कक्षा 7 गणित — संख्याओं का खेल", bn: "সপ্তম অঙ্ক — সংখ্যা নিয়ে খেলা" } },
      { classId: "8", subject: "maths", slug: "number-play", board: "cbse", label: { en: "Class 8 Maths — Number Play", hi: "कक्षा 8 गणित — संख्याओं का खेल", bn: "অষ্টম অঙ্ক — সংখ্যা নিয়ে খেলা" } },
      { classId: "5", subject: "maths", slug: "multiples-factors", board: "wbbpe", label: { en: "Class 5 Maths — Multiples & Factors", hi: "कक्षा 5 गणित — गुणज और गुणनखंड", bn: "পঞ্চম অঙ্ক — গুণিতক ও উৎপাদক" } },
    ],
  },

  {
    slug: "mean-median-mode",
    name: { en: "Mean, Median & Mode Calculator", hi: "माध्य, माध्यिका और बहुलक कैलकुलेटर", bn: "গড়, মধ্যমা ও প্রচুরক ক্যালকুলেটর" },
    category: "maths",
    icon: "📈",
    short: { en: "Mean, median, mode, range and more from a list.", hi: "एक सूची से माध्य, माध्यिका, बहुलक, परिसर और बहुत कुछ।", bn: "একটি তালিকা থেকে গড়, মধ্যমা, প্রচুরক, পরিসর ও আরও।" },
    intro: {
      en: "Type or paste a list of numbers to get the mean, median, mode, range, count and sum at once. The sorted list is shown with the median highlighted, and each measure comes with a plain-language explanation.",
      hi: "संख्याओं की सूची टाइप या पेस्ट करें और एक साथ माध्य, माध्यिका, बहुलक, परिसर, गिनती और योग पाएँ। क्रमबद्ध सूची में माध्यिका चिह्नित रहती है, और हर माप का सरल भाषा में स्पष्टीकरण दिया जाता है।",
      bn: "সংখ্যার একটি তালিকা টাইপ বা পেস্ট করো — একসঙ্গে গড়, মধ্যমা, প্রচুরক, পরিসর, সংখ্যা ও যোগফল পাও। সাজানো তালিকায় মধ্যমা চিহ্নিত থাকে, আর প্রতিটি মানের সহজ ব্যাখ্যা দেওয়া হয়।",
    },
    how: {
      en: "Mean is the sum divided by the count. Median is the middle value of the sorted list (the average of the two middle values if the count is even). Mode is the most frequent value, and range is the largest minus the smallest.",
      hi: "माध्य = योग ÷ गिनती। माध्यिका = क्रमबद्ध सूची का बीच का मान (गिनती सम होने पर बीच के दो मानों का औसत)। बहुलक = सबसे अधिक बार आने वाला मान, और परिसर = सबसे बड़ा − सबसे छोटा।",
      bn: "গড় = যোগফল ÷ সংখ্যা। মধ্যমা = সাজানো তালিকার মাঝের মান (সংখ্যা জোড় হলে মাঝের দুটির গড়)। প্রচুরক = সবচেয়ে বেশি বার আসা মান, আর পরিসর = সর্বোচ্চ − সর্বনিম্ন।",
    },
    keywords: ["mean median mode calculator", "average calculator", "range calculator", "statistics calculator"],
    faq: [
      { q: { en: "How do I find the mean?", hi: "माध्य कैसे निकालें?", bn: "গড় কীভাবে বের করব?" }, a: { en: "Add all the numbers and divide by how many there are.", hi: "सभी संख्याओं को जोड़ें और कुल कितनी हैं उससे भाग दें।", bn: "সব সংখ্যা যোগ করে কয়টি আছে তা দিয়ে ভাগ করো।" } },
      { q: { en: "How is the median found?", hi: "माध्यिका कैसे निकलती है?", bn: "মধ্যমা কীভাবে বের হয়?" }, a: { en: "Sort the numbers and pick the middle one; average the two middle ones if the count is even.", hi: "संख्याओं को क्रम में रखें और बीच वाली चुनें; सम होने पर बीच की दो का औसत लें।", bn: "সংখ্যাগুলো সাজিয়ে মাঝেরটা নাও; জোড় হলে মাঝের দুটির গড় নাও।" } },
      { q: { en: "Can there be more than one mode?", hi: "क्या एक से अधिक बहुलक हो सकते हैं?", bn: "একাধিক প্রচুরক কি হতে পারে?" }, a: { en: "Yes — if several values tie for the highest frequency, all are modes.", hi: "हाँ — यदि कई मान सबसे अधिक बार समान रूप से आएँ, तो सभी बहुलक हैं।", bn: "হ্যাঁ — একাধিক মান সমান সর্বোচ্চবার এলে সবগুলোই প্রচুরক।" } },
      { q: { en: "What if every number appears once?", hi: "यदि हर संख्या एक बार आए तो?", bn: "প্রতিটি সংখ্যা একবার করে এলে?" }, a: { en: "Then there is no mode — the tool shows ‘none’.", hi: "तब कोई बहुलक नहीं होता — टूल ‘कोई नहीं’ दिखाता है।", bn: "তখন কোনো প্রচুরক নেই — টুল ‘নেই’ দেখায়।" } },
      { q: { en: "What is the range?", hi: "परिसर क्या है?", bn: "পরিসর কী?" }, a: { en: "The difference between the largest and the smallest value.", hi: "सबसे बड़े और सबसे छोटे मान का अंतर।", bn: "সর্বোচ্চ ও সর্বনিম্ন মানের পার্থক্য।" } },
    ],
    related: ["fraction-calculator", "lcm-hcf-calculator", "percentage-calculator"],
    chapterLinks: [
      { classId: "6", subject: "maths", slug: "data-handling-and-presentation", board: "cbse", label: { en: "Class 6 Maths — Data Handling", hi: "कक्षा 6 गणित — आँकड़ा प्रबंधन", bn: "ষষ্ঠ অঙ্ক — তথ্য বিন্যাস" } },
      { classId: "9", subject: "maths", slug: "statistics", board: "cbse", label: { en: "Class 9 Maths — Statistics", hi: "कक्षा 9 गणित — सांख्यिकी", bn: "নবম অঙ্ক — পরিসংখ্যান" } },
      { classId: "10", subject: "maths", slug: "statistics", board: "cbse", label: { en: "Class 10 Maths — Statistics", hi: "कक्षा 10 गणित — सांख्यिकी", bn: "দশম অঙ্ক — পরিসংখ্যান" } },
    ],
  },

  {
    slug: "simple-interest-calculator",
    name: { en: "Simple Interest & Profit–Loss Calculator", hi: "साधारण ब्याज और लाभ-हानि कैलकुलेटर", bn: "সরল সুদ ও লাভ-ক্ষতি ক্যালকুলেটর" },
    category: "maths",
    icon: "💰",
    short: { en: "Solve simple interest or profit/loss with full steps.", hi: "साधारण ब्याज या लाभ-हानि चरणों सहित हल करें।", bn: "ধাপে ধাপে সরল সুদ বা লাভ-ক্ষতি বের করো।" },
    intro: {
      en: "Two calculators in one. The simple-interest tab solves for whichever value you leave blank — principal, rate, time or interest. The profit-and-loss tab turns cost and selling price into the profit or loss amount and percentage, with the steps shown.",
      hi: "एक में दो कैलकुलेटर। साधारण ब्याज टैब उसी मान को हल करता है जिसे आप खाली छोड़ें — मूलधन, दर, समय या ब्याज। लाभ-हानि टैब क्रय व विक्रय मूल्य से लाभ या हानि की राशि और प्रतिशत निकालता है, चरणों सहित।",
      bn: "একটিতে দুটি ক্যালকুলেটর। সরল সুদ ট্যাবে তুমি যেটা খালি রাখবে সেটা বের করে — আসল, হার, সময় বা সুদ। লাভ-ক্ষতি ট্যাবে ক্রয়মূল্য ও বিক্রয়মূল্য থেকে লাভ বা ক্ষতির পরিমাণ ও শতকরা বের হয়, ধাপসহ।",
    },
    how: {
      en: "Simple interest is SI = P × R × T ÷ 100, so any one of P, R, T or SI can be found from the other three. For profit and loss, profit or loss = |SP − CP|, and the percentage is that amount divided by the cost price, times 100.",
      hi: "साधारण ब्याज = मूलधन × दर × समय ÷ 100, इसलिए P, R, T या ब्याज में से कोई एक बाकी तीन से निकाला जा सकता है। लाभ-हानि के लिए लाभ या हानि = |विक्रय − क्रय|, और प्रतिशत = वह राशि ÷ क्रय मूल्य × 100।",
      bn: "সরল সুদ = P × R × T ÷ ১০০, তাই P, R, T বা SI-এর যেকোনো একটি বাকি তিনটি থেকে বের করা যায়। লাভ-ক্ষতির জন্য লাভ বা ক্ষতি = |SP − CP|, আর শতকরা = সেই পরিমাণ ÷ ক্রয়মূল্য × ১০০।",
    },
    keywords: ["simple interest calculator", "profit and loss calculator", "si formula", "profit percentage"],
    faq: [
      { q: { en: "What is the simple interest formula?", hi: "साधारण ब्याज का सूत्र क्या है?", bn: "সরল সুদের সূত্র কী?" }, a: { en: "SI = P × R × T ÷ 100, where P is principal, R the yearly rate and T the time in years.", hi: "ब्याज = मूलधन × दर × समय ÷ 100, जहाँ P मूलधन, R वार्षिक दर और T वर्षों में समय है।", bn: "SI = P × R × T ÷ ১০০, যেখানে P আসল, R বছরের হার, T বছরে সময়।" } },
      { q: { en: "Can I find the rate or time?", hi: "क्या मैं दर या समय निकाल सकता हूँ?", bn: "হার বা সময় কি বের করা যায়?" }, a: { en: "Yes — fill any three boxes and leave the unknown blank; the tool solves it.", hi: "हाँ — कोई तीन बॉक्स भरें और अज्ञात को खाली छोड़ें; टूल उसे हल कर देगा।", bn: "হ্যাঁ — যেকোনো তিনটি ভরো, অজানাটা খালি রাখো; টুল বের করবে।" } },
      { q: { en: "How is profit percentage calculated?", hi: "लाभ प्रतिशत कैसे निकाला जाता है?", bn: "লাভের শতকরা কীভাবে হিসাব হয়?" }, a: { en: "Profit ÷ cost price × 100. Loss percentage uses the same with the loss amount.", hi: "लाभ ÷ क्रय मूल्य × 100। हानि प्रतिशत भी इसी तरह, हानि की राशि से।", bn: "লাভ ÷ ক্রয়মূল্য × ১০০। ক্ষতির শতকরাও একইভাবে, ক্ষতির পরিমাণ দিয়ে।" } },
      { q: { en: "What is the amount in simple interest?", hi: "साधारण ब्याज में मिश्रधन क्या है?", bn: "সরল সুদে মোট পরিমাণ কী?" }, a: { en: "The amount is the principal plus the interest.", hi: "मिश्रधन = मूलधन + ब्याज।", bn: "মোট পরিমাণ = আসল + সুদ।" } },
      { q: { en: "Is profit always when SP is higher?", hi: "क्या विक्रय मूल्य अधिक होने पर हमेशा लाभ होता है?", bn: "বিক্রয়মূল্য বেশি হলেই কি লাভ?" }, a: { en: "Yes — if selling price is above cost price it's a profit; below it, a loss.", hi: "हाँ — विक्रय मूल्य क्रय मूल्य से अधिक हो तो लाभ; कम हो तो हानि।", bn: "হ্যাঁ — বিক্রয়মূল্য ক্রয়মূল্যের বেশি হলে লাভ; কম হলে ক্ষতি।" } },
    ],
    related: ["percentage-calculator", "fraction-calculator", "unit-converter"],
    chapterLinks: [
      { classId: "8", subject: "maths", slug: "proportional-reasoning-1", board: "cbse", label: { en: "Class 8 Maths — Proportional Reasoning 1", hi: "कक्षा 8 गणित — अनुपात 1", bn: "অষ্টম অঙ্ক — অনুপাত ১" } },
      { classId: "8", subject: "maths", slug: "proportional-reasoning-2", board: "cbse", label: { en: "Class 8 Maths — Proportional Reasoning 2", hi: "कक्षा 8 गणित — अनुपात 2", bn: "অষ্টম অঙ্ক — অনুপাত ২" } },
    ],
  },

  {
    slug: "unit-converter",
    name: { en: "Unit Converter (Science)", hi: "इकाई परिवर्तक (विज्ञान)", bn: "একক রূপান্তর (বিজ্ঞান)" },
    category: "maths",
    icon: "📏",
    short: { en: "Convert length, mass, time, temperature and more.", hi: "लंबाई, द्रव्यमान, समय, तापमान और बहुत कुछ बदलें।", bn: "দৈর্ঘ্য, ভর, সময়, তাপমাত্রা ও আরও রূপান্তর করো।" },
    intro: {
      en: "Convert between the units you meet in Class 6–10 science and maths — length, mass, time, temperature, area, volume and speed. Conversions are instant and the factor is always shown, so you learn the relationship, not just the answer.",
      hi: "कक्षा 6–10 के विज्ञान और गणित की इकाइयों के बीच बदलें — लंबाई, द्रव्यमान, समय, तापमान, क्षेत्रफल, आयतन और चाल। रूपांतरण तुरंत होता है और गुणक हमेशा दिखता है, ताकि सिर्फ़ उत्तर नहीं, संबंध भी समझ आए।",
      bn: "ষষ্ঠ থেকে দশম শ্রেণির বিজ্ঞান ও অঙ্কে যে এককগুলো আসে — দৈর্ঘ্য, ভর, সময়, তাপমাত্রা, ক্ষেত্রফল, আয়তন ও দ্রুতি — সেগুলোর মধ্যে রূপান্তর করো। রূপান্তর সঙ্গে সঙ্গে হয় ও গুণনীয়ক দেখানো হয়।",
    },
    how: {
      en: "Most units convert through a base unit — for example 1 km = 1000 m, so 3.5 km = 3500 m. Temperature uses formulas instead: °F = °C × 9/5 + 32, and K = °C + 273.15.",
      hi: "अधिकांश इकाइयाँ एक आधार इकाई के माध्यम से बदलती हैं — जैसे 1 किमी = 1000 मी, इसलिए 3.5 किमी = 3500 मी। तापमान में सूत्र लगते हैं: °F = °C × 9/5 + 32, और K = °C + 273.15।",
      bn: "বেশির ভাগ একক একটি ভিত্তি-এককের মাধ্যমে রূপান্তরিত হয় — যেমন ১ কিমি = ১০০০ মিটার, তাই ৩.৫ কিমি = ৩৫০০ মিটার। তাপমাত্রায় সূত্র লাগে: °F = °C × ৯/৫ + ৩২, আর K = °C + ২৭৩.১৫।",
    },
    keywords: ["unit converter", "length converter", "temperature converter", "km to m", "celsius to fahrenheit"],
    faq: [
      { q: { en: "How do I convert km to m?", hi: "किमी को मी में कैसे बदलें?", bn: "কিমি থেকে মিটার কীভাবে করব?" }, a: { en: "Multiply by 1000, because 1 km = 1000 m.", hi: "1000 से गुणा करें, क्योंकि 1 किमी = 1000 मी।", bn: "১০০০ দিয়ে গুণ করো, কারণ ১ কিমি = ১০০০ মিটার।" } },
      { q: { en: "How do I convert Celsius to Fahrenheit?", hi: "सेल्सियस को फ़ारेनहाइट में कैसे बदलें?", bn: "সেলসিয়াস থেকে ফারেনহাইট কীভাবে করব?" }, a: { en: "Use °F = °C × 9/5 + 32.", hi: "सूत्र: °F = °C × 9/5 + 32।", bn: "ব্যবহার করো °F = °C × ৯/৫ + ৩২।" } },
      { q: { en: "What is the base unit of mass here?", hi: "यहाँ द्रव्यमान की आधार इकाई क्या है?", bn: "এখানে ভরের ভিত্তি-একক কী?" }, a: { en: "Grams — mg, g, kg and tonnes all convert through grams.", hi: "ग्राम — mg, g, kg और टन सभी ग्राम के माध्यम से बदलते हैं।", bn: "গ্রাম — mg, g, kg ও টন সবই গ্রামের মাধ্যমে রূপান্তরিত হয়।" } },
      { q: { en: "How do I change km/h to m/s?", hi: "किमी/घंटा को मी/से में कैसे बदलें?", bn: "কিমি/ঘণ্টা থেকে মি/সেকেন্ড কীভাবে করব?" }, a: { en: "Multiply by 5/18 (that is, 1000 ÷ 3600).", hi: "5/18 से गुणा करें (यानी 1000 ÷ 3600)।", bn: "৫/১৮ দিয়ে গুণ করো (অর্থাৎ ১০০০ ÷ ৩৬০০)।" } },
      { q: { en: "Is Kelvin ever negative?", hi: "क्या केल्विन कभी ऋणात्मक होता है?", bn: "কেলভিন কি কখনো ঋণাত্মক হয়?" }, a: { en: "No — 0 K is the lowest possible temperature.", hi: "नहीं — 0 K सबसे न्यूनतम संभव तापमान है।", bn: "না — ০ K সম্ভাব্য সর্বনিম্ন তাপমাত্রা।" } },
    ],
    related: ["simple-interest-calculator", "mean-median-mode", "fraction-calculator"],
    chapterLinks: [
      { classId: "6", subject: "science", slug: "measurement-of-length-and-motion", board: "cbse", label: { en: "Class 6 Science — Measurement of Length & Motion", hi: "कक्षा 6 विज्ञान — लंबाई और गति का मापन", bn: "ষষ্ঠ বিজ্ঞান — দৈর্ঘ্য ও গতি পরিমাপ" } },
      { classId: "7", subject: "science", slug: "measurement-of-time-and-motion", board: "cbse", label: { en: "Class 7 Science — Measurement of Time & Motion", hi: "कक्षा 7 विज्ञान — समय और गति का मापन", bn: "সপ্তম বিজ্ঞান — সময় ও গতি পরিমাপ" } },
      { classId: "6", subject: "science", slug: "temperature-and-its-measurement", board: "cbse", label: { en: "Class 6 Science — Temperature & its Measurement", hi: "कक्षा 6 विज्ञान — तापमान और उसका मापन", bn: "ষষ্ঠ বিজ্ঞান — তাপমাত্রা ও তার পরিমাপ" } },
    ],
  },

  {
    slug: "result-calculator",
    name: { en: "Class Result Calculator", hi: "कक्षा परिणाम कैलकुलेटर", bn: "ক্লাস রেজাল্ট ক্যালকুলেটর" },
    category: "teacher",
    icon: "🧑‍🏫",
    short: { en: "Paste a class's marks for instant results and a CSV.", hi: "कक्षा के अंक पेस्ट करें और तुरंत परिणाम व CSV पाएँ।", bn: "ক্লাসের নম্বর পেস্ট করে তৎক্ষণাৎ ফল ও CSV পাও।" },
    intro: {
      en: "Paste a whole class's marks — one student per line as ‘Name, Marks’ — and get each student's percentage and grade, the class average, the highest and lowest, the pass count and a grade-distribution chart. Export a CSV or print a clean result sheet.",
      hi: "पूरी कक्षा के अंक पेस्ट करें — हर पंक्ति में एक छात्र ‘नाम, अंक’ — और पाएँ हर छात्र का प्रतिशत व ग्रेड, कक्षा का औसत, सर्वोच्च-न्यूनतम, उत्तीर्ण संख्या और ग्रेड-वितरण चार्ट। CSV डाउनलोड करें या साफ़ रिज़ल्ट शीट प्रिंट करें।",
      bn: "পুরো ক্লাসের নম্বর পেস্ট করো — প্রতি লাইনে একজন ‘নাম, নম্বর’ — আর পাও প্রতিটি শিক্ষার্থীর শতকরা ও গ্রেড, ক্লাসের গড়, সর্বোচ্চ-সর্বনিম্ন, পাশের সংখ্যা ও গ্রেড বণ্টনের চার্ট। CSV ডাউনলোড করো বা পরিষ্কার রেজাল্ট শিট প্রিন্ট করো।",
    },
    how: {
      en: "The tool reads each ‘Name, Marks’ line (a comma, tab or spaces all work), converts marks to a percentage against the maximum you set, and assigns a CBSE grade. It then totals the class: average, highest, lowest, pass count and how many fall in each grade.",
      hi: "टूल हर ‘नाम, अंक’ पंक्ति पढ़ता है (कॉमा, टैब या स्पेस सभी चलते हैं), आपके तय अधिकतम के सापेक्ष अंकों को प्रतिशत में बदलता है और CBSE ग्रेड देता है। फिर कक्षा का कुल निकालता है: औसत, सर्वोच्च, न्यूनतम, उत्तीर्ण संख्या और हर ग्रेड में कितने।",
      bn: "টুলটি প্রতিটি ‘নাম, নম্বর’ লাইন পড়ে (কমা, ট্যাব বা স্পেস চলবে), তুমি দেওয়া পূর্ণমানের সাপেক্ষে নম্বরকে শতকরায় বদলায় ও সিবিএসই গ্রেড দেয়। তারপর ক্লাসের হিসাব করে: গড়, সর্বোচ্চ, সর্বনিম্ন, পাশ সংখ্যা ও কোন গ্রেডে কতজন।",
    },
    keywords: ["class result calculator", "bulk marks calculator", "result sheet maker", "grade distribution"],
    faq: [
      { q: { en: "What format should the marks be in?", hi: "अंक किस प्रारूप में होने चाहिए?", bn: "নম্বর কোন ফরম্যাটে দেব?" }, a: { en: "One student per line as ‘Name, Marks’. A comma, tab or spaces between them all work.", hi: "हर पंक्ति में एक छात्र ‘नाम, अंक’। बीच में कॉमा, टैब या स्पेस — सभी चलते हैं।", bn: "প্রতি লাইনে একজন ‘নাম, নম্বর’। মাঝে কমা, ট্যাব বা স্পেস — সবই চলবে।" } },
      { q: { en: "Can I download the results?", hi: "क्या मैं परिणाम डाउनलोड कर सकता हूँ?", bn: "ফলাফল কি ডাউনলোড করা যায়?" }, a: { en: "Yes — use the CSV button to save a spreadsheet-ready file.", hi: "हाँ — CSV बटन से स्प्रेडशीट-तैयार फ़ाइल सहेजें।", bn: "হ্যাঁ — CSV বোতামে স্প্রেডশিট-উপযোগী ফাইল সেভ করো।" } },
      { q: { en: "How is the grade decided?", hi: "ग्रेड कैसे तय होता है?", bn: "গ্রেড কীভাবে ঠিক হয়?" }, a: { en: "Each percentage maps to the CBSE grade band (A1–E).", hi: "हर प्रतिशत CBSE ग्रेड बैंड (A1–E) में आता है।", bn: "প্রতিটি শতকরা সিবিএসই গ্রেড ব্যান্ডে (A1–E) পড়ে।" } },
      { q: { en: "Can I change the pass mark?", hi: "क्या मैं उत्तीर्ण अंक बदल सकता हूँ?", bn: "পাশ নম্বর কি বদলানো যায়?" }, a: { en: "Yes — set any pass percentage; the default is 33%.", hi: "हाँ — कोई भी उत्तीर्ण प्रतिशत तय करें; डिफ़ॉल्ट 33% है।", bn: "হ্যাঁ — যেকোনো পাশ শতকরা দাও; ডিফল্ট ৩৩%।" } },
      { q: { en: "Is student data uploaded anywhere?", hi: "क्या छात्र डेटा कहीं अपलोड होता है?", bn: "শিক্ষার্থীর তথ্য কি কোথাও আপলোড হয়?" }, a: { en: "No — everything is computed in your browser and nothing is sent or stored.", hi: "नहीं — सब कुछ आपके ब्राउज़र में ही गणना होता है, कुछ भी भेजा या सहेजा नहीं जाता।", bn: "না — সব কিছু তোমার ব্রাউজারেই হিসাব হয়, কিছু পাঠানো বা সংরক্ষণ হয় না।" } },
    ],
    related: ["question-paper-planner", "grade-calculator", "percentage-calculator"],
    chapterLinks: [],
  },

  {
    slug: "question-paper-planner",
    name: { en: "Question Paper Blueprint Planner", hi: "प्रश्न पत्र ब्लूप्रिंट प्लानर", bn: "প্রশ্নপত্রের নকশা পরিকল্পক" },
    category: "teacher",
    icon: "📝",
    short: { en: "Design a balanced paper with section-wise marks and timing.", hi: "खंडवार अंक और समय के साथ संतुलित प्रश्न पत्र बनाएँ।", bn: "বিভাগভিত্তিক নম্বর ও সময়সহ সুষম প্রশ্নপত্র সাজাও।" },
    intro: {
      en: "Set a paper's total marks and duration, then add sections (like MCQ ×1, Short ×3, Long ×5). The planner checks live that the sections add up to the total, suggests a time allocation per section, and gives you a clean blueprint table to print or share.",
      hi: "प्रश्न पत्र के कुल अंक और अवधि तय करें, फिर खंड जोड़ें (जैसे MCQ ×1, लघु ×3, दीर्घ ×5)। प्लानर तुरंत जाँचता है कि खंडों का योग कुल के बराबर है या नहीं, हर खंड के लिए समय सुझाता है, और प्रिंट या साझा करने के लिए साफ़ ब्लूप्रिंट तालिका देता है।",
      bn: "প্রশ্নপত্রের মোট নম্বর ও সময় ঠিক করো, তারপর বিভাগ যোগ করো (যেমন MCQ ×১, সংক্ষিপ্ত ×৩, রচনাধর্মী ×৫)। পরিকল্পক সঙ্গে সঙ্গে দেখে নেয় বিভাগগুলোর যোগফল মোটের সমান কিনা, প্রতিটি বিভাগের জন্য সময় প্রস্তাব করে, আর প্রিন্ট বা শেয়ারের জন্য পরিষ্কার নকশা টেবিল দেয়।",
    },
    how: {
      en: "Each section's marks are its question count times the marks per question. The planner sums these and compares with the paper total, flagging any gap. Time per section is shared out in proportion to its marks, based on the total duration.",
      hi: "हर खंड के अंक = प्रश्नों की संख्या × प्रति प्रश्न अंक। प्लानर इन्हें जोड़कर कुल से मिलाता है और कोई अंतर हो तो दिखाता है। कुल अवधि के आधार पर हर खंड का समय उसके अंकों के अनुपात में बाँटा जाता है।",
      bn: "প্রতিটি বিভাগের নম্বর = প্রশ্ন সংখ্যা × প্রতি প্রশ্নের নম্বর। পরিকল্পক এগুলো যোগ করে মোটের সঙ্গে মেলায় ও কোনো ফারাক থাকলে দেখায়। মোট সময়ের ভিত্তিতে প্রতিটি বিভাগের সময় তার নম্বরের অনুপাতে ভাগ করা হয়।",
    },
    keywords: ["question paper blueprint", "exam paper planner", "marks distribution", "question paper format"],
    faq: [
      { q: { en: "How do I check my paper adds up?", hi: "कैसे जाँचूँ कि मेरा पेपर सही जुड़ता है?", bn: "প্রশ্নপত্রের যোগফল ঠিক আছে কিনা কীভাবে দেখব?" }, a: { en: "The planner compares the section totals with the paper total and flags any difference.", hi: "प्लानर खंडों के योग की कुल से तुलना करता है और कोई अंतर हो तो दिखाता है।", bn: "পরিকল্পক বিভাগের মোট ও পেপারের মোট মিলিয়ে ফারাক দেখায়।" } },
      { q: { en: "How is time per section suggested?", hi: "हर खंड का समय कैसे सुझाया जाता है?", bn: "প্রতি বিভাগের সময় কীভাবে প্রস্তাব হয়?" }, a: { en: "Total minutes are shared in proportion to each section's marks.", hi: "कुल मिनट हर खंड के अंकों के अनुपात में बाँटे जाते हैं।", bn: "মোট মিনিট প্রতিটি বিভাগের নম্বরের অনুপাতে ভাগ করা হয়।" } },
      { q: { en: "Can I share my blueprint?", hi: "क्या मैं अपना ब्लूप्रिंट साझा कर सकता हूँ?", bn: "নকশা কি শেয়ার করা যায়?" }, a: { en: "Yes — the layout is saved in the link, so sharing the URL shares the plan.", hi: "हाँ — खाका लिंक में सहेजा जाता है, इसलिए URL साझा करने पर योजना साझा हो जाती है।", bn: "হ্যাঁ — নকশা লিংকে থাকে, তাই URL শেয়ার করলেই পরিকল্পনা শেয়ার হয়।" } },
      { q: { en: "How many sections can I add?", hi: "मैं कितने खंड जोड़ सकता हूँ?", bn: "কতগুলো বিভাগ যোগ করা যায়?" }, a: { en: "Add as many as your paper needs — each with its own count and marks.", hi: "जितने आपके पेपर को चाहिए उतने जोड़ें — हर एक की अपनी संख्या और अंक के साथ।", bn: "যত দরকার তত যোগ করো — প্রতিটির নিজস্ব সংখ্যা ও নম্বরসহ।" } },
      { q: { en: "Can I print the blueprint?", hi: "क्या मैं ब्लूप्रिंट प्रिंट कर सकता हूँ?", bn: "নকশা কি প্রিন্ট করা যায়?" }, a: { en: "Yes — use print for a clean blueprint table without the page chrome.", hi: "हाँ — पेज के अतिरिक्त हिस्सों के बिना साफ़ ब्लूप्रिंट तालिका के लिए प्रिंट का उपयोग करें।", bn: "হ্যাঁ — প্রিন্ট ব্যবহার করো পরিষ্কার নকশা টেবিলের জন্য।" } },
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
