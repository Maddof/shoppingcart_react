import products from "../data/products";
import ProductCard from "../components/card_shop/productcard";

function ShopPage() {
  return (
    <>
      <h1>Shop Page</h1>
      <ul className="product-cards-list">
        {products.map((product) => (
          <li key={product.id} className={"prod-" + product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ShopPage;
