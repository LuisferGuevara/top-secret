import { useColorMode } from "@chakra-ui/react"

const useColor = () => {
  const { colorMode } = useColorMode();

  const setColor = (light, dark) => colorMode === "light" ? light : dark;

  return  {
    setColor,
  }
}

export default useColor;