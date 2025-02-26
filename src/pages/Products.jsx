import { VStack } from "@chakra-ui/react";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
const Products = () => {
  return (
    <VStack>
      <Cart/>
      <ProductList/>
    </VStack>
  );
};

export default Products;
