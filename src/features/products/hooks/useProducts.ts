import { useQuery } from "@tanstack/react-query";
import { Product } from "../types/Product";
import { fetchProducts } from "../../../services/api";

export const useProducts = () => {
  return useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};
