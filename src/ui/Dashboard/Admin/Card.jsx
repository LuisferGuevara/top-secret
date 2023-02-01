import { Box } from '@chakra-ui/react'
import RenderEditor from './Editor/RenderEditor';

const Cartita = (props) => (
  <Box minH="3xs" bg="bg-surface" boxShadow="sm" borderRadius="lg" {...props} >
    TU LISTA DE TEXTOS
    <RenderEditor/>

  </Box>
);

export default Cartita;