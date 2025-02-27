import { Button, Heading, VStack } from "@chakra-ui/react"
import { useNavigate} from "react-router-dom"
const Error404 = () => {
    const navigate = useNavigate()
  return (
    <VStack>
      <Heading> La página que estás buscando no existe</Heading>
      <Button variant={"solid"} onClick={() => navigate(-1, {replace: true})}>Volver a la página anterior</Button>
    </VStack>
  )
}

export default Error404
