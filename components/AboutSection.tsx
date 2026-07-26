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
const aboutSections = [
  {
    title: "FANCAM",
    image: "/images/lighT_DHHS.jpg",
    href: "/videos/fancam",
desc: "Những sân khấu bùng nổ và khoảnh khắc khiến người xem chỉ muốn xem đi xem lại.",
    },
      {
    title: "FACT CHECK",
    image: "/images/lighT_.jpg",
    href: "/tmi/fact-check",
desc: "Bật mí những điều thú vị về lighT mà có thể bạn chưa từng biết."  
  },
  {
    title: "TÂN BINH TOÀN NĂNG",
    image: "/images/lighT_ycc_exposure.jpg",
    href: "/career-journey/tv-shows",
  desc: "Theo dấu hành trình của lighT tại Tân Binh Toàn Năng qua từng vòng thi, từng cột mốc và những khoảnh khắc đáng nhớ.",
  
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
className="
  relative
  z-20
  w-full
  lg:w-[50%]
  overflow-hidden
  shadow-[0_30px_80px_rgba(0,0,0,.18)]
">               
<div className="relative flex justify-center">
  <img
  src="/images/lighT_home.jpg"
  className="
    mx-auto
    w-full
    h-auto
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

<div className="absolute bottom-20 left-8 right-8">                 
                    <motion.p
  key={quoteIndex}
  initial={{ opacity: 0, y: 12 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="max-w-lg text-sm italic leading-8 text-white"
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
-translate-y-[13%]

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
                          
                        </div>
                    </motion.div>
                 
                </div>        {/* div h-[340px] */}

            </motion.div>   {/* RIGHT */}

        </section>
{/* ================= ABOUT ================= */}

{/* ================= ABOUT ================= */}

<section className="mt-24 space-y-24">
  {aboutSections.map((item, i) => (
    <div
      key={item.title}
      className={`
        grid
        items-center
        gap-12

        lg:grid-cols-2

        ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}
      `}
    >
      {/* IMAGE */}
      <div className="mx-auto w-[82%]">
  <img
    src={item.image}
    alt={item.title}
    className="
      w-full
      aspect-[5/6]
      object-cover
      shadow-2xl
    "
  />
</div>

      {/* CONTENT */}
<div
 className="
  flex
  flex-col

  items-center
  text-center
"
>        
        <p
          className="
            text-xs
            tracking-[0.45em]
            uppercase
            text-[#8b5e3c]
          "
        >
          ABOUT
        </p>

        <h2
          className="
            mt-2
            text-4xl
            font-black
            text-[#4b1704]
          "
        >
          "{item.title}"
        </h2>

<div className="mt-5 h-px w-20 bg-[#c7a46a] mx-auto" />
 <p
  className="
    mt-6
    max-w-xl
    mx-auto
    leading-8
    text-zinc-700
  "
>
          {item.desc}
        </p>

        <Link
          href={item.href}
          className="
            mt-10
            inline-flex

            border
            border-[#4b1704]

            px-10
            py-3

            text-sm
            tracking-[0.18em]
            uppercase

            transition
            hover:bg-[#4b1704]
            hover:text-white
          "
        >
          Xem
        </Link>
      </div>
    </div>
  ))}
</section>

</>
);
}
