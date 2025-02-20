import "./App.css";
import Product from "./components/Product";
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext.jsx";
import Cart from "./components/Cart";
import Login from "./components/login.jsx";

function App() {
  return (
    <>
      <UserProvider>
        <CartProvider>
          <Cart />
          <Login />
          <Product />
        </CartProvider>
      </UserProvider>
    </>
  );
}

export default App;
