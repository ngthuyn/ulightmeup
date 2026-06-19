"use client";

import { ReactNode } from "react";

type PageShellProps = {
  videoSrc: string;
  children: ReactNode;
};

export default function PageShell({ videoSrc, children }: PageShellProps) {
  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-[#edf5ff] text-zinc-900">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover opacity-30 blur-[3px] scale-105"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.78)_0%,rgba(255,255,255,0.22)_32%,rgba(255,255,255,0.08)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.5),transparent_36%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:56px_56px] opacity-15" />

      <div className="absolute left-[-8%] top-[-12%] h-[26rem] w-[26rem] rounded-full bg-sky-300/25 blur-3xl" />
      <div className="absolute right-[-10%] top-[12%] h-[24rem] w-[24rem] rounded-full bg-cyan-300/18 blur-3xl" />
      <div className="absolute left-[12%] bottom-[-14%] h-[26rem] w-[26rem] rounded-full bg-blue-200/28 blur-3xl" />

      <div className="relative z-10">{children}</div>
    </main>
  );
}