import React from 'react';
import ReactDOM from 'react-dom';
import './12-stripe/index.scss';
import App from './App';
import { AppProvider } from './12-stripe/context'

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root')
);

