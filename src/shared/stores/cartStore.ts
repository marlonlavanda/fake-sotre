import { create } from "zustand";
import { Product } from "../../features/products/types/Product";

interface CartState {
  items: Product[];
  addItem: (product: Product) => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addItem: (product) => set((state) => ({ items: [...state.items, product] })),
}));
