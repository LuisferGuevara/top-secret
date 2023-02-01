import {
  //   Avatar,
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
} from "@chakra-ui/react";
import React, { useState, useEffect, useRef } from "react";
import {
  FiUser,
  FiMenu,
  FiSearch,
  FiShoppingCart,
  FiMoon,
  FiSun,
  FiChevronUp,
} from "react-icons/fi";
// import logo2 from "../../../assets/images/logoWhite.png";
// import logo from "../../../assets/images/logoBlack.png";

import { NavLink } from "react-router-dom";
//import "./Navbar.scss";

export const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const [searchTerm, setSearchTerm] = useState("");
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
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
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
        <Box as="nav" h="140px" p="0 20px"
       backgroundImage={`linear-gradient(to right, #24243e, #302b63, #0f0c29)`}
        >
          <Flex justify="space-between" p="30px 0 5px 0" maxW={"1440px"} m="0 auto">
            <Flex>
              <NavLink to="/">
                {/* {hasScrolled ? ( */}
                <Image
                  // src={logo2}
                  alt="Papi"
                  objectFit="contain"
                  w="178px"
                  h="95%"
                />
                {/* ) : (
                <Image
                  src={logo}
                  alt="Dan Abramov"
                  objectFit="contain"
                  w="180px"
                  h="100%"
                />
              )} */}
              </NavLink>
            </Flex>
            <HStack>
              {isDesktop && (
                <ButtonGroup color="white">
                  <Button
                    as={NavLink}
                    to="/"
                    bg="transparent"
                    _hover={{ color: "#23375b", bg: "orange.300" }}
                  >
                    Inicio
                  </Button>
                  <Button
                    as={NavLink}
                    to="/courses"
                    bg="transparent"
                    _hover={{ color: "#23375b", bg: "orange.300" }}
                  >
                    Cursos
                  </Button>
                  <Button
                    as={NavLink}
                    to="/freetests"
                    bg="transparent"
                    _hover={{ color: "#23375b", bg: "orange.300" }}
                  >
                    Tests Gratis
                  </Button>
                  <Button
                    as={NavLink}
                    to="/shop"
                    bg="transparent"
                    _hover={{ color: "#23375b", bg: "orange.300" }}
                  >
                    Tienda
                  </Button>
                  <Button
                    as={NavLink}
                    to="/contact"
                    bg="transparent"
                    _hover={{ color: "#23375b", bg: "orange.300" }}
                  >
                    Contacto
                  </Button>
                </ButtonGroup>
              )}
            </HStack>
            {isDesktop ? (
              <HStack spacing="4">
                <ButtonGroup variant="ghost" spacing="1">
                  <Flex flexDirection="column">
                    <IconButton
                      onClick={() => setShowInput(!showInput)}
                      icon={<FiSearch fontSize="1.25rem" />}
                      color="white"
                      _hover={{ color: "#23375b", bg: "orange.300" }}
                    />
                  </Flex>
                  <IconButton
                    as={NavLink}
                    to="/cart"
                    icon={<FiShoppingCart fontSize="1.25rem" />}
                    color="white"
                    _hover={{ color: "#23375b", bg: "orange.300" }}
                  />
                  <IconButton
                    as={NavLink}
                    // to="/myaccount"  --> Cuando podamos privatizar la ruta con el token
                    to="/login"
                    icon={<FiUser fontSize="1.25rem" />}
                    color="white"
                    _hover={{ color: "#23375b", bg: "orange.300" }}
                  />
                  <IconButton
                    icon={
                      darkMode ? (
                        <FiSun fontSize="1.25rem" />
                      ) : (
                        <FiMoon fontSize="1.25rem" />
                      )
                    }
                    color="white"
                    _hover={{ color: "#23375b", bg: "orange.300" }}
                    onClick={() => setDarkMode(!darkMode)}
                  >
                    Toggle Theme
                  </IconButton>
                </ButtonGroup>
                {/* <Avatar boxSize="10" name="Christoph Winston" src="/* token.user.photo *" /> */}
              </HStack>
            ) : (
              <Box display="flex" position="relative" zIndex="1">
                <Collapse
                  in={isOpen}
                  style={{ position: "absolute", top: "80px", right: "-25px" }}
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="start"
                    w="100vw"
                    h="300vh"
                    p="5% 0"
                    bg="whitesmoke"
                    color="#23375b"
                  >
                    <Input
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          handleSearch();
                        }
                      }}
                      placeholder="Buscar..."
                      _placeholder={{ color: "gray" }}
                      _hover={{ border: "solid 1px orange" }}
                      w="50%"
                      border="solid 1px #8AB3F2"
                      textAlign="center"
                    />
                    <Button
                      onClick={() => setIsOpen(false)}
                      as={NavLink}
                      to="/forall/home"
                      w="100%"
                      borderRadius={0}
                      bg="transparent"
                      mt={3}
                      py={7}
                      _hover={{ bg: "orange.300" }}
                    >
                      Inicio
                    </Button>
                    <Button
                      onClick={() => setIsOpen(false)}
                      as={NavLink}
                      to="/courses"
                      w="100%"
                      borderRadius={0}
                      py={7}
                      _hover={{ bg: "orange.300" }}
                    >
                      Cursos
                    </Button>
                    <Button
                      onClick={() => setIsOpen(false)}
                      as={NavLink}
                      to="/freetests"
                      w="100%"
                      borderRadius={0}
                      py={7}
                      _hover={{ bg: "orange.300" }}
                    >
                      Tests Gratis
                    </Button>
                    <Button
                      onClick={() => setIsOpen(false)}
                      as={NavLink}
                      to="/shop"
                      w="100%"
                      borderRadius={0}
                      py={7}
                      _hover={{ bg: "orange.300" }}
                    >
                      Tienda
                    </Button>
                    <Button
                      onClick={() => setIsOpen(false)}
                      as={NavLink}
                      to="/contact"
                      w="100%"
                      borderRadius={0}
                      py={7}
                      _hover={{ bg: "orange.300" }}
                    >
                      Contacto
                    </Button>
                    <Button
                      onClick={() => setIsOpen(false)}
                      as={NavLink}
                      to="/cart"
                      w="100%"
                      borderRadius={0}
                      py={7}
                      _hover={{ bg: "orange.300" }}
                    >
                      Carrito
                    </Button>
                    <Button
                      onClick={() => setIsOpen(false)}
                      as={NavLink}
                      to="/login"
                      w="100%"
                      borderRadius={0}
                      py={7}
                      _hover={{ bg: "orange.300" }}
                    >
                      Mi cuenta
                    </Button>
                  </Box>
                </Collapse>
                <Box>
                  <Flex justifyContent="end">
                    <IconButton
                      icon={
                        darkMode ? (
                          <FiSun fontSize="1.25rem" />
                        ) : (
                          <FiMoon fontSize="1.25rem" />
                        )
                      }
                      onClick={() => setDarkMode(!darkMode)}
                      variant="ghost"
                      color="white"
                      _hover={{ color: "#23375b", bg: "orange.300" }}
                    >
                      Toggle Theme
                    </IconButton>
                    <IconButton
                      variant="ghost"
                      icon={
                        isOpen ? (
                          <FiChevronUp fontSize="1.25rem" />
                        ) : (
                          <FiMenu fontSize="1.25rem" />
                        )
                      }
                      // ref={menuRef}
                      onClick={() => setIsOpen(!isOpen)}
                      color="white"
                      _hover={{ color: "#23375b", bg: "orange.300" }}
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
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onBlur={() => setShowInput(false)}
                    placeholder="Buscar..."
                    _placeholder={{ color: "gray" }}
                    textAlign="center"
                    color="white"
                    border="solid 1px whitesmoke"
                    _hover={{ border: "solid 1px orange" }}
                    display={showInput ? "block" : "none"}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleSearch();
                      }
                    }}
                  />
                </Flex>
              </Container>
            </Box>
          )}
        </Box>
      ) : (
        <Box as="nav" h="18vh" p="0 20px">
          <Flex justify="space-between" p="30px 0 5px 0">
            <Flex>
              <NavLink to="/">
                <Image
                  // src={logo}
                  alt="Papi"
                  objectFit="contain"
                  w="178px"
                  h="95%"
                />
              </NavLink>
            </Flex>
            <HStack>
              {isDesktop && (
                <ButtonGroup color="#23375b">
                  <Button
                    as={NavLink}
                    to="/"
                    bg="transparent"
                    _hover={{ bg: "orange.300" }}
                  >
                    Inicio
                  </Button>
                  <Button
                    as={NavLink}
                    to="/courses"
                    bg="transparent"
                    _hover={{ bg: "orange.300" }}
                  >
                    Cursos
                  </Button>
                  <Button
                    as={NavLink}
                    to="/freetests"
                    bg="transparent"
                    _hover={{ bg: "orange.300" }}
                  >
                    Tests Gratis
                  </Button>
                  <Button
                    as={NavLink}
                    to="/shop"
                    bg="transparent"
                    _hover={{ bg: "orange.300" }}
                  >
                    Tienda
                  </Button>
                  <Button
                    as={NavLink}
                    to="/contact"
                    bg="transparent"
                    _hover={{ bg: "orange.300" }}
                  >
                    Contacto
                  </Button>
                </ButtonGroup>
              )}
            </HStack>
            {isDesktop ? (
              <HStack spacing="4">
                <ButtonGroup variant="ghost" spacing="1">
                  <Flex flexDirection="column">
                    <IconButton
                      onClick={() => setShowInput(!showInput)}
                      icon={<FiSearch fontSize="1.25rem" />}
                      color="#23375b"
                      _hover={{ bg: "orange.300" }}
                    />
                  </Flex>
                  <IconButton
                    as={NavLink}
                    to="/cart"
                    icon={<FiShoppingCart fontSize="1.25rem" />}
                    color="#23375b"
                    _hover={{ bg: "orange.300" }}
                  />
                  <IconButton
                    as={NavLink}
                    // to="/myaccount"  --> Cuando podamos privatizar la ruta con el token
                    to="/login"
                    icon={<FiUser fontSize="1.25rem" />}
                    color="#23375b"
                    _hover={{ bg: "orange.300" }}
                  />
                  <IconButton
                    icon={
                      darkMode ? (
                        <FiSun fontSize="1.25rem" />
                      ) : (
                        <FiMoon fontSize="1.25rem" />
                      )
                    }
                    onClick={() => setDarkMode(!darkMode)}
                    color="#23375b"
                    _hover={{ bg: "orange.300" }}
                  >
                    Toggle Theme
                  </IconButton>
                </ButtonGroup>
                {/* <Avatar boxSize="10" name="Christoph Winston" src="/* token.user.photo *" /> */}
              </HStack>
            ) : (
              <Box display="flex" position="relative" zIndex="1">
                <Collapse
                  in={isOpen}
                  style={{ position: "absolute", top: "80px", right: "-25px" }}
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="start"
                    w="100vw"
                    h="300vh"
                    p="5% 0"
                    bg="whitesmoke"
                    color="#23375b"
                  >
                    <Input
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          handleSearch();
                        }
                      }}
                      placeholder="Buscar..."
                      _placeholder={{ color: "gray" }}
                      color="#23375b"
                      w="50%"
                      border="solid 1px gray"
                      textAlign="center"
                      _hover={{ border: "solid 1px orange" }}
                    />
                    <Button
                      onClick={() => setIsOpen(false)}
                      as={NavLink}
                      to="/"
                      w="100%"
                      borderRadius={0}
                      bg="transparent"
                      mt={3}
                      py={7}
                      _hover={{ bg: "orange.300" }}
                    >
                      Inicio
                    </Button>
                    <Button
                      onClick={() => setIsOpen(false)}
                      as={NavLink}
                      to="/courses"
                      w="100%"
                      borderRadius={0}
                      py={7}
                      _hover={{ bg: "orange.300" }}
                    >
                      Cursos
                    </Button>
                    <Button
                      onClick={() => setIsOpen(false)}
                      as={NavLink}
                      to="/freetests"
                      w="100%"
                      borderRadius={0}
                      py={7}
                      _hover={{ bg: "orange.300" }}
                    >
                      Tests Gratis
                    </Button>
                    <Button
                      onClick={() => setIsOpen(false)}
                      as={NavLink}
                      to="/shop"
                      w="100%"
                      borderRadius={0}
                      py={7}
                      _hover={{ bg: "orange.300" }}
                    >
                      Tienda
                    </Button>
                    <Button
                      onClick={() => setIsOpen(false)}
                      as={NavLink}
                      to="/contact"
                      w="100%"
                      borderRadius={0}
                      py={7}
                      _hover={{ bg: "orange.300" }}
                    >
                      Contacto
                    </Button>
                    <Button
                      onClick={() => setIsOpen(false)}
                      as={NavLink}
                      to="/cart"
                      w="100%"
                      borderRadius={0}
                      py={7}
                      _hover={{ bg: "orange.300" }}
                    >
                      Carrito
                    </Button>
                    <Button
                      onClick={() => setIsOpen(false)}
                      as={NavLink}
                      to="/login"
                      w="100%"
                      borderRadius={0}
                      py={7}
                      _hover={{ bg: "orange.300" }}
                    >
                      Mi cuenta
                    </Button>
                  </Box>
                </Collapse>
                <Box>
                  <Flex justifyContent="end">
                    <IconButton
                      icon={
                        darkMode ? (
                          <FiSun fontSize="1.25rem" color="#23375b" />
                        ) : (
                          <FiMoon fontSize="1.25rem" color="#23375b" />
                        )
                      }
                      onClick={() => setDarkMode(!darkMode)}
                      _hover={{ bg: "orange.300" }}
                      variant="ghost"
                    >
                      Toggle Theme
                    </IconButton>
                    <IconButton
                      variant="ghost"
                      icon={
                        isOpen ? (
                          <FiChevronUp fontSize="1.25rem" color="#23375b" />
                        ) : (
                          <FiMenu fontSize="1.25rem" color="#23375b" />
                        )
                      }
                      // ref={menuRef}
                      _hover={{ bg: "orange.300" }}
                      onClick={() => setIsOpen(!isOpen)}
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
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onBlur={() => setShowInput(false)}
                    placeholder="Buscar..."
                    _placeholder={{ color: "gray" }}
                    textAlign="center"
                    color="#23375b"
                    border="solid 1px #23375b"
                    _hover={{ border: "solid 1px orange" }}
                    display={showInput ? "block" : "none"}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleSearch();
                      }
                    }}
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
