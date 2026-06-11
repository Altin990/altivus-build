"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  initialScale?: number; // 0.95 for cards (scale up), 1.1 for large blocks (zoom out)
}

export default function ScrollReveal({ children, className = "", delay = 0, initialScale }: Props) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  // Media/large blocks use scale >1 (zoom out) — no y slide, just scale+fade
  const yInitial = initialScale !== undefined && initialScale > 1 ? 0 : 100;

  const initial = {
    opacity: 0,
    y: yInitial,
    ...(initialScale !== undefined && { scale: initialScale }),
  };

  const animate = {
    opacity: 1,
    y: 0,
    ...(initialScale !== undefined && { scale: 1 }),
  };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98], delay: delay / 1000 }}
    >
      {children}
    </motion.div>
  );
}
