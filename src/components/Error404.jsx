import { Button } from "@chakra-ui/react"
import { Link, useNavigate} from "react-router-dom"
const Error404 = () => {
    const navigate = useNavigate()
  return (
    <div>
      La página que estás buscando no existe
      <Button as={Link} to={"/"} onClick={() => navigate(-1, replace)}>Volver a la página anterior</Button>
    </div>
  )
}

export default Error404
