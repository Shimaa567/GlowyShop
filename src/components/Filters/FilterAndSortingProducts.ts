import type { FilterOptions, Product } from "@/types";

export function filterAndSortingProducts(
  products: Product[],
  filters: FilterOptions,
  debouncedSearch: string
): Product[] {
  let filteredProducts: Product[] = [...products];

  const minPrice = filters.minPrice
    ? Number.parseFloat(filters.minPrice)
    : null;
  const maxPrice = filters.maxPrice
    ? Number.parseFloat(filters.maxPrice)
    : null;

  if (filters.search) {
    filteredProducts = products?.filter((product: Product) =>
      product?.title
        ?.toLocaleLowerCase()
        .includes(debouncedSearch.toLocaleLowerCase())
    );
  }

  if (filters.category) {
    filteredProducts = products?.filter(
      (product) => product.category === filters.category
    );
  }

  if (minPrice !== null) {
    filteredProducts = filteredProducts.filter((p) => p.price >= minPrice);
  }

  if (maxPrice !== null) {
    filteredProducts = filteredProducts.filter((p) => p.price <= maxPrice);
  }

  if (filters.sort === "name-asc") {
    filteredProducts.sort((a: { title: string }, b: { title: string }) =>
      a.title.localeCompare(b.title)
    );
  } else if (filters.sort === "name-desc") {
    filteredProducts.sort((a: { title: string }, b: { title: string }) =>
      b.title.localeCompare(a.title)
    );
  } else if (filters.sort === "price-asc") {
    filteredProducts.sort(
      (a: { price: number }, b: { price: number }) => a.price - b.price
    );
  } else if (filters.sort === "price-desc") {
    filteredProducts.sort(
      (a: { price: number }, b: { price: number }) => b.price - a.price
    );
  }

  return filteredProducts || [];
}
