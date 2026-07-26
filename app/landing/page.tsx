"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import AboutSection from "@/components/AboutSection";
import { useRef, useState, useEffect } from "react";
export default function LandingPage() {
  const contentRef = useRef<HTMLDivElement>(null);
const audioRef = useRef<HTMLAudioElement>(null);
const bgVideoRef = useRef<HTMLVideoElement>(null);
const mainVideoRef = useRef<HTMLVideoElement>(null);
const [soundEnabled, setSoundEnabled] = useState(false);
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start end", "end end"],
  });
const enableSound = async () => {
  if (!audioRef.current) return;

  try {
   if (soundEnabled) {
  audioRef.current.pause();
  setSoundEnabled(false);
} else {
  audioRef.current.volume = 0.5;
  await audioRef.current.play();
  setSoundEnabled(true);
}
  } catch (e) {
    console.log(e);
  }
};
 useEffect(() => {
  bgVideoRef.current?.play().catch(() => {});
  mainVideoRef.current?.play().catch(() => {});
}, []);
const heroZ = useTransform(
  scrollYProgress,
  [0, 0.2],
  [0, -10]
);
const heroOpacity = useTransform(
  scrollYProgress,
  [0, 0.15, 0.2],
  [1, 1, 0]
);  
const indicatorOpacity = useTransform(
  scrollYProgress,
  [0, 0.03, 0.08],
  [1, 1, 0]
);
useMotionValueEvent(scrollYProgress, "change", (v) => {
  if (!audioRef.current || !soundEnabled) return;

  // Hero fullscreen hiện lại
  if (v <= 0.02) {
    audioRef.current.pause();
    audioRef.current.currentTime = 0; // nếu muốn phát lại từ đầu lần sau
    setSoundEnabled(false);
  }
});
return (
    <>
      {/* HERO FIXED */}
   <motion.div
  style={{
    opacity: heroOpacity,
    zIndex: heroZ,
  }}
  className="fixed inset-0 overflow-hidden"
>
     
 {/* Mobile + Tablet */}
<video
  src="/videos/bg-mobile.mp4"
  className="block lg:hidden absolute inset-0 h-full w-full object-cover"
  autoPlay
  muted
  loop
  playsInline
/>

{/* Desktop */}
<video
  src="/videos/bg-desktop.mp4"
  className="hidden lg:block absolute inset-0 h-full w-full object-cover"
  autoPlay
  muted
  loop
  playsInline
/>


        <div className="absolute inset-0 bg-black/20" />
{/*
        <div className="absolute inset-0 flex items-center justify-center px-6">

  <div className="w-full max-w-4xl text-center text-white">

    <p className="mb-4 text-sm md:text-lg tracking-[0.45em] text-white/80">
      lighT's
    </p>

    <h1 className="text-4xl md:text-6xl font-black tracking-tight">
      TÊN BÀI HÁT
    </h1>

    <p className="mt-5 text-lg md:text-2xl tracking-[0.35em] uppercase text-white/90">
      THE 1ST SINGLE OUT NOW
    </p>
*/}
<div className="absolute inset-0 z-[999] flex items-center justify-center px-6">  
  <div className="text-center text-white">
   

    <h2
      className="mt-3 text-xl font-semibold md:text-3xl"
      style={{
        textShadow: "0 0 18px rgba(255,255,255,.25)",
      }}
    >
      Kênh YouTube chính thức của{" "}
      <span className="text-sky-300">lighT</span>
    </h2>

    <p className="mt-3 text-xs text-white/70 md:text-sm">
      Đăng ký để không bỏ lỡ những sân khấu, vlog và hoạt động mới nhất.
    </p>

   <a
  href="https://www.youtube.com/@lighT-official-T"
  target="_blank"
  rel="noopener noreferrer"
  className="
    mt-8
    inline-flex
    items-center
    gap-2
    rounded-full
    border
    border-white/60
    px-6
    py-3
    text-sm
    font-medium
    transition-all
    duration-300
    hover:border-red-500
    hover:bg-red-600
  "
>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4"
      >
        <path d="M8 5v14l11-7z" />
      </svg>

      Subscribe Now
    </a>
  </div>
</div>
    
{/*
      <a
        href="https://spotify.com"
        target="_blank"
        className="
          rounded-full
          border-2 border-white
          py-4
          text-lg font-semibold
          transition
          hover:bg-white
          hover:text-black
        "
      >
        ♪ STREAM NOW
      </a>
*/}
-
    {/* Chỉ render nếu còn code */}
  {/*  <a
      href="https://light-itunes-code.vercel.app/"
      target="_blank"
      className="
        mt-4
        block
        rounded-full
        border-2 border-white
        py-4
        text-lg font-semibold
        transition
        hover:bg-white
        hover:text-black
      "
    >
      🎁 REDEEM CODE
    </a>

  </div>
 
  </motion.div>
</div>
 */}
 <motion.div
  style={{ opacity: indicatorOpacity }}
  className="
    absolute
    bottom-8
    left-1/2
    -translate-x-1/2
    z-[999]
    flex
    flex-col
    items-center
    text-white/75
    pointer-events-none
  "
>
  <span className="text-[11px]  tracking-[0.35em]">
  Scroll Down
</span>

  <motion.svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    animate={{ y: [0, 8, 0] }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="mt-2"
  >
    <path
      d="M7 10l5 5 5-5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </motion.svg>
</motion.div>
      </motion.div>

      {/* Spacer */}
<div className="h-screen" />
     {/* CONTENT */}
<div
  ref={contentRef}
  className="
    relative
    z-20
  "
>
  

  {/* Phần trắng */}
<div
  className="bg-[#f8fcff]"
  style={{
    backgroundImage:
      "radial-gradient(rgba(32, 126, 233, 0.35) 1px, transparent 1px)",
    backgroundSize: "28px 28px",
  }}
>
  <div className="mx-auto max-w-7xl px-6 pt-6 pb-24 lg:px-10">      
      <AboutSection
  soundEnabled={soundEnabled}
  onEnableSound={enableSound}
/>
    </div>
  </div>
</div>
<audio
  ref={audioRef}
  src="/audio/DLMT.mp3"
  loop
/>
    </>
  );
}