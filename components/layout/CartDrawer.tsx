"use client";

import { X, ShoppingBag, Plus, Minus, Trash2 } from "lucide-react";
import Image from "next/image";
import { useCartStore } from "@/store/cart";
import { formatPrice } from "@/lib/utils";

export default function CartDrawer() {
  const { items, isDrawerOpen, closeDrawer, removeItem, updateQuantity, subtotal } =
    useCartStore();

  const total = subtotal();

  return (
    <>
      {/* Backdrop */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-ink/30 backdrop-blur-sm"
          onClick={closeDrawer}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-cream flex flex-col shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-ink/8">
          <h2 className="font-serif text-xl">
            Your Bag
            {items.length > 0 && (
              <span className="ml-2 text-sm font-sans font-normal text-ink-subtle">
                ({items.length} {items.length === 1 ? "item" : "items"})
              </span>
            )}
          </h2>
          <button
            onClick={closeDrawer}
            className="p-1.5 text-ink-muted hover:text-ink transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={48} className="text-ink-faint" />
              <div>
                <p className="font-serif text-xl text-ink-muted">Your bag is empty</p>
                <p className="text-sm text-ink-subtle mt-1">
                  Add something beautiful to begin.
                </p>
              </div>
              <button
                onClick={closeDrawer}
                className="mt-4 px-8 py-3 border border-gold text-gold text-xs tracking-widest uppercase hover:bg-gold hover:text-cream transition-all duration-200"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map((item) => (
                <li
                  key={`${item.product.id}-${item.variant.id}`}
                  className="flex gap-4 py-4 border-b border-ink/6"
                >
                  <div className="relative w-20 h-24 bg-cream-dark flex-shrink-0 overflow-hidden">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.title}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-2">
                      <div>
                        <p className="font-serif text-base leading-tight">
                          {item.product.title}
                        </p>
                        <p className="text-xs text-ink-subtle mt-0.5">
                          {item.variant.title}
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          removeItem(item.product.id, item.variant.id)
                        }
                        className="text-ink-faint hover:text-ink transition-colors flex-shrink-0"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2 border border-ink/12">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.variant.id,
                              item.quantity - 1
                            )
                          }
                          className="w-7 h-7 flex items-center justify-center text-ink-muted hover:text-ink transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-sm w-5 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.variant.id,
                              item.quantity + 1
                            )
                          }
                          className="w-7 h-7 flex items-center justify-center text-ink-muted hover:text-ink transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <span className="font-medium text-sm">
                        {formatPrice(
                          (item.variant.price ?? item.product.price) *
                            item.quantity
                        )}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-ink/8 space-y-4">
            <div className="flex justify-between text-sm text-ink-muted">
              <span>Subtotal</span>
              <span>{formatPrice(total)}</span>
            </div>
            <div className="flex justify-between font-medium">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
            <p className="text-xs text-ink-subtle text-center">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-ink text-cream py-4 text-xs tracking-widest uppercase hover:bg-ink/80 transition-colors duration-200">
              Proceed to Checkout
            </button>
            <button
              onClick={closeDrawer}
              className="w-full border border-ink/20 text-ink py-3 text-xs tracking-widest uppercase hover:border-gold hover:text-gold transition-all duration-200"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
