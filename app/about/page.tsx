import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind House of Sea — jewellery shaped by water, worn by those who move with intention.",
};

const values = [
  {
    title: "Handcrafted",
    description:
      "Every piece begins with human hands. Our artisans in India work with traditional casting and finishing techniques passed down through generations.",
  },
  {
    title: "Intentional",
    description:
      "We make fewer pieces, made better. Each design is considered slowly — no trend cycles, no fast seasons. Only things worth wearing every day.",
  },
  {
    title: "Enduring",
    description:
      "Our metals are chosen to age well. Oxidised silver deepens. Gold warms. These are pieces that become more yours the longer you wear them.",
  },
];

const process = [
  {
    step: "01",
    title: "Sketch",
    description:
      "Each collection begins with time spent at the ocean — observing tide, stone, and light. The sketches that emerge are raw and fluid.",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=700&q=85&fit=crop",
  },
  {
    step: "02",
    title: "Cast",
    description:
      "Our artisans in India use lost-wax casting to translate the sketches into metal. Each piece is cast individually — no mass production.",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=700&q=85&fit=crop",
  },
  {
    step: "03",
    title: "Finish",
    description:
      "Polishing, oxidising, plating — the finishing determines the final character of the piece. This is where craft becomes jewellery.",
    image:
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=700&q=85&fit=crop",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1800&q=90&fit=crop"
          alt="House of Sea"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
        <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-10 pb-14 lg:pb-20 w-full">
          <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-4">
            Our Story
          </p>
          <h1 className="font-serif text-cream text-5xl lg:text-7xl leading-[0.95] max-w-xl">
            <span className="italic">Born</span> from
            <br />
            the sea.
          </h1>
        </div>
      </section>

      {/* Brand story */}
      <section className="max-w-8xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-6">
              The Beginning
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl leading-tight mb-6">
              Jewellery shaped by water, worn by those who move with intention.
            </h2>
            <div className="space-y-4 text-ink-muted leading-relaxed text-sm">
              <p>
                House of Sea began on a stretch of Konkan coastline in 2019.
                The founder, Priya, had spent a decade in fashion and grown
                tired of things made quickly and discarded faster. She wanted
                to make something different — pieces that earned their place in
                a life.
              </p>
              <p>
                The ocean became her reference. Not the romanticised ocean of
                postcards, but the real one — tidal, textured, patient. She
                started sketching forms she found in the water: the curve of a
                breaking wave, the weight of a tide-worn stone, the restless
                energy of a lariat drifting on a current.
              </p>
              <p>
                Working with a small group of artisans in Maharashtra, she
                turned those sketches into jewellery. Six years later, House of
                Sea is still made the same way — slowly, carefully, by hand.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1573408301185-9519f94815b5?w=900&q=90&fit=crop"
                alt="Founder of House of Sea"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 border border-gold/20 -z-10" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream-dark py-20 lg:py-28">
        <div className="max-w-8xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-3">
              What We Believe
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl">Three Principles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, i) => (
              <div key={val.title} className="text-center px-4">
                <p className="text-5xl font-serif italic text-gold/40 mb-4">
                  0{i + 1}
                </p>
                <h3 className="font-serif text-xl mb-3">{val.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-8xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="text-center mb-14">
          <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-3">
            How It&apos;s Made
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl">The Process</h2>
        </div>
        <div className="space-y-20">
          {process.map((step, i) => (
            <div
              key={step.step}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative overflow-hidden aspect-[4/3]">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <span className="font-serif text-6xl text-gold/20 block mb-4">
                  {step.step}
                </span>
                <h3 className="font-serif text-2xl lg:text-3xl mb-4">
                  {step.title}
                </h3>
                <p className="text-ink-muted leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-cream py-20 lg:py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl italic mb-4">
            Find your piece.
          </h2>
          <p className="text-cream/60 text-sm mb-8 leading-relaxed">
            Jewellery made to be worn — not preserved. Start with something
            small, then let it grow on you.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-3 bg-cream text-ink px-10 py-4 text-xs tracking-widest uppercase hover:bg-gold hover:text-cream transition-all duration-300"
          >
            Shop the Collection <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
