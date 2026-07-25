"use client";
import Link from "next/link";
const behindVideos = [
  {
    title: "Behind the Scenes #1",
    video: "https://www.youtube.com/embed/VIDEO_ID",
  },
  {
    title: "Behind the Scenes #2",
    video: "https://www.youtube.com/embed/VIDEO_ID",
  },
  {
    title: "Behind the Scenes #3",
    video: "https://www.youtube.com/embed/VIDEO_ID",
  },
  {
    title: "Behind the Scenes #4",
    video: "https://www.youtube.com/embed/VIDEO_ID",
  },
];

const related = [
  {
    title: "Related Video 1",
    video: "https://www.youtube.com/embed/VIDEO_ID",
  },
  {
    title: "Related Video 2",
    video: "https://www.youtube.com/embed/VIDEO_ID",
  },
  {
    title: "Related Video 3",
    video: "https://www.youtube.com/embed/VIDEO_ID",
  },
];

export default function BehindPage() {
  return (
    <main
      className="min-h-screen text-white"
      style={{
        backgroundImage: "url('/videos/bg.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section className="mx-auto max-w-7xl px-6 pt-28 pb-24">

        <p className="text-center uppercase tracking-[0.4em] text-sky-300">
          Career Journey
        </p>

        <h1 className="mt-4 text-center text-6xl font-black">
          SIA Behind The Scenes
        </h1>
<Link
  href="/career-journey/tv-shows?tab=show"
  className="
  mt-10
    inline-flex
    items-center
    gap-2
    rounded-full
    border
    border-white/10
    bg-white/5
    px-5
    py-2.5
    text-sm
    text-white/80
    transition
    hover:border-sky-300/40
    hover:text-sky-300
  "
>
  ← Quay về
</Link>
        <div className="mt-24 space-y-24">
          {behindVideos.map((item) => (
            <section key={item.title}>
              <h2 className="mb-8 text-3xl font-bold">
                {item.title}
              </h2>

              <div className="overflow-hidden rounded-[30px] border border-white/10">
                <iframe
                  src={item.video}
                  title={item.title}
                  allowFullScreen
                  className="aspect-video w-full"
                />
              </div>
            </section>
          ))}
        </div>

    <section className="mt-32">
 

  <h2 className="mt-4 text-center text-4xl font-black">
Video liên quan   </h2>

 <div
  className="
    mt-14
    grid
    grid-cols-2
    gap-5
    lg:grid-cols-3
  "
>
  {related.slice(0, 3).map((item) => (
    <div key={item.title}>
      <div
        className="
          overflow-hidden
          rounded-[20px]
          border
          border-white/10
          bg-white/[0.04]
          backdrop-blur-xl
        "
      >
        <iframe
          src={item.video}
          title={item.title}
          allowFullScreen
          className="aspect-video w-full"
        />
      </div>

      <h3 className="mt-3 text-center text-sm font-semibold md:text-base">
        {item.title}
      </h3>
    </div>
  ))}
</div>
</section>
      </section>
    </main>
  );
}