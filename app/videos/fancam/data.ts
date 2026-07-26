export type VideoPlatform =
  | "youtube"
  | "facebook"
  | "instagram"
  | "tiktok"
  | "threads";

export type VideoSource = {
  platform: VideoPlatform;
  url: string;
};

export type VideoItem = {
  id: string;
  title: string;
  image: string;
  keywords: string[];
  sources: VideoSource[];
};

export const videos: VideoItem[] = [
  {
    id: "7648561307121208596",
    title: "[06.06.2026] Dịu dàng đến từng phút giây x Cá chưa cắn câu",
    image: "/images/lighT_SunSong4.jpe",
    keywords: ["SunSong", "20260606", "lighT"],
    sources: [
      {
        platform: "tiktok",
        url: "https://www.tiktok.com/@mimoon658/video/7648561307121208596",
      },
       /*{
        platform: "threads",
        url: "https://www.threads.com/@maccaron_laitin/post/DZQCOX5k-p9?xmt=AQG0l-8twWIawjgi_bqIm68zLKnbhCk4f0S4dc-nHDfhCPcyj_ljm5dBr9DT6Napv5zVwAbR&slof=1",
      },*/
    ],
  },

  {
    id: "7648345317116595474",
    title: "[06.06.2026] Đi đu đưa đi",
    image: "/images/lighT_SunSong3.jpg",
    keywords: ["SunSong", "20260606", "lighT"],
    sources: [
      {
        platform: "tiktok",
        url: "https://www.tiktok.com/@do.nathnim_/video/7648605809575841031",
      },
/*
      {
        platform: "tiktok",
        url: "https://www.tiktok.com/@tincredible_allforlight/video/7648345317116595474",
      },

      {
         platform: "tiktok",
        url: "https://www.tiktok.com/@mimoon658/video/7648445388176755988",
      }*/
    ],
  },

  {
    id: "7646159440785181959",
    title: "[31.05.2026] Chuyện đôi ta",
    image: "/images/lighT_ssdd.jpg",
    keywords: ["SucSongDaiDuong", "20260531", "lighT"],
    sources: [
      {
        platform: "tiktok",
        url: "https://www.tiktok.com/@tincredible_allforlight/video/7646159440785181959",
      },

      // Sau này chỉ cần thêm
      
     /* {
        platform: "youtube",
        url: "https://youtube.com/shorts/Ddp_O5W1_zg?si=hH7OcN3zWLtBAQoK",
      },
      
     {
        platform: "facebook",
        url: "https://www.facebook.com/reel/1539203244575054",
      },
      {
        platform: "instagram",

        url: "https://www.instagram.com/reel/DanL0JQxK-A/"
      }
      */
    ],
  },

  {
    id: "7650501250710129938",
    title: "[31.05.2026] 99KISS",
    image: "/images/lighT_ssdd1.jpg",
    keywords: ["SucSongDaiDuong", "20260531", "lighT"],
    sources: [
      {
        platform: "tiktok",
        url: "https://www.tiktok.com/@tincredible_allforlight/video/7650501250710129938",
      },
    ],
  },

  {
    id: "7645868133881810184",
    title: "[30.05.2026] Nhớ mãi chuyến đi này",
    image: "/images/lighT_tamh2.jpg",
    keywords: ["ThanhAmMuaHa", "20260526", "lighT"],
    sources: [
      {
        platform: "tiktok",
        url: "https://www.tiktok.com/@tincredible_allforlight/video/7645868133881810184",
      },
    ],
  },

  {
    id: "7646324668034583816",
    title: "[30.05.2026] Đại lộ mặt trời",
    image: "/images/lighT_tamh.jpg",
    keywords: ["ThanhAmMuaHa", "20260526", "lighT"],
    sources: [
      {
        platform: "tiktok",
        url: "https://www.tiktok.com/@tincredible_allforlight/video/7646324668034583816",
      },
    ],
  },

  {
    id: "7641433710721518866",
    title: "[18.05.2026] Tôi người Việt Nam",
    image: "/images/lighT_na.jpg",
    keywords: ["LehoilangSen", "20260518", "lighT"],
    sources: [
      {
        platform: "tiktok",
        url: "https://www.tiktok.com/@tincredible_allforlight/video/7641433710721518866",
      },
    ],
  },

  {
    id: "7663540006283185416",
    title: "[14.05.2026] VACATION",
    image: "/images/lighT_ta22.jpg",
    keywords: ["ThanhAm22", "20260514", "lighT"],
    sources: [
      {
        platform: "tiktok",
        url: "https://www.tiktok.com/@tincredible_allforlight/video/7663540006283185416",
      },
    ],
  },
   {
    id: "7607798162266295572",
    title: "[16.02.2026] Rehearsal - Tết này con sẽ về ",
    image: "/images/lighT_TN.jpg",
    keywords: ["tn", "20260216", "lighT"],
    sources: [
      {
        platform: "tiktok",
        url: "https://www.tiktok.com/@mimoon658/video/7607798162266295572",
      },
    ],
  },

  {
    id: "7589311310429506834",
    title: "[28.12.2025] SHOW ME",
    image: "/images/lighT_tthssv_showme.jpg",
    keywords: ["HSSV", "20251228", "minhtin"],
    sources: [
      {
        platform: "tiktok",
        url: "https://www.tiktok.com/@tincredible_allforlight/video/7589311310429506834",
      },

      // ví dụ sau này
      /*
      {
        platform: "youtube",
        url: "https://youtu.be/xxxxx",
      },
      {
        platform: "facebook",
        url: "https://facebook.com/xxxxx",
      },
      */
    ],
  },

  {
    id: "7588970584634084626",
    title: "[28.12.2025] TAKE A SHOT",
    image: "/images/lighT_tthssv_takeashot.jpg",
    keywords: ["HSSV", "20251228", "minhtin"],
    sources: [
      {
        platform: "tiktok",
        url: "https://www.tiktok.com/@tincredible_allforlight/video/7588970584634084626",
      },
    ],
  },
/*
  {
    id: "7587461359969914120",
    title: "[20.12.2025] Một vòng Việt Nam",
    image: "/images/lighT_ycc_mvvn.jpg",
    keywords: ["Y Concert", "20251220", "minhtin"],
    sources: [
      {
        platform: "tiktok",
        url: "https://www.tiktok.com/@tincredible_allforlight/video/7587461359969914120",
      },
    ],
  },
*/
  {
    id: "7586038883809234184",
    title: "[20.12.2025] WE LIT THE SHOW",
    image: "/images/lighT_wlts.jpg",
    keywords: ["Y Concert", "20251220", "minhtin"],
    sources: [
      {
        platform: "tiktok",
        url: "https://www.tiktok.com/@tincredible_allforlight/video/7586038883809234184",
      },
    ],
  },

  {
    id: "7586312075387964690",
    title: "[20.12.2025] Không cần nói nhiều",
    image: "/images/lighT_YCC_kcnn.jpg",
    keywords: ["Y Concert", "20251220", "minhtin"],
    sources: [
      {
        platform: "tiktok",
        url: "https://www.tiktok.com/@tincredible_allforlight/video/7586312075387964690",
      },
    ],
  },

  {
    id: "7586183799931702546",
    title: "[20.12.2025] EXPOSURE",
    image: "/images/lighT_ycc_exposure.jpg",
    keywords: ["Y Concert", "20251220", "minhtin"],
    sources: [
      {
        platform: "tiktok",
        url: "https://www.tiktok.com/@tincredible_allforlight/video/7586183799931702546",
      },
    ],
  },
];