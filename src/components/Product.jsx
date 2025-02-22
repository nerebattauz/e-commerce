import { Card, CardBody, VStack, HStack, Button, Heading, Image, Text, Stack } from "@chakra-ui/react";
import { useContext} from "react";
import { CartContext } from "../context/CartContext";

const Product = () => {
  const products = [
    {
      id: "01",
      name: "Cartera Sidney",
      description: "Cartera negra tamaño pequeño",
      quantity: 0,
      source:
        "https://equipovallejo.vtexassets.com/arquivos/ids/265470-800-auto?v=638334990213130000&width=800&height=auto&aspect=true",
      price: 45000,
      color: "black",
    },
    {
        id: "02",
      name: "Cartera Toscana",
      description: "Cartera verde grande",
      quantity: 0,
      source:
        "https://briganti.com.ar/cdn/shop/files/MMCR620700V1-02_800x.jpg?v=1688994124",
      price: 2500,
      color: "green",
    },
  ];


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
