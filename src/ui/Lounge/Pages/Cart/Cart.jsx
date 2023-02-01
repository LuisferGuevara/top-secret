import {
  Box,
  Flex,
  Heading,
  HStack,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { CartItem } from "./CartItem";
import { CartOrderSummary } from "./CartOrderSummary";
import { cartData } from "./_data";

export const Cart = () => (
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
    <Stack
      direction={{
        base: "column",
        lg: "row",
      }}
      align={{
        lg: "flex-start",
      }}
      spacing={{
        base: "8",
        md: "16",
      }}
      bg="#ffffffc7"
      borderRadius="20px"
    >
      <Stack
        spacing={{
          base: "8",
          md: "10",
        }}
        flex="2"
        color="black"
        p="20px"
      >
        <Heading fontSize="2xl" fontWeight="extrabold">
          Mi Cesta (3)
        </Heading>
        <Stack spacing="6">
          {cartData.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </Stack>
      </Stack>
      <Flex flexDirection="column" alignItems="center" flex="1" color="black">
        <CartOrderSummary />
        <HStack mt="10" fontWeight="semibold">
          <p>o</p>
          <NavLink to="/shop" color={mode("blue.500", "blue.200")}>
            Seguir comprando
          </NavLink>
        </HStack>
      </Flex>
    </Stack>
  </Box>
);
