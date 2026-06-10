"use client";
import { useEffect, useRef, useState } from "react";

type Shape = "star" | "petal" | "triangle" | null;

type Section =
  | { kind: "hold"; vh: number }
  | { kind: "reveal"; transitionVh: number; holdVh: number };

const CX = 50;
const CY = 50;
const FULL_PROGRESS = 0.998;

const SHAPE_BY_INDEX: Shape[] = ["star", "petal", "triangle"];

// 三个 section 节奏完全一致
const SECTIONS: Section[] = [
  { kind: "reveal", transitionVh: 0.6, holdVh: 0.7 },
  { kind: "reveal", transitionVh: 0.6, holdVh: 0.7 },
  { kind: "reveal", transitionVh: 0.6, holdVh: 0.7 },
];

const HERO_COPY = [
  {
    eyebrow: "Step 01",
    title: "Read it clearly",
    subtitle:
      "Every chapter, turned into short, friendly notes — in English and বাংলা, made to be understood, not memorised.",
  },
  {
    eyebrow: "Step 02",
    title: "Quiz it instantly",
    subtitle:
      "Answer questions and get feedback the moment you tap. Keep scrolling to see how it all fits together.",
  },
  {
    eyebrow: "Step 03",
    title: "Keep your streak",
    subtitle:
      "One fresh question every day. CBSE and West Bengal board, Class 1 to 10 — free, forever, no login.",
  },
];

const HERO_IMAGES = [
  "/img/hero-1.png",
  "/img/hero-2.png",
  "/img/hero-3.png",
];

type Point = { x: number; y: number; sortAngle: number };

function addFlowerPoints(
  list: Point[],
  cx: number,
  cy: number,
  outerR: number,
  innerR: number,
  petals: number,
  rotation: number,
) {
  for (let i = 0; i < petals * 2; i++) {
    const radius = i % 2 === 0 ? outerR : innerR;
    const angle = rotation + (Math.PI * i) / petals;
    const x = cx + radius * Math.cos(angle);
    const y = cy + radius * Math.sin(angle);
    list.push({
      x,
      y,
      sortAngle: Math.atan2(y - CY, x - CX),
    });
  }
}

function formatPolygon(points: Point[]) {
  return (
    "polygon(" +
    points
      .map((p) => `${p.x.toFixed(2)}% ${p.y.toFixed(2)}%`)
      .join(", ") +
    ")"
  );
}

function buildPetalClip(progress: number) {
  const t = Math.min(1, progress / FULL_PROGRESS);
  const points: Point[] = [];
  const centerOuter = 3 + t * 76;
  const centerInner = centerOuter * 0.48;

  addFlowerPoints(points, CX, CY, centerOuter, centerInner, 6, -Math.PI / 2);

  return formatPolygon(points);
}

/* 第一张：屏幕正中的五角星 → 铺满全屏。初始稍大，并带轻微旋转 */
function buildStarClip(progress: number) {
  const t = Math.min(1, progress / FULL_PROGRESS);
  // 起点稍大一点，随滚动扩张到能覆盖屏幕四角
  const outerR = 78 + t * 122;
  const innerR = outerR * 0.5;
  const points: Point[] = [];

  // 轻微旋转，俏皮一点（约 28°）
  const rotation = -Math.PI / 2 + t * 0.5;
  addFlowerPoints(points, CX, CY, outerR, innerR, 5, rotation);

  return formatPolygon(points);
}

function buildRoundedTriangleClip(progress: number) {
  const t = Math.min(1, progress / FULL_PROGRESS);
  const size = 4 + t * 160;
  const points: Point[] = [];

  const v0: [number, number] = [50 - size * 0.1, 50 - size * 1.0];
  const v1: [number, number] = [50 + size * 1.05, 50 + size * 0.7];
  const v2: [number, number] = [50 - size * 0.95, 50 + size * 0.65];
  const verts = [v0, v1, v2];
  const edgeBulge = [1.18, 0.92, 1.05];
  const edgeWobble = [0.08, -0.12, 0.1];

  for (let e = 0; e < 3; e++) {
    const a = verts[e];
    const b = verts[(e + 1) % 3];
    const steps = 10;

    for (let s = 0; s < steps; s++) {
      if (e > 0 && s === 0) {
        continue;
      }

      const u = s / steps;
      let x = a[0] + (b[0] - a[0]) * u;
      let y = a[1] + (b[1] - a[1]) * u;
      const midX = (a[0] + b[0]) / 2;
      const midY = (a[1] + b[1]) / 2;
      const nx = midX - CX;
      const ny = midY - CY;
      const len = Math.sqrt(nx * nx + ny * ny) || 1;
      const bulge =
        size * 0.14 * edgeBulge[e] * Math.sin(u * Math.PI) +
        size * edgeWobble[e] * Math.sin(u * Math.PI * 2);

      x += (nx / len) * bulge;
      y += (ny / len) * bulge;

      points.push({
        x,
        y,
        sortAngle: Math.atan2(y - CY, x - CX),
      });
    }
  }

  points.sort((a, b) => a.sortAngle - b.sortAngle);

  return formatPolygon(points);
}

