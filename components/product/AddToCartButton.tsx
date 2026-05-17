"use client";

import { useState } from "react";
import { Check, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { Product, ProductVariant } from "@/types";
import { cn } from "@/lib/utils";

interface Props {
  product: Product;
  selectedVariant: ProductVariant | null;
}

export default function AddToCartButton({ product, selectedVariant }: Props) {
  const [added, setAdded] = useState(false);
  const { addItem } = useCartStore();

  const handleAdd = () => {
    if (!selectedVariant || !selectedVariant.inStock) return;
    addItem(product, selectedVariant);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const isDisabled = !selectedVariant || !selectedVariant.inStock;

  return (
    <button
      onClick={handleAdd}
      disabled={isDisabled}
      className={cn(
        "w-full flex items-center justify-center gap-3 py-4 text-xs tracking-widest uppercase transition-all duration-300",
        added
          ? "bg-gold text-cream"
          : isDisabled
          ? "bg-ink/20 text-ink-subtle cursor-not-allowed"
          : "bg-ink text-cream hover:bg-gold"
      )}
    >
      {added ? (
        <>
          <Check size={16} />
          Added to Bag
        </>
      ) : (
        <>
          <ShoppingBag size={16} />
          {!selectedVariant ? "Select an option" : "Add to Bag"}
        </>
      )}
    </button>
  );
}
