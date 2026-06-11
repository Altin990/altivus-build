"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  initialScale?: number; // <1 for cards (0.9), >1 for media zoom-out (1.2)
  initialY?: number;     // override default y (150) — cards use 80
  clipReveal?: boolean;  // clip-path wipe for section titles
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  initialScale,
  initialY,
  clipReveal = false,
}: Props) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  // Clip-path title reveal: wipes up from bottom, 0.8s
  if (clipReveal) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
        whileInView={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98], delay: delay / 1000 }}
      >
        {children}
      </motion.div>
    );
  }

  const isMediaScale = initialScale !== undefined && initialScale > 1;
  const yInitial = isMediaScale ? 0 : (initialY ?? 150);

  const initial = {
    opacity: 0,
    y: yInitial,
    ...(initialScale !== undefined && { scale: initialScale }),
    // blur only on slide-up variants (not media zoom-out)
    ...(!isMediaScale && { filter: "blur(8px)" }),
  };

  const animate = {
    opacity: 1,
    y: 0,
    ...(initialScale !== undefined && { scale: 1 }),
    ...(!isMediaScale && { filter: "blur(0px)" }),
  };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98], delay: delay / 1000 }}
    >
      {children}
    </motion.div>
  );
}
