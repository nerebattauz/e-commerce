import { HStack, VStack, Text, Image, Button } from "@chakra-ui/react";
import symbol from "../assets/simbolo-galatea.svg";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <VStack as={"footer"} bg={"orange"} mt={20} align={"space-between"}>
      <VStack justify={"space-between"} py={10} fontSize={"1 rem"} gap={5}>
        <VStack >
        <Image src={symbol} w={"100px"} />
        </VStack>
        <VStack >
          <Button as={NavLink} to={"/"} variant={"navButtons"} color={"white"}>
            Home
          </Button>
          <Button
            as={NavLink}
            to={"/products"}
            variant={"navButtons"}
            color={"white"}
          >
            Productos
          </Button>
          <Button
            as={NavLink}
            to={"/checkout"}
            variant={"navButtons"}
            color={"white"}
          >
            Carrito
          </Button>
          
        </VStack>
        <HStack spacing={10} >
          <Button as="a" href="https://www.instagram.com/galatea.dg/" target="_blank" rel="noopener noreferrer" bg={"pink"} _hover={{ bg: "black" }}  borderRadius={"100%"} w={"50px"} h={"50px"} p={3}>
            <FaInstagram size={"auto"} />
          </Button>
          <Button as="a" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" bg={"pink"} _hover={{ bg: "black" }}  borderRadius={"100%"} w={"50px"} h={"50px"} p={3}>
            <FaFacebook size={"30px"} />
          </Button>
          <Button as="a" href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" bg={"pink"} _hover={{ bg: "black" }}  borderRadius={"100%"} w={"50px"} h={"50px"} p={3}>
            <FaTiktok size={"30px"} />
          </Button>
        </HStack>
      </VStack>
      <HStack bg="black" p={5} justify="center">
        <Text color={"white"}>Creado por Nere ♥</Text>
      </HStack>
    </VStack>
  );
};

export default Footer;
