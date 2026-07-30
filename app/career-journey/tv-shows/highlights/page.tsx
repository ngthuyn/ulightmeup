"use client";
import Link from "next/link";
const performances = [
  {
    title: "Minh Tân giới thiệu bản thân",
    video: "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1242197323998048&show_text=false",
      keyword: ["interview"],
  orientation: "portrait",

  },
  {
    title: "Minh Tân khi biết bản thân được cân nhắc lên lớp A",
    video: "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1763209660896920&show_text=false",
        keyword: ["interview"],
  orientation: "portrait",

  },
  {
    title: "Beautiful Girl - Bạch nguyệt quang của tinie",
    video: "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1200369431588028&show_text=false",
        keyword: ["dancing"],
  orientation: "landscape",

  },
  {
    title: "“Sát hạch 3 này em đặt kỳ vọng rất nhiều để được lên lớp A...”",
    video: "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1881819769328288&show_text=false",
        keyword: ["interview"],
  orientation: "portrait",

  },
  {
    title: "Minh Tân bật khóc vì burnt out",
    video: "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1752641999001844&show_text=false",
        keyword: ["interview"],
  orientation: "portrait",

  },
  {
    title: 'Yêu 5 đến từ 2 thầy Hàn và "con bố Kay" thôi nào',
    video: "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/3980294632210493&show_text=false",
        keyword: ["dancing"],
  orientation: "portrait",

  },
  {
    title: "Yêu 5 - Dance Challenge",
    video: "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/680374551374029&show_text=false",
        keyword: ["dancing"],
  orientation: "portrait",

  },
  {
    title: "Em ơi cứ vui - Dance Challenge",
  video: "https://www.tiktok.com/player/v1/7519465916044741943",
        keyword: ["dancing"],
  orientation: "portrait",

  },
  {
    title: "GEN-ZNIUS (GG) -  Dance Practice",
    video: "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1253735723117048&show_text=false",
          keyword: ["dancing"],
  orientation: "landscape",

  },
  {
    title: "We Lit The Show",
    video: "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1927676891171132&show_text=false",
          keyword: ["dancing"],
  orientation: "portrait",

  },
 {
  title: "Mini series Showcase Diary",
  type: "youtube",
  video: "https://www.youtube.com/embed/Lvnt7wH0-hI?si=uVYMhsE6CYKcBiRE",
  keyword: ["dancing"],
  orientation: "landscape",
},
];
const currentKeyword = "dancing";
const related = performances.filter(
  (item) => item.keyword.includes(currentKeyword)
);
export default function HighlightsPage() {
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



        <h1 className="mt-4 text-center text-3xl font-black">
          TBTN Highlights
        </h1>
<Link
  href="/career-journey/tv-shows?tab=project"
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
        <div className="mt-15 space-y-24">
          {performances.map((item) => (
            <section key={item.title}>
              <h2 className="mb-8 text-xl font-bold">
                {item.title}
              </h2>
<div
  className=" overflow-hidden rounded-[30px] border border-white/10 bg-black flex justify-center py-6">  

  <iframe
    src={item.video}
    title={item.title}
    className={
      item.orientation === "portrait"
        ? "mx-auto w-full max-w-[500px] h-[520px] sm:h-[620px] md:h-[720px] lg:h-[820px]"
        : "aspect-video w-full"
    }
    frameBorder={0}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  />
</div>
            </section>
          ))}
        </div>

      </section>
    </main>
  );
}