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
    id: "7648345317116595474",
    title: "Đi đu đưa đi",
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
    id: "7586038883809234184",
    title: "WE LIT THE SHOW",
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
    id: "7646159440785181959",
    title: "Chuyện đôi ta",
    image: "/images/lighT_ssdd.jpg",
    keywords: ["SucSongDaiDuong", "20260531", "lighT"],
    sources: [
      {
        platform: "tiktok",
        url: "https://www.tiktok.com/@tincredible_allforlight/video/7646159440785181959",
      },

    
    ],
  },
 {
    id: "7646324668034583816",
    title: "Đại lộ mặt trời",
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
    id: "7650501250710129938",
    title: "99KISS",
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
    title: "Nhớ mãi chuyến đi này",
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
    id: "7669231496783219986",
    title: "Dự báo thời tiết hôm nay mưa",
    image: "/images/lighT_midnight.jpg",

    keywords: ["MIDNIGHT", "20260731", "lighT"],
    sources: [
      {
        platform: "tiktok",
        url: "https://www.tiktok.com/@tincredible_allforlight/video/7669231496783219986",
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
    id: "7663540006283185416",
    title: "Vacation - Thanh Âm 22",
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
    title: "Rehearsal - Tết này con sẽ về ",
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
    id: "7648561307121208596",
    title: "Dịu dàng đến từng phút giây x Cá chưa cắn câu",
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
    id: "7641433710721518866",
    title: "Tôi người Việt Nam",
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
    id: "7586183799931702546",
    title: "Exposure",
    image: "/images/lighT_ycc_exposure.jpg",
    keywords: ["Y Concert", "20251220", "minhtin"],
    sources: [
      {
        platform: "tiktok",
        url: "https://www.tiktok.com/@tincredible_allforlight/video/7586183799931702546",
      },
    ],
  },
   
{
    id: "7588970584634084626",
    title: "Take a shot",
    image: "/images/lighT_tthssv_takeashot.jpg",
    keywords: ["HSSV", "20251228", "minhtin"],
    sources: [
      {
        platform: "tiktok",
        url: "https://www.tiktok.com/@tincredible_allforlight/video/7588970584634084626",
      },
    ],
  },
  {
    id: "7591017738647244052",
    title: "Beautiful girl",
    image: "/images/7591017738647244052.jpg",
    keywords: ["BG", "20251220", "minhtin"],
    sources: [
      {
        platform: "tiktok",
        url: "https://www.tiktok.com/@mimoon658/video/7591017738647244052",
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
    id: "7586312075387964690",
    title: "Không cần nói nhiều",
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
    id: "7589311310429506834",
    title: "Show me",
    image: "/images/lighT_tthssv_showme.jpg",
    keywords: ["HSSV", "20251228", "minhtin"],
    sources: [
      {
        platform: "tiktok",
        url: "https://www.tiktok.com/@tincredible_allforlight/video/7589311310429506834",
      },

     
    ],
  },

  
];