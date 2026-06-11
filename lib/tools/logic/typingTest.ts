// Pure typing-test maths and the practice passages. All passages are original,
// neutral text written for this tool — not copyrighted material.

export type TypingLang = "en" | "hi" | "bn";

export interface TypingStats {
  grossWpm: number;
  netWpm: number;
  accuracy: number; // percent
  errors: number;
  correct: number;
  typed: number;
  seconds: number;
}

const CHARS_PER_WORD = 5;

/** Compare typed against target, character by character, up to typed length. */
export function compareTyped(target: string, typed: string): { correct: number; incorrect: number } {
  let correct = 0;
  let incorrect = 0;
  const n = Math.min(typed.length, target.length);
  for (let i = 0; i < n; i += 1) {
    if (typed[i] === target[i]) correct += 1;
    else incorrect += 1;
  }
  // characters typed past the end of the target count as errors
  if (typed.length > target.length) incorrect += typed.length - target.length;
  return { correct, incorrect };
}

/** Standard WPM maths: a "word" is five characters. */
export function computeStats(typedLength: number, incorrect: number, elapsedMs: number): TypingStats {
  const minutes = elapsedMs / 60000;
  const grossWpm = minutes > 0 ? typedLength / CHARS_PER_WORD / minutes : 0;
  const netWpm = minutes > 0 ? Math.max(0, (typedLength / CHARS_PER_WORD - incorrect) / minutes) : 0;
  const accuracy = typedLength > 0 ? ((typedLength - incorrect) / typedLength) * 100 : 100;
  return {
    grossWpm: Math.round(grossWpm),
    netWpm: Math.round(netWpm),
    accuracy: Math.round(accuracy * 10) / 10,
    errors: incorrect,
    correct: typedLength - incorrect,
    typed: typedLength,
    seconds: Math.round(elapsedMs / 100) / 10,
  };
}

export const TIMED_OPTIONS = [60, 120, 300] as const;

export const TYPING_PASSAGES: Record<TypingLang, string[]> = {
  en: [
    "A good habit grows slowly, one small step at a time. When you sit down to study at the same hour each day, your mind learns to settle quickly. Keep a clean desk, a glass of water, and a short list of tasks. Finish the easy work first, then move on to the harder pages, and rest your eyes for a minute after each one.",
    "The river moves quietly past the old stone bridge. Birds call from the tall trees while a light wind carries the smell of wet earth. A boy walks along the bank and counts the slow boats that drift by. He hopes that one day he will sail far beyond the bend, where the calm water meets the wide and open sky.",
    "Reading every day is one of the simplest ways to learn. A book can take you to a busy city, a quiet farm, or a distant land you have never seen. The more you read, the more words you know, and the easier it becomes to share your own ideas clearly with the people around you.",
  ],
  hi: [
    "अच्छी आदत धीरे-धीरे बनती है, एक छोटे कदम से। जब आप हर दिन एक ही समय पर पढ़ने बैठते हैं, तो मन जल्दी शांत होना सीख जाता है। मेज़ साफ़ रखें, पास में पानी रखें और कामों की एक छोटी सूची बनाएँ। पहले आसान काम पूरा करें, फिर कठिन पन्नों की ओर बढ़ें।",
    "नदी पुराने पत्थर के पुल के पास चुपचाप बहती है। ऊँचे पेड़ों से पक्षी पुकारते हैं और हल्की हवा गीली मिट्टी की गंध लाती है। एक बच्चा किनारे पर चलते हुए धीमी नावों को गिनता है। उसे आशा है कि एक दिन वह मोड़ से बहुत दूर जाएगा, जहाँ शांत पानी खुले आसमान से मिलता है।",
    "हर दिन पढ़ना सीखने का सबसे सरल तरीका है। एक किताब आपको भीड़ भरे शहर, शांत खेत या किसी दूर देश तक ले जा सकती है। जितना अधिक आप पढ़ते हैं, उतने अधिक शब्द आप जानते हैं, और अपने विचारों को साफ़-साफ़ कहना उतना ही आसान हो जाता है।",
  ],
  bn: [
    "ভালো অভ্যাস ধীরে ধীরে গড়ে ওঠে, একটি ছোট পদক্ষেপ দিয়ে। প্রতিদিন একই সময়ে পড়তে বসলে মন দ্রুত শান্ত হতে শেখে। টেবিল পরিষ্কার রাখো, পাশে জল রাখো আর কাজের একটি ছোট তালিকা তৈরি করো। আগে সহজ কাজ শেষ করো, তারপর কঠিন পাতার দিকে এগোও।",
    "নদীটি পুরোনো পাথরের সেতুর পাশ দিয়ে চুপচাপ বয়ে যায়। উঁচু গাছ থেকে পাখি ডাকে আর হালকা বাতাস ভেজা মাটির গন্ধ বয়ে আনে। একটি ছেলে পাড় ধরে হেঁটে ধীর নৌকা গোনে। তার আশা, একদিন সে বাঁক পেরিয়ে অনেক দূরে যাবে, যেখানে শান্ত জল খোলা আকাশের সঙ্গে মেশে।",
    "প্রতিদিন পড়া শেখার সবচেয়ে সহজ উপায়গুলোর একটি। একটি বই তোমাকে ব্যস্ত শহর, শান্ত খেত বা দূরের কোনো দেশে নিয়ে যেতে পারে। যত বেশি পড়বে, তত বেশি শব্দ জানবে, আর নিজের ভাবনা স্পষ্টভাবে বলা তত সহজ হবে।",
  ],
};
