export interface Product {
  id: string;
  title: string;
  images: string[];
  price: number;
  category: string;
}

export type SortOption =
  | "name-asc"
  | "name-desc"
  | "price-asc"
  | "price-desc"
  | null;

export interface FilterOptions {
  search: string;
  sort: SortOption;
  minPrice: string;
  maxPrice: string;
  category: string;
}
