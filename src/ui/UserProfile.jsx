import { Avatar, Box, HStack, Text } from '@chakra-ui/react'

const UserProfile = (props) => {
  const { name, image, email } = props
  return (
    <HStack spacing="3" ps="2">
      <Avatar name={name} src={image} boxSize="10" />
      <Box>
        <Text color="on-accent" fontWeight="medium" fontSize="sm">
          {name}
        </Text>
        <Text color="on-accent-muted" fontSize="sm">
          {email}
        </Text>
      </Box>
    </HStack>
  )
}

export default UserProfile;