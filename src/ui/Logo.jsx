import useColor from '../hooks/useColor.hook';
import WhiteLogo from '../assets/logo/logotipo-horizontal-blanco.webp';
import DarkLogo from '../assets/logo/logotipo-horizontal-uniforme-azul.webp';
import { Image } from '@chakra-ui/react';

const Logo = (props) => {
  const { setColor: setLogo } = useColor();

  return <Image
    objectFit='contain'
    src={setLogo(DarkLogo, WhiteLogo)}
    {...props}
  />
}

export default Logo;