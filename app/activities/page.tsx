"use client";

import Link from "next/link";
import PageShell from "@/components/PageShell";

export default function ActivitiesPage() {
  const sections = [
    {
      title: "Festival 2025",
      badge: "01",
      data: [
        "Concert All-Rounder The Final của Mentor SOOBIN",
        "TikTok Shop Fun Fest",
        "Y Concert",
        "Chương trình kỷ niệm 76 năm ngày truyền thống Học Sinh-Sinh Viên và Hội Sinh Viên Việt Nam",
      ],
    },
    {
      title: "Festival 2026",
      badge: "02",
      data: [
        "Trưng Vương Festival - Tết Ơi",
        "Countdown Chào Xuân Bính Ngọ 2026 - Rạng Rỡ Thái Nguyên",
        "Alumni Concert Hoa Sen Homecoming 2026",
      ],
    },
    {
      title: "TV Shows",
      badge: "03",
      data: [
        "Top 11 show truyền hình Tân Binh Toàn Năng 2025",
        "Khách mời chương trình Sinh viên thế hệ mới 2025",
        "Khách mời chương trình 12 Con Giáp - Sắc Việt 2026 của VTV",
      ],
    },
    {
      title: "Events",
      badge: "04",
      data: [
        "Tham gia sự kiện Close Up",
        "Tham gia sự kiện Lễ bàn giao Tủ sách 25 năm VnExpress (03/2026)",
        "Tham gia sự kiện Đẹp Magazine x CROCS (04/2026)",
      ],
    },
  ];

  return (
    <PageShell videoSrc="/videos/light-intro.mp4">
      <main
  className="relative min-h-[100svh] overflow-hidden text-white"
  style={{
    backgroundImage: "url('/images/bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
<div className="absolute left-[8%] top-[20%] text-4xl rotate-12">
  🐵
</div>

<div className="absolute right-[10%] top-[30%] text-3xl">
  ✨
</div>

<div className="absolute left-[12%] bottom-[20%] text-4xl">
  💙
</div>

<div className="absolute right-[15%] bottom-[15%] text-4xl">
  🎤
</div>

<div className="absolute left-[30%] top-[10%] text-3xl rotate-[-15deg]">
  ⭐
</div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 rounded-full px-4 py-3">
            <Link
  href="/"
  className="
    fixed
    left-6
    top-6
    z-50
    flex
    h-12
    w-12
    items-center
    justify-center
    rounded-full
    border
    border-white/15
    bg-black/10
    text-xl
    text-white
    backdrop-blur-xl
    transition-all
    duration-300
    hover:scale-110
  "
>
  🏠
</Link>

           
          </div>
          <div className="mt-10 text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-sky-200">
              Activities
            </p>
            <h1
  className="mt-3 text-5xl font-black tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl"
  style={{
    textShadow:
      "0 0 12px rgba(255,255,255,.25)",
  }}
>
              Hoạt động nổi bật
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              Hành trình hoạt động nghệ thuật, sự kiện và chương trình nổi bật
              của lighT.
            </p>
          </div>
<div className="mt-12 space-y-10">

  {/* HERO POLAROID */}
  <div className="mx-auto w-fit rotate-[-4deg] bg-black/20 border border-white/10 backdrop-blur-xl p-3">
    <img
      src="/images/lighT_TAMH_30_6.jpg"
      alt="lighT"
      className="h-[280px] object-contain"
    />

    <p className="mt-3 text-center text-xl font-black">
      lighT's Activities ✨
    </p>
  </div>

  {sections.map((section, index) => (
    <section
      key={section.title}
      className={`
        relative
        mx-auto
        max-w-4xl
        rounded-[2rem]
        border
        border-white/10
        bg-black/10
        backdrop-blur-xl
        p-6
        shadow-xl
        ${index % 2 === 0 ? "rotate-[-1deg]" : "rotate-[1deg]"}
      `}
    >
      {/* WASHI TAPE */}
      <div className="absolute -top-3 left-10 h-6 w-28 rotate-[-10deg] bg-yellow-200/80" />

      {/* STICKER */}
      <div className="absolute -top-3 -right-2 text-3xl">
        {["🐵", "✨", "🎤", "💙"][index]}
      </div>

      <div className="mb-5">
        <span className="rounded-lg bg-sky-400/20 text-sky-100 px-3 py-1 text-xs font-black">
          SECTION {section.badge}
        </span>

        <h2 className="mt-3 text-3xl font-black">
          {section.title}
        </h2>
      </div>

      <div className="space-y-4">
        {section.data.map((item) => (
          <div
            key={item}
            className="
              rounded-2xl
              bg-white/5
              border border-white/10
              px-4
              py-3
              text-lg text-white/90
              leading-relaxed
              shadow-sm
            "
          >
            ⭐ {item}
          </div>
        ))}
      </div>
    </section>
  ))}

</div>
          

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
        </div>
      </main>
    </PageShell>
  );
}