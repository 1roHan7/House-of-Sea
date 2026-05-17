export type Metal = "gold" | "silver" | "gold-plated" | "oxidised";
export type Category = "rings" | "necklaces" | "earrings" | "bracelets";
export type SortOption = "featured" | "price-asc" | "price-desc" | "newest";

export interface ProductVariant {
  id: string;
  title: string;
  size?: string;
  material?: string;
  price?: number;
  inStock: boolean;
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  price: number;
  compareAtPrice?: number;
  images: string[];
  category: Category;
  collection: string;
  metal: Metal;
  description: string;
  details: string[];
  variants: ProductVariant[];
  featured: boolean;
  isNew: boolean;
  inStock: boolean;
}

export interface Collection {
  id: string;
  slug: string;
  title: string;
  description: string;
  tagline: string;
  coverImage: string;
  heroImage: string;
  productCount: number;
}

export interface CartItem {
  product: Product;
  variant: ProductVariant;
  quantity: number;
}

export interface FilterState {
  category: Category | "all";
  metal: Metal | "all";
  minPrice: number;
  maxPrice: number;
  sort: SortOption;
}
