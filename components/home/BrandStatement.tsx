import Image from "next/image";
import Link from "next/link";

export default function BrandStatement() {
  return (
    <section className="max-w-8xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Text */}
        <div className="order-2 lg:order-1">
          <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-5">
            Our Philosophy
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl leading-[1.08] mb-6">
            <span className="italic">Worn</span> like the tide —
            <br />
            always{" "}
            <span className="italic text-gold">returning.</span>
          </h2>
          <p className="text-ink-muted leading-relaxed text-sm max-w-sm mb-7">
            House of Sea makes jewellery that feels like a second skin — not
            precious and kept away, but worn and lived in. Each piece is
            handcrafted in India using gold, silver, and oxidised metal that
            grows more beautiful with time.
          </p>
          <Link
            href="/about"
            className="inline-block text-xs tracking-widest uppercase border-b border-gold text-ink pb-0.5 hover:text-gold transition-colors"
          >
            Read Our Story
          </Link>
        </div>

        {/* Image — square, smaller */}
        <div className="order-1 lg:order-2 relative">
          <div className="relative aspect-square overflow-hidden max-w-sm mx-auto lg:mx-0 lg:ml-auto">
            <Image
              src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=700&q=90&fit=crop"
              alt="Handcrafted jewellery"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 400px"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 w-32 h-32 border border-gold/25 -z-10" />
        </div>
      </div>
    </section>
  );
}
