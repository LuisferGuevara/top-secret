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
import { Link, NavLink } from "react-router-dom";

export const Login = (props) => {
  const [isHidden, setIsHidden] = useState();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); //para hacer login con email o username
  };

  return (
    <Container
      bg="white"
      maxW="md"
      mt="50px"
      marginBottom={"100px"}
      h={{
        base: "750px",
        md: "750px",
        lg: "750px",
      }}
      borderRadius="16px"
      boxShadow=" 2px 1px 1px  0.5px gray "
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
                color="#23375B"
                size={{
                  base: "xs",
                  md: "sm",
                }}
              >
                Inicio de Sesión
              </Text>
            </Stack>
          </Stack>
          <Stack spacing="12">
            <Stack spacing="12">
              <FormControl>
                {/* En el controlador de inicio de sesión en el servidor, se puede verificar si el identificador 
                proporcionado es un email o un username y luego buscar en la base de datos el usuario correspondiente. 
                De esta manera, el usuario puede iniciar sesión con su email o su username sin tener que preocuparse 
                por usar el correcto.*/}{" "}
                <FormLabel htmlFor="email" color="#23375B">
                  Usuario
                </FormLabel>
                <Input
                  id="email"
                  type="text"
                  border="1px solid #23375B"
                  color="#23375B"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="Introduce tu email o nombre de usuario"
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password" color="#23375B">
                  Contraseña
                </FormLabel>
                <InputGroup>
                  <InputRightElement>
                    <IconButton
                      onClick={() => setIsHidden(!isHidden)}
                      color="#23375B"
                      bg="transparent"
                      icon={isHidden ? <HiEyeOff /> : <HiEye />}
                    >
                      {isHidden ? "Mostrar contraseñas" : "Ocultar contraseñas"}
                    </IconButton>
                  </InputRightElement>
                  <Input
                    id="password"
                    type={isHidden ? "password" : "text"}
                    border="1px solid #23375B"
                    color="#23375B"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Introduce tu contraseña"
                  />
                </InputGroup>
              </FormControl>
            </Stack>
            <HStack justify="start" spacing="1">
              <Checkbox defaultChecked color="#23375B">
                Recuérdame
              </Checkbox>
            </HStack>
            <HStack>
              <Button variant="link" color="#3182CE">
                ¿Has olvidado tu contraseña?
              </Button>
            </HStack>
            <Stack spacing="6" pt="3em">
              <Link to="/campus" type="submit" backgroundColor={"#2D3748"} color="white" _hover={{
                  backgroundColor: "#2D3748",
                  color: "white",
                }}>
                {" "}
                INICIAR SESIÓN
              </Link>
            </Stack>
            <Stack pt="2em">
              <HStack spacing="1">
                <Text color="#2D3748">¿No tienes una cuenta aún?</Text>
                <NavLink to="/register" color="red">
                  <Text color="#3182CE" fontWeight="medium">
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
