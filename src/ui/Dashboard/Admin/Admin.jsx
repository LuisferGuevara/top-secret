import { Flex, Heading } from '@chakra-ui/react';
import Cartita from './Card';

const Admin = () => {
  return (
    <Flex flexDirection={'column'}>
      <Heading flex={1} size={'md'} mb="20px">
        Muy Buenas Admin, aquí tienes la lista completa de test, de los cuales podrás editar su contenido
      </Heading>
      <Cartita />
    </Flex>
  );
};

export default Admin;
