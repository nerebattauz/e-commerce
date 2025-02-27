import {
  VStack,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  FormErrorMessage,
  InputRightElement,
  Heading,
  Box,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { useUser } from "../context/UserContext";
import { passwordValidation, emailValidation } from "../utils/validations";

const Login = () => {
  const { handleSubmit, formState, register } = useForm();
  const { login, loginGoogle } = useUser();

  const onSubmit = (data, type) => {
    if (type === "email") {
      login(data);
      console.log(data);
    } else if (type === "google") {
      loginGoogle();
    }
  };

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const { errors } = formState;

  return (

      <VStack
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        p={20}
        align={"center"}
        justify={"center"}
        spacing={10}
        w={{ base: "90%", md: 700 }}
    mx={"auto"}
      >
        <Heading>Iniciar sesión</Heading>

        <FormControl isInvalid={!!errors.email}>
          <FormLabel>Tu e-mail</FormLabel>
          <InputGroup>
            <Input
              type="email"
              placeholder="ejemplo@gmail.com"
              {...register("email", emailValidation)}
              background={"white"}
            />
          </InputGroup>
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.password}>
          <FormLabel>Tu contraseña</FormLabel>
          <InputGroup>
            <Input
              pr={20}
              background={"white"}
              type={show ? "text" : "password"}
              placeholder="Ingrese la contraseña"
              {...register("password", passwordValidation)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" mr="1" onClick={handleClick} variant={"unstyled"}>
                {show ? "Ocultar" : "Mostrar"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>

        <Button
          onClick={handleSubmit((data) => onSubmit(data, "email"))}
          colorScheme="teal"
          w={"100%"}
        >
          Ingresar
        </Button>
        <Divider orientation="horizontal" borderColor={"gray"} border={"1px"}/>

        <Button onClick={() => onSubmit(null, "google")} colorScheme="blue" w={"100%"}>
          Iniciar sesión con Google
        </Button>
      </VStack>

  );
};

export default Login;
