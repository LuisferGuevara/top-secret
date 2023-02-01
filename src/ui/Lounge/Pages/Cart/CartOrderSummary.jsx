import {
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { formatPrice } from "./PriceTag";
const OrderSummaryItem = (props) => {
  const { label, value, children } = props;
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={mode("gray.600", "gray.400")}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
  );
};

export const CartOrderSummary = () => {
  return (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
      <Heading size="md">Resúmen del pedido</Heading>

      <Stack spacing="6">
        <OrderSummaryItem label="Subtotal" value={formatPrice(120.0)} />
        <OrderSummaryItem label="Envío">
          <Link href="#" textDecor="underline">
            Calcular envío
          </Link>
        </OrderSummaryItem>
        <OrderSummaryItem label="Código descuento?">
          <Link href="#" textDecor="underline">
            Añadir
          </Link>
        </OrderSummaryItem>
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Total
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
            {formatPrice(120.0)}
          </Text>
        </Flex>
      </Stack>
      <Button
        as={NavLink}
        to="/payment"
        colorScheme="blue"
        size="lg"
        fontSize="md"
        _hover={{
                  bg: "white",
                  transform:"scale(1.05)",
                  transition:"transform 500ms"
                }}
      >
        Tramitar pago
      </Button>
    </Stack>
  );
};
