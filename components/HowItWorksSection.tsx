"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Free Audit",
    description:
      "We audit your current site and show you exactly why it's losing you jobs — and what a world-class roofing website looks like. Then we analyze your SEO, ads, and local rankings too.",
  },
  {
    number: "02",
    title: "Custom Strategy",
    description:
      "We build a tailored 90-day growth roadmap specific to your market, your competitors, and your business goals. No cookie-cutter plans.",
  },
  {
    number: "03",
    title: "Execution & Growth",
    description:
      "We handle everything. You focus on roofing. Monthly reporting keeps you informed as your leads, rankings, and revenue climb.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-28 bg-stone-900 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <ScrollReveal className="text-center mb-16">
          <span className="font-cinzel text-xs tracking-[0.3em] text-gold uppercase">The Process</span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl text-parchment mt-4">How We Work</h2>
          <div className="gold-divider max-w-xs mx-auto mt-6" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Animated connecting line */}
          <motion.div
            className="hidden md:block absolute top-[3.5rem] left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px"
            style={{
              background: "linear-gradient(to right, rgba(212,175,55,0.2), rgba(212,175,55,0.5), rgba(212,175,55,0.2))",
              transformOrigin: "left",
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          />

          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 200}>
              <div className="text-center">
                <motion.div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-sm border border-gold/30 bg-obsidian mb-6 relative z-10 mx-auto"
                  whileHover={{
                    borderColor: "rgba(212,175,55,0.7)",
                    boxShadow: "0 0 24px rgba(212,175,55,0.25)",
                    scale: 1.08,
                  }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <span className="font-cinzel text-gold text-sm">{step.number}</span>
                </motion.div>
                <h3 className="font-cinzel text-xl text-parchment mb-4">{step.title}</h3>
                <p className="font-cormorant text-parchment/55 text-base leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  );
}
