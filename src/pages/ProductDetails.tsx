import { useParams } from "react-router";
import { useProductDetails } from "../features/products/hooks/useProductDetails";
const ProductDetails = () => {
  const paramId = useParams();
  const id = paramId.id ? parseInt(paramId.id) : 0;
  const { data: product, isLoading, isError, error } = useProductDetails(id);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <>
      <div>Product Details</div>
      <h1 className="text-2xl font-bold">{product?.title}</h1>
    </>
  );
};

export default ProductDetails;
