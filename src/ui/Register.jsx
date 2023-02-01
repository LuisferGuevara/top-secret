import {
  Button,
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
import { Link, useNavigate } from 'react-router-dom';
import authUseCases from '../core/auth/domain/auth.usecases';
import useSpinner from '../hooks/useSpinner.hook';
import Logo from './Logo';

const Register = () => {
  const { register: registerUseCase } = authUseCases();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { registerSpinner } = useSpinner();

  const submit = user => {
    registerUseCase(user);
  };

  return (
    <Container
      maxW="md"
      py={{
        base: '6',
        md: '8',
      }}
    >
      <form onSubmit={handleSubmit(submit)}>
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
                Crea tu cuenta
              </Heading>
              <Text>Empieza a hacer realidad tus sueños</Text>
            </Stack>
          </Stack>
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl isRequired>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input bg="gray.100" id="name" type="text" {...register('name')} focusBorderColor="primary.300" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="name">Apellido</FormLabel>
                <Input bg="gray.100" id="name" type="text" {...register('lastName')} focusBorderColor="primary.300" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input bg="gray.100" id="email" type="email" {...register('email')} focusBorderColor="primary.300" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  bg="gray.100"
                  id="password"
                  type="password"
                  {...register('password')}
                  focusBorderColor="primary.300"
                />
                <FormHelperText>Como mínimo 12 carácteres de longitud, 1 número y 1 símbolo</FormHelperText>
              </FormControl>
            </Stack>
            <Stack spacing="2">
              <Button type="submit" variant="solid" isLoading={registerSpinner} loadingText="Creando cuenta...">
                Crear cuenta
              </Button>
            </Stack>
          </Stack>
          <HStack justify="center" spacing="2">
            <Text fontSize="sm">Ya estás registrado?</Text>
            <Button as={Link} to="/login" variant="link" size="sm">
              Log in
            </Button>
          </HStack>
        </Stack>
      </form>
    </Container>
  );
};

export default Register;
