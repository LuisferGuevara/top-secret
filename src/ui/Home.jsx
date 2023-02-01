import { Button, Heading, HStack } from '@chakra-ui/react';
import { GiPoliceCar } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Home = () => {
  return (
    <>
      <Logo />
      <Heading as="h1">Acceder a tu Plataforma</Heading>
      {/* <HStack>
        <Button fontWeight={'bold'} colorScheme="red" as={Link} to="/login">
          Login
        </Button>
        <Button fontWeight={'bold'} as={Link} to="/register">
          Registro
        </Button>
      </HStack> */}
      <Button colorScheme={'yellow'} size="lg" fontWeight={'bold'} as={Link} to="/dashboard/home" leftIcon={<GiPoliceCar />}>
        Entrar al Campus 
      </Button>
    </>
  );
};

export default Home;
