"use client";

import { useEffect, useMemo, useState } from "react";
import TikTokPlayer from "@/components/TikTokPlayer";
import Link from "next/link";
import FacebookPlayer from "@/components/FacebookPlayer";
import { videos } from "./data";



export default function FocusCamPage() {


const rows = useMemo(() => {
  return [
    videos.slice(0, 6),      // hàng 1
    videos.slice(6, 14),     // hàng 2 (8 video)
    videos.slice(14),        // phần còn lại
  ].filter((row) => row.length > 0);
}, []);
  const [itemsPerPage, setItemsPerPage] = useState(3);

useEffect(() => {
  const update = () => {
    setItemsPerPage(window.innerWidth < 1024 ? 2 : 3);
  };

  update();
  window.addEventListener("resize", update);

  return () =>
    window.removeEventListener("resize", update);
}, []);

  const [pages, setPages] = useState(
    rows.map(() => 0)
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

<section className="mx-auto max-w-7xl px-6 pt-28 pb-24">
 <div className=" flex justify-center">
      <img
        src="/images/logo_web/logo-04.png" // đổi sang đường dẫn logo của bạn
        alt="lighT"
        className=" h-12 w-auto sm:h-14 md:h-15 transition duration-300 hover:scale-105"
      />
  </div>
        <h1 className="mt-4 text-center text-3xl font-black">
          DANCE COMPILATION
        </h1>

        <div className="mt-5 text-center">
    
          <div className="mt-6 flex justify-center gap-3">
  
  
</div>
        </div>

<div className="mt-12 space-y-16">

  {rows.map((row, rowIndex) => {

const start = pages[rowIndex];
    const visible = row.slice(
      start,
      start + itemsPerPage
    );

const maxPage = Math.max(
  0,
  row.length - itemsPerPage
);

    return (

      <div key={rowIndex}>

        {/* Buttons */}

{maxPage > 0 && (
  <div className="mb-8 flex items-center justify-between">
          <button
            disabled={pages[rowIndex] === 0}
            onClick={() =>
              setPages((prev) => {
                const next = [...prev];
                next[rowIndex]--;
                return next;
              })
            }
            className="rounded-full border border-white/20 px-4 py-2 disabled:opacity-30"
          >
            ← Trước
          </button>

          <button
            disabled={pages[rowIndex] === maxPage}
            onClick={() =>
              setPages((prev) => {
                const next = [...prev];
                next[rowIndex]++;
                return next;
              })
            }
            className="rounded-full border border-white/20 px-4 py-2 disabled:opacity-30"
          >
           Tiếp →
          </button>

        </div>
)}
        {/* Grid */}

  <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
  {visible.map((video) => (
    <article
      key={video.id}
      className="group cursor-pointer"
    >
      <Link href={`/videos/dance-compilation/${video.id}`}>
        <img
          src={video.image}
          alt={video.title}
          className="aspect-[3/4] w-full rounded-xl object-cover transition duration-300 group-hover:scale-105"
        />
      </Link>

      <h3 className="mt-4 text-center text-xl italic font-serif leading-tight">
  {video.title.includes("(") ? (
    <>
      {video.title.split("(")[0].trim()}
      <br />
      <span className="text-lg text-white/70">
        ({video.title.split("(")[1]}
      </span>
    </>
  ) : (
    video.title
  )}
</h3>
    </article>
  ))}
</div>

      </div>

    );

  })}

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
