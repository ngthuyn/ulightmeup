"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  return (
 <main
  className="relative min-h-screen overflow-hidden bg-black text-white"
>
  {/* GIF Background */}
  <img
    src="/videos/bg1.gif"
    alt="First Single"
    className="absolute inset-0 h-full w-full object-cover"
    draggable={false}
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/45" />

  {/* Content */}
  <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">

   <h2 className="text-sm md:text-lg tracking-[0.45em] text-white/80">
  lighT's
</h2>

<h1 className="mt-4 text-5xl md:text-7xl font-black tracking-[0.04em]">
  FIRST SINGLE
</h1>

<p className="mt-4 text-lg md:text-2xl uppercase tracking-[0.55em] text-white/80">
  OUT NOW
</p>

<h3 className="mt-14 text-3xl md:text-5xl font-medium italic">
  "Tên bài hát"
</h3>

    <div className="mt-14 flex w-full max-w-sm flex-col gap-5">

    

      {/* Chỉ hiện khi còn code */}
<a
        href="https://light-itunes-code.vercel.app/"
        target="_blank"
        className="rounded-full border border-white/40 bg-white/10 py-4 backdrop-blur-md hover:bg-white/20"
      >
        🎁 REDEEM CODE
      </a>
    </div>

  </div>
</main>
  );
}