"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useLang, withLang } from "./islands/_shared";

/**
 * A Next.js Link that keeps the visitor's chosen tool language (?lang=hi|bn)
 * as they move between tool pages. Server-rendered href stays clean (English)
 * for crawlers; after hydration the link reflects the active language and
 * updates live when the toggle changes via the shared language event.
 */
export default function ToolLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  const [lang] = useLang();
  return (
    <Link href={withLang(href, lang)} className={className}>
      {children}
    </Link>
  );
}
