// import {
//   Button,
//   Checkbox,
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
// import { Link } from 'react-router-dom';
// import useSpinner from '../hooks/useSpinner.hook';
// import authUseCases from '../core/auth/domain/auth.usecases';
// import Logo from './Logo';

// const Login = () => {
//   const { register, handleSubmit } = useForm();
//   const { login } = authUseCases();
//   const { loginSpinner } = useSpinner();

//   return (
//     <Container
//       maxW="md"
//       py={{
//         base: '6',
//         md: '8',
//       }}
//     >
//       <form onSubmit={handleSubmit(login)}>
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
//                 Accede a tu cuenta
//               </Heading>
//               <Text>Empieza a hacer realidad tus sueños</Text>
//             </Stack>
//           </Stack>
//           <Stack spacing="6">
//             <Stack spacing="5">
//               <FormControl isRequired>
//                 <FormLabel htmlFor="email">
//                   Email
//                 </FormLabel>
//                 <Input  id="email" type="email" {...register('email')} focusBorderColor="primary.300" />
//               </FormControl>
//               <FormControl isRequired>
//                 <FormLabel htmlFor="password">
//                   Password
//                 </FormLabel>
//                 <Input
//                   id="password"
//                   type="password"
//                   focusBorderColor="primary.300"
//                   {...register('password')}
//                 />
//               </FormControl>
//             </Stack>
//             <HStack justify="space-between">
//               <Checkbox defaultChecked>Remember me</Checkbox>
//               <Button variant="link" colorScheme="primary" size="sm">
//                 Olvidé mi contraseña
//               </Button>
//             </HStack>
//             <Stack spacing="2">
//               <Button type="submit" fontWeight="bold" variant="solid" isLoading={loginSpinner} loadingText="Accediendo...">
//                 Entrar
//               </Button>
//             </Stack>
//           </Stack>
//           <HStack justify="center" spacing="2">
//             <Text fontSize="sm" color="white">
//               ¿No tienes una cuenta?
//             </Text>
//             <Button as={Link} to="/register" variant="link" size="sm">
//               Regístrate
//             </Button>
//           </HStack>
//         </Stack>
//       </form>
//     </Container>
//   );
// };

// export default Login;
import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  InputGroup,
  InputRightElement,
  IconButton,
  Checkbox,
  Container,
} from "@chakra-ui/react";
import * as React from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaLock, FaUserAlt } from "react-icons/fa";

export const Login = (props) => {
  const [isHidden, setIsHidden] = useState(true);
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); //para hacer login con email o username
  };

  return (
    <Container
      bg="#37496A"
      maxW="md"
      mt="50px"
      marginBottom={"100px"}
      h={{
        base: "780px",
        md: "780px",
        lg: "780px",
      }}
      border='1px solid orange'
      borderRadius="16px"
      // boxShadow=" 2px 1px 1px  0.5px gray"
      py={{
        base: "12",
        md: "20",
      }}
      w="calc( 100% - 40px)"
    >
      <form onSubmit={handleSubmit}>
        <Stack spacing="8">
          <Stack spacing="6" align="center" {...props}>
            <Stack spacing="3" textAlign="center">
              <Text
                fontSize={"2rem"}
                fontWeight="bold"
                color="whitesmoke"
                size={{
                  base: "xs",
                  md: "sm",
                }}
              >
                Accede a tu cuenta
              </Text>
            </Stack>
          </Stack>
          <Stack spacing="12">
            <Stack spacing="12">
              <FormControl w="90%" alignSelf="center">
                {/* En el controlador de inicio de sesión en el servidor, se puede verificar si el identificador 
                proporcionado es un email o un username y luego buscar en la base de datos el usuario correspondiente. 
                De esta manera, el usuario puede iniciar sesión con su email o su username sin tener que preocuparse 
                por usar el correcto.*/}{" "}
                <FormLabel
                  htmlFor="email"
                  color="whitesmoke"
                  fontSize={"1.2rem"}
                >
                  Usuario
                </FormLabel>
                <Input
                  bg="gray.300"
                  id="email"
                  type="text"
                  color="#23375B"
                  fontSize={"1.2rem"}
                  fontWeight="semibold"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="Introduce tu email o nombre de usuario"
                  _placeholder={{ color: "#23375B", fontSize: 'lg' }}
                  icon={<FaUserAlt />}
                />
              </FormControl>
              <FormControl w="90%" alignSelf="center">
                <FormLabel
                  htmlFor="password"
                  color="whitesmoke"
                  fontSize={"1.2rem"}
                >
                  Contraseña
                </FormLabel>
                <InputGroup>
                  <InputRightElement>
                    <IconButton
                      onClick={() => setIsHidden(!isHidden)}
                      color="#23375B"
                      fontSize={"1.4rem"}
                      bg="transparent"
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={"Introduce tu contraseña"}
                    _placeholder={{ color: "#23375B", fontSize: 'lg'  }}
                    icon={<FaLock />} //no se ve icono
                  />
                </InputGroup>
              </FormControl>
            </Stack>
            <HStack justify="start" spacing="1">
              <Checkbox defaultChecked color="whitesmoke" pl='20px'>
                Mantener la sesión iniciada
              </Checkbox>
            </HStack>
            <HStack justify="center">
              <Button variant="link" color="orange.300">
                ¿Has olvidado tu contraseña?
              </Button>
            </HStack>
            <Stack spacing="6" pt="3em">
              <NavLink
                w="90%"
                alignSelf={"center"}
                type="submit"
                backgroundColor={"#37496A"}
                color="whitesmoke"
                border="1px solid orange"
                fontWeight={"bold"}

                to="/campus"
                _hover={{
                  backgroundColor: "orange.300",
                  color: "#23375B",
                }}
              >
                {" "}
                INICIAR SESIÓN
              </NavLink>
            </Stack>
            <Stack pt="2em">
              <HStack justify="center" spacing="1">
                <Text fontSize="md" color="whitesmoke">
                  ¿No tienes una cuenta aún?
                </Text>
                <NavLink to="/lounge/register">
                  <Text color="orange.300" fontWeight="medium">
                    Regístrate
                  </Text>
                </NavLink>
              </HStack>
            </Stack>
          </Stack>
        </Stack>
      </form>
    </Container>
  );
};
export default Login;
