import React from "react";
import logo from "../assets/logo-galatea.svg";
import { HStack, Image } from "@chakra-ui/react";
import { NavLink, Link } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { Box, Flex, Button, Spacer } from "@chakra-ui/react";

const Navbar = () => {
  const { user, logout } = useUser();

  if (user) {
    return (
      <Box as="nav" px={20} py={5} mt={"0"} w="100%">
        <Flex align="center" justify="space-between">
          <HStack spacing={5}>
            <Image src={logo} alt="Logo" h={7} />
            <Button
              as={NavLink}
              variant={"navButtons"}
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </Button>
            <Button
              as={NavLink}
              variant={"navButtons"}
              to="/products"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Productos
            </Button>
            <Button
              as={NavLink}
              variant={"navButtons"}
              to="/products"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Mis pedidos
            </Button>
          </HStack>

          <HStack spacing={2}>
            <Button as={NavLink} onClick={logout} variant={"solid"}>
              Cerrar sesión
            </Button>
          </HStack>
        </Flex>
      </Box>
    );
  } else { 
    return (
      <Box as="nav" px={20} py={5} mt={"0"} w="100%">
        <Flex align="center" justify="space-between">
          <HStack spacing={5}>
            <Image src={logo} alt="Logo" h={7} />

            <HStack spacing={0}>
            <Button
              as={NavLink}
              variant={"navButtons"}
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </Button>
            <Button
              as={NavLink}
              variant={"navButtons"}
              to="/products"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Productos
            </Button>
            </HStack>
          </HStack>

          <HStack spacing={2}>
            <Button as={NavLink} to="/register" variant={"outlined"} bg={"none"}>
              Registrarse
            </Button>
            <Button as={NavLink} to="/login" variant={"solid"}>
              Iniciar sesión
            </Button>
          </HStack>
        </Flex>
      </Box>
    );
  }
};

export default Navbar;
