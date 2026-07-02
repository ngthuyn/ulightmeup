"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div
      className="relative overflow-hidden"
      style={{
        perspective: "1800px",
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={{
            opacity: 0,
            y: 18,
            scale: 0.985,
            rotateX: 2,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
          }}
          exit={{
            opacity: 0,
            y: -18,
            scale: 0.985,
            rotateX: -2,
          }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            transformStyle: "preserve-3d",
            willChange: "transform, opacity",
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}