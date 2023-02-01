import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  Image,
  Input,
  Collapse,
  Container,
} from '@chakra-ui/react';
import React, { useState, useEffect, useRef } from 'react';
import { FiUser, FiMenu, FiSearch, FiShoppingCart, FiMoon, FiSun, FiChevronUp } from 'react-icons/fi';
import logo2 from '../../../../assets/images/logoWhite.png';
import logo from '../../../../assets/images/logoBlack.png';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const [searchTerm, setSearchTerm] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  function handleClickOutside(event) {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }
  const menuRef = useRef(null);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleSearch() {
    // hacer la función
  }

  return (
    <Box
      as="section"
      // pos="fixed"
      // top={0}
      // left={0}
      // right={0}
      // zIndex={1}
    >
      {hasScrolled ? (
        <Box as="nav" h="140px" p="0 20px" bgGradient={`linear-gradient(to right, #24243e, #302b63, #0f0c29)`}>
          <Flex justify="space-between" p="30px 0 5px 0" maxW={'1440px'} m="0 auto">
            <Flex>
              <NavLink to="/lounge/home">
                <Image src={logo2} alt="Uniforme Azul" objectFit="contain" w="178px" h="95%" />
              </NavLink>
            </Flex>
            <HStack>
              {isDesktop && (
                <ButtonGroup>
                  <Button
                    as={NavLink}
                    to="/lounge/home"
                    color="white"
                    bg="transparent"
                    _hover={{ color: '#37496A', bg: 'orange.300' }}
                    _activeLink={{ color: '#37496A', bg: 'orange.300' }}
                  >
                    Inicio
                  </Button>
                  <Button
                    as={NavLink}
                    to="/lounge/courses"
                    color="white"
                    bg="transparent"
                    _hover={{ color: '#37496A', bg: 'orange.300' }}
                    _activeLink={{ color: '#37496A', bg: 'orange.300' }}
                  >
                    Cursos
                  </Button>
                  <Button
                    as={NavLink}
                    to="/lounge/freetests"
                    color="white"
                    bg="transparent"
                    _hover={{ color: '#37496A', bg: 'orange.300' }}
                    _activeLink={{ color: '#37496A', bg: 'orange.300' }}
                  >
                    Tests Gratis
                  </Button>
                  <Button
                    as={NavLink}
                    to="/lounge/shop"
                    color="white"
                    bg="transparent"
                    _hover={{ color: '#37496A', bg: 'orange.300' }}
                    _activeLink={{ color: '#37496A', bg: 'orange.300' }}
                  >
                    Tienda
                  </Button>
                  <Button
                    as={NavLink}
                    to="/lounge/contact"
                    color="white"
                    bg="transparent"
                    _hover={{ color: '#37496A', bg: 'orange.300' }}
                    _activeLink={{ color: '#37496A', bg: 'orange.300' }}
                  >
                    Contacto
                  </Button>
                </ButtonGroup>
              )}
            </HStack>
            {isDesktop ? (
              <HStack spacing="4">
                <ButtonGroup spacing="1">
                  <Flex flexDirection="column">
                    <IconButton
                      onClick={() => setShowInput(!showInput)}
                      icon={<FiSearch fontSize="1.25rem" />}
                      color="white"
                      bg="transparent"
                      _hover={{ color: '#37496A', bg: 'orange.300' }}
                    />
                  </Flex>
                  <IconButton
                    as={NavLink}
                    to="/lounge/cart"
                    icon={<FiShoppingCart fontSize="1.25rem" />}
                    color="white"
                    bg="transparent"
                    _hover={{ color: '#37496A', bg: 'orange.300' }}
                    _activeLink={{ color: '#37496A', bg: 'orange.300' }}
                  />
                  <IconButton
                    // to="/myaccount"  --> Cuando podamos privatizar la ruta con el token
                    as={NavLink}
                    to="/lounge/login"
                    icon={<FiUser fontSize="1.25rem" />}
                    color="white"
                    bg="transparent"
                    _hover={{ color: '#37496A', bg: 'orange.300' }}
                    _activeLink={{ color: '#37496A', bg: 'orange.300' }}
                  />
                  <IconButton
                    icon={darkMode ? <FiSun fontSize="1.25rem" /> : <FiMoon fontSize="1.25rem" />}
                    color="white"
                    bg="transparent"
                    _hover={{ color: '#37496A', bg: 'orange.300' }}
                    onClick={() => setDarkMode(!darkMode)}
                  >
                    Toggle Theme
                  </IconButton>
                </ButtonGroup>
                {/* <Avatar boxSize="10" name="Christoph Winston" src="/* token.user.photo *" /> */}
              </HStack>
            ) : (
              <Box display="flex" position="relative" zIndex="1">
                <Collapse in={isOpen} style={{ position: 'absolute', top: '80px', right: '-20px' }}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="start"
                    w="100vw"
                    h="300vh"
                    p="5% 0"
                    bg="whitesmoke"
                  >
                    <Input
                      value={searchTerm}
                      onChange={e => setSearchTerm(e.target.value)}
                      onKeyPress={e => {
                        if (e.key === 'Enter') {
                          handleSearch();
                        }
                      }}
                      w="50%"
                      color="#37496A"
                      textAlign="center"
                      border="solid 1px #8AB3F2"
                      placeholder="Buscar..."
                      _placeholder={{ color: 'gray' }}
                      _hover={{ border: 'solid 1px orange' }}
                    />
                    <Button
                      onClick={() => setIsOpen(false)}
                      as={NavLink}
                      to="/lounge/home"
                      w="100%"
                      mt={3}
                      py={7}
                      color="#37496A"
                      bg="transparent"
                      borderRadius={0}
                      _hover={{ bg: 'orange.300' }}
                      _activeLink={{ bg: 'orange.300' }}
                    >
                      Inicio
                    </Button>
                    <Button
                      onClick={() => setIsOpen(false)}
                      as={NavLink}
                      to="/lounge/courses"
                      w="100%"
                      py={7}
                      color="#37496A"
                      bg="transparent"
                      borderRadius={0}
                      _hover={{ bg: 'orange.300' }}
                      _activeLink={{ bg: 'orange.300' }}
                    >
                      Cursos
                    </Button>
                    <Button
                      onClick={() => setIsOpen(false)}
                      as={NavLink}
                      to="/lounge/freetests"
                      w="100%"
                      py={7}
                      color="#37496A"
                      bg="transparent"
                      borderRadius={0}
                      _hover={{ bg: 'orange.300' }}
                      _activeLink={{ bg: 'orange.300' }}
                    >
                      Tests Gratis
                    </Button>
                    <Button
                      onClick={() => setIsOpen(false)}
                      as={NavLink}
                      to="/lounge/shop"
                      w="100%"
                      py={7}
                      color="#37496A"
                      bg="transparent"
                      borderRadius={0}
                      _hover={{ bg: 'orange.300' }}
                      _activeLink={{ bg: 'orange.300' }}
                    >
                      Tienda
                    </Button>
                    <Button
                      onClick={() => setIsOpen(false)}
                      as={NavLink}
                      to="/lounge/contact"
                      w="100%"
                      py={7}
                      color="#37496A"
                      bg="transparent"
                      borderRadius={0}
                      _hover={{ bg: 'orange.300' }}
                      _activeLink={{ bg: 'orange.300' }}
                    >
                      Contacto
                    </Button>
                    <Button
                      onClick={() => setIsOpen(false)}
                      as={NavLink}
                      to="/lounge/cart"
                      w="100%"
                      py={7}
                      color="#37496A"
                      bg="transparent"
                      borderRadius={0}
                      _hover={{ bg: 'orange.300' }}
                      _activeLink={{ bg: 'orange.300' }}
                    >
                      Carrito
                    </Button>
                    <Button
                      onClick={() => setIsOpen(false)}
                      as={NavLink}
                      to="/lounge/login"
                      w="100%"
                      py={7}
                      color="#37496A"
                      bg="transparent"
                      borderRadius={0}
                      _hover={{ bg: 'orange.300' }}
                      _activeLink={{ bg: 'orange.300' }}
                    >
                      Mi cuenta
                    </Button>
                  </Box>
                </Collapse>
                <Box>
                  <Flex justifyContent="end">
                    <IconButton
                      icon={darkMode ? <FiSun fontSize="1.25rem" /> : <FiMoon fontSize="1.25rem" />}
                      onClick={() => setDarkMode(!darkMode)}
                      color="white"
                      bg="transparent"
                      _hover={{ color: '#37496A', bg: 'orange.300' }}
                    >
                      Toggle Theme
                    </IconButton>
                    <IconButton
                      // variant="ghost"
                      icon={isOpen ? <FiChevronUp fontSize="1.25rem" /> : <FiMenu fontSize="1.25rem" />}
                      onClick={() => setIsOpen(!isOpen)}
                      color="white"
                      bg="transparent"
                      _hover={{ color: '#37496A', bg: 'orange.300' }}
                    />
                  </Flex>
                </Box>
              </Box>
            )}
          </Flex>
          {isDesktop && (
            <Box float="right" w="250px">
              <Container>
                <Flex>
                  <Input
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    onBlur={() => setShowInput(false)}
                    display={showInput ? 'block' : 'none'}
                    onKeyPress={e => {
                      if (e.key === 'Enter') {
                        handleSearch();
                      }
                    }}
                    textAlign="center"
                    color="white"
                    bg="transparent"
                    border="solid 1px whitesmoke"
                    placeholder="Buscar..."
                    _placeholder={{ color: 'gray' }}
                    _hover={{ border: 'solid 1px orange' }}
                  />
                </Flex>
              </Container>
            </Box>
          )}
        </Box>
      ) : (
        <Box as="nav" h="18vh" p="0 20px">
          <Flex justify="space-between" p="30px 0 5px 0" maxW={'1440px'} m="0 auto">
            <Flex>
              <NavLink to="/lounge/home">
                <Image src={logo} alt="Uniforme Azul" objectFit="contain" w="178px" h="95%" />
              </NavLink>
            </Flex>
            <HStack>
              {isDesktop && (
                <ButtonGroup>
                  <Button
                    as={NavLink}
                    to="/lounge/home"
                    color="#37496A"
                    bg="transparent"
                    _hover={{ bg: 'orange.300' }}
                    _activeLink={{ bg: 'orange.300' }}
                  >
                    Inicio
                  </Button>
                  <Button
                    as={NavLink}
                    to="/lounge/courses"
                    color="#37496A"
                    bg="transparent"
                    _hover={{ bg: 'orange.300' }}
                    _activeLink={{ bg: 'orange.300' }}
                  >
                    Cursos
                  </Button>
                  <Button
                    as={NavLink}
                    to="/lounge/freetests"
                    color="#37496A"
                    bg="transparent"
                    _hover={{ bg: 'orange.300' }}
                    _activeLink={{ bg: 'orange.300' }}
                  >
                    Tests Gratis
                  </Button>
                  <Button
                    as={NavLink}
                    to="/lounge/shop"
                    color="#37496A"
                    bg="transparent"
                    _hover={{ bg: 'orange.300' }}
                    _activeLink={{ bg: 'orange.300' }}
                  >
                    Tienda
                  </Button>
                  <Button
                    as={NavLink}
                    to="/lounge/contact"
                    color="#37496A"
                    bg="transparent"
                    _hover={{ bg: 'orange.300' }}
                    _activeLink={{ bg: 'orange.300' }}
                  >
                    Contacto
                  </Button>
                </ButtonGroup>
              )}
            </HStack>
            {isDesktop ? (
              <HStack spacing="4">
                <ButtonGroup spacing="1">
                  <Flex flexDirection="column">
                    <IconButton
                      onClick={() => setShowInput(!showInput)}
                      icon={<FiSearch fontSize="1.25rem" />}
                      color="#37496A"
                      bg="transparent"
                      _hover={{ bg: 'orange.300' }}
                    />
                  </Flex>
                  <IconButton
                    as={NavLink}
                    to="/lounge/cart"
                    icon={<FiShoppingCart fontSize="1.25rem" />}
                    color="#37496A"
                    bg="transparent"
                    _hover={{ bg: 'orange.300' }}
                    _activeLink={{ bg: 'orange.300' }}
                  />
                  <IconButton
                    // to="/myaccount"  --> Cuando podamos privatizar la ruta con el token
                    as={NavLink}
                    to="/lounge/login"
                    icon={<FiUser fontSize="1.25rem" />}
                    color="#37496A"
                    bg="transparent"
                    _hover={{ bg: 'orange.300' }}
                    _activeLink={{ bg: 'orange.300' }}
                  />
                  <IconButton
                    icon={darkMode ? <FiSun fontSize="1.25rem" /> : <FiMoon fontSize="1.25rem" />}
                    onClick={() => setDarkMode(!darkMode)}
                    color="#37496A"
                    bg="transparent"
                    _hover={{ bg: 'orange.300' }}
                  >
                    Toggle Theme
                  </IconButton>
                </ButtonGroup>
                {/* <Avatar boxSize="10" name="Christoph Winston" src="/* token.user.photo *" /> */}
              </HStack>
            ) : (
              <Box display="flex" position="relative" zIndex="1">
                <Collapse in={isOpen} style={{ position: 'absolute', top: '80px', right: '-25px' }}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="start"
                    w="100vw"
                    h="300vh"
                    p="5% 0"
                    color="#37496A"
                    bg="whitesmoke"
                  >
                    <Input
                      value={searchTerm}
                      onChange={e => setSearchTerm(e.target.value)}
                      onKeyPress={e => {
                        if (e.key === 'Enter') {
                          handleSearch();
                        }
                      }}
                      w="50%"
                      textAlign="center"
                      color="#37496A"
                      border="solid 1px gray"
                      placeholder="Buscar..."
                      _placeholder={{ color: 'gray' }}
                      _hover={{ border: 'solid 1px orange' }}
                    />
                    <Button
                      as={NavLink}
                      to="/lounge/home"
                      onClick={() => setIsOpen(false)}
                      w="100%"
                      mt={3}
                      py={7}
                      color="#37496A"
                      bg="transparent"
                      borderRadius={0}
                      _hover={{ bg: 'orange.300' }}
                      _activeLink={{ bg: 'orange.300' }}
                    >
                      Inicio
                    </Button>
                    <Button
                      as={NavLink}
                      to="/lounge/courses"
                      onClick={() => setIsOpen(false)}
                      w="100%"
                      py={7}
                      color="#37496A"
                      bg="transparent"
                      borderRadius={0}
                      _hover={{ bg: 'orange.300' }}
                      _activeLink={{ bg: 'orange.300' }}
                    >
                      Cursos
                    </Button>
                    <Button
                      as={NavLink}
                      to="/lounge/freetests"
                      onClick={() => setIsOpen(false)}
                      w="100%"
                      py={7}
                      color="#37496A"
                      bg="transparent"
                      borderRadius={0}
                      _hover={{ bg: 'orange.300' }}
                      _activeLink={{ bg: 'orange.300' }}
                    >
                      Tests Gratis
                    </Button>
                    <Button
                      as={NavLink}
                      to="/lounge/shop"
                      onClick={() => setIsOpen(false)}
                      w="100%"
                      py={7}
                      color="#37496A"
                      bg="transparent"
                      borderRadius={0}
                      _hover={{ bg: 'orange.300' }}
                      _activeLink={{ bg: 'orange.300' }}
                    >
                      Tienda
                    </Button>
                    <Button
                      as={NavLink}
                      to="/lounge/contact"
                      onClick={() => setIsOpen(false)}
                      w="100%"
                      py={7}
                      color="#37496A"
                      bg="transparent"
                      borderRadius={0}
                      _hover={{ bg: 'orange.300' }}
                      _activeLink={{ bg: 'orange.300' }}
                    >
                      Contacto
                    </Button>
                    <Button
                      as={NavLink}
                      to="/lounge/cart"
                      onClick={() => setIsOpen(false)}
                      w="100%"
                      py={7}
                      color="#37496A"
                      bg="transparent"
                      borderRadius={0}
                      _hover={{ bg: 'orange.300' }}
                      _activeLink={{ bg: 'orange.300' }}
                    >
                      Carrito
                    </Button>
                    <Button
                      as={NavLink}
                      to="/lounge/login"
                      onClick={() => setIsOpen(false)}
                      w="100%"
                      py={7}
                      color="#37496A"
                      bg="transparent"
                      borderRadius={0}
                      _hover={{ bg: 'orange.300' }}
                      _activeLink={{ bg: 'orange.300' }}
                    >
                      Mi cuenta
                    </Button>
                  </Box>
                </Collapse>
                <Box>
                  <Flex justifyContent="end">
                    <IconButton
                      onClick={() => setDarkMode(!darkMode)}
                      icon={
                        darkMode ? (
                          <FiSun fontSize="1.25rem" color="#23375b" />
                        ) : (
                          <FiMoon fontSize="1.25rem" color="#23375b" />
                        )
                      }
                      color="#37496A"
                      bg="transparent"
                      _hover={{ bg: 'orange.300' }}
                    >
                      Toggle Theme
                    </IconButton>
                    <IconButton
                      onClick={() => setIsOpen(!isOpen)}
                      icon={
                        isOpen ? (
                          <FiChevronUp fontSize="1.25rem" color="#23375b" />
                        ) : (
                          <FiMenu fontSize="1.25rem" color="#23375b" />
                        )
                      }
                      color="#37496A"
                      bg="transparent"
                      _hover={{ bg: 'orange.300' }}
                    />
                  </Flex>
                </Box>
              </Box>
            )}
          </Flex>
          {isDesktop && (
            <Box w="250px" float="right">
              <Container>
                <Flex>
                  <Input
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    display={showInput ? 'block' : 'none'}
                    onBlur={() => setShowInput(false)}
                    onKeyPress={e => {
                      if (e.key === 'Enter') {
                        handleSearch();
                      }
                    }}
                    textAlign="center"
                    color="#37496A"
                    bg="transparent"
                    border="solid 1px #37496A"
                    placeholder="Buscar..."
                    _placeholder={{ color: 'gray' }}
                    _hover={{ border: 'solid 1px orange' }}
                  />
                </Flex>
              </Container>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};
