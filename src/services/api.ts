import axios, { AxiosError } from "axios";
import { Product } from "../features/products/types/Product";

// Define a custom error type for API failures
interface ApiError {
  message: string;
  status?: number;
}

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

const apiCall = async <T>(
  method: "get" | "post" | "put" | "delete",
  url: string,
  data?: unknown
): Promise<T> => {
  try {
    const response = await api.request<T>({ method, url, data });
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    const apiError: ApiError = {
      message: axiosError?.message || "An unexpected error occurred",
      status: axiosError.response?.status,
    };
    throw apiError;
  }
};

// API endpoints
export const fetchProducts = () => apiCall<Product[]>("get", "/products");
export const fetchProductById = (id: number) =>
  api.get<Product>(`/products/${id}`).then((res) => res.data);
