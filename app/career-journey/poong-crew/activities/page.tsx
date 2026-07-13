"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { activities } from "./data";
import { useRouter } from "next/navigation";
export default function ActivitiesPage() {

  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(3);
const router = useRouter();

const handleClick = (id: string) => {
  router.push(`/career-journey/poong-crew/activities/${id}`);
};
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) {
        setPerPage(2);
      } else {
        setPerPage(3);
      }
    };

    update();

    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("resize", update);
    };
  }, []);

  const filtered = useMemo(() => {
    return activities.filter((item) =>
      item.title.toLowerCase().includes(keyword.toLowerCase())
    );
  }, [keyword]);

  const totalPages = Math.max(
    1,
    Math.ceil(filtered.length / perPage)
  );
useEffect(() => {
  if (page > totalPages) {
    setPage(totalPages);
  }
}, [page, totalPages]);
  const current = filtered.slice(
    (page - 1) * perPage,
    page * perPage
  );


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

        {/* Title */}

        <p className="text-center tracking-[0.35em] text-sky-300">
          POONG Crew
        </p>

        <h1 className="mt-3 text-center text-4xl font-black">
          ACTIVITIES
        </h1>

        {/* Search */}

        <div className="mx-auto mt-14 max-w-xl">

          <div
            className="
              flex
              items-center
              rounded-full
              border
              border-white/10
              bg-white/5
              px-5
              py-3
              backdrop-blur-xl
            "
          >
            <svg
              className="mr-3 h-5 w-5 text-white/60"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-4-4" />
            </svg>

            <input
              value={keyword}
              onChange={(e) => {
                setKeyword(e.target.value);
                setPage(1);
              }}
              placeholder="Tìm kiếm hoạt động..."
              className="
                w-full
                bg-transparent
                outline-none
                placeholder:text-white/40
              "
            />
          </div>

        </div>


    {/* Grid */}

<div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8">
  {current.map((item) => (

   <div
  key={item.id}

  onClick={() => handleClick(item.id)}  
  className="
group
relative
overflow-hidden
cursor-pointer
transition-all
duration-500
ease-out
"
>

   <img
  src={item.banner}
  alt={item.title}
  className="
    aspect-video
    w-full
    object-cover

    transition-all
    duration-500

    group-hover:scale-105
    group-hover:brightness-110
    group-hover:saturate-125

    group-active:scale-105
    group-active:brightness-110
    group-active:saturate-125
  "
/>
<div
  className="
    absolute
    inset-0
    origin-left
    scale-x-0

    transition-transform
    duration-500
    ease-out

    group-hover:scale-x-100
    group-active:scale-x-100
  "
  style={{
    background:
      "linear-gradient(135deg, rgba(215,245,255,.08) 0%, rgba(145,215,255,.38) 45%, rgba(85,180,255,.58) 100%)",
    mixBlendMode: "screen",
  }}
/>
<div className="absolute inset-0 overflow-hidden pointer-events-none">
  <div
    className="
      absolute
      top-0
      left-[-120%]

      h-full
      w-1/2

      rotate-12

      bg-gradient-to-r
      from-transparent
      via-white/35
      to-transparent

      transition-all
      duration-700

      group-hover:left-[130%]
      group-active:left-[130%]
    "
  />
</div>
      {/* Gradient */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/90
          via-black/20
          to-transparent
        "
      />

      {/* Title */}

   <div
  className="
    absolute
    inset-x-0
    bottom-0
    p-3
    md:p-5
  "
>

  <h2
  className="
    text-sm
    sm:text-base
    md:text-sm
    lg:text-sm
    font-bold
    leading-snug
    line-clamp-2
    drop-shadow-lg
    transition
    group-hover:text-sky-300
  "

>
          {item.title}
        </h2>

      </div>

    </div>

  ))}

</div>

        {/* Pagination */}

        <div className="mt-16 flex items-center justify-between">

          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
            className="
              rounded-full
              border
              border-white/20
              px-6
              py-2
              transition
              disabled:opacity-30
              hover:border-sky-300
            "
          >
            ← Trước
          </button>

          <span className="text-white/70">
            {page} / {totalPages}
          </span>

          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
            className="
              rounded-full
              border
              border-white/20
              px-6
              py-2
              transition
              disabled:opacity-30
              hover:border-sky-300
            "
          >
            Tiếp →
          </button>

        </div>

      </section>
    </main>
  );
}