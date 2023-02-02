import {
  Box,
  Button,
  Divider,
  Flex,
  Icon,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Progress,
  Stack,
  ButtonGroup,
  IconButton,
} from '@chakra-ui/react';
import {
  FiBarChart2,
  FiBookmark,
  FiCheckSquare,
  FiHelpCircle,
  FiHome,
  FiSearch,
  FiSettings,
  FiUsers,
  FiUserPlus,
  FiEdit,
  FiUser,
  FiStar,
  FiMail,
} from 'react-icons/fi';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import ColorModeSwitcher from '../config/ColorModeSwitcher';
import Logo from './Logo';
import NavButton from './NavButton';
import UserProfile from './UserProfile';

const links = [
  {
    path: '/dashboard/home',
    text: 'Campus',
    icon: FiBarChart2,
  },
  {
    path: '/dashboard/tests',
    text: 'Tests',
    icon: FiCheckSquare,
  },
  {
    path: '/dashboard/my-questions',
    text: 'Mis Preguntas',
    icon: FiBookmark,
  },
  {
    path: '/dashboard/favorites',
    text: 'Favoritos',
    icon: FiStar,
  },
  {
    path: '/dashboard/admin',
    text: 'Editar Preguntas',
    icon: FiEdit,
  },
  {
    path: '/dashboard/messages',
    text: 'Mensajes',
    icon: FiMail,
  },
  {
    path: '/dashboard/myaccount',
    text: 'Mi perfil',
    icon: FiUser,
  },
  // {
  //   path: '/dashboard/settings',
  //   text: 'Ajustes',
  //   icon: FiSettings,
  // },
  // {
  //   path: '/dashboard/support',
  //   text: 'Soporte',
  //   icon: FiHelpCircle,
  // },
  // {
  //   path: '/login',
  //   text: 'Login',
  //   icon: FiUsers,
  // },
  // {
  //   path: '/register',
  //   text: 'Register',
  //   icon: FiUserPlus,
  // },
  // {
  //   path: '/',
  //   text: 'Home',
  //   icon: FiHome,
  // },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const logOut = () => {
    // hacer la función logOut
    // redirigir al login del Lounge?
    navigate('/lounge/login');
  };

  return (
    <Flex
      flex="1"
      bg="bg-canvas"
      color="on-t"
      overflowY="auto"
      borderRadius="8px"
      maxW={{ base: 'full', sm: 'xs' }}
      py={{ base: '6', sm: '8' }}
      px={{ base: '4', sm: '6' }}
    >
      <Stack justify="space-between" spacing={4}>
        <Stack spacing={{ base: '5', sm: '6' }} shouldWrapChildren>
          <Link to="/">
            <Logo />
          </Link>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={FiSearch} color="on-accent" boxSize="5" />
            </InputLeftElement>
            <Input placeholder="Search" variant="filled" colorScheme="blue" />
          </InputGroup>
          <Stack spacing="1">
            {links.map(link => (
              <NavButton
                color="blue.500"
                _hover={{ bg: 'blue.100' }}
                key={link.path}
                as={NavLink}
                to={link.path}
                icon={link.icon}
                label={link.text}
                // _hover={{ outline: '3px solid', outlineColor: 'primary.400' }}
                _activeLink={{
                  outline: '2px solid',
                  outlineColor: 'blue.200',
                }}
              />
            ))}
          </Stack>
        </Stack>
        <Stack pb={8} spacing={{ base: '5', sm: '6' }}>
          <Box bg="bg-accent-subtle" px="4" py="5" borderRadius="lg">
            <Stack spacing="4">
              {/* <Progress
                colorScheme={'blue'}
                value={80}
                size="sm"
                variant="on-accent"
                aria-label="Profile Update Progress"
              /> */}
              <HStack spacing="3" display="flex" justifyContent="space-around" alignItems="center">
                <Button
                  onClick={logOut} variant="link-on-accent"
                  size="sm"
                  color="on-accent-muted"
                  _hover={{ color: 'blue.500' }}
                >
                  Cerrar Sesión
                </Button>
                <Stack spacing="1">
                  <ButtonGroup colorScheme={'blue'} variant="ghost" spacing="1">
                    <IconButton icon={<FiSettings fontSize="1.25rem" />} aria-label="Settings" />
                    <ColorModeSwitcher mt="-1" />
                  </ButtonGroup>
                </Stack>
              </HStack>
            </Stack>
          </Box>
          <Divider borderColor="bg-accent-subtle" />
          <UserProfile
            name="Visible como OposiThor"
            image="https://tinyurl.com/yhkm2ek8"
            email="Logueado como Oscar Abella"
          />
        </Stack>
      </Stack>
    </Flex>
  );
};

export default Sidebar;
