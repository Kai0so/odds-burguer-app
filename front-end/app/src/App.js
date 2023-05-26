import React from 'react';
import './App.css';
import { Helmet } from 'react-helmet';
import { Route, Routes } from 'react-router-dom';
import CartProvider from './context/cart/CartProvider';
import RegisterProvider from './context/register/RegisterProvider';
import {
  Cart,
  Catalog, Home, Login, Register,
} from './pages/index';
import oddsLogo from './assets/oddslogo.png';

function App() {
  return (
    <RegisterProvider>
      <CartProvider>
        <Helmet>
          <title>Odds Burguer</title>
          <link rel="icon" type="jpg/png" href={oddsLogo} />
        </Helmet>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/catalog" element={<Catalog />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </RegisterProvider>
  );
}

export default App;
