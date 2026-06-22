"use client";

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
    backgroundImage: "url('/images/bg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
   
  }}
>    
     

      <div className="relative z-20 mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">


<div className="relative mx-auto mt-5 grid max-w-6xl gap-6 pb-4 lg:grid-cols-[1fr_1fr] lg:items-center lg:pb-0">       <div className="relative order-1 lg:order-1">
        <div
  className="text-center text-white"
  style={{
    textShadow:
      "0 0 8px rgba(255,255,255,.8), 0 0 20px rgba(96,165,250,.8), 0 0 40px rgba(96,165,250,.5)",
  }}
>
          <div className="flex items-center justify-center gap-1">
            <span className="text-sm font-medium tracking-[0.03em] sm:text-lg lg:text-xl">
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

  <div className="mt-1 text-sm font-medium tracking-[0.03em] sm:text-lg lg:text-xl">
    ✨shines the brightest ✨
  </div>
</div>
    
<div className="relative mt-5 flex justify-center">
  
  <p className="absolute -top-2 left-1/2 -translate-x-1/2 select-none text-[clamp(3.8rem,10vw,7rem)] font-black leading-none tracking-[-0.09em] text-white/15 blur-[1px]">
    lighT
  </p>

<h1 className="relative text-[clamp(3.8rem,10vw,7rem)] font-black leading-none tracking-[-0.09em]">
      <span className="pastel-light">lighT</span>
  </h1>
 </div>
<div className="relative mt-8 mx-auto max-w-md">

  <span
  className="absolute -top-8 right-4 z-20 text-4xl astronaut-float select-none pointer-events-none"
  style={{
  filter:
    "drop-shadow(0 0 8px rgba(255,255,255,.8)) drop-shadow(0 0 20px rgba(96,165,250,.5))",
}}
>
  🧑‍🚀
</span>

  <div className="h-[150px] rounded-[2rem] border border-white/10 bg-transparent p-5 backdrop-blur-sm">
    
    <div className="flex h-full flex-col justify-center">
      <p
  className="text-center text-lg italic font-medium text-white"
  style={{
    textShadow:
  "0 0 6px rgba(255,255,255,.35), 0 0 12px rgba(96,165,250,.18)",
  }}
>
        "{fanQuotes[quoteIndex]}"
      </p>

      <p
  className="mt-3 text-right text-xs italic text-white/70"
  style={{
    textShadow:
  "0 0 4px rgba(255,255,255,.25)",
  }}
>
        — lài tì lái ti ✨
      </p>
    </div>

  </div>
  
</div>
          </div>

          <div className="relative order-2 lg:order-2">
            <div className="mx-auto w-full max-w-full lg:max-w-[480px]">
              <div className="relative overflow-hidden rounded-[2.4rem] shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),transparent_42%)]" />

                <div className="absolute right-5 top-5 z-10 rotate-[4deg] rounded-md bg-white px-4 py-3 shadow-[0_12px_24px_rgba(0,0,0,0.12)]">
                  <div className="text-sm font-medium text-sky-700">
                    #lighT
                    <br />
                    #SLAY
                    <br />
                    #Energy
                  </div>
                </div>

                <div className="absolute left-5 top-5 rounded-full border border-black/10 bg-white/80 px-3 py-1 text-[10px] uppercase tracking-[0.35em] text-zinc-600 backdrop-blur-md">
                  Cover
                </div>

<div className="relative aspect-[5/6] min-h-[320px] overflow-hidden sm:min-h-[450px] lg:min-h-[340px]">
<video
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    className="h-full w-full object-cover object-top"
  >
    <source src="/videos/light-intro1.mp4" type="video/mp4" />
  </video>

  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.04)_40%,rgba(0,0,0,0.06)_100%)]" />
 </div>

                <div className="absolute left-5 top-[50%] z-10 rotate-[-6deg] rounded-xl bg-sky-50/90 px-4 py-3 shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
                  <div className="text-2xl">♡</div>
                </div>
              

                <div className="absolute right-8 bottom-5 z-5 rotate-[8deg] rounded-xl bg-sky-50/90 px-4 py-3 shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
                  <div className="text-2xl">✦</div>
                </div>
               
              </div>
            </div>
          </div>
        </div>

<div className="relative z-30 mt-2 pb-4 text-center">  
<img
  src="/images/ulightmeup.png"
  alt="u lighT me up"
  className="mx-auto w-[320px] sm:w-[420px]"
  style={{
    filter: "drop-shadow(0 0 12px rgba(255,255,255,.45))",
  }}
/>

<div className="mt-2 flex flex-col items-center">          
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
    src="/images/logo trắng.png"
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