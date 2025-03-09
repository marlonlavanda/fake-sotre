import { useParams } from "react-router";

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <>
      <div>Product Details</div>
      <h1>{id}</h1>
    </>
  );
};

export default ProductDetails;
