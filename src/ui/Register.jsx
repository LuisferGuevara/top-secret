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

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 2000);
    });
  }

  const [isHidden, setIsHidden] = useState();

  return (
    <Container
      bg="white"
      maxW="md"
      h={{
        base: "750px",
        md: "750px",
        lg: "750px",
      }}
      borderRadius="16px"
      width="452.5px"
      boxShadow=" 0px 1px 1px  3px #e2e8f0 "
      marginBottom={"100px"}
      mt="50px"
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
                fontSize={"1.2rem"}
                fontWeight="bold"
                color="#23375B"
                size={{
                  base: "xs",
                  md: "sm",
                }}
              >
                Únete a la mejor plataforma de opositores
              </Text>
              <Text color="#23375B">Empieza a hacer tus sueños realidad</Text>
            </Stack>
          </Stack>
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl isRequired isInvalid={errors.name}>
                <FormLabel htmlFor="name" color="#23375B">
                  Nombre y apellidos
                </FormLabel>
                <Input
                  id="name"
                  border="1px solid #23375B"
                  color="#23375B"
                  type="text"
                  {...register("name", {
                    required: "Introduce tu nombre y tus apellidos",
                    minLength: {
                      value: 4,
                      message: "El nombre debe tener al menos 4 caracteres",
                    },
                  })}
                />
                <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={errors.lastName}>
                <FormLabel htmlFor="username" color="#23375B">
                  Nombre de usuario
                </FormLabel>
                <Input
                  id="username"
                  border="1px solid #23375B"
                  color="#23375B"
                  type="text"
                  {...register("username", {
                    required: "Introduce un nombre de usuario",
                  })}
                />
                <FormErrorMessage>{errors.username && errors.username.message}</FormErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={errors.email}>
                <FormLabel htmlFor="email" color="#23375B">
                  Email
                </FormLabel>
                <Input
                  id="email"
                  border="1px solid #23375B"
                  color="#23375B"
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
                <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={errors.password}>
                <FormLabel htmlFor="password" color="#23375B">
                  Constraseña
                </FormLabel>
                <InputGroup>
                  <InputRightElement>
                    <IconButton
                      onClick={() => setIsHidden(!isHidden)}
                      color="#23375B"
                      bg="transparent"
                      _hover="none"
                      icon={isHidden ? <HiEyeOff /> : <HiEye />}
                    >
                      {isHidden ? "Mostrar contraseñas" : "Ocultar contraseñas"}
                    </IconButton>
                  </InputRightElement>
                  <Input
                    id="password"
                    border="1px solid #23375B"
                    type={isHidden ? "password" : "text"}
                    color="#23375B"
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
                <FormHelperText color="#23375B" align="start">
                  La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, una
                  minúscula y una mayúscula
                </FormHelperText>
                <FormErrorMessage>{errors.password && errors.password?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={errors.confirm_password}>
                <FormLabel color="#23375B" htmlFor="confirm_password">
                  Confirma tu contraseña
                </FormLabel>
                <InputGroup>
                  <InputRightElement>
                    <IconButton
                      onClick={() => setIsHidden(!isHidden)}
                      color="#23375B"
                      bg="transparent"
                      _hover="none"
                      icon={isHidden ? <HiEyeOff /> : <HiEye />}
                    >
                      {isHidden ? "Mostrar contraseñas" : "Ocultar contraseñas"}
                    </IconButton>
                  </InputRightElement>
                  <Input
                    id="passwordConfirmation"
                    border="1px solid #23375B"
                    color="#23375B"
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
                <FormHelperText color="#23375B" align="start">
                  Confirmar contraseña
                </FormHelperText>
                <FormErrorMessage>
                  {errors.confirm_password && errors.confirm_password?.message}
                </FormErrorMessage>
              </FormControl>
            </Stack>
            <Stack spacing="4">
              <Button
                backgroundColor={"#2D3748"}
                color="white"
                isLoading={isSubmitting}
                _hover={{
                  backgroundColor: "#2D3748",
                  color: "white",
                }}
                loadingText="Creando cuenta..."
              >
                CREAR CUENTA
              </Button>
            </Stack>
          </Stack>
          <HStack justify="start" spacing="2" pt="10px">
            <Text fontSize="sm" color="#23375B">
              ¿Formas parte de nuestra comunidad?
            </Text>
            <NavLink to="/login" color="red">
              <Text color="#3182CE" fontWeight="medium">
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

