import React, { createContext, useState, useMemo } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  // Cart state: an array of product objects
  const [cart, setCart] = useState([]);

  const addToCart = (product, amount = 1) => {
    // The function passed to setCart gets the current value of cart as prevCart.

    setCart((prevCart) => {
      const productInCart = prevCart.find((item) => item.id === product.id);

      if (productInCart) {
        // If it's already in the cart, update the quantity
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + amount }
            : item
        );
      } else {
        // If it's not in the cart, add it with a quantity of 1
        return [...prevCart, { ...product, quantity: amount }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const subtractItemFromCart = (product) => {
    setCart((prevCart) => {
      const productInCart = prevCart.find((item) => item.id === product.id);

      if (productInCart) {
        if (productInCart.quantity > 1) {
          // If the product is in the cart and quantity is greater than 1, decrease the quantity
          return prevCart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
        } else {
          // If the product quantity is 1, remove it from the cart
          return prevCart.filter((item) => item.id !== product.id);
        }
      }

      return prevCart; // If the product is not in the cart, return the cart unchanged
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  // Function to calculate the total quantity of items in the cart
  // uses the useMemo hook to calculate totalQuantity efficiently,
  // ensuring that the calculation only happens when the cart array changes.

  const totalQuantity = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  const subtotal = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity * item.price, 0);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        totalQuantity,
        subtotal,
        subtractItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
