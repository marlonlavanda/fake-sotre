import { useQuery } from "@tanstack/react-query";
import { Product } from "../types/Product";
import { fetchProductById } from "../../../services/api";

export const useProductDetails = (id: number) => {
  return useQuery<Product, Error>({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
  });
};
