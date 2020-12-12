import React from 'react';
import ReactDOM from 'react-dom';
import './13-cart/index.scss';
import App from './App';
import { AppProvider } from './13-cart/context'

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root')
);

