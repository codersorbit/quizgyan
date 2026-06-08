"use client";

import { useEffect, useState } from "react";

function msToLocalMidnight(): number {
  const n = new Date();
  // Next local midnight via calendar construction (DST-safe).
  const next = new Date(n.getFullYear(), n.getMonth(), n.getDate() + 1, 0, 0, 0, 0);
  return next.getTime() - n.getTime();
}

function fmt(ms: number): string {
  if (ms <= 0) return "moments";
  const h = Math.floor(ms / 3_600_000);
  const m = Math.floor((ms % 3_600_000) / 60_000);
  if (h <= 0) return `${m}m`;
  return `${h}h ${m}m`;
}

export function ResetHint({ className = "" }: { className?: string }) {
  const [ms, setMs] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setMs(msToLocalMidnight());
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  // Renders nothing on the server / first paint — avoids hydration mismatch.
  if (ms === null) return null;

  return (
    <p className={`text-sm text-muted ${className}`}>
      🕛 New challenge in <span className="font-semibold text-ink">{fmt(ms)}</span>
    </p>
  );
}
