import { Box } from "@chakra-ui/react";
import "./App.css";
import AppRoutes from "./routes/AppRoutes.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/footer.jsx";
function App() {
  return (
    <Box m="0" p="0" w="100vw" minH="100vh" overflowX="hidden">
      <Navbar />
      <AppRoutes />
      <Footer mb="0" />
    </Box>
  );
}

export default App;
