"use client";

import { useRef, useEffect, useState } from "react";
import { useInView, motion } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

interface CountUpProps {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

function CountUp({ to, decimals = 0, prefix = "", suffix = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(eased * to);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, to]);

  const display = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  );
}

const stats = [
  { to: 320, prefix: "+", suffix: "%", decimals: 0, label: "Organic Traffic Growth", sub: "Average across roofing clients" },
  { to: 4.8, prefix: "", suffix: "×", decimals: 1, label: "Return on Ad Spend", sub: "Google & Meta campaigns" },
  { to: 50, prefix: "", suffix: "+", decimals: 0, label: "Roofing Clients Served", sub: "Across 28 US states" },
];

export default function StatsSection() {
  return (
    <section className="py-28 bg-obsidian relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <ScrollReveal className="text-center mb-16">
          <span className="font-cinzel text-xs tracking-[0.3em] text-gold uppercase">Proven Results</span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl text-parchment mt-4 leading-tight">
            Numbers That<br />
            <span className="text-gold">Speak for Themselves</span>
          </h2>
          <div className="gold-divider max-w-xs mx-auto mt-6" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 150}>
              <motion.div
                className="rounded-sm p-10 text-center relative overflow-hidden cursor-default bg-stone-900 border border-gold/15"
                whileHover={{
                  borderColor: "rgba(212,175,55,0.4)",
                  boxShadow: "0 0 40px rgba(212,175,55,0.12)",
                  y: -2,
                }}
                transition={{ duration: 0.28, ease: "easeOut" }}
              >
                <div className="font-cinzel text-5xl md:text-6xl text-gold mb-3">
                  <CountUp to={s.to} decimals={s.decimals} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <div className="font-cinzel text-sm tracking-[0.1em] text-parchment uppercase mb-2">{s.label}</div>
                <div className="font-cormorant text-parchment/40 text-sm italic">{s.sub}</div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-10">
          <Link href="/results" className="btn-outline-gold px-8 py-3 text-sm rounded-sm inline-block cursor-pointer">
            See Case Studies
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
