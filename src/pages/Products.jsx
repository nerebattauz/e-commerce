import { VStack, HStack, Button, Text, Tag, Heading } from "@chakra-ui/react";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";

const Products = () => {

  return (
    <VStack p={20} flex={"flex"} align={"center"} spacing={10}>
      <Heading textAlign={"left"}>Productos</Heading>
      <HStack  >
      <Button variant={"chips"} bg={"pink"} borderRadius={"100px"}> Ver todos los productos </Button>
        <Button variant={"chips"} > Polaroids </Button>
        <Button variant={"chips"} > Stickers </Button>
        <Button variant={"chips"} > Posters </Button>
        <Button variant={"chips"} > Cuadros </Button>
      </HStack>
      <Cart/>
      <ProductList />
    </VStack>
  );
};

export default Products;
