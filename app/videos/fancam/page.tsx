"use client";

"use client";

import { useState } from "react";
import Link from "next/link";

import MediaEmbed from "@/components/MediaEmbed";
import TikTokPlayer from "@/components/TikTokPlayer";
import FacebookPlayer from "@/components/FacebookPlayer";
import { videos } from "./data";

export default function FancamPage() {




  const [keyword, setKeyword] = useState("");

const filteredVideos = videos.filter((video) =>
  video.title.toLowerCase().includes(keyword.toLowerCase())
);

  
   

   

  
  return (

    <main
      className="relative min-h-[100svh] overflow-hidden text-white"
      style={{
        backgroundImage: "url('/videos/bg.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

<section className="mx-auto max-w-6xl px-6 pt-28 pb-24">

             <h1 className="text-center text-xl font-black">
          FANCAM
        </h1>
<div className="mx-auto mt-10 max-w-xl">
  <input
    type="text"
    placeholder="🔍 Tìm theo bài hát, sự kiện..."
    value={keyword}
    onChange={(e) => setKeyword(e.target.value)}
    className="  w-full rounded-full border border-white/15 bg-white/10 px-6 py-3 text-white placeholder:text-white/40 backdrop-blur-xl outline-none transition focus:border-sky-300 focus:bg-white/15"
  />
</div>
        <div className="mt-25 text-center">
    
          <div className="mt-6 flex justify-center gap-3">
  
  
</div>
        </div>

<div
  className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10"
>            
{filteredVideos.map((video) => (  
  <article
    key={video.id}
    className="group cursor-pointer"
  >
    <Link href={`/videos/fancam/${video.id}`}>
      <img
        src={video.image}
        alt={video.title}
        className="aspect-[3/4] w-full rounded-xl object-cover transition duration-300 group-hover:scale-105"
      />
    </Link>

  <h3 className="mt-4 text-center italic font-serif leading-tight text-white">
  {video.title.startsWith("[") ? (
    <>
      <span className="text-xl">
        {video.title.match(/^\[[^\]]+\]/)?.[0]}
      </span>

      <br />

      <span className="text-2xl">
        {video.title.replace(/^\[[^\]]+\]\s*/, "")}
      </span>
    </>
  ) : (
    <span className="text-2xl">{video.title}</span>
  )}
</h3>
  </article>
))}
{filteredVideos.length === 0 && (
  <div className="col-span-full py-16 text-center text-white/60">
    Không tìm thấy fancam nào.
  </div>
)}
</div>
{/*
        <div className="mt-16 flex flex-col items-center justify-center gap-4 rounded-[2rem] px-6 py-8 text-center">
          <img
            src="/images/ulightmeup.png"
            alt="u lighT me up"
            className="mx-auto w-[320px] sm:w-[420px]"
            style={{
              filter: "drop-shadow(0 0 12px rgba(255,255,255,.45))",
            }}
          />


        </div>
        */}
        <style jsx global>{`

        `}</style>
      </section>   {/* đóng relative z-10 */}
     
  

    </main>
  );
}