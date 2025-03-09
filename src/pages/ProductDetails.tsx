import { useParams } from "react-router";
import { useProductDetails } from "../features/products/hooks/useProductDetails";
import { FeaturedProduct } from "../features/products/components/FeaturedProduct";

const ProductDetails = () => {
  const paramId = useParams();
  const id = paramId.id ? parseInt(paramId.id) : 0;
  const { data: product, isLoading, isError, error } = useProductDetails(id);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;

  return <>{product && <FeaturedProduct product={product} />}</>;
};

export default ProductDetails;
