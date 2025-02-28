import { useContext, useRef } from "react";
import { CartContext } from "../context/CartContext";
import {
  Heading,
  VStack,
  Stack,
  Text,
  Image,
  ButtonGroup,
  Button,
  HStack,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { FaRegTrashAlt } from "react-icons/fa";

const Checkout = () => {
  const { cart, deleteItem, updateQuantity, totalPrice } = useContext(CartContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  return (
    <VStack p={10} spacing={6} align="center">
      <Heading>Tu carrito</Heading>

      {cart.length === 0 ? (
        <Text>No hay productos en tu carrito</Text>
      ) : (
        cart.map((item) => (
          <HStack key={item.id} w="100%" justify="space-between" align="center" spacing={6} p={4} bg="white" borderRadius={10}>
            <Image src={item.image} alt={item.name} borderRadius="md" boxSize="80px" objectFit="cover" />

            <Stack flex="1" spacing={1}>
              <Text fontSize="lg" fontWeight="bold">{item.name}</Text>
              <Text fontSize="sm" color="gray.500">Cantidad: {item.quantity}</Text>
              <Text fontSize="md" fontWeight="bold">${item.price * item.quantity}</Text>
            </Stack>

            <ButtonGroup spacing={4} size="sm" alignItems="center">
              <Button onClick={() => item.quantity > 1 && updateQuantity(item.id, item.quantity - 1)} variant="unstyled" color="grey">-</Button>
              <Text>{item.quantity}</Text>
              <Button onClick={() => updateQuantity(item.id, item.quantity + 1)} variant="unstyled" color="grey">+</Button>
              <Button onClick={() => deleteItem(item.id)} variant="unstyled" color="orange">
                <FaRegTrashAlt />
              </Button>
            </ButtonGroup>
          </HStack>
        ))
      )}

      {cart.length > 0 && (
        <Stack align="center">
          <Text fontSize="xl" fontWeight="bold">Total: ${totalPrice()}</Text>
          <Button colorScheme="blue" onClick={onOpen}>Finalizar compra</Button>
        </Stack>
      )}

      <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">Compra realizada</AlertDialogHeader>
            <AlertDialogBody>¡Gracias por tu compra! Te enviaremos un correo con los detalles.</AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>Cerrar</Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </VStack>
  );
};

export default Checkout;
