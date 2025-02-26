import { useState, useEffect } from "react";
import { getProducts } from "../services/products";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
   useEffect(() => {
    const getData = async () => {
      try {
        const data = await getProducts();
        setData(data);
        console.log(data);
      } catch (error) {
        (error) => console.log(error);
        setError(true);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [url]);

return {
    data, loading, error
}
};
