"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    title: "Website Design",
    description:
      "Cinematic, scroll-animated websites that position you as the premium roofing company in your market. Homeowners judge you in 3 seconds — we make sure they're impressed.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
  },
  {
    title: "Local SEO",
    description:
      "Own the Google Maps pack and organic results in your city. Our roofing-specific SEO strategy puts you in front of homeowners actively searching for your services right now.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: "Google & Meta Ads",
    description:
      "Precision-targeted paid campaigns that generate booked estimates, not just clicks. We manage your entire ad ecosystem — creative, copy, targeting, and optimization — for maximum ROI.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section className="py-28 bg-stone-900 relative" id="services">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <ScrollReveal className="text-center mb-16" clipReveal>
          <span className="font-cinzel text-xs tracking-[0.3em] text-gold uppercase">What We Do</span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl text-parchment mt-4 leading-tight">
            Services Built for<br />
            <span className="text-gold">Roofing Growth</span>
          </h2>
          <div className="gold-divider max-w-xs mx-auto mt-6" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={150 + i * 200} initialScale={0.9} initialY={80}>
              <motion.div
                className="bg-obsidian rounded-sm p-8 h-full relative overflow-hidden cursor-default border border-gold/15"
                whileHover={{
                  scale: 1.025,
                  borderColor: "rgba(212,175,55,0.55)",
                  boxShadow: "0 0 50px rgba(212,175,55,0.2), 0 8px 40px rgba(0,0,0,0.5)",
                  y: -4,
                }}
                transition={{ duration: 0.28, ease: "easeOut" }}
              >
                {/* Corner accent */}
                <motion.div
                  className="absolute top-0 right-0 w-12 h-12 border-t border-r border-gold/15"
                  whileHover={{ borderColor: "rgba(212,175,55,0.5)" }}
                  transition={{ duration: 0.28 }}
                />
                <div className="mb-6 p-3 rounded-sm bg-stone-800 inline-block border border-gold/15">
                  {s.icon}
                </div>
                <h3 className="font-cinzel text-xl text-parchment mb-4">{s.title}</h3>
                <p className="font-cormorant text-parchment/55 text-base leading-relaxed">{s.description}</p>
                <motion.div
                  className="mt-6 flex items-center gap-2 text-gold text-sm font-cinzel tracking-wider"
                  initial={{ opacity: 0, x: -6 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <span>Learn More</span>
                  <span aria-hidden="true">→</span>
                </motion.div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-10">
          <Link href="/services" className="btn-outline-gold px-8 py-3 text-sm rounded-sm inline-block cursor-pointer">
            View All Services
          </Link>
        </ScrollReveal>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  );
}
