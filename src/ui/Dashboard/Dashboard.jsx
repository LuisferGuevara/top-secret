import { Box, Flex, useBreakpointValue } from '@chakra-ui/react';
import { Outlet } from 'react-router';
import MobileNav from '../MobileNav';
import Sidebar from '../Sidebar';
import backgroundImage from '../../assets/images/bg-2.jpg';

const Dashboard = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
      <Flex
        as="section"
        w="full"
        direction={{ base: 'column', lg: 'row' }}
        height="100vh"
        // bg="#D3CCE3"
        // bgGradient={"linear(to right, #E9E4F0, #D3CCE3"}
        bg=" #96a7c8"
        overflowY="auto"
      >
        {isDesktop ? <Sidebar /> : <MobileNav />}
        <Box p={8} flex="1">
          <Outlet />
        </Box>

      </Flex>
  );
};

export default Dashboard;
