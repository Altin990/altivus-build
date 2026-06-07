"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    quote:
      "Before Altivus, we were getting maybe 3–4 leads a week from the web. Now we're fielding 20+ qualified estimates every month. Our close rate is the same — we're just seeing far more people. The ROI is undeniable.",
    name: "Marcus Hendley",
    title: "Owner, Hendley Roofing — Dallas, TX",
  },
  {
    quote:
      "We tried two other agencies before. Both promised results, neither delivered. Altivus built us a website that actually converts, got us ranking #1 in our city, and our Google Ads finally make money. I wish we'd found them sooner.",
    name: "Carla Simmons",
    title: "CEO, Summit Roof Works — Phoenix, AZ",
  },
];

const variants = {
  enter: (dir: number) => ({ x: dir * 56, opacity: 0, filter: "blur(4px)" }),
  center: { x: 0, opacity: 1, filter: "blur(0px)" },
  exit: (dir: number) => ({ x: -dir * 56, opacity: 0, filter: "blur(4px)" }),
};

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const navigate = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  return (
    <section className="py-28 bg-obsidian relative overflow-hidden">
      <div className="absolute inset-0 bg-geo opacity-60" />
      <div className="relative max-w-4xl mx-auto px-6 lg:px-10">
        <ScrollReveal className="text-center mb-16">
          <span className="font-cinzel text-xs tracking-[0.3em] text-gold uppercase">Client Stories</span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl text-parchment mt-4">What Our Clients Say</h2>
          <div className="gold-divider max-w-xs mx-auto mt-6" />
        </ScrollReveal>

        <div className="relative overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="bg-stone-900 rounded-sm p-10 md:p-14 relative border border-gold/15"
            >
              <div className="absolute top-6 right-8 font-cinzel text-6xl text-gold/15 leading-none select-none" aria-hidden="true">
                &ldquo;
              </div>
              <div className="gold-divider w-12 mb-8" />
              <blockquote className="font-cormorant text-xl md:text-2xl text-parchment/80 leading-relaxed italic mb-8">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>
              <div>
                <div className="font-cinzel text-sm text-gold tracking-wide">{testimonials[current].name}</div>
                <div className="font-cormorant text-parchment/40 text-sm mt-1">{testimonials[current].title}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dot navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => navigate(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className="cursor-pointer"
              >
                <motion.div
                  animate={{
                    width: i === current ? 24 : 8,
                    backgroundColor: i === current ? "#D4AF37" : "rgba(212,175,55,0.3)",
                  }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="h-1 rounded-full"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
