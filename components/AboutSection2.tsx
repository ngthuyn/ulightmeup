"use client";

import Link from "next/link";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
type AboutSectionProps = {
    soundEnabled: boolean;
    onEnableSound: () => void;
};

const cards = [
    {
        title: "Fancam",
        desc: "Watch performances and stage moments.",
        href: "/videos/fancam",
        icon: "🎥",
    },
    {
        title: "lighT FACT CHECK",
        desc: "Everything you should know about lighT.",
        href: "/tmi/fact-check",
        icon: "✨",
    },
    {
        title: "Tân Binh Toàn Năng",
        desc: "Music, covers and special contents.",
        href: "/videos/song-cover",
        icon: "🎵",
    },
];
const quotes = [
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
  "tinie ráng chờ tí xíu nữa thoiiii, sắp nổ ròi 💣💥",
];

export default function AboutSection({
    soundEnabled,
    onEnableSound,

}: AboutSectionProps) {
    const controls = useAnimationControls();
const [quoteIndex, setQuoteIndex] = useState(0);
    useEffect(() => {
        if (soundEnabled) {
            controls.start({
                rotate: 360,
                transition: {
                    duration: 12,
                    ease: "linear",
                    repeat: Infinity,
                },
            });
        } else {
            controls.stop();
        }
    }, [soundEnabled, controls]);
    useEffect(() => {
  if (!soundEnabled) return;

  const timer = setInterval(() => {
    setQuoteIndex((prev) => (prev + 1) % quotes.length);
  }, 3000); // đổi mỗi 4.5s

  return () => clearInterval(timer);
}, [soundEnabled]);
    return (
        <>
        <section
            className="
relative
flex
flex-col
lg:flex-row

items-stretch
lg:items-center

pb-5
lg:pb-0
"
        >
            {/* ================= LEFT ================= */}

            <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
                className="relative z-20 w-full lg:w-[60%] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,.18)]">
                <div className="relative">
<img
  src="/videos/home.gif"
  className="
    w-full
    aspect-square
    object-contain
  "
/>
                    <button
                        onClick={onEnableSound}
                        className="
   autoplay
    absolute
    top-2
    right-2
    z-20
    rounded-full
    bg-black/50
    border border-white/30
    backdrop-blur-md
    px-4
    py-2
    text-white
    transition
    hover:bg-white
    hover:text-black
  "
                    >
                        {soundEnabled ? "🔊 BGM On" : "🔇 BGM Off"}
                    </button>

                </div>


                <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-black via-black/45 to-transparent" />

                <div className="absolute bottom-8 left-8 right-8">
                    <motion.p
  key={quoteIndex}
  initial={{ opacity: 0, y: 12 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="max-w-lg text-lg italic leading-8 text-white"
  style={{
    textShadow:
      "0 2px 10px rgba(0,0,0,.8),0 0 24px rgba(0,0,0,.45)",
  }}
>
  "{quotes[quoteIndex]}"
</motion.p>
                </div>
            </motion.div>

            {/* ================= RIGHT ================= */}

        <motion.div
className="
relative

w-full
lg:flex-1

flex
items-center

h-[90vw]
max-h-[620px]

lg:h-[620px]

overflow-visible
z-30
"
>

      <div
className="
absolute

left-1/2
top-0

-translate-x-1/2
-translate-y-[5%]

lg:left-0
lg:top-1/2

lg:-translate-x-[5%]
lg:-translate-y-1/2

h-full
aspect-square
"
>
                
                    <motion.div
                        animate={controls}
                        className="
    absolute
    inset-0
    overflow-hidden
    rounded-full
    shadow-[0_25px_60px_rgba(0,0,0,.25)]
    pointer-events-none
"
                    >
                        <img
                            src="/images/lighT_cd.png"
                            alt="CD"
                            className="
            h-full
            w-full
            object-cover
            select-none
            pointer-events-none
        "
                            draggable={false}
                        />

                        <div
                            className="
            absolute
            inset-0

            rounded-full

            ring-2
            ring-white/20
        "
                        />
                        <div
                            className="
absolute
inset-0

rounded-full

border
border-zinc-300
"
                        />

                        <div
                            className="
absolute
left-[15%]
top-[10%]

h-28
w-28

rounded-full

bg-white/50

blur-3xl"
                        />
                        <div
                            className="
    absolute
    left-1/2
    top-1/2

    h-12
    w-12

    -translate-x-1/2
    -translate-y-1/2

    rounded-full

    bg-[#4b1704]
    border-4
    border-white
  "

                        />
                        <div
                            className="
absolute
left-1/2
top-1/2

h-5
w-5

-translate-x-1/2
-translate-y-1/2

rounded-full
bg-white
border
border-zinc-300
"
                        />
                        <div
                            className="
absolute
inset-0

flex
items-center
justify-center

pointer-events-none
"
                        >
                            {/*<h2
className="
text-4xl
md:text-5xl
font-black
text-[#5b1e08]
drop-shadow-[0_4px_10px_rgba(0,0,0,.15)]
"

                            >
                                lighT
                            </h2>
*/}
                        </div>
                    </motion.div>
                    {/*<div className="absolute inset-0 z-30 pointer-events-none">

  <Link
    href="/videos/fancam"
    className="
      pointer-events-auto
      absolute

      left-1/2
      top-[18%]
      -translate-x-1/2

      rounded-full
      border border-[#4b1704]
      bg-white/90
      backdrop-blur
      shadow-lg

      px-5 py-2
      text-xs
      text-[#4b1704]

      transition-all
      hover:-translate-y-1
      hover:bg-[#4b1704]
      hover:text-white
    "
  >
    Fancam
  </Link>

  <Link
    href="/tmi/fact-check"
    className="
      pointer-events-auto
      absolute

      left-[78%]
      top-[40%]

      -translate-x-1/2
      -translate-y-1/2

      rounded-full
      border border-[#4b1704]
      bg-white/90
      backdrop-blur
      shadow-lg

      px-5 py-2
      text-xs
      text-[#4b1704]

      transition-all
      hover:-translate-y-1
      hover:bg-[#4b1704]
      hover:text-white
    "
  >
    Fact Check
  </Link>

  <Link
    href="/career-journey/tv-shows"
    className="
      pointer-events-auto
      absolute

      left-[22%]
      top-[74%]

      -translate-x-1/2
      -translate-y-1/2

      rounded-full
      border border-[#4b1704]
      bg-white/90
      backdrop-blur
      shadow-lg

      px-5 py-2
      text-xs
      text-[#4b1704]

      transition-all
      hover:-translate-y-1
      hover:bg-[#4b1704]
      hover:text-white
    "
  >
    TBTN
  </Link>

</div> */}

                </div>        {/* div h-[340px] */}

            </motion.div>   {/* RIGHT */}

        </section>
{/* ================= ABOUT ================= */}

<section className="mt-10">
  <div
  className="
flex
flex-col
md:flex-row

items-center
md:items-center

gap-6
md:gap-8

rounded-[32px]

border border-amber-200

bg-gradient-to-br
from-white
via-[#fffdf8]
to-[#fff2d8]

shadow-[0_0_80px_rgba(255,210,120,.18)]
    "
  >
    {/* Ảnh */}
<div
  className="
    w-44
    sm:w-56
    md:w-[38%]

    shrink-0

    mx-auto
  "
>        
      <img
        src="/images/lighT_tamh2.JPG"
        alt="lighT"
        className="
          aspect-[3/4]
          w-full
          rounded-3xl
          object-cover
          shadow-lg
        "
      />
    </div>

    {/* Nội dung */}
<div
  className="
    flex-1

    px-5
    pb-6

    md:px-0
    md:pb-0

    text-center
    md:text-left
  "
>
      <p
        className="
          text-[11px]
          md:text-xs

          tracking-[0.4em]
          uppercase

          text-[#8b5e3c]
        "
      >
        ABOUT
      </p>

      <h2
        className="
          mt-1

          text-2xl
          md:text-5xl

          font-black

          text-[#4b1704]
        "
      >
        lighT
      </h2>

      <p
        className="
          mt-4

          text-xs
          md:text-base

          leading-7

          text-zinc-700
        "
      >
        lighT (Đỗ Minh Tân) là nghệ sĩ độc lập của SYE Holdings. Sau hành trình tại
        <b> Tân Binh Toàn Năng</b>, lighT tiếp tục theo đuổi con đường
        âm nhạc và luôn mong
        muốn lan tỏa nguồn năng lượng tích cực đến mọi người.
      </p>

    <div className="mt-6">
   <div
  className="
    flex
    flex-col
    items-center

    gap-3

    xl:flex-row
    xl:justify-start
  "
>
  <Link
    href="/videos/fancam"
  className="
flex
items-center
justify-center

gap-2

w-[82%]
max-w-[280px]

md:w-[88%]
md:max-w-[320px]

xl:w-auto
xl:max-w-none

rounded-full

border
border-[#4b1704]

bg-white

px-8
py-3

text-sm
font-semibold

text-[#4b1704]

whitespace-nowrap

transition-all
hover:bg-[#4b1704]
hover:text-white
"
  >
    <span>🎥</span>
    <span>Fancam</span>
  </Link>

  <Link
    href="/tmi/fact-check"
 className="
flex
items-center
justify-center

gap-2

w-[82%]
max-w-[280px]

md:w-[88%]
md:max-w-[320px]

xl:w-auto
xl:max-w-none

rounded-full

border
border-[#4b1704]

bg-white

px-8
py-3

text-sm
font-semibold

text-[#4b1704]

whitespace-nowrap

transition-all
hover:bg-[#4b1704]
hover:text-white
"
  >
    <span>✨</span>
    <span>lighT's FACT CHECK</span>
  </Link>

  <Link
    href="/career-journey/tv-shows"
  className="
flex
items-center
justify-center

gap-2

w-[82%]
max-w-[280px]

md:w-[88%]
md:max-w-[320px]

xl:w-auto
xl:max-w-none

rounded-full

border
border-[#4b1704]

bg-white

px-8
py-3

text-sm
font-semibold

text-[#4b1704]

whitespace-nowrap

transition-all
hover:bg-[#4b1704]
hover:text-white
"
  >
    <span>🎵</span>
    <span>Tân Binh Toàn Năng</span>
  </Link>
</div>
      </div>
{/*
      <Link
        href="/profile"
        className="
          mt-6
          inline-flex

          rounded-full

          bg-[#4b1704]

          px-6
          py-3

          text-sm
          font-semibold

          text-white

          transition

          hover:scale-105
        "
      >
        Xem hồ sơ →
      </Link>
*/}
    </div>
  </div>
</section>
</>
    );

}
