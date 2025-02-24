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
import { useState, useContext } from "react";
import { UserContext, useUser } from "../context/UserContext";
import { usernamelValidation, passwordValidation, emailValidation } from "../utils/validations";


const Register = () => {
  const { register, handleSubmit, formState, watch } = useForm();
  const {registerUser} = useUser();
  const {login} = useContext(UserContext)

  const onSubmit = (data) => {
    registerUser(data)
  }

  const emailWatch = watch("email")
  console.log(emailWatch)

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const { errors } = formState;

  return (
    <Card as="form" onSubmit={handleSubmit(onSubmit)} p="60px" gap="30px">
      <Heading fontSize="xl" fontWeight="bold">
        Crear cuenta
      </Heading>

      <FormControl isInvalid={!!errors.username}>
      <FormLabel>Tu nombre</FormLabel>
        <InputGroup>
          <Input
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

      <Button type="submit" colorScheme="teal">Ingresar</Button>
    </Card>
  );
};

export default Register;
