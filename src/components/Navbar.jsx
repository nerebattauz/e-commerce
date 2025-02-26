import React from "react";
import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import { NavLink } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { Box, Flex, Button, Spacer } from "@chakra-ui/react";

const Navbar = () => {
  const { user } = useUser();

  if (user) {
    return (
      <Box as="nav" py={3} color="white" w="100%">
        <Flex align="center" justify="space-between">
          {/* Logotipo */}
          <Image src={logo} alt="Logo" h="40px" />

          

          {/* Grupo de botones: Home, Productos */}
          <HStack spacing={2}>
            <Button
              as={NavLink}
              to="/"
              variant="ghost"
              _hover={{ color: "blue.600" }}
            >
              Home
            </Button>
            <Button
              as={NavLink}
              to="/products"
              variant="ghost"
              _hover={{ color: "blue.600" }}
            >
              Productos
            </Button>
          </HStack>

          

          {/* Grupo de botones: Registrarse, Iniciar sesión */}
          <HStack spacing={2}>
            <Button
              as={NavLink}
              to="/register"
              colorScheme="teal"
              variant="outline"
            >
              Registrarse
            </Button>
            <Button as={NavLink} to="/login" colorScheme="teal">
              Iniciar sesión
            </Button>
          </HStack>
        </Flex>
      </Box>
    );
    {
      /* <HStack w="100%" justifyContent={"space-between"}>
        <Image src={logo} />
        <div>
          <NavLink to={"/"} className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
          <NavLink to={"/products"} className={({ isActive }) => (isActive ? "active" : "")}>
            Productos
          </NavLink>
        </div>
        <NavLink to={"/account"} className={({ isActive }) => (isActive ? "active" : "")}>
          Mis pedidos
        </NavLink>
        <NavLink to={"/logout"} className={({ isActive }) => (isActive ? "active" : "")}>
          Cerrar sesión
        </NavLink>
      </HStack> */
    }
  } else {
    return (
      <HStack w="100%" justifyContent={"space-between"}>
        <Image src={logo} />
        <div>
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to={"/products"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Productos
          </NavLink>
        </div>
        <NavLink
          to={"/register"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Registrarse
        </NavLink>
        <NavLink
          to={"/login"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Iniciar sesión
        </NavLink>
      </HStack>
    );
  }
};

export default Navbar;
