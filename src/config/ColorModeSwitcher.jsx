import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons'


const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);

  return (
    <IconButton
      size="lg"
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      colorScheme={'blue'}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
      _hover={{ bg: 'inherit' }}
    />
  );
};

export default ColorModeSwitcher;