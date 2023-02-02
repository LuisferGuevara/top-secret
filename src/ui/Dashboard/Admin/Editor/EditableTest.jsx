import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Container,
  Divider,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  Icon,
  Stack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { RadioCard, RadioCardGroup } from './RadioCardGroup';
import EditorComponent from './Tiny/Editor';

const EditableTest = ({ question }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const submit = value => {
    console.log(value);
  };

  const editedResponse = res => {
    setIsEditing(false);
    console.log('respuest en el propio Question!!!', res);
  };

  return (
    <Flex
      flexDirection={'column'}
      as="section"
      bg="bg-surface"
      px="15px"
      color="blue.500"
      py={{
        base: '4',
        md: '8',
      }}
    >
      <Flex border={'1px solid #a2c9f4'} borderRadius="8px" flexDirection="column" justifyItems={'flex-start'}>
        <Editable
          py="5px"
          px="10px"
          textAlign={'start'}
          _active={''}
          startWithEditView={true}
          defaultValue={question.question}
          onSubmit={submit}
        >
          <EditablePreview w="100%" />
          <EditableInput w="100%" />
        </Editable>
        <Divider />
        <Flex py="5px" px="10px" w="100%" flexDirection={'column'} align={'start'}>
          {/* <RadioCardGroup defaultValue="one" spacing="3"> */}
          {question.answers.map(option => (
            // <RadioCard key={option} value={option}>
            <Editable startWithEditView={true} defaultValue={option} onSubmit={submit} w="100%" align="start" >
              <EditablePreview />
              <EditableInput />
            </Editable>
            // </RadioCard>
          ))}
          {/* </RadioCardGroup> */}
        </Flex>
      </Flex>
      <Flex align={'flex-end'} justifyContent="flex-end" flexDirection={'column'}>
        <Button
          onClick={() => {
            setIsEditing(!isEditing), setIsOpen(!isOpen);
          }}
          my="10px"
          w="fit-content"
          bg="yellow.300"
          _hover={{ bg: 'orange.300' }}
        >
          {isOpen ? 'Ocultar' : ' Argumentación'}
          {isOpen ? <Icon as={TriangleUpIcon} mt="1x" /> : <Icon as={TriangleDownIcon} mx="1" />}
        </Button>
        {isEditing && <EditorComponent defaultValue={question.feedBack} editedResponse={editedResponse} />}
      </Flex>
    </Flex>
  );
};

export default EditableTest;
