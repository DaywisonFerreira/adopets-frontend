import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import GlobalStyle from './styles/global';

import Routes from './routes';

import {AuthProvider} from './hooks/auth';

const App: React.FC = () => (
  <BrowserRouter>
    <AuthProvider>
      <Routes/>
      <ToastContainer autoClose={3000} />
      <GlobalStyle />
    </AuthProvider>
  </BrowserRouter>
)

export default App;
