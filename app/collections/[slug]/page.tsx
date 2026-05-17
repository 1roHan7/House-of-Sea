import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { collections } from "@/data/collections";
import { getProductsByCollection } from "@/data/products";
import ProductGrid from "@/components/shop/ProductGrid";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const collection = collections.find((c) => c.slug === params.slug);
  if (!collection) return {};
  return {
    title: collection.title,
    description: collection.description,
  };
}

export default function CollectionPage({ params }: Props) {
  const collection = collections.find((c) => c.slug === params.slug);
  if (!collection) notFound();

  const products = getProductsByCollection(collection.slug);
  const others = collections.filter((c) => c.slug !== collection.slug);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <Image
          src={collection.heroImage}
          alt={collection.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/20 to-transparent" />

        <div className="absolute bottom-10 left-0 right-0 z-10 max-w-8xl mx-auto px-6 lg:px-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[10px] tracking-widest uppercase text-cream/50 mb-6">
            <Link href="/" className="hover:text-cream transition-colors">Home</Link>
            <span>/</span>
            <Link href="/collections" className="hover:text-cream transition-colors">Collections</Link>
            <span>/</span>
            <span className="text-cream/80">{collection.title}</span>
          </nav>

          <p className="text-[9px] tracking-[0.45em] uppercase text-gold/80 mb-3">
            Collection
          </p>
          <h1 className="font-serif text-cream text-5xl lg:text-7xl italic leading-none mb-4">
            {collection.title}
          </h1>
          <p className="text-cream/70 text-sm max-w-md leading-relaxed">
            {collection.description}
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-8xl mx-auto px-6 lg:px-10 py-14 lg:py-20">
        <div className="flex items-center justify-between mb-8 lg:mb-10">
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-1">
              {collection.tagline}
            </p>
            <h2 className="font-serif text-2xl text-ink">
              {products.length} piece{products.length !== 1 ? "s" : ""}
            </h2>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-ink-muted hover:text-gold transition-colors"
          >
            All Jewellery <ArrowRight size={12} />
          </Link>
        </div>

        <ProductGrid products={products} />
      </section>

      {/* Other collections */}
      <section className="border-t border-ink/8 bg-cream-dark py-14 lg:py-20">
        <div className="max-w-8xl mx-auto px-6 lg:px-10">
          <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-8">
            Other Collections
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {others.map((other) => (
              <Link
                key={other.slug}
                href={`/collections/${other.slug}`}
                className="group relative overflow-hidden h-[40vh] block"
              >
                <Image
                  src={other.coverImage}
                  alt={other.title}
                  fill
                  className="object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/10 to-transparent" />
                <div className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8 z-10">
                  <h3 className="font-serif text-cream text-3xl italic leading-none mb-2">
                    {other.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-cream/70 text-[10px] tracking-widest uppercase group-hover:text-gold transition-colors duration-300">
                    Explore <ArrowRight size={10} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
