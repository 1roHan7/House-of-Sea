import Link from "next/link";
import { ExternalLink } from "lucide-react";

const footerLinks = {
  Shop: [
    { label: "All Jewellery", href: "/shop" },
    { label: "Rings", href: "/shop?category=rings" },
    { label: "Earrings", href: "/shop?category=earrings" },
    { label: "Necklaces", href: "/shop?category=necklaces" },
    { label: "Bracelets", href: "/shop?category=bracelets" },
  ],
  Collections: [
    { label: "Tidal", href: "/shop?collection=tidal" },
    { label: "Drift", href: "/shop?collection=drift" },
    { label: "Shore", href: "/shop?collection=shore" },
  ],
  Help: [
    { label: "About Us", href: "/about" },
    { label: "Size Guide", href: "/about#size-guide" },
    { label: "Care Instructions", href: "/about#care" },
    { label: "Contact", href: "mailto:hello@houseofsea.in" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-ink text-cream pt-16 pb-8">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-cream/10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl tracking-[0.15em] uppercase mb-3">
              House of Sea
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-xs">
              Jewellery shaped by water, worn by those who move through the
              world with quiet intention.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/60 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <ExternalLink size={18} />
              </a>
            </div>
            <p className="text-xs text-cream/40 tracking-wider mt-6">
              Made with care in India
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-[10px] tracking-widest uppercase text-cream/40 mb-4">
                {section}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream/70 hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs text-cream/30">
            © {new Date().getFullYear()} House of Sea. All rights reserved.
          </p>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms & Conditions"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-cream/30 hover:text-cream/60 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
