import { useState, createContext, useEffect, useContext } from "react";
import { db } from "../firebase/config";
import { doc, setDoc, getDoc, onSnapshot } from "firebase/firestore";
import { useUser } from "./UserContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { user } = useUser();

  const saveCartToFirestore = async (cartItems) => {
    if (!user) return;
  
    try {
      console.log("Intentando guardar en Firestore:", cartItems);
      const cartRef = doc(db, "carts", user.uid);
      await setDoc(cartRef, { items: cartItems }, { merge: true });
      console.log("Carrito guardado con éxito en Firestore.");
    } catch (error) {
      console.error("Error al guardar el carrito en Firestore:", error);
    }
  };

  const loadCartFromFirestore = async () => {
    if (!user) return;

    try {
      const cartRef = doc(db, "carts", user.uid);
      const cartSnap = await getDoc(cartRef);

      if (cartSnap.exists() && cartSnap.data().items) {
        setCart(cartSnap.data().items);
      } else {
        setCart([]);
      }
    } catch (error) {
      console.error("Error al cargar el carrito desde Firestore:", error);
    }
  };

  // Escuchar cambios en tiempo real del carrito en Firestore
  useEffect(() => {
    if (user) {
      console.log("Cargando carrito desde Firestore");
      loadCartFromFirestore();
    }
  }, [user]); // Se ejecuta cuando el usuario cambia
  
  useEffect(() => {
    if (user && cart.length > 0) {
      console.log("Guardando carrito en Firestore", cart);
      saveCartToFirestore(cart);
    }
  }, [cart]); 

  const addToCart = (product) => {
    setCart((prev) => {
      const existingProduct = prev.find((item) => item.id === product.id);
      if (existingProduct) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };
  
  const deleteItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };
  
  const updateQuantity = (id, newQuantity) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const totalProducts = () =>
    cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        addToCart,
        deleteItem,
        updateQuantity,
        totalProducts,
        cart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};