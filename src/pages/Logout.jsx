import { useUser } from "../context/UserContext"
import Error404 from "../components/Error404"
const Logout = () => {
    const {user, logout} = useUser
  return (
    <div>
      {user && <button onClick={logout}></button>}
      {!user && <Error404 />}
    </div>
  )
}

export default Logout
