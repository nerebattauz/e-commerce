import {
  Stack,
  Spinner,
  Text,
  Alert,
  AlertIcon,
  Card,
  CardBody,
  CardFooter,
  Button,
  Image,
  ButtonGroup,
  Wrap,
  Heading,
  Divider,
  Box,
  VStack,
} from "@chakra-ui/react";

import { usePagination } from "../hooks/usePagination";
import { useFetch } from "../hooks/useFetch";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const ProductList = () => {
  const { data, loading, error } = useFetch();
  const { next, prev } = usePagination();
  const { addToCart } = useContext(CartContext);

  return (
    <VStack justify={"space-between"}>
      <Wrap justify="center">
        {loading && (
          <Stack>
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

        {data && (
          <Wrap spacing={10}>
            {data.map((product) => (
            <Card w={300} key={product.id}>
              <CardBody>
                <Image
                  src={product.image}
                  alt={product.name}
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{product.name}</Heading>

                  <Text color="blue.600" fontSize="2xl">
                    ${product.price}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button
                    as={NavLink}
                    to={`/products/${product.id}`}
                    variant="solid"
                    colorScheme="blue"
                  >
                    Ir a detalles
                  </Button>
                  <Button
                    variant="ghost"
                    colorScheme="blue"
                    onClick={() => {
                      addToCart(product);
                    }}
                  >
                    Agregar al carrito
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
            ))}
          </Wrap>
        )}
      </Wrap>
      <ButtonGroup>
        <Button colorScheme="teal" onClick={prev}>
          Anterior
        </Button>
        <Button colorScheme="teal" onClick={next}>
          Siguiente
        </Button>
      </ButtonGroup>
    </VStack>
  );
};

export default ProductList;
