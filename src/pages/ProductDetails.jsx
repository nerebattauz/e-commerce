import { useParams, useNavigate } from "react-router-dom";
import { useMemo } from "react";
import Error404 from "../components/Error404";
import {
  Button,
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
import { div } from "framer-motion/client";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch();
  const navigate = useNavigate();
  console.log(id);

  const product = useMemo(() => {
    return data?.find((e) => e.id === id);
  }, [id, data]);

  if (loading) {
    return (
      <Stack>
        <Spinner size="lg" />
      </Stack>
    );
  }

  if (error) {
    return <Text color="red.500">Error al cargar los datos.</Text>;
  }

  return (
    <Stack>
      {product ? (
        <Card
          key={product.id}
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src={product.image}
            alt={product.name}
          />

          <Stack>
            <CardBody>
              <Heading size="md">{product.name}</Heading>

              <Text py="2">{product.description}</Text>
            </CardBody>

            <CardFooter>
              <Button variant="solid" colorScheme="blue">
                Agregar al carrito{" "}
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      ) : (
        <Error404 />
      )}

      <Button onClick={() => navigate(-1, { replace: true })}>
        Volver a la página anterior
      </Button>
    </Stack>
  );
};

export default ProductDetails;
