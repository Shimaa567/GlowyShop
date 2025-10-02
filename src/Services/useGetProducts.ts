import { useQuery } from "@tanstack/react-query";

import { getProducts } from "../data/products";

import type { Product } from "../types";


export function useGetProducts() {
  return useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: getProducts,  
  });
}