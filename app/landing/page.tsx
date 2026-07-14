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

    <h2 className="text-lg md:text-2xl tracking-[0.2em]">
      lighT's
    </h2>

    <h1 className="mt-2 text-5xl md:text-7xl font-bold uppercase">
      FIRST SINGLE
    </h1>

    <p className="mt-3 text-2xl md:text-3xl uppercase tracking-[0.3em]">
      OUT NOW
    </p>

    <h3 className="mt-10 text-3xl md:text-6xl font-semibold">
      "Tên bài hát"
    </h3>

    <div className="mt-14 flex w-full max-w-sm flex-col gap-5">

      <a
        href="https://www.youtube.com/watch?v=dCx1XTxPxXg"
        target="_blank"
        className="rounded-full bg-red-600 py-4 font-semibold transition hover:bg-red-500"
      >
        ▶ WATCH NOW
      </a>

      <a
        href="https://open.spotify.com/artist/0yPC26mvNqJMBjEl7qZbez?si=hLRLXxAlQ_GXRb8Z-mdTKw"
        target="_blank"
        className="
          rounded-full
          bg-green-600
          py-4
          font-semibold
          transition
          hover:bg-green-500
        "
      >
        ♫ STREAM NOW
      </a>

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