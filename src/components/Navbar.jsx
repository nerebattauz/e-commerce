import React from "react";
import {
  HStack,
  Image,
  Button,
} from "@chakra-ui/react";
import logo from "../assets/react.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <HStack w="100%" justifyContent={"space-between"}>
      <Image src={logo}></Image>
      <div>
        <NavLink to={"/"} className={({isActive}) => (isActive?"active":"")}>Home</NavLink>
        <NavLink to={"/products"} className={({isActive}) => (isActive?"active":"")}>Productos</NavLink>
      </div>
      <>
      <NavLink to={"/register"} className={({isActive}) => (isActive?"active":"")}>Register</NavLink>
        <NavLink to={"/login"} className={({isActive}) => (isActive?"active":"")}>Iniciar sesión</NavLink>
        <NavLink to={"/logout"} className={({isActive}) => (isActive?"active":"")}>Cerrar sesión</NavLink>
        <NavLink to={"/account"} className={({isActive}) => (isActive?"active":"")}>Mis pedidos</NavLink>
      </>
    </HStack>
  );
};

export default Navbar;
