import { TriangleDownIcon } from '@chakra-ui/icons';
import { Box, Button, Divider, Flex, Heading, Text, Icon, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { data } from '../../../../tests';
import Question from './Question';

const algo = Object.values(data[0]['CIENCIAS JURIDICAS'][0])[0];

const testFromServer = [...Object.values(algo[0])].pop();

let array = Object.keys;

const QuestionLists = () => {
  return (
    <div>
      {data.map((category, idx) => (
        <Flex flexDirection={'column'} align="flex-start" px="10px">
          <Heading fontSize={'3xl'} pt="25px" pb="10px" bor>
            {array(category)[0]}
          </Heading>
          <Divider border="2px solid #37496A" mb="10px" />
          {category[array(category)[0]].map(unit => (
            <Flex w="100%" justifyContent={'space-between'} flexDirection="column">
              <Flex w="100%" justifyContent={'space-between'}>
                <Text my="5x" py="15px" textAlign={'start'} maxW="80%">
                  {array(unit)[0]}
                </Text>
                {/* Esto debe de ser un despeglable, que al hacer clic muestre los test o los guarde */}
                <Button my="10px"> 
                  <p>Ver</p>
                  <Icon as={TriangleDownIcon} mx="2px" />
                </Button>
              </Flex>
              <Flex bg="blue.200" flexDirection={'column'} align="start" px="5px" py="5px" borderRadius={'14px'}>
                {unit[array(unit)[0]].map(test => (
                  <Flex justifyContent={'space-between'} w="100%" my="8px">
                    <Text py="6px">{array(test)[0]}</Text>
                    {/* Tiene que lanzar una nueva paguina donde renderize el test a editar, por su id?  */}
                    <Button>Editar</Button>
                  </Flex>
                ))}
              </Flex>
            </Flex>
          ))}
        </Flex>
      ))}
    </div>
  );
};

export default QuestionLists;
