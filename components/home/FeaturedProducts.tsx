import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/shop/ProductCard";

export default function NewArrivals() {
  const newArrivals = products.filter((p) => p.isNew).slice(0, 4);
  const featured = products.filter((p) => p.featured && !p.isNew).slice(0, 4);
  const display = [...newArrivals, ...featured].slice(0, 8);

  return (
    <section className="bg-cream py-14 lg:py-20">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex items-end justify-between mb-8 lg:mb-10">
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-1.5">
              Just In
            </p>
            <h2 className="font-serif text-2xl lg:text-3xl">New Arrivals</h2>
          </div>
          <Link
            href="/shop"
            className="hidden sm:inline-flex items-center gap-2 text-xs tracking-widest uppercase text-ink-muted hover:text-gold transition-colors"
          >
            Shop All <ArrowRight size={12} />
          </Link>
        </div>

        {/* 4-column grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5">
          {display.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="flex justify-center mt-10 sm:hidden">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase border border-ink/15 px-8 py-3 hover:border-gold hover:text-gold transition-all"
          >
            Shop All <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </section>
  );
}
