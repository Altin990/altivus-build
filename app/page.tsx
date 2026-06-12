import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";

// ─── Social Proof Bar ─────────────────────────────────────────────────────────

const logoNames = [
  "Peak Roofing Co.",
  "Summit Exteriors",
  "Apex Roof Pros",
  "Crest Contracting",
  "Ridge Masters",
  "Skyline Roofing",
  "Ironclad Roofing",
  "Blue Sky Exteriors",
  "Premier Roof Works",
  "Titan Roofing Co.",
  "Elite Roofing Group",
  "Coastal Roof Pros",
  "American Roofing Co.",
  "Pinnacle Exteriors",
  "Patriot Roofing",
  "Shield Roofing LLC",
];

function LogoItem({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2.5 opacity-30 hover:opacity-70 transition-opacity duration-300 cursor-default mx-10 shrink-0">
      <span className="text-gold text-base" aria-hidden="true">◆</span>
      <span className="font-cinzel text-sm tracking-[0.12em] text-parchment uppercase whitespace-nowrap">{name}</span>
    </div>
  );
}

function SocialProofBar() {
  return (
    <section className="border-y border-gold/10 bg-stone-900 py-10">
      <div className="max-w-7xl mx-auto px-6 mb-7 text-center">
        <p className="font-cinzel text-xs tracking-[0.25em] text-parchment/40 uppercase">
          Trusted by roofing companies across the United States
        </p>
      </div>
      {/* overflow-hidden on this div prevents horizontal marquee overflow */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-stone-900 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-stone-900 to-transparent" />
        {/* Marquee: two identical copies side by side = seamless -50% loop */}
        <div className="flex animate-marquee">
          <div className="flex items-center" aria-hidden="false">
            {logoNames.map((name) => <LogoItem key={name} name={name} />)}
          </div>
          <div className="flex items-center" aria-hidden="true">
            {logoNames.map((name) => <LogoItem key={`dup-${name}`} name={name} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Problem Section ──────────────────────────────────────────────────────────

const problems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    title: "Your Phone Isn't Ringing",
    body: "While you're on the roof working, your competitors are running ads, ranking on Google, and booking the jobs you deserve. Every day without a system costs you thousands.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: "Leads Are Unpredictable",
    body: "You're stuck in feast-or-famine cycles — busy season overwhelms you, slow season starves you. You need consistent, qualified leads month after month, not referral luck.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
      </svg>
    ),
    title: "Your Website Drives People Away",
    body: "A slow, outdated, or generic website signals to homeowners that you're not the premium choice. First impressions close deals before you ever speak to a prospect.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
      </svg>
    ),
    title: "Your Website Looks Like Everyone Else's",
    body: "Generic, template-looking sites signal amateur. Homeowners choose the company that looks most trustworthy online. That's not you right now.",
  },
];

function ProblemSection() {
  return (
    <section className="py-28 bg-obsidian relative overflow-hidden">
      <div className="absolute inset-0 bg-geo opacity-100" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <ScrollReveal className="text-center mb-16" clipReveal>
          <span className="font-cinzel text-xs tracking-[0.3em] text-gold uppercase">The Problem</span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl text-parchment mt-4 leading-tight">
            Your Competitors Are<br />
            <span className="text-gold">Stealing Your Leads</span>
          </h2>
          <div className="gold-divider max-w-xs mx-auto mt-6" />
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {problems.map((p, i) => (
            <ScrollReveal key={p.title} delay={150 + i * 200} initialScale={0.9} initialY={80}>
              <div className="card-hover bg-stone-900 rounded-sm p-8 h-full cursor-default">
                <div className="text-gold mb-5">{p.icon}</div>
                <h3 className="font-cinzel text-lg text-parchment mb-4 leading-snug">{p.title}</h3>
                <p className="font-cormorant text-parchment/55 text-base leading-relaxed">{p.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────

function CTASection() {
  return (
    <section className="py-28 bg-stone-900 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="max-w-3xl mx-auto px-6 text-center">
        <ScrollReveal initialScale={1.2}>
          <div className="border border-gold/25 rounded-sm p-12 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
            <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-gold/50" />
            <div className="absolute top-0 right-0 w-10 h-10 border-t border-r border-gold/50" />
            <div className="absolute bottom-0 left-0 w-10 h-10 border-b border-l border-gold/50" />
            <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-gold/50" />
            <div className="relative">
              <span className="font-cinzel text-xs tracking-[0.3em] text-gold uppercase">Take the First Step</span>
              <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl text-parchment mt-4 mb-4 leading-tight">
                Ready to Dominate<br />
                <span className="text-gold">Your Market?</span>
              </h2>
              <p className="font-cormorant text-parchment/60 text-xl italic mb-10 max-w-lg mx-auto leading-relaxed">
                Book a no-pressure 30-minute strategy call. We&apos;ll show you exactly how we&apos;d scale your roofing business.
              </p>
              <Link href="/contact" className="btn-gold px-10 py-4 text-sm rounded-sm inline-block cursor-pointer">
                Book a Free Call
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SocialProofBar />
        <ProblemSection />
        <ServicesSection />
        <StatsSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
