import {
  VStack,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  FormErrorMessage,
  InputRightElement,
  Heading,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import { useState } from "react";

import { namelValidation, passwordValidation, emailValidation } from "../utils/passwordValidation";

const Login = () => {
  const { register, handleSubmit, formState, watch } = useForm();

  const login = (data) => {
    alert("logueado");
    console.log(data);
  };

  const emailWatch = watch("email")
  console.log(emailWatch)
  
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const { errors } = formState;
  return (
    <VStack as="form" onSubmit={handleSubmit(login)}>
      <Heading fontSize="lg" fontWeight="bold">
        Iniciar sesión
      </Heading>

      <FormControl isInvalid={!!errors.name}>
      <FormLabel>Tu nombre</FormLabel>
        <InputGroup>
          <Input
            type="text"
            placeholder="Nombre"
            {...register("name", namelValidation)}
          />
        </InputGroup>
        <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.email}>
        <FormLabel>Tu e-mail</FormLabel>
        <InputGroup>
          <Input
            type="email"
            placeholder="ejemplo@gmail.com"
            {...register("email", emailValidation)}
          />
        </InputGroup>
        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.password}>
        <InputGroup>
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            {...register("password", passwordValidation)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Ocultar" : "Mostrar"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
      </FormControl>

      <Button type="submit">Ingresar</Button>
    </VStack>
  );
};

export default Login;
