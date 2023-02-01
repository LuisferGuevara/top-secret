import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import root from './root.reducer';

const composeEnhancers = composeWithDevTools({ trace: true });

export const store = createStore(
  root,
  composeEnhancers(applyMiddleware(thunk))
);
