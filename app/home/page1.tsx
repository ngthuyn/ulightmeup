"use client";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useEffect, useState } from "react";
import BackgroundMusic from "@/components/BackgroundMusic";

const featureCards = [
  {
    title: "Profile",
    desc: "Basic info and identity.",
    href: "/profile",
    icon: "👤",
  },
  {
    title: "Activities",
    desc: "Stages, events, and highlights.",
    href: "/activities",
    icon: "⭐",
  },
  {
    title: "Gallery",
    desc: "Photos, memories, and moments.",
    href: "/gallery",
    icon: "🖼️",
  },
];

const bottomIcons = [
  { href: "/", icon: "🏠", label: "Home" },
  { href: "/profile", icon: "👤", label: "Profile" },
  /*{ href: "/activities", icon: "🎤", label: "Activities" },*/
  { href: "/fancam", icon: "🎥", label: "Fancam" },
  { href: "/gallery", icon: "🖼️", label: "Gallery" },
 
];
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
  const [menuOpen, setMenuOpen] = useState(false);
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
      <Navbar />

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
        <span className="text-[11px] font-medium tracking-[0.02em] sm:text-base lg:text-xl">
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

      <div className="mt-1 text-[10px] sm:text-sm lg:text-xl font-medium tracking-[0.03em] sm:text-lg lg:text-xl">
        ✨shines the brightest ✨
      </div>
    </div>
{/*
    <div className="relative mt-5 flex justify-center">
      <p className="absolute left-1/2 top-0 -translate-x-1/2 select-none text-[clamp(3.8rem,10vw,7rem)] font-black leading-none tracking-[-0.09em] text-white/15 blur-[1px]">
        lighT
      </p>
      <h1 className="relative text-[clamp(3.8rem,10vw,7rem)] font-black leading-none tracking-[-0.09em]">
        <span className="pastel-light">lighT</span>
      </h1>
    </div>
    */}
  </div>
</div>

{/* Full-width hero image, hiển thị đầy đủ theo tỷ lệ gốc, quote overlay ở đáy */}
<div className="relative mt-8 w-full">
  <img
    src="/videos/bg_home1.gif"
    alt="lighT background"
    className="block w-full h-auto select-none pointer-events-none"
    draggable={false}
  />
  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

  <div className="absolute inset-x-0 bottom-0 flex min-h-[100px] items-center justify-center px-6 pb-6">
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

{/* Credit / social section (giữ nguyên như cũ, đặt lại vào khung padding) */}
<div className="relative z-20 mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">


<div className="relative z-30 mt-4 text-center">
<div className="mt-3 flex flex-col items-center">
  
            {/* TINcredible */}
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

      {/* Close */}
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

      {/* Banner */}
      <img
        src="/images/comeback-banner.jpg"
        alt="Comeback"
        className="w-full"
      />

      {/* Button */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="https://www.youtube.com/watch?v=wmCQAghWAzM&t=8s"
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


      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
  
  {/* Menu items */}
  <div
    className={`flex flex-col items-center gap-2 transition-all duration-300 ${
      menuOpen
        ? "translate-y-0 opacity-100"
        : "pointer-events-none translate-y-4 opacity-0"
    }`}
  >
    {bottomIcons
      .filter((item) => item.label !== "Home")
      .reverse()
      .map((item) => (
        <Link
          key={item.href}
          href={item.href}
className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/10 text-xl text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-white/40"
>
          {item.icon}
        </Link>
      ))}
  </div>
<div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-5 z-50">
  <Link
    href="/tmi"
    className="relative flex flex-col items-center"
  >
<div
  className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] font-semibold text-white/90"
  style={{
    textShadow:
      "0 0 6px rgba(255,255,255,.4)",
  }}
>  
  
  💌 from tinies
</div>

    <img
      src="/images/tinie_1.png"
      alt="Tinie"
      className="tinie-bell h-8 w-auto drop-shadow-lg cursor-pointer"
    />
  </Link>
</div>

 {/* Nút Home */}
<div className="relative">
  {!menuOpen && (
    <span className="absolute inset-0 rounded-full animate-ping bg-sky-400/40" />
  )}

  <button
    onClick={() => setMenuOpen((prev) => !prev)}
    className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/10 text-lg text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-white/40"
  >
    {menuOpen ? "✕" : "🏠"}
  </button>
</div>
</div> 

      <style jsx global>{`
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }

  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .pastel-light {
  background: linear-gradient(
    90deg,
    #67e8f9,
    #60a5fa,
    #818cf8,
    #a78bfa,
    #67e8f9
  );
  background-size: 300% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  animation: pastelFlow 8s linear infinite;

  filter: drop-shadow(
    0 4px 12px rgba(96, 165, 250, 0.15)
  );
}
 .pastel-light{
  text-shadow:
    0 0 20px rgba(96,165,250,.4),
    0 0 40px rgba(96,165,250,.25);
} 
  @keyframes pastelFlow {
    0% {
      background-position: 0% center;
    }
    100% {
      background-position: 300% center;
    }
  }
    @keyframes tinieBell {
  0%, 85%, 100% {
    transform: rotate(0deg);
  }

  88% {
    transform: rotate(-12deg);
  }

  91% {
    transform: rotate(12deg);
  }

  94% {
    transform: rotate(-8deg);
  }

  97% {
    transform: rotate(8deg);
  }
}
@keyframes astronautFloat {
  0% {
    transform: translateY(0px) rotate(-8deg);
  }

  50% {
    transform: translateY(-8px) rotate(-3deg);
  }

  100% {
    transform: translateY(0px) rotate(-8deg);
  }
}

.astronaut-float {
  animation: astronautFloat 4s ease-in-out infinite;
}
.tinie-bell {
  animation: tinieBell 2s ease-in-out infinite;
  transform-origin: top center;
}
`}</style>

    </main>
</>
);
}
