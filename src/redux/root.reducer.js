import { combineReducers } from 'redux';
import { globalReducer } from '../core/global/state/global.reducer';
import { authReducer } from '../core/auth/state/auth.reducer';

const rootReducer = combineReducers({
  global: globalReducer,
  auth: authReducer,
});

export default rootReducer;
