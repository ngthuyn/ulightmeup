export type VideoPlatform =
  | "youtube"
  | "facebook"
  | "instagram"
  | "tiktok"
  | "threads";

export type ActivityVideo = {
  platform: VideoPlatform;
  url: string;
};

export type ActivitySection = {
  title: string;
  year?: string;
  description: string;

  videos: ActivityVideo[];
  gallery: string[];

  source?: string;
};
export type ActivityItem = {
  id: string;

  title: string;

  category: string;

  year: string;

  banner: string;

  thumbnail: string;

  description: string;

  members: string[];

videos: ActivityVideo[];
  gallery: string[];
source?: string;

sections?: ActivitySection[];

};

export const activities: ActivityItem[] = [
  {
    id: "vlu",

    title: "THE 2023 OPENING CONVOCATION FESTIVAL",

    category: "Performance",

    year: "2023",

    banner: "/images/poong/vlu/banner.jpg",

    thumbnail: "/images/poong/vlu/banner.jpg",

    description:
      "Poong Crew biểu diễn tại lễ khai giảng Đại học Văn Lang.",

    members: [
      "lighT",
      "Poong Crew",
    ],

    videos: [
      
    ],

    gallery: [
       "/images/poong/vlu/1.jpg",
      "/images/poong/vlu/2.jpg",
      "/images/poong/vlu/3.jpg",
      "/images/poong/vlu/4.jpg",
      "/images/poong/vlu/5.jpg",
      "/images/poong/vlu/6.jpg",
      "/images/poong/vlu/7.jpg",
    ],
      source: "https://www.facebook.com/IknowyouknowPOONG/posts/pfbid0veKhRnknRxK6YSi9UyLBZwrWzqHsJkmQVuTyWV82BYBzhS2DRGALMYgEfN4Xe7kwl",

  },

  {
    id: "osad",

    title: "𝐎𝐒𝐀𝐃 𝐱 𝐏𝐎𝐎𝐍𝐆 - RELEASING PARTY",

    category: "Performance",

    year: "2023",

    banner: "/images/poong/osad/banner.jpg",

    thumbnail: "/images/poong/osad/banner.jpg",

    description:
      "POONG Crew đồng hành cùng OSAD tại RELEASING PARTY.",

    members: [
      "OSAD",
      "Pháo",
      "POONG Crew",
    ],

    videos: [
      {
        platform: "youtube",
        url: "https://www.youtube.com/watch?v=ESG5ZDajpo0&t=1s"
      },
    ],

    gallery: [
         "/images/poong/osad/1.jpg",
      "/images/poong/osad/2.jpg",
      "/images/poong/osad/3.jpg",
      "/images/poong/osad/4.jpg",
      "/images/poong/osad/5.jpg",
      "/images/poong/osad/6.jpg",
      "/images/poong/osad/7.jpg",
    ],
      source: "https://www.facebook.com/IknowyouknowPOONG/posts/pfbid0a1zKC3NUYzvMC5Di37C4rrtbVCeSYyDhJoA5huSTwgCXzt9TNu59C4FYjVAJunhl",

  },

  {
    id: "truc-nhan",

    title: "Trúc Nhân × Không Ra Gì",

    category: "Performance",

    year: "2024",

    banner: "/images/poong/trucnhan/1.jpg",

    thumbnail: "/images/poong/trucnhan/1.jpg",

    description:
      "POONG Crew đồng hành cùng ca sĩ Trúc Nhân  trong MV “Không Ra Gì”",

    members: [
      "Trúc Nhân",
      "POONG  Crew",
    ],

    videos: [{
        platform: "youtube",
        url: "https://youtu.be/rRUzJJ9IV4s?si=T6wuR3UV2PNDj-A4",
      },
    ],

     gallery: [
       "/images/poong/trucnhan/banner.jpg",
      "/images/poong/trucnhan/2.jpg",
      "/images/poong/trucnhan/3.jpg",
  
    ],
          source: "https://www.facebook.com/IknowyouknowPOONG/posts/pfbid02NDWHJDozcixLLtgDbE5K5CUruW4REHuK8jZXSEtxocZ3UFbEDaickcKst17yopX6l",

  },

  {
    id: "h-chick2023",

    title: "H!-CHICK 2023",

    category: "Performance",

    year: "2023",

    banner: "/images/poong/h-chick2023/banner.jpg",

    thumbnail: "/images/poong/h-chick2023/banner.jpg",

    description:
      "POONG Crew bùng cháy trên sân khấu chào đón các bạn K29 Khoa MT&TK của VLU.",

    members: [
      "POONG Crew",
    ],

    videos: [
    {
        platform: "facebook",
        url: "https://www.facebook.com/reel/2064007377266637",
      },
    ],

    gallery: [
       "/images/poong/h-chick2023/1.jpg",
      "/images/poong/h-chick2023/2.jpg",
      "/images/poong/h-chick2023/3.jpg",
  "/images/poong/h-chick2023/4.jpg",
      "/images/poong/h-chick2023/5.jpg",
      "/images/poong/h-chick2023/6.jpg",
    ],
    source: "https://www.facebook.com/IknowyouknowPOONG/posts/pfbid02ZPLg6Su5huKHCFjLpBEkujf3U9K3M7aeKtzbtrkEgBEeYKLLHaNfm24CQ5ePxcG8l"
  },

  {
    id: "lofficiel",

    title: "[L’Officiel Vietnam x 𝐏𝐎𝐎𝐍𝐆 𝐂𝐑𝐄𝐖] The Making Of Ô EXHIBITION 2024’s FASHION FILM. ",

    category: "Collaboration",

    year: "2024",

    banner: "/images/poong/lofficiel/1.jpg",

    thumbnail: "/images/poong/lofficiel/1.jpg",

    description:
      "Dự án hợp tác cùng L'Officiel Vietnam và POONG Crew với thước phim thời trang tại triển lãm Ô HOPE: BETWEEN DESPAIR AND RENEWAL.",

    members: [
      "POONG Crew",
    ],

    videos: [
    {
        platform: "facebook",
        url: "https://www.facebook.com/reel/9142226062557750",
      },
    ],

    gallery: [
       "/images/poong/lofficiel/1.jpg",
      "/images/poong/lofficiel/2.jpg",
      "/images/poong/lofficiel/3.jpg",
  "/images/poong/lofficiel/4.jpg",
      "/images/poong/lofficiel/5.jpg",
    ],
    source: "https://www.facebook.com/search/top/?q=POONG%20Crew%20L%27Officiel%20Vietnam"
  },
{
    id: "UDC2024",

    title: "THE 2ND RUNNER UP at UDC 2024 🥉🥉🥉",

    category: "Contest",

    year: "2024",

    banner: "/images/poong/UDC/1.jpg",

    thumbnail: "/images/poong/UDC/1.jpg",

    description:
      "POONG Crew dành vị trí thứ 3 tại UDC 2024 với phần trình diễn bùng nổ nhằm tôn vinh cộng đồng LGBTQIA+++",

    members: [
      "POONG Crew",
    ],

    videos: [
    {
        platform: "facebook",
        url: "https://www.facebook.com/reel/1012397790233201",
      },
      {
        platform: "youtube",
        url: "https://www.youtube.com/watch?v=snXgnmNKHaw"
      },
    ],

    gallery: [
       "/images/poong/UDC/1.jpg",
      "/images/poong/UDC/2.jpg",
      "/images/poong/UDC/3.jpg",
  
    ],
    source: "https://www.facebook.com/IknowyouknowPOONG/posts/pfbid0fmTHtWbTP4Tp44UZruzNyWjYWvadEM4CsDHfBPg8h3ajb31hQH7g6sKTzJScbBmil"
  },

  {
  id: "other",

  title: "Other Activities",

  category: "Other",

  year: "2023-2025",

  banner: "/images/poong/other/klf/2.jpg",

  thumbnail: "/images/poong/other/klf/2.jpg",

  description:
    "Những hoạt động khác của POONG Crew.",

  members: [
    "POONG Crew",
  ],

  videos: [],

  gallery: [],

  sections: [
    {
      title: 'TRY ON "CLOUD SLIDE"',

      year: "2024",

      description:
        "POONG Crew hợp tác cùng Sneaker Buzz trong dự án quảng bá Cloud Slide.",

      videos: [
        {
          platform: "facebook",
          url: "https://www.facebook.com/reel/7717262231641184",
        },
      ],

      gallery: [
        "/images/poong/other/cloudslide/1.jpg",
        "/images/poong/other/cloudslide/2.jpg",

      ],
    },

    {
      title: "KPOP Lovers Festival 2023",

      year: "2023",

      description:
        "Một chặng hành trình rất đáng nhớ của POONG Crew tại KLF 2023.",

      videos: [
        {
          platform: "facebook",
          url: "https://www.facebook.com/reel/787438776007657",
        },
      ],

      gallery: [
        "/images/poong/other/klf/1.jpg",
        "/images/poong/other/klf/2.jpg",
      ],
    },
  ],
},
];