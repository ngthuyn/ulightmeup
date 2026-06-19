"use client";

import { ReactNode } from "react";

type PageShellProps = {
  videoSrc: string;
  children: ReactNode;
};

export default function PageShell({ videoSrc, children }: PageShellProps) {
  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-black text-white">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover opacity-35 blur-[2px]"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_35%)]" />

      <div className="relative z-10">{children}</div>
    </main>
  );
}