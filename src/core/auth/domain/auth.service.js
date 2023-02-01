import { http } from '../../global/services';
import { cleanUser, setUser } from '../state/auth.actions';

const API = {
  login: '/auth/login',
  register: '/auth/register',
  checkSession: '/auth/session',
  status: '/auth/status',
  logout: '/auth/logout',
};

export const register = async (user, notify) =>
  http
    .post(API.register, user, { spinner: 'register' })
    .then(res => (res.error ? notify.error(res) : setUser(res)))
    .catch(error => notify.error(error));

export const login = async (credentials, notify) =>
  http
    .post(API.login, credentials, { spinner: 'login' })
    .then(res => {
      if (res.error) {
        notify.error(res);
        return res.error;
      }
      setUser(res);
      return res;
    })
    .catch(notify.error);

export const checkSession = async notify =>
  http
    .get(API.checkSession, { spinner: 'checkSession' })
    .then(res => {
      if (res.error) return res.error;
      setUser(res);
      return res;
    })
    .catch(notify.error);

export const logout = async notify =>
  http
    .post(API.logout, null, { spinner: 'logout' })
    .then(res => {
      if (res.error) {
        notify.error(res);
        return res.error;
      }
      setUser(res);
      return res;
    })
    .catch(notify.error);
