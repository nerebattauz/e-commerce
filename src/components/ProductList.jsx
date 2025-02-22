
import { useFetch } from "../hooks/useFetch"
const ProductList = () => {

    const {data, loading, error} = useFetch("https://randomfox.ca/?i=110")
  return (
    <div>
      {console.log(data)}
    </div>
  )
}

export default ProductList
