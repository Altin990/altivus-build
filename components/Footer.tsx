import Link from "next/link";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/results", label: "Results" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-stone-900 border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <EagleLogo />
              <span className="font-cinzel text-lg tracking-[0.2em] text-parchment">ALTIVUS</span>
            </div>
            <p className="font-cormorant text-parchment/50 text-base leading-relaxed max-w-xs italic">
              Digital growth engineered for America&apos;s premier roofing companies.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-cinzel text-xs tracking-[0.2em] text-gold uppercase mb-6">Navigation</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-cormorant text-parchment/50 hover:text-gold transition-colors duration-300 text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-cinzel text-xs tracking-[0.2em] text-gold uppercase mb-6">Contact</h3>
            <ul className="space-y-3 font-cormorant text-parchment/50 text-base">
              <li>
                <a
                  href="mailto:altin@altivusagency.com"
                  className="hover:text-gold transition-colors duration-300"
                >
                  altin@altivusagency.com
                </a>
              </li>
              <li className="text-parchment/30">United States</li>
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="btn-gold px-5 py-2.5 text-xs rounded-sm inline-block cursor-pointer"
                >
                  Book a Free Call
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="gold-divider mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-cormorant text-parchment/30 text-sm">
            © {new Date().getFullYear()} Altivus Agency. All rights reserved.
          </p>
          <p className="font-cinzel text-xs tracking-[0.15em] text-gold/40 uppercase">
            Built for Domination
          </p>
        </div>
      </div>
    </footer>
  );
}

function EagleLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <polygon points="18,3 33,28 18,22 3,28" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeLinejoin="round" />
      <polygon points="18,10 27,26 18,21 9,26" fill="#D4AF37" opacity="0.2" />
      <line x1="18" y1="3" x2="18" y2="32" stroke="#D4AF37" strokeWidth="1" opacity="0.4" />
      <polygon points="18,14 24,27 18,24 12,27" fill="#D4AF37" opacity="0.6" />
    </svg>
  );
}
