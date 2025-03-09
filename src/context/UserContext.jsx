import { useContext, useState} from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect, signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { useToast } from "@chakra-ui/react";
import { Alert } from "@chakra-ui/react";

export const UserContext = createContext();


export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();
  const toast = useToast()
  const navigate = useNavigate();

  const login = ({ email, password }) => {
    console.log(email, password)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user)
              toast({
        title: "Ingresaste a tu cuenta",
        status: "info",
        isClosable: false,
        duration: 3000,
        colorScheme: "green"
      })
      navigate("/")
        return user
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast({
          title: "Datos incorrectos o el correo asociado a esta cuenta ya existe",
          status: "info",
          isClosable: false,
          duration: 5000,
          colorScheme: "red"
        })
        console.error(errorCode, errorMessage)
      });
  };

  const registerUser = async ({ email, password }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      setUser(user)
      toast({
        title: "Ingresaste a tu cuenta",
        status: "info",
        isClosable: false,
        duration: 3000,
        colorScheme: "green"
      })
      navigate("/")
      
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage)
      toast({
        title: "El correo asociado a esta cuenta ya existe",
        status: "info",
        isClosable: false,
        duration: 3000,
        colorScheme: "red"
      })
    }
  };

  const loginGoogle = () => {
    signInWithRedirect(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      setUser(user)
      toast({
        title: "Ingresaste a tu cuenta",
        status: "info",
        isClosable: false,
        duration: 3000,
        colorScheme: "green"
      })
      navigate("/")
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });}

    const logout = () => {
signOut(auth).then(() => {
  toast({
    title: "Saliste de tu cuenta",
    status: "info",
    isClosable: false,
    duration: 3000,
    colorScheme: "green"
  })
  setUser(null)
  navigate("/login")
})
.catch ((error)  => {
  const errorCode = error.code;
  const errorMessage = error.message;
  toast({
    title: "Error al cerrar sesión",
    status: "info",
    isClosable: false,
    duration: 5000,
    colorScheme: "red"
  })
})}

  return (
    <UserContext.Provider value={{ user, registerUser, login, loginGoogle, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);


