import {
  Button,
  Checkbox,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Img,
  Input,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useSpinner from '../hooks/useSpinner.hook';
import authUseCases from '../core/auth/domain/auth.usecases';
import Logo from './Logo';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { login } = authUseCases();
  const { loginSpinner } = useSpinner();

  return (
    <Container
      maxW="md"
      py={{
        base: '6',
        md: '8',
      }}
    >
      <form onSubmit={handleSubmit(login)}>
        <Stack spacing="8">
          <Stack spacing="6" align="center">
            <Link to="/">
              <Logo />
            </Link>
            <Stack spacing="3" textAlign="center">
              <Heading

                size={useBreakpointValue({
                  base: 'md',
                  md: 'xl',
                })}
              >
                Accede a tu cuenta
              </Heading>
              <Text>Empieza a hacer realidad tus sueños</Text>
            </Stack>
          </Stack>
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl isRequired>
                <FormLabel htmlFor="email">
                  Email
                </FormLabel>
                <Input  id="email" type="email" {...register('email')} focusBorderColor="primary.300" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="password">
                  Password
                </FormLabel>
                <Input
                  id="password"
                  type="password"
                  focusBorderColor="primary.300"
                  {...register('password')}
                />
              </FormControl>
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Remember me</Checkbox>
              <Button variant="link" colorScheme="primary" size="sm">
                Olvidé mi contraseña
              </Button>
            </HStack>
            <Stack spacing="2">
              <Button type="submit" fontWeight="bold" variant="solid" isLoading={loginSpinner} loadingText="Accediendo...">
                Entrar
              </Button>
            </Stack>
          </Stack>
          <HStack justify="center" spacing="2">
            <Text fontSize="sm" color="white">
              ¿No tienes una cuenta?
            </Text>
            <Button as={Link} to="/register" variant="link" size="sm">
              Regístrate
            </Button>
          </HStack>
        </Stack>
      </form>
    </Container>
  );
};

export default Login;
