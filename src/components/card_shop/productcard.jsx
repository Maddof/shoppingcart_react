import styles from "./productcard.module.css";
import { Link } from "react-router-dom";
import AtcButtonShop from "./atc_button/atcButton";

function ProductCard({ product }) {
  return (
    <div className={styles.cardWrapper}>
      <Link to={`/shop/${product.slug}`}>
        <img src={product.imgUrl} className={styles.productCardImg} />
      </Link>
      <div className={styles.cardWrapperBottom}>
        <Link to={`/shop/${product.slug}`}>
          <h2>{product.name}</h2>
        </Link>
        <div className={styles.atcWrapper}>
          <AtcButtonShop product={product} />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
