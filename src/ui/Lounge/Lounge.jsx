import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Home from '../Home';

import { Navbar } from "./Pages/Navbar/Navbar";
import Pie from "./Pages/Footer/Footer";
import Wellcome from './Pages/Home';
import { Box } from '@chakra-ui/react';

const Lounge = () => {
  return (
    <div>
      <Navbar />
      <Box p={8} fle x="1">

          <Outlet />
        </Box>
      <Pie />
    </div>
  );
};

export default Lounge;
