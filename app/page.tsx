import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-obsidian">
      <div className="absolute inset-0 bg-grid opacity-100" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_60%,rgba(212,175,55,0.06)_0%,transparent_70%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute top-24 left-10 w-16 h-16 border-t border-l border-gold/20" />
      <div className="absolute top-24 right-10 w-16 h-16 border-t border-r border-gold/20" />
      <div className="absolute bottom-20 left-10 w-16 h-16 border-b border-l border-gold/20" />
      <div className="absolute bottom-20 right-10 w-16 h-16 border-b border-r border-gold/20" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
        <div className="inline-flex items-center gap-3 mb-8">
          <span className="h-px w-8 bg-gold/50" />
          <span className="font-cinzel text-xs tracking-[0.3em] text-gold uppercase">Digital Growth Agency</span>
          <span className="h-px w-8 bg-gold/50" />
        </div>

        <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-800 leading-[1.1] text-parchment mb-6">
          We Scale Roofing{" "}
          <span className="bg-clip-text text-transparent bg-gold-gradient">Companies</span>
          <br className="hidden sm:block" />
          Across America
        </h1>

        <p className="font-cormorant text-xl sm:text-2xl text-parchment/60 italic mb-10 max-w-2xl mx-auto leading-relaxed">
          More leads. More booked jobs. Predictable growth.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="btn-gold px-8 py-4 text-sm rounded-sm cursor-pointer w-full sm:w-auto text-center">
            Get a Free Audit
          </Link>
          <Link href="/results" className="btn-outline-gold px-8 py-4 text-sm rounded-sm cursor-pointer w-full sm:w-auto text-center">
            See Our Results
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="font-cinzel text-[10px] tracking-[0.3em] text-gold uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-gold to-transparent" />
        </div>
      </div>
    </section>
  );
}

// ─── Social Proof Bar ─────────────────────────────────────────────────────────

const logoNames = ["Peak Roofing Co.", "Summit Exteriors", "Apex Roof Pros", "Crest Contracting", "Ridge Masters", "Skyline Roofing"];

