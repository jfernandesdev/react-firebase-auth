import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles  from './styles/globals'

import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
