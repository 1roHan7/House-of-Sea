import { Product } from "@/types";
import { getRelatedProducts } from "@/data/products";
import ProductCard from "@/components/shop/ProductCard";

interface Props {
  product: Product;
}

export default function RelatedProducts({ product }: Props) {
  const related = getRelatedProducts(product, 4);

  if (related.length === 0) return null;

  return (
    <section className="max-w-8xl mx-auto px-6 lg:px-10 py-16 lg:py-20 border-t border-ink/6">
      <div className="mb-10">
        <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-2">
          From the same collection
        </p>
        <h2 className="font-serif text-2xl lg:text-3xl">You Might Also Like</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
        {related.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
