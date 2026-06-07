import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

const contactInfo = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "Email",
    value: "altin@altivusagency.com",
    href: "mailto:altin@altivusagency.com",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Response Time",
    value: "Within 24 hours",
    href: null,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: "Location",
    value: "United States (Remote)",
    href: null,
  },
];

export default function ContactPage() {
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
              <span className="font-cinzel text-xs tracking-[0.3em] text-gold uppercase">Get In Touch</span>
              <span className="h-px w-8 bg-gold/50" />
            </div>
            <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl text-parchment leading-tight mb-6">
              Let&apos;s Talk About<br />
              <span className="text-gold">Your Growth</span>
            </h1>
            <p className="font-cormorant text-xl text-parchment/60 italic leading-relaxed max-w-2xl mx-auto">
              Tell us about your roofing company. We&apos;ll review it and come back with a clear picture of what&apos;s possible.
            </p>
          </div>
        </section>

        {/* Contact section */}
        <section className="py-24 bg-stone-900 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
          <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left — info */}
            <ScrollReveal>
              <div>
                <h2 className="font-cinzel text-2xl sm:text-3xl text-parchment mb-4 leading-tight">
                  Book Your Free<br />Strategy Audit
                </h2>
                <p className="font-cormorant text-parchment/55 text-lg leading-relaxed mb-10">
                  This is a no-pressure 30-minute call. We&apos;ll analyze your online presence, identify your biggest opportunities, and show you exactly how we&apos;d approach growing your roofing company. No pitch decks. No fluff. Just strategy.
                </p>

                <div className="space-y-6 mb-10">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-center gap-4">
                      <div className="p-2.5 rounded-sm bg-obsidian border border-gold/15 flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <div className="font-cinzel text-xs tracking-[0.15em] text-parchment/40 uppercase mb-0.5">{item.label}</div>
                        {item.href ? (
                          <a href={item.href} className="font-cormorant text-base text-parchment/70 hover:text-gold transition-colors duration-300">
                            {item.value}
                          </a>
                        ) : (
                          <span className="font-cormorant text-base text-parchment/70">{item.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* What to expect */}
                <div className="border border-gold/15 rounded-sm p-6 relative">
                  <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-gold/40" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-gold/40" />
                  <div className="font-cinzel text-xs tracking-[0.2em] text-gold uppercase mb-4">What to Expect</div>
                  <ul className="space-y-2">
                    {[
                      "Website & conversion audit",
                      "Local SEO ranking analysis",
                      "Competitor gap review",
                      "Custom growth recommendation",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="text-gold text-xs" aria-hidden="true">◆</span>
                        <span className="font-cormorant text-parchment/60 text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* Right — form */}
            <ScrollReveal delay={200}>
              <ContactForm />
            </ScrollReveal>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        </section>
      </main>
      <Footer />
    </>
  );
}
