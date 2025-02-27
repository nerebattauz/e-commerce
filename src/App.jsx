import { Box } from "@chakra-ui/react";
import "./App.css";
import AppRoutes from "./routes/AppRoutes.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minH="100dvh" 
      w="100dvw"
      overflowX="hidden"
      backgroundColor={"#efefef"}
    >
      <Navbar />
      <Box flex="1">
        <AppRoutes />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
