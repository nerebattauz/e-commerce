
import { useState, createContext} from "react";

export const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const handleLogin = (user) => {
setUser({name: {name}, email: {email}, password: {password}})
console.log(userName)
    }
    return <UserContext.Provider value={{user, handleLogin}}>{children}</UserContext.Provider>
}