"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const itemClass = (href: string) =>
    `relative pb-1 transition ${
      pathname === href ? "opacity-100" : "opacity-90"
    } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-white after:transition-all after:duration-300 ${
      pathname === href ? "after:w-full" : "after:w-0 hover:after:w-full"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-sky-500 to-cyan-400 text-white shadow-md backdrop-blur">
      <div className="mx-auto w-full max-w-screen-2xl px-4 py-3 sm:px-6 lg:px-12">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center">
            <img
              src="/images/u lighT me up.png"
              alt="u lighT me up!"
              className="h-12 w-auto brightness-0 invert contrast-[300%] sm:h-14"
            />
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium sm:justify-end">
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

            <Link href="/tmi" className={itemClass("/tmi")}>
              TMI
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}