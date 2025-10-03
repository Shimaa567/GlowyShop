import axios from "axios";
import type { Product } from "../types";

const productsApi = axios.create({
  baseURL: "https://dummyjson.com/products",
});

export async function getProducts(): Promise<Product[]> {
  const response = await productsApi.get("/");
  return response.data.products;
}
