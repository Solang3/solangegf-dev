"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

/** Robust scroll reveal (IntersectionObserver via framer-motion) — works everywhere. */
export function Reveal({ children, className, delay = 0, y = 30 }: RevealProps) {
  const reduce = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y, clipPath: "inset(0 0 12% 0)" },
    show: {
      opacity: 1,
      y: 0,
      clipPath: "inset(0 0 0% 0)",
      transition: { type: "spring", stiffness: 130, damping: 24, delay },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-12% 0px -10% 0px" }}
    >
      {children}
    </motion.div>
  );
}

/** A hairline that draws itself in when scrolled into view. */
export function DrawLine({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      aria-hidden
      className={`h-px w-full origin-left bg-line-strong ${className}`}
      initial={{ scaleX: reduce ? 1 : 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}
