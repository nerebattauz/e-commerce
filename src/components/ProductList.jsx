import { useFetch } from "../hooks/useFetch";
import {
  Stack,
  Spinner,
  Text,
  Alert,
  AlertIcon,
  Card,
  Button,
  Image,
  ButtonGroup,
  Wrap
} from "@chakra-ui/react";

import { usePagination } from "../hooks/usePagination";
import { NavLink } from "react-router-dom";
import Product from "./Product";
import Products from "../pages/Products";

const ProductList = () => {
  const { currentPage, next, prev } = usePagination();
  const { data, loading, error } = useFetch(
    `https://rickandmortyapi.com/api/character?page=${currentPage}` /* https://randomfox.ca/floof?page=${currentpage} */
  );

  if (loading) return;
  return (
    
    <div>
      <Products />
      {loading && (
        <Stack>
          <Spinner size="lg" />
          <Text>Cargando productos...</Text>
        </Stack>
      )}
      {error && (
        <Alert status="error">
          <AlertIcon />
          Ocurrió un error al cargar los productos
        </Alert>
      )}
      <Wrap>
        {data &&
          data.results.map((product) => (
            <Card key={product.id}>
              <Image
                src={product.image}
                alt={product.name}
                borderRadius="md"
                mb="4"
              />
              <Text fontSize="xl" fontWeight="bold" textAlign="center">
                {product.name}
              </Text>
              <Button>Agregar al carrito</Button>
              <Button>
                {" "}
                <NavLink to={`/products/${product.id}`}>Ver más</NavLink>
              </Button>
            </Card>
          ))}
      </Wrap>
      <ButtonGroup>
        <Button colorScheme="teal" onClick={prev}>
          Anterior
        </Button>
        <Button colorScheme="teal" onClick={next}>
          Siguiente
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ProductList;
