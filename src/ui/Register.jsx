// import {
//   Button,
//   Container,
//   FormControl,
//   FormHelperText,
//   FormLabel,
//   Heading,
//   HStack,
//   Img,
//   Input,
//   Stack,
//   Text,
//   useBreakpointValue,
// } from '@chakra-ui/react';
// import { useForm } from 'react-hook-form';
// import { Link, useNavigate } from 'react-router-dom';
// import authUseCases from '../core/auth/domain/auth.usecases';
// import useSpinner from '../hooks/useSpinner.hook';
// import Logo from './Logo';

// const Register = () => {
//   const { register: registerUseCase } = authUseCases();
//   const { register, handleSubmit } = useForm();
//   const navigate = useNavigate();
//   const { registerSpinner } = useSpinner();

//   const submit = user => {
//     registerUseCase(user);
//   };

//   return (
//     <Container
//       maxW="md"
//       py={{
//         base: '6',
//         md: '8',
//       }}
//     >
//       <form onSubmit={handleSubmit(submit)}>
//         <Stack spacing="8">
//           <Stack spacing="6" align="center">
//             <Link to="/">
//               <Logo />
//             </Link>
//             <Stack spacing="3" textAlign="center">
//               <Heading
//                 size={useBreakpointValue({
//                   base: 'md',
//                   md: 'xl',
//                 })}
//               >
//                 Crea tu cuenta
//               </Heading>
//               <Text>Empieza a hacer realidad tus sueños</Text>
//             </Stack>
//           </Stack>
//           <Stack spacing="6">
//             <Stack spacing="5">
//               <FormControl isRequired>
//                 <FormLabel htmlFor="name">Name</FormLabel>
//                 <Input bg="gray.100" id="name" type="text" {...register('name')} focusBorderColor="primary.300" />
//               </FormControl>
//               <FormControl isRequired>
//                 <FormLabel htmlFor="name">Apellido</FormLabel>
//                 <Input bg="gray.100" id="name" type="text" {...register('lastName')} focusBorderColor="primary.300" />
//               </FormControl>
//               <FormControl isRequired>
//                 <FormLabel htmlFor="email">Email</FormLabel>
//                 <Input bg="gray.100" id="email" type="email" {...register('email')} focusBorderColor="primary.300" />
//               </FormControl>
//               <FormControl isRequired>
//                 <FormLabel htmlFor="password">Password</FormLabel>
//                 <Input
//                   bg="gray.100"
//                   id="password"
//                   type="password"
//                   {...register('password')}
//                   focusBorderColor="primary.300"
//                 />
//                 <FormHelperText>Como mínimo 12 carácteres de longitud, 1 número y 1 símbolo</FormHelperText>
//               </FormControl>
//             </Stack>
//             <Stack spacing="2">
//               <Button type="submit" variant="solid" isLoading={registerSpinner} loadingText="Creando cuenta...">
//                 Crear cuenta
//               </Button>
//             </Stack>
//           </Stack>
//           <HStack justify="center" spacing="2">
//             <Text fontSize="sm">Ya estás registrado?</Text>
//             <Button as={Link} to="/login" variant="link" size="sm">
//               Log in
//             </Button>
//           </HStack>
//         </Stack>
//       </form>
//     </Container>
//   );
// };

