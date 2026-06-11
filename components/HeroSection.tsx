"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Link from "next/link";
import HeroCanvas from "@/components/HeroCanvas";

const wordContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.25 } },
};

const wordVariant = {
  hidden: { opacity: 0, y: 36, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const line1 = ["We", "Scale", "Roofing"];
const line2 = ["Companies", "Across", "America"];

const corners = [
  "top-24 left-10 border-t border-l",
  "top-24 right-10 border-t border-r",
  "bottom-20 left-10 border-b border-l",
  "bottom-20 right-10 border-b border-r",
];

export default function HeroSection() {
  const prefersReduced = useReducedMotion();
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 450], [0, 250]);
  const heroOpacity = useTransform(scrollY, [0, 450], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-obsidian">
      <div className="absolute inset-0 bg-grid opacity-100" />
      <HeroCanvas />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_60%,rgba(212,175,55,0.06)_0%,transparent_70%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {corners.map((cls, i) => (
        <motion.div
          key={i}
          className={`absolute w-16 h-16 ${cls} border-gold/20`}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}

      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20"
        style={prefersReduced ? undefined : { y: heroY, opacity: heroOpacity }}
      >
        <motion.div
          className="inline-flex items-center gap-3 mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="h-px w-8 bg-gold/50" />
          <span className="font-cinzel text-xs tracking-[0.3em] text-gold uppercase">Digital Growth Agency</span>
          <span className="h-px w-8 bg-gold/50" />
        </motion.div>

        {/* Floating wrapper starts after reveal settles */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
        >
          <motion.h1
            className="font-cinzel text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-800 leading-[1.1] text-parchment mb-6"
            variants={wordContainer}
            initial="hidden"
            animate="show"
          >
            <span className="block">
              {line1.map((word, i) => (
                <motion.span key={i} variants={wordVariant} className="inline-block mr-[0.28em]">
                  {word}
                </motion.span>
              ))}
            </span>
            <span className="block">
              {line2.map((word, i) => (
                <motion.span key={i} variants={wordVariant} className="inline-block mr-[0.28em] last:mr-0">
                  {i === 0 ? (
                    <span className="bg-clip-text text-transparent bg-gold-gradient">{word}</span>
                  ) : word}
                </motion.span>
              ))}
            </span>
          </motion.h1>
        </motion.div>

        <motion.p
          className="font-cormorant text-xl sm:text-2xl text-parchment/60 italic mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 1.0 }}
        >
          Your competitors have boring websites. We build ones that make homeowners stop and call.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 1.2 }}
        >
          <Link href="/contact" className="btn-gold px-8 py-4 text-sm rounded-sm cursor-pointer w-full sm:w-auto text-center">
            See What&apos;s Possible
          </Link>
          <Link href="/results" className="btn-outline-gold px-8 py-4 text-sm rounded-sm cursor-pointer w-full sm:w-auto text-center">
            See Our Results
          </Link>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 2.0, duration: 1 }}
        >
          <span className="font-cinzel text-[10px] tracking-[0.3em] text-gold uppercase">Scroll</span>
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-gold to-transparent"
            animate={{ opacity: [0.4, 1, 0.4], scaleY: [1, 0.55, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
