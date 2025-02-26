import { useParams, useNavigate } from "react-router-dom";
import { useMemo } from "react";
import Error404 from "../components/Error404";
import {
  Button,
  ButtonGroup,
  VStack,
  Stack,
  Spinner,
  Text,
  Card,
  CardBody,
  Heading,
  CardFooter,
  Image,
} from "@chakra-ui/react";
import { useFetch } from "../hooks/useFetch";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch();
  const { updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();
  console.log(id);

  const product = useMemo(() => {
    return data?.find((e) => e.id === id);
  }, [id, data]);

  if (loading) {
    return (
      <VStack justify="center">
        <Spinner size="lg" />
      </VStack>
    );
  }

  if (error) {
    return <Text color="red.500">Error al cargar los datos.</Text>;
  }

  return (
    <VStack>
      {product ? (
        <Card
          key={product.id}
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          my={6}
          gap={6}
        >
          <Image
            objectFit="cover"
            /* maxW={{ base: "100%", sm: "200px" }} */
            w={"50%"}
            src={product.image}
            alt={product.name}
          />

          <VStack align="start" w={"50%"} my={10}>
            <CardBody>
              <Heading align="start" size="md">
                {product.name}
              </Heading>

              <Text align="start" py="2">
                {product.description}
              </Text>

              <Text align="start" py="2">
                Cantidad por pack: {product.characteristics.quantity}
              </Text>
              <Text align="start" py="2">
                Tamaño: {product.characteristics.size}
              </Text>
              <Text align="start" py="2">
                Papel: {product.characteristics.paper}
              </Text>

              <Text align="start" py="2">
                Tipo de impresión: {product.characteristics.print}
              </Text>

              <Text>Cantidad:</Text>

              <ButtonGroup>
                <Button
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
                  onClick={() => {
                    updateQuantity(product.id, product.quantity + 1);
                  }}
                >
                  +
                </Button>
              </ButtonGroup>
            </CardBody>

            <CardFooter gap={4}>
              <Button variant="solid" colorScheme="blue">
                Agregar al carrito{" "}
              </Button>
              <Button onClick={() => navigate(-1, { replace: true })}>
                Volver a la página anterior
              </Button>
            </CardFooter>
          </VStack>
        </Card>
      ) : (
        <Error404 />
      )}
    </VStack>
  );
};

export default ProductDetails;
