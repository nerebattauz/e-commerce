import "./App.css";

import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";

function App() {
  return (
    <UserProvider>
        <CartProvider>
          <AppRoutes />
        </CartProvider>
    </UserProvider>
  );
}

export default App;
