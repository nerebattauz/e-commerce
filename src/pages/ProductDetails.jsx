import { useParams, useNavigate } from "react-router-dom";
import { useMemo, useContext, useRef } from "react";
import Error404 from "../pages/Error404";
import {
  Button,
  ButtonGroup,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  VStack,
  Stack,
  Spinner,
  Text,
  Card,
  CardBody,
  Heading,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useFetch } from "../hooks/useFetch";
import { CartContext } from "../context/CartContext";
import { useUser } from "../context/UserContext";
import Cart from "../components/Cart";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch();
  const { updateQuantity, addToCart, cart } = useContext(CartContext);
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const { user } = useUser();

  const product = useMemo(() => data?.find((e) => e.id === id), [id, data]);
  const cartItem = cart.find((item) => item.id === product?.id);

  const handleClick = () => {
    if (user) {
      addToCart(product);
    } else {
      onOpen();
    }
  };

  const handleQuantityChange = (amount) => {
    if (cartItem) {
      const newQuantity = cartItem.quantity + amount;
      if (newQuantity > 0) {
        updateQuantity(cartItem.id, newQuantity);
      }
    } else {
      addToCart({ ...product, quantity: 1 });
    }
  };

  if (loading) {
    return (
      <VStack justify="center" h="80vh">
        <Spinner size="lg" />
      </VStack>
    );
  }

  if (error) {
    return <Text color="red.500">Error al cargar los datos.</Text>;
  }

  if (!product) {
    return <Error404 />;
  }

  return (
    <VStack spacing={6} p={8} align="center">
      {user && <Cart />}
      <Card w="full" maxW="900px" p={6} shadow="lg" borderRadius="lg">
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 2fr" }}
          gap={6}
          alignItems="center"
        >
          <GridItem>
            <Image
              src={product.image}
              alt={product.name}
              borderRadius="lg"
              objectFit="cover"
              maxH="400px"
              w="100%"
            />
          </GridItem>
          <GridItem>
            <CardBody>
              <Heading size="lg">{product.name}</Heading>
              <Text fontSize="xl" color="orange" fontWeight="bold" mt={2}>
                ${product.price}
              </Text>
              <Stack spacing={2} mt={4}>
                <Text>{product.description}</Text>
              </Stack>
              <Stack spacing={2} mt={4}>
                <Text>Medidas: {product.characteristics.size}</Text>
                <Text>Cantidad: {product.characteristics.quantity}</Text>
                <Text>Material: {product.characteristics.paper}</Text>
                <Text>Impresión: {product.characteristics.print}</Text>
              </Stack>
              {user && (
                <Stack direction="row" align="center" mt={4} fontWeight={"bold"} >
                  <Text color={"orange"} >Cantidad en carrito: </Text>
                  <ButtonGroup size="sm" alignItems={"center"}>
                    <Button
                      onClick={() => handleQuantityChange(-1)}
                      variant={"unstyled"}
                     
                    >
                      -
                    </Button>
                    <Text color={"black"}>{cartItem ? cartItem.quantity : 0}</Text>
                    <Button
                      onClick={() => handleQuantityChange(1)}
                      variant={"unstyled"}
                     
                    >
                      +
                    </Button>
                  </ButtonGroup>
                </Stack>
              )}
              <ButtonGroup mt={6}>
                <Button variant="outlined" onClick={() => navigate(-1)}>
                  Volver
                </Button>
                {!user && (<Button colorScheme="blue" onClick={handleClick}>
                  Agregar al carrito
                </Button>)}
              </ButtonGroup>
            </CardBody>
          </GridItem>
        </Grid>
      </Card>
      {!user && (
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Ingresá a tu cuenta
              </AlertDialogHeader>
              <AlertDialogBody>
                Debés iniciar sesión para agregar productos al carrito.
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cerrar
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      )}
    </VStack>
  );
};

export default ProductDetails;
