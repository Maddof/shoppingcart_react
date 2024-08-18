import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import CartContext from "../cart/cartContext";
import { useContext } from "react";

function Nav_main() {
  const { totalQuantity } = useContext(CartContext);
  return (
    <>
      <ul className={styles.mainNav}>
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/shop">Shop</Link>
        </li>
        <li className="nav-item">
          <Link to="/cart">Cart ({totalQuantity})</Link>
        </li>
      </ul>
    </>
  );
}

export { Nav_main };
