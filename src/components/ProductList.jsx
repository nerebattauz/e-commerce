import {
  Stack,
  Spinner,
  Text,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure, 
  Card,
  CardBody,
  CardFooter,
  Button,
  Image,
  ButtonGroup,
  SimpleGrid,
  Heading,
  Divider,
  VStack,
} from "@chakra-ui/react";
import { usePagination } from "../hooks/usePagination";
import { useFetch } from "../hooks/useFetch";
import { useUser } from "../context/UserContext";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext, useState, useRef } from "react";

const ProductList = ({ filter }) => {
  const { data, loading, error } = useFetch();
  const { addToCart } = useContext(CartContext);
  const { user } = useUser();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const filteredData = filter
    ? data.filter((product) => product.type === filter)
    : data;

  const handleClick = (product) => {
    if (user) {
      addToCart(product);
    } else {
      onOpen();
    }
  };

  return (
    <VStack align={"center"} justify={"center"}>
      {loading && (
        <Stack align={"center"} justify={"center"}>
          <Spinner size="lg" />
          <Text>Cargando productos...</Text>
        </Stack>
      )}

      {error && (
        <Alert status="error">
          <AlertIcon />
          Ocurrió un error al cargar los productos.
        </Alert>
      )}

      {filteredData && (
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
          spacing={6}
          w="full"
          justifyContent="center"
        >
          {filteredData.map((product) => (
            <Card w={300} variant={"product"} key={product.id}>
              <CardBody variant={"product"}>
                <Image
                  src={product.image}
                  alt={product.name}
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="sm">{product.name}</Heading>
                  <Text variant={"price"}>${product.price}</Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2" justifyContent={"center"}>
                  <Button
                    as={NavLink}
                    to={`/products/${product.id}`}
                    variant="solid"
                    colorScheme="blue"
                  >
                    Detalles
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => handleClick(product)}
                  >
                    Agregar al carrito
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      )}

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

export default ProductList;

{
  /* <ButtonGroup>
        <Button colorScheme="teal" onClick={prev}>
          Anterior
        </Button>
        <Button colorScheme="teal" onClick={next}>
          Siguiente
        </Button>
      </ButtonGroup> */
}
