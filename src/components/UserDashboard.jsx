import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { Button, Heading } from "@chakra-ui/react"
const UserDashboard = () => {
    const {user, logout} = useContext(UserContext)
  return (
    <Heading>
      Bienvenido {user.name}
      <Button colorScheme="red" onClick={logout}>Cerrar sesión</Button>
    </Heading>
  )
}

export default UserDashboard
