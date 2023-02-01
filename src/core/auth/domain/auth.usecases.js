import { useNavigate } from 'react-router';
import useNotify from '../../../hooks/useNotify.hook';
import * as service from './auth.service';

const authUseCases = () => {
  const navigate = useNavigate();
  const notify = useNotify();

  const login = async credentials => ((await service.login(credentials, notify)) ? navigate('/dashboard/home') : null);

  const register = async user => {
    const created = await service.register(user, notify);
    return created ? navigate('/dashboard/home') : null;
  };

  const checkUserSession = () => service.checkSession(notify);

  const logout = async () => {
    const loggedOut = await service.logout(notify);
    console.log('loggedOut', loggedOut);
    return loggedOut ? navigate('/auth/login') : null;
  };

  return {
    login,
    register,
    checkUserSession,
    logout,
  };
};

export default authUseCases;
