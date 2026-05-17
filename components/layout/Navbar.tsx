"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Search, ShoppingBag, Heart, Menu, X } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { useWishlistStore } from "@/store/wishlist";
import { useUIStore } from "@/store/ui";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [atTop, setAtTop] = useState(true);
  const [navTop, setNavTop] = useState(36);
  const { itemCount, openDrawer } = useCartStore();
  const { productIds } = useWishlistStore();
  const { isMobileMenuOpen, openSearch, openMobileMenu, closeMobileMenu } = useUIStore();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setAtTop(y < 10);
      setNavTop(Math.max(0, 36 - y));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cartCount = itemCount();
  const isLight = atTop; // transparent state → light (cream) text

  return (
    <>
      <header
        style={{ top: navTop }}
        className={cn(
          "fixed left-0 right-0 z-40 transition-[background-color,backdrop-filter,border-color,box-shadow] duration-500",
          atTop
            ? "bg-transparent"
            : "bg-cream/96 backdrop-blur-sm border-b border-ink/8 shadow-sm"
        )}
      >
        <nav className="max-w-8xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          {/* Mobile menu toggle */}
          <button
            onClick={isMobileMenuOpen ? closeMobileMenu : openMobileMenu}
            className={cn(
              "lg:hidden p-1.5 -ml-1.5 transition-colors",
              isLight ? "text-cream hover:text-cream/70" : "text-ink hover:text-gold"
            )}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Desktop nav — left */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "text-xs tracking-widest uppercase transition-colors duration-300",
                  isLight
                    ? "text-cream/80 hover:text-cream"
                    : "text-ink-muted hover:text-ink underline-gold"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Logo — center */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
          >
            <span
              className={cn(
                "font-serif text-xl tracking-[0.2em] uppercase leading-none transition-colors duration-300",
                isLight ? "text-cream" : "text-ink"
              )}
            >
              House of Sea
            </span>
            <span
              className={cn(
                "text-[8px] tracking-[0.35em] uppercase mt-0.5 transition-colors duration-300",
                isLight ? "text-gold/80" : "text-gold"
              )}
            >
              Fine Jewellery
            </span>
          </Link>

          {/* Icons — right */}
          <div className="flex items-center gap-4">
            <button
              onClick={openSearch}
              className={cn(
                "p-1.5 transition-colors",
                isLight ? "text-cream hover:text-cream/70" : "text-ink hover:text-gold"
              )}
              aria-label="Search"
            >
              <Search size={18} />
            </button>
            <Link
              href="#"
              className={cn(
                "p-1.5 transition-colors relative",
                isLight ? "text-cream hover:text-cream/70" : "text-ink hover:text-gold"
              )}
              aria-label="Wishlist"
            >
              <Heart size={18} />
              {productIds.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-gold rounded-full text-[8px] text-cream flex items-center justify-center font-medium">
                  {productIds.length}
                </span>
              )}
            </Link>
            <button
              onClick={openDrawer}
              className={cn(
                "p-1.5 transition-colors relative",
                isLight ? "text-cream hover:text-cream/70" : "text-ink hover:text-gold"
              )}
              aria-label="Cart"
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-gold rounded-full text-[8px] text-cream flex items-center justify-center font-medium">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-ink/40"
            onClick={closeMobileMenu}
          />
          <div className="absolute top-0 left-0 bottom-0 w-72 bg-cream flex flex-col pt-20 px-8 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMobileMenu}
                className="font-serif text-2xl italic text-ink py-3 border-b border-ink/8 hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-8 pt-4">
              <p className="text-xs tracking-widest uppercase text-ink-subtle mb-4">
                Our Collections
              </p>
              {["Tidal", "Drift", "Shore"].map((col) => (
                <Link
                  key={col}
                  href="/shop"
                  onClick={closeMobileMenu}
                  className="block text-sm text-ink-muted hover:text-gold py-2 transition-colors"
                >
                  {col}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
