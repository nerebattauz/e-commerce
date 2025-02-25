import React from "react";
import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import { NavLink } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Navbar = () => {
  const { user } = useUser();

  if (user) {
    return (
      <HStack w="100%" justifyContent={"space-between"}>
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
      </HStack>
    );
  } else {
    return (
      <HStack w="100%" justifyContent={"space-between"}>
        <Image src={logo} />
        <div>
          <NavLink to={"/"} className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
          <NavLink to={"/products"} className={({ isActive }) => (isActive ? "active" : "")}>
            Productos
          </NavLink>
        </div>
        <NavLink to={"/register"} className={({ isActive }) => (isActive ? "active" : "")}>
          Registrarse
        </NavLink>
        <NavLink to={"/login"} className={({ isActive }) => (isActive ? "active" : "")}>
          Iniciar sesión
        </NavLink>
      </HStack>
    );
  }
};

export default Navbar;