function buildClip(shape: Shape, progress: number) {
  if (shape === "star") {
    return buildStarClip(progress);
  }
  if (shape === "petal") {
    return buildPetalClip(progress);
  }
  if (shape === "triangle") {
    return buildRoundedTriangleClip(progress);
  }
  return "circle(15% at 50% 50%)";
}

function sectionLengthVh(section: Section) {
  if (section.kind === "hold") {
    return section.vh;
  }
  return section.transitionVh + section.holdVh;
}

export default function HeroMaskSection() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const offsetsRef = useRef<number[]>([]);
  const tickingRef = useRef(false);
  const activeRef = useRef(0);

  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    const stage = stageRef.current;
    if (!track || !stage) return;

    const rebuildOffsets = () => {
      const vh = window.innerHeight;
      let totalVh = 0;
      const next: number[] = [0];

      SECTIONS.forEach((section) => {
        totalVh += sectionLengthVh(section);
        next.push(totalVh * vh);
      });

      offsetsRef.current = next;
      track.style.height = `${totalVh * 100}vh`;
      return vh;
    };

    const getScrollState = (scrollY: number) => {
      let sectionIndex = 0;
      const offsets = offsetsRef.current;

      for (let i = 0; i < SECTIONS.length; i++) {
        if (scrollY >= offsets[i + 1]) {
          sectionIndex = i + 1;
        }
      }

      sectionIndex = Math.min(sectionIndex, HERO_IMAGES.length - 1);

      const localScroll = scrollY - offsets[sectionIndex];
      const section = SECTIONS[sectionIndex];
      let progress = 0;

      if (section.kind === "reveal") {
        const transitionPx = section.transitionVh * window.innerHeight;
        progress = Math.min(1, Math.max(0, localScroll / transitionPx));
        progress = 1 - Math.pow(1 - progress, 1.35);
      }

      return { sectionIndex, progress };
    };

    const applyFull = (img: HTMLImageElement) => {
      img.classList.add("is-full");
      img.style.clipPath = "none";
      img.style.transform = "scale(1)";
    };

    const applyShapeMask = (
      img: HTMLImageElement,
      progress: number,
      shape: Shape,
    ) => {
      img.classList.remove("is-full");
      // 第一张（star）始终保持原始比例，不放大
      const scale = shape === "star" ? 1 : 1.1 - progress * 0.1;
      img.style.clipPath = buildClip(shape, progress);
      img.style.transform = `scale(${scale})`;
    };

    const update = () => {
      rebuildOffsets();
      const offsets = offsetsRef.current;
      const maxScroll = offsets[offsets.length - 1] - 1;
      const scrollY = Math.min(Math.max(window.scrollY, 0), maxScroll);
      const state = getScrollState(scrollY);
      const { sectionIndex, progress } = state;

      imageRefs.current.forEach((img, i) => {
        if (!img) return;
        const shape = SHAPE_BY_INDEX[i];

        if (i < sectionIndex) {
          img.classList.add("is-active");
          applyFull(img);
        } else if (i === sectionIndex) {
          img.classList.add("is-active");
          if (
            SECTIONS[sectionIndex].kind === "hold" ||
            progress >= FULL_PROGRESS
          ) {
            applyFull(img);
          } else {
            applyShapeMask(img, progress, shape);
          }
        } else {
          img.classList.remove("is-active");
          applyShapeMask(img, 0, shape);
        }
      });

      if (sectionIndex !== activeRef.current) {
        activeRef.current = sectionIndex;
        stage.dataset.active = String(sectionIndex + 1);
        setActiveIndex(sectionIndex);
      }

      setScrollProgress(scrollY / Math.max(1, maxScroll));

      tickingRef.current = false;
    };

    const onScroll = () => {
      if (!tickingRef.current) {
        tickingRef.current = true;
        requestAnimationFrame(update);
      }
    };

    let observer: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        () => {
          onScroll();
        },
        { root: null, threshold: [0, 0.5, 1] },
      );
      observer.observe(track);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Fixed visual stage */}
      <div
        ref={stageRef}
        data-active="1"
        className="fixed inset-0 w-full h-screen overflow-hidden z-0 transition-colors duration-700"
        style={{
          backgroundColor:
            activeIndex === 0
              ? "#FFB870"
              : activeIndex === 1
              ? "#FFD500"
              : "#FFD500",
        }}
        aria-live="polite"
      >
        {HERO_IMAGES.map((src, i) => (
          <img
            key={src}
            ref={(el) => {
              imageRefs.current[i] = el;
            }}
            src={src}
            alt={`Hero scene ${i + 1}`}
            width={1920}
            height={1080}
            className="mask-image absolute inset-0 block w-full h-full object-cover object-center"
            style={{
              transformOrigin: "center center",
              willChange: "clip-path, transform",
              zIndex: i + 1,
            }}
          />
        ))}

        {/* Dark overlay for legibility */}
        <div className="absolute inset-0 z-[20] bg-gradient-to-b from-black/40 via-black/20 to-black/45 pointer-events-none" />
        <div
          className="absolute inset-0 z-[20] pointer-events-none"
          style={{ background: "radial-gradient(62% 46% at 50% 30%, rgba(0,0,0,0.55) 0%, transparent 72%)" }}
        />

        {/* Animated copy */}
        <div className="absolute inset-0 z-[25] flex items-start justify-center px-6 pt-[92px] md:pt-[124px]">
          <div className="relative w-full max-w-3xl text-center text-white">
            {HERO_COPY.map((copy, i) => (
              <div
                key={copy.title}
                className={`absolute inset-0 flex flex-col items-center justify-start transition-all duration-700 ease-out ${
                  activeIndex === i
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 pointer-events-none"
                }`}
              >
                <span className="uppercase tracking-[0.4em] text-xs md:text-sm text-white mb-5 [text-shadow:_0_2px_10px_rgba(0,0,0,0.6)]">
                  {copy.eyebrow}
                </span>
                <h1
                  className="text-4xl md:text-6xl lg:text-7xl leading-[1.05]"
                  style={{
                    fontFamily: "'Fredoka', 'Bagel Fat One', cursive",
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                    textShadow: "0 2px 18px rgba(0,0,0,0.6), 0 1px 2px rgba(0,0,0,0.5)",
                  }}
                >
                  {copy.title}
                </h1>
                <p className="mt-6 text-base md:text-lg text-white/95 max-w-xl mx-auto leading-relaxed [text-shadow:_0_2px_10px_rgba(0,0,0,0.6)]">
                  {copy.subtitle}
                </p>
              </div>
            ))}
            {/* Spacer so absolute children have something to size against */}
            <div className="invisible">
              <span className="block text-xs">.</span>
              <span className="block text-7xl">.</span>
              <span className="block text-lg">.</span>
            </div>
          </div>
        </div>

        {/* Bottom UI: indicator + scroll hint */}
        <div className="absolute bottom-0 left-0 right-0 z-[30] px-8 md:px-12 pb-8 flex items-end justify-between">
          <div className="flex items-center gap-3">
            {HERO_COPY.map((_, i) => (
              <span
                key={i}
                className={`h-[2px] transition-all duration-500 ${
                  activeIndex === i
                    ? "w-10 bg-white"
                    : "w-5 bg-white/40"
                }`}
              />
            ))}
            <span className="ml-3 text-white/70 text-xs tracking-[0.3em]">
              0{activeIndex + 1} / 0{HERO_COPY.length}
            </span>
          </div>

        </div>
      </div>

      {/* Invisible scroll driver — defines page height */}
      <div ref={trackRef} className="pointer-events-none" aria-hidden="true" />
    </>
  );
}