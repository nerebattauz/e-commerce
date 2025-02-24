import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useMemo } from "react";
import Error404 from "../components/Error404";
const ProductDetails = () => {
  const { id } = useParams();
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
    </div>
  );
};

export default ProductDetails;