function SocialProofBar() {
  return (
    <section className="border-y border-gold/10 bg-stone-900 py-10">
      <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
        <p className="font-cinzel text-xs tracking-[0.25em] text-parchment/40 uppercase">
          Trusted by roofing companies across the United States
        </p>
      </div>
      <div className="flex items-center gap-16 flex-wrap justify-center w-full px-6">
        {logoNames.map((name) => (
          <div key={name} className="flex items-center gap-2 opacity-25 hover:opacity-60 transition-opacity duration-300 cursor-default">
            <span className="text-gold text-lg" aria-hidden="true">◆</span>
            <span className="font-cinzel text-sm tracking-[0.1em] text-parchment uppercase">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Problem Section ──────────────────────────────────────────────────────────

const problems = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>,
    title: "Your Phone Isn't Ringing",
    body: "While you're on the roof working, your competitors are running ads, ranking on Google, and booking the jobs you deserve. Every day without a system costs you thousands.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>,
    title: "Leads Are Unpredictable",
    body: "You're stuck in feast-or-famine cycles — busy season overwhelms you, slow season starves you. You need consistent, qualified leads month after month, not referral luck.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" /></svg>,
    title: "Your Website Drives People Away",
    body: "A slow, outdated, or generic website signals to homeowners that you're not the premium choice. First impressions close deals before you ever speak to a prospect.",
  },
];

function ProblemSection() {
  return (
    <section className="py-28 bg-obsidian relative overflow-hidden">
      <div className="absolute inset-0 bg-geo opacity-100" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <ScrollReveal className="text-center mb-16">
          <span className="font-cinzel text-xs tracking-[0.3em] text-gold uppercase">The Problem</span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl text-parchment mt-4 leading-tight">
            Your Competitors Are<br />
            <span className="text-gold">Stealing Your Leads</span>
          </h2>
          <div className="gold-divider max-w-xs mx-auto mt-6" />
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 150}>
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

// ─── Services Section ─────────────────────────────────────────────────────────

const services = [
  {
    title: "Website Design",
    description: "High-converting, mobile-first roofing websites built to impress homeowners and dominate local search. No templates. Every site is crafted to position you as the premium choice in your market.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" /></svg>,
  },
  {
    title: "Local SEO",
    description: "Own the Google Maps pack and organic results in your city. Our roofing-specific SEO strategy puts you in front of homeowners actively searching for your services right now.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>,
  },
  {
    title: "Google & Meta Ads",
    description: "Precision-targeted paid campaigns that generate booked estimates, not just clicks. We manage your entire ad ecosystem — creative, copy, targeting, and optimization — for maximum ROI.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" /></svg>,
  },
];

function ServicesSection() {
  return (
    <section className="py-28 bg-stone-900 relative" id="services">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <ScrollReveal className="text-center mb-16">
          <span className="font-cinzel text-xs tracking-[0.3em] text-gold uppercase">What We Do</span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl text-parchment mt-4 leading-tight">
            Services Built for<br />
            <span className="text-gold">Roofing Growth</span>
          </h2>
          <div className="gold-divider max-w-xs mx-auto mt-6" />
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 150}>
              <div className="card-hover bg-obsidian rounded-sm p-8 h-full relative overflow-hidden group cursor-default">
                <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-gold/15 group-hover:border-gold/40 transition-colors duration-300" />
                <div className="mb-6 p-3 rounded-sm bg-stone-800 inline-block border border-gold/15 group-hover:border-gold/30 transition-colors duration-300">
                  {s.icon}
                </div>
                <h3 className="font-cinzel text-xl text-parchment mb-4">{s.title}</h3>
                <p className="font-cormorant text-parchment/55 text-base leading-relaxed">{s.description}</p>
                <div className="mt-6 flex items-center gap-2 text-gold text-sm font-cinzel tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn More</span>
                  <span aria-hidden="true">→</span>
                </div>
              </div>
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

// ─── Results ──────────────────────────────────────────────────────────────────

const stats = [
  { value: "+320%", label: "Organic Traffic Growth", sub: "Average across roofing clients" },
  { value: "4.8×", label: "Return on Ad Spend", sub: "Google & Meta campaigns" },
  { value: "50+", label: "Roofing Clients Served", sub: "Across 28 US states" },
];

function ResultsSection() {
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
              <div className="card-hover rounded-sm p-10 text-center relative overflow-hidden group cursor-default bg-stone-900">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.04)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="font-cinzel text-5xl md:text-6xl text-gold mb-3 relative">{s.value}</div>
                <div className="font-cinzel text-sm tracking-[0.1em] text-parchment uppercase mb-2">{s.label}</div>
                <div className="font-cormorant text-parchment/40 text-sm italic">{s.sub}</div>
              </div>
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

// ─── How It Works ─────────────────────────────────────────────────────────────

const steps = [
  { number: "01", title: "Free Audit", description: "We analyze your current digital presence — website, SEO, ads, local rankings — and identify exactly where you're losing revenue to competitors." },
  { number: "02", title: "Custom Strategy", description: "We build a tailored 90-day growth roadmap specific to your market, your competitors, and your business goals. No cookie-cutter plans." },
  { number: "03", title: "Execution & Growth", description: "We handle everything. You focus on roofing. Monthly reporting keeps you informed as your leads, rankings, and revenue climb." },
];

function HowItWorks() {
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
          <div className="hidden md:block absolute top-[3.5rem] left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-gradient-to-r from-gold/20 via-gold/40 to-gold/20" />
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 150}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-sm border border-gold/30 bg-obsidian mb-6 relative z-10 mx-auto">
                  <span className="font-cinzel text-gold text-sm">{step.number}</span>
                </div>
                <h3 className="font-cinzel text-xl text-parchment mb-4">{step.title}</h3>
                <p className="font-cormorant text-parchment/55 text-base leading-relaxed max-w-xs mx-auto">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

const testimonials = [
  {
    quote: "Before Altivus, we were getting maybe 3–4 leads a week from the web. Now we're fielding 20+ qualified estimates every month. Our close rate is the same — we're just seeing far more people. The ROI is undeniable.",
    name: "Marcus Hendley",
    title: "Owner, Hendley Roofing — Dallas, TX",
  },
  {
    quote: "We tried two other agencies before. Both promised results, neither delivered. Altivus built us a website that actually converts, got us ranking #1 in our city, and our Google Ads finally make money. I wish we'd found them sooner.",
    name: "Carla Simmons",
    title: "CEO, Summit Roof Works — Phoenix, AZ",
  },
];

function Testimonials() {
  return (
    <section className="py-28 bg-obsidian relative overflow-hidden">
      <div className="absolute inset-0 bg-geo opacity-60" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <ScrollReveal className="text-center mb-16">
          <span className="font-cinzel text-xs tracking-[0.3em] text-gold uppercase">Client Stories</span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl text-parchment mt-4">What Our Clients Say</h2>
          <div className="gold-divider max-w-xs mx-auto mt-6" />
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 150}>
              <div className="card-hover bg-stone-900 rounded-sm p-10 relative cursor-default">
                <div className="absolute top-6 right-8 font-cinzel text-6xl text-gold/15 leading-none select-none" aria-hidden="true">&ldquo;</div>
                <div className="gold-divider w-12 mb-8" />
                <blockquote className="font-cormorant text-xl text-parchment/80 leading-relaxed italic mb-8">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div>
                  <div className="font-cinzel text-sm text-gold tracking-wide">{t.name}</div>
                  <div className="font-cormorant text-parchment/40 text-sm mt-1">{t.title}</div>
                </div>
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
        <ScrollReveal>
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
        <Hero />
        <SocialProofBar />
        <ProblemSection />
        <ServicesSection />
        <ResultsSection />
        <HowItWorks />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
