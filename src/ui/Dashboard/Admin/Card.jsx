import { Box } from '@chakra-ui/react';
import RenderEditor from './Editor/RenderEditor';

const Cartita = props => (
  <Box minH="3xs" maxH="86.8vh" overflow="scroll" bg="bg-surface" boxShadow="sm" borderRadius="lg" {...props}>
    <RenderEditor />
  </Box>
);

export default Cartita;
