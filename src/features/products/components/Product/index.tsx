import { ProductProps } from "./Product.types";
import { Link } from "react-router-dom";
export const Product = ({ product }: ProductProps) => (
  <li className="product">
    <Link to={`/product/${product.id}`}>
      <img src={product.image} alt={product.name} />
    </Link>
    <h2>{product.name}</h2>
    <p>{product.description}</p>
    <p>{product.price}</p>
  </li>
);
