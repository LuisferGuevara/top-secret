import { useSelector } from 'react-redux';
import useError from '../../../hooks/useError.hook';
import useNotify from '../../../hooks/useNotify.hook';
import { addSelectedUsers, deselectAllUsers, deselectUser } from '../state/questions.actions';
import * as service from './users.service';

const usersUseCases = () => {
  const { users, firstLoad } = useSelector(state => state.users);
  const { showError } = useError();
  const notify = useNotify();

  const fetchUsers = () =>
    !firstLoad ? service.getUsersFromApi(notify) : showError('Parece que hay un problema con la conexión a internet');

  const filterBy = (filter, fields) => service.filterByFields(filter, fields, users);
  const select = id => addSelectedUsers([id]);
  const deselect = id => deselectUser(id);
  const selectAll = users => addSelectedUsers(users.map(user => user.id));
  const deselectAll = () => deselectAllUsers();

  return {
    fetchUsers,
    select,
    deselect,
    selectAll,
    deselectAll,
    filterBy,
  };
};

export default usersUseCases;
