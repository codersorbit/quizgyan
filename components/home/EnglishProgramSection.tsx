"use client";
import { useState } from "react";

type Tab = {
  key: string;
  label: string;
  color: string;
  textColor: string;
  title: string;
  desc: string;
  points: string[];
  img: string;
};

const TABS: Tab[] = [
  {
    key: "multi",
    label: "Clear notes",
    color: "#1F3FBF",
    textColor: "#fff",
    title: "Short notes that actually click",
    desc:
      "Every chapter, rewritten as short, friendly notes you can read in minutes — in English and বাংলা.",
    points: [
      "Key ideas, simply explained",
      "Worked examples and definitions",
      "Written to be understood, not crammed",
    ],
    img:
      "/img/tab-1.jpg",
  },
  {
    key: "social",
    label: "Instant quiz",
    color: "#FFD500",
    textColor: "#0F2A5C",
    title: "Quiz yourself, instantly",
    desc:
      "Each chapter ends with a quick multiple-choice quiz that tells you right away how you did.",
    points: [
      "Tap an answer, see it marked at once",
      "A short explanation for every question",
      "Your score, the moment you finish",
    ],
    img:
      "/img/tab-2.jpg",
  },
  {
    key: "outdoor",
    label: "Exam-style Q&A",
    color: "#E63946",
    textColor: "#fff",
    title: "Practice like the real exam",
    desc:
      "Short-answer, long-answer and HOTS questions modelled on how the boards actually ask them.",
    points: [
      "Short and long answer practice",
      "Higher-order thinking questions",
      "Common mistakes to avoid",
    ],
    img:
      "/img/tab-3.jpg",
  },
  {
    key: "english",
    label: "Daily challenge",
    color: "#2A3A55",
    textColor: "#fff",
    title: "One question, every day",
    desc:
      "A fresh mixed question every day to keep your learning streak alive.",
    points: [
      "A brand-new question daily",
      "Builds a streak you can track",
      "Mixes subjects and classes",
    ],
    img:
      "/img/tab-4.jpg",
  },
];

export default function EnglishProgramSection() {
  const [active, setActive] = useState(TABS[0].key);
  const current = TABS.find((t) => t.key === active) ?? TABS[0];

  return (
    <section className="relative bg-white pt-20 md:pt-24 pb-20 md:pb-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Tab pills */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10">
          {TABS.map((tab) => {
            const isActive = tab.key === active;
            return (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className="px-6 py-2.5 rounded-full text-sm whitespace-nowrap cursor-pointer transition-all"
                style={{
                  fontFamily: "'Fredoka', sans-serif",
                  fontWeight: 600,
                  backgroundColor: isActive ? tab.color : "#F1EEE6",
                  color: isActive ? tab.textColor : "#0F2A5C",
                  opacity: isActive ? 1 : 0.85,
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content panel */}
        <div
          className="relative rounded-[28px] overflow-hidden p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center transition-colors"
          style={{ backgroundColor: current.color }}
        >
          {/* Left text */}
          <div style={{ color: current.textColor }}>
            <h3
              className="text-3xl md:text-[40px] leading-[1.05] tracking-tight uppercase mb-5"
              style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700 }}
            >
              {current.title}
            </h3>
            <p
              className="text-[15px] leading-relaxed mb-7 opacity-90"
              style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 400 }}
            >
              {current.desc}
            </p>
            <ul className="space-y-3.5 mb-8">
              {current.points.map((p) => (
                <li
                  key={p}
                  className="flex items-center gap-3 text-sm"
                  style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 500 }}
                >
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: current.textColor,
                      color: current.color,
                    }}
                  >
                    <i className="ri-check-line text-sm" />
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <a
              href="/cbse"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm transition-opacity hover:opacity-90 whitespace-nowrap cursor-pointer"
              style={{
                fontFamily: "'Fredoka', sans-serif",
                fontWeight: 600,
                backgroundColor: current.textColor,
                color: current.color,
              }}
            >
              Browse classes
              <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center" />
            </a>
          </div>

          {/* Right image */}
          <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
            <img
              src={current.img}
              alt={current.title}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}