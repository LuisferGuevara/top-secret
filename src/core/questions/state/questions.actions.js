import { DESELECT_ALL, DESELECT_USER, SELECT_USER, SET_USERS } from './questions.types';
import { store } from '../../../redux/store';
import usersAdapter from '../domain/questions.adapter';
const { dispatch } = store;

export const setUsers = users =>
  dispatch({
    type: SET_USERS,
    payload: users.map(user => usersAdapter(user)),
  });

export const addSelectedUsers = ids =>
  dispatch({
    type: SELECT_USER,
    payload: ids,
  });

export const deselectUser = id =>
  dispatch({
    type: DESELECT_USER,
    payload: id,
  });

export const deselectAllUsers = () => dispatch({ type: DESELECT_ALL });
