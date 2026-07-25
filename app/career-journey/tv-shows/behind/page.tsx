"use client";
import Link from "next/link";
const behindVideos = [
  {
    title: "Minh Tân bắt chước chị Tóc Tiên",
    video:
      "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1106148461546668&show_text=false",
    keyword: ["fun"],
    orientation: "portrait",
  },
  {
    title: "Minh Tân - Tân Binh Đa Năng nhất KTX là đây",
    video:
      "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/462271723614709&show_text=false",
    keyword: ["fun"],
    orientation: "portrait",
  },
  {
    title: '"Ăn biên bản" phiên bản Tân Binh Toàn Năng',
    video:
      "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/536500096190010&show_text=false",
    keyword: ["fun"],
    orientation: "portrait",
  },
  {
    title: "Tốt khoe xấu khui",
    video:
      "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1704063250989338&show_text=false",
    keyword: ["fun"],
    orientation: "portrait",
  },
  {
    title: "Người lạ line quen",
    video:
      "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/2765816313618155&show_text=false",
    keyword: ["fun"],
    orientation: "portrait",
  },
  {
    title: "Thử thách kẹo mìn",
    video:
      "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1023976896111942&show_text=false",
    keyword: ["fun"],
    orientation: "portrait",
  },
  {
    title: "Ăn cơm online cùng Minh Tân",
    video:
      "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/968978958641809&show_text=false",
    keyword: ["daily"],
    orientation: "portrait",
  },
  {
    title: 'Đỗ Minh Tân với niềm đam mê "truyền thông bẩn" bất tận',
    video:
      "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1168332751767010&show_text=false",
    keyword: ["fun"],
    orientation: "portrait",
  },

  // ===== SHOWCASE =====

  {
    title:
      '"Tròn 100 ngày, tất cả những gì tụi em được đào tạo sẽ trình diễn hết trên sân khấu..."',
    video:
      "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1220202673243008&show_text=false",
    keyword: ["showcase"],
    orientation: "portrait",
  },
  {
    title: "Hành trình 100 ngày của Minh Tân",
    video:
      "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/2277211189378753&show_text=false",
    keyword: ["showcase"],
    orientation: "portrait",
  },
  {
    title: 'Khán giả duy nhất được hưởng đặc quyền tại Showcase',
    video:
      "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/TanBinhToanNang/videos/750381591302526/&show_text=false",
    keyword: ["showcase"],
    orientation: "landscape",
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

       

        <h1 className="mt-4 text-center text-3xl font-black">
          TBTN Behind The Scenes
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
    className={
      item.orientation === "portrait"
        ? "mx-auto w-full max-w-[450px] h-[450px] sm:h-[620px] md:h-[720px] lg:h-[820px]"
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