import { useToast } from '@chakra-ui/react';

const useNotify = () => {
  const toast = useToast();

  const launch = (status, title, description) =>
    toast({
      containerStyle: { opacity: 0.7 },
      title,
      status,
      description,
      variant: 'top-accent',
      duration: 5000,
      isClosable: true,
    });

  const success = message => launch('success', 'Todo va bien', message);
  const error = error => launch('error', 'Ha ocurrido un error', error.message);
  const warning = message => launch('warning', 'Warning', message);

  return {
    success,
    error,
    warning,
  };
};

export default useNotify;
