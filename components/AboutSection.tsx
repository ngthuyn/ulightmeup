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
    about:"Tân Binh Toàn Năng",
    title: `HÀNH TRÌNH TỚI ÁNH SÁNG lighT:
     TỪ TÂN BINH TOÀN NĂNG ĐẾN NGHỆ SĨ ĐỘC LẬP`,
    image: "/images/lighT_ycc_exposure.jpg",
    href: "/career-journey/tv-shows",
  desc: "Đỗ Minh Tân chọn cách chinh phục khán giả bằng nội lực sân khấu và niềm đam mê chân thành như thế nào? Cùng lật mở những trang ký ức đáng nhớ về Tân binh Đỗ Minh Tân từ những lần nén đau vượt qua chấn thương thể chất, vượt qua giới hạn tinh thần cho đến khoảnh khắc tỏa sáng bằng thực lực để thấy được một lighT hoàn toàn xứng đáng với niềm tin và sự đồng hành của khán giả nhé!",
  cta:"Khám phá ngay!"
}, {
  about: "Fancam",
    title: "lighT ON STAGE: TỔNG HỢP NHỮNG FANCAM ĐÁNG NHỚ QUA ỐNG KÍNH FANSITE",
    image: "/images/lighT_DHHS.jpg",
    href: "/videos/fancam",
desc: "Mỗi lần bước lên sân khấu, Tin luôn cho thấy nỗ lực mang đến những phần trình diễn chỉn chu và giàu năng lượng. Hãy cùng nhìn lại những khoảnh khắc làm chủ không gian sân khấu đầy ấn tượng của lighT trong các sự kiện vừa qua qua góc nhìn chân thực từ fansite nhé!",
cta: "Xem ngay!"    
},
      {
        about: "Too Much Information",
    title: "lighT FACT CHECK",
    image: "/images/lighT_.jpg",
    href: "/tmi/fact-check",
desc: "Cùng TINcredible lật mở lại những câu chuyện và thông tin thú vị về lighT nào! Chắc chắn sẽ có những mảnh ghép bất ngờ về Tin mà các tinie có thể chưa từng biết đến đó."  ,
cta:"Khám phá ngay!"
},
 

];
const quotes = [
  {
    text: "Em quý mn nhiều lắm, tại em biết mn phải làm những gì để cố gắng vote cho emmmm, em vui lắmmmmm",
    source: "07.2025 • IG broadcast “tinie ơi 🐵”",
  },
  {
    text: "Em biết ơn mn lắm vì đã ủng hộ em cũng như mấy bạn khác trong top 16, đối với ngkhac thì nó nhỏ nhma đối với em nó lớn lắm, rất quý lun ạ. Giờ em chỉ biết nói cảm ơn mọi người rất rất nhiều ạaaaa.",
    source: "07.2025 • IG broadcast “tinie ơi 🐵”",
  },
  {
    text: "Mới đây mà đã 5 công diễn rồi, hmmmm, cảm ơn mn đã đồng hành cùng tin, cùng với các anh em. Vẫn câu chuyện cũ thì tin không nghĩ mình sẽ nhận được sự yêu thương và quan tâm của mọi người nhiều đến như vậy, đây sẽ là động lực giúp tin đi tiếp ở con đường này, yêu thương mọi người nhiều ạ",
    source: "10.2025 • IG broadcast “tinie ơi 🐵”",
  },
   {
    text: "Cảm ơn những pj support của mn ạaaa",
    source: "12.2025 • IG broadcast “tinie ơi 🐵”",
  },
  {
    text: "Thương nhà mình lémmm, tin tưởng ở tin nhooo 🫂",
    source: "01.2026 • IG broadcast “tinie ơi 🐵”",
  },
  {
    text: "Aaaa, cảm ơn tinie nhà mình ạ 🥺🫂",
    source: "01.2026 • IG broadcast “tinie ơi 🐵”",
  },
  {
    text: "Mong rằng ở chặng hành trình này Tin vẫn sẽ tiếp tục nhận được sự ủng hộ và yêu thương từ mọi người, từ tinie",
    source: "01.2026 • IG broadcast “tinie ơi 🐵”",
  },
  {
    text: "U lighT ME UPPPPPP",
    source: "01.2026 • IG broadcast “tinie ơi 🐵”",
  },
   {
    text: "tinie ráng chờ tí xíu nữa thoiiii, sắp nổ ròi 💣💥",
    source: "01.2026 • IG broadcast “tinie ơi 🐵”",
  },
 {
    text: "Sắp đc gặp mn rồiiiii",
    source: "04.2026 • IG broadcast “tinie ơi 🐵”",
  },
  {
    text: "Nay có led nũa dui qớ, thương nhà mình nhắm nhắm 🥺🥹",
    source: "04.2026 • IG broadcast “tinie ơi 🐵”",
  },
  {
    text: "Nói chung hôm ni hạnh phúc lắm, vì mình biết mình còn đc yêu thương 🫂",
    source: "04.2026 • IG broadcast “tinie ơi 🐵”",
  },
  {
    text: "Và cảm ơn mn hôm nay đã đến ủng hộ cho Tin cũng như anh 2 ạaaaa 🫶🫶🫶 luv u mn",
    source: "4.2026 • IG broadcast “tinie ơi 🐵”",
  },
  
  
  
 
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

  {/* gradient */}
  <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-black via-black/45 to-transparent" />

 {/* quote */}
<div className="absolute bottom-16 left-6 right-6 md:bottom-20 md:left-8 md:right-8 z-20">
  <motion.p
    key={quoteIndex}
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="
      text-[11px]
      md:text-[14px]
      lg:text-[16px]
      italic
      leading-[1.55]
      text-white
    "
    style={{
      textShadow:
        "0 2px 10px rgba(0,0,0,.8),0 0 24px rgba(0,0,0,.45)",
    }}
  >
    "{quotes[quoteIndex].text}"
  </motion.p>

  <motion.p
    key={`source-${quoteIndex}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2 }}
    className="
      mt-3
      text-[8px]
      md:text-[10px]
      lg:text-[11px]
      tracking-[0.18em]
      md:tracking-[0.22em]
      text-white/70
    "
  >
    {quotes[quoteIndex].source}
  </motion.p>
</div>
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
            text-2sm
            tracking-[0.45em]
            uppercase
            text-[#8b5e3c]
          "
        >
          {item.about}
        </p>

        <h2
          className="
            mt-2
            text-xl
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
            text-black
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
          {item.cta}
        </Link>
      </div>
    </div>
  ))}
</section>

</>
);
}
