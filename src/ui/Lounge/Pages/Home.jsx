import React from "react";
import { FaRobot } from "react-icons/fa";
import { FiBox, FiClipboard, FiHelpCircle, FiSettings } from "react-icons/fi";
import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  ButtonGroup,
  Button,
  Icon,
  Grid,
  useBreakpointValue,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Wellcome = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <Box
      maxW={{
        base: "3xl",
        lg: "7xl",
      }}
      mx="auto"
      px={{
        base: "4",
        md: "8",
        lg: "12",
      }}
      py={{
        base: "6",
        md: "8",
        lg: "12",
      }}
    >
      <Box >
        {isDesktop ? (
          <Flex>
            <Flex
            flexDirection={"column"}
            alignItems="center"
              spacing={{
                base: "8",
                md: "10",
              }}
              flex="2"
              p="20px"
              
            >
              <Heading fontSize={50} letterSpacing={3} color="#23375B">
                BIENVENID@S
              </Heading>
              <Text m="80px 0 20px 0" color="#23375B">
                Prepárate para mejorar tu escalafón
              </Text>
              <Text w={{
                sm:"100%",
                md:"600px"
              }} color="#23375B" textAlign="center" >
                En Uniforme Azul te queremos ayudar con nuestros cursos de
                exámenes tipo test, libros de resúmenes, esquemas y exámenes
                tipo test en papel
              </Text>
            </Flex>
            <Box display="flex">
              <Flex
                flexDirection="column"
                justifyContent="space-evenly"
                p="0"
              >
                <Button
                  p={7}
                  bg="#ffffffc4"
                  color="#23375b"
                  justifyContent="space-around"
                  _hover={{
                    bg: "white",
                    transform: "scale(1.1)",
                    transition: "transform 500ms",
                    boxShadow: "6px 8px 5px -2px rgba(35,55,91,0.75)"
                  }}
                >
                  {<FaRobot fontSize="1.6rem" />} Asistente
                </Button>
                <Button
                  as={NavLink}
                  to="/courses"
                  p={7}
                  w="100%"
                  bg="#ffffffc4"
                  color="#23375b"
                  justifyContent="space-around"
                  _hover={{
                    bg: "white",
                    transform: "scale(1.1)",
                    transition: "transform 500ms",
                    boxShadow: "6px 8px 5px -2px rgba(35,55,91,0.75)"
                  }}
                >
                  Acceder a los cursos
                </Button>
                <Button
                  as={NavLink}
                  to="/shop"
                  p={7}
                  w="100%"
                  bg="#ffffffc4"
                  color="#23375b"
                  justifyContent="space-around"
                  _hover={{
                    bg: "white",
                    transform: "scale(1.1)",
                    transition: "transform 500ms",
                    boxShadow: "6px 8px 5px -2px rgba(35,55,91,0.75)"
                  }}
                >
                  Acceder a la tienda
                </Button>
              </Flex>
            </Box>
          </Flex>
        ) : (
          <Flex direction="column">
            <Box>
              <Heading fontSize={40} letterSpacing={3} color="#23375B">
                BIENVENID@S
              </Heading>
              <Text m="40px 0 20px 0" color="#23375B">
                Prepárate para mejorar tu escalafón
              </Text>
              <Text color="#23375B">
                En Uniforme Azul te queremos ayudar con nuestros cursos de
                exámenes tipo test, libros de resúmenes, esquemas y exámenes
                tipo test en papel
              </Text>
            </Box>
            <Box mt="50px">
              <ButtonGroup
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap="15px"
              >
                <Button
                  p={7}
                  w="100%"
                  bg="#ffffffc4"
                  color="#23375b"
                  _hover={{
                    bg: "white",
                    transform: "scale(1.02)",
                    transition: "transform 500ms",
                  }}
                >
                  Asistente
                </Button>
                <Button
                  as={NavLink}
                  to="/courses"
                  p={7}
                  w="100%"
                  bg="#ffffffc4"
                  color="#23375b"
                  _hover={{
                    bg: "white",
                    transform: "scale(1.02)",
                    transition: "transform 500ms",
                  }}
                >
                  Acceder a los cursos
                </Button>
                <Button
                  as={NavLink}
                  to="/shop"
                  p={7}
                  w="100%"
                  bg="#ffffffc4"
                  color="#23375b"
                  _hover={{
                    bg: "white",
                    transform: "scale(1.02)",
                    transition: "transform 500ms",
                  }}
                >
                  Acceder a la tienda
                </Button>
              </ButtonGroup>
            </Box>
          </Flex>
        )}
      </Box>
      {isDesktop ? (
        <Box bg="#ffffff4e" m="100px" p={7} borderRadius="20px" boxShadow="15px 13px 13px -8px rgba(35,55,91,0.75)">
          <Heading fontSize={20} color="#23375b">
            NUESTRA DIFERENCIA
          </Heading>
          <Grid templateColumns="1fr 1fr" gap={10} p="50px">
            <Flex
              bg="#215DBB"
              height="120px"
              alignItems="center"
              justifyContent="space-evenly"
              borderRadius="0 50px 0 50px"
              color="whitesmoke"
            >
              <FiSettings fontSize="3rem" />
              <Heading fontSize={18}>Experiencia Propia</Heading>
            </Flex>
            <Flex
              bg="#602080"
              alignItems="center"
              justifyContent="space-evenly"
              borderRadius="50px 0 50px 0"
              color="whitesmoke"
            >
              <FiHelpCircle fontSize="3rem" />
              <Heading fontSize={18}>Ayuda Online</Heading>
            </Flex>
            <Flex
              bg="#602080"
              height="120px"
              alignItems="center"
              justifyContent="space-evenly"
              borderRadius="50px 0 50px 0"
              color="whitesmoke"
            >
              <FiClipboard fontSize="3rem" />
              <Heading fontSize={18}>Esquemas Clave</Heading>
            </Flex>
            <Flex
              bg="#215DBB"
              alignItems="center"
              justifyContent="space-evenly"
              borderRadius="0 50px 0 50px"
              color="whitesmoke"
            >
              <FiBox fontSize="3rem" />
              <Heading fontSize={18}>Material Pre Ávila</Heading>
            </Flex>
          </Grid>
        </Box>
      ) : (
        <Box bg="#ffffff4e" mt="20" p={7} borderRadius="20px">
          <Heading fontSize={20} color="#23375b">
            NUESTRA DIFERENCIA
          </Heading>
          <Grid gap={5} pt="10">
            <Flex
              bg="#215DBB"
              height="100px"
              alignItems="center"
              justifyContent="space-evenly"
              borderRadius="10px"
              color="whitesmoke"
            >
              <FiSettings fontSize="3rem" />
              <Heading fontSize={18}>Experiencia Propia</Heading>
            </Flex>
            <Flex
              bg="#602080"
              height="100px"
              alignItems="center"
              justifyContent="space-evenly"
              borderRadius="10px"
              color="whitesmoke"
            >
              <FiHelpCircle fontSize="3rem" />
              <Heading fontSize={18}>Ayuda Online</Heading>
            </Flex>
            <Flex
              bg="#215DBB"
              height="100px"
              alignItems="center"
              justifyContent="space-evenly"
              borderRadius="10px"
              color="whitesmoke"
            >
              <FiClipboard fontSize="3rem" />
              <Heading fontSize={18}>Esquemas Clave</Heading>
            </Flex>
            <Flex
              bg="#602080"
              height="100px"
              alignItems="center"
              justifyContent="space-evenly"
              borderRadius="10px"
              color="whitesmoke"
            >
              <FiBox fontSize="3rem" />
              <Heading fontSize={18}>Material Pre Ávila</Heading>
            </Flex>
          </Grid>
        </Box>
      )}
      {isDesktop ? (
        <Box
          bg="#ffffffc4"
          m="100px 200px"
          p={10}
          spacing="5px"
          borderRadius="25px"
          boxShadow="15px 13px 13px -8px rgba(35,55,91,0.75)"
        >
          <Heading fontSize={20} color="#23375b">
            ¿ ALGUNA DUDA O CONSULTA ?
          </Heading>
          <Text color="#23375b" my={10}>
            No dudes en llamarnos o escribirnos. Estaremos encantados de
            ayudarte.
          </Text>
          <Button
            as={NavLink}
            to="/contact"
            bg="#23375B"
            color="whitesmoke"
            border="solid 1px #23375b"
            _hover={{
              color: "whitesmoke",
              bg: "#23375b",
              transform: "scale(1.05)",
              transition: "transform 500ms",
            }}
          >
            CONTACTO
          </Button>
        </Box>
      ) : (
        <Box
          w="100%"
          bg="#ffffffc4"
          mt="20"
          p={6}
          spacing="5px"
          borderRadius="25px"
        >
          <Heading fontSize={15} color="#23375b">
            ¿ ALGUNA DUDA O CONSULTA ?
          </Heading>
          <Text fontSize={14} color="#23375b" my={10}>
            No dudes en llamarnos o escribirnos. Estaremos encantados de
            ayudarte.
          </Text>
          <Button
            as={NavLink}
            w="30"
            to="/contact"
            bg="#23375B"
            color="white"
            border="solid 1px #23375b"
            _hover={{
              color: "#23375B",
              bg: "#23375b",
              transform: "scale(1.05)",
              transition: "transform 500ms",
            }}
          >
            CONTACTO
          </Button>
        </Box>
      )}
      {isDesktop ? (
        <Stack paddingX={100} mb="100px" color="#23375B">
          <Heading>OPINIONES</Heading>
          <Box bg="#23375b"  border="1px" borderRadius="20px" p={6}>
            <Text color="whitesmoke">Material y Tests realmente fantástico</Text>
          </Box>
          <Box>
            <Icon></Icon>
            <Text>"Ayuda"</Text>
          </Box>
          <Box></Box> {/* Función para que cambiando el resultado */}
        </Stack>
      ) : (
        <Stack w="100%" my="20" gap={3}>
          <Heading fontSize={22}>OPINIONES</Heading>
          <Box bg="#23375b" border="1px" borderRadius="20px" p={6}>
            <Text fontSize={14}>Material y Tests realmente fantástico</Text>
          </Box>
          <Box>
            <Icon></Icon>
            <Text>"Paquito"</Text>
          </Box>
          <Box></Box> {/* Función para que cambiando el resultado */}
        </Stack>
      )}
    </Box>
  );
};

export default Wellcome;
