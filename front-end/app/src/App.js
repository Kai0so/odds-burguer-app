import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RegisterProvider from './context/register/RegisterProvider';
import {
  Catalog, Home, Login, Register,
} from './pages/index';

function App() {
  return (
    <RegisterProvider>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/catalog" element={<Catalog />} />
      </Routes>
    </RegisterProvider>
  );
}

export default App;
