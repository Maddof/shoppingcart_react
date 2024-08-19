import React, { useContext } from "react";
import CartContext from "./cartContext";
import styles from "./cart.module.css";
import { Link } from "react-router-dom";

function UserCart() {
  const {
    cart,
    removeFromCart,
    totalQuantity,
    subtotal,
    addToCart,
    subtractItemFromCart,
  } = useContext(CartContext);

  return (
    <div className={styles.cartWrapper}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className={styles.cartWrapperActive}>
          <div className={styles.col1}>
            <ul>
              {cart.map((item) => (
                <li key={item.id} className={styles.cartItem}>
                  <div className={styles.cartWrapperActiveImg}>
                    <Link to={`/shop/${item.slug}`}>
                      <img
                        src={item.imgUrl}
                        alt={item.name}
                        className={styles.cartItemImg}
                      />
                    </Link>
                  </div>
                  <div className={styles.cartWrapperActiveInfo}>
                    <h3>{item.name}</h3>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: ${item.price}</p>
                  </div>
                  <div className={styles.cartWrapperActiveButton}>
                    <button onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                    <button onClick={() => addToCart(item)}>+1</button>
                    <button onClick={() => subtractItemFromCart(item)}>
                      -1
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.col2}>
            <h2>SUBTOTAL</h2>
            <p>{subtotal} USD</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserCart;
