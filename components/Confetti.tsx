"use client";

import { useEffect, useRef, useState } from "react";

const COLORS = ["#0f2a5c", "#ffd500", "#ff6fb5", "#e63946", "#1faf6b"];

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rot: number;
  vr: number;
  size: number;
  color: string;
  shape: 0 | 1;
};

/**
 * A small, dependency-free confetti burst.
 * Mount it (e.g. on a winning result) and it fires once, then removes itself.
 * Honours prefers-reduced-motion and never blocks pointer events.
 */
export function Confetti({
  count = 150,
  duration = 2400,
}: {
  count?: number;
  duration?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduce) {
      setShow(false);
      return;
    }
    const canvas = canvasRef.current;
    if (!canvas) return;
    const g = canvas.getContext("2d");
    if (!g) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let W = window.innerWidth;
    let H = window.innerHeight;

    function resize() {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas!.width = W * dpr;
      canvas!.height = H * dpr;
      canvas!.style.width = `${W}px`;
      canvas!.style.height = `${H}px`;
      g!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    // Two corner "cannons" angled inward for a celebratory burst.
    const particles: Particle[] = [];
    const emitters = [
      { x: W * 0.12, y: H + 8, angle: -Math.PI / 2 - 0.5 },
      { x: W * 0.88, y: H + 8, angle: -Math.PI / 2 + 0.5 },
    ];
    for (const em of emitters) {
      for (let k = 0; k < Math.round(count / 2); k++) {
        const angle = em.angle + (Math.random() - 0.5) * 0.9;
        const speed = 10 + Math.random() * 11;
        particles.push({
          x: em.x,
          y: em.y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          rot: Math.random() * Math.PI,
          vr: (Math.random() - 0.5) * 0.32,
          size: 6 + Math.random() * 7,
          color: COLORS[(Math.random() * COLORS.length) | 0],
          shape: Math.random() < 0.5 ? 0 : 1,
        });
      }
    }

    const gravity = 0.24;
    const drag = 0.992;
    const start = performance.now();
    let raf = 0;

    function frame(now: number) {
      const t = now - start;
      const lifeLeft = 1 - Math.min(1, t / duration);
      g!.clearRect(0, 0, W, H);
      for (const p of particles) {
        p.vy += gravity;
        p.vx *= drag;
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr;
        g!.save();
        g!.globalAlpha = Math.max(0, lifeLeft);
        g!.translate(p.x, p.y);
        g!.rotate(p.rot);
        g!.fillStyle = p.color;
        if (p.shape === 0) {
          g!.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
        } else {
          g!.beginPath();
          g!.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          g!.fill();
        }
        g!.restore();
      }
      if (t < duration) {
        raf = requestAnimationFrame(frame);
      } else {
        g!.clearRect(0, 0, W, H);
        setShow(false);
      }
    }
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [count, duration]);

  if (!show) return null;
  return <canvas ref={canvasRef} aria-hidden className="pointer-events-none fixed inset-0 z-50" />;
}
