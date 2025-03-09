import { useProducts } from "../../hooks/useProducts";
import { ProductList } from "../ProductList";
export const ProductSection = () => {
  const { data: products, isLoading, isError, error } = useProducts();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <section className="product-section">
      <h1>This is the product section</h1>
      <ProductList products={products || []} />
    </section>
  );
};
