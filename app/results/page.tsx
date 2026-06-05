import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

const caseStudies = [
  {
    client: "Hendley Roofing",
    location: "Dallas–Fort Worth, TX",
    service: "Local SEO + Website Redesign",
    duration: "6 months",
    stats: [
      { value: "+320%", label: "Organic Traffic" },
      { value: "#1", label: "Google Maps Rank" },
      { value: "18x", label: "More Web Leads" },
    ],
    summary: "Hendley was invisible online despite 12 years in business. We built a new conversion-focused website, restructured their Google Business Profile, and launched a local SEO campaign targeting 14 DFW zip codes. Within 6 months they owned the Maps pack for every major roofing keyword in their service area.",
    tag: "Case Study",
  },
  {
    client: "Summit Roof Works",
    location: "Phoenix, AZ",
    service: "Google Ads + Local SEO",
    duration: "4 months",
    stats: [
      { value: "4.8×", label: "Return on Ad Spend" },
      { value: "-62%", label: "Cost Per Lead" },
      { value: "$280K", label: "Revenue Attributed" },
    ],
    summary: "Summit had run Google Ads in-house for 2 years with poor results. We rebuilt their campaign architecture from scratch, implemented proper conversion tracking, and added Local Services Ads. In month 4 they achieved 4.8× ROAS — their best paid period ever by a significant margin.",
    tag: "Case Study",
  },
  {
    client: "Ridge Masters Roofing",
    location: "Charlotte, NC",
    service: "Full Digital Growth Package",
    duration: "12 months",
    stats: [
      { value: "3.2×", label: "Revenue Growth YoY" },
      { value: "50+", label: "Monthly Leads" },
      { value: "11", label: "Cities Dominated" },
    ],
    summary: "Ridge Masters came to us as a single-location operation wanting to expand into two new cities. We built location-specific landing pages, expanded their SEO footprint, and ran geotargeted ad campaigns for each market. A year later they're the dominant roofing company in three Charlotte metro counties.",
    tag: "Case Study",
  },
];

const stats = [
  { value: "50+", label: "Roofing Clients", sub: "Across 28 US states" },
  { value: "$6M+", label: "Ad Spend Managed", sub: "For roofing clients" },
  { value: "4.2×", label: "Average ROAS", sub: "Across all paid campaigns" },
  { value: "+280%", label: "Avg. Traffic Growth", sub: "Within first 6 months" },
];

export default function ResultsPage() {
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
              <span className="font-cinzel text-xs tracking-[0.3em] text-gold uppercase">Proof of Work</span>
              <span className="h-px w-8 bg-gold/50" />
            </div>
            <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl text-parchment leading-tight mb-6">
              Real Results for<br />
              <span className="text-gold">Real Roofing Companies</span>
            </h1>
            <p className="font-cormorant text-xl text-parchment/60 italic leading-relaxed max-w-2xl mx-auto">
              No stock testimonials. No inflated numbers. These are real clients, real campaigns, and real growth — documented and verified.
            </p>
          </div>
        </section>

        {/* Aggregate Stats */}
        <section className="py-16 bg-stone-900 border-y border-gold/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 100} className="text-center">
                <div className="font-cinzel text-4xl text-gold mb-2">{s.value}</div>
                <div className="font-cinzel text-xs tracking-[0.1em] text-parchment uppercase mb-1">{s.label}</div>
                <div className="font-cormorant text-parchment/40 text-sm italic">{s.sub}</div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-24 bg-obsidian relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-8">
            {caseStudies.map((cs, i) => (
              <ScrollReveal key={cs.client} delay={i * 100}>
                <div className="card-hover bg-stone-900 rounded-sm p-10 md:p-12 cursor-default">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                    <div>
                      <span className="font-cinzel text-xs tracking-[0.2em] text-gold/50 uppercase">{cs.tag}</span>
                      <h2 className="font-cinzel text-2xl sm:text-3xl text-parchment mt-2 mb-1">{cs.client}</h2>
                      <div className="flex flex-wrap items-center gap-3 mt-2">
                        <span className="font-cormorant text-parchment/40 text-sm italic">{cs.location}</span>
                        <span className="text-gold/20">·</span>
                        <span className="font-cinzel text-xs tracking-wider text-gold/50 uppercase">{cs.service}</span>
                        <span className="text-gold/20">·</span>
                        <span className="font-cormorant text-parchment/40 text-sm">{cs.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-6 mb-8">
                    {cs.stats.map((s) => (
                      <div key={s.label} className="text-center border border-gold/15 rounded-sm py-5 px-3">
                        <div className="font-cinzel text-3xl text-gold mb-1">{s.value}</div>
                        <div className="font-cinzel text-xs tracking-[0.1em] text-parchment/50 uppercase">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="gold-divider w-12 mb-6" />
                  <p className="font-cormorant text-parchment/60 text-lg leading-relaxed">{cs.summary}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Coming soon banner */}
        <section className="py-16 bg-stone-900 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
          <div className="max-w-3xl mx-auto px-6 text-center">
            <ScrollReveal>
              <div className="border border-gold/20 rounded-sm p-10 relative">
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold/40" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold/40" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gold/40" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold/40" />
                <span className="font-cinzel text-xs tracking-[0.3em] text-gold uppercase">More Coming Soon</span>
                <h3 className="font-cinzel text-2xl text-parchment mt-4 mb-4">More Case Studies Are Being Documented</h3>
                <p className="font-cormorant text-parchment/50 text-lg italic mb-6">
                  We&apos;re currently compiling detailed breakdowns from 12 additional client campaigns. Check back soon — or book a call and we&apos;ll walk you through relevant results for your market.
                </p>
                <Link href="/contact" className="btn-gold px-8 py-3 text-sm rounded-sm inline-block cursor-pointer">
                  Book a Strategy Call
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
