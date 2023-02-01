import { Button, Heading, HStack, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Card from "../Card";

const DashboardHome = () => {
  return (
    <>
      <Stack
        spacing="4"
        direction={{ base: 'column', lg: 'row' }}
        justify="space-between"
        align={{ base: 'start', lg: 'center' }}
      >
        <Stack spacing="1">
          <Heading size={{ base: 'xs', lg: 'sm' }} fontWeight="medium">
            Dashboard
          </Heading>
          <Text color="muted">All important metrics at a glance</Text>
        </Stack>
        <HStack spacing="3">
          <Button variant="primary">Algo aquí</Button>
        </HStack>
      </Stack>
      <Stack spacing={{ base: '5', lg: '6' }}>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap="6">
          <Card />
          <Card />
          <Card />
        </SimpleGrid>
        <Card minH="sm" />
      </Stack>
    </>
  )
};

export default DashboardHome;