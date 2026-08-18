"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function TinieCornerPage() {
  const [opened, setOpened] = useState(false);

  return (
    <main
      className="relative min-h-screen overflow-hidden text-white"
      style={{
        backgroundImage: "url('/videos/bg.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/25" />

  <section className="mx-auto max-w-7xl px-6 pt-28 pb-24">
 <div className=" flex justify-center">
  <img
    src="/images/logo_web/logo-05.png"
    alt="lighT"
        className=" h-12 w-auto sm:h-14 md:h-15 transition duration-300 hover:scale-105"
  />
</div>

<div className=" mt-5 flex justify-center">
        <AnimatePresence mode="wait">

          {!opened ? (

            <motion.div
              key="envelope"
              initial={{ opacity: 0, scale: .85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: .85 }}
              transition={{ duration: .45 }}
              className="flex flex-col items-center"
            >

              {/* Envelope */}

              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.03,
                }}
                onClick={() => setOpened(true)}
                className="relative cursor-pointer"
              >

<div className="absolute left-1/2 top-full h-6 w-40 sm:w-48 lg:w-56" />
                <div
  className="
    relative
    h-[190px]
    w-[300px]
    sm:h-[230px]
    sm:w-[360px]
    lg:h-[270px]
    lg:w-[420px]
                    overflow-hidden
                    rounded-xl
                    border
                    border-white/20
                    bg-gradient-to-b
                    from-[#f8f5ef]
                    to-[#ece5d9]
                    
                    shadow-[0_0_60px_rgba(150,210,255,.45)]
                 
                 
                    "
                    style={{
  backgroundImage: `
    linear-gradient(to bottom,#faf7f1,#ece5d9),
    radial-gradient(rgba(255,255,255,.35) 1px,transparent 1px)
  `,
  backgroundSize: "100% 100%,18px 18px",
}}
                >

                  {/* flap */}

                  <div
  className="
    absolute
    inset-x-0
    top-0
    h-[48%]
    overflow-hidden
  "
>
  <div
    className="
      absolute
      inset-0
      bg-gradient-to-b
      from-[#fcfaf6]
      to-[#efe6d9]
      border-b
      border-white/50
    "
    style={{
      clipPath: "polygon(0 0,100% 0,50% 100%)",
    }}
  />

  {/* highlight */}
  <div
    className="absolute left-1/2 top-2 h-10 w-[2px] -translate-x-1/2 bg-white/40 blur-[1px]"
  />
</div>

                  {/* bottom */}

                  <div
  className="absolute inset-x-0 bottom-0 h-[48%]"
>
  <div
    className="absolute inset-0"
    style={{
      clipPath: "polygon(0 100%,50% 0,100% 100%)",
      background:
        "linear-gradient(to bottom,#ece4d7,#ddd2c2)",
    }}
  />

  <div
    className="absolute left-1/2 bottom-0 h-full w-px -translate-x-1/2 bg-white/30"
  />
</div>

                  {/* seal */}

                  <motion.div
                    whileHover={{
                      scale: 1.08,
                    }}
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      z-20
                      flex
                     h-12
w-12
sm:h-14
sm:w-14
lg:h-16
lg:w-16
                      -translate-x-1/2
                      -translate-y-1/2
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-sky-200/90
bg-[#9fd7ff]/60
                      backdrop-blur-xl
                      shadow-[0_0_25px_rgba(120,200,255,.8)]
                    "
                  >
                    <img
  src="/images/tinie_1.png"
  alt="Moon Seal"
  className="h-12 w-12 object-contain"
/>
                  </motion.div>

                </div>

              </motion.div>

              <p className="mt-12 text-center">
                <span className="block text-2xl font-semibold">
                  Một điều đặc biệt đang chờ bạn
                </span>

                <span className="mt-3 block text-white/60">
                  Nhấn vào phong bì để mở
                </span>
              </p>

            </motion.div>

          ) : (

            <motion.div
              key="letter"
              initial={{
                opacity: 0,
                scale: .85,
                y: 80,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: .55,
              }}
            >

              <div
                className="
                  relative
                  mx-auto
w-[94vw]
max-w-[900px]                  max-w-[92vw]
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-sky-200/40
                  shadow-[0_0_80px_rgba(140,190,255,.45)]
                "
              >

                {/* Paper */}

                <div
                  className="bg-[#fbfdff]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, rgba(90,165,255,.28) .9px, transparent .9px)",
                    backgroundSize: "36px 36px",
                  }}
                >

                  <button
                    onClick={() => setOpened(false)}
                    className="
                      absolute
                      right-6
                      top-5
                      text-3xl
                      text-slate-500
                      transition
                      hover:text-sky-600
                    "
                  >
                    ×
                  </button>

<div className="px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16 text-slate-700">
                    <p className="text-center text-xs
sm:text-base
lg:text-lg
tracking-[.2em]
sm:tracking-[.25em] text-sky-700">
                      tinie
                    </p>

                    <h1
                      className="
                        mt-10
                        text-center
                        font-serif
text-3xl
sm:text-5xl
lg:text-6xl                        italic
                        font-bold
                        text-slate-900
                      "
                    >
                      COMING SOON
                    </h1>

                    <div
                      className="
                        mx-auto
                        mt-12
                        max-w-2xl
                        space-y-8
                        text-center
                        text-xl
                        leading-10
                      "
                    >

                      <p>
                        Một góc nhỏ đặc biệt đang được chuẩn bị
                        dành riêng cho tất cả các tinie iu.
                      </p>

                      <p>
                        Trong thời gian tới sẽ có thêm nhiều nội dung,
                        hoạt động và những điều thú vị đang chờ bạn khám phá.
                      </p>

                      <p>
                        Cảm ơn bạn đã luôn đồng hành cùng lighT.
                      </p>

                    </div>

                    <div className="mt-20 flex flex-col items-center">

                      <div
                        className="
                          flex
                          h-20
                          w-20
                          items-center
                          justify-center
                          rounded-full
                          bg-sky-100
                          text-3xl
                          shadow-[0_0_25px_rgba(120,180,255,.5)]
                        "
                      >
                          <img
  src="/images/tinie_1.png"
  alt="Moon Seal"
  className="h-12 w-12 object-contain"
/>
                      </div>

                      <p className="mt-6 font-serif text-2xl italic">
                        TINcredible
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </motion.div>

          )}

        </AnimatePresence>
      </div>

      </section>
    </main>
  );
}