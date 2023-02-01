import { DESELECT_ALL, DESELECT_USER, SELECT_USER, SET_USERS } from './questions.types';

const INITIAL_STATE = {
  users: [],
  firstLoad: false,
  selectedUsers: [],
};

export const usersReducer = (state = INITIAL_STATE, action) => {
  const { type, payload: data } = action;

  switch (type) {
    case SET_USERS:
      return { ...state, users: data, firstLoad: true };

    case SELECT_USER:
      return { ...state, selectedUsers: [...new Set([...state.selectedUsers, ...data])] };

    case DESELECT_USER:
      return { ...state, selectedUsers: state.selectedUsers.filter(el => el !== data) };

    case DESELECT_ALL:
      return { ...state, selectedUsers: [] };

    default:
      return state;
  }
};
