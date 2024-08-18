import React, { useContext } from "react";
import CartContext from "./cartContext";
import styles from "./cart.module.css";

function UserCart() {
  const { cart, removeFromCart, totalQuantity } = useContext(CartContext);

  return (
    <div className={styles.cartWrapper}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className={styles.cartItem}>
              <img
                src={item.imgUrl}
                alt={item.name}
                className={styles.cartItemImg}
              />
              <div>
                <h3>{item.name}</h3>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <p>{totalQuantity}</p>
    </div>
  );
}

export default UserCart;
