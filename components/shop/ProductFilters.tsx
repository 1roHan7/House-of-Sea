"use client";

import { Category, Metal, SortOption, FilterState } from "@/types";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface Props {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  totalCount: number;
}

const categories: { value: Category | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "rings", label: "Rings" },
  { value: "necklaces", label: "Necklaces" },
  { value: "earrings", label: "Earrings" },
  { value: "bracelets", label: "Bracelets" },
];

const metals: { value: Metal | "all"; label: string }[] = [
  { value: "all", label: "All Metals" },
  { value: "gold", label: "Gold" },
  { value: "silver", label: "Silver" },
  { value: "gold-plated", label: "Gold Plated" },
  { value: "oxidised", label: "Oxidised" },
];

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low–High" },
  { value: "price-desc", label: "Price: High–Low" },
  { value: "newest", label: "New In" },
];

export default function ProductFilters({ filters, onChange, totalCount }: Props) {
  const hasActiveFilters =
    filters.category !== "all" || filters.metal !== "all";

  return (
    <div className="space-y-6">
      {/* Category */}
      <div>
        <p className="text-[10px] tracking-widest uppercase text-ink-subtle mb-3">
          Category
        </p>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => onChange({ ...filters, category: cat.value })}
              className={cn(
                "px-4 py-2 text-xs tracking-wide border transition-all duration-200",
                filters.category === cat.value
                  ? "bg-ink text-cream border-ink"
                  : "border-ink/15 text-ink-muted hover:border-gold hover:text-gold"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Metal */}
      <div>
        <p className="text-[10px] tracking-widest uppercase text-ink-subtle mb-3">
          Metal
        </p>
        <div className="flex flex-wrap gap-2">
          {metals.map((m) => (
            <button
              key={m.value}
              onClick={() => onChange({ ...filters, metal: m.value })}
              className={cn(
                "px-4 py-2 text-xs tracking-wide border transition-all duration-200",
                filters.metal === m.value
                  ? "bg-ink text-cream border-ink"
                  : "border-ink/15 text-ink-muted hover:border-gold hover:text-gold"
              )}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      {/* Sort + count row */}
      <div className="flex items-center justify-between pt-2 border-t border-ink/8">
        <div className="flex items-center gap-3">
          <p className="text-xs text-ink-subtle">
            {totalCount} {totalCount === 1 ? "piece" : "pieces"}
          </p>
          {hasActiveFilters && (
            <button
              onClick={() =>
                onChange({ ...filters, category: "all", metal: "all" })
              }
              className="flex items-center gap-1 text-xs text-gold hover:text-gold-dark transition-colors"
            >
              <X size={12} /> Clear filters
            </button>
          )}
        </div>
        <select
          value={filters.sort}
          onChange={(e) =>
            onChange({ ...filters, sort: e.target.value as SortOption })
          }
          className="text-xs border border-ink/15 bg-cream px-3 py-2 text-ink outline-none hover:border-gold focus:border-gold transition-colors cursor-pointer"
        >
          {sortOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
