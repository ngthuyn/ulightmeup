"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

import Project100 from "./Project100";
import ShowItAll from "./ShowItAll";

type Props = {
  tab: "project" | "show";
};

export default function TVShowContent({ tab }: Props) {
  const router = useRouter();

  const changeTab = (value: "project" | "show") => {
    router.replace(`/career-journey/tv-shows?tab=${value}`, {
      scroll: false,
    });
  };
  return (
    <main
      className="min-h-screen text-white"
      style={{
        backgroundImage: "url('/videos/bg.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section className="mx-auto max-w-7xl px-6 pt-28 pb-24">

        {/* Hero */}


        <h1 className="mt-3 text-center text-2xl font-black">
          TÂN BINH TOÀN NĂNG
        </h1>
{/*
        <p className="mx-auto mt-8 max-w-4xl text-center text-lg leading-8 text-white/75">
          Hành trình từ một thí sinh tiềm năng đến nghệ sĩ trẻ đầy triển vọng
          của
          <span className="text-sky-300"> lighT</span>.
        </p>
*/}
        {/* Tabs */}

        <div className="mt-14 flex justify-center">

          <div
            className="
              flex
              rounded-full
              border
              border-white/10
              bg-white/[0.05]
              p-1
              backdrop-blur-xl
            "
          >

            <button
onClick={() => changeTab("project")}              
              className={`
                relative
                rounded-full
                px-8
                py-3
                text-sm
                font-semibold
                transition-all
                duration-300
whitespace-nowrap
                ${
                  tab === "project"
                    ? "bg-sky-300 text-slate-900"
                    : "text-white/70 hover:text-white"
                }
              `}
            >
              Project 100%
            </button>

            <button
onClick={() => changeTab("show")}              
              className={`
                relative
                rounded-full
                px-8
                py-3
                text-sm
                font-semibold
                transition-all
                duration-300
whitespace-nowrap
                ${
                  tab === "show"
                    ? "bg-sky-300 text-slate-900"
                    : "text-white/70 hover:text-white"
                }
              `}
            >
              Show It All 2025
            </button>

          </div>

        </div>
  
        {/* Content */}

        <div className="mt-20">

          <AnimatePresence mode="wait">

            {tab === "project" ? (

              <motion.div
                key="project"
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                }}
                transition={{
                  duration: .45,
                }}
              >

                <Project100 />

              </motion.div>

            ) : (

              <motion.div
                key="show"
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                }}
                transition={{
                  duration: .45,
                }}
              >

                <ShowItAll />

              </motion.div>

            )}

          </AnimatePresence>

        </div>

        {/* Continue Exploring 

        <section className="mt-36">

          <p className="text-center uppercase tracking-[0.35em] text-sky-300">
            Continue Exploring
          </p>

          <h2 className="mt-4 text-center text-4xl font-black">
            More from Tân Binh Toàn Năng
          </h2>

          <div
            className="
              mt-16
              grid
              gap-10
              md:grid-cols-2
              xl:grid-cols-3
            "
          >
                        <a
              href="/tv-show/highlights"
              className="
                group
                block
              "
            >

              <div
                className="
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-white/10
                  bg-white/[0.04]
                  backdrop-blur-xl
                "
              >

                <img
                  src="/images/tbtn/highlights.jpg"
                  alt=""
                  className="
                    h-[260px]
                    w-full
                    object-cover
                    transition
                    duration-500
                    group-hover:scale-105
                  "
                />

              </div>

              <h3
                className="
                  mt-5
                  text-center
                  text-xl
                  font-bold
                  transition
                  group-hover:text-sky-300
                "
              >
                TBTN Highlights
              </h3>

            </a>
                        <a
              href="/tv-show/behind-the-scenes"
              className="
                group
                block
              "
            >

              <div
                className="
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-white/10
                  bg-white/[0.04]
                  backdrop-blur-xl
                "
              >

                <img
                  src="/images/tbtn/behind.jpg"
                  alt=""
                  className="
                    h-[260px]
                    w-full
                    object-cover
                    transition
                    duration-500
                    group-hover:scale-105
                  "
                />

              </div>

              <h3
                className="
                  mt-5
                  text-center
                  text-xl
                  font-bold
                  transition
                  group-hover:text-sky-300
                "
              >
                TBTN Behind the Scenes
              </h3>

            </a>
                        <a
              href="/tv-show/focus-cam"
              className="
                group
                block
              "
            >
              <div
                className="
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-white/10
                  bg-white/[0.04]
                  backdrop-blur-xl
                "
              >
                <img
                  src="/images/tbtn/focuscam.jpg"
                  alt=""
                  className="
                    h-[260px]
                    w-full
                    object-cover
                    transition
                    duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              <h3
                className="
                  mt-5
                  text-center
                  text-xl
                  font-bold
                  transition
                  group-hover:text-sky-300
                "
              >
                Focus Cam & 100 ngày thăng cấp
              </h3>
            </a>

          </div>

        </section>
*/}
      </section>

    </main>
  );
}