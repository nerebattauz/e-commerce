import "./App.css";
import Product from "./components/Product";
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext.jsx";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <UserProvider>
        <CartProvider>
          <Cart />
          <Product />
        </CartProvider>
      </UserProvider>
    </>
  );
}

export default App;
