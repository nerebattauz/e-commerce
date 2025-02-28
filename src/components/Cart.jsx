import {
  Card,
  HStack,
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
  Image,
  DrawerFooter,
  VStack,

} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaRegTrashAlt } from "react-icons/fa";
import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";


const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement] = useState("right");
  const {user} = useUser()
  const { cart, deleteItem, totalProducts, updateQuantity, totalPrice } =
    useContext(CartContext);

    const onSubmit = () => {
      if (user) {
        Navigate("/checkout");
      } else {
        alert("Debes iniciar sesión");
      }
    };

  return (
    <> 
      <Button
        onClick={onOpen}
        variant={"solid"}
        position="fixed"
        bottom={10}
        right={20}
        zIndex="10"
        bg={"pink"}
      >
        Ver carrito ({totalProducts()})
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>Carrito de compras ({totalProducts()})</DrawerHeader>
          <DrawerBody>
            {cart.length === 0 ? (
              <Text>No hay productos en tu carrito</Text>
            ) : (
              <VStack>
                {cart.map((product) => {
                  const subtotal = product.price * product.quantity;
                  return (
                    <Card key={product.id} p={4} align={"start"}>
                      <Image src={product.image} />
                      <Text
                        fontSize="md"
                        color={"black"}
                        fontWeight="bold"
                        mt={2}
                      >
                        {product.name}
                      </Text>

                      <HStack
                        w={"100%"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        gap={2}
                        my={0}
                      >
                        <Text>Cantidad:</Text>
                        <Button
                          p={1}
                          color={"gray"}
                          variant={"navButton"}
                          onClick={() => {
                            if (product.quantity > 1) {
                              updateQuantity(product.id, product.quantity - 1);
                            }
                          }}
                        >
                          -
                        </Button>
                        <Text>{product.quantity}</Text>
                        <Button
                          p={1}
                          color={"gray"}
                          variant={"navButton"}
                          onClick={() => {
                            updateQuantity(product.id, product.quantity + 1);
                          }}
                        >
                          +
                        </Button>
                      </HStack>

                      <HStack
                        alignItems={"center"}
                        w={"100%"}
                        justify={"space-between"}
                      >
                        <Text>Precio: ${subtotal}</Text>
                        <Button
                          variant={"navButton"}
                          color="red"
                          onClick={() => deleteItem(product.id)}
                        >
                          <FaRegTrashAlt />
                        </Button>
                      </HStack>
                    </Card>
                  );
                })}
              </VStack>
            )}
          </DrawerBody>
          <Text mx={"30px"} size="3xl" fontWeight={"bold"} color={"black"}>
            Total: ${totalPrice()}{" "}
          </Text>
          <DrawerFooter>
            <Button w={"100%"} onClick={onSubmit} >
              Iniciar compra
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      
    
    </>
  );
};

export default Cart;
