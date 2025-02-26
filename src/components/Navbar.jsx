import React from "react";
import logo from "../assets/logo.jpg"
import { HStack, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { Box, Flex, Button, Spacer } from "@chakra-ui/react";

const Navbar = () => {
  const { user } = useUser();

  if (user) {
    return (
      <Box as="nav" p="100px" bg={"pink"} w="100%">
        <Flex align="center" justify="space-between">
          <Image src={logo} alt="Logo" h="60px" />

          <HStack spacing={2}>
            <Button
              as={NavLink}
              to="/"
              variant="ghost"
              _hover={{ color: "blue.600" }}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </Button>
            <Button
              as={NavLink}
              to="/products"
              variant="ghost"
              _hover={{ color: "blue.600" }}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Productos
            </Button>
            <Button 
              as={NavLink}
              to="/products"
              variant="ghost"
              _hover={{ color: "blue.600" }}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Mis pedidos
            </Button>
          </HStack>

          <HStack spacing={2}>
            <Button as={NavLink} to="/login" colorScheme="red">
              Cerrar sesión
            </Button>
          </HStack>
        </Flex>
      </Box>
    );
  } else {
    return (
      <Box as="nav"  px={50} py="20px" bg={"pink"} mt={"0"} w="100%">
        <Flex align="center" justify="space-between">
          

          <HStack spacing={2}>
          <Image src={logo} alt="Logo" h="60px" />
            <Button
              as={NavLink}
              to="/"
              variant="ghost"
              _hover={{ color: "blue.600" }}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </Button>
            <Button
              as={NavLink}
              to="/products"
              variant="ghost"
              _hover={{ color: "blue.600" }}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Productos
            </Button>
            <Button 
              as={NavLink}
              to="/products"
              variant="ghost"
              _hover={{ color: "blue.600" }}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Mis pedidos
            </Button>
          </HStack>

          <HStack spacing={2}>
            <Button as={NavLink} to="/login" colorScheme="teal">
              Registrarse
            </Button>
            <Button as={NavLink} to="/login" colorScheme="teal">
              Iniciar sesión
            </Button>
          </HStack>
        </Flex>
      </Box>
    );
  }
};

export default Navbar;
