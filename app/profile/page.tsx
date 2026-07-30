"use client";

import { useState } from "react";
import Link from "next/link";


export default function ProfilePage() {
  const [page, setPage] = useState(0);

  const pages = [
    "/images/profile1.png",
    "/images/profile2.png",
    "/images/profile3.png",
  ];

  const nextPage = () => {
    setPage((prev) =>
      prev === pages.length - 1 ? 0 : prev + 1
    );
  };

  const prevPage = () => {
    setPage((prev) =>
      prev === 0 ? pages.length - 1 : prev - 1
    );
  };

  return (
    
      <main
  className="relative min-h-screen overflow-hidden"
  style={{
    backgroundImage: "url('/videos/bg.gif')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    
  }}
>

 <section className="mx-auto max-w-7xl px-6 pt-28 pb-24">
 <div className=" flex justify-center">
      <img
        src="/images/logo_web/logo-03.png" // đổi sang đường dẫn logo của bạn
        alt="lighT"
        className=" h-10 w-auto sm:h-12 md:h-13 transition duration-300 hover:scale-105"
      />
  </div>
<h1
  className="
    mt-2
    mb-6

    text-center

    text-2xl
    font-black
    tracking-tight

    text-white

    drop-shadow-[0_2px_10px_rgba(0,0,0,.45)]

    lg:hidden
  "
>
  Get to know <span className="text-sky-200">lighT</span>
</h1>




        {/* DESKTOP */}
<div className="hidden lg:flex items-center justify-center mt-8 px-8">
          <div
              className="
                flex
                w-[95vw]
                max-w-[1800px]
                overflow-hidden
                rounded-[2rem]
              "
              style={{
                boxShadow: "0 0 30px rgba(96,165,250,.15)",
              }}
            >
            <img
              src={pages[0]}
              alt="page1"
             className="w-1/3 h-auto object-contain"
            />

            <img
              src={pages[1]}
              alt="page2"
              className="w-1/3 h-auto object-contain"
            />

            <img
              src={pages[2]}
              alt="page3"
              className="w-1/3 h-auto object-contain"
            />

          </div>

        </div>

{/* MOBILE + TABLET */}
<div className="lg:hidden flex flex-col items-center mt-8 px-4">
  <img
  key={page}
  src={pages[page]}
  alt={`page-${page + 1}`}
  onClick={nextPage}
  className="cursor-pointer h-auto w-[95vw] object-contain"
/>

  <div className="mt-4 flex items-center gap-4">

    <button
      onClick={prevPage}
      className="
  rounded-full
  border
  border-white/15
  bg-black/10
  px-4
  py-2
  text-white
  backdrop-blur-xl
"
    >
      ◀
    </button>

    <span className="font-semibold text-white">
      {page + 1} / {pages.length}
    </span>

    <button
      onClick={nextPage}
      className="
  rounded-full
  border
  border-white/15
  bg-black/10
  px-4
  py-2
  text-white
  backdrop-blur-xl
"
    >
      ▶
    </button>

  </div>

</div>
</section>


      </main>
    
  );
}