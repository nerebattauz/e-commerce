import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    const doubleProducts = cart.find(
      (doubleProduct) => doubleProduct.id === product.id
    );
    if (doubleProducts) {
        setCart( cart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity +1 } : item))
    } else {
        setCart((prev) => [...prev, { ...product, quantity: (product.quantity || 0) + 1 }]);
    }
  };

  const deleteItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };
  const totalProducts = () => cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ addToCart, deleteItem, cart, totalProducts }}>
      {children}
    </CartContext.Provider>
  );
};
