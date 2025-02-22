import { useParams } from "react-router-dom"

const ProductDetails = () => {
    const {id} = useParams()
    console.log(id)
  return (
    <div>
      PRODUCT DETAIL
    </div>
  )
}

export default ProductDetails
