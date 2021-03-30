import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Global } from './GlobalStyles';
 

ReactDOM.render(
  <>
    <Global />
    <App />
  </>,
  document.getElementById('root')
);

