"use client";

import TikTokPlayer from "@/components/TikTokPlayer";
import FacebookPlayer from "@/components/FacebookPlayer";
import MediaEmbed from "@/components/MediaEmbed";
type Cover = {
  title: string;
  description: string;
  platform: "tiktok" | "facebook" | "youtube" | "local";
  url?: string;
  videoFile?: string;
};
const covers = [
  {
    title: "tối nay 2h",
    description: "Trong giấc mơ em đẹp….",
    platform: "tiktok",
    url: "https://www.tiktok.com/@do.nathnim_/video/7653793099012951314",
  },
 
  {
    title: "Wish you were gay",
    description: "tin tập hát #1",
    platform: "tiktok",
    url: "https://www.tiktok.com/@do.nathnim_/video/7613066484796886290",
  },
  {
    title: "Viết tiếp câu chuyện tri ân",
    description: "Mọi người cùng tham gia cuộc thi cover để săn Vàng chuẩn bị đón tết cùng Danisa nhé!",
    platform: "tiktok",
    url: "https://www.tiktok.com/@do.nathnim_/video/7597464653844794632",
  },
  {
    title: "Một đêm say",
    description: "Hát cùng anh SWAN nè",
    platform: "tiktok",
    url: "https://www.tiktok.com/@tanbinhtoannang/video/7569217168248737079?is_from_webapp=1&sender_device=pc&web_id=7586174988501026320",
  },
  {
  title: "Khóc cùng em",
  description: "🎶Anh đã biết tình mình nhiều khoảng trống, thuộc về miền hư vô🎶",
  platform: "tiktok",
  url: "https://www.tiktok.com/@tincredible_allforlight/video/7664940290913946898",
},
  {
  title: "Từng quen",
  description: "🎶 Nhìn em, anh bối rối🎶",
  platform: "tiktok",
  url: "https://www.tiktok.com/@tincredible_allforlight/video/7667819421473230098",
},
 {
  title: "Và thế là hết",
  description: "Bài kiểm tra vocal cùng các thầy thanh nhạc của Hàn Quốc",
  platform: "tiktok",
  url: "https://www.tiktok.com/@tanbinhtoannang/video/7498006700239228202?is_from_webapp=1&sender_device=pc",
},
 {
  title: "Ánh sao và bầu trời",
  description: "Chưa bao giờ tôi thấy, em cười nhiều như hôm nay...",
  platform: "local",
  videoFile: "/videos/song-cover/anh-sao-va-bau-troi.mp4",
},
  
];

export default function SongCoverACPage() {
  return (
    <main
      className="min-h-screen text-white"
      style={{
        backgroundImage: "url('/videos/bg.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section className="mx-auto max-w-6xl px-6 pt-28 pb-24">

  <div className=" flex justify-center">
      <img
        src="/images/logo_web/logo-04.png" // đổi sang đường dẫn logo của bạn
        alt="lighT"
        className=" h-12 w-auto sm:h-14 md:h-15 transition duration-300 hover:scale-105"
      />
  </div>

         {/* Header */}
        <div className="text-center mb-6">

          {/*" <p className="tracking-[0.35em] uppercase text-sky-200 text-xs">
            Gallery
          </p>*/}

                 <h1 className="mt-4 text-center text-3xl font-black">

            SONG COVER
          </h1>

          

        </div>

<div className="mt-20 space-y-24">
  {covers.map((cover) => (
    <div
      key={cover.title}
className="grid grid-cols-1 lg:grid-cols-[0.95fr_0.75fr] items-center gap-10" 
 >
      {/* Video */}
<div className="order-2 lg:order-1 flex justify-center lg:justify-end">  
  <div className="w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[380px]">      
        {cover.platform === "tiktok" && cover.url && (
          <TikTokPlayer url={cover.url} />
        )}

        {cover.platform === "facebook" && cover.url && (
          <FacebookPlayer url={cover.url} />
        )}

        {cover.platform === "youtube" && cover.url && (
          <MediaEmbed
            platform="youtube"
            url={cover.url}
          />
        )}

        {cover.platform === "local" && cover.videoFile && (
          <video
  controls
  className="aspect-[9/16] w-full rounded-3xl object-cover"
>
            <source
              src={cover.videoFile}
              type="video/mp4"
            />
          </video>
        )}
      </div>
</div>
      {/* Text */}
<div
  className="order-1 lg:order-2 text-left pl-2 sm:pl-4 lg:pl-0 lg:text-left"
>  
<h2 className="text-2xl sm:text-3xl lg:text-4xl font-body font-semibold">              {cover.title}
        </h2>

<p className="mt-4 text-base sm:text-lg leading-7 lg:leading-8 text-white/70">         
          {cover.description}
        </p>
      </div>
    </div>
  ))}
</div>
{/*
        <div className="mt-24 flex justify-center">
          <img
            src="/images/ulightmeup.png"
            alt="u lighT me up"
            className="w-[320px] sm:w-[420px]"
            style={{
              filter:
                "drop-shadow(0 0 12px rgba(255,255,255,.45))",
            }}
          />
        </div>
*/}

      </section>
    </main>
  );
}