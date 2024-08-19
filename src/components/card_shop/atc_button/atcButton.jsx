import { useContext, useState } from "react";
import CartContext from "../../cart/cartContext";
import styles from "./atcButton.module.css";

function AtcButtonShop({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [success, setSuccess] = useState(false); // Add success state
  const { addToCart } = useContext(CartContext);

  // Function to handle quantity decrement
  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };

  // Function to handle quantity increment
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Function to handle input change directly
  const handleInputChange = (event) => {
    const value = parseInt(event.target.value);
    setQuantity(value > 0 ? value : 1);
  };

  // Function to handle adding to cart and resetting quantity
  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1); // Reset quantity to 1 after adding to cart
    setSuccess(true); // Show the checkmark on success
    // Hide the checkmark after 2 seconds
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  };

  return (
    <>
      <div className={styles.atcQtyWrapper}>
        <button onClick={handleDecrement}>-</button>
        <input
          type="number"
          name="quantity-input"
          id="quantity-input"
          min="1"
          value={quantity}
          onChange={handleInputChange}
          className={styles.qtyInput}
        />
        <button onClick={handleIncrement}>+</button>

        <button
          className={styles.atcButton}
          onClick={handleAddToCart}
          disabled={success} // Disable button during success state
        >
          {success ? (
            <>
              <span>✔ Added</span>
            </>
          ) : (
            <>ADD - ${product.price * quantity}</>
          )}
        </button>
      </div>
    </>
  );
}

export default AtcButtonShop;
