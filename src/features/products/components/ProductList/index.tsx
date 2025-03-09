import { Product } from "../Product";
import { ProductListProps } from "./ProductList.types";

export const ProductList = ({ products }: ProductListProps) => (
  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-12">
    {products.map((product) => (
      <Product key={product.id} product={product} />
    ))}
  </ul>
);
