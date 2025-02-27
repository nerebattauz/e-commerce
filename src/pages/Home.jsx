import Cart from "../components/Cart"
import ProductList from "../components/ProductList"
import { Box } from "@chakra-ui/react"
const Home = () => {
  return (
    <Box p={20}>
      <Cart/>
      <ProductList/>
    </Box>
  )
}

export default Home
