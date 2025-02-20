
import { useState } from "react";
import { createContext } from "react";


const user_ = {
    username: "Nerea",
    email: "nereebattauz@gmail.com",
    password: "naek1412",
  };

export const UserContext = createContext();

export const UserProvider = ({ children }) => {


  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const login = ({username, email, password}) => {
    if (email == user_.email && password == user_.password) {
      setUser({ username, email, password });
      setError(null);
    } else {
      setError("El usuario o contraseña son incorrectos");
    }
  };

  const logout = () => {
    setUser(null)
  };

  return (
    <UserContext.Provider value={{ user, login, logout, error }}>
      {children}
    </UserContext.Provider>
  );
};





