"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import BackgroundMusic from "@/components/BackgroundMusic";

const fanQuotes = [
  "Thương nhà mình lémmm, tin tưởng ở tin nhooo 🫂",
  "Aaaa, cảm ơn tinie nhà mình ạ 🥺🫂",
  "Cảm ơn những pj support của mn ạaaa",
  "Nay có led nũa dui qớ, thương nhà mình nhắm nhắm 🥺🥹",
  "Nói chung hôm ni hạnh phúc lắm, vì mình biết mình còn đc yêu thương 🫂",
  "Và cảm ơn mn hôm nay đã đến ủng hộ cho Tin cũng như anh 2 ạaaaa 🫶🫶🫶 luv u mn",
"Sắp đc gặp mn rồiiiii",
"Quà tặng mn bủi tối ạ, ngủ ngoan nhoe mn",
"Nhà mình vô nhận quà nhooo",
"Nhà mình ngủ ngoan ạaaaa",
"Mong rằng ở chặng hành trình này Tin vẫn sẽ tiếp tục nhận được sự ủng hộ và yêu thương từ mọi người, từ tinie",
"Đón chờ sản phẩm của nghệ sĩ lighT nheee",
"U lighT ME UPPPPPP",
"tinie ngủ ngoan nhoo 🫶🥳 thương lắm",
"tinie ráng chờ tí xíu nữa thoiiii, sắp nổ ròi 💣💥"
];
export default function Home() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(true);
  const [dontShowAgain, setDontShowAgain] = useState(false);
  useEffect(() => {
  const hide = localStorage.getItem("hidePopup");

  if (hide === "true") {
    setShowPopup(false);
  }
}, []);
  useEffect(() => {
  const timer = setInterval(() => {
    setQuoteIndex((prev) => (prev + 1) % fanQuotes.length);
  }, 3500);

  return () => clearInterval(timer);
}, []);
 return (
  <>
    <BackgroundMusic />

<main
  className="relative min-h-[100svh] overflow-x-hidden text-zinc-900"
  style={{
    backgroundImage: "url('/videos/bg.gif')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>    
{/* Title */}
<div className="relative z-20 mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
  <div className="relative mx-auto mt-[8vh] max-w-3xl text-center sm:mt-[10vh] lg:mt-[12vh]">
    <div
      className="text-white"
      style={{
        textShadow:
          "0 0 8px rgba(255,255,255,.8), 0 0 20px rgba(96,165,250,.8), 0 0 40px rgba(96,165,250,.5)",
      }}
    >
      <div className="flex items-center justify-center gap-1">
        <span className="text-[12px] font-medium tracking-[0.02em] sm:text-base lg:text-xl">
          The lighT in
        </span>

        <div className="flex items-center whitespace-nowrap">
          <img
            src="/images/tinie_1.png"
            alt="tinie"
            className="h-6 w-auto sm:h-9 lg:h-10"
          />
          <span className="ml-px text-sm font-medium tracking-[0.03em] sm:text-lg lg:text-xl">
            's
          </span>
        </div>

        <span className="text-sm font-medium tracking-[0.03em] sm:text-lg lg:text-xl">
          eyes
        </span>
      </div>

      <div className="mt-1 text-[12px] sm:text-sm lg:text-xl font-medium tracking-[0.03em] sm:text-lg lg:text-xl">
        ✨shines the brightest ✨
      </div>
    </div>
  </div>
</div>

{/* Full-width hero image, hiển thị đầy đủ theo tỷ lệ gốc, quote overlay ở đáy */}
<div className="relative mt-8 w-full">
  <img
    src="/videos/home.gif"
    alt="lighT background"
    className="block w-full h-auto select-none pointer-events-none"
    draggable={false}
  />
  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

  <div className="absolute inset-x-0 bottom-15 flex min-h-[100px] items-center justify-center px-6 pb-6">
    <p
      className="max-w-2xl text-center text-sm italic font-medium text-white sm:text-base lg:text-xl"
      style={{
        textShadow:
          "0 0 10px rgba(255,255,255,.5),0 0 20px rgba(96,165,250,.25)",
      }}
    >
      "{fanQuotes[quoteIndex]}"
    </p>
  </div>
</div>

{/* Credit / social section */}
<div className="relative z-20 mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">

<div className="relative z-30 mt-4 text-center">
<div className="mt-3 flex flex-col items-center">

         <div className="flex items-center justify-center gap-2">
  <span
  className="text-[11px] italic text-white"
  style={{
    textShadow: "0 0 10px rgba(255,255,255,.5)",
  }}
>
  lovingly created by
</span>

  <img
    src="/images/logotrang.png"
    alt="TINcredible"
    className="h-3.5 w-auto opacity-90"
  />
</div>
<div className="mt-1 flex items-center gap-4">   
          <a
            href="https://www.facebook.com/profile.php?id=61582766494305"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/facebook.png"
             className="h-5 w-5 rounded-full bg-white/90 p-[2px] shadow-[0_0_15px_rgba(255,255,255,.9)] transition-all duration-300 hover:scale-125"
            />
          </a>

          <a
            href="https://www.instagram.com/tincredible_allforlight/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/instagram.png"
             className="h-5 w-5 rounded-full bg-white/90 p-[2px] shadow-[0_0_15px_rgba(255,255,255,.9)] transition-all duration-300 hover:scale-125"
            />
          </a>

          <a
            href="https://www.tiktok.com/@tincredible_allforlight"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/tiktok.png"
              className="h-5 w-5 rounded-full bg-white/90 p-[2px] shadow-[0_0_15px_rgba(255,255,255,.9)] transition-all duration-300 hover:scale-125"
            />
          </a>

          <a
            href="https://www.threads.com/@tincredible_allforlight"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/threads.png"
              className="h-5 w-5 rounded-full bg-white/90 p-[2px] shadow-[0_0_15px_rgba(255,255,255,.9)] transition-all duration-300 hover:scale-125"
            />
          </a>
        </div>
      </div>
      </div>
            </div>

{showPopup && (
  <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
    <div className="relative w-[90%] max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl">
      <button
  onClick={() => {
    if (dontShowAgain) {
      localStorage.setItem("hidePopup", "true");
    }
    setShowPopup(false);
  }}
        className=" absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-xl transition hover:scale-110"
      >
        ✕
      </button>

      <img
        src="/images/comeback-banner.jpg"
        alt="Comeback"
        className="w-full"
      />

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="https://www.youtube.com/watch?v=dCx1XTxPxXg"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-sky-500 px-7 py-3 font-semibold text-white shadow-lg transition hover:scale-105"
        >
          ▶ Watch now
        </a>
        <label className="mt-4 flex items-center justify-center gap-2 text-sm text-white">
  <input
    type="checkbox"
    checked={dontShowAgain}
    onChange={(e) => setDontShowAgain(e.target.checked)}
  />
  Don't show again
</label>
      </div>
    </div>
  </div>
)}



      <style jsx global>{`
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }

  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

 
    
   
`}</style>

    </main>
</>
);
}
