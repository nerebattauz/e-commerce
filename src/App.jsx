import "./App.css";
import Product from "./components/Product";
import { CartProvider } from "./context/CartContext";
import { UserProvider, UserContext } from "./context/UserContext.jsx";
import Cart from "./components/Cart";
import Registration from "./components/Registration.jsx";
import UserDashboard from "./components/userDashboard.jsx";
import { useContext } from "react";

function AppContent() {
  const { user } = useContext(UserContext);

  return (
    <CartProvider>
      {user ? <UserDashboard /> : <Registration />}
      <Cart />
      <Product />
    </CartProvider>
  );
}

function App() {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}

export default App;



/* import "./App.css";
import Product from "./components/Product";
import { CartProvider } from "./context/CartContext";
import { UserContext, UserProvider } from "./context/UserContext.jsx";
import Cart from "./components/Cart";
import Registration from "./components/Registration.jsx";
import UserDashboard from "./components/userDashboard.jsx";
import { useContext } from "react";

function App() {
  const {user} = useContext(UserContext)
  return (
    <>
      <UserProvider>
        {user? <UserDashboard />: <Registration />}
        <CartProvider>
          <Cart />
          <Registration />
          <Product />
        </CartProvider>
      </UserProvider>
    </>
  );
}

export default App; */