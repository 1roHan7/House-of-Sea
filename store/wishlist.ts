"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface WishlistStore {
  productIds: string[];
  toggle: (id: string) => void;
  has: (id: string) => boolean;
  clear: () => void;
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      productIds: [],

      toggle: (id) => {
        const { productIds } = get();
        set({
          productIds: productIds.includes(id)
            ? productIds.filter((p) => p !== id)
            : [...productIds, id],
        });
      },

      has: (id) => get().productIds.includes(id),

      clear: () => set({ productIds: [] }),
    }),
    { name: "hos-wishlist" }
  )
);
