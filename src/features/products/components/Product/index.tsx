import { ProductProps } from "./Product.types";
import { Link } from "react-router-dom";
import { Button } from "../../../../shared/components/Button";
import { useCartStore } from "../../../../shared/stores/cartStore";
export const Product = ({ product }: ProductProps) => {
  const { addItem } = useCartStore();

  return (
    <li className="product">
      <Link to={`/product/${product.id}`}>
        <img
          className="aspect-square object-contain "
          src={product.image}
          alt={product.title}
        />
        <div className="mt-4 text-center">
          <h4
            className="text-xl font-bold h-14 line-clamp-2 overflow-hidden text-ellipsis"
            title={product.title}
          >
            {product.title}
          </h4>
          <h6 className="mt-2 text-xl">${product.price.toFixed(2)}</h6>
        </div>
      </Link>
      <div className="mt-2 w-full flex justify-center">
        <Button style="filled" onClick={() => addItem(product)}>
          Add to cart
        </Button>
      </div>
    </li>
  );
};
