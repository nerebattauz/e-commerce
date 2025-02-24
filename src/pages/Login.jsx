import {
  Card,
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
import { useUser } from "../context/UserContext";
import { passwordValidation, emailValidation } from "../utils/validations";


const Login = () => {
  const { register, handleSubmit, formState, watch } = useForm();
  const {login, loginGoogle} = useUser();

  const onSubmit = (data, type) => {
    if (type === "email") {
      login(data);
    } else if (type === "google") {
      loginGoogle();
    }
  };

  const emailWatch = watch("email")
  console.log(emailWatch)

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const { errors } = formState;

  return (
    <Card as="form" onSubmit={handleSubmit(onSubmit)} p="60px" gap="30px">
      <Heading fontSize="xl" fontWeight="bold">
        Iniciar sesión
      </Heading>

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
            <Button h="1.75rem" size="sm" mr="1" onClick={handleClick}>
              {show ? "Ocultar" : "Mostrar"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
      </FormControl>

      <Button onClick={handleSubmit((data) => onSubmit(data, "email"))} colorScheme="teal">Ingresar</Button>
      <Button onClick={() => onSubmit(null, "google")} colorScheme="blue">Iniciar sesión con Google</Button>
    </Card>
  );
};

export default Login;
