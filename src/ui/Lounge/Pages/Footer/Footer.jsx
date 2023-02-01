import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const links = [
  {
    label: "Sobre nosotros",
    path: "/about",
  },
  /*   {
          label: 'Aviso legal',
          href: '/LegalNotice',
        },
        {
          label: 'Política de privacidad',
          href: '/privacy',
        }, */
  {
    label: "Términos y condiciones",
    path: "/termsconditions",
  },
  {
    label: "Política de cookies",
    path: "/cookies",
  },
  {
    label: "B.O.E.",
    path: "https://www.boe.es/",
    target: "_blank",
  },
  {
    label: "POLICIA.es",
    path: "https://www.policia.es/_es/index.php",
    target: "_blank",
  },
];

const Pie = () => {
  return (
    <Box
      display="flex"
      flexDirection={{
        sm: "column-reverse",
      }}
      justifyContent="space-around"
      alignItems={"center"}
      bg="whitesmoke"
      w="100%"
      borderTop={"2px groove #23375B"}
    >
      <Text
        color={"#2D3748"}
        w="100%"
        fontWeight={"medium"}
        fontSize={{
          base: "sm",
          md: "sm",
        }}
      >
        Uniforme Azul. Proyecto desarrollado por Rocket 418.
      </Text>
      <Box
        w="100%"
        pb="10px"
        display="flex"
        justifyContent={"space-evenly"}
        alignItems="center"
        color="#23375B"
      >
        {links.map((link) =>
          link.target ? (
            <Button
              w={{
                sm: "3%",
                md: "7%",
              }}
              fontSize={"sm"}
              margin="2px"
              textDecoration={"none"}
              key={link.path}
              as="a"
              target={link.target}
              variant="link-on-accent"
              href={link.path}
            >
              {link.label}
            </Button>
          ) : (
            <NavLink key={link.path} to={link.path}>
              {link.label}
            </NavLink>
          )
        )}
      </Box>
    </Box>
  );
};

export default Pie;
