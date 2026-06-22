"use client";

import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  return (
    <main
      className="flex min-h-screen items-center justify-center text-white"
      style={{
        backgroundImage: "url('/images/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center">
        <p className="text-5xl">✨</p>

        <h1 className="mt-6 text-4xl font-black">
          Welcome to lighT's universe
        </h1>

        <p className="mt-4 text-blue/10">
          lài tì lái ti
        </p>

        <button
          onClick={() => {
            sessionStorage.setItem(
              "musicStarted",
              "true"
            );

            router.push("/home");
          }}
          className="
            mt-10
            rounded-full
            border border-white/20
            bg-white/10
            px-10 py-4
            text-lg font-semibold
            backdrop-blur-md
            transition
            hover:scale-105
          "
        >
          Enter ✨
        </button>
      </div>
    </main>
  );
}