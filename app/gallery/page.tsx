"use client";

import { useEffect, useMemo, useState } from "react";
type MediaItem = {
  src: string;
  alt: string;

  title: string;

  date: string;

  location: string;

  description: string;
  type: string;
links: {
  label: string;
  link: string;
}[];
    category: "events" | "shows";

};
type MediaItem1 = {
  src: string;
  alt: string;


};
const eventItems: MediaItem[] = [
   {
    src: "/images/lighT_tcsc.jpg",
    alt: "lighT",
    title: "Lễ khai trương trụ sở chính TCSC",
    date: "24.07.2026",

    location: "Hồ Chí Minh",
   type: "EVENT",
    description:
      'Một số hình ảnh của lighT tại Lễ khai trương Trụ sở chính mới của Công ty Cổ phần Chứng khoán Thành Công (TCSC) vào ngày 24.07.2026.',
      links: [
  
  {
    label: "LighT LighT",
    link: "https://www.facebook.com/lighT.sye/posts/pfbid0nYBRR4rdEVhzeH3oXf8RTH1y2gwxXq9sZzr3F9By9wXEDKtEXBzfXGvHTeHTuvwFl",
  },
  {
    label: "TINcredible",
    link: "https://www.facebook.com/share/p/14qaTbgbqid/",
  },
  
  ],
    category: "events"

  },
   {
    src: "/images/lighT_fesKH.jpg",
    alt: "lighT",
    title: "Festival biển Khánh Hòa",
    date: "18.07.2026",

    location: "Khánh Hòa",
   type: "Festival",
    description:
      'Tham gia Festival Biển Khánh Hòa (07/2026) – sự kiện văn hóa trọng điểm của tỉnh Khánh Hoà, lighT đã chứng minh bản lĩnh sân khấu và phong thái tự tin qua hai tiết mục mang sắc thái hoàn toàn đối lập: "Việt Nam Tinh Hoa" (kết hợp cùng tiền bối Phạm Quỳnh Anh, SWAN) và "WE LIT THE SHOW". Việc hoàn thành xuất sắc các màn trình diễn không chỉ để lại dấu ấn đẹp trong lòng khán giả mà còn là niềm vinh dự lớn khi lighT được góp một phần công sức vào thành công chung của sự kiện cấp tỉnh này.',
      links: [
  
  {
    label: "LighT LighT",
    link: "https://www.facebook.com/share/p/18adUrMfuP/",
  },
  {
    label: "TINcredible",
    link: "https://www.facebook.com/share/p/1EJh6YefoC/",
  },
  {
    label: "TINcredible (Rehearsal)",
    link: "https://www.facebook.com/share/p/1E1noWv89N/",
  },
  ],
    category: "shows"

  },
   {
    src: "/images/lighT_atvncg.jpg",
    alt: "lighT",
    title: "Họp báo ra mắt ATVNCG 2026",
    date: "22.06.2026",
   type: "EVENT",

    location: "White Palace Võ Văn Kiệt, Hồ Chí Minh",
    description: 'Tham dự buổi họp báo ra mắt "Anh Trai Vượt Ngàn Chông Gai 2026", lighT ghi điểm với sự ủng hộ hết mình dành cho những người anh em cùng công ty. Những lời động viên chân thành từ út Tin chắc chắn là món quà tinh thần quý giá, tiếp sức cho hai nghệ sĩ độc lập nhà SYE sẵn sàng vượt qua mọi chông gai tại chương trình.',
      links: [
  {
    label: "LighT LighT",
    link: "https://www.facebook.com/share/p/1EXb32PL3V/",
  },
   
],
      category: "events"

  },
   {
    src: "/images/lighT_vifw.jpg",
    alt: "lighT",
    title: "AVIFW - Tuần lễ Thời trang Quốc tế Việt Nam",
    date: "20.06.2026",
   type: "EVENT",

    location: "Nhà thi đấu Nguyễn Du, Hồ Chí Minh",
    description: 'Xuất hiện tại AVIFW - Tuần lễ Thời trang Quốc tế Việt Nam 2026, khách mời lighT đã khiến khán giả không thể rời mắt nhờ thần thái đỉnh cao và phong cách thời trang đầy ấn tượng.',
      links: [
  {
    label: "LighT LighT",
    link: "https://www.facebook.com/lighT.sye/posts/pfbid02Cy52kJb8hdf9hzPMTNezrSGa2y9Yn44Cx1cynHqbeZYbuauXRpr3Kc1WiAqTwE2Kl",
  },
   {
    label: "LighT LighT",
    link: "https://www.facebook.com/story.php?story_fbid=122132899263032425&id=61580972767821&rdid=mITDTbMs6hVvapcj#",
  },
  {
    label: "do.nathnim",
    link: "https://www.instagram.com/p/DZ2TDihkcez/?igsh=eWJsMHgxMXZ1M3Nv ",
  },
  {
    label: "TINcredible",
    link: "https://www.threads.com/@tincredible_allforlight/post/DZ1LvIaEg08?xmt=AQG0t1LTORXhmoou24M7ASoOMYzvPxhwcgZBurS3XO0KR2HtbkblYdd1hS6h23aK1KZgjXA&slof=1",
  },
],
      category: "events"

  },
  {
    src: "/images/lighT_sunsong2.jpg",
    alt: "lighT",
    title: "TĂNG PHÚC MINI CONCERT: SUN SONG",
    date: "06.06.2026",

    location: "Hồ Chí Minh",
   type: "CONCERT",
    description:
      'Tháng 6/2026 ghi dấu một kỷ niệm tuyệt đẹp khi lighT vinh dự trở thành khách mời trong Mini Concert "Sun Song" – đêm nhạc đánh dấu 10 năm ca hát của đàn anh Tăng Phúc. Cơ hội được góp mặt trong một cột mốc lớn như vậy là minh chứng cho sự tin tưởng mà các tiền bối dành cho Tin. Từ bản solo "Đi đu đưa đi" đầy năng lượng đến những màn hòa giọng trọn vẹn trong "Dịu dàng đến từng phút giây" và "Cá chưa cắn câu", lighT đã để lại những dư âm khó quên trong lòng khán giả.',
     links: [
  {
    label: "DINH LUU Media",
    link: "https://www.facebook.com/dinhluumedia/posts/pfbid06GcN9QFr5pLBi7rQAVZituJBfGuCZqw4Vg1woMnSy1XzVCAP1UNv49ZBY9ada3hal",
  },
  {
    label: "LighT LighT",
    link: "https://www.facebook.com/share/p/1GkCRe4gYd/",
  },
  {
    label: "LighT LighT",
    link: "https://www.facebook.com/share/p/1C251mmMTQ/",
  },
  {
    label: "do.nathnim",
    link: "https://www.instagram.com/p/DZSJntYEXGH/?igsh=MWRieTBqcTdraXFwdA==",
  },
  ],
    category: "shows"

  },
  {
    src: "/images/lighT_ssdd1.jpg",
    alt: "lighT",
    title: "Sức sống đại dương",
    date: "31.05.2026",
   type: "SHOW",

    location: "Vịnh Hạ Long, Quảng Ninh",

    description:
      'Góp mặt trong đêm nhạc "Sức sống đại dương" tại thành phố biển Hạ Long, lighT vinh dự có cơ hội đứng chung sân khấu với dàn nghệ sĩ tên tuổi (Jun Phạm, S.T Sơn Thạch, Dương Hoàng Yến, Bùi Lan Hương) cùng những người anh em thân thiết từ SYE (Hồ Đông Quan, Thái Lê Minh Hiếu, SWAN). Giữa không gian êm đềm của biển đêm, Tin cùng các nghệ sĩ nhà SYE đã mang đến những giai điệu đong đầy cảm xúc, nhẹ nhàng chinh phục khán giả qua bản ballad "Chuyện đôi ta". Không dừng lại ở đó, lighT tiếp tục hâm nóng bầu không khí bằng tiết mục "99KISS" mang đậm dấu ấn cá nhân, lan tỏa nguồn năng lượng tươi mới và tạo nên những khoảnh khắc tận hưởng âm nhạc tuyệt vời cho cả các nghệ sĩ lẫn người hâm mộ.',

      links: [
  {
    label: "LighT LighT",
    link: "https://www.facebook.com/share/p/1BpraDWn5F/",
  },
],
  category: "shows"
  },
   
  {
    src: "/images/lighT_tamh2.jpg",
    alt: "lighT",
    title: "Thanh âm mùa hạ",
    date: "30.05.2026",

    location: "Hà Nội",
   type: "SHOW",

    description:
      'Góp mặt trong đêm nhạc "Thanh Âm Mùa Hạ" tại Hà Nội, lighT tiếp tục mang đến những cung bậc cảm xúc trọn vẹn cho khán giả thủ đô. Qua hai ca khúc solo "Đại lộ mặt trời" và "Nhớ mãi chuyến đi này", lighT đã thể hiện rõ sự trưởng thành trong giọng hát và phong thái trình diễn ngày càng chỉn chu. Đặc biệt, sân khấu càng trở nên thăng hoa và ý nghĩa hơn với sự xuất hiện của mentor Kay Trần và SWAN. Màn hòa giọng đầy ăn ý của ba thầy trò trong ca khúc "Một vòng Việt Nam" không chỉ chạm đến trái tim khán giả mà còn là minh chứng tuyệt đẹp cho sự gắn kết bền chặt của gia đình The AURORA kể từ sau chương trình Tân Binh Toàn Năng Project 100%.',

      
      links: [
  {
    label: "LighT LighT",
    link: "https://www.facebook.com/lighT.sye/posts/pfbid0bvtDjUSmNDVaPrjbbKfMxAMsmTkYDfh22JeU6MJsgXfryFFtaMQRw6mTjex3MfRkl",
  },
],
    category: "shows"

  },
  {
    src: "/images/lighT_NA_18_05.jpg",
    alt: "lighT",
    title: "Lễ hội làng Sen",
    date: "18.05.2026",
   type: "Festival",

    location: "Làng Sen, Nghệ An",

    description:
      'Sự xuất hiện của lighT tại "Lễ hội Làng Sen 2026" là một dấu ấn nghệ thuật đầy ý nghĩa và đáng tự hào. Đứng trên sân khấu của một sự kiện mang đậm giá trị lịch sử, lighT đã mượn âm nhạc để truyền tải trọn vẹn sự tri ân thành kính nhất. Bằng sự chỉn chu và nguồn năng lượng tích cực, lighT đã góp phần lan tỏa mạnh mẽ tinh thần "uống nước nhớ nguồn" đến đông đảo khán giả trẻ. Màn trình diễn không chỉ là lời biết ơn sâu sắc gửi tới Chủ tịch Hồ Chí Minh vĩ đại cùng các thế hệ cha anh đã hy sinh vì nền độc lập nước nhà, mà còn minh chứng rõ nét cho việc thế hệ thanh niên trẻ ngày nay luôn tự hào và tiếp nối những truyền thống tốt đẹp của dân tộc.',

      links: [
  {
    label: "LighT LighT",
    link: "https://www.facebook.com/lighT.sye/posts/pfbid027kzRZNbWSFC6WYccdUArTdVSEwCktJLjnt5nwpoZX4JYKZ5xwAZEodHhPd6s611Kl",
  },
],
      category: "shows"

  },
  {
    src: "/images/lighT_ta_hanu.jpg",
    alt: "lighT",
    title: "HANU CAREER EXPO 2026 - Thanh Âm 22",
    date: "14.05.2026",
   type: "SHOW",

    location: "Đại học Hà Nội, Hà Nội",

    description: 'Đêm nhạc "Thanh Âm 22" (thuộc khuôn khổ "HANU CAREER EXPO 2026") là một kỷ niệm vô cùng đặc biệt, đánh dấu lần đầu tiên lighT hội ngộ người hâm mộ thủ đô kể từ khi chính thức hoạt động với tư cách nghệ sĩ độc lập nhà SYE. Đáp lại tình cảm nồng nhiệt của khán giả Hà Nội, lighT đã khuấy động không gian bằng nguồn năng lượng tươi trẻ qua ca khúc "Đi đu đưa đi", đồng thời mang đến một món quà âm nhạc bất ngờ khi hòa giọng đầy cảm xúc cùng ca sĩ SWAN trong sân khấu "Đại lộ mặt trời".', 
       links: [
  {
    label: "LighT LighT",
    link: "https://www.facebook.com/lighT.sye/posts/pfbid02k7HsAe7amo3uZQ5VAuYM5w1ALUwo5x5LpeV8EjnVVGbc5uifjFzijiWfRXDo3mTLl",
  },
],
      category: "shows"

  },

  {
    src: "/images/lighT_DHHS.jpg",
    alt: "lighT",
    title: "ALUMI CONCERT HOA SEN HOMECOMING 2026",
    date: "18.04.2026",

    location: "Đại học Hoa Sen, Hồ Chí Minh",
   type: "CONCERT",

    description:
      'Tại Alumni Concert Hoa Sen Homecoming, lần đầu tiên "Đi đu đưa đi" được lighT trình diễn cùng với sự kết hợp bùng nổ cùng Rapper Kenji.',
      links: [
  {
    label: "LighT LighT",
    link: "https://www.facebook.com/lighT.sye/posts/pfbid0fFK4EaHf9mecEWF93Yre7dFjKieUGV7mGUTucK7T8pGYECAnJGHd6jqUfBpe4oJnl",
  },
],
      category: "shows"

  },
  
  {
    src: "/images/lighT_crocs.jpg",
    alt: "lighT",
    title: "CROCS POP-UP",
    date: "17.04.2026",
   type: "EVENT",

    location: "Vạn Hạnh Mall, Hồ Chí Minh",
    description: 'lighT tham gia sự kiện "Crocs Pop Up - Chào hè thật chất" tại Vạn Hạnh Mall. Tại đây, lighT cùng các nghệ sĩ khác có cơ hội trải nghiệm sản phẩm mới của Crocs cũng như giao lưu cùng người hâm mộ.',
      links: [
  {
    label: "LighT LighT",
    link: "https://www.facebook.com/lighT.sye/posts/pfbid02gxb25vqe1L2oVrdaYeFbD9Fz4Vmy3p9nQPw8ydDFVNEKohWsztfgDGRH1axSeEMhl",
  },
],
      category: "events"

  },
   {
    src: "/images/lighT_bangiaotusach.jpg",
    alt: "lighT",
    title: "Lễ bàn giao Tủ Sách 25 năm VNExpress",
    date: "10.03.2026",
   type: "EVENT",

    location: "Vĩnh Long",
    description: 'lighT tham gia "Lễ bàn giao Tủ sách 25 năm VNExpress" tại Trường THCS Thanh Sơn, xã Trà Cú, tỉnh Vĩnh Long vào ngày 10/03/2026.',
      links: [
  {
    label: "TINcredible",
    link: "https://www.facebook.com/permalink.php?story_fbid=pfbid0ek3mRr4Aav4xs7bUohvc9TQEFnhJyXmnaGJRRBrp4epAy6dSWZhWLAqPnypkCzSRl&id=61582766494305",
  },
],
      category: "events"

  },

  {
    src: "/images/lighT_TN.jpg",
    alt: "lighT",
    title: 'Countdown "Chào Xuân Bính Ngọ 2026"',
    date: "16.02.2026",
   type: "Festival",

    location: "Quảng trường Võ Nguyên Giáp, Phường Phan Đình Phùng, Tỉnh Thái Nguyên",

    description:
      'lighT đã có cơ hội đón giao thừa cùng nhân dân Thái Nguyên tại sự kiện Countdown "Chào Xuân Bính Ngọ 2026 - Rạng Rỡ Thái Nguyên".',
       links: [
  {
    label: "LighT LighT",
      link: "https://www.facebook.com/lighT.sye/posts/pfbid0BrXLdQ3V54fzNNzarhn329XsQcFxuNnt5jRyXkgRBMps4mN7BC9FmcxZQ64Aqioml?rdid=kaCrzM0efbDYwOJD#",
  },
       ],
  
    category: "shows"
},
{
    src: "/images/lighT_sye.jpg",
    alt: "lighT",
    title: "Họp báo ra mắt NSĐL của SYE",
    date: "20.01.2026",
   type: "EVENT",

    location: "Hồ Chí Minh",

    description:
      'lighT được SYE chính thức giới thiệu là nghệ sĩ độc lập thế hệ mới trong sự kiện công bố ra mắt SYE Holdings, liên doanh ra đời thông qua sự hợp tác của YeaH1 và Sony Music Entertainment.',
       links: [
        {
    label: "LighT LighT",
      link: "https://www.facebook.com/share/p/1Et5skFu59/ ",
  },
  {
    label: "do.nathnim",
      link: "https://www.instagram.com/p/DT4ojDKkafe/?img_index=5&igsh=MXZndnhvaGp5Y2dzeg== ",
  },
  {
    label: "TINcredible",
      link: "https://www.facebook.com/share/p/14iujjiDnZw/",
  },
       ],
  
    category: "events"
},
 {
    src: "/images/lighT_YCC.jpg",
    alt: "lighT",
    title: "Y Concert",
    date: "20.12.2025",
   type: "CONCERT",

    location: "VINHOMES OCEAN PARK 3, Hưng Yên",

    description:
      '"Y-Concert - Mình đoàn viên thôi" đánh dấu một cột mốc đặc biệt khi đây là sân khấu quy mô lớn nhất mà lighT góp mặt kể từ ngày đầu hoạt động nghệ thuật. Với sân khấu "We lit the show", lighT đã tận dụng triệt để thế mạnh vũ đạo khi đảm nhận vị trí center trong phân đoạn dance break điểm nhấn. Khả năng làm chủ sân khấu cùng nguồn năng lượng dồi dào đã mạnh mẽ đẩy cao năng lượng khán giả, thành công lưu lại dấu ấn sắc nét về kỹ năng trình diễn và thu hút sự chú ý tích cực từ đông đảo người tham gia.',
       links: [
        {
    label: "LighT LighT",
      link: "https://www.facebook.com/share/p/18wM7hFtYo/",
      
  },
  {
    label: "LighT LighT",
      link: "https://www.facebook.com/share/p/1Bo5uNn7e9/",
      
  },
   {
    label: "LighT LighT",
      link: "https://www.facebook.com/share/p/1J3gAHfAs1/",
      
  },
    {
    label: "LighT LighT",
      link: "https://www.facebook.com/share/p/1DMo4uC1nY/",
      
  },
  {
    label: "LighT LighT",
      link: "https://www.facebook.com/share/p/1BTErhWX4X/",
      
  },

  {
    label: "do.nathnim",
      link: "https://www.instagram.com/p/DSpYh6JkZgi/?igsh=aDg5czR6Z211dndx",
  },
       ],
  
    category: "shows"
},
{
    src: "/images/lighT_tiktok.jpg",
    alt: "lighT",
    title: "TikTok Shop Fun Fest - Close Up",
    date: "12.12.2025",
   type: "Festival",

    location: "Phố đi bộ Nguyễn Huệ, Hồ Chí Minh",

    description:
      'Không chỉ dành thời gian giao lưu gần gũi cùng các tinie và người hâm mộ tại booth của nhãn hãng Close up, lighT còn mang đến một món quà âm nhạc đầy bất ngờ. Màn kết hợp trình diễn hai ca khúc "Beautiful girl" và "Chuyện đôi ta" cùng các nghệ sĩ độc lập từ SYE đã tạo nên một không gian tràn đầy năng lượng.',
       links: [
     
  {
    label: "TINcredible",
      link: "https://www.facebook.com/share/p/1BEk5yaQ1r/",
  },
       ],
  
    category: "shows"
},
 {
    src: "/images/lighT_DaitiecAI.jpg",
    alt: "lighT",
    title: "ĐẠI TIỆC AI - Thế Giới Di Động",
    date: "07.12.2025",
   type: "Festival",

    location: " Nhà Văn Hóa Thanh Niên, Phường Sài Gòn, Hồ Chí Minh",

    description:
      'lighT cùng các nghệ sĩ độc lập từ SYE biểu diễn tại ĐẠI TIỆC AI - Thế Giới Di Động.',
       links: [
        {
    label: "LighT LighT",
      link: "https://www.facebook.com/share/p/18teTQtJUc/",
  },
  {
    label: "TINcredible",
      link: "https://www.threads.com/@tincredible_allforlight/post/DR9FHWBkuyO?xmt=AQG0ra52GUSX7BZWMmiWWBBV5JzhQNMqAbYH-jia6KYu08ZB4gslbxW-liCDs-1YNa4up6w&slof=1",
  },
       ],
  
    category: "shows"
},
 {
    src: "/images/lighT_WC.jpg",
    alt: "lighT",
    title: " WeChoice Awards 2025",
    date: "07.02.2026",
   type: "EVENT",

    location: "Hồ Chí Minh",

    description:
      'Tại Lễ trao giải WeChoice Awards 2025, lighT cùng các anh em "Tân Binh Thăng Cấp" đã có khoảnh khắc chung vui đầy xúc động khi "Tân Binh Toàn Năng" chiến thắng giải "Show giải trí của năm". Cột mốc rực rỡ này là sự vinh danh xứng đáng cho những nỗ lực bứt phá của Tân binh Đỗ Minh Tân, đồng thời ghi nhận thành công rực rỡ của toàn bộ tập thể làm nên chương trình trong năm 2025.',
       links: [
        {
    label: "LighT LighT",
      link: "https://www.facebook.com/share/p/18yUMtE7Xr/",
  },
      {
    label: "do.nathnim",
      link: "https://www.instagram.com/p/DUfSGmrkcqW/?igsh=ZXZoYWQ4YWN4c2h5",
  },
  {
    label: "TINcredible",
      link: "https://www.threads.com/@tincredible_allforlight/post/DUixhWhEg7Z?xmt=AQG0vpfcmF0JA7GX-SdnWFJAwBYBzQi7OuUPRe6ENr2NCIwlWMd-xD1NVErJx5YvcpVKSVY&slof=1",
  },
       ],
  
    category: "events"
},
{
    src: "/images/lighT_mualua.jpg",
    alt: "lighT",
    title: "Premier Mưa lửa 2025",
    date: "16.05.2025",
   type: "EVENT",

    location: "Hồ Chí Minh",

    description:
      'Sự kiện ra mắt phim tài liệu "Mưa Lửa" 2025 ghi dấu một khoảnh khắc đặc biệt: Lần đầu tiên Tân binh Đỗ Minh Tân (lighT) xuất hiện trước công chúng kể từ khi bắt đầu chặng đường bứt phá tại "Tân Binh Toàn Năng". Dù chỉ tham dự sự kiện với tư cách khách mời, phong thái chỉn chu và sự tự tin của Tin ở những bước đi đầu tiên này đã để lại một hình ảnh rất đẹp trong lòng công chúng.',
       links: [
    
      {
    label: "do.nathnim",
      link: "https://www.instagram.com/p/DKlcyZNTMEJ/?igsh=a3pucGljcTl6a2lq",
  },
  {
    label: "Tân Binh Toàn Năng",
      link: "https://www.facebook.com/photo/?fbid=122138697716746458&set=a.122138696396746458",
  },
       ],
  
    category: "events"
},
{
    src: "/images/lighT_soobinconcert.jpg",
    alt: "lighT",
    title: "SOOBIN LIVE CONCERT: ALL-ROUNDER THE FINAL",
    date: "29.11.2025",
   type: "CONCERT",

    location: "Hồ Chí Minh",

    description:
      'Góp mặt tại Concert All Rounder với vai trò khách mời cùng 10 thành viên "Tân Binh Thăng Cấp" là một cột mốc đầy ý nghĩa đối với lighT. Thật sự trân quý và biết ơn mentor SOOBIN vì đã luôn tận tình chỉ bảo, đồng hành và trao cho lighT cơ hội quý giá để cọ xát trên một sân khấu concert lớn chuyên nghiệp.',
       links: [
    
      {
    label: "do.nathnim",
      link: "https://www.instagram.com/p/DRrGuEskWzB/?img_index=5&igsh=Ynphc3ExajdsbG1q",
  },
  {
    label: "LighT LighT",
      link: "https://www.facebook.com/share/p/1K21hM61jp/",
  },
       ],
  
    category: "shows"
},
];
/*
const dailyItems: MediaItem1[] = [
  { src: "/images/lighT_TAMH_30_6.jpg", alt: "lighT" },
  { src: "/images/lighT_crocs.jpg", alt: "lighT" },
  { src: "/images/lighT_ssdd.jpg", alt: "lighT" },
  { src: "/images/lighT_ssdd1.jpg", alt: "lighT" },
  { src: "/images/lighT_ssdd2.jpg", alt: "lighT" },
];

const supportItems: MediaItem1[] = [
  { src: "/images/LED_htl_hanu.jpg", alt: "Fan Support" },
  { src: "/images/LED_lighT_ssdd.jpg", alt: "Fan Support" },
  { src: "/images/LED_dhhs.jpg", alt: "Fan Support" },
  { src: "/images/led_co_hanu2.jpg", alt: "Fan Support" },
  { src: "/images/LED_TAMH.jpg", alt: "Fan Support" },
  { src: "/images/ulighTmeup.jpg", alt: "Fan Support" },
];
*/
export default function GalleryPage() {
  const [tab, setTab] = useState<
    "events" |"shows"| "daily" | "support"
  >("events");
  const [selected, setSelected] = useState<number | null>(null);
  const [dailyItems, setDailyItems] = useState<MediaItem1[]>([]);
  const [supportItems, setSupportItems] = useState<MediaItem1[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  useEffect(() => {
    setCurrentSlide(0);
  }, [tab]);
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth >= 1280) {
        setVisibleCards(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };

    updateVisibleCards();

    window.addEventListener("resize", updateVisibleCards);

    return () =>
      window.removeEventListener("resize", updateVisibleCards);
  }, []);
  useEffect(() => {
    fetch("/api/gallery?folder=daily")
      .then(res => res.json())
      .then(setDailyItems);

    fetch("/api/gallery?folder=support")
      .then(res => res.json())
      .then(setSupportItems);
  }, []);
  const currentItems = useMemo(() => {
  switch (tab) {
    case "events":
      return eventItems.filter(e => e.category === "events");

    case "shows":
      return eventItems.filter(e => e.category === "shows");

    case "daily":
      return dailyItems;

    case "support":
      return supportItems;
  }
}, [tab, dailyItems, supportItems]);
const currentEventItems =
  tab === "events"
    ? eventItems.filter(e => e.category === "events")
    : eventItems.filter(e => e.category === "shows");
 

