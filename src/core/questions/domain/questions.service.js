import { http } from '../../global/services';
import { users } from '../../../utils/mocks/users';
import { setUsers } from '../state/questions.actions';

const API = {
  users: '/users',
};

export const getUsersFromApi = notify =>
  http
    .mock(API.users, users, { spinner: 'users' })
    .then(res => (res.error ? notify.error('Error obteniendo usuarios') : setUsers(res)))
    .catch(error => notify.error(error));

export const filterByFields = (filter, fields, users) => {
  return users.filter(user => fields.some(field => user[field] && user[field].includes(filter)));
};