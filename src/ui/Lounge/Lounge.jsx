import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Home from '../Home';

import { Navbar } from "./Pages/Navbar/Navbar";
import Pie from "./Pages/Footer/Footer";
import Wellcome from './Pages/Home';
import { Box, Flex } from '@chakra-ui/react';

const Lounge = () => {
  return (
    <Flex  flexDirection={"column"} w="98vw" justifyContent={"space-between"}   h="100%">
      <Navbar />
      <Box p={8} fle x="1">

          <Outlet />
        </Box>
      <Pie />
    </Flex>
  );
};

export default Lounge;
