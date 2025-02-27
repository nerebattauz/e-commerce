import { Route, Routes } from "react-router-dom";
import ProductDetails from "../pages/ProductDetails.jsx";
import Error404 from "../pages/Error404.jsx";
import ProtectedRoute from "../components/ProtectedRoute.jsx";
import Product from "../components/Product";
import Account from "../pages/Account.jsx";
import Register from "../pages/Register.jsx";
import Login from "../pages/Login.jsx";
import UserDashboard from "../components/userDashboard.jsx";
import ProductList from "../components/ProductList.jsx";
import Cart from "../components/Cart";
import { useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";

import Products from "../pages/Products.jsx";
import Home from "../pages/Home.jsx";
const AppRoutes = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/account" element={<Account />}>
            <Route path="cart" element={<Product />} />
            <Route path="cart2" element={<ProductList />} />
          </Route>
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
