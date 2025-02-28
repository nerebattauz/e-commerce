import { useState, createContext, useContext, useEffect } from "react";
import { db } from "../firebase/config";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useUser } from "./UserContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { user } = useUser();

  
  const saveCartToFirestore = async (cartItems) => {
    if (!user) return; 

    try {
      const cartRef = doc(db, "carts", user.uid);
      await setDoc(cartRef, { items: cartItems });
    } catch (error) {
      console.error("Error al guardar el carrito en Firestore:", error);
    }
  };

 //Cargar el carrito desde Firestore al iniciar sesión
  const loadCartFromFirestore = async () => {
    if (!user) return;

    try {
      const cartRef = doc(db, "carts", user.uid);
      const cartSnap = await getDoc(cartRef);

      if (cartSnap.exists()) {
        setCart(cartSnap.data().items);
      }
    } catch (error) {
      console.error("Error al cargar el carrito desde Firestore:", error);
    }
  };

//Cargar carrito cuando el usuario inicie sesión
  useEffect(() => {
    if (user) {
      loadCartFromFirestore();
    } else {
      setCart([]);
    }
  }, [user]);

  // Agregar productos al carrito
  const addToCart = (product) => {
    setCart((prev) => {
      const existingProduct = prev.find((item) => item.id === product.id);
      let updatedCart;

      if (existingProduct) {
        updatedCart = prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        updatedCart = [...prev, { ...product, quantity: 1 }];
      }

      saveCartToFirestore(updatedCart);
      return updatedCart;
    });
  };

  // Eliminar productos del carrito
  const deleteItem = (id) => {
    setCart((prev) => {
      const updatedCart = prev.filter((item) => item.id !== id);
      saveCartToFirestore(updatedCart); 
      return updatedCart;
    });
  };

  // Actualizar cantidad de productos
  const updateQuantity = (id, newQuantity) => {
    setCart((prev) => {
      const updatedCart = prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      );
      saveCartToFirestore(updatedCart); // Guardar en Firestore
      return updatedCart;
    });
  };

  const totalProducts = () => cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = () => cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ addToCart, deleteItem, updateQuantity, totalProducts, cart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
