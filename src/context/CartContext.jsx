
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        setCart((prev) => [...prev, product])
        console.log(cart)
    }
    const deleteItem  = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id))
    }
    return <CartContext.Provider value={{addToCart, deleteItem, cart}}>{children}</CartContext.Provider>
}