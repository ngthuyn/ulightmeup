"use client";

const news = [
  {
    id: 1,
    tag: "TV SHOW",
    title: "Đỗ Minh Tân “Ngoại lệ” của Tân Binh Toàn Năng và cú bật âm thầm nhưng bền bỉ",
    source: "CTV SHOW",
    date: "Aug 2025",
    image: "/images/news/news2.png",
    href: "https://hoahoctro.tienphong.vn/tan-binh-toan-nang-do-minh-tan-ngoai-le-duoc-can-nhac-len-lop-a-la-ai-post1739531.tpo",
  },
  {
    id: 2,
    tag: "TV SHOW",
    title: "Tân Binh Toàn Năng: Đỗ Minh Tân - ngoại lệ được cân nhắc lên lớp A là ai?",
    source: "CTV SHOW",
    date: "May 2025",
    image: "/images/news/news1.jpg",
    href: "https://yeah1.com/tv-show/do-minh-tan-ngoai-le-cua-tan-binh-toan-nang-va-cu-bat-am-tham-nhung-ben-bi-a412-d125701",
  },
 
];

export default function NewspaperPage() {
  return (
    <main className="min-h-screen text-white">
      <section className="mx-auto max-w-5xl px-6 pt-28 pb-20">

        <p className="text-center uppercase tracking-[0.35em] text-sky-300">
          Articles • Interviews • Media
        </p>

        <h1 className="mt-3 text-center text-5xl font-black">
          NEWSPAPER
        </h1>

        <div className="mt-14 space-y-5">

          {news.map((item) => (
           <a
  key={item.id}
  href={item.href}
  className="
    group
    flex
    items-center
    gap-4
    rounded-2xl
    border
    border-white/10
    bg-white/[0.04]
    p-4
    backdrop-blur-xl
    transition
    hover:border-sky-300/40
    hover:bg-white/[0.07]
  "
>
  {/* Thumbnail */}
  <img
    src={item.image}
    className="
      h-20
      w-20
      sm:h-24
      sm:w-32
      md:h-28
      md:w-44
      rounded-xl
      object-cover
      flex-shrink-0
      transition
      duration-300
      group-hover:scale-105
    "
  />

  {/* Content */}
  <div className="min-w-0 flex-1">

    <div className="flex items-center gap-3">
      <span
        className="
          rounded-full
          bg-sky-500/15
          px-3
          py-1
          text-[10px]
          font-semibold
          uppercase
          tracking-[0.2em]
          text-sky-300
        "
      >
        {item.tag}
      </span>

      <span className="text-xs text-white/50">
        {item.date}
      </span>
    </div>

    <h2
      className="
        mt-2
        line-clamp-2
        text-sm
        sm:text-base
        md:text-xl
        font-semibold
        group-hover:text-sky-300
      "
    >
      {item.title}
    </h2>

    <p className="mt-2 text-xs text-white/60 md:text-sm">
      {item.source}
    </p>

  </div>

  {/* Icon */}
  <div className="hidden md:flex items-start">
    <span className="text-2xl text-white/30 transition group-hover:text-white">
      ⋮
    </span>
  </div>

</a>
          ))}

        </div>

      </section>
    </main>
  );
}