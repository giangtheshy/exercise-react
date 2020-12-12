import React from 'react';
import ReactDOM from 'react-dom';
import './14-cocktail/index.scss';
import App from './App';
import { AppProvider } from './14-cocktail/context'

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root')
);

