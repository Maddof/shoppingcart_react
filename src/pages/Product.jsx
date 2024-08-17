import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductPage() {
  // Use the useParams hook to get the 'slug' parameter from the URL
  const { slug } = useParams();

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <>
      <h1>Product Page</h1>
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>
      <p>Id: {product.id}</p>
      <br />
      <Link to="/shop"> Return to shop</Link>
    </>
  );
}

export default ProductPage;
