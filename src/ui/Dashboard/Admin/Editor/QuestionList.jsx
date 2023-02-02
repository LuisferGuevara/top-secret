import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { Box, Button, Divider, Flex, Heading, Text, Icon, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { data } from '../../../../tests';
import Question from './EditableTest';

const algo = Object.values(data[0]['CIENCIAS JURIDICAS'][0])[0];
const testFromServer = [...Object.values(algo[0])].pop();
let array = Object.keys;
data.pop();

const QuestionLists = () => {
  const [test, setTest] = useState(testFromServer);
  return (
    <div>
      {data.map((category, idx) => (
        <Flex flexDirection={'column'} align="flex-start" px="10px" color="blue.500">
          <Heading fontSize={'3xl'} pt="25px" pb="10px" key={category[0] + idx}>
            {array(category)[0]}
          </Heading>
          <Divider border="2px solid #37496A" mb="10px" />
          {category[array(category)[0]].map((unit, idx) => {
            const [isOpen, setIsOpen] = useState(false);
            return (
              <Flex w="98%" justifyContent={'space-between'} flexDirection="column" m="0 auto">
                <Flex w="100%" justifyContent={'space-between'}>
                  <Text my="5x" py="15px" textAlign={'start'} maxW="80%" key={unit[0] + idx}>
                    {array(unit)[0]}
                  </Text>
                  <Button
                    onClick={() => setIsOpen(!isOpen)}
                    bg="yellow.300"
                    _hover={{bg:"orange.300"}}
                    alignItems={'center'}
                    justifyContent={'space-evenly'}
                    w="120px"
                    my="10px"
                    spacing="2"
                    key={idx}
                  >
                    {isOpen ? 'Ocultar' : ' Mostrar'}
                    {isOpen ? <Icon as={TriangleUpIcon} mt="1x" /> : <Icon as={TriangleDownIcon} mx="1" />}
                  </Button>
                </Flex>
                <Flex
 bg={ isOpen ? "orange.100" : "tranparent"}
                  flexDirection={'column'}
                  align="start"
                  px="5px"
                  py="5px"
                  my="10px"
                  borderRadius={'14px'}
                  style={{
                    maxHeight: isOpen ? '100%' : '0',
                   
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease-out',
                  }}
                >
                  {unit[array(unit)[0]].map((test, index) => (
                    <Flex justifyContent={'space-between'} w="100%" my="8px">
                      <Text py="6px" key={test[0] + index}>
                        {array(test)[0]}
                      </Text>
                      {/* Tiene que lanzar una nueva pagina donde renderize el test a editar, por su id?  */}
                      <Button bg="yellow.300"
                    _hover={{bg:"orange.300"}}>Editar</Button>
                    </Flex>
                  ))}
                </Flex>
              </Flex>
            );
          })}
        </Flex>
      ))}
      {test.map((question, index) => (
        <Question key={question.rightanswer + index} question={{ id: index, ...question }} />
      ))}
    </div>
  );
};

export default QuestionLists;
