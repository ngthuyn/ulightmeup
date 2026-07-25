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

      <section className="relative z-10 flex min-h-screen items-center justify-center px-6">

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

                <div className="absolute left-1/2 top-full h-7 w-56 -translate-x-1/2 rounded-full bg-sky-400/30 blur-2xl" />

                <div
                  className="
                    relative
                    h-[270px]
                    w-[420px]
                    overflow-hidden
                    rounded-xl
                    border
                    border-white/20
                    bg-gradient-to-b
                    from-[#f8f5ef]
                    to-[#ece5d9]
                    shadow-[0_0_60px_rgba(150,210,255,.45)]
                  "
                >

                  {/* flap */}

                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      h-0
                      w-0
                      border-l-[210px]
                      border-r-[210px]
                      border-t-[130px]
                      border-l-transparent
                      border-r-transparent
                      border-t-white/90
                    "
                  />

                  {/* bottom */}

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-0
                      w-0
                      border-b-[130px]
                      border-l-[210px]
                      border-r-[210px]
                      border-b-[#e7dfd3]
                      border-l-transparent
                      border-r-transparent
                    "
                  />

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
                      h-16
                      w-16
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
  src="/images/tinie_1.PNG"
  alt="Moon Seal"
  className="h-12 w-12 object-contain"
/>
                  </motion.div>

                </div>

              </motion.div>

              <p className="mt-12 text-center">
                <span className="block text-2xl font-semibold">
                  Một lá thư đang chờ bạn
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
                  w-[900px]
                  max-w-[92vw]
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

                  <div className="px-14 py-16 text-slate-700">

                    <p className="text-center text-lg tracking-[.35em] text-sky-700 uppercase">
                      Tinie Corner
                    </p>

                    <h1
                      className="
                        mt-10
                        text-center
                        font-serif
                        text-6xl
                        italic
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
  src="/images/tinie_1.PNG"
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

      </section>
    </main>
  );
}