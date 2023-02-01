import React from 'react';
import * as ReactDOM from 'react-dom/client';
import * as serviceWorker from './config/serviceWorker';
import { store } from './redux/store';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './config/reportWebVitals';
import theme from './theme';
import { Provider } from 'react-redux';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const ReactApp =
  <Provider store={store}>
    <Router>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Router>
  </Provider>

root.render(ReactApp);

serviceWorker.unregister();
reportWebVitals();
