import { Route, Routes } from "react-router-dom";
import ProductDetails from "../pages/ProductDetails.jsx";
import Error404 from "../pages/Error404.jsx";
import ProtectedRoute from "../components/ProtectedRoute.jsx";
import Register from "../pages/Register.jsx";
import Login from "../pages/Login.jsx";
import ProductList from "../components/ProductList.jsx";
import { useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";
import Checkout from "../pages/Checkout.jsx";
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
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/checkout" element={<Checkout />}>
            <Route path="checkout" element={<Checkout />} />
          </Route>
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
