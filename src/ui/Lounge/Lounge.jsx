import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from "./Pages/Navbar/Navbar";
import { Box, Flex } from '@chakra-ui/react';
import LoungeFooter from './Pages/Footer/Footer';

const Lounge = () => {
  return (
    <Flex  flexDirection={"column"} w="100vw" justifyContent={"space-between"}   h="100%">
      <Navbar />
      <Box p={8} fle x="1">
          <Outlet />
        </Box>
      <LoungeFooter/>
    </Flex>
  );
};

export default Lounge;
