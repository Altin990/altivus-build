"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/results", label: "Results" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 40));

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 border-b"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        backgroundColor: scrolled ? "rgba(10,10,10,0.92)" : "rgba(10,10,10,0)",
        backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "blur(0px)",
        borderColor: scrolled ? "rgba(212,175,55,0.12)" : "rgba(212,175,55,0)",
        boxShadow: scrolled ? "0 4px 40px rgba(0,0,0,0.5)" : "none",
        transition: "background-color 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group" aria-label="Altivus home">
          <EagleLogo />
          <span className="font-cinzel text-xl font-700 tracking-[0.2em] text-parchment group-hover:text-gold transition-colors duration-300">
            ALTIVUS
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07, ease: "easeOut" }}
            >
              <Link
                href={link.href}
                className="font-cinzel text-xs tracking-[0.15em] text-parchment/70 hover:text-gold transition-colors duration-300 uppercase"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
          >
            <Link href="/contact" className="btn-gold px-6 py-2.5 text-xs rounded-sm cursor-pointer">
              Get a Free Audit
            </Link>
          </motion.div>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-px bg-gold transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-px bg-gold transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-gold transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-stone-900 border-t border-gold/10`}
      >
        <div className="px-6 py-6 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-cinzel text-sm tracking-[0.15em] text-parchment/70 hover:text-gold transition-colors uppercase"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="btn-gold px-6 py-3 text-xs rounded-sm text-center cursor-pointer"
          >
            Get a Free Audit
          </Link>
        </div>
      </div>
    </motion.header>
  );
}

function EagleLogo() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <polygon points="18,3 33,28 18,22 3,28" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeLinejoin="round" />
      <polygon points="18,10 27,26 18,21 9,26" fill="#D4AF37" opacity="0.2" />
      <line x1="18" y1="3" x2="18" y2="32" stroke="#D4AF37" strokeWidth="1" opacity="0.4" />
      <polygon points="18,14 24,27 18,24 12,27" fill="#D4AF37" opacity="0.6" />
    </svg>
  );
}
