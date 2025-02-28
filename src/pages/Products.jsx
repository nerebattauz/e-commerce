import { useState } from "react";
import { VStack, HStack, Button, Heading } from "@chakra-ui/react";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import { useUser } from "../context/UserContext";
const Products = () => {
  const [filter, setFilter] = useState(""); 
  const {user} = useUser()
  return (
    <VStack p={20} flex={"flex"} align={"center"} spacing={10}>
      <Heading textAlign={"left"}>Productos</Heading>
      <HStack>
        <Button variant={"chips"} bg={"pink"} borderRadius={"100px"} onClick={() => setFilter("")}>
          Ver todos los productos
        </Button>
        <Button variant={"chips"} onClick={() => setFilter("polaroid")}>
          Polaroids
        </Button>
        <Button variant={"chips"} onClick={() => setFilter("sticker")}>
          Stickers
        </Button>
        <Button variant={"chips"} onClick={() => setFilter("poster")}>
          Posters
        </Button>
        <Button variant={"chips"} onClick={() => setFilter("cuadro")}>
          Cuadros
        </Button>
      </HStack>
      {user && <Cart/>} 
      <ProductList filter={filter} />
    </VStack>
  );
};

export default Products;
