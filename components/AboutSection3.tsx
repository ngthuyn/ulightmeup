"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
        title: "TBTN",
        desc: "Music, covers and special contents.",
        href: "/videos/song-cover",
        icon: "🎵",
    },
];

export default function AboutSection({
    soundEnabled,
    onEnableSound,
}: AboutSectionProps) {
    return (
       <section
className="
relative
flex
flex-col
lg:flex-row

items-stretch
lg:items-center
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
    h-[420px]
    md:h-[520px]
    lg:h-[620px]
    w-full
    object-cover
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
                    <p
                        className="max-w-lg text-lg italic leading-8 text-white"
                        style={{
                            textShadow:
                                "0 2px 10px rgba(0,0,0,.8),0 0 24px rgba(0,0,0,.45)",
                        }}
                    >
                        "Mong rằng ở chặng hành trình này Tin vẫn sẽ tiếp tục nhận được sự
                        yêu thương từ tinie."
                    </p>
                </div>
            </motion.div>

            {/* ================= RIGHT ================= */}

           <motion.div

className="
relative

w-full
lg:w-[40%]

h-[340px]
md:h-[420px]
lg:h-[620px]

lg:mt-0

overflow-visible
z-30
"
>
     <div
className="
absolute

left-1/2
-translate-x-1/2

top-0
translate-y-[-60px]

lg:left-[-170px]
lg:translate-x-0
lg:top-1/2
lg:-translate-y-1/2
lg:translate-y-[-50%]

w-[320px]
h-[320px]

md:w-[420px]
md:h-[420px]

lg:w-[520px]
lg:h-[520px]
"
>
                 
                      <motion.div
  animate={{
    rotate: soundEnabled ? 360 : 0,
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "linear",
  }}
  className="
absolute
inset-0

rounded-full

bg-gradient-to-br
from-zinc-200
via-white
to-zinc-300

shadow-2xl
"
>
                    
                        <div
                            className="
    absolute
    left-1/2
    top-1/2

    h-16
    w-16

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
inset-0

flex
items-center
justify-center

pointer-events-none
"
                        >
<h2
className="
text-5xl
md:text-6xl
font-black
text-[#4b1704]
"

                            >
                                lighT
                            </h2>

                        </div>
                    </motion.div>
                    {/* Top */}
                    <Link
                        href="/videos/fancam"
    className="
absolute
left-1/2
top-2

lg:top-[70px]

-translate-x-1/2
-translate-y-1/2
    rounded-full
    border
    border-[#4b1704]
    bg-white
    px-5
    py-2
    text-sm
    text-[#4b1704]
    hover:bg-[#4b1704]
    hover:text-white
    transition
  "
                    >
                        Fancam
                    </Link>

                    {/* Left */}
                    <Link
                        href="/tmi/fact-check"
className="
absolute

left-0
bottom-12

lg:left-[83%]
lg:top-[150px]
lg:bottom-auto

rounded-full
border
border-[#4b1704]
bg-white
px-5
py-2
text-sm
text-[#4b1704]
hover:bg-[#4b1704]
hover:text-white
transition
"
                    >
                        Fact Check
                    </Link>

                    {/* Right */}
                    <Link
                        href="/videos/song-cover"
     className="
absolute

right-0
bottom-12

lg:right-[60px]
lg:bottom-[70px]

rounded-full
    border
    border-[#4b1704]
    bg-white
    px-5
    py-2
    text-sm
    text-[#4b1704]
    hover:bg-[#4b1704]
    hover:text-white
    transition
  "
                    >
                        TBTN
                    </Link>
                </div>        {/* div h-[340px] */}

            </motion.div>   {/* RIGHT */}

        </section>
    );
}
    