import { Link } from "react-router-dom";
import products from "../data/products";

function ShopPage() {
  return (
    <>
      <h1>Shop Page</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/shop/${product.slug}`}>
              {product.name} - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ShopPage;
