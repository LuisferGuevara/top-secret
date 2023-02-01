import React from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const links = [
  {
    label: 'Sobre nosotros',
    path: '/lounge/about',
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
    label: 'Términos y condiciones',
    path: '/lounge/terms-conditions',
  },
  {
    label: 'Política de cookies',
    path: '/lounge/cookies',
  },
  {
    label: 'B.O.E.',
    path: 'https://www.boe.es/',
    target: '_blank',
  },
  {
    label: 'POLICIA.es',
    path: 'https://www.policia.es/_es/index.php',
    target: '_blank',
  },
];

const LoungeFooter = () => {
  return (
    <Box bg="#edb06d" borderTop={'1px solid #37496A'}>
      <Box
        display="flex"
        padding={'15px'}
        flexDirection={'column-reverse'
        }
        justifyContent="space-around"
        alignItems={'center'}
      >
        <Text
          color={'#37496A'}
          w="100%"
          fontWeight={'medium'}
          fontSize={{
            base: 'sm',
            md: 'sm',
          }}
        >
          Uniforme Azul. Proyecto desarrollado por Rocket 418.
        </Text>
        <Box w="100%" pb="15px" display="flex" justifyContent={'space-evenly'} alignItems="center" color="gray.600">
          {links.map(link =>
            link.target ? (
              <Flex justifyContent={'center'}>
                <Button
                  w={{
                    sm: '3%',
                    md: '7%',
                  }}
                  fontSize={'sm'}
                  color="gray.600"
                  margin="2px"
                  textDecoration={'none'}
                  key={link.path}
                  as="a"
                  target={link.target}
                  variant="link-on-accent"
                  href={link.path}
                >
                  {link.label}
                </Button>
              </Flex>
            ) : (
              <NavLink key={link.path} to={link.path}>
                {link.label}
              </NavLink>
            ),
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default LoungeFooter;
