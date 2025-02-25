import { Route, Routes } from "react-router-dom";
import ProductDetails from "../pages/ProductDetails.jsx";
import Error404 from "../components/Error404.jsx";
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
import Logout from "../pages/Logout.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/footer.jsx";

const AppRoutes = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={user ? <UserDashboard /> : <Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/account" element={<Account />}>
            <Route path="cart" element={<Product />} />
            <Route path="cart2" element={<ProductList />} />
          </Route>
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;
