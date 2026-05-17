import Image from "next/image";
import Link from "next/link";

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1800&q=90&fit=crop",
    alt: "House of Sea — Tidal collection jewellery",
    animClass: "animate-hero-1",
  },
  {
    src: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1800&q=90&fit=crop",
    alt: "House of Sea — Drift collection",
    animClass: "animate-hero-2",
  },
  {
    src: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1800&q=90&fit=crop",
    alt: "House of Sea — Shore collection",
    animClass: "animate-hero-3",
  },
];

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-ink">
      {/* Crossfade image stack */}
      {heroImages.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0"
          style={{
            animation: `hero-fade 15s ease-in-out infinite`,
            animationDelay: `${i * 5}s`,
            animationFillMode: "both",
          }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
            style={{
              animation: `${i % 2 === 0 ? "ken-burns" : "ken-burns-2"} 15s ease-in-out infinite`,
              animationDelay: `${i * 5}s`,
              animationFillMode: "both",
            }}
          />
        </div>
      ))}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-ink/10 z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-end pb-16 text-center px-6">
        {/* Brand mark */}
        <div className="mb-auto mt-[30vh]">
          <p className="text-[9px] tracking-[0.5em] uppercase text-gold/90 mb-4">
            Fine Jewellery
          </p>
          <h1 className="font-serif text-cream text-5xl sm:text-6xl lg:text-8xl tracking-[0.05em] uppercase">
            House of Sea
          </h1>
          <p className="font-serif italic text-cream/60 text-lg lg:text-xl mt-3 tracking-wide">
            Shaped by water. Worn with intention.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-5">
          <Link
            href="/shop"
            className="border border-cream/50 text-cream text-[10px] tracking-[0.35em] uppercase px-10 py-3.5 hover:bg-cream hover:text-ink transition-all duration-500 backdrop-blur-sm"
          >
            Explore the Collection
          </Link>

          {/* Scroll indicator */}
          <div className="flex flex-col items-center gap-2 mt-2">
            <span className="text-[9px] tracking-widest uppercase text-cream/40">Scroll</span>
            <div
              className="w-px h-8 bg-cream/30"
              style={{ animation: "hero-scroll-bounce 2s ease-in-out infinite" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
