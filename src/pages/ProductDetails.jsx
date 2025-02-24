import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { useMemo } from "react";
import Error404 from "../components/Error404";
import { Button } from "@chakra-ui/react";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  console.log(id);

  const product = useMemo(() => products.find((e) => id === e.id), [id]);

  console.log(product);
  return (
    <div>
      {product && (
        <>
          <h1>{product.name}</h1>
          <img src={product.source} alt="" />
        </>
      )}
      {!product && (
          <Error404 />
      )}
      <Button onClick={() => navigate(-1, {replace: true})}>Volver a la página anterior</Button>
    </div>
  );
};

export default ProductDetails;
