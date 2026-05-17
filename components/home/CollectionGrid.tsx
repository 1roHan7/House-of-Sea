import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const tiles = [
  {
    slug: "tidal",
    title: "Tidal",
    tagline: "Shaped by water",
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1200&q=90&fit=crop",
    href: "/collections/tidal",
  },
  {
    slug: "drift",
    title: "Drift",
    tagline: "Found in stillness",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1200&q=90&fit=crop",
    href: "/collections/drift",
  },
];

export default function EditorialSplit() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {tiles.map((tile) => (
          <Link
            key={tile.slug}
            href={tile.href}
            className="group relative overflow-hidden h-[60vh] md:h-[75vh] lg:h-[88vh] block"
          >
            {/* Image */}
            <Image
              src={tile.image}
              alt={tile.title}
              fill
              className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-[1.04]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/10 to-transparent" />

            {/* Content — bottom left */}
            <div className="absolute bottom-8 left-8 lg:bottom-10 lg:left-10 z-10">
              <p className="text-[9px] tracking-[0.45em] uppercase text-gold/80 mb-2">
                Collection
              </p>
              <h2 className="font-serif text-cream text-3xl lg:text-5xl italic leading-none mb-4">
                {tile.title}
              </h2>
              <p className="text-cream/60 text-xs tracking-wide mb-5 font-sans">
                {tile.tagline}
              </p>
              <span className="inline-flex items-center gap-2 text-cream text-[10px] tracking-widest uppercase border-b border-cream/40 pb-0.5 group-hover:border-gold group-hover:text-gold transition-all duration-300">
                Shop Collection <ArrowRight size={10} />
              </span>
            </div>

            {/* Top-right number */}
            <div className="absolute top-8 right-8 text-cream/20 font-serif text-6xl leading-none">
              0{tiles.indexOf(tile) + 1}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
