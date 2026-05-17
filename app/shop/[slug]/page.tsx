"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Truck, RotateCcw, Award } from "lucide-react";
import { getProductBySlug } from "@/data/products";
import { ProductVariant } from "@/types";
import { formatPrice } from "@/lib/utils";
import ProductGallery from "@/components/product/ProductGallery";
import ProductVariantSelector from "@/components/product/ProductVariantSelector";
import AddToCartButton from "@/components/product/AddToCartButton";
import WishlistButton from "@/components/product/WishlistButton";
import SizeGuideModal from "@/components/product/SizeGuideModal";
import RelatedProducts from "@/components/product/RelatedProducts";

const trust = [
  { icon: Truck, label: "Free Shipping", sub: "Orders above ₹2,000" },
  { icon: RotateCcw, label: "Easy Returns", sub: "Within 14 days" },
  { icon: Award, label: "Handcrafted", sub: "Made in India" },
];

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProductBySlug(params.slug);

  if (!product) notFound();

  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    product.variants.find((v) => v.inStock) ?? null
  );

  const displayPrice = selectedVariant?.price ?? product.price;

  return (
    <>
      <div className="max-w-8xl mx-auto px-6 lg:px-10 pt-24 pb-8 lg:pt-28 lg:pb-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-ink-subtle mb-8">
          <Link href="/" className="hover:text-gold transition-colors">
            Home
          </Link>
          <ChevronRight size={12} />
          <Link href="/shop" className="hover:text-gold transition-colors">
            Shop
          </Link>
          <ChevronRight size={12} />
          <span className="text-ink capitalize">{product.category}</span>
          <ChevronRight size={12} />
          <span className="text-ink">{product.title}</span>
        </nav>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <ProductGallery images={product.images} title={product.title} />

          {/* Info */}
          <div className="flex flex-col gap-6">
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                {product.isNew && (
                  <span className="text-[9px] tracking-widest uppercase bg-gold text-cream px-2 py-1">
                    New In
                  </span>
                )}
                <span className="text-xs text-ink-subtle capitalize">
                  {product.collection} Collection
                </span>
              </div>
              <h1 className="font-serif text-3xl lg:text-4xl leading-tight">
                {product.title}
              </h1>
              <p className="font-serif italic text-ink-muted mt-1">
                {product.tagline}
              </p>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-2xl">{formatPrice(displayPrice)}</span>
              {product.compareAtPrice && (
                <span className="text-sm text-ink-subtle line-through">
                  {formatPrice(product.compareAtPrice)}
                </span>
              )}
            </div>

            {/* Variants */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <div />
                {product.variants.some((v) => v.size) && (
                  <SizeGuideModal />
                )}
              </div>
              <ProductVariantSelector
                variants={product.variants}
                selected={selectedVariant}
                onSelect={setSelectedVariant}
              />
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <div className="flex-1">
                <AddToCartButton
                  product={product}
                  selectedVariant={selectedVariant}
                />
              </div>
              <WishlistButton productId={product.id} />
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 py-5 border-y border-ink/8">
              {trust.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="text-center">
                  <Icon size={18} className="text-gold mx-auto mb-1.5" />
                  <p className="text-xs font-medium">{label}</p>
                  <p className="text-[10px] text-ink-subtle mt-0.5">{sub}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div>
              <p className="text-sm text-ink-muted leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Details accordion-style */}
            <details className="group border-b border-ink/8 pb-4">
              <summary className="flex items-center justify-between cursor-pointer text-xs tracking-widest uppercase text-ink-subtle py-2 list-none">
                Details & Materials
                <span className="text-lg transition-transform group-open:rotate-45">+</span>
              </summary>
              <ul className="mt-3 space-y-1.5">
                {product.details.map((d, i) => (
                  <li key={i} className="text-sm text-ink-muted flex items-start gap-2">
                    <span className="text-gold mt-1 flex-shrink-0">·</span>
                    {d}
                  </li>
                ))}
              </ul>
            </details>

            <details className="group border-b border-ink/8 pb-4">
              <summary className="flex items-center justify-between cursor-pointer text-xs tracking-widest uppercase text-ink-subtle py-2 list-none">
                Care Instructions
                <span className="text-lg transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="mt-3 text-sm text-ink-muted leading-relaxed space-y-2">
                <p>Store in the pouch provided to prevent scratching.</p>
                <p>Remove before swimming, bathing, or applying perfume.</p>
                <p>Clean gently with a soft cloth. Avoid harsh chemicals.</p>
                <p>Gold-plated pieces may be re-plated — contact us for care.</p>
              </div>
            </details>
          </div>
        </div>
      </div>

      {/* Related products */}
      <RelatedProducts product={product} />
    </>
  );
}
