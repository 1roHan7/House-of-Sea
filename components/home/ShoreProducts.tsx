import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getProductsByCollection } from "@/data/products";
import ProductCard from "@/components/shop/ProductCard";

export default function ShoreProducts() {
  const shoreProducts = getProductsByCollection("shore").slice(0, 4);

  return (
    <section className="bg-cream-dark py-14 lg:py-20">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex items-end justify-between mb-8 lg:mb-10">
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-1.5">
              The Collection
            </p>
            <h2 className="font-serif text-2xl lg:text-3xl">Shore</h2>
          </div>
          <Link
            href="/collections/shore"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-ink-muted hover:text-gold transition-colors"
          >
            View All <ArrowRight size={12} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5">
          {shoreProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