const maxSlide = Math.max(
  0,
  currentEventItems.length - visibleCards
);
 const dotCount = maxSlide + 1;

const nextSlide = () => {
  setCurrentSlide((prev) =>
    prev >= maxSlide ? 0 : prev + 1
  );
};

const prevSlide = () => {
  setCurrentSlide((prev) =>
    prev <= 0 ? maxSlide : prev - 1
  );
};
 
  useEffect(() => {
    setCurrentSlide((prev) => Math.min(prev, maxSlide));
  }, [maxSlide]);
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
 <div className=" flex justify-center">
      <img
        src="/images/logo_web/logo-02.png" // đổi sang đường dẫn logo của bạn
        alt="lighT"
        className=" h-10 w-auto sm:h-12 md:h-13 transition duration-300 hover:scale-105"
      />
  </div>
          {/*<h1
            className="mt-3 text-xl font-bold"
            style={{
              textShadow: "0 0 15px rgba(255,255,255,.45)",
            }}
          >
            GALLERY
          </h1>
          */}

          


        {/* Tabs */}

      <div className="mb-8 flex justify-center">
  <div className="flex gap-10 border-b border-white/10">
   
    <button
      onClick={() => setTab("events")}
      className={`relative pb-3 text-xs md:text-base font-medium transition
        ${
          tab === "events"
            ? "text-sky-300"
            : "text-white/60 hover:text-white"
        }
      `}
    >
      Events

      {tab === "events" && (
        <span
          className=" absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-sky-300"
        />
      )}
    </button>
