"use client";

import { Heart } from "lucide-react";
import { useWishlistStore } from "@/store/wishlist";
import { cn } from "@/lib/utils";

interface Props {
  productId: string;
}

export default function WishlistButton({ productId }: Props) {
  const { has, toggle } = useWishlistStore();
  const isWishlisted = has(productId);

  return (
    <button
      onClick={() => toggle(productId)}
      className={cn(
        "flex items-center justify-center w-12 h-12 border transition-all duration-200",
        isWishlisted
          ? "border-gold bg-gold/10"
          : "border-ink/20 hover:border-gold hover:bg-gold/5"
      )}
      aria-label={isWishlisted ? "Remove from wishlist" : "Save to wishlist"}
    >
      <Heart
        size={18}
        className={cn(
          "transition-all duration-200",
          isWishlisted ? "fill-gold stroke-gold" : "stroke-ink"
        )}
      />
    </button>
  );
}
