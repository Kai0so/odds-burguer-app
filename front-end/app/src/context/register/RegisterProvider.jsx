import PropTypes from 'prop-types';
import React, { useEffect, useMemo, useState } from 'react';
import RegisterContext from './RegisterContext';

function RegisterProvider({ children }) {
  const [registerData, setRegisterData] = useState({});

  const contextObject = useMemo(() => ({
    registerData, setRegisterData,
  }), [registerData, setRegisterData]);

  useEffect(() => {
    setRegisterData({
      userName: '', email: '', password: '', role: '',
    });
  }, []);

  return (
    <RegisterContext.Provider value={contextObject}>
      {children}
    </RegisterContext.Provider>
  );
}

RegisterProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default RegisterProvider;
