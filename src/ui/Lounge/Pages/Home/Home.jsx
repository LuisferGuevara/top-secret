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

const HomeLounge = () => {
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
              <Heading fontSize={50} letterSpacing={3} color="#37496A">
                BIENVENID@S
              </Heading>
              <Text m="80px 0 20px 0" color="#37496A">
                Prepárate para mejorar tu escalafón
              </Text>
              <Text w={{
                sm:"100%",
                md:"600px"
              }} color="#37496A" textAlign="center" >
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
                  bg="#37496A"
                  color="orange.300"
                  justifyContent="space-around"
                  _hover={{
                    bg: "#435981",
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
                  bg="#37496A"
                  color="orange.300"
                  justifyContent="space-around"
                  _hover={{
                    bg: "#435981",
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
                  bg="#37496A"
                  color="orange.300"
                  justifyContent="space-around"
                  _hover={{
                    bg: "#435981",
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
              <Heading fontSize={40} letterSpacing={3} color="#37496A">
                BIENVENID@S
              </Heading>
              <Text m="40px 0 20px 0" color="#37496A">
                Prepárate para mejorar tu escalafón
              </Text>
              <Text color="#37496A">
                En Uniforme Azul te queremos ayudar con nuestros cursos de
                exámenes tipo test, libros de resúmenes, esquemas y exámenes
                tipo test en papel
              </Text>
            </Box>
            <Box mt="50px">
              <Flex
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap="15px"
              >
                <Button
                  p={7}
                  w="100%"
                  bg="#37496A"
                  color="orange.300"
                  _hover={{
                    bg: "#435981",
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
                  bg="#37496A"
                  color="orange.300"
                  _hover={{
                    bg: "#435981",
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
                  bg="#37496A"
                  color="orange.300"
                  _hover={{
                    bg: "#435981",
                    transform: "scale(1.02)",
                    transition: "transform 500ms",
                  }}
                >
                  Acceder a la tienda
                </Button>
              </Flex>
            </Box>
          </Flex>
        )}
      </Box>
      {isDesktop ? (
        <Box bg="#ffffff4e" m="100px" p={7} borderRadius="20px" boxShadow="15px 13px 13px -8px rgba(35,55,91,0.75)">
          <Heading fontSize={20} color="#37496A">
            NUESTRA DIFERENCIA
          </Heading>
          <Grid templateColumns="1fr 1fr" gap={10} p="50px">
            <Flex
              bg="gray.300"
              height="120px"
              alignItems="center"
              justifyContent="space-evenly"
              borderRadius="0 50px 0 50px"
              color="#37496A"
            >
              <FiSettings fontSize="3rem" />
              <Heading fontSize={18}>Experiencia Propia</Heading>
            </Flex>
            <Flex
              bg="#37496A"
              alignItems="center"
              justifyContent="space-evenly"
              borderRadius="50px 0 50px 0"
              color="orange.300"
            >
              <FiHelpCircle fontSize="3rem" />
              <Heading fontSize={18}>Ayuda Online</Heading>
            </Flex>
            <Flex
              bg="#37496A"
              height="120px"
              alignItems="center"
              justifyContent="space-evenly"
              borderRadius="50px 0 50px 0"
              color="orange.300"
            >
              <FiClipboard fontSize="3rem" />
              <Heading fontSize={18}>Esquemas Clave</Heading>
            </Flex>
            <Flex
              bg="gray.300"
              alignItems="center"
              justifyContent="space-evenly"
              borderRadius="0 50px 0 50px"
              color="#37496A"
            >
              <FiBox fontSize="3rem" />
              <Heading fontSize={18}>Material Pre Ávila</Heading>
            </Flex>
          </Grid>
        </Box>
      ) : (
        <Box bg="37496A" mt="20" p={7} borderRadius="20px">
          <Heading fontSize={20} color="#37496A">
            NUESTRA DIFERENCIA
          </Heading>
          <Grid gap={5} pt="10">
            <Flex
              bg="#37496A"
              height="100px"
              alignItems="center"
              justifyContent="space-evenly"
              borderRadius="10px"
              color="orange.300"
            >
              <FiSettings fontSize="3rem" />
              <Heading fontSize={18}>Experiencia Propia</Heading>
            </Flex>
            <Flex
              bg="gray.300"
              height="100px"
              alignItems="center"
              justifyContent="space-evenly"
              borderRadius="10px"
              color="#37496A"
            >
              <FiHelpCircle fontSize="3rem" />
              <Heading fontSize={18}>Ayuda Online</Heading>
            </Flex>
            <Flex
              bg="#37496A"
              height="100px"
              alignItems="center"
              justifyContent="space-evenly"
              borderRadius="10px"
              color="orange.300"
            >
              <FiClipboard fontSize="3rem" />
              <Heading fontSize={18}>Esquemas Clave</Heading>
            </Flex>
            <Flex
              bg="gray.300"
              height="100px"
              alignItems="center"
              justifyContent="space-evenly"
              borderRadius="10px"
              color="#37496A"
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
          <Heading fontSize={20} color="#37496A">
            ¿ ALGUNA DUDA O CONSULTA ?
          </Heading>
          <Text color="#37496A" my={10}>
            No dudes en llamarnos o escribirnos. Estaremos encantados de
            ayudarte.
          </Text>
          <Button
            as={NavLink}
            to="/contact"
            bg="#37496A"
            color="whitesmoke"
            border="solid 1px #37496A"
            _hover={{
              color: "whitesmoke",
              bg: "#37496A",
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
          <Heading fontSize={15} color="#37496A">
            ¿ ALGUNA DUDA O CONSULTA ?
          </Heading>
          <Text fontSize={14} color="#37496A" my={10}>
            No dudes en llamarnos o escribirnos. Estaremos encantados de
            ayudarte.
          </Text>
          <Button
            as={NavLink}
            w="30"
            to="/contact"
            bg="#37496A"
            color="whitesmoke"
            border="solid 1px #37496A"
            _hover={{
              color: "#37496A",
              bg: "#37496A",
              transform: "scale(1.05)",
              transition: "transform 500ms",
            }}
          >
            CONTACTO
          </Button>
        </Box>
      )}
      {isDesktop ? (
        <Stack paddingX={100} mb="100px" color="#37496A">
          <Heading color="#37496A">OPINIONES</Heading>
          <Box bg="#37496A"  border="1px" borderRadius="20px" p={6}>
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
          <Heading color="#37496A" fontSize={22}>OPINIONES</Heading>
          <Box bg="#37496A" border="1px" borderRadius="20px" p={6}>
            <Text fontSize={14}>Material y Tests realmente fantástico</Text>
          </Box>
          <Box color="#37496A">
            <Icon></Icon>
            <Text>Ayuda</Text>
          </Box>
          <Box></Box> {/* Función para que cambiando el resultado */}
        </Stack>
      )}
    </Box>
  );
};

export default HomeLounge;
