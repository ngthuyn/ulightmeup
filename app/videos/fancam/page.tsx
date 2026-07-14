"use client";

import { useState } from "react";
import MediaEmbed from "@/components/MediaEmbed";
import TikTokPlayer from "@/components/TikTokPlayer";
import Link from "next/link";
import FacebookPlayer from "@/components/FacebookPlayer";
import { videos } from "./data";
{/*type VideoItem = {
  title: string;
  image: string;

  platform:
    | "youtube"
    | "facebook"
    | "instagram"
    | "tiktok";

  originalUrl: string;
    keywords: string[];

};

const videos: VideoItem[] = [
  {
  title:"[20260606] Đi đu đưa đi",

  image:"/images/lighT_SunSong3.jpg",

  platform:"tiktok",

  originalUrl:
    "https://www.tiktok.com/@tincredible_allforlight/video/7648345317116595474",
      keywords:["SunSong","2260606","lighT"]

  },
{
  title: "[20260531] Chuyện đôi ta",
  image: "/images/lighT_ssdd.jpg",

  platform: "tiktok",

  originalUrl:
       "https://www.tiktok.com/@tincredible_allforlight/video/7646159440785181959?_r=1&_t=ZS-96s7XaVJNPF",
      keywords:["SucSongDaiDuong","20260531","lighT"]

 
},
{
  title: "[20260531] 99KISS",
  image: "/images/lighT_ssdd1.jpg",
  platform: "tiktok",
  originalUrl:
    "https://www.tiktok.com/@tincredible_allforlight/video/7650501250710129938",
      keywords:["SucSongDaiDuong","20260531","lighT"]
 
},
{
  title: "[20260526] Nhớ mãi chuyến đi này",
  image: "/images/lighT_tamh2.jpg",
  platform: "tiktok",
  originalUrl:
    "https://www.tiktok.com/@tincredible_allforlight/video/7645868133881810184",
      keywords:["ThanhAmMuaHa","20260526","lighT"]
  
},
{
  title: "[20260526] Đại lộ mặt trời",
  image: "/images/lighT_tamh.jpg",
  platform: "tiktok",
  originalUrl:
    "https://www.tiktok.com/@tincredible_allforlight/video/7646324668034583816",
      keywords:["ThanhAmMuaHa","20260526","lighT"]
  
},
{
  title: "[20260518] Tôi người Việt Nam",
  image: "/images/lighT_na.jpg",
  platform: "tiktok",
  originalUrl:
    "https://www.tiktok.com/@tincredible_allforlight/video/7641433710721518866",
      keywords:["LehoilangSen","20260518","lighT"]
  
},
{
  title: "[20260206] EXPOSURE",
  image: "/images/lighT_TrungVuong.jpg",
  platform: "tiktok",
  originalUrl:
    "https://www.tiktok.com/@tincredible_allforlight/video/7603752306613538056",
    keywords:["TrungVuong","20260226","minhtin"]

},
{
  title: "[20251228] SHOW ME",
  image: "/images/lighT_tthssv_showme.jpg",
  platform: "tiktok",
  originalUrl:
    "https://www.tiktok.com/@tincredible_allforlight/video/7589311310429506834",
      keywords:["HSSV","20251228","minhtin"]
  
},
{
  title: "[20251228] TAKE A SHOT",
  image: "/images/lighT_tthssv_takeashot.jpg",
  platform: "tiktok",
  originalUrl:
    "https://www.tiktok.com/@tincredible_allforlight/video/7588970584634084626",
      keywords:["HSSV","20251228","minhtin"]
 
},
{
  title: "[20251220] Một vòng Việt Nam",
  image: "/images/lighT_ycc_mvvn.jpg",
  platform: "tiktok",
  originalUrl:
    "https://www.tiktok.com/@tincredible_allforlight/video/7587461359969914120",
       keywords:["Y Concert","20251220","minhtin"]

},
{
  title: "[20251220] WE LIT THE SHOW",
  image: "/images/lighT_wlts.jpg",
  platform: "tiktok",
  originalUrl:
    "https://www.tiktok.com/@tincredible_allforlight/video/7586038883809234184",
      keywords:["Y Concert","20251220","minhtin"]
 
},
{
  title: "[20251220] Không cần nói nhiều",
  image: "/images/lighT_YCC_kcnn.jpg",
  platform: "tiktok",
  originalUrl:
    "https://www.tiktok.com/@tincredible_allforlight/video/7586312075387964690",
      keywords:["Y Concert","20251220","minhtin"]
  
},

  {
  title: "[20251220] EXPOSURE",
  image: "/images/lighT_YCC_exposure.jpg",
  platform: "tiktok",
  originalUrl:
    "https://www.tiktok.com/@tincredible_allforlight/video/7586183799931702546?embed_source=121374463%2C121468991%2C121439635%2C121749182%2C121433650%2C121404359%2C121497414%2C122349556%2C122221973%2C122122240%2C121351166%2C121811500%2C121960941%2C122122244%2C122122243%2C122122242%2C121487028%2C122258714%2C121331973%2C120811592%2C120810756%2C121885509%3Bnull%3Bembed_head&refer=embed&referer_url=&referer_video_id=7589311310429506834",
      keywords:["Y Concert","20251220","minhtin"]

  },
 
];
*/}
export default function FancamPage() {




  

  
   

   

  
  return (

    <main
      className="relative min-h-[100svh] overflow-hidden text-white"
      style={{
        backgroundImage: "url('/videos/bg.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

<section className="mx-auto max-w-6xl px-6 pt-28 pb-24">

             <h1 className="text-center text-4xl font-black">
          FANCAM
        </h1>

        <div className="mt-25 text-center">
    
          <div className="mt-6 flex justify-center gap-3">
  
  
</div>
        </div>

<div
  className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10"
>            
{videos.map((video) => (
  <article
    key={video.id}
    className="group cursor-pointer"
  >
    <Link href={`/videos/fancam/${video.id}`}>
      <img
        src={video.image}
        alt={video.title}
        className="aspect-[3/4] w-full rounded-xl object-cover transition duration-300 group-hover:scale-105"
      />
    </Link>

    <h3
      className=" mt-4 text-center text-2xl italic font-serif text-white"
    >
      {video.title}
    </h3>
  </article>
))}
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