import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import PasswordRecovery from '../pages/PasswordRecovery';
import SendEmail from '../pages/SendEmail';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import CreateAccount from '../pages/CreateAccount';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import NotFound from '../pages/NotFound';
import '../styles/global.css';
import AppContex from '../context/AppContext'
import useInitialState from '../hooks/useInitialState';

const App = () => {
  const initialState = useInitialState();
	return (
    <AppContex.Provider value={initialState}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>} />
              <Route path="login" element={<Login/>} />
              <Route path="password-recovery" element={<PasswordRecovery/>} />
              <Route path="send-email" element={<SendEmail/>} />
              <Route path="new-password" element={<NewPassword/>} />
              <Route path="account" element={<MyAccount/>} />
              <Route path="signup" element={<CreateAccount/>} />
              <Route path="checkout" element={<Checkout/>} />
              <Route path="orders" element={<Orders/>} />
              <Route path="*" element={<NotFound/>} />
            </Route>
          </Routes>
      </BrowserRouter>
    </AppContex.Provider>
	);
}

export default App;
