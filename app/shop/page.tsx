"use client";

import { useState, useMemo } from "react";
import { products } from "@/data/products";
import { FilterState, Product } from "@/types";
import ProductGrid from "@/components/shop/ProductGrid";
import ProductFilters from "@/components/shop/ProductFilters";

const defaultFilters: FilterState = {
  category: "all",
  metal: "all",
  minPrice: 0,
  maxPrice: 99999,
  sort: "featured",
};

function applyFilters(items: Product[], filters: FilterState): Product[] {
  let result = [...items];

  if (filters.category !== "all") {
    result = result.filter((p) => p.category === filters.category);
  }
  if (filters.metal !== "all") {
    result = result.filter((p) => p.metal === filters.metal);
  }

  switch (filters.sort) {
    case "price-asc":
      result.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      result.sort((a, b) => b.price - a.price);
      break;
    case "newest":
      result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
      break;
    default:
      result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }

  return result;
}

export default function ShopPage() {
  const [filters, setFilters] = useState<FilterState>(defaultFilters);

  const filtered = useMemo(() => applyFilters(products, filters), [filters]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-cream-dark border-b border-ink/6 pt-28 pb-14 lg:pt-32 lg:pb-20">
        <div className="max-w-8xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-3">
            All Jewellery
          </p>
          <h1 className="font-serif text-4xl lg:text-5xl">The Collection</h1>
          <p className="text-sm text-ink-muted mt-3 max-w-xs mx-auto">
            Handcrafted pieces made to be worn every day.
          </p>
        </div>
      </div>

      {/* Filters + Grid */}
      <div className="max-w-8xl mx-auto px-6 lg:px-10 py-10 lg:py-14">
        <div className="mb-8">
          <ProductFilters
            filters={filters}
            onChange={setFilters}
            totalCount={filtered.length}
          />
        </div>
        <ProductGrid products={filtered} />
      </div>
    </div>
  );
}
