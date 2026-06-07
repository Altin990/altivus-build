import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

const values = [
  {
    title: "Industry Specialization",
    body: "We work exclusively with roofing companies. That means we understand seasonal cycles, local market dynamics, insurance claim season, and what makes a homeowner choose one roofer over another.",
  },
  {
    title: "Transparent Reporting",
    body: "No vanity metrics. You get a monthly dashboard showing leads generated, cost per lead, ranking movements, and revenue attributed — in plain language, not agency jargon.",
  },
  {
    title: "No Long-Term Lock-In",
    body: "We earn your business every month. Our clients stay because we deliver, not because they're trapped in a contract. We're confident enough in our results to operate that way.",
  },
  {
    title: "Built for Scale",
    body: "Whether you're a two-truck operation or a multi-location regional player, our systems are designed to grow with you. We build infrastructure, not campaigns that collapse under their own weight.",
  },
];

const team = [
  { name: "Altin Mehmeti", role: "Founder & CEO", bio: "5+ years in performance marketing. Built growth systems for over 50 home services companies across the US." },
  { name: "Natalie Cruz", role: "Head of SEO", bio: "Former Google analyst. Specializes in local search domination for trade service businesses in competitive markets." },
  { name: "Jordan Blake", role: "Paid Media Director", bio: "Managed $4M+ in annual ad spend for roofing and home services clients. ROAS-obsessed." },
];

export default function AboutPage() {
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
              <span className="font-cinzel text-xs tracking-[0.3em] text-gold uppercase">About Altivus</span>
              <span className="h-px w-8 bg-gold/50" />
            </div>
            <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl text-parchment leading-tight mb-6">
              We Built This Agency<br />
              <span className="text-gold">For One Industry</span>
            </h1>
            <p className="font-cormorant text-xl text-parchment/60 italic leading-relaxed max-w-2xl mx-auto">
              Most agencies take any client they can get. We made the opposite bet — go deep on roofing, become the best in the world at it, and build systems that actually move the needle for roofing company owners.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-24 bg-stone-900 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
          <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <span className="font-cinzel text-xs tracking-[0.3em] text-gold uppercase">Our Mission</span>
              <h2 className="font-cinzel text-3xl sm:text-4xl text-parchment mt-4 mb-6 leading-tight">
                To Make Every Roofing Company We Work With the Dominant Force in Their Market
              </h2>
              <div className="gold-divider w-16 mb-6" />
              <p className="font-cormorant text-parchment/60 text-lg leading-relaxed mb-4">
                The roofing industry is fragmented. Most companies are outstanding at the craft and invisible online. We bridge that gap — transforming excellent contractors into the obvious choice for homeowners in their area.
              </p>
              <p className="font-cormorant text-parchment/60 text-lg leading-relaxed">
                We don&apos;t believe in spray-and-pray marketing. Every dollar we spend is tracked. Every strategy is built on data, not guesswork. And every client gets the same level of attention we&apos;d give our own business.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="relative">
                {/* Abstract geometric visual */}
                <div className="aspect-square max-w-sm mx-auto relative">
                  <div className="absolute inset-0 border border-gold/20 rounded-sm" />
                  <div className="absolute inset-4 border border-gold/10 rounded-sm" />
                  <div className="absolute inset-8 border border-gold/05 rounded-sm" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="font-cinzel text-6xl text-gold mb-2">50+</div>
                      <div className="font-cinzel text-xs tracking-[0.2em] text-parchment/40 uppercase">Roofing Clients</div>
                      <div className="gold-divider w-12 mx-auto my-4" />
                      <div className="font-cinzel text-4xl text-gold mb-2">28</div>
                      <div className="font-cinzel text-xs tracking-[0.2em] text-parchment/40 uppercase">US States</div>
                    </div>
                  </div>
                  {/* Corner decorations */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-gold/50" />
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-gold/50" />
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-gold/50" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-gold/50" />
                </div>
              </div>
            </ScrollReveal>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        </section>

        {/* Values */}
        <section className="py-24 bg-obsidian relative overflow-hidden">
          <div className="absolute inset-0 bg-geo opacity-60" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
            <ScrollReveal className="text-center mb-14">
              <span className="font-cinzel text-xs tracking-[0.3em] text-gold uppercase">How We Operate</span>
              <h2 className="font-cinzel text-3xl sm:text-4xl text-parchment mt-4">Our Principles</h2>
              <div className="gold-divider max-w-xs mx-auto mt-6" />
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((v, i) => (
                <ScrollReveal key={v.title} delay={i * 100}>
                  <div className="card-hover bg-stone-900 rounded-sm p-8 h-full cursor-default">
                    <div className="gold-divider w-8 mb-6" />
                    <h3 className="font-cinzel text-lg text-parchment mb-4">{v.title}</h3>
                    <p className="font-cormorant text-parchment/55 text-base leading-relaxed">{v.body}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 bg-stone-900 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <ScrollReveal className="text-center mb-14">
              <span className="font-cinzel text-xs tracking-[0.3em] text-gold uppercase">The Team</span>
              <h2 className="font-cinzel text-3xl sm:text-4xl text-parchment mt-4">Who You&apos;re Working With</h2>
              <div className="gold-divider max-w-xs mx-auto mt-6" />
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {team.map((member, i) => (
                <ScrollReveal key={member.name} delay={i * 150}>
                  <div className="card-hover bg-obsidian rounded-sm p-8 text-center cursor-default">
                    <div className="w-16 h-16 rounded-sm border border-gold/30 bg-stone-800 flex items-center justify-center mx-auto mb-6">
                      <span className="font-cinzel text-xl text-gold">
                        {member.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                    <h3 className="font-cinzel text-base text-parchment mb-1">{member.name}</h3>
                    <div className="font-cinzel text-xs tracking-wider text-gold/60 uppercase mb-4">{member.role}</div>
                    <p className="font-cormorant text-parchment/50 text-sm leading-relaxed italic">{member.bio}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        </section>

        {/* CTA */}
        <section className="py-20 bg-obsidian text-center">
          <ScrollReveal>
            <h2 className="font-cinzel text-3xl text-parchment mb-4">Ready to Work Together?</h2>
            <p className="font-cormorant text-parchment/50 text-xl italic mb-8">Let&apos;s talk about your roofing business and what growth could look like.</p>
            <Link href="/contact" className="btn-gold px-10 py-4 text-sm rounded-sm inline-block cursor-pointer">Book a Free Strategy Call</Link>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
