import { setError } from '../core/auth/state/auth.actions';
import useNotify from './useNotify.hook';

const useError = () => {
  const notify = useNotify();

  const showError = error => {
    setError(error);
    // notify.error(error);
  };

  const clearError = () => {
    setError(null);
  };

  return { showError, clearError };
};

export default useError;
