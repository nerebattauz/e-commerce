import { VStack, HStack, Button, Text } from "@chakra-ui/react";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";

const Products = () => {

  return (
    <HStack m={50} mr={300} flex={"flex"} justify={"space-between"} align={"start"} spacing={100}>
      <VStack textAlign={"left"}>
        <Text>Filtrar por:</Text>
        <Text bg={"none"} > Polaroids </Text>
        <Text bg={"none"} > Stickers </Text>
        <Text bg={"none"} > Posters </Text>
        <Text bg={"none"} > Cuadros </Text>
      </VStack>
      <Cart/>
      <ProductList/>
    </HStack>
  );
};

export default Products;
