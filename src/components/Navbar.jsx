import React from "react";
import { HStack, Image, Button, AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText, } from "@chakra-ui/react";
import logo from "../assets/react.svg";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <HStack w="100%" justifyContent={"space-between"}>
      <Image src={logo}></Image>
      <div>
        <Button>Home</Button>
        <Button>Productos</Button>
      </div>
      <Button>Ver carrito</Button>
    {/* //Ingresar Usuario */}
      <>
              <Button onClick={onOpen}>
                Iniciar sesión
              </Button>
        
              <AlertDialog
                isOpen={isOpen}
                onClose={onClose}
              >
                <AlertDialogOverlay>
                  <AlertDialogContent>
                    <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                    Iniciar sesión
                    </AlertDialogHeader>
        
                    <AlertDialogBody>
                    Inicie sesión para realizar una compra.
                    <FormControl>
                      <FormLabel>Tu e-mail</FormLabel>
                      <Input type='text' />
                    </FormControl>
                    </AlertDialogBody>
        
                    <AlertDialogFooter>
                      <Button onClick={onClose}>
                        Ingresar
                      </Button>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialogOverlay>
              </AlertDialog>
          </>

    </HStack>
  );
};

export default Navbar;
