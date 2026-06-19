"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import PageShell from "@/components/PageShell";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const itemClass = (href: string) =>
    `relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
      pathname === href
        ? "bg-sky-100 text-sky-700 shadow-sm"
        : "text-zinc-700 hover:bg-white hover:text-zinc-900"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto w-full max-w-screen-2xl px-4 py-3 sm:px-6 lg:px-12">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center">
            <img
              src="/images/u lighT me up.png"
              alt="u lighT me up!"
              className="h-10 w-auto opacity-90 sm:h-12"
            />
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-end">
            <Link href="/" className={itemClass("/")}>
              Home
            </Link>

            <Link href="/profile" className={itemClass("/profile")}>
              Profile
            </Link>

            <Link href="/activities" className={itemClass("/activities")}>
              Activities
            </Link>

            <Link href="/fancam" className={itemClass("/fancam")}>
              Fancam
            </Link>

            <Link href="/gallery" className={itemClass("/gallery")}>
              Gallery
            </Link>

            <Link href="/tmi" className={itemClass("/tmi")}>
              TMI
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}