"use client";
import Link from "next/link";
import FacebookPlayer from "@/components/FacebookPlayer";
const performances = [
  {
    title:
      'Duo Cường Bạch - minhtin và những lần phối hợp line "trước - sau" cùng nhau siêu mượt',
    video:
      "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/794165407121757&show_text=false",
    keyword: ["performance"],
    orientation: "square",
  },
  {
    title: '"Niềm hạnh phúc nhất của em là được đứng dưới ánh đèn sân khấu"',
    video:
      "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/761265703400586&show_text=false",
    keyword: ["interview"],
    orientation: "portrait",
  },
  {
    title: "Khi bạn nghe SHOW ME quá 180 phút/ngày",
    video:
      "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/747071408329889&show_text=false",
    keyword: ["funny"],
    orientation: "portrait",
  },
  {
    title: "minhtin nhảy TAKE A SHOT",
    video:
      "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/830633142991524&show_text=false",
    keyword: ["dancing"],
    orientation: "portrait",
  },
  {
    title: 'minhtin ra tay giúp đồng đội xé tan "bóng đêm" thật mượt',
    video:
      "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1515649173100741&show_text=false",
    keyword: ["performance"],
    orientation: "square",
  },
  {
    title: 'minhtin "đau đớn gục ngã" khi không được hát Real Talk',
    video:
      "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1556031125817655&show_text=false",
    keyword: ["interview"],
    orientation: "square",
  },
  {
    title:
      '"Em nghĩ em bị tích cực độc hại, em lúc nào cũng giấu hết cảm xúc vào trong" - minhtin',
    video:
      "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1591129838536558&show_text=false",
    keyword: ["interview"],
    orientation: "square",
  },
  {
    title:
      'minhtin và mentor SOOBIN tâm sự khi nhận kết quả "Tốt nghiệp"',
    video:
      "https://www.facebook.com/plugins/video.php?href=https://facebook.com/reel/1497504178209215&show_text=false",
    keyword: ["interview"],
    orientation: "square",
  },
  {
    title: "minhtin bật khóc trên khán đài sau khi tốt nghiệp",
    video:
      "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1285966483548070&show_text=false",
    keyword: ["interview"],
    orientation: "square",
  },
];



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
          SIA Highlights
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
          {performances.map((item) => (
            <section key={item.title}>
              <h2 className="mb-8 text-3xl font-bold">
                {item.title}
              </h2>
<div
  className=" overflow-hidden rounded-[30px] border border-white/10 bg-black flex justify-center py-6">  

  <iframe
    src={item.video}
    title={item.title}
    className={
  item.orientation === "portrait"
    ? "mx-auto w-full max-w-[500px] h-[360px] sm:h-[580px] md:h-[650px] lg:h-[820px]"
    : item.orientation === "square"
    ? "mx-auto aspect-square w-full max-w-[520px]"
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