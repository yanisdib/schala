import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './services/redux/store/configureStore';

import reportWebVitals from './reportWebVitals';
import AppRouter from './routers/AppRouter';

import './assets/styles/styles.scss';


const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
