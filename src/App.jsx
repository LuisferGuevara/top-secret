import { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { Flex } from '@chakra-ui/react';
import useAuthUseCases from './core/auth/domain/auth.usecases';
import Register from './ui/Register';
import Login from './ui/Login';
import Dashboard from './ui/Dashboard/Dashboard';
import Home from './ui/Home';
import DashboardHome from './ui/Dashboard/DashboardHome';
import Tests from './ui/Dashboard/Tests';
import MyQuestions from './ui/Dashboard/MyQuestions';
import Support from './ui/Dashboard/Support';
import Account from './ui/Dashboard/Account';
import Settings from './ui/Dashboard/Settings';
import Admin from './ui/Dashboard/Admin/Admin';



const App = () => {
  const { checkUserSession } = useAuthUseCases();

  useEffect(() => {
    checkUserSession();
  }, []);

  return (
    <Flex flexDir="column" h="100%">
      <Flex
        flex={1}
        flexDir="column"
        justify="center"
        align="center"
        textAlign="center"
        gap={10}
        bg="#D3CCE3"
        bgGradient={"linear(to right, #E9E4F0, #D3CCE3"}
        // bgGradient={{ base: 'linear(to-r, blue.600, purple.600)' }}
      >
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="home" element={<DashboardHome />} />
            <Route path="tests" element={<Tests />} />
            <Route path="my-questions" element={<MyQuestions />} />
            <Route path="myaccount" element={<Account />}/>
            <Route path="support" element={<Support />} />
            <Route path="settings" element={<Settings />} />
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Flex>
    </Flex>
  );
};

export default App;
