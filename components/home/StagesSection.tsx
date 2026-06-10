"use client";
const STAGES = [
  {
    label: "Primary",
    age: "Class 1 – 5",
    href: "/wbbpe",
    color: "#E63946",
    textColor: "#fff",
    img:
      "/img/stage-1.jpg",
  },
  {
    label: "Middle",
    age: "Class 6 – 8",
    href: "/cbse",
    color: "#FFD500",
    textColor: "#0F2A5C",
    img:
      "/img/stage-2.jpg",
  },
  {
    label: "Board",
    age: "Class 9 – 10",
    href: "/cbse",
    color: "#0F2A5C",
    textColor: "#fff",
    img:
      "/img/stage-3.jpg",
  },
];

export default function StagesSection() {
  return (
    <section className="relative bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Top pill badge */}
        <div className="flex justify-center mb-5">
          <span
            className="inline-flex items-center gap-2 bg-[#F5F1E8] text-[#0F2A5C] text-[11px] tracking-[0.25em] uppercase px-4 py-1.5 rounded-full"
            style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#0F2A5C]" />
            From first steps to boards
          </span>
        </div>

        {/* Title */}
        <h2
          className="text-center text-4xl md:text-6xl text-[#0F2A5C] leading-[1.05] tracking-tight mb-14 md:mb-16"
          style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700 }}
        >
          LEARNING THAT GROWS WITH
          <br />
          EVERY <span className="text-[#E63946]">CLASS</span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
          {STAGES.map((stage) => (
            <a
              key={stage.label}
              href={stage.href}
              className="block relative rounded-[28px] overflow-hidden bg-white transition-transform hover:-translate-y-1 cursor-pointer"
            >
              {/* Photo area */}
              <div className="relative h-[440px] md:h-[480px] bg-white overflow-hidden">
                <img
                  src={stage.img}
                  alt={stage.label}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full w-auto object-contain object-bottom"
                />
              </div>
              {/* Colored footer band */}
              <div
                className="text-center py-5 px-4"
                style={{ backgroundColor: stage.color, color: stage.textColor }}
              >
                <div
                  className="text-[10px] tracking-[0.3em] uppercase opacity-80 mb-1.5"
                  style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 500 }}
                >
                  {stage.age}
                </div>
                <div
                  className="text-lg md:text-xl tracking-wide uppercase"
                  style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700 }}
                >
                  {stage.label}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}