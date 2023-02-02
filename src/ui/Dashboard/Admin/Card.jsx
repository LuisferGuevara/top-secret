import { Box } from '@chakra-ui/react';
import RenderEditor from './Editor/RenderEditor';

const Cartita = props => (
  <Box minH="3xs" maxH="86.8vh" overflow="scroll" bg="bg-surface" boxShadow="sm" borderRadius="lg" {...props}>
    <h1>Dpol</h1>
    <h1>Desafio Ñ ??? Collapsable ??</h1>
    <RenderEditor />
  </Box>
);

export default Cartita;
