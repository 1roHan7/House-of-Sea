"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartItem, Product, ProductVariant } from "@/types";

interface CartStore {
  items: CartItem[];
  isDrawerOpen: boolean;
  addItem: (product: Product, variant: ProductVariant) => void;
  removeItem: (productId: string, variantId: string) => void;
  updateQuantity: (productId: string, variantId: string, quantity: number) => void;
  clearCart: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;
  itemCount: () => number;
  subtotal: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isDrawerOpen: false,

      addItem: (product, variant) => {
        const { items } = get();
        const existing = items.find(
          (i) => i.product.id === product.id && i.variant.id === variant.id
        );

        if (existing) {
          set({
            items: items.map((i) =>
              i.product.id === product.id && i.variant.id === variant.id
                ? { ...i, quantity: i.quantity + 1 }
                : i
            ),
            isDrawerOpen: true,
          });
        } else {
          set({
            items: [...items, { product, variant, quantity: 1 }],
            isDrawerOpen: true,
          });
        }
      },

      removeItem: (productId, variantId) => {
        set({
          items: get().items.filter(
            (i) => !(i.product.id === productId && i.variant.id === variantId)
          ),
        });
      },

      updateQuantity: (productId, variantId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId, variantId);
          return;
        }
        set({
          items: get().items.map((i) =>
            i.product.id === productId && i.variant.id === variantId
              ? { ...i, quantity }
              : i
          ),
        });
      },

      clearCart: () => set({ items: [] }),
      openDrawer: () => set({ isDrawerOpen: true }),
      closeDrawer: () => set({ isDrawerOpen: false }),
      toggleDrawer: () => set({ isDrawerOpen: !get().isDrawerOpen }),

      itemCount: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
      subtotal: () =>
        get().items.reduce(
          (sum, i) => sum + (i.variant.price ?? i.product.price) * i.quantity,
          0
        ),
    }),
    {
      name: "hos-cart",
      partialize: (state) => ({ items: state.items }),
    }
  )
);
