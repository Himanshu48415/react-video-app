import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      variant="ghost"
      color="current"
      onClick={toggleColorMode}
      pos={'fixed'}
      zIndex={'overlay'}
      top={'4'}
      right={'4'}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};
