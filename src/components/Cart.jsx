import {
  Button,
  Drawer,
  DrawerOverlay,
  useDisclosure,
  DrawerHeader,
  DrawerContent,
  DrawerBody,
  Text,
  Stack,
  Box,
  DrawerFooter
} from "@chakra-ui/react";
import { useState, useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement] = useState("right");
  const { cart, deleteItem } = useContext(CartContext);

  return (
    <>
      <Button onClick={onOpen} colorScheme="teal" position="fixed" bottom="20px" right="20px">Ver carrito ({cart.length})</Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>Carrito de compras</DrawerHeader>
          <DrawerBody>
          {cart.length === 0 ? (
            <Text>No hay productos en tu carrito</Text>
          ) : (
            <Stack spacing={4}>
                {cart.map((product) => (
                  <Box
                    key={product.id}
                    p={4}
                    border="1px"
                    borderColor="gray.200"
                    borderRadius="md"
                  >
                    <Text fontSize="lg" fontWeight="bold">
                      {product.name}
                    </Text>
                    <Text>Precio: ${product.price}</Text>
                    <Button
                      mt={2}
                      colorScheme="red"
                      onClick={() => deleteItem(product.id)}
                    >
                      Eliminar producto
                    </Button>
                  </Box>
                ))}
              </Stack>
          )}
        </DrawerBody>
        
        
        <DrawerFooter>
        <Button onClick={onClose}>Cerrar</Button>
        </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;