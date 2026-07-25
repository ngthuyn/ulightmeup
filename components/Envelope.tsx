
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Envelope() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#08111f]">
      <motion.div
        animate={{ opacity:[0.2,0.35,0.2], scale:[1,1.08,1] }}
        transition={{ duration:5, repeat:Infinity }}
        className="absolute h-[520px] w-[520px] rounded-full bg-sky-400/10 blur-[120px]"
      />

      <div className="relative h-[380px] w-[520px]">

        <motion.div
          animate={{ y: opened ? -150 : 70, scale: opened ? 1.1 : 1 }}
          transition={{ duration:0.8 }}
          className="absolute left-1/2 top-0 z-20 h-[250px] w-[380px] -translate-x-1/2 rounded-2xl border border-sky-100 bg-white shadow-2xl"
        >
          <div className="flex h-full items-center justify-center">
            <AnimatePresence mode="wait">
              {opened ? (
                <motion.h1
                  key="soon"
                  initial={{opacity:0,scale:.8}}
                  animate={{opacity:1,scale:1}}
                  className="text-4xl font-bold tracking-[.25em] text-sky-700"
                >
                  COMING SOON
                </motion.h1>
              ) : (
                <div className="text-center">
                  <p className="text-xs uppercase tracking-[.4em] text-sky-700">Tinie Corner</p>
                  <p className="mt-8 italic text-slate-400">A letter for Tinies</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.svg
          animate={{ rotateX: opened ? -180 : 0 }}
          transition={{ duration:0.8 }}
          style={{ transformOrigin:"50% 0%" }}
          viewBox="0 0 520 180"
          className="absolute left-0 top-0 z-30"
        >
          <polygon points="40,20 260,170 480,20" fill="#f8f5ef" stroke="#e4dbce" strokeWidth="2"/>
        </motion.svg>

        <svg viewBox="0 0 520 240" className="absolute bottom-0 left-0 z-40">
          <rect x="35" y="20" width="450" height="185" rx="24" fill="#F5EEDF" stroke="#E6DDD0" strokeWidth="2"/>
          <polygon points="35,205 260,115 35,20" fill="#EEE4D6"/>
          <polygon points="485,205 260,115 485,20" fill="#ECE2D4"/>
          <polygon points="35,205 260,115 485,205" fill="#E7DCCF"/>
        </svg>

        <motion.button
          disabled={opened}
          onClick={() => setOpened(true)}
          whileHover={{scale:1.08}}
          whileTap={{scale:.95}}
          className="absolute left-1/2 top-[165px] z-50 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-sky-300 shadow-xl"
        >
          ⭐
        </motion.button>

      </div>
    </div>
  );
}
