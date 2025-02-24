import { Button } from "@chakra-ui/react"
import { useNavigate} from "react-router-dom"
const Error404 = () => {
    const navigate = useNavigate()
  return (
    <div>
      La página que estás buscando no existe
      <Button onClick={() => navigate(-1, {replace: true})}>Volver a la página anterior</Button>
    </div>
  )
}

export default Error404
