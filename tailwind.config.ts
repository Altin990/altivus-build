import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#0A0A0A",
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E8CC6A",
          dark: "#B8962E",
          muted: "rgba(212,175,55,0.12)",
        },
        parchment: "#F0EAD6",
        offwhite: "#F5F4F0",
        stone: {
          900: "#111111",
          800: "#1A1A1A",
          700: "#222222",
          600: "#2A2A2A",
          500: "#333333",
        },
      },
      fontFamily: {
        cinzel: ["var(--font-cinzel)", "serif"],
        cormorant: ["var(--font-cormorant)", "serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(212,175,55,0.15)" },
          "50%": { boxShadow: "0 0 40px rgba(212,175,55,0.35)" },
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D4AF37 0%, #E8CC6A 50%, #B8962E 100%)",
        "dark-radial": "radial-gradient(ellipse at center, #1A1A1A 0%, #0A0A0A 70%)",
        "subtle-grid": "linear-gradient(rgba(212,175,55,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "60px 60px",
      },
      boxShadow: {
        gold: "0 0 30px rgba(212,175,55,0.2)",
        "gold-lg": "0 0 60px rgba(212,175,55,0.3)",
        "gold-sm": "0 0 15px rgba(212,175,55,0.15)",
        card: "0 4px 40px rgba(0,0,0,0.6)",
      },
    },
  },
  plugins: [],
};

export default config;
