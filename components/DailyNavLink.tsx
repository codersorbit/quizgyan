"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { todayStr } from "@/lib/daily";

export function DailyNavLink() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(`qg:daily:${todayStr()}`)) setDone(true);
    } catch {
      /* ignore */
    }
  }, []);

  return (
    <Link
      href="/daily"
      className="flex items-center gap-1 rounded-full px-3 py-1.5 hover:bg-cobalt-soft hover:text-cobalt"
    >
      Daily
      {done && (
        <span
          aria-label="Completed today"
          title="Completed today"
          className="inline-grid h-4 w-4 place-items-center rounded-full bg-green text-[0.6rem] font-bold leading-none text-white"
        >
          ✓
        </span>
      )}
    </Link>
  );
}
