import { FeaturedProductProps } from "./FeaturedProduct.types";
import { Button } from "../../../../shared/components/Button";
export const FeaturedProduct = ({ product }: FeaturedProductProps) => {
  return (
    <section
      id={`product-${product.id}`}
      className="section featured-product-section py-8"
    >
      <div className="container flex gap-8">
        <div className="product-image w-1/2">
          <img
            className="aspect-square object-contain"
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className="product-summary w-1/2">
          <h2 className="text-3xl font-bold">{product?.title}</h2>{" "}
          <p>{product.description}</p>
          <Button style="filled">Add to cart</Button>
        </div>
      </div>
    </section>
  );
};
