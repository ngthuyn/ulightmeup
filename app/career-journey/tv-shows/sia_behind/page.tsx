"use client";
import Link from "next/link";
import FacebookPlayer from "@/components/FacebookPlayer";
type BehindVideo = {
  title: string;
  video: string;
  orientation: "portrait" | "landscape";
};

const behindVideos: BehindVideo[] = [
  {
    title: "Chứng nhận fans cứng GĐHH",
    video: "https://www.facebook.com/reel/1244519987864775/",
    orientation: "portrait",
  },
  {
    title: "lighT và Thu đợi",
    video: "https://www.facebook.com/reel/922995793482051",
    orientation: "portrait",
  },
  {
    title: "minhtin và cái áo cái quần cho YCC",
    video: "https://www.facebook.com/reel/852400237678059/",
    orientation: "portrait",
  },
  {
    title: "minhtin và cái áo cái quần cho YCC phần 2",
    video: "https://www.facebook.com/reel/24794515210223002/",
    orientation: "portrait",
  },
  {
    title: "Chấp niệm múa cột của minhtin",
    video: "https://www.facebook.com/reel/2292974671211636/",
    orientation: "portrait",
  },
  {
    title: "minhtin và mẹ Minh Tuyết",
    video: "https://www.facebook.com/reel/25862316853366290/",
    orientation: "portrait",
  },
  {
    title: 'nhận làm host trò chơi và liên hoàn "kíp nẹn" không thể tránh',
    video: "https://www.facebook.com/reel/814370918298667/",
    orientation: "portrait",
  },
  {
    title: '"Bảo mẫu nửa mùa" minhtin tiếp chiêu "liên hoàn hỏi" từ Phúc Nguyên',
    video: "https://www.facebook.com/reel/1311211143888804/",
    orientation: "landscape",
  },
  {
    title: "Ông xã em Number 01 Dance Challenge",
    video: "https://www.facebook.com/reel/1971344440327643/",
    orientation: "portrait",
  },
  {
    title: "minhtin đam mê làm ông xoay tại fan meeting BYD",
    video: "https://www.facebook.com/reel/1376965023782629/",
    orientation: "portrait",
  },
  {
    title: "minhtin thuyết trình về tranh vẽ tại FMT BYD",
    video: "https://www.facebook.com/reel/4196335557261859/",
    orientation: "portrait",
  },
  {
    title: "Sinh nhật bí mật của minhtin",
    video: "https://www.facebook.com/reel/25066296206362494/",
    orientation: "portrait",
  },
  {
    title: "Bóc trần bí mật của minhtin",
    video: "https://www.facebook.com/reel/1477956673220262/",
    orientation: "portrait",
  },
  {
    title: "minhtin - Thử thách đoán tên bài hát",
    video: "https://www.facebook.com/reel/1229616862321686",
    orientation: "landscape",
  },
  {
    title: "Nín thở chơi ăn gian S1TG",
    video: "https://www.youtube.com/embed/vGlkyRiv9Jg",
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
          SIA Behind The Scenes
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

    <div className="flex justify-center">
  {item.video.includes("youtube.com") ? (
    <div className="w-full overflow-hidden rounded-[30px] border border-white/10">
      <iframe
        src={item.video}
        title={item.title}
        className="aspect-video w-full"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  ) : (
    <FacebookPlayer
      url={item.video}
      orientation={item.orientation}
    />
  )}
</div>
            </section>
          ))}
        </div>

   
      </section>
    </main>
  );
}