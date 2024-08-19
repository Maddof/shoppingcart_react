import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import products from "../data/products";
import AtcButtonShop from "../components/card_shop/atc_button/atcButton";

function ProductPage() {
  // Use the useParams hook to get the 'slug' parameter from the URL
  const { slug } = useParams();

  // Looking for the current product
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <>
      <h1>Product Page</h1>
      <Link to="/shop"> Return to shop</Link>
      <h2>{product.name}</h2>
      <img src={product.imgUrl} />
      <p>Price: {product.price}</p>
      <p>Id: {product.id}</p>
      <br />
      <AtcButtonShop product={product} />
    </>
  );
}

export default ProductPage;
