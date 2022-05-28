import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './globalStyle'
import ContextProvider from './contexts/context';

ReactDOM.render(  
  <BrowserRouter>
    <ContextProvider>
      <GlobalStyle/>
      <App />
    </ContextProvider>
  </BrowserRouter>,  
  document.getElementById('root')
);


