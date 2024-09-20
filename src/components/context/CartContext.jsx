import { createContext, useState, useContext } from "react";

export const CartContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};
