export type VideoPlatform =
  | "youtube"
  | "facebook"
  | "instagram"
  | "tiktok"
  | "threads";

export type ActivityVideo = {
  platform: "facebook" | "youtube" | "tiktok";
  url: string;
  title?: string;
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
member: string;

videos: ActivityVideo[];
  gallery: string[];
source?: string;

sections?: ActivitySection[];

};

export const activities: ActivityItem[] = [
  {
  id: "aella-noir",

  title: "POONG CREW - “AELLA NOIR” PERFORMANCE",

  category: "Performance",

  year: "2025",

  banner: "/images/typo_poong.jpg",

  thumbnail: "/images/typo_poong.jpg",

  description: `Đúng như tên gọi “AELLA NOIR”, POONG CREW mang đến TITAN 2024 “BRITERY” một sân khấu với nguồn năng lượng rực cháy, mê hoặc, kéo người xem vào một hành trình cuốn hút và không thể rời mắt 🌪️

Choreography by POONG CREW
Inspired by: ROCKSTAR - LISA ( Victoria’s Secret Fashion Show 2024 )`,

  member: "POONG CREW",

  videos: [
    {
      title: "[𝐒𝐓𝐔𝐃𝐈𝐎 𝐕𝐄𝐑𝐒𝐈𝐎𝐍] '𝐀𝐄𝐋𝐋𝐀 𝐍𝐎𝐈𝐑' 𝐏𝐞𝐫𝐟𝐨𝐫𝐦𝐚𝐧𝐜𝐞",
      platform: "facebook",
      url: "https://www.facebook.com/watch/?v=9797516136947335&rdid=b9P7Lz69lQNZ5DTl",
    },
     {
      title: `[ON STAGE] 'AELLA NOIR' Performance`,
      platform: "youtube",
      url: "https://www.youtube.com/watch?v=vllBcZjb61c",
    },
  ],

  gallery: [
    
  ],

  source: "https://www.facebook.com/share/v/1ENkY8bqF4/",
},
{
  id: "lofficiel-2024",

  title: "L’Officiel Vietnam x POONG CREW - Ô EXHIBITION 2024’s FASHION FILM",

  category: "Collaboration",

  year: "2024",

  banner: "/images/poong/lofficiel/1.jpg",

  thumbnail: "/images/poong/lofficiel/1.jpg",

  description: `POONG CREW vinh dự được trở thành một mảnh ghép trong quá trình tạo nên thước phim thời trang nghệ thuật tại triển lãm về Hy vọng mang tên “Ô HOPE: BETWEEN DESPAIR AND RENEWAL” của L’Officiel Vietnam.

Choreography by POONG CREW.`,

  member: "L’Officiel Vietnam x POONG CREW",

  videos: [
    {
      platform: "facebook",
      url: "https://www.facebook.com/share/v/1CdsfJ96KA/",
    },
  ],

  gallery: [
    "/images/poong/lofficiel/1.jpg",
    "/images/poong/lofficiel/2.jpg",
    "/images/poong/lofficiel/3.jpg",
    "/images/poong/lofficiel/4.jpg",
        "/images/poong/lofficiel/5.jpg",

  ],

  source: "https://www.facebook.com/share/v/1CdsfJ96KA/",
},
{
  id: "truc-nhan",

  title: "TRÚC NHÂN x POONG CREW - MV “KHÔNG RA GÌ”",

  category: "Music Video",

  year: "2024",

  banner: "/images/poong/trucnhan/1.jpg",

  thumbnail: "/images/poong/trucnhan/1.jpg",

  description: `POONG CREW vô cùng tự hào khi có cơ hội được đóng góp một phần năng lượng vào màn tái xuất đầy ấn tượng của nam ca sĩ TRÚC NHÂN với MV “Không Ra Gì”.`,

  member: "TRÚC NHÂN x POONG CREW",

  videos: [
    {
      platform: "youtube",
      url: "https://www.youtube.com/watch?v=rRUzJJ9IV4s",
    },
  ],

  gallery: [
    "/images/poong/trucnhan/1.jpg",
    "/images/poong/trucnhan/2.jpg",
      "/images/poong/trucnhan/banner.jpg",
    "/images/poong/trucnhan/3.jpg",
  ],

  source: "https://www.youtube.com/watch?v=rRUzJJ9IV4s",
},
{
  id: "poong-poong",

  title: "POONG CREW - “POONG POÓNG” PERFORMANCE",

  category: "Performance",

  year: "2024",

  banner: "/images/poongpoong.jpg",

  thumbnail: "/images/poongpoong.jpg",

  description: `POONG CREW chào đón các bạn K30 Khoa Mỹ thuật và Thiết kế của ĐH Văn Lang với một màu sắc vô cùng tươi mới, mang đậm dấu ấn tuổi thơ pha cùng nét tươi vui và năng động 🌈🫧.

Choreography by POONG CREW.`,

  member: "POONG CREW",

  videos: [
    {
      title: "Dance practice version",
      platform: "facebook",
      url: "https://www.facebook.com/share/v/19MjkP5R6U/",
    },
    {
      title: "Performance version",
      platform: "facebook",
      url: "https://www.facebook.com/share/v/1DRU7mgfJm/",
    },
  ],

  gallery: [
    "/images/poong/poongpoong/1.jpg",
  
  ],

  source: "https://www.facebook.com/share/v/1DRU7mgfJm/",
},
{
  id: "swfvn-mega-crew",

  title: "HANOIXGIRLS x POONG CREW - NHIỆM VỤ “MEGA CREW” TẠI SWFVN",

  category: "TV Show",

  year: "2024",

  banner: "/images/swfvn_banner.jpg",

  thumbnail: "/images/swfvn_banner.jpg",

  description: `POONG CREW xuất hiện tại chương trình Nữ Hoàng Vũ Đạo Đường Phố Việt Nam với tư cách vũ công hỗ trợ cho nhóm HANOI X-GIRLS trong nhiệm vụ Siêu Đội Hình (Mega Crew) 2024. 🙏🏻⚔️`,

  member: "HANOIXGIRLS x POONG CREW",

  videos: [
    {
      platform: "youtube",
      url: "https://youtu.be/82S7WF2Rkt8?si=2VvqYqYMCmzWHzcs",
    },
  ],

  gallery: [],

  source: "https://youtu.be/82S7WF2Rkt8?si=2VvqYqYMCmzWHzcs",
},
{
  id: "osad-releasing-party",

  title: "OSAD x POONG CREW - RELEASING PARTY",

  category: "Performance",

  year: "2023",

  banner: "/images/poong/osad/banner.jpg",

  thumbnail: "/images/poong/osad/banner.jpg",

  description: `POONG CREW biểu diễn tại RELEASING PARTY đánh dấu sự trở lại nghiêm túc của rapper OSAD trên đường đua V-pop.`,

  member: "OSAD x POONG CREW",

  videos: [
    {
      title: "OSAD x POONG CREW - DANCE CHALLENGE ‘EM CHỈ IM LẶNG’ (OSAD ft PHÁO)",
      platform: "tiktok",
      url: "https://vt.tiktok.com/ZSCqh7Prg/",
    },
  ],

  gallery: [
    "/images/poong/osad/6.jpg",
    "/images/poong/osad/7.jpg",
  ],

  source: "https://vt.tiktok.com/ZSCqh7Prg/",
},
{
  id: "pretty-savage",

  title: "POONG CREW - “𝗣𝗥𝗘𝗧𝗧𝗬 𝗦𝗔𝗩𝗔𝗚𝗘” 𝗘𝗫𝗧𝗘𝗡𝗗𝗘𝗗 𝗩𝗘𝗥𝗦𝗜𝗢𝗡",

  category: "Performance",

  year: "2023",

  banner: "/images/typo_poong_2023.jpg",

  thumbnail: "/images/poong/prettysavage/banner.jpg",

  description: `CHOREO BY POONG CREW`,

  member: "POONG CREW",

  videos: [
    {
      platform: "facebook",
      url: "https://www.facebook.com/share/v/18iQoA34f7/",
    },
  ],

  gallery: [],

  source: "https://www.facebook.com/share/v/18iQoA34f7/",
},
{
  id: "h-chick-2023",

  title: "POONG CREW - H!-CHICK TẠI ĐH VĂN LANG",

  category: "Performance",

  year: "2023",

  banner: "/images/poong/h-chick2023/banner.jpg",

  thumbnail: "/images/poong/h-chick2023/banner.jpg",

  description: `POONG CREW bùng cháy trên sân khấu chào đón các bạn K29 Khoa Mỹ Thuật và Thiết kế của ĐH Văn Lang.`,

  member: "POONG CREW",

  videos: [
    {
      platform: "facebook",
      url: "https://www.facebook.com/watch/?v=2064007377266637&rdid=Fv2ICxIxsvrUVX9M",
    },
  ],

  gallery: [
    "/images/poong/h-chick2023/4.jpg",
    "/images/poong/h-chick2023/6.jpg",
  ],

  source: "https://www.facebook.com/share/v/1J6DNRov36/",
},
{
  id: "vlu-opening-2023",

  title: "POONG CREW's RECAP - LỄ KHAI GIẢNG ĐH VĂN LANG",

  category: "Performance",

  year: "2023",

  banner: "/images/poong/vlu/banner.jpg",

  thumbnail: "/images/poong/vlu/banner.jpg",

  description: `POONG CREW biểu diễn tại lễ khai giảng ĐH Văn Lang.`,

  member: "POONG CREW",

  videos: [],

  gallery: [
    "/images/poong/vlu/6.jpg",
    "/images/poong/vlu/7.jpg",
  ],

  source: "https://www.facebook.com/IknowyouknowPOONG/posts/pfbid0veKhRnknRxK6YSi9UyLBZwrWzqHsJkmQVuTyWV82BYBzhS2DRGALMYgEfN4Xe7kwl",
},
{
  id: "cake",

  title: "POONG CREW - CAKE (KARD) DANCE COVER",

  category: "Dance Cover",

  year: "2023",

  banner: "/images/poong/cake_banner.jpg",

  thumbnail: "/images/poong/cake_banner.jpg",

  description: `CAKE - KARD | Dance Cover by POONG Crew 
`,

  member: "POONG CREW",

  videos: [
    {
      platform: "facebook",
      url: "https://www.facebook.com/share/r/1EfhK8PVpq/",
    },
  ],

  gallery: [],

  source: "https://www.facebook.com/share/r/1EfhK8PVpq/",
},
{
  id: "kpop-lovers-festival",

  title: "POONG CREW - KPOP LOVERS FESTIVAL",

  category: "Competition",

  year: "2023",

  banner: "/images/poong/other/klf/2.jpg",

  thumbnail: "/images/poong/other/klf/2.jpg",

  description: `Sau những nỗ lực không ngừng, 𝐏𝐎𝐎𝐍𝐆 CREW đã xuất sắc giành được "tấm vé" bước vào Vòng Chung kết của cuộc thi KPOP Lovers Festival 2023 do Trung tâm Văn hoá Hàn Quốc và Tổng Cục Du lịch Hàn Quốc tổ chức tại Hà Nội. Đây cũng là chuyến đi đánh dấu lần đầu tiên lighT ra Hà Nội đó.`,

  member: "POONG CREW",

  videos: [
    {
      title: "Sơ khảo OFFLINE",
      platform: "facebook",
      url: "https://www.facebook.com/share/v/1Dg3ZrMqJT/",
    },
    {
      title: "Performance I",
      platform: "facebook",
      url: "https://www.facebook.com/share/v/1BfmwrrZuS/",
    },
    {
      title: "Chung kết (Dance practice)",
      platform: "facebook",
      url: "https://www.facebook.com/share/v/1FTAwTR3J2/",
    },
  ],

  gallery: [
  ],

  source: "https://www.facebook.com/share/v/1FTAwTR3J2/",
},
{
  id: "udc-2024",

  title: "THE 2ND RUNNER UP at UDC 2024 🥉🥉🥉",

  category: "Contest",

  year: "2024",

  banner: "/images/poong/UDC/2.jpg",

  thumbnail: "/images/poong/UDC/2.jpg",

  description: `Sân khấu nhằm tôn vinh cộng đồng LGBTQIA++ đã mang về cho POONG CREW vị trí 𝟐𝐍𝐃 𝐑𝐔𝐍𝐍𝐄𝐑 𝐔𝐏 tại 𝐔𝐃𝐂 𝟐𝟎𝟐4.`,

  member: "POONG CREW",

  videos: [],

  gallery: [
    "/images/poong/UDC/1.jpg",
  ],

  source: "",
},
{
  id: "hans-got-talent",

  title: "POONG CREW - TOP 1 HAN’s GOT TALENT",

  category: "Contest",

  year: "2024",

  banner: "/images/HAN's YEP 2023.jpg",

  thumbnail: "/images/HAN's YEP 2023.jpg",

  description: `POONG CREW giành được vị trí TOP 1 Tại cuộc thi HAN’s GOT TALENT do Hoang An Nhien Group tổ chức với màn trình diễn đậm sắc màu quyến rũ và sang trọng.`,

  member: "POONG CREW",

  videos: [],

  gallery: [
    "/images/poong/Hans_1.jpg",
   
  ],

  source: "",
},
{
  id: "barbie-world",

  title: "POONG CREW - BARBIE WORLD PERFORMANCE 💫🔮",

  category: "Performance",

  year: "2024",

  banner: "/images/BARBIE-WORLD-02.jpg",

  thumbnail: "/images/BARBIE-WORLD-02.jpg",

  description: `Cùng nhìn lại những khoảnh khắc khi POONG CREW hoá thân thành những chú bướm lạc vào thế giới Barbie nhé 🥰.`,

  member: "POONG CREW",

  videos: [],

  gallery: [
    "/images/BARBIE-WORLD.jpg",
    "/images/BARBIE-WORLD-02.jpg",
   
  ],

  source: "",
},
{
  id: "cloud-slide",

  title: "POONG CREW - CLOUD SLIDE PROMOTION of SNEAKER BUZZ",

  category: "Brand Collaboration",

  year: "2023",

  banner:     "/images/poong/other/cloudslide/1.jpg",


  thumbnail:     "/images/poong/other/cloudslide/1.jpg",


  description: `POONG CREW hợp tác cùng Sneaker Buzz trong dự án quảng bá dòng sản phẩm Cloud Slide.`,

  member: "POONG CREW",

  videos: [
    {
      platform: "facebook",
      url: "https://www.facebook.com/share/v/1BPn4aJ6tt/",
    },
  ],

  gallery: [
    "/images/poong/other/cloudslide/1.jpg",
    "/images/poong/other/cloudslide/2.jpg",
  ],

  source: "https://www.facebook.com/share/v/1BPn4aJ6tt/",
},
];

