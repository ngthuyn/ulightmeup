export type VideoPlatform =
  | "youtube"
  | "facebook"
  | "instagram"
  | "threads"
  | "tiktok";

export type VideoSource = {
  platform: VideoPlatform;
  url: string;
};

export type Activity = {
  id: string;

  title: string;

  category: string;

  year: number;

  banner: string;

  thumbnail: string;

  description: string;

  members: string[];

  gallery: string[];

  videos: VideoSource[];
};

export const activities: Activity[] = [
  {
    id: "love-shot",

    title: "LOVE SHOT",

    category: "Dance Cover",

    year: 2023,

    banner: "/images/poong/love-shot/banner.jpg",

    thumbnail: "/images/poong/love-shot/thumb.jpg",

    description:
      "Poong Crew dance cover of LOVE SHOT.",

    members: [
      "lighT",
      "Member A",
      "Member B",
      "Member C",
    ],

    gallery: [
      "/images/poong/love-shot/1.jpg",
      "/images/poong/love-shot/2.jpg",
      "/images/poong/love-shot/3.jpg",
      "/images/poong/love-shot/4.jpg",
    ],

    videos: [
      {
        platform: "youtube",
        url: "",
      },

      {
        platform: "tiktok",
        url: "",
      },

      {
        platform: "facebook",
        url: "",
      },
    ],
  },

  {
    id: "tempo",

    title: "TEMPO",

    category: "Dance Cover",

    year: 2023,

    banner: "/images/poong/tempo/banner.jpg",

    thumbnail: "/images/poong/tempo/thumb.jpg",

    description:
      "Poong Crew dance cover of TEMPO.",

    members: [
      "lighT",
      "Member A",
      "Member B",
    ],

    gallery: [
      "/images/poong/tempo/1.jpg",
      "/images/poong/tempo/2.jpg",
    ],

    videos: [
      {
        platform: "youtube",
        url: "",
      },
    ],
  },

  {
    id: "blue-orangeade",

    title: "BLUE ORANGEADE",

    category: "Dance Cover",

    year: 2022,

    banner: "/images/poong/blue/banner.jpg",

    thumbnail: "/images/poong/blue/thumb.jpg",

    description:
      "Poong Crew dance cover.",

    members: [
      "lighT",
      "Member A",
    ],

    gallery: [],

    videos: [],
  },
];