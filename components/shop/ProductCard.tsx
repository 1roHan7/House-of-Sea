"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Product } from "@/types";
import { useWishlistStore } from "@/store/wishlist";
import { formatPrice, cn } from "@/lib/utils";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { has, toggle } = useWishlistStore();
  const isWishlisted = has(product.id);

  return (
    <div className="group relative">
      {/* Image container */}
      <div className="relative overflow-hidden bg-cream-dark aspect-[3/4]">
        <Link href={`/shop/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          {/* Second image on hover */}
          {product.images[1] && (
            <Image
              src={product.images[1]}
              alt={product.title}
              fill
              className="object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          )}
        </Link>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.isNew && (
            <span className="bg-cream text-ink text-[9px] tracking-widest uppercase px-2 py-1">
              New In
            </span>
          )}
          {product.compareAtPrice && (
            <span className="bg-gold text-cream text-[9px] tracking-widest uppercase px-2 py-1">
              Sale
            </span>
          )}
        </div>

        {/* Wishlist button */}
        <button
          onClick={() => toggle(product.id)}
          className="absolute top-3 right-3 w-8 h-8 bg-cream/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-cream"
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart
            size={14}
            className={cn(
              "transition-colors",
              isWishlisted ? "fill-gold stroke-gold" : "stroke-ink"
            )}
          />
        </button>
      </div>

      {/* Info */}
      <div className="pt-3">
        <Link href={`/shop/${product.slug}`}>
          <h3 className="font-serif text-base leading-tight group-hover:text-gold transition-colors">
            {product.title}
          </h3>
          <p className="text-xs text-ink-subtle italic font-serif mt-0.5">
            {product.tagline}
          </p>
        </Link>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm font-medium">
            {formatPrice(product.price)}
          </span>
          {product.compareAtPrice && (
            <span className="text-xs text-ink-subtle line-through">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
