import { ERROR, SET_USER } from './auth.types';
import authAdapter from '../domain/auth.adapter';
import { store } from '../../../redux/store';
const { dispatch } = store;

export const setUser = user =>
  dispatch({
    type: SET_USER,
    payload: {
      user: authAdapter(user),
      error: null,
    },
  });

export const cleanUser = () =>
  dispatch({
    type: SET_USER,
    payload: { user: null, error: null },
  });

export const setError = error =>
  dispatch({
    type: ERROR,
    payload: {
      error: error ? error : null,
    },
  });
