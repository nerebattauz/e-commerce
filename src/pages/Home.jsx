import Cart from "../components/Cart"
import Hero from "../components/Hero"
import ProductList from "../components/ProductList"
import { VStack, Heading } from "@chakra-ui/react"
import { useUser } from "../context/UserContext"
const Home = () => {
  const {user} = useUser()
  return (
    
    <VStack p={20} gap={50}>
      {user && <Cart/>} 
      <Hero/>
      <Heading textAlign={"left"}>Productos destacados</Heading>
      <ProductList/>
    </VStack>
  )
}

export default Home
