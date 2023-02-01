import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';
import { foundations } from './foundations';
import global from './global';
import semanticTokens from './semanticTokens';
import colors from './foundations/colors';
import components from './components';
import config from './config';

/**
 * El color de los estilos principales y del tipo de tema se cambia
 * en el archivo semanticTokens.js! :)
 */

const overrides = {
  ...foundations,
  semanticTokens,
  colors,
  components,
  config,
  global,
};

export default extendTheme(
  overrides,
  withDefaultColorScheme({
    colorScheme: 'primary',
  }),
);
