"use client";
import { useState } from "react";
import Link from "next/link";
import { videos } from "./data";

export default function FocusCamPage() {
    const [search, setSearch] = useState("");

 const filteredVideos = videos.filter((video) => {
  const keyword = search.toLowerCase();

  return (
    video.title.toLowerCase().includes(keyword) ||
    video.event.toLowerCase().includes(keyword) ||
    video.date.toLowerCase().includes(keyword) ||
    video.keywords.some((k) =>
      k.toLowerCase().includes(keyword)
    )
  );

});
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
<div className=" flex justify-center">
      <img
        src="/images/logo_web/logo-04.png" // đổi sang đường dẫn logo của bạn
        alt="lighT"
        className="
          h-10
          w-auto
          sm:h-12
          md:h-13
          transition
          duration-300
          hover:scale-105
        "
      />
  </div>
        <h1 className="text-center text-xl font-black">
  FOCUS CAM
</h1>

<div className="mx-auto mt-10 max-w-xl">
  <input
    type="text"
    placeholder="🔍 Tìm theo bài hát, sự kiện..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="
      w-full
      rounded-full
      border
      border-white/15
      bg-white/10
      px-6
      py-3
      text-white
      placeholder:text-white/40
      backdrop-blur-xl
      outline-none
      transition
      focus:border-sky-300
      focus:bg-white/15
    "
  />
</div>

        <div className="mt-20 space-y-10">

{filteredVideos.map((video) => (
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
{filteredVideos.length === 0 && (
  <p className="py-16 text-center text-white/60">
    Không tìm thấy Focus Cam phù hợp.
  </p>
)}
        </div>

      </section>
    </main>
  );
}