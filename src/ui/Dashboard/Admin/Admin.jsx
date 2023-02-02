import { Flex, Heading } from '@chakra-ui/react';
import Cartita from './Card';

const Admin = () => {
  return (
    <Flex flexDirection={'column'}>
      <Heading flex={1} size={'md'} mb="20px">
Si quieres editar los test, ¡paga!
{/* Plataforma de edición. Reservada a administradores. Pulse en una pregunta para editarla. */}

      </Heading>
      <Cartita />
    </Flex>
  );
};

export default Admin;
