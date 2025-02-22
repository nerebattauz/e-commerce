import React from "react";
import {
  HStack,
  Image,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import logo from "../assets/react.svg";

const Navbar = () => {
  return (
    <HStack w="100%" justifyContent={"space-between"}>
      <Image src={logo}></Image>
      <div>
        <Button>Home</Button>
        <Button>Productos</Button>
      </div>
      <>
        <Button>Iniciar sesión</Button>
      </>
    </HStack>
  );
};

export default Navbar;
