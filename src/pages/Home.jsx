import Cart from "../components/Cart"
import Hero from "../components/hero"
import ProductList from "../components/ProductList"
import { VStack, Heading } from "@chakra-ui/react"
const Home = () => {
  return (
    
    <VStack px={20} gap={50}>
      <Cart/>
      <Hero/>
      <Heading textAlign={"left"}>Productos destacados</Heading>
      <ProductList/>
    </VStack>
  )
}

export default Home
