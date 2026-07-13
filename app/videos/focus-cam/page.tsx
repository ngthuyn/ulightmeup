"use client";

import Link from "next/link";
import { videos } from "./data";

export default function FocusCamPage() {
  return (
    <main
      className="min-h-screen text-white"
      style={{
        backgroundImage: "url('/videos/bg.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section className="mx-auto max-w-6xl px-6 pt-28 pb-24">

        <h1 className="text-center text-4xl font-black">
          FOCUS CAM
        </h1>

        <div className="mt-20 space-y-10">

          {videos.map((video) => (

            <Link
              key={video.id}
              href={`/videos/focus-cam/${video.id}`}
              className="
                group
                block
                overflow-hidden
                rounded-[30px]
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                transition
                hover:border-sky-300/40
                hover:bg-white/[0.08]
              "
            >

              <div
                className="
                  grid
                  gap-8
                  p-6
                  md:grid-cols-[280px_1fr]
                  items-center
                "
              >

                {/* Thumbnail */}

                <div className="overflow-hidden rounded-2xl">

                  <img
                    src={video.image}
                    alt={video.title}
                    className="
                      aspect-[16/9]
                      w-full
                      object-cover
                      duration-500
                      group-hover:scale-105
                    "
                  />

                </div>

                {/* Text */}

                <div>

                  <p className="uppercase tracking-[0.25em] text-sky-300">

                    {video.event}

                  </p>

                  <h2
                    className="
                      mt-3
                      text-4xl
                      font-quote
                      italic
                    "
                  >
                    {video.title}
                  </h2>

                  <p className="mt-4 text-white/60">

                    {video.date}

                  </p>

                  <div
                    className="
                      mt-10
                      inline-flex
                      items-center
                      rounded-full
                      border
                      border-sky-300/30
                      px-6
                      py-3
                      text-sky-300
                      transition
                      group-hover:bg-sky-400/10
                    "
                  >
                    📹 Xem →
                  </div>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </section>
    </main>
  );
}