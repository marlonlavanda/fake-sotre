import { Product } from "../Product";
import { ProductListProps } from "./ProductList.types";

export const ProductList = ({ products }: ProductListProps) => (
  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {products.map((product) => (
      <Product key={product.id} product={product} />
    ))}
  </ul>
);
