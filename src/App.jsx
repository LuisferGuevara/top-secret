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
import Lounge from './ui/Lounge/Lounge';
import Shop from './ui/Lounge/Pages/Shop/Shop';
import Contact from './ui/Lounge/Pages/Contact/Contact';
import { Cart } from './ui/Lounge/Pages/Cart/Cart';
import Payment from './ui/Lounge/Pages/Payment/Payment';
import About from './ui/Lounge/Pages/Info/About';
import Cookies from './ui/Lounge/Pages/Info/Cookies';
import TermsConditions from './ui/Lounge/Pages/Info/TermsConditions';
import HomeLounge from './ui/Lounge/Pages/Home/Home';



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
        bg=" #96a7c8"
      >
        <Routes>
        <Route path="lounge"  element={<Lounge/>}>
          <Route path='home' element={<HomeLounge/>}/>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="shop" element={<Shop/>} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="payment" element={<Payment />} />
          <Route path="about" element={<About />} />
          <Route path="cookies" element={<Cookies />} />
          <Route path="terms-conditions" element={<TermsConditions />} />
        </Route>
          <Route path="/campus" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="home" element={<DashboardHome />} />
            <Route path="tests" element={<Tests />} />
            <Route path="my-questions" element={<MyQuestions />} />
            <Route path="myaccount" element={<Account />}/>
            <Route path="support" element={<Support />} />
            <Route path="settings" element={<Settings />} />
            <Route path="admin" element={<Admin />} />
          </Route>
          {/* Deberia redirigir a Lounge/Home */}
          <Route path="*" element={<Lounge />} /> 
        </Routes>
      </Flex>
    </Flex>
  );
};

export default App;
