import { Card, CardBody, VStack, HStack, Button, Heading, Image, Text, Stack } from "@chakra-ui/react";
import { useContext} from "react";
import { CartContext } from "../context/CartContext";
import { products } from "../data/products";
const Product = () => {

  const {addToCart, cart} = useContext(CartContext)

  return (
    <VStack>
      {products.map((product) => (
        <Card key={product.id} maxW='sm'>
          <CardBody>
            <Image src={product.source} borderRadius='lg'/>
            <Stack mt='6' spacing='3'></Stack>
              <Heading size="md">{product.name}</Heading>
              <Stack mt='6' spacing='3'></Stack>
            <HStack justifyContent={"center"}>
              <Text>${product.price} </Text>
              <Button onClick={() => addToCart(product)}>Agregar al carrito</Button>
            </HStack>{" "}
          </CardBody>
        </Card>
      ))}
    </VStack>
  );
};

export default Product;
