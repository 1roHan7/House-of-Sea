import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { collections } from "@/data/collections";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Three collections, one ocean. Explore Tidal, Drift, and Shore — handcrafted jewellery inspired by the sea.",
};

export default function CollectionsPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-cream-dark border-b border-ink/6 pt-28 pb-14 lg:pt-32 lg:pb-20 text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">
          House of Sea
        </p>
        <h1 className="font-serif text-4xl lg:text-5xl italic text-ink mb-4">
          Three Stories. One Ocean.
        </h1>
        <p className="text-sm text-ink-muted max-w-sm mx-auto leading-relaxed">
          Each collection is a different way of listening to the sea.
        </p>
      </div>

      {/* Collection cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {collections.map((collection, i) => (
          <Link
            key={collection.slug}
            href={`/collections/${collection.slug}`}
            className="group relative overflow-hidden h-[70vh] lg:h-[88vh] block"
          >
            <Image
              src={collection.coverImage}
              alt={collection.title}
              fill
              className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-[1.04]"
              sizes="(max-width: 1024px) 100vw, 33vw"
              priority={i === 0}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/15 to-transparent" />

            {/* Collection number */}
            <div className="absolute top-8 right-8 text-cream/20 font-serif text-6xl leading-none select-none">
              0{i + 1}
            </div>

            {/* Content */}
            <div className="absolute bottom-8 left-8 lg:bottom-10 lg:left-10 z-10">
              <p className="text-[9px] tracking-[0.45em] uppercase text-gold/80 mb-2">
                Collection
              </p>
              <h2 className="font-serif text-cream text-4xl lg:text-5xl italic leading-none mb-3">
                {collection.title}
              </h2>
              <p className="text-cream/60 text-xs tracking-wide mb-5 max-w-[200px] leading-relaxed">
                {collection.tagline}
              </p>
              <span className="inline-flex items-center gap-2 text-cream text-[10px] tracking-widest uppercase border-b border-cream/40 pb-0.5 group-hover:border-gold group-hover:text-gold transition-all duration-300">
                Explore <ArrowRight size={10} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
