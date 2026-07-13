"use client";

import {useEffect, useMemo, useState } from "react";
type MediaItem = {
  src:string;
  alt:string;

  title:string;

  date:string;

  location:string;

  description:string;

  link:string;
};
type MediaItem1 = {
  src:string;
  alt:string;

  
};
const eventItems: MediaItem[] = [
  {
    src: "/images/lighT_ssdd1.jpg",
    alt: "lighT",
    title: "Sức sống đại dương",
    date:"31.07.2026",

    location:"Vịnh Hạ Long, Quảng Ninh",

    description:
      'lighT đã tham gia show "Sức sống đại dương" cùng các nghệ sĩ Jun Phạm, S.T Sơn Thạch, Dương Hoàng Yến, Bùi Lan Hương cùng các nghệ sĩ độc lập của SYE như Hồ Đông Quan, Thái Lê Minh Hiếu, SWAN; cũng như nhóm nhạc UPRIZE. Show được tổ chức tại LUNA HALONG CRUISE. Tại show này, người hâm mộ đã được nghe giọng hát ballad ngọt ngào của lighT khi cùng 3 nghệ sĩ độc lập khác của SYE thể hiện ca khúc "Chuyện đôi ta". Đặc biệt phần trình diễn "99KISS" do lighT trình bày đã đem đến bầu không khí tuyệt vời cho các nghệ sĩ và người hâm mộ.',

    link:"https://www.facebook.com/share/p/1BpraDWn5F/"
  },
  {
    src: "/images/lighT_tamh2.jpg",
    alt: "lighT",
    title: "Thanh âm mùa hạ",
    date:"30.05.2026",

    location:"Hà Nội",

    description:
      'lighT đã tham gia show "Thanh Âm Mùa Hạ" được tổ chức ở Cung văn hóa lao động hữu nghị Việt-Xô. Tại đây, lighT mang đến "Đại lộ mặt trời" và "Nhớ mãi chuyến đi này" cho khán giả thủ đô trong phần trình diễn solo của mình. Đặc biệt lighT đã kết hợp cùng bố Kay (ca sĩ Kay Trần) cùng ca sĩ SWAN với "Một vòng Việt Nam" mang đến một phần trình diễn bùng nổ bởi sự ăn ý của THE AURORA.',

    link:"https://www.facebook.com/lighT.sye/posts/pfbid0bvtDjUSmNDVaPrjbbKfMxAMsmTkYDfh22JeU6MJsgXfryFFtaMQRw6mTjex3MfRkl"
  },
   {
    src: "/images/lighT_NA_18_05.jpg",
    alt: "lighT",
    title: "Lễ hội làng Sen",
    date:"18.05.2026",

    location:"Làng Sen, Nghệ An",

    description:
      'lighT vinh dự được tham gia vào sự kiện "Lễ Hội Làng Sen 2026". Lễ hội Làng Sen là hoạt động văn hóa, chính trị có ý nghĩa sâu sắc nhằm tưởng nhớ, tri ân công lao to lớn của Chủ tịch Hồ Chí Minh; đồng thời góp phần tuyên truyền, giáo dục truyền thống yêu nước, lòng tự hào dân tộc và quảng bá hình ảnh quê hương Nghệ An đến đông đảo nhân dân, du khách trong và ngoài nước.',

    link:"https://www.facebook.com/lighT.sye/posts/pfbid027kzRZNbWSFC6WYccdUArTdVSEwCktJLjnt5nwpoZX4JYKZ5xwAZEodHhPd6s611Kl"
  },
    {
    src: "/images/lighT_ta_hanu.jpg",
    alt: "lighT",
    title: "Thanh Âm 22",
    date:"14.05.2026",

    location:"Đại học Hà Nội, Hà Nội",

    description:  'lighT đã có cơ hội gặp gỡ người hâm mộ thủ đô lần đầu tiên kể từ khi chính thức trở thành nghệ sĩ độc lập của SYE. "Thanh Âm 22" là đêm nhạc thuộc sự kiện "Ngày hội kết nối Doanh nghiệp và Tuyển dụng HANU CAREER EXPO 2026". Tại đêm nhạc này lighT mang đến phần trình diễn bùng nổ với "Đi đu đưa đi"cũng như phần kết hợp bất ngờ với ca sĩ SWAN qua ca khúc "Đại lộ mặt trời".',
    link:"https://www.facebook.com/lighT.sye/posts/pfbid02k7HsAe7amo3uZQ5VAuYM5w1ALUwo5x5LpeV8EjnVVGbc5uifjFzijiWfRXDo3mTLl"
  },
   
    {
    src: "/images/lighT_DHHS.jpg",
    alt: "lighT",
    title: "ALUMI CONCERT HOA SEN HOMECOMING 2026",
    date:"18.04.2026",

    location:"Đại học Hoa Sen, Hồ Chí Minh",

    description:
      'Tại ALUMNI CONCERT, lần đầu tiên "Đi đu đưa đi" được lighT trình diễn cùng với sự kết hợp bùng nổ cùng nghệ sĩ Kenji.',

    link:"https://www.facebook.com/lighT.sye/posts/pfbid0fFK4EaHf9mecEWF93Yre7dFjKieUGV7mGUTucK7T8pGYECAnJGHd6jqUfBpe4oJnl"
  },
{
    src: "/images/lighT_crocs.jpg",
    alt: "lighT",
    title: "Crocs Pop Up",
    date:"17.04.2026",

    location:"Vạn Hạnh Mall, Hồ Chí Minh",
    description:'lighT tham gia sự kiện Crocs Pop Up. Tại đây lighT cùng các nghệ sĩ khác có cơ hội trải nghiệm sản phẩm mới của Crocs cũng như giao lưu cùng người hâm mộ.',
link: "pfbid0ddcKngj2cXXsSVExpLhgHEwzLg6q6CU27E1dJXHp4GPxR23N5KCkf2af2v9q5X7wl",
  },
   {
    src: "/images/lighT_tn.jpg",
    alt: "lighT",
    title: "CHƯƠNG TRÌNH NGHỆ THUẬT CHÀO XUÂN BÍNH NGỌ 2026 - RẠNG RỠ THÁI NGUYÊN ",
    date:"16.02.2026",

    location:"Quảng trường Võ Nguyên Giáp, Phường Phan Đình Phùng, Tỉnh Thái Nguyên",

    description:
      'lighT đã có cơ hội đón giao thừa cùng nhân dân Thái Nguyên tại sự kiện này.',
link: "https://www.facebook.com/lighT.sye/posts/pfbid0BrXLdQ3V54fzNNzarhn329XsQcFxuNnt5jRyXkgRBMps4mN7BC9FmcxZQ64Aqioml?rdid=kaCrzM0efbDYwOJD#",
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
  "events" | "daily" | "support"
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
      return eventItems;
    case "daily":
      return dailyItems;
    case "support":
      return supportItems;
    default:
      return eventItems;
  }
}, [tab, dailyItems, supportItems]);
const maxSlide = Math.max(
  0,
  eventItems.length - visibleCards
);
useEffect(() => {
  setCurrentSlide((prev) => Math.min(prev, maxSlide));
}, [maxSlide]);
const dotCount = Math.max(
  1,
  eventItems.length - visibleCards + 1
);
const nextSlide = () => {
  setCurrentSlide((prev) =>
    prev >= maxSlide ? 0 : prev + 1
  );
};
const prevSlide = () => {
  setCurrentSlide((prev) =>
    prev === 0 ? maxSlide : prev - 1
  );
};
  return (
    <main
      className="min-h-screen text-white"
      style={{
        backgroundImage: "url('/videos/bg.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-20">

        {/* Header */}
        <div className="text-center mb-6">

         {/*" <p className="tracking-[0.35em] uppercase text-sky-200 text-xs">
            Gallery
          </p>*/}

          <h1
            className="mt-3 text-5xl font-bold"
            style={{
              textShadow: "0 0 15px rgba(255,255,255,.45)",
            }}
          >
            Gallery
          </h1>

          <p className="mt-2 text-white/70">
            Memories captured along lighT's journey ✨
          </p>

        </div>

        {/* Tabs */}

     <div className="flex justify-center mb-2">

  <div className="flex rounded-full bg-black/30 p-1 backdrop-blur-sm">

    <button
      onClick={() => setTab("events")}
      className={`px-5 py-2 rounded-full transition ${
        tab === "events"
          ? "bg-sky-400 text-white"
          : "text-white/70"
      }`}
    >
      Events/Shows
    </button>

    <button
      onClick={() => setTab("daily")}
      className={`px-5 py-2 rounded-full transition ${
        tab === "daily"
          ? "bg-sky-400 text-white"
          : "text-white/70"
      }`}
    >
      Daily
    </button>

    <button
      onClick={() => setTab("support")}
      className={`px-5 py-2 rounded-full transition ${
        tab === "support"
          ? "bg-sky-400 text-white"
          : "text-white/70"
      }`}
    >
      Fan Support
    </button>

  </div>

</div>

        {/* EVENTS */}
{tab === "events" ? (

<div className="relative">
{selected === null && (
<button
onClick={prevSlide}
className="absolute left-5 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/40 p-3"
>
<span className="leading-none text-[36px] font-light">
  ‹
</span>
</button>
)}
<div className="overflow-hidden">

<div
className="flex transition-transform duration-500"
style={{
  transform: `translateX(-${(100 / visibleCards) * currentSlide}%)`,
}}
>

{eventItems.map((item,index)=>(

<div
key={index}
className="w-full md:w-1/3 xl:w-1/3 flex-shrink-0 px-3"
>

<button
onClick={()=>setSelected(index)}
className="group relative overflow-hidden"
>

<img
src={item.src}
alt={item.alt}
className="aspect-[5/6] w-full object-cover transition duration-500 group-hover:scale-105"
/>

<div
className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
/>

<div
className="absolute bottom-2 left-0 right-0 p-6"
>

<h2
className="text-sm font-semibold uppercase text-sky-300"
>
{item.title}
</h2>

</div>

</button>

</div>

))}

</div>

</div>
{selected === null && (
<button
onClick={nextSlide}
className="absolute right-5 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/40 p-3"
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
      onClick={() => setCurrentSlide(index)}
      className={`${
        currentSlide === index
          ? "h-3 w-8 rounded-full bg-white"
          : "h-3 w-3 rounded-full bg-white/40"
      }`}
    />

  ))}

</div>

</div>

) : (

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

{currentItems.map((item,index)=>(

<button
key={index}
onClick={()=>setSelected(index)}
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

      </div>

      {/* Lightbox */}

{selected !== null &&
(tab === "events" ? (

<div
className="fixed inset-0 z-[10] overflow-y-auto bg-black/70 backdrop-blur-md px-6 py-12"

onClick={() => setSelected(null)}
>

<div
onClick={(e)=>e.stopPropagation()}
className="relative mx-auto my-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-sky-300/20 bg-[#0d2749] popup-scroll"
>
<button
onClick={()=>setSelected(null)}
className="sticky right-5 top-5 ml-auto mr-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-1xl text-white"
>
X
</button>

{/* Cover image */}

<div
  className="flex justify-center bg-black rounded-t-3xl overflow-hidden max-h-[70vh]"
>
  <img
    src={eventItems[selected].src}
    alt={eventItems[selected].title}
    className="w-auto max-h-[55vh] object-contain"
  />
</div>

<div className="p-8 overflow-y-auto">

  {/* Title */}

  <h2 className="text-1xl md:text-4xl font-bold uppercase">
    {eventItems[selected].title}
  </h2>

  {/* Date + Location */}

  <div className="mt-8 grid grid-cols-2 border border-white/10">

    <div className="border-r border-white/10 p-5">

      <p className="text-xs tracking-[0.35em] text-sky-300">
        DATE
      </p>

      <p className="mt-2 text-sm font-semibold">
        {eventItems[selected].date}
      </p>

    </div>

    <div className="p-5">

      <p className="text-xs tracking-[0.35em] text-sky-300">
        LOCATION
      </p>

      <p className="mt-2 text-sm font-semibold">
        {eventItems[selected].location}
      </p>

    </div>

  </div>

  {/* Description */}

  <div className="mt-8">

    <p className="text-xs tracking-[0.35em] uppercase text-sky-300">
      EVENT/SHOW
    </p>

    <p
      className="mt-4 leading-8 text-white/90"
    >
      {eventItems[selected].description}
    </p>

    {/* Link */}

    <p className="mt-6 text-white/80">

      Xem thêm:&nbsp;

      <a
        href={eventItems[selected].link}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-sky-400 underline hover:text-sky-300"
      >
        Link
      </a>

    </p>

  </div>

</div>

</div>

</div>

) : (

<div
className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-5"
onClick={()=>setSelected(null)}
>

<div
className="relative"
onClick={(e)=>e.stopPropagation()}
>

<button
onClick={()=>setSelected(null)}
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