// export default Register;
import {
  Button,
  Container,
  FormErrorMessage,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import * as React from "react";
import { NavLink } from "react-router-dom";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useSpinner from '../hooks/useSpinner.hook';

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  const { registerSpinner } = useSpinner();

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 2000);
    });
  }

  const [isHidden, setIsHidden] = useState(true);

  return (
    <Container
      bg="#37496A"
      maxW="md"
      h={{
        base: "820px",
        md: "780px",
        lg: "780px",
      }}
      border='1px solid orange'
      borderRadius="16px"
      width="452.5px"
      // boxShadow=" 0px 1px 2px  3px #37496A "
      // marginBottom={"100px"}
      py={{
        base: "6",
        md: "4",
      }}
      w="calc( 100% - 40px)"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing="4" display={"flex"} justifyContent="space-between">
          <Stack spacing="6" align="center">
            <Stack spacing="3" textAlign="center">
              <Text
                fontSize={"2rem"}
                fontWeight="bold"
                // color="#23375B"
                color="whitesmoke"
                size={{
                  base: "xs",
                  md: "sm",
                }}
              >
                Crea tu cuenta
              </Text>
              <Text color="whitesmoke" fontWeight={"semibold"} fontSize="1rem">
                Empieza a hacer tus sueños realidad
              </Text>
            </Stack>
          </Stack>
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl
                isRequired
                isInvalid={errors.name}
                w="90%"
                alignSelf="center"
              >
                <FormLabel
                  htmlFor="name"
                  color="whitesmoke"
                  fontSize={"1.2rem"}
                >
                  Nombre y apellidos
                </FormLabel>
                <Input
                  bg="gray.300"
                  id="name"
                  color="#23375B"
                  fontSize={"1.2rem"}
                  fontWeight="semibold"
                  type="text"
                  {...register("name", {
                    required: "Introduce tu nombre y tus apellidos",
                    minLength: {
                      value: 4,
                      message: "El nombre debe tener al menos 4 caracteres",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                isRequired
                isInvalid={errors.lastName}
                w="90%"
                alignSelf="center"
              >
                <FormLabel
                  htmlFor="username"
                  color="whitesmoke"
                  fontSize={"1.2rem"}
                >
                  Nombre de usuario
                </FormLabel>
                <Input
                  bg="gray.300"
                  id="username"
                  color="#23375B"
                  fontSize={"1.2rem"}
                  fontWeight="semibold"
                  type="text"
                  {...register("username", {
                    required: "Introduce un nombre de usuario",
                  })}
                />
                <FormErrorMessage>
                  {errors.username && errors.username.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                isRequired
                isInvalid={errors.email}
                w="90%"
                alignSelf="center"
              >
                <FormLabel
                  htmlFor="email"
                  color="whitesmoke"
                  fontSize={"1.2rem"}
                >
                  Email
                </FormLabel>
                <Input
                  // w='70%'
                  bg="gray.300"
                  id="email"
                  color="#23375B"
                  fontSize={"1.2rem"}
                  fontWeight="semibold"
                  type="email"
                  {...register("email", {
                    required: "Este campo es requerido",
                    /* error: "Introduce un formato válido", */
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Introduce una dirección de correo válida",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                isRequired
                isInvalid={errors.password}
                w="90%"
                alignSelf="center"
              >
                <FormLabel
                  htmlFor="password"
                  color="whitesmoke"
                  fontSize={"1.2rem"}
                >
                  Constraseña
                </FormLabel>
                <InputGroup>
                  <InputRightElement>
                    <IconButton
                      onClick={() => setIsHidden(!isHidden)}
                      color="#23375B"
                      fontSize={"1.4rem"}
                      bg="transparent"
                      _hover="none"
                      icon={isHidden ? <HiEye /> : <HiEyeOff />}
                    >
                      {isHidden ? "Mostrar contraseñas" : "Ocultar contraseñas"}
                    </IconButton>
                  </InputRightElement>
                  <Input
                    bg="gray.300"
                    id="password"
                    type={isHidden ? "password" : "text"}
                    color="#23375B"
                    fontSize={"1.2rem"}
                    fontWeight="semibold"
                    {...register("password", {
                      required: "Este campo es requerido",
                      pattern: {
                        value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                        message:
                          "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, una minúscula y una mayúscula",
                      },
                    })}
                  />
                </InputGroup>
                <FormHelperText color="whitesmoke" align="start">
                  La contraseña debe tener entre 8 y 16 caracteres, al menos un
                  dígito, una minúscula y una mayúscula
                </FormHelperText>
                <FormErrorMessage>
                  {errors.password && errors.password?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                isRequired
                isInvalid={errors.confirm_password}
                w="90%"
                alignSelf="center"
              >
                <FormLabel
                  color="whitesmoke"
                  htmlFor="confirm_password"
                  fontSize={"1.2rem"}
                >
                  Confirma tu contraseña
                </FormLabel>
                <InputGroup>
                  <InputRightElement>
                    <IconButton
                      onClick={() => setIsHidden(!isHidden)}
                      color="#23375B"
                      fontSize={"1.4rem"}
                      bg="transparent"
                      _hover="none"
                      icon={isHidden ? <HiEye /> : <HiEyeOff />}
                    >
                      {isHidden ? "Mostrar contraseñas" : "Ocultar contraseñas"}
                    </IconButton>
                  </InputRightElement>
                  <Input
                    bg="gray.300"
                    id="passwordConfirmation"
                    color="#23375B"
                    fontSize={"1.2rem"}
                    fontWeight="semibold"
                    type={isHidden ? "password" : "text"}
                    {...register("confirm_password", {
                      required: "Este campo es requerido",
                      validate: (val) => {
                        if (watch("password") !== val) {
                          return "La contraseña de verificación no coincide";
                        }
                      },
                    })}
                  />
                </InputGroup>
                <FormHelperText color="whitesmoke" align="start">
                  Confirmar contraseña
                </FormHelperText>
                <FormErrorMessage>
                  {errors.confirm_password && errors.confirm_password?.message}
                </FormErrorMessage>
              </FormControl>
            </Stack>
            <Stack spacing="4">
              <Button
                w="90%"
                alignSelf="center"
                backgroundColor={"#37496A"}
                color="whitesmoke"
                border="1px solid orange"
                fontWeight={"bold"}
                isLoading={resgisterSpinner}
                _hover={{
                  backgroundColor: "orange.300",
                  color: "#23375B",
                }}
                loadingText="Creando cuenta..."
              >
                CREAR CUENTA
              </Button>
            </Stack>
          </Stack>
          <HStack justify="center" spacing="2" pt="5px">
            <Text  color="whitesmoke">
              ¿Ya formas parte de nuestra comunidad?
            </Text>
            <NavLink to="/lounge/login" color="red">
              <Text /*color=" #3182CE "*/ color= 'orange.300' fontWeight="medium">
                Inicia sesión
              </Text>
            </NavLink>
          </HStack>
        </Stack>
      </form>
    </Container>
  );
};

export default Register;

