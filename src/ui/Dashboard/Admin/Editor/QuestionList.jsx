import { TriangleDownIcon } from '@chakra-ui/icons';
import { Box, Button, Divider, Flex, Heading, Text, Icon } from '@chakra-ui/react';
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
            <Flex w="100%" justifyContent={'space-between'}>
              <Text py="15px">{array(unit)[0]}</Text>
              <Button>
                <p>Ver</p>
                <Icon as={TriangleDownIcon} mx="5px"/>
              </Button>
            </Flex>
          ))}
        </Flex>
      ))}
    </div>
  );
};

export default QuestionLists;
