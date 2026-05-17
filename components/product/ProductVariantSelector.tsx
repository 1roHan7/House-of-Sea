"use client";

import { ProductVariant } from "@/types";
import { cn } from "@/lib/utils";

interface Props {
  variants: ProductVariant[];
  selected: ProductVariant | null;
  onSelect: (variant: ProductVariant) => void;
}

export default function ProductVariantSelector({ variants, selected, onSelect }: Props) {
  const isSize = variants.some((v) => v.size);

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs tracking-widest uppercase text-ink-subtle">
          {isSize ? "Size" : "Material"}
        </p>
        {selected && (
          <span className="text-xs text-ink-muted">{selected.title}</span>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {variants.map((variant) => (
          <button
            key={variant.id}
            onClick={() => variant.inStock && onSelect(variant)}
            disabled={!variant.inStock}
            className={cn(
              "relative px-4 py-2.5 text-xs border transition-all duration-200",
              !variant.inStock && "opacity-40 cursor-not-allowed",
              selected?.id === variant.id
                ? "bg-ink text-cream border-ink"
                : variant.inStock
                ? "border-ink/20 text-ink hover:border-gold hover:text-gold"
                : "border-ink/10 text-ink-subtle"
            )}
          >
            {variant.title}
            {/* Out of stock slash */}
            {!variant.inStock && (
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="block w-full h-px bg-ink/20 rotate-45 scale-x-150" />
              </span>
            )}
          </button>
        ))}
      </div>
      {selected && !selected.inStock && (
        <p className="text-xs text-red-500 mt-2">Out of stock</p>
      )}
    </div>
  );
}
