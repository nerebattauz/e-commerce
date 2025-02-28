import { Box } from "@chakra-ui/react";
import "./App.css";
import AppRoutes from "./routes/AppRoutes.jsx";
import Header from "./components/Header.jsx";
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
      <Header />
      <Box flex="1">
        <AppRoutes />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
