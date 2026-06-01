"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  return (
    <motion.div
      aria-hidden
      style={{
        scaleX,
        backgroundImage:
          "linear-gradient(90deg, #4f46e5, #06b6d4, #db2777, #f59e0b)",
      }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left"
    />
  );
}
