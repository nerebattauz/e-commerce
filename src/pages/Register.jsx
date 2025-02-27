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
  Divider,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { useUser } from "../context/UserContext";
import {
  usernamelValidation,
  passwordValidation,
  emailValidation,
} from "../utils/validations";

const Register = () => {
  const { register, handleSubmit, formState, watch } = useForm();
  const { registerUser, loginGoogle } = useUser();

  const onSubmit = (data, type) => {
    if (type === "email") {
      registerUser(data);
    } else if (type === "google") {
      loginGoogle();
    }
  };

  const emailWatch = watch("email");
  console.log(emailWatch);

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
      <Heading>Crear cuenta</Heading>


      <FormControl isInvalid={!!errors.username}>
        <FormLabel>Tu nombre</FormLabel>
        <InputGroup>
          <Input
            bg={"white"}
            type="text"
            placeholder="Nombre"
            {...register("username", usernamelValidation)}
          />
        </InputGroup>
        <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.email}>
        <FormLabel>Tu e-mail</FormLabel>
        <InputGroup>
          <Input
            bg={"white"}
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
            bg={"white"}
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            {...register("password", passwordValidation)}
          />
          <InputRightElement width="4.5rem">
            <Button
              variant={"unstyled"}
              h="1.75rem"
              size="sm"
              mr="1"
              onClick={handleClick}
            >
              {show ? "Ocultar" : "Mostrar"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
      </FormControl>

      <Button
        onClick={handleSubmit((data) => onSubmit(data, "email"))}
        w={"100%"}
        colorScheme="teal"
      >
        Registrarse
      </Button>
      <Divider orientation="horizontal" borderColor={"gray"} border={"1px"} />
      <Button onClick={() => onSubmit(null, "google")} w={"100%"}>
        Iniciar sesión con Google
      </Button>
    </VStack>
  );
};

export default Register;