<button
      onClick={() => setTab("shows")}
      className={`relative pb-3 text-xs md:text-base font-medium transition
        ${
          tab === "shows"
            ? "text-sky-300"
            : "text-white/60 hover:text-white"
        }
      `}
    >
      Shows

      {tab === "shows" && (
        <span
          className=" absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-sky-300"
        />
      )}
    </button>

    <button
      onClick={() => setTab("daily")}
      className={` relative pb-3 text-xs md:text-base font-medium transition
        ${
          tab === "daily"
            ? "text-sky-300"
            : "text-white/60 hover:text-white"
        }
      `}
    >
Daily
      {tab === "daily" && (
        <span
          className=" absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-sky-300"
        />
      )}
    </button>

    <button
      onClick={() => setTab("support")}
      className={`relative pb-3 text-xs md:text-base font-medium transition
        ${
          tab === "support"
            ? "text-sky-300"
            : "text-white/60 hover:text-white"
        }
      `}
    >
      Fan Support

      {tab === "support" && (
        <span
          className=" absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-sky-300"
        />
      )}
    </button>
  </div>
</div>

        {/* EVENTS */}
{(tab === "events" || tab === "shows") ? (
          <div className="relative">
            {selected === null && (
              <button
  onClick={prevSlide}
  className={`
    absolute
    left-5
    top-1/2
    -translate-y-1/2
    z-30
    rounded-full
    bg-black/40
    p-3
    transition-opacity
    ${
      selected !== null
        ? "opacity-0 pointer-events-none"
        : "opacity-100"
    }
  `}
>
                <span className="leading-none text-[36px] font-light">
                  ‹
                </span>
              </button>
            )}
      <div className="overflow-hidden">

  <div
    className="flex transition-transform duration-500 ease-in-out"
    style={{
      transform: `translateX(-${
        currentSlide * (100 / visibleCards)
      }%)`,
    }}
  >

    {currentEventItems.map((item, index) => (
      <div
        key={item.src}
        className="flex-shrink-0 px-3"
        style={{
          width: `${100 / visibleCards}%`,
        }}
      >
        <div className="px-3">

          <button
            onClick={() => setSelected(index)}
            className="group relative overflow-hidden"
          >

            <img
              src={item.src}
              alt={item.alt}
              className="aspect-[5/6] w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            <div className="absolute bottom-10 left-0 right-0 p-6">
  <p className="mb-2 text-xs font-bold tracking-[0.18em] text-white/75">
    {item.date}
  </p>

  <h2
    className=" text-sm font-semibold uppercase leading-6 text-sky-300 line-clamp-2">
    {item.title}
  </h2>
</div>

          </button>

        </div>
      </div>
    ))}

  </div>

</div>
            {selected === null && (
              <button
  onClick={nextSlide}
  className={`
    absolute
    right-5
    top-1/2
    -translate-y-1/2
    z-30
    rounded-full
    bg-black/40
    p-3
    transition-opacity
    ${
      selected !== null
        ? "opacity-0 pointer-events-none"
        : "opacity-100"
    }
  `}
>
                <span className="leading-none text-[36px] font-light">
                  ›
                </span>

              </button>
            )}
            <div className="mt-8 flex justify-center gap-3">

              {Array.from({ length: dotCount }).map((_, index) => (

                <button
                  key={index}
onClick={() => setCurrentSlide(Math.min(index, maxSlide))}                  
                  className={`${currentSlide === index
                      ? "h-3 w-8 rounded-full bg-white"
                      : "h-3 w-3 rounded-full bg-white/40"
                    }`}
                />

              ))}

            </div>

          </div>

        ) : (

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

            {currentItems.map((item, index) => (

              <button
                key={index}
                onClick={() => setSelected(index)}
                className="overflow-hidden rounded-2xl"
              >

                <img
                  src={item.src}
                  alt={item.alt}
                  className="aspect-square w-full object-cover transition duration-300 hover:scale-105"
                />

              </button>

            ))}

          </div>

        )}

      </section>

      {/* Lightbox */}
{selected !== null &&
  ((tab === "events" || tab === "shows") ? (

          <div
            className="fixed inset-0 z-[10] overflow-y-auto bg-black/70 backdrop-blur-md px-6 py-12"

            onClick={() => setSelected(null)}
          >

            <div
              onClick={(e) => e.stopPropagation()}
              className="relative mx-auto my-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-sky-300/20 bg-[#0d2749] popup-scroll"
            >
              <button
                onClick={() => setSelected(null)}
                className="sticky right-5 top-5 ml-auto mr-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-1xl text-white"
              >
                X
              </button>

              {/* Cover image */}

              <div
                className="flex justify-center bg-black rounded-t-3xl overflow-hidden max-h-[70vh]"
              >
                <img
src={currentEventItems[selected].src}                  
                  alt={currentEventItems[selected].title}
                  className="w-auto max-h-[55vh] object-contain"
                />
              </div>

              <div className="p-8 overflow-y-auto">

                {/* Title */}

                <h2 className="text-1xl md:text-4xl font-bold uppercase">
                  {currentEventItems[selected].title}
                </h2>

                {/* Date + Location */}

                <div className="mt-8 grid grid-cols-2 border border-white/10">

                  <div className="border-r border-white/10 p-5">

                    <p className="text-xs tracking-[0.35em] text-sky-300">
                      DATE
                    </p>

                    <p className="mt-2 text-sm font-semibold">
                      {currentEventItems[selected].date}
                    </p>

                  </div>

                  <div className="p-5">

                    <p className="text-xs tracking-[0.35em] text-sky-300">
                      LOCATION
                    </p>

                    <p className="mt-2 text-sm font-semibold">
                      {currentEventItems[selected].location}
                    </p>

                  </div>

                </div>

                {/* Description */}

                <div className="mt-8">

                  <p className="text-xs tracking-[0.35em] uppercase text-sky-300">
                    {currentEventItems[selected].type}
                  </p>

                  <p
                    className="mt-4 leading-8 text-white/90"
                  >
                    {currentEventItems[selected].description}
                  </p>

                  {/* Link */}

                 <p className="mt-6 text-white/80">
  Xem thêm:&nbsp;

  {currentEventItems[selected].links.map((item, index) => (
    <span key={item.link}>
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-sky-400 underline hover:text-sky-300"
      >
        {item.label}
      </a>

      {index <
        currentEventItems[selected].links.length - 1 && ", "}
    </span>
  ))}
</p>

                </div>

              </div>

            </div>

          </div>

        ) : (

          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-5"
            onClick={() => setSelected(null)}
          >

            <div
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >

              <button
                onClick={() => setSelected(null)}
                className="absolute right-2 top-2 h-10 w-10 rounded-full bg-white/20 text-2xl"
              >
                ×
              </button>

              <img
                src={currentItems[selected].src}
                alt={currentItems[selected].alt}
                className="max-h-[90vh] max-w-[90vw] rounded-3xl object-contain"
              />

            </div>

          </div>

        ))}

      <style jsx global>{`
       .popup-scroll {
  scrollbar-width: thin;
  scrollbar-color: rgba(150,200,255,.35) transparent;
}

/* Chrome */
.popup-scroll::-webkit-scrollbar{
    width:6px;
}

.popup-scroll::-webkit-scrollbar-track{
    background:transparent;
}

.popup-scroll::-webkit-scrollbar-thumb{
    background:rgba(150,200,255,.35);
    border-radius:999px;
}

.popup-scroll::-webkit-scrollbar-thumb:hover{
    background:rgba(150,200,255,.55);
}

        .no-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
      `}</style>

    </main>
  );
}