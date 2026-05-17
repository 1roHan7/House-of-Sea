"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useUIStore } from "@/store/ui";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/utils";

export default function SearchModal() {
  const { isSearchOpen, closeSearch } = useUIStore();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const results = query.length > 1
    ? products.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.tagline.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.collection.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 6)
    : [];

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setQuery("");
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isSearchOpen) { closeSearch(); } else { useUIStore.getState().openSearch(); }
      }
      if (e.key === "Escape") closeSearch();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isSearchOpen, closeSearch]);

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[12vh] px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
        onClick={closeSearch}
      />

      {/* Modal */}
      <div className="relative w-full max-w-xl bg-cream shadow-2xl">
        {/* Input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-ink/10">
          <Search size={18} className="text-ink-subtle flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search jewellery..."
            className="flex-1 bg-transparent text-ink placeholder-ink-subtle outline-none font-sans text-sm"
          />
          {query && (
            <button onClick={() => setQuery("")} className="text-ink-subtle hover:text-ink">
              <X size={16} />
            </button>
          )}
          <kbd className="hidden sm:inline-flex text-[10px] font-mono text-ink-subtle border border-ink/15 px-1.5 py-0.5">
            ESC
          </kbd>
        </div>

        {/* Results */}
        {query.length > 1 && (
          <div className="max-h-96 overflow-y-auto">
            {results.length === 0 ? (
              <p className="text-sm text-ink-subtle text-center py-10">
                No results for &ldquo;{query}&rdquo;
              </p>
            ) : (
              <ul>
                {results.map((product) => (
                  <li key={product.id}>
                    <Link
                      href={`/shop/${product.slug}`}
                      onClick={closeSearch}
                      className="flex items-center gap-4 px-5 py-3.5 hover:bg-cream-dark transition-colors group"
                    >
                      <div className="relative w-12 h-14 flex-shrink-0 bg-cream-darker overflow-hidden">
                        <Image
                          src={product.images[0]}
                          alt={product.title}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-serif text-base leading-tight text-ink group-hover:text-gold transition-colors">
                          {product.title}
                        </p>
                        <p className="text-xs text-ink-subtle capitalize mt-0.5">
                          {product.category} · {product.collection}
                        </p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="text-sm font-medium">{formatPrice(product.price)}</p>
                        <ArrowRight
                          size={14}
                          className="ml-auto mt-1 text-ink-faint group-hover:text-gold transition-colors"
                        />
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Hint */}
        {query.length === 0 && (
          <div className="px-5 py-6">
            <p className="text-xs tracking-widest uppercase text-ink-subtle mb-3">
              Popular searches
            </p>
            <div className="flex flex-wrap gap-2">
              {["Rings", "Earrings", "Gold", "Silver", "Tidal", "Shore"].map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="text-xs border border-ink/12 px-3 py-1.5 text-ink-muted hover:border-gold hover:text-gold transition-all"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
