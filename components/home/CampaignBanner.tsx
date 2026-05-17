import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CampaignBanner() {
  return (
    <section className="relative w-full h-[80vh] lg:h-[88vh] overflow-hidden group">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1800&q=90&fit=crop"
        alt="Shore Collection Campaign"
        fill
        className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-[1.03]"
        sizes="100vw"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/15 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/20 via-transparent to-ink/20" />

      {/* Content — centered */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-6">
        <p className="text-[9px] tracking-[0.55em] uppercase text-gold mb-4">
          New Collection · Shore
        </p>
        <h2 className="font-serif text-cream text-5xl sm:text-6xl lg:text-8xl italic leading-[0.92] max-w-3xl mb-6">
          Where land
          <br />
          meets sea.
        </h2>
        <p className="text-cream/60 text-sm max-w-xs leading-relaxed mb-8 font-sans">
          Textured surfaces that echo tide-worn stone. Jewellery that tells the story of the in-between.
        </p>
        <Link
          href="/collections/shore"
          className="inline-flex items-center gap-3 border border-cream/50 text-cream text-[10px] tracking-[0.35em] uppercase px-10 py-3.5 hover:bg-cream hover:text-ink transition-all duration-500 backdrop-blur-sm"
        >
          Explore Shore <ArrowRight size={12} />
        </Link>
      </div>

      {/* Bottom strip */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-cream/10" />
    </section>
  );
}
