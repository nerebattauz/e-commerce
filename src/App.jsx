import "./App.css";
import Product from "./components/Product";
import { CartProvider } from "./context/CartContext";
import { UserProvider, UserContext } from "./context/UserContext.jsx";
import Cart from "./components/Cart";
import Account from "./pages/Account.jsx";
import Register from "./components/Register.jsx";
import UserDashboard from "./components/userDashboard.jsx";
import { useContext } from "react";
import ProductList from "./components/ProductList.jsx";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails.jsx";
import Error404 from "./components/Error404.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
function AppContent() {
  const { user } = useContext(UserContext);

  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/login"
          element={user ? <UserDashboard /> : <Register />}
        />
        <Route element={<ProtectedRoute />}>
          <Route path="/account" element={<Account />}>
            <Route path="cart" element={<Product />} />
            <Route path="cart2" element={<ProductList />} />
          </Route>
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Cart />
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
