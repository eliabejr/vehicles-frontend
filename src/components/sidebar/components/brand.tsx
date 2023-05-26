// Chakra imports
import { Flex } from '@chakra-ui/react';

// Custom components
import { HSeparator } from '@/components/separator';
import React from 'react';

export function SidebarBrand() {
  //   Chakra color mode

  return (
    <Flex alignItems='center' flexDirection='column'>
      <h2>INFOSISTEMAS</h2>
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;