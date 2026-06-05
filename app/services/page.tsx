import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Website Design & Development",
    tagline: "Your digital storefront deserves to be exceptional.",
    description: "We design and build high-converting roofing websites from scratch. Every site is mobile-first, lightning-fast, and engineered to turn visitors into booked estimates. No page builders. No templates. Pure custom craft.",
    features: [
      "Custom design — never templated",
      "Core Web Vitals optimized (90+ PageSpeed)",
      "Conversion-focused layout and copy",
      "Local landing pages for each service area",
      "Estimate request forms with CRM integration",
      "Ongoing maintenance and hosting included",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Local SEO",
    tagline: "Rank #1 where it matters — your city.",
    description: "We put your roofing company at the top of Google Maps and organic search for every city and neighborhood you serve. Our SEO is built for roofing — not generic tactics recycled from other industries.",
    features: [
      "Google Business Profile optimization",
      "Local citation building and cleanup",
      "Location-specific service pages",
      "Review generation strategy",
      "Competitor gap analysis",
      "Monthly ranking reports",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Google & Meta Ads",
    tagline: "Spend less. Book more. Know your numbers.",
    description: "We run precision-targeted paid campaigns on Google Search, Google LSA, and Meta (Facebook/Instagram) to generate booked estimates on demand. Every campaign is tracked to the dollar.",
    features: [
      "Google Search Ads (intent-based targeting)",
      "Local Services Ads (Google Guaranteed)",
      "Meta retargeting and awareness campaigns",
      "Creative and ad copy included",
      "Full conversion tracking setup",
      "Weekly optimization and reporting",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
  },
];

const addOns = [
  { title: "Review Management", desc: "Automated review requests and reputation monitoring across Google, Yelp, and BBB." },
  { title: "Video Production", desc: "Professional drone footage and testimonial videos that build trust before first contact." },
  { title: "CRM Setup & Automation", desc: "Lead follow-up sequences, appointment reminders, and pipeline automation." },
  { title: "Content Marketing", desc: "Blog posts and guides targeting storm season searches and roofing decision-stage queries." },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-28 bg-obsidian overflow-hidden">
          <div className="absolute inset-0 bg-grid" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-gold/50" />
              <span className="font-cinzel text-xs tracking-[0.3em] text-gold uppercase">What We Offer</span>
              <span className="h-px w-8 bg-gold/50" />
            </div>
            <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl text-parchment leading-tight mb-6">
              Every Service We Offer<br />
              <span className="text-gold">Is Built for Roofing</span>
            </h1>
            <p className="font-cormorant text-xl text-parchment/60 italic leading-relaxed max-w-2xl mx-auto">
              We don&apos;t offer 40 services and hope one sticks. We&apos;ve mastered the three channels that generate the most revenue for roofing companies — and we execute them at the highest level.
            </p>
          </div>
        </section>

        {/* Core Services */}
        <section className="py-24 bg-stone-900 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
          <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-8">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 100}>
                <div className="card-hover bg-obsidian rounded-sm p-10 md:p-12 relative overflow-hidden group cursor-default">
                  <div className="absolute top-0 right-0 font-cinzel text-[8rem] text-gold/4 leading-none select-none -translate-y-4 translate-x-4">
                    {s.number}
                  </div>
                  <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-sm bg-stone-800 border border-gold/15 group-hover:border-gold/30 transition-colors duration-300">
                          {s.icon}
                        </div>
                        <span className="font-cinzel text-xs tracking-[0.2em] text-gold/50 uppercase">{s.number}</span>
                      </div>
                      <h2 className="font-cinzel text-2xl sm:text-3xl text-parchment mb-3 leading-tight">{s.title}</h2>
                      <p className="font-cormorant text-gold/70 text-lg italic mb-5">{s.tagline}</p>
                      <p className="font-cormorant text-parchment/55 text-base leading-relaxed">{s.description}</p>
                    </div>
                    <div>
                      <div className="font-cinzel text-xs tracking-[0.2em] text-gold uppercase mb-5">What&apos;s Included</div>
                      <ul className="space-y-3">
                        {s.features.map((f) => (
                          <li key={f} className="flex items-start gap-3">
                            <span className="text-gold mt-0.5 flex-shrink-0" aria-hidden="true">
                              <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                                <path d="M8 0L9.8 5.7H16L11.1 9.2L12.9 15L8 11.5L3.1 15L4.9 9.2L0 5.7H6.2L8 0Z" />
                              </svg>
                            </span>
                            <span className="font-cormorant text-parchment/65 text-base">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        </section>

        {/* Add-ons */}
        <section className="py-24 bg-obsidian relative overflow-hidden">
          <div className="absolute inset-0 bg-geo opacity-50" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
            <ScrollReveal className="text-center mb-14">
              <span className="font-cinzel text-xs tracking-[0.3em] text-gold uppercase">Additional Services</span>
              <h2 className="font-cinzel text-3xl sm:text-4xl text-parchment mt-4">Complement Your Growth</h2>
              <div className="gold-divider max-w-xs mx-auto mt-6" />
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((a, i) => (
                <ScrollReveal key={a.title} delay={i * 100}>
                  <div className="card-hover bg-stone-900 rounded-sm p-6 h-full cursor-default">
                    <div className="gold-divider w-8 mb-5" />
                    <h3 className="font-cinzel text-sm text-parchment mb-3">{a.title}</h3>
                    <p className="font-cormorant text-parchment/50 text-sm leading-relaxed">{a.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-stone-900 text-center relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
          <ScrollReveal>
            <h2 className="font-cinzel text-3xl text-parchment mb-4">Not Sure Which Services You Need?</h2>
            <p className="font-cormorant text-parchment/50 text-xl italic mb-8 max-w-lg mx-auto">
              Book a free audit. We&apos;ll tell you exactly where your biggest growth opportunities are.
            </p>
            <Link href="/contact" className="btn-gold px-10 py-4 text-sm rounded-sm inline-block cursor-pointer">
              Get a Free Audit
            </Link>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
