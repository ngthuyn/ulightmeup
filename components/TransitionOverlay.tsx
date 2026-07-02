"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function TransitionOverlay({
  show,
}: {
  show: boolean;
}) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <img
            src="/videos/bg.gif"
            alt=""
            className="h-full w-full object-cover"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}