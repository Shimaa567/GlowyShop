import CardSkeleton from "./components/CardSkeleton";
import EmptyState from "./components/EmptyState";
import ErrorState from "./components/ErrorState";
import FiltersGroup from "./components/Filters/FiltersGroup";
import ProductCard from "./components/ProductCard";
import useDebounce from "./hooks/useDebounce";
import { useGetProducts } from "./services/useGetProducts";

import { useSearchParams } from "react-router";
import "./App.css";
import { filterAndSortingProducts } from "./components/Filters/FilterAndSortingProducts";
import type { FilterOptions } from "./types";

function App() {
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search") ?? "";

  const debouncedSearch = useDebounce({ delay: 300, searchText: search });

  const { data: products, isPending, isError, refetch } = useGetProducts();

  const isSearching = search !== debouncedSearch;

  const categories = [...new Set(products?.map((p) => p.category) || [])];

  const filters: FilterOptions = {
    search,
    sort: (searchParams.get("sort") as FilterOptions["sort"]) || null,
    minPrice: searchParams.get("minPrice") || "",
    maxPrice: searchParams.get("maxPrice") || "",
    category: searchParams.get("category") || "",
  };

  const filteredProducts = filterAndSortingProducts(
    products || [],
    filters,
    debouncedSearch
  );

  if (isPending) {
    return (
      <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="grid h-full">
        <ErrorState refetchProducts={refetch} />
      </div>
    );
  }

  return (
    <div className="container flex flex-col gap-4 mx-auto">
      <div className="relative space-y-2">
        <div className="flex flex-col gap-2 p-4 rounded-md bg-slate-50/50">
          <h1 className="text-3xl font-semibold">Glowy Shop 💄💅🏼</h1>
          <h3 className="text-xl">
            Made to fit every woman’s lifestyle, delivered with love.
          </h3>

          <FiltersGroup isSearching={isSearching} categories={categories} />
        </div>
      </div>
      {filteredProducts?.length ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </div>
  );
}

export default App;
