import { useState, useEffect } from "react";
import { getProducts } from "../services/products";
import { VStack , Box} from "@chakra-ui/react";

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getProducts();
        setData(data);
      } catch {
        (error) => console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  return (
    <Box>
      {data.map((product) => (
        <VStack key={product.id}>{product.name} </VStack>
      ))}
    </Box>
  );
};

export default Products;